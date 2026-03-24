import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Eye, EyeOff, ArrowRight, ShieldCheck, CheckCircle, Smartphone } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TESTIMONIALS = [
  { text: "Love the integrations with Calendar, Zoom and WhatsApp. Makes my life easier!", author: "Aishwarya Srinivasan", role: "Maths Teacher" },
  { text: "TutorMate is my go-to platform for scheduling 1:1 tuition and hosting live classes!", author: "Xinran Waibel", role: "Physics Tutor" },
  { text: "The entire experience is just so seamless. My students love it!", author: "Joerg Storm", role: "IIT JEE Mentor" },
  { text: "I love TutorMate! It has made it seamless to schedule mentoring sessions!", author: "Jessica", role: "Coding Teacher" },
  { text: "All my monetisation now happens in one place. Simple, elegant, powerful.", author: "Payal & Gaurav", role: "Board Prep Tutors" },
  { text: "The team is extremely helpful and cares a lot about feedback.", author: "Lorraine Lee", role: "Education Specialist" },
];

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Signup attempt:", formData);
    alert("Signup successful! Welcome to TutorMate.");
    window.location.href = '/dashboard';
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', overflow: 'hidden', background: 'var(--bg-clean)', fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      
      {/* ── LEFT: SIGNUP FORM ── */}
      <div style={{ flex: 1.2, padding: '180px 80px 80px', background: 'var(--bg-white)', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: '20px 0 50px rgba(0,0,0,0.02)', position: 'relative', zIndex: 1, borderRight: '1px solid var(--border-light)' }}>
         <div style={{ maxWidth: 520, margin: '0 auto', width: '100%' }}>
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
            >
               <h1 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--text-strong)', marginBottom: 12, fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.04em' }}>Join <span className="text-gradient-primary">TutorMate</span></h1>
               <p style={{ color: 'var(--text-medium)', fontSize: '1.25rem', marginBottom: 48, fontWeight: 500, lineHeight: 1.6 }}>Start your tutor journey in seconds. <br /> Join 300,000+ teachers scaling globally.</p>
            </motion.div>
            
            <div style={{ display: 'flex', gap: 16, marginBottom: 32 }}>
               <SocialButton icon="https://www.google.com/favicon.ico" label="Continue with Google" />
               <SocialButton icon="https://www.linkedin.com/favicon.ico" label="Continue with LinkedIn" />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 32 }}>
               <div style={{ flex: 1, height: 1, background: 'var(--border-light)' }}></div>
               <span style={{ fontSize: '0.9rem', color: 'var(--text-subtle)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>or use email</span>
               <div style={{ flex: 1, height: 1, background: 'var(--border-light)' }}></div>
            </div>

            <form onSubmit={handleSignUp} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
               <div style={{ display: 'flex', gap: 24 }}>
                  <InputGroup label="First Name" placeholder="First name" value={formData.firstName} onChange={v => setFormData({...formData, firstName: v})} />
                  <InputGroup label="Last Name" placeholder="Last name" value={formData.lastName} onChange={v => setFormData({...formData, lastName: v})} />
               </div>
               <InputGroup label="Email Address" type="email" placeholder="name@example.com" value={formData.email} onChange={v => setFormData({...formData, email: v})} />
               <div style={{ position: 'relative' }}>
                  <InputGroup label="Password" type={showPassword ? 'text' : 'password'} placeholder="Create a secure password" value={formData.password} onChange={v => setFormData({...formData, password: v})} />
                  <div 
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ position: 'absolute', right: 20, top: 56, cursor: 'pointer', color: 'var(--text-subtle)' }}
                  >
                     {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                  </div>
               </div>

               <button className="btn btn-cta" style={{ 
                 padding: '22px', 
                 borderRadius: 24, 
                 fontSize: '1.25rem', 
                 fontWeight: 900, 
                 marginTop: 16,
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 gap: 12
               }}>
                 Create My Account <ArrowRight size={24} />
               </button>
            </form>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-subtle)', marginTop: 32, textAlign: 'center', lineHeight: 1.6, fontWeight: 500 }}>
               By signing up, you agree to our <a href="#" style={{ color: 'var(--text-strong)', fontWeight: 700, textDecoration: 'none' }}>Terms of Use</a> and <a href="#" style={{ color: 'var(--text-strong)', fontWeight: 700, textDecoration: 'none' }}>Privacy Policy</a>.
            </p>
         </div>
         
         <div style={{ marginTop: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, padding: '24px', background: 'var(--bg-soft-grey)', borderRadius: 24, border: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-subtle)', fontSize: '0.85rem', fontWeight: 700 }}>
               <ShieldCheck size={18} color="var(--primary-blue)" /> GDPR Compliant
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-subtle)', fontSize: '0.85rem', fontWeight: 700 }}>
               <CheckCircle size={18} color="var(--mint-green)" /> Verified Tutors
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-subtle)', fontSize: '0.85rem', fontWeight: 700 }}>
               <Smartphone size={18} color="var(--cta-orange)" /> 24x7 Support
            </div>
         </div>
      </div>

      {/* ── RIGHT: TESTIMONIAL WALL ── */}
      <div style={{ 
        flex: 1, 
        background: 'var(--bg-clean)', 
        padding: '120px 40px', 
        display: 'flex', 
        gap: 32,
        overflow: 'hidden',
        position: 'relative'
      }}>
         {/* Vertical Marquee Columns */}
         <div style={{ position: 'absolute', top: 0, bottom: 0, left: 40, right: 40, display: 'flex', gap: 32 }}>
            <MarqueeColumn items={TESTIMONIALS} duration={50} />
            <MarqueeColumn items={TESTIMONIALS} duration={40} delay={-5} />
         </div>
         
         {/* Fading Edge Mask */}
         <div style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'linear-gradient(to bottom, var(--bg-clean), transparent 15%, transparent 85%, var(--bg-clean))',
            pointerEvents: 'none',
            zIndex: 10
         }}></div>
      </div>
    </div>
  );
};

const SocialButton = ({ icon, label }) => (
  <button className="btn btn-white" style={{ 
    flex: 1, 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: 12, 
    padding: '18px', 
    borderRadius: 20, 
    fontSize: '1rem',
    fontWeight: 800,
    border: '1px solid var(--border-light)',
    boxShadow: 'var(--shadow-subtle)'
  }}>
    <img src={icon} alt="" style={{ width: 20, height: 20 }} />
    {label}
  </button>
);

const InputGroup = ({ label, placeholder, type = 'text', value, onChange }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
     <label style={{ fontSize: '0.95rem', fontWeight: 900, color: 'var(--text-strong)' }}>{label}</label>
     <input 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{ 
          padding: '20px', 
          borderRadius: 20, 
          border: '2px solid var(--border-light)', 
          background: 'var(--bg-soft-grey)',
          fontSize: '1.1rem', 
          fontWeight: 700,
          outline: 'none',
          color: 'var(--text-strong)',
          transition: 'all 0.2s'
        }}
        onFocus={e => {
           e.target.style.borderColor = 'var(--primary-blue)';
           e.target.style.background = 'var(--bg-white)';
           e.target.style.boxShadow = '0 0 0 4px var(--soft-blue)';
        }}
        onBlur={e => {
           e.target.style.borderColor = 'var(--border-light)';
           e.target.style.background = 'var(--bg-soft-grey)';
           e.target.style.boxShadow = 'none';
        }}
     />
  </div>
);

const MarqueeColumn = ({ items, duration, delay = 0 }) => (
  <motion.div 
    animate={{ y: [0, -1200] }}
    transition={{ repeat: Infinity, duration, ease: 'linear', delay }}
    style={{ display: 'flex', flexDirection: 'column', gap: 32, flex: 1 }}
  >
     {[...items, ...items, ...items].map((t, i) => (
       <div key={i} style={{ 
          background: 'var(--bg-white)', 
          padding: 40, 
          borderRadius: 32, 
          boxShadow: 'var(--shadow-subtle)',
          border: '1px solid var(--border-light)'
       }}>
          <div style={{ display: 'flex', gap: 6, color: 'var(--rating-star)', marginBottom: 20 }}>
             {[1,2,3,4,5].map(star => <Star key={star} size={18} fill="currentColor" />)}
          </div>
          <p style={{ fontSize: '1.15rem', fontWeight: 600, lineHeight: 1.6, marginBottom: 24, color: 'var(--text-strong)' }}>"{t.text}"</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
             <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--primary-blue)', border: '3px solid white' }}>
                <img src={`https://i.pravatar.cc/100?u=${t.author}`} alt="" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
             </div>
             <div>
                <div style={{ fontSize: '1rem', fontWeight: 900, color: 'var(--text-strong)' }}>{t.author}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', fontWeight: 700 }}>{t.role}</div>
             </div>
          </div>
       </div>
     ))}
  </motion.div>
);

export default SignUp;
