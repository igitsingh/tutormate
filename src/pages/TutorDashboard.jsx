import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, TrendingUp, DollarSign, Package, Video, MessageCircle, 
  Calendar, Star, Plus, MoreHorizontal, Edit2, Trash2, Eye,
  ChevronRight, ArrowUpRight, CheckCircle, Globe
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ApiService } from '../services/api';
import { AuthService } from '../services/auth';

const TutorDashboard = () => {
  const user = AuthService.getCurrentUser();
  const [tutor, setTutor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      setLoading(true);
      const data = await ApiService.getTutorById('1');
      setTutor(data);
      setLoading(false);
    };
    fetchDashboard();
  }, [user]);

  if (loading) return <div style={{ paddingTop: 140, textAlign: 'center' }}>Loading Dashboard...</div>;
  if (!tutor) return <div style={{ paddingTop: 140, textAlign: 'center' }}>Error loading profile</div>;

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: "'Outfit', sans-serif" }}>
      <Navbar />
      
      <div style={{ maxWidth: 1400, margin: '0 auto', paddingTop: 140, paddingBottom: 100, paddingLeft: 60, paddingRight: 60 }}>
         
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 48 }}>
            <div>
               <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1a1a1a', marginBottom: 8 }}>Hello, {tutor.name.split(' ')[0]}! 👋</h1>
               <p style={{ color: '#64748b', fontSize: '1.1rem', fontWeight: 600 }}>Your storefront is live and growing. Here's your performance.</p>
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
               <button 
                  onClick={() => window.location.href = `/profile/${tutor.id}`}
                  style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'white', color: '#1a1a1a', border: '1px solid #e2e8f0', padding: '12px 24px', borderRadius: 16, fontWeight: 700, cursor: 'pointer' }}>
                  <Globe size={18}/> View Live Page
               </button>
               <button 
                  onClick={() => window.location.href = '/create-service'}
                  style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#1a1a1a', color: 'white', border: 'none', padding: '12px 24px', borderRadius: 16, fontWeight: 700, cursor: 'pointer' }}>
                  <Plus size={18}/> Add Service
               </button>
            </div>
         </div>

         {/* STATS OVERVIEW */}
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginBottom: 48 }}>
            <DashboardStat label="Total Earnings" value={`₹${(tutor.reviews * tutor.price).toLocaleString()}`} icon={<DollarSign color="#10b981"/>} trend="+15%" />
            <DashboardStat label="Active Services" value={tutor.services.length} icon={<Package color="#6366f1"/>} />
            <DashboardStat label="Profile Views" value="2.4k" icon={<Eye color="#f43f5e"/>} trend="+24%" />
            <DashboardStat label="Average Rating" value={tutor.rating} icon={<Star color="#fbbf24" fill="#fbbf24"/>} />
         </div>

         {/* MAIN CONTENT GRID */}
         <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 32 }}>
            
            {/* SERVICE MANAGEMENT */}
            <div style={{ background: 'white', borderRadius: 32, padding: 40, border: '1px solid #f1f5f9' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Managed Services</h3>
                  <div style={{ color: '#3b82f6', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer' }}>Manage All</div>
               </div>
               <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {tutor.services.map(s => (
                    <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '20px', borderRadius: 24, background: '#f8fafc', border: '1px solid #f1f5f9' }}>
                       <div style={{ width: 48, height: 48, borderRadius: 12, background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a1a1a' }}>
                          {s.type === '1:1 Session' ? <Video size={20}/> : <Package size={20}/>}
                       </div>
                       <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: 800, color: '#1a1a1a' }}>{s.title}</div>
                          <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>{s.type} • ₹{s.price}</div>
                       </div>
                       <div style={{ display: 'flex', gap: 12 }}>
                          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}><Edit2 size={16}/></div>
                          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f43f5e' }}><Trash2 size={16}/></div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* UPCOMING BOOKINGS / ACTIVITY */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
               <div style={{ background: 'white', borderRadius: 32, padding: 32, border: '1px solid #f1f5f9' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: 24 }}>Upcoming Bookings</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                     <BookingItem name="Aryan Khanna" service="Strategy Call" time="Today, 4:00 PM" />
                     <BookingItem name="Isha Malhotra" service="Resume Review" time="Tomorrow, 11:30 AM" />
                  </div>
                  <button style={{ width: '100%', marginTop: 24, padding: '12px', borderRadius: 12, border: '1px solid #e2e8f0', background: 'transparent', fontWeight: 700, color: '#475569', cursor: 'pointer' }}>View Calendar</button>
               </div>

               <div style={{ background: '#1a1a1a', borderRadius: 32, padding: 32, color: 'white' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: 12 }}>Pro Tip 💡</h3>
                  <p style={{ opacity: 0.7, fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 20 }}>Adding a specific "Mock Interview" service increases conversions by up to 40% for career experts.</p>
                  <button style={{ background: '#3b82f6', color: 'white', border: 'none', padding: '12px 20px', borderRadius: 12, fontWeight: 700, cursor: 'pointer' }}>Create Now</button>
               </div>
            </div>

         </div>

      </div>
      <Footer />
    </div>
  );
};

const DashboardStat = ({ label, value, icon, trend }) => (
  <div style={{ background: 'white', borderRadius: 24, padding: 32, border: '1px solid #f1f5f9', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <div style={{ width: 44, height: 44, borderRadius: 12, background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</div>
        {trend && <span style={{ color: '#10b981', fontSize: '0.85rem', fontWeight: 800 }}>{trend}</span>}
     </div>
     <div style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{label}</div>
     <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#1a1a1a' }}>{value}</div>
  </div>
);

const BookingItem = ({ name, service, time }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
     <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#ffedd5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#9a3412', fontSize: '0.9rem' }}>{name[0]}</div>
     <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 800, color: '#1a1a1a', fontSize: '0.95rem' }}>{name}</div>
        <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>{service} • {time}</div>
     </div>
     <div style={{ color: '#3b82f6', cursor: 'pointer' }}><ChevronRight size={18}/></div>
  </div>
);

export default TutorDashboard;
