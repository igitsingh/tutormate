import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Lock, ArrowRight, Github, Chrome, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { AuthService } from '../services/auth';

const Login = () => {
  const [step, setStep] = React.useState('phone'); // phone or otp
  const [phone, setPhone] = React.useState('');
  const [otp, setOtp] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleSendOtp = async () => {
    if (!phone) return alert("Please enter a phone number");
    setLoading(true);
    await AuthService.sendOtp(phone);
    setLoading(false);
    setStep('otp');
  };

  const handleVerifyOtp = async () => {
    if (!otp) return alert("Please enter the OTP");
    setLoading(true);
    const result = await AuthService.verifyOtp(phone, otp);
    setLoading(false);
    if (result.success) {
      window.location.href = result.user.role === 'TUTOR' ? '/dashboard' : '/marketplace';
    } else {
      alert("Invalid OTP. Try 123456");
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'var(--bg-clean)',
      fontFamily: "'Inter', sans-serif"
    }}>
      <Navbar />
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingTop: 180, 
        paddingBottom: 100 
      }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            width: '100%',
            maxWidth: 480,
            background: 'var(--bg-white)',
            borderRadius: 48,
            padding: 64,
            boxShadow: 'var(--shadow-hover)',
            border: '1px solid var(--border-light)',
            textAlign: 'center'
          }}
        >
          <div style={{
            width: 80,
            height: 80,
            background: step === 'phone' ? 'var(--soft-blue)' : 'var(--soft-green)',
            borderRadius: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: step === 'phone' ? 'var(--primary-blue)' : 'var(--mint-green)',
            margin: '0 auto 32px'
          }}>
            {step === 'phone' ? <Smartphone size={40} /> : <Lock size={40} />}
          </div>

          <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: 16, color: 'var(--text-strong)', fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.02em' }}>
            {step === 'phone' ? 'Welcome Back' : 'Security Check'}
          </h1>
          <p style={{ color: 'var(--text-medium)', fontWeight: 600, marginBottom: 48, fontSize: '1.1rem', lineHeight: 1.5 }}>
            {step === 'phone' ? 'Enter your phone to securely access your Tutormate account.' : `We've sent a 6-digit verification code to ${phone}`}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
             {step === 'phone' ? (
                <div style={{ position: 'relative' }}>
                    <Smartphone size={20} style={{ position: 'absolute', left: 24, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-subtle)' }} />
                    <input 
                    type="tel" 
                    placeholder="+91 Mobile Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '20px 20px 20px 60px',
                        borderRadius: 20,
                        border: '2px solid var(--border-light)',
                        background: 'var(--bg-soft-grey)',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        outline: 'none',
                        color: 'var(--text-strong)',
                        transition: 'all 0.2s'
                    }}
                    />
                </div>
             ) : (
                <div style={{ position: 'relative' }}>
                    <Lock size={20} style={{ position: 'absolute', left: 24, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-subtle)' }} />
                    <input 
                    type="text" 
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '20px 20px 20px 60px',
                        borderRadius: 20,
                        border: '2px solid var(--soft-green)',
                        background: 'var(--bg-soft-grey)',
                        fontSize: '1.4rem',
                        fontWeight: 900,
                        letterSpacing: '0.5em',
                        outline: 'none',
                        color: 'var(--text-strong)'
                    }}
                    />
                </div>
             )}

             <button 
               onClick={step === 'phone' ? handleSendOtp : handleVerifyOtp}
               disabled={loading}
               className={step === 'phone' ? "btn btn-primary" : "btn btn-cta"}
               style={{
                width: '100%',
                padding: 20,
                borderRadius: 20,
                fontWeight: 900,
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 12,
                opacity: loading ? 0.7 : 1,
                cursor: 'pointer'
              }}>
                {loading ? 'Processing...' : step === 'phone' ? 'Send OTP' : 'Complete Login'} <ArrowRight size={20} />
              </button>
          </div>

          <div style={{ marginTop: 40, paddingTop: 32, borderTop: '1px solid var(--border-light)' }}>
             <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-subtle)' }}>
                {step === 'phone' ? (
                    <>Don't have an account? <a href="/signup" style={{ color: 'var(--primary-blue)', textDecoration: 'none', fontWeight: 800 }}>Join Tutormate</a></>
                ) : (
                    <>Didn't get the code? <button onClick={handleSendOtp} style={{ color: 'var(--primary-blue)', border: 'none', background: 'none', fontWeight: 800, cursor: 'pointer', fontSize: '1rem' }}>Resend code</button></>
                )}
             </p>
          </div>
          
          <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, color: 'var(--text-subtle)', fontSize: '0.85rem', fontWeight: 700 }}>
             <ShieldCheck size={16} /> 256-bit encrypted secure login
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
