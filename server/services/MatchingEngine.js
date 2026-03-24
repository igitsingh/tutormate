const Tutor = require('../models/Tutor');
const Match = require('../models/Match');

class MatchingEngine {
  /**
   * Main entry point to find matches for a student request
   */
  static async findMatches(request) {
    // 1. Initial Filtering (Subject & Mode)
    // We only consider tutors who teach the subject and match the mode (online/offline)
    const query = {
      subjects: { $in: [request.subject] },
      classLevels: { $in: [request.classLevel] }
    };

    if (request.mode === 'offline') {
      query.$or = [{ mode: 'offline' }, { mode: 'both' }];
    } else if (request.mode === 'online') {
      query.$or = [{ mode: 'online' }, { mode: 'both' }];
    }

    const tutors = await Tutor.find(query);
    
    // 2. Score mapping
    const scoredTutors = tutors.map(tutor => {
      let score = 0;

      // Subject Match (40%) - Since we filtered, base score is high
      // If exact subject match in first position or specialized, full 40
      score += 40; 

      // Location Proximity (20%)
      if (request.mode === 'offline' && request.location && tutor.location) {
        const dist = this.calculateDistance(
          request.location.coordinates[1], request.location.coordinates[0],
          tutor.location.coordinates[1], tutor.location.coordinates[0]
        );
        // within 5km is perfect (20), 5-10km (10), >10km (0)
        if (dist <= 5) score += 20;
        else if (dist <= 10) score += 10;
      } else {
        // If online or mode matches, give default location score boost (e.g., 15)
        score += 15;
      }

      // Budget Fit (15%)
      if (request.budget) {
        if (tutor.pricingPerHour <= request.budget) {
          score += 15;
        } else if (tutor.pricingPerHour <= request.budget * 1.2) {
          score += 7; // Partial match if slightly over budget
        }
      } else {
        score += 10; // Neutral if no budget specified
      }

      // Rating (10%)
      if (tutor.rating >= 4.5) score += 10;
      else if (tutor.rating >= 4.0) score += 7;
      else if (tutor.rating >= 3.5) score += 4;

      // Experience (10%)
      if (tutor.experience >= 10) score += 10;
      else if (tutor.experience >= 5) score += 7;
      else if (tutor.experience >= 2) score += 4;

      // Response Time (5%)
      if (tutor.responseTime <= 15) score += 5;
      else if (tutor.responseTime <= 60) score += 3;

      // Verification Boost
      if (tutor.verificationStatus) score += 5;

      return {
        tutor: tutor._id,
        tutorInfo: tutor,
        matchScore: Math.min(score, 100)
      };
    });

    // 3. Sort by score and take top 5
    return scoredTutors
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 5);
  }

  // Helper: Haversine distance for coordinates
  static calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }
}

module.exports = MatchingEngine;
