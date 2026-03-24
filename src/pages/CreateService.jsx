import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Video, Package, MessageCircle, Clock, ChevronRight, Check } from 'lucide-react';
import Navbar from '../components/Navbar';

const CreateService = () => {
  const [step, setStep] = useState(1);
  const [type, setType] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    duration: '',
    description: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div style={{ backgroundColor: '#fff0e5', minHeight: '100vh', fontFamily: "'Outfit', sans-serif" }}>
      <Navbar />
      
      <div style={{ maxWidth: 800, margin: '0 auto', paddingTop: 140, paddingBottom: 100, paddingLeft: 40, paddingRight: 40 }}>
         
         <button 
           onClick={() => window.history.back()}
           style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'white', border: '1px solid #e2e8f0', padding: '10px 16px', borderRadius: 12, fontWeight: 700, cursor: 'pointer', marginBottom: 40 }}
         >
            <ArrowLeft size={18}/> Back to Dashboard
         </button>

         <div style={{ background: 'white', borderRadius: 32, padding: 48, boxShadow: '0 20px 60px rgba(0,0,0,0.05)' }}>
            
            {/* PROGRESS BAR */}
            <div style={{ display: 'flex', gap: 12, marginBottom: 48 }}>
               <div style={{ flex: 1, height: 6, background: step >= 1 ? '#1a1a1a' : '#f1f5f9', borderRadius: 3 }} />
               <div style={{ flex: 1, height: 6, background: step >= 2 ? '#1a1a1a' : '#f1f5f9', borderRadius: 3 }} />
               <div style={{ flex: 1, height: 6, background: step >= 3 ? '#1a1a1a' : '#f1f5f9', borderRadius: 3 }} />
            </div>

            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                 <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 12 }}>What are you offering?</h2>
                 <p style={{ color: '#64748b', fontSize: '1.2rem', marginBottom: 40 }}>Select the type of service you want to monetize.</p>
                 
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                    <TypeCard icon={<Video size={32}/>} title="1:1 Session" desc="Personal meeting with calendar sync" active={type === 'session'} onClick={() => {setType('session'); nextStep();}} />
                    <TypeCard icon={<Check size={32}/>} title="Live Workshop" desc="Group event with participants" active={type === 'workshop'} onClick={() => {setType('workshop'); nextStep();}} />
                    <TypeCard icon={<Package size={32}/>} title="Digital Product" desc="Sell e-books, files or links" active={type === 'product'} onClick={() => {setType('product'); nextStep();}} />
                    <TypeCard icon={<MessageCircle size={32}/>} title="Priority DM" desc="Text-based priority support" active={type === 'dm'} onClick={() => {setType('dm'); nextStep();}} />
                 </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                 <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 12 }}>Service Details</h2>
                 <p style={{ color: '#64748b', fontSize: '1.2rem', marginBottom: 40 }}>Give your service a catchy title and description.</p>
                 
                 <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                    <div>
                       <label style={{ display: 'block', fontWeight: 800, marginBottom: 10, fontSize: '0.9rem', color: '#64748b', textTransform: 'uppercase' }}>Service Title</label>
                       <input placeholder="e.g. 1:1 Math Tutoring (Grade 10)" style={inputStyle} value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
                    </div>
                    <div>
                       <label style={{ display: 'block', fontWeight: 800, marginBottom: 10, fontSize: '0.9rem', color: '#64748b', textTransform: 'uppercase' }}>Description</label>
                       <textarea placeholder="Tell students what to expect..." style={{ ...inputStyle, minHeight: 120, resize: 'none' }} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
                    </div>
                    <div style={{ display: 'flex', gap: 20, marginTop: 20 }}>
                       <button onClick={prevStep} style={{ flex: 1, padding: '20px', borderRadius: 16, border: '1px solid #e2e8f0', background: 'white', fontWeight: 800, cursor: 'pointer' }}>Back</button>
                       <button onClick={nextStep} style={{ flex: 2, padding: '20px', borderRadius: 16, border: 'none', background: '#1a1a1a', color: 'white', fontWeight: 800, cursor: 'pointer' }}>Next</button>
                    </div>
                 </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                 <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 12 }}>Pricing & Logistics</h2>
                 <p style={{ color: '#64748b', fontSize: '1.2rem', marginBottom: 40 }}>Set your price and duration.</p>
                 
                 <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                       <div>
                          <label style={{ display: 'block', fontWeight: 800, marginBottom: 10, fontSize: '0.9rem', color: '#64748b', textTransform: 'uppercase' }}>Price (₹)</label>
                          <input placeholder="499" style={inputStyle} value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} />
                       </div>
                       <div>
                          <label style={{ display: 'block', fontWeight: 800, marginBottom: 10, fontSize: '0.9rem', color: '#64748b', textTransform: 'uppercase' }}>Duration</label>
                          <input placeholder="45 mins" style={inputStyle} value={formData.duration} onChange={e => setFormData({...formData, duration: e.target.value})} />
                       </div>
                    </div>
                    <div style={{ marginTop: 40, borderTop: '1px solid #f1f5f9', paddingTop: 40 }}>
                       <button 
                          onClick={() => {alert('Service Created Successfully!'); window.location.href='/dashboard';}}
                          style={{ width: '100%', padding: '24px', borderRadius: 20, border: 'none', background: '#10b981', color: 'white', fontWeight: 900, fontSize: '1.2rem', cursor: 'pointer', boxShadow: '0 20px 40px rgba(16, 185, 129, 0.2)' }}
                       >
                          Complete & Launch Storefront
                       </button>
                    </div>
                 </div>
              </motion.div>
            )}

         </div>

      </div>
    </div>
  );
};

const TypeCard = ({ icon, title, desc, active, onClick }) => (
  <div 
    onClick={onClick}
    style={{ padding: 24, borderRadius: 20, border: active ? '2px solid #1a1a1a' : '1px solid #e2e8f0', background: active ? '#f8fafc' : 'white', cursor: 'pointer', transition: 'all 0.2s' }}
  >
     <div style={{ width: 64, height: 64, borderRadius: 16, background: active ? '#1a1a1a' : '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', color: active ? 'white' : '#1a1a1a', marginBottom: 20 }}>
        {icon}
     </div>
     <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 4 }}>{title}</h4>
     <p style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: 600, lineHeight: 1.4 }}>{desc}</p>
  </div>
);

const inputStyle = {
  width: '100%',
  padding: '16px 20px',
  borderRadius: 16,
  border: '1px solid #e2e8f0',
  fontSize: '1.1rem',
  fontWeight: 600,
  outline: 'none',
  transition: 'border-color 0.2s'
};

export default CreateService;
