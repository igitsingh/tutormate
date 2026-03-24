import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Gift, Share2, Users, IndianRupee, Copy, CheckCircle } from 'lucide-react';

const Referral = () => {
    return (
        <div style={{ paddingTop: 120, paddingBottom: 100, minHeight: '100vh', background: '#f8fafc', fontFamily: "'Inter', sans-serif" }}>
            <Navbar />
            
            <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ background: 'white', padding: 64, borderRadius: 48, boxShadow: '0 20px 50px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}
                >
                    <div style={{ width: 100, height: 100, borderRadius: '50%', background: '#fff1f2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff5a5f', margin: '0 auto 32px' }}>
                        <Gift size={48} />
                    </div>
                    
                    <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: 16, fontFamily: "'Outfit', sans-serif" }}>Share the Gift of Learning</h1>
                    <p style={{ fontSize: '1.25rem', color: '#64748b', fontWeight: 600, marginBottom: 48 }}>
                        Invite a friend to find their perfect tutor on MA TUTORS. They get ₹50 off their first class, and you get ₹50 in your wallet!
                    </p>

                    <div style={{ background: '#f8fafc', padding: 32, borderRadius: 32, border: '2px dashed #e2e8f0', marginBottom: 48 }}>
                        <p style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>Your Unique Invite Code</p>
                        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0f172a', letterSpacing: '0.2em' }}>MEERUT50</div>
                            <button style={{ background: '#0f172a', color: 'white', border: 'none', padding: '12px 24px', borderRadius: 16, fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                                <Copy size={18} /> Copy
                            </button>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
                        <Step icon={<Share2 />} title="Share Link" desc="Send your code to friends & family" />
                        <Step icon={<Users />} title="Friend Joins" desc="They book their first demo class" />
                        <Step icon={<IndianRupee />} title="Get Rewarded" desc="₹50 instantly added to your wallet" />
                    </div>

                    <div style={{ marginTop: 64, paddingTop: 48, borderTop: '1px solid #f1f5f9' }}>
                        <button style={{ background: '#25d366', color: 'white', border: 'none', padding: '20px 48px', borderRadius: 24, fontWeight: 800, fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12, margin: '0 auto' }}>
                           Share on WhatsApp
                        </button>
                    </div>
                </motion.div>
                
                <p style={{ marginTop: 32, fontSize: '0.85rem', color: '#94a3b8', fontWeight: 600 }}>
                    *Terms & conditions apply. Rewards can be used for booking fees and tuition payments.
                </p>
            </div>
        </div>
    );
};

const Step = ({ icon, title, desc }) => (
    <div>
        <div style={{ color: '#ff5a5f', marginBottom: 16, display: 'flex', justifyContent: 'center' }}>{icon}</div>
        <h4 style={{ fontWeight: 800, fontSize: '1rem', marginBottom: 8 }}>{title}</h4>
        <p style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 500, lineHeight: 1.4 }}>{desc}</p>
    </div>
);

export default Referral;
