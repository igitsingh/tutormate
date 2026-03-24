import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthService } from '../services/auth';

const SelectRole = () => {
    const user = AuthService.getCurrentUser();
    const [loading, setLoading] = React.useState(false);

    const handleSelectRole = async (role) => {
        setLoading(true);
        try {
            const response = await fetch('/api/auth/select-role', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId: user._id, role })
            });
            const data = await response.json();
            if (data.success) {
                // Update local storage
                const updatedUser = { ...user, role: data.user.role };
                localStorage.setItem('tutormate_user', JSON.stringify(updatedUser));
                window.location.href = updatedUser.role === 'tutor' ? '/dashboard' : '/marketplace';
            }
        } catch (error) {
            console.error("Error selecting role:", error);
        }
        setLoading(false);
    };

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-clean)' }}>
            <Navbar />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 180, paddingBottom: 100 }}>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ maxWidth: 800, width: '100%', textAlign: 'center', padding: '0 20px' }}
                >
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--text-strong)', marginBottom: 24 }}>How do you want to use <span className="text-gradient-primary">TutorMate</span>?</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-medium)', marginBottom: 64, fontWeight: 600 }}>Choose your role to get started with the right experience.</p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
                        {/* STUDENT CARD */}
                        <motion.div 
                            whileHover={{ y: -10 }}
                            onClick={() => handleSelectRole('student')}
                            style={{ background: 'var(--bg-white)', padding: 48, borderRadius: 40, border: '1px solid var(--border-light)', cursor: 'pointer', textAlign: 'left', boxShadow: 'var(--shadow-subtle)' }}
                        >
                            <div style={{ width: 64, height: 64, background: 'var(--soft-blue)', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-blue)', marginBottom: 32 }}>
                                <GraduationCap size={32} />
                            </div>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-strong)', marginBottom: 16 }}>I'm a Student</h3>
                            <p style={{ color: 'var(--text-medium)', lineHeight: 1.6, marginBottom: 32 }}>I want to find expert tutors, book classes, and access learning materials.</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--primary-blue)', fontWeight: 800 }}>Explore Marketplace <ArrowRight size={18} /></div>
                        </motion.div>

                        {/* TUTOR CARD */}
                        <motion.div 
                            whileHover={{ y: -10 }}
                            onClick={() => handleSelectRole('tutor')}
                            style={{ background: 'var(--text-strong)', padding: 48, borderRadius: 40, border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', textAlign: 'left', boxShadow: 'var(--shadow-hover)' }}
                        >
                            <div style={{ width: 64, height: 64, background: 'rgba(255,255,255,0.1)', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: 32 }}>
                                <Users size={32} />
                            </div>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'white', marginBottom: 16 }}>I'm a Tutor</h3>
                            <p style={{ color: 'var(--text-subtle)', lineHeight: 1.6, marginBottom: 32 }}>I want to create my teaching storefront, sell classes, and grow my brand.</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--mint-green)', fontWeight: 800 }}>Build My Page <ArrowRight size={18} /></div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default SelectRole;
