/**
 * MA TUTORS Smart Pricing Engine
 * Dynamically calculates lead prices based on market demand, subject popularity, and location.
 */

const DEMAND_MULTIPLIERS = {
    'Mathematics': 1.5,
    'Physics': 1.4,
    'JEE': 1.8,
    'NEET': 1.8,
    'Coding': 1.6,
    'English': 1.2,
    'Music': 0.8,
    'History': 0.8
};

const LOCATION_MULTIPLIERS = {
    'Delhi': 1.3,
    'Mumbai': 1.4,
    'Bangalore': 1.3,
    'Pune': 1.1,
    'Online': 1.0,
    'Rural': 0.7
};

export const getLeadPrice = (subject, location = 'Online') => {
    const basePrice = 99; // Base price for a standard lead
    
    // Find matching multipliers or use default (1.0)
    const subjectKey = Object.keys(DEMAND_MULTIPLIERS).find(k => subject?.includes(k)) || 'English';
    const locationKey = Object.keys(LOCATION_MULTIPLIERS).find(k => location?.includes(k)) || 'Online';
    
    const sMult = DEMAND_MULTIPLIERS[subjectKey] || 1.0;
    const lMult = LOCATION_MULTIPLIERS[locationKey] || 1.0;
    
    // Calculate final price and round to nearest 9
    let finalPrice = basePrice * sMult * lMult;
    
    // Round to nearest "psychological" price (ending in 9)
    return Math.round(finalPrice / 10) * 10 - 1;
};

export const getDemoBookingFee = (tutorTier) => {
    if (tutorTier === 'Elite') return 149; // Higher commitment for top tutors
    if (tutorTier === 'Pro') return 99;
    return 49;
};
