import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Star, ShieldCheck, MapPin, Search, ChevronRight, MessageCircle, 
  Clock, Video, Book, Award, Calendar, CheckCircle, Smartphone, Lock,
  Share2, ArrowLeft, MoreHorizontal, Zap, Package, ChevronDown, ArrowRight,
  Target, Rocket, Instagram, Linkedin, Twitter, ExternalLink, Globe, Users, Heart
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import { ApiService } from '../services/api';

const TutorProfile = () => {
  const { id } = useParams();
  const [tutor, setTutor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const fetchTutor = async () => {
      setLoading(true);
      const data = await ApiService.getTutorById(id);
      setTutor(data);
      if (data && data.services) setSelectedService(data.services[0]);
      setLoading(false);
    };
    fetchTutor();
  }, [id]);

  if (loading) return <LoadingState />;
  if (!tutor) return <NotFoundState />;

  return (
    <div style={{ backgroundColor: '#fff0e5', minHeight: '100vh', fontFamily: "'Outfit', sans-serif" }}>
      <Navbar />
      
      <div style={{ maxWidth: 1200, margin: '0 auto', paddingTop: 140, paddingBottom: 100, paddingLeft: 40, paddingRight: 40 }}>
        
        {/* TWO-COLUMN LAYOUT */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.8fr', gap: 60, alignItems: 'flex-start' }}>
           
           {/* LEFT COLUMN: MAIN CONTENT */}
           <div>
              {/* PROFILE OVERVIEW */}
              <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', marginBottom: 48 }}>
                 <div style={{ width: 140, height: 140, borderRadius: 32, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', flexShrink: 0 }}>
                    <img src={tutor.photo} alt={tutor.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>
                 <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                       <h1 style={{ fontSize: '2.8rem', fontWeight: 800, margin: 0, color: '#1a1a1a' }}>{tutor.name}</h1>
                       <div style={{ width: 24, height: 24, background: '#3b82f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                          <CheckCircle size={16} fill="white" color="#3b82f6" />
                       </div>
                    </div>
                    <p style={{ fontSize: '1.2rem', color: '#64748b', fontWeight: 600, marginBottom: 20 }}>{tutor.organization}</p>
                    <div style={{ display: 'flex', gap: 16 }}>
                       <SocialIcon icon={<Globe size={18}/>} />
                       <SocialIcon icon={<Linkedin size={18}/>} />
                       <SocialIcon icon={<Twitter size={18}/>} />
                       <SocialIcon icon={<Instagram size={18}/>} />
                    </div>
                 </div>
              </div>

              {/* STATS STRIP */}
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 48, background: 'white', borderRadius: 24, padding: 24, boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                  <StatItem value={tutor.rating} label={`${tutor.reviews} reviews`} icon={<Star size={18} fill="#fbbf24" color="#fbbf24" />} />
                  <StatItem value="5000+" label="Students Helped" icon={<Users size={18} color="#6366f1" />} />
                  <StatItem value="98%" label="Satisfaction" icon={<Heart size={18} color="#f43f5e" />} />
               </div>

              {/* BIO / ABOUT */}
              <div style={{ marginBottom: 48 }}>
                 <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 16 }}>About the Tutor</h3>
                 <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: 1.6, marginBottom: 24 }}>{tutor.bio}</p>
                 <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    {tutor.subjects.map(s => <Tag key={s} label={s} />)}
                 </div>
              </div>

              {/* SERVICES GRID */}
              <div style={{ marginBottom: 60 }}>
                 <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 28 }}>Classes & Resources</h3>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20 }}>
                    {tutor.services?.map(s => (
                       <ServiceCard 
                          key={s.id} 
                          service={s} 
                          isSelected={selectedService?.id === s.id}
                          onClick={() => setSelectedService(s)}
                       />
                    ))}
                 </div>
              </div>

               {/* TESTIMONIALS MINI SLIDER */}
               <div style={{ background: '#1a1a1a', borderRadius: 32, padding: 40, color: 'white' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
                     <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0 }}>Student Reviews</h3>
                     <div style={{ display: 'flex', gap: 8 }}>
                        <div style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ArrowLeft size={18}/></div>
                        <div style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ArrowRight size={18}/></div>
                     </div>
                  </div>
                  <p style={{ fontSize: '1.25rem', fontStyle: 'italic', fontWeight: 500, lineHeight: 1.6, marginBottom: 24 }}>
                     "{tutor.name}'s guidance helped me score 95+ in my Physics boards. The doubt sessions were incredibly clear!"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                     <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#ccc' }}></div>
                     <div>
                        <div style={{ fontWeight: 800 }}>Roshni Sharma</div>
                        <div style={{ fontSize: '0.85rem', opacity: 0.6 }}>Class 12 Student</div>
                     </div>
                  </div>
               </div>
           </div>

           {/* RIGHT COLUMN: STICKY CHECKOUT */}
           <div style={{ position: 'sticky', top: 140 }}>
              <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 style={{ background: 'white', borderRadius: 40, padding: 40, boxShadow: '0 30px 60px rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.05)' }}
              >
                  <div style={{ marginBottom: 32 }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>Selected Offering</div>
                    <h4 style={{ fontSize: '1.6rem', fontWeight: 800, margin: 0 }}>{selectedService?.title}</h4>
                    <p style={{ color: '#64748b', marginTop: 12, fontWeight: 500 }}>{selectedService?.description}</p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 40 }}>
                     <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                        <span style={{ fontSize: '2.8rem', fontWeight: 900 }}>₹{selectedService?.price}</span>
                     </div>
                     <span style={{ color: '#10b981', fontWeight: 800, fontSize: '0.9rem' }}>Verified Payment</span>
                  </div>

                   <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#475569', fontWeight: 700 }}>
                         <Clock size={20} /> Instant Booking
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#475569', fontWeight: 700 }}>
                         <Video size={20} /> Join Live Class
                      </div>
                   </div>

                   <button style={{ width: '100%', background: '#1a1a1a', color: 'white', border: 'none', padding: '24px', borderRadius: 20, fontSize: '1.2rem', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
                      Enroll & Join Class <ArrowRight size={24} />
                   </button>

                  <button style={{ width: '100%', background: 'transparent', color: '#25d366', border: '2px solid #25d366', padding: '20px', borderRadius: 20, fontSize: '1.1rem', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                     <MessageCircle size={22} fill="#25d366" color="white" /> Message on WhatsApp
                  </button>

                  <div style={{ marginTop: 40, borderTop: '1px solid #f1f5f9', paddingTop: 32 }}>
                     <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem', fontWeight: 800, marginBottom: 8 }}>HOUSE OF FLOYDS CREATION</p>
                     <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>Securely powered by <Logo size="sm" /></p>
                  </div>
              </motion.div>
           </div>

        </div>
      </div>
    </div>
  );
};

// --- SUB-COMPONENTS ---
const LoadingState = () => (
  <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff0e5' }}>
      <Navbar />
      <div style={{ textAlign: 'center' }}>
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} style={{ width: 40, height: 40, border: '4px solid #1a1a1a', borderTopColor: 'transparent', borderRadius: '50%', margin: '0 auto 20px' }} />
          <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>Opening Classroom...</div>
      </div>
  </div>
);

const NotFoundState = () => (
  <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff0e5' }}>
      <Navbar />
      <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900 }}>Tutor not found</h2>
          <button onClick={() => window.location.href = '/marketplace'} style={{ marginTop: 20, background: '#1a1a1a', color: 'white', padding: '12px 32px', borderRadius: 12, border: 'none', fontWeight: 800 }}>Explore Others</button>
      </div>
  </div>
);

const StatItem = ({ value, label, icon }) => (
  <div style={{ textAlign: 'center' }}>
     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 4 }}>
        {icon}
        <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#1a1a1a' }}>{value}</span>
     </div>
     <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase' }}>{label}</div>
  </div>
);

const Tag = ({ label }) => (
  <span style={{ background: '#f8fafc', padding: '10px 20px', borderRadius: 99, fontSize: '0.9rem', fontWeight: 700, color: '#475569' }}>{label}</span>
);

const SocialIcon = ({ icon }) => (
  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'white', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = '#f1f5f9'} onMouseLeave={e => e.currentTarget.style.background = 'white'}>
     {icon}
  </div>
);

const ServiceCard = ({ service, isSelected, onClick }) => {
  const Icon = service.icon === 'Video' ? Video : service.icon === 'MessageCircle' ? MessageCircle : Package;
  
  return (
    <motion.div 
      onClick={onClick}
      whileHover={{ y: -4, shadow: '0 10px 30px rgba(0,0,0,0.05)' }}
      style={{ 
        background: 'white', 
        borderRadius: 24, 
        padding: 32, 
        cursor: 'pointer',
        border: '1px solid',
        borderColor: isSelected ? '#1a1a1a' : 'rgba(0,0,0,0.05)',
        boxShadow: isSelected ? '0 20px 40px rgba(0,0,0,0.08)' : '0 4px 12px rgba(0,0,0,0.02)',
        display: 'flex',
        alignItems: 'center',
        gap: 24,
        transition: 'all 0.2s'
      }}
    >
       <div style={{ width: 64, height: 64, borderRadius: 20, background: isSelected ? '#1a1a1a' : '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', color: isSelected ? 'white' : '#1a1a1a', flexShrink: 0 }}>
          <Icon size={32} />
       </div>
       <div style={{ flex: 1 }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 900, color: '#3b82f6', textTransform: 'uppercase', marginBottom: 4, letterSpacing: '0.05em' }}>{service.type}</div>
          <h4 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0, color: '#1a1a1a' }}>{service.title}</h4>
          <p style={{ color: '#64748b', margin: '4px 0 0', fontWeight: 600 }}>{service.duration || 'Unlimited access'}</p>
       </div>
        <div style={{ textAlign: 'right' }}>
           <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#1a1a1a' }}>₹{service.price}</div>
           <div style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: 800 }}>Enroll Now</div>
        </div>
    </motion.div>
  );
};

export default TutorProfile;
