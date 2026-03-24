import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { 
    BarChart3, 
    TrendingUp, 
    DollarSign, 
    Users, 
    ArrowUpRight, 
    ArrowDownRight,
    Map,
    Target,
    Activity,
    IndianRupee
} from 'lucide-react';

import { ApiService } from '../services/api';
import { useEffect, useState } from 'react';

const AdminRevenue = () => {
    const [metrics, setMetrics] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMetrics = async () => {
            setLoading(true);
            const data = await ApiService.getRevenueMetrics();
            setMetrics(data);
            setLoading(false);
        };
        fetchMetrics();
    }, []);

    if (loading) return (
        <div style={{ paddingTop: 160, textAlign: 'center', minHeight: '100vh', background: '#0f172a', color: 'white' }}>
            <Navbar />
            <h2 style={{ fontSize: '2rem', fontWeight: 900 }}>Accessing Secure Metrics...</h2>
        </div>
    );

    return (
        <div style={{ paddingTop: 120, paddingBottom: 100, minHeight: '100vh', background: '#0f172a', color: 'white', fontFamily: "'Inter', sans-serif" }}>
            <Navbar />
            
            <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 48 }}>
                    <div>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, fontFamily: "'Outfit', sans-serif", color: 'white' }}>Platform Revenue Overview</h1>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>Real-time monetization metrics for MA TUTORS India</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px 24px', borderRadius: 16, border: '1px solid rgba(255,255,255,0.1)' }}>
                        <span style={{ fontWeight: 700, opacity: 0.7 }}>Reporting Period: </span>
                        <span style={{ fontWeight: 800 }}>Last 30 Days</span>
                    </div>
                </div>

                {/* Main Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginBottom: 48 }}>
                    <AdminStatCard label="Total Revenue" value={`₹${metrics.total_revenue.toLocaleString()}`} trend="+14.2%" up />
                    <AdminStatCard label="Monthly Recurring" value={`₹${metrics.mrr.toLocaleString()}`} trend="+8.4%" up />
                    <AdminStatCard label="Paid Leads Sold" value={metrics.leads_sold.toLocaleString()} trend="+22.1%" up />
                    <AdminStatCard label="Active Tutors" value={metrics.active_tutors} trend="+12.4%" up />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 32 }}>
                    {/* Revenue by Subject */}
                    <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 48, padding: 48, border: '1px solid rgba(255,255,255,0.1)' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: 32, display: 'flex', alignItems: 'center', gap: 12 }}>
                            <Target size={24} style={{ color: '#ff5a5f' }} /> Subject Profitability
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                            <SubjectBar label="Mathematics" amount="₹2,10,000" percent={85} color="#3b82f6" />
                            <SubjectBar label="Physics" amount="₹1,85,000" percent={75} color="#8b5cf6" />
                            <SubjectBar label="Coding (Java/Python)" amount="₹1,42,000" percent={60} color="#10b981" />
                            <SubjectBar label="NEET Biology" amount="₹98,000" percent={45} color="#f59e0b" />
                            <SubjectBar label="English Speaking" amount="₹72,000" percent={30} color="#ec4899" />
                        </div>
                    </div>

                    {/* Growth Metrics */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 40, padding: 40, border: '1px solid rgba(255,255,255,0.1)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: 24 }}>Unit Economics</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                                <MetricItem label="Tutor CAC" value="₹450" />
                                <MetricItem label="Tutor LTV (6mo)" value="₹3,800" highlight />
                                <MetricItem label="Student CAC" value="₹120" />
                                <MetricItem label="Payback Period" value="14 Days" />
                            </div>
                        </div>

                        <div style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', borderRadius: 40, padding: 40, border: '1px solid rgba(255,255,255,0.1)', position: 'relative', overflow: 'hidden' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: 8, color: '#10b981' }}>Network Health</h3>
                            <p style={{ opacity: 0.6, fontSize: '0.9rem', marginBottom: 24 }}>Marketplace efficiency score</p>
                            <div style={{ fontSize: '3rem', fontWeight: 900 }}>94/100</div>
                            <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 8, color: '#10b981', fontWeight: 700 }}>
                                <TrendingUp size={18} /> Optimized
                            </div>
                            <Activity size={100} style={{ position: 'absolute', right: -20, bottom: -20, opacity: 0.05 }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AdminStatCard = ({ label, value, trend, up }) => (
    <div style={{ background: 'rgba(255,255,255,0.03)', padding: 32, borderRadius: 32, border: '1px solid rgba(255,255,255,0.1)' }}>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 600, fontSize: '0.9rem', marginBottom: 8 }}>{label}</p>
        <div style={{ fontSize: '2rem', fontWeight: 900, marginBottom: 12 }}>{value}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: up ? '#10b981' : '#f43f5e', fontWeight: 800, fontSize: '0.9rem' }}>
            {up ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
            {trend}
        </div>
    </div>
);

const SubjectBar = ({ label, amount, percent, color }) => (
    <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, fontWeight: 700 }}>
            <span>{label}</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>{amount}</span>
        </div>
        <div style={{ height: 12, background: 'rgba(255,255,255,0.05)', borderRadius: 6, overflow: 'hidden' }}>
            <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${percent}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ height: '100%', background: color, borderRadius: 6 }} 
            />
        </div>
    </div>
);

const MetricItem = ({ label, value, highlight }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontWeight: 600, opacity: 0.6 }}>{label}</span>
        <span style={{ fontWeight: 900, fontSize: '1.1rem', color: highlight ? '#10b981' : 'white' }}>{value}</span>
    </div>
);

export default AdminRevenue;
