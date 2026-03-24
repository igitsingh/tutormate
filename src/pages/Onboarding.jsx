import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft, Upload, Smartphone, MapPin, Award, User, Target } from 'lucide-react';
import Navbar from '../components/Navbar';

const Onboarding = () => {
    const [step, setStep] = useState(1);
    const totalSteps = 4;
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '',
        subjects: [], certs: '', exp: '', bio: '', price: ''
    });

    const nextStep = () => setStep(s => Math.min(s + 1, totalSteps));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));

    return (
        <div style={{ paddingTop: 180, paddingBottom: 100, minHeight: '100vh', background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)', fontFamily: "'Inter', sans-serif" }}>
            <Navbar />
            <div className="container max-w-4xl flex gap-16 flex-col md:flex-row">
                
                {/* Onboarding Sidebar */}
                <div className="hidden md:block w-72 shrink-0">
                    <div style={{ position: 'sticky', top: 160 }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: 32, fontFamily: "'Outfit', sans-serif" }}>Apply as a Tutor</h2>
                        <div className="flex flex-col gap-6">
                            <StepIndicator step={1} current={step} title="Basic Info" />
                            <StepIndicator step={2} current={step} title="Expertise" />
                            <StepIndicator step={3} current={step} title="Professional Profile" />
                            <StepIndicator step={4} current={step} title="Verification" />
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="form-card glass-card p-12 rounded-[48px] bg-white shadow-2xl relative">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div key="s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    <h3 className="text-3xl font-extrabold mb-8">Introduce Yourself</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="input-field">
                                            <label>Full Name</label>
                                            <input type="text" placeholder="Gautam Singh" className="onboard-input" />
                                        </div>
                                        <div className="input-field">
                                            <label>Email Address</label>
                                            <input type="email" placeholder="gautam@example.com" className="onboard-input" />
                                        </div>
                                        <div className="input-field col-span-2">
                                            <label>Phone Number</label>
                                            <input type="tel" placeholder="+91" className="onboard-input" />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div key="s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    <h3 className="text-3xl font-extrabold mb-8">What is your niche?</h3>
                                    <div className="flex flex-wrap gap-4 mb-12">
                                        {['Mathematics', 'Physics', 'Coding', 'Music', 'History', 'English'].map(s => (
                                            <div key={s} className="subject-chip p-4 rounded-2xl border-2 border-gray-100 hover:border-primary cursor-pointer flex center gap-3 font-bold group">
                                               <Check size={16} className="text-transparent group-hover:text-primary" /> {s}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="input-field">
                                        <label>Preferred Classes</label>
                                        <div className="flex gap-2">
                                           {['6-10', '11-12', 'JEE/NEET', 'College'].map(c => <span key={c} className="p-3 bg-gray-50 rounded-xl border border-gray-200 cursor-pointer font-bold text-sm">{c}</span>)}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div key="s3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    <h3 className="text-3xl font-extrabold mb-8">Showcase your skills</h3>
                                    <div className="input-field mb-6">
                                        <label>Years of Experience</label>
                                        <input type="number" placeholder="5" className="onboard-input" />
                                    </div>
                                    <div className="input-field mb-6">
                                        <label>Pricing per Hour (₹)</label>
                                        <input type="number" placeholder="800" className="onboard-input" />
                                    </div>
                                    <div className="input-field">
                                        <label>Professional Bio</label>
                                        <textarea rows="4" placeholder="Tell students about your teaching style..." className="onboard-input resize-none h-32"></textarea>
                                    </div>
                                </motion.div>
                            )}

                            {step === 4 && (
                                <motion.div key="s4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    <h3 className="text-3xl font-extrabold mb-8">Trust & Verification</h3>
                                    <p className="text-muted mb-8">Upload a valid ID or Degree to get the "Verified" badge.</p>
                                    
                                    <div className="upload-container p-12 border-4 border-dashed border-gray-100 rounded-[32px] text-center hover:border-primary transition-all">
                                        <Upload className="mx-auto text-primary mb-6" size={48} />
                                        <h4 className="font-bold text-xl mb-2">Drop your ID Front + Back</h4>
                                        <p className="text-sm text-muted">PDF, JPG, PNG (Max 5MB)</p>
                                        <button className="btn btn-outline mt-8 font-bold border-2">Select Files</button>
                                    </div>
                                    
                                    <div className="flex center gap-4 p-6 bg-blue-50 text-blue-700 rounded-2xl mt-8">
                                        <Award size={24} />
                                        <p className="font-bold text-sm">Verified tutors get 4x more inquiries on MA TUTORS.</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="flex between mt-16 pt-8 border-t border-gray-100">
                             <button className={`btn p-4 rounded-2xl font-bold flex center gap-2 ${step === 1 ? 'invisible' : 'bg-gray-100'}`} onClick={prevStep}><ChevronLeft size={20} /> Back</button>
                             <button className="btn grad-primary text-white !px-12 !py-4 rounded-2xl font-bold flex center gap-2 hover:opacity-90" onClick={step === totalSteps ? () => window.location.href = '/' : nextStep}>{step === totalSteps ? 'Submit Application' : 'Next Step'} <ChevronRight size={20} /></button>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .onboard-input {
                    display: block; width: 100%; padding: 16px 24px; border-radius: 16px; border: 1px solid #eee; background: #fafafa; font-size: 1.1rem; font-weight: 500;
                }
                .onboard-input:focus { border-color: var(--primary); background: white; outline: none; }
                .input-field label { display: block; font-weight: 700; margin-bottom: 8px; font-size: 0.95rem; color: #4b5563; }
                .subject-chip { transition: all 0.2s; }
                .subject-chip:hover { border-color: var(--primary); transform: scale(1.02); }
            `}</style>
        </div>
    );
}

const StepIndicator = ({ step, current, title }) => {
    const isActive = step === current;
    const isCompleted = step < current;
    
    return (
        <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 16, 
            opacity: isActive || isCompleted ? 1 : 0.4,
            transition: 'all 0.3s ease'
        }}>
            <div style={{ 
                width: 40, 
                height: 40, 
                borderRadius: 14, 
                background: isCompleted ? '#10b981' : (isActive ? '#ff5a5f' : '#e2e8f0'),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 800,
                fontSize: '0.9rem'
            }}>
                {isCompleted ? <Check size={20} /> : step}
            </div>
            <span style={{ fontWeight: isActive ? 800 : 700, fontSize: '1rem', color: isActive ? '#0f172a' : '#64748b' }}>{title}</span>
        </div>
    );
};

export default Onboarding;
