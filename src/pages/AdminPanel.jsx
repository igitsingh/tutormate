import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, TrendingUp, ShieldCheck, Mail, Search, MoreVertical, Check, X, Filter } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ApiService } from '../services/api';

const AdminPanel = () => {
  const [metrics, setMetrics] = useState(null);
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [m, t] = await Promise.all([
        ApiService.getRevenueMetrics(),
        ApiService.getTutors()
      ]);
      setMetrics(m);
      setTutors(t);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <div style={{ paddingTop: 120, textAlign: 'center' }}>Loading Admin Dashboard...</div>;

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      
      <div style={{ maxWidth: 1400, margin: '0 auto', paddingTop: 140, paddingBottom: 100, paddingLeft: 60, paddingRight: 60 }}>
         
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 48 }}>
            <div>
               <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1e293b', marginBottom: 8 }}>Admin Dashboard</h1>
               <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Welcome back, superuser. Here's what's happening today.</p>
            </div>
            <button style={{ background: '#1e293b', color: 'white', border: 'none', padding: '12px 24px', borderRadius: 12, fontWeight: 700, cursor: 'pointer' }}>Generate Report</button>
         </div>

         {/* STAT CARDS */}
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginBottom: 48 }}>
            <MetricCard title="Total Revenue" value={`₹${metrics.total_revenue.toLocaleString()}`} icon={<DollarSign color="#10b981"/>} trend="+12.5%" />
            <MetricCard title="Active Tutors" value={metrics.active_tutors} icon={<Users color="#6366f1"/>} trend="+4" />
            <MetricCard title="New Signups" value={metrics.new_signups} icon={<TrendingUp color="#f43f5e"/>} trend="+8%" />
            <MetricCard title="Pending" value={metrics.pending_verifications} icon={<ShieldCheck color="#f59e0b"/>} />
         </div>

         {/* MAIN TABLE */}
         <div style={{ background: 'white', borderRadius: 24, padding: 32, boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #f1f5f9' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
               <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Manage Tutors</h3>
               <div style={{ display: 'flex', gap: 12 }}>
                  <div style={{ position: 'relative' }}>
                     <Search size={18} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                     <input placeholder="Search name..." style={{ padding: '10px 16px 10px 40px', borderRadius: 12, border: '1px solid #e2e8f0', outline: 'none', fontSize: '0.9rem' }} />
                  </div>
                  <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px', borderRadius: 12, border: '1px solid #e2e8f0', background: 'white', fontWeight: 600, color: '#475569' }}>
                     <Filter size={18}/> Filters
                  </button>
               </div>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
               <thead>
                  <tr style={{ textAlign: 'left', borderBottom: '1px solid #f1f5f9' }}>
                     <th style={{ padding: '16px 0', color: '#94a3b8', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase' }}>Tutor</th>
                     <th style={{ padding: '16px 0', color: '#94a3b8', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase' }}>Tier</th>
                     <th style={{ padding: '16px 0', color: '#94a3b8', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase' }}>Reviews</th>
                     <th style={{ padding: '16px 0', color: '#94a3b8', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase' }}>Revenue</th>
                     <th style={{ padding: '16px 0', color: '#94a3b8', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase' }}>Status</th>
                     <th style={{ padding: '16px 0', color: '#94a3b8', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase' }}>Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {tutors.map(t => (
                     <tr key={t.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '20px 0' }}>
                           <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                              <img src={t.photo} alt="" style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover' }} />
                              <div>
                                 <div style={{ fontWeight: 700, color: '#1e293b' }}>{t.name}</div>
                                 <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{t.organization}</div>
                              </div>
                           </div>
                        </td>
                        <td style={{ padding: '20px 0' }}>
                           <span style={{ padding: '4px 10px', background: t.tier === 'Elite' ? '#dcfce7' : '#f1f5f9', color: t.tier === 'Elite' ? '#166534' : '#64748b', borderRadius: 8, fontSize: '0.75rem', fontWeight: 800 }}>{t.tier}</span>
                        </td>
                        <td style={{ padding: '20px 0', fontWeight: 600, color: '#475569' }}>{t.reviews}</td>
                        <td style={{ padding: '20px 0', fontWeight: 700, color: '#1e293b' }}>₹{(t.reviews * t.price).toLocaleString()}</td>
                        <td style={{ padding: '20px 0' }}>
                           <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#10b981', fontWeight: 700, fontSize: '0.85rem' }}>
                              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }}></div> Active
                           </div>
                        </td>
                        <td style={{ padding: '20px 0' }}>
                           <div style={{ display: 'flex', gap: 8 }}>
                              <button style={{ width: 32, height: 32, borderRadius: 8, border: 'none', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Check size={16} color="#10b981"/></button>
                              <button style={{ width: 32, height: 32, borderRadius: 8, border: 'none', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><X size={16} color="#f43f5e" /></button>
                              <button style={{ width: 32, height: 32, borderRadius: 8, border: 'none', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><MoreVertical size={16}/></button>
                           </div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>

      </div>
      <Footer />
    </div>
  );
};

const MetricCard = ({ title, value, icon, trend }) => (
  <div style={{ background: 'white', borderRadius: 24, padding: 32, boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #f1f5f9' }}>
     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
        <div style={{ width: 48, height: 48, borderRadius: 12, background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           {icon}
        </div>
        {trend && <span style={{ color: trend.startsWith('+') ? '#10b981' : '#f43f5e', fontSize: '0.85rem', fontWeight: 800 }}>{trend}</span>}
     </div>
     <div style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: 8 }}>{title}</div>
     <div style={{ fontSize: '2rem', fontWeight: 900, color: '#1e293b' }}>{value}</div>
  </div>
);

export default AdminPanel;
