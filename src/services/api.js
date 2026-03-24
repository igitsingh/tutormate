/**
 * TutorMate Centralized API Service
 * 🚀 Transitioning to Expert Storefront Architecture (Master Product Map)
 */

const delay = () => new Promise(res => setTimeout(res, 300));

const TUTOR_DATA = [
  {
    id: '1',
    name: 'Saurav Chaudhary',
    organization: 'TutorMate Verified Tutor',
    rating: 4.8,
    reviews: 120,
    price: 499,
    location: 'Meerut',
    bio: 'Professional educator in career roadmap planning and personality development with over 10 years of experience. Helping Gen-Z students build high-impact careers in tech and business.',
    subjects: ['Career Planning', 'Public Speaking', 'Personality Development'],
    tier: 'Elite',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    isFeatured: true,
    services: [
      { id: 's1', type: '1:1 Class', title: 'Career Strategy Call', price: 499, duration: '45 mins', icon: 'Video', description: 'Personalized roadmap for your studies & career.' },
      { id: 's2', type: 'Live Class', title: 'Public Speaking Workshop', price: 1999, duration: '2 hours', icon: 'Video', description: 'Master the art of impact communication.' },
      { id: 's3', type: 'Digital Product', title: 'Resume Growth Template', price: 199, icon: 'Package', description: 'The exact template that got my students into high-growth roles.' }
    ]
  },
  {
    id: '2',
    name: 'Farhan Ali',
    organization: 'Top Sales Tutor',
    rating: 4.9,
    reviews: 85,
    price: 999,
    location: 'Jaipur',
    bio: 'Sales strategist and business teacher. I help students and sales professionals master high-ticket deals through psychological selling techniques.',
    subjects: ['Sales Strategy', 'Business Growth', 'Negotiation'],
    tier: 'Pro',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    services: [
      { id: 's1', type: '1:1 Class', title: 'Sales Funnel Audit', price: 999, duration: '60 mins', icon: 'Video', description: 'Deep dive into your sales process.' },
      { id: 's2', type: 'Course Bundle', title: 'High-Ticket Closer Pack', price: 4999, icon: 'Package', description: 'Complete set of templates and video guides.' }
    ]
  },
  {
    id: '3',
    name: 'Vanesa Fernande',
    organization: 'Product Marketing Tutor',
    rating: 4.7,
    reviews: 64,
    price: 799,
    location: 'Remote',
    bio: 'Teacher in GTM strategies and product-led growth. Learn how to launch products that users actually love.',
    subjects: ['Product Marketing', 'Growth Hacking', 'GTM Strategy'],
    tier: 'Elite',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    services: [
      { id: 's1', type: '1:1 Class', title: 'GTM Review', price: 799, duration: '45 mins', icon: 'Video', description: 'Actionable feedback on your launch plan.' },
      { id: 's2', type: 'Digital Product', title: 'The PLG Playbook', price: 299, icon: 'Package', description: 'Step-by-step guide to product-led growth.' }
    ]
  }
];

export const ApiService = {
  getTutors: async (filters = {}) => {
    await delay();
    let filtered = [...TUTOR_DATA];
    if (filters.subject && filters.subject !== 'All Subjects' && filters.subject !== 'All Tutors') {
      filtered = filtered.filter(t => t.subjects.includes(filters.subject));
    }
    if (filters.location) {
      filtered = filtered.filter(t => t.location.toLowerCase() === filters.location.toLowerCase());
    }
    return filtered;
  },

  getTutorById: async (id) => {
    await delay();
    return TUTOR_DATA.find(t => t.id === id.toString());
  },

  getRevenueMetrics: async () => {
    await delay();
    return {
      total_revenue: 1245000,
      active_tutors: 450,
      new_signups: 24,
      pending_verifications: 12
    };
  }
};
