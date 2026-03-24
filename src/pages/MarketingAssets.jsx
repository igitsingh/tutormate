import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Copy, MessageSquare, Instagram, Layout, Send, Book } from 'lucide-react';

const MarketingAssets = () => {
    return (
        <div style={{ paddingTop: 120, paddingBottom: 100, minHeight: '100vh', background: '#f8fafc', fontFamily: "'Inter', sans-serif" }}>
            <Navbar />
            
            <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>
                <div style={{ marginBottom: 48 }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: 16, fontFamily: "'Outfit', sans-serif" }}>Growth Asset Vault</h1>
                    <p style={{ fontSize: '1.1rem', color: '#64748b', fontWeight: 600 }}>Ready-to-use scripts and hooks for Meerut expansion.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
                    <AssetCard 
                        icon={<MessageSquare color="#25d366" />} 
                        title="Tutor Acquisition (DM/WhatsApp)" 
                        content='Hi, we’re building MA TUTORS — a platform connecting top tutors in Meerut with high-quality students. We’re onboarding local experts (free elite leads included). Interested in getting more students directly?' 
                    />
                    
                    <AssetCard 
                        icon={<Instagram color="#e1306c" />} 
                        title="Instagram Reel Hooks" 
                        items={[
                            "Top 5 Maths Tutors in Meerut you didn't know about...",
                            "Stop searching! The best Meerut home tutors are here.",
                            "Struggling with Board Exams? This Meerut secret helps."
                        ]}
                    />

                    <AssetCard 
                        icon={<Send color="#3b82f6" />} 
                        title="Student Broadcast (WhatsApp)" 
                        content='Looking for a home tutor in Meerut? Get a FREE demo class with verified experts in Maths, Science & Coding. Exclusive to Meerut parents. Reply with subject to get matched!' 
                    />

                    <AssetCard 
                        icon={<Book color="#ff5a5f" />} 
                        title="School Flyer Hook" 
                        content='MA TUTORS: The #1 Choice for Meerut Students. Verified Home Tutors. Free Demo. Guaranteed Results.' 
                    />
                </div>
            </div>
        </div>
    );
};

const AssetCard = ({ icon, title, content, items }) => (
    <div style={{ background: 'white', padding: 32, borderRadius: 32, border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
            <div style={{ background: '#f8fafc', padding: 12, borderRadius: 16 }}>{icon}</div>
            <h3 style={{ fontWeight: 800, fontSize: '1.1rem' }}>{title}</h3>
        </div>
        
        {content && (
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 16, border: '1px solid #f1f5f9', position: 'relative' }}>
                <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.6, fontWeight: 500, margin: 0 }}>{content}</p>
                <button style={{ position: 'absolute', top: 12, right: 12, background: 'white', border: '1px solid #e2e8f0', padding: '4px 8px', borderRadius: 8, cursor: 'pointer' }}>
                    <Copy size={14} />
                </button>
            </div>
        )}

        {items && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {items.map((item, i) => (
                    <div key={i} style={{ padding: '12px 16px', background: '#f8fafc', borderRadius: 12, fontSize: '0.85rem', fontWeight: 600, color: '#4b5563', border: '1px solid #f1f5f9' }}>
                        {item}
                    </div>
                ))}
            </div>
        )}
    </div>
);

export default MarketingAssets;
