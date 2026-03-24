import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Star, ShieldCheck, Heart, Filter, ChevronDown, Book, X, Zap, Video, MessageCircle, Package, ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ApiService } from '../services/api';

const Marketplace = () => {
  const loc = useLocation();
  const searchParams = new URLSearchParams(loc.search);
  const subject = searchParams.get('subject') || 'All Tutors';

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      const data = await ApiService.getTutors();
      setResults(data);
      setLoading(false);
    };
    fetchResults();
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg-clean)', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      <main style={{ padding: '180px 80px 100px', maxWidth: 1400, margin: '0 auto' }}>
          
          {/* ── HEADER ── */}
          <div style={{ marginBottom: 80, textAlign: 'center' }}>
             <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="hero-badge"
                style={{ marginBottom: 32, background: 'var(--soft-blue)', color: 'var(--primary-blue)' }}
             >
                Tutor Marketplace 🎓
             </motion.div>
             <h1 style={{ fontSize: '4.5rem', fontWeight: 900, color: 'var(--text-strong)', marginBottom: 24, fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.04em' }}>
                Find Your <span className="text-gradient-primary">Perfect Tutor</span>
             </h1>
             <p style={{ color: 'var(--text-medium)', fontSize: '1.4rem', maxWidth: 700, margin: '0 auto', lineHeight: 1.6, fontWeight: 500 }}>
                Book 1:1 tuition, join live classes, and get study material from the world's most verified teachers and mentors.
             </p>
          </div>

          {/* ── SEARCH BAR ── */}
          <div style={{ maxWidth: 900, margin: '0 auto 80px', position: 'relative' }}>
             <div style={{ position: 'relative', display: 'flex', gap: 16 }}>
                <div style={{ position: 'relative', flex: 1 }}>
                   <input 
                     placeholder="Search by subject, class, or tutor name..."
                     style={{ 
                        width: '100%', 
                        padding: '24px 32px', 
                        paddingLeft: 72, 
                        borderRadius: 32, 
                        border: '1px solid var(--border-light)', 
                        background: 'var(--bg-white)', 
                        boxShadow: 'var(--shadow-hover)', 
                        fontSize: '1.3rem', 
                        fontWeight: 700, 
                        outline: 'none',
                        color: 'var(--text-strong)'
                     }}
                   />
                   <Search size={32} style={{ position: 'absolute', left: 24, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-subtle)' }} />
                </div>
                <button className="btn btn-cta" style={{ borderRadius: 32, padding: '0 48px', fontSize: '1.2rem' }}>
                   Search Tutors
                </button>
             </div>
          </div>

          {/* ── CATEGORY FILTERS ── */}
          <div style={{ display: 'flex', gap: 16, marginBottom: 80, justifyContent: 'center', flexWrap: 'wrap' }}>
             {["All", "Maths", "Physics", "Biology", "English", "Class 10", "Class 12", "JEE", "NEET"].map(cat => (
               <motion.button 
                 key={cat}
                 onClick={() => setActiveCategory(cat)}
                 whileHover={{ y: -4, scale: 1.05 }}
                 className={activeCategory === cat ? "btn btn-primary" : "btn btn-white"}
                 style={{ 
                   padding: '16px 32px', 
                   borderRadius: 99, 
                   fontSize: '1rem',
                   boxShadow: activeCategory === cat ? 'none' : 'var(--shadow-subtle)',
                   border: activeCategory === cat ? 'none' : '1px solid var(--border-light)'
                 }}
               >
                 {cat}
               </motion.button>
             ))}
          </div>

          {/* ── TUTOR GRID ── */}
          <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
              gap: 48,
          }}>
             {loading ? (
                Array(6).fill(0).map((_, i) => (
                    <div key={i} style={{ height: 500, background: 'var(--bg-white)', borderRadius: 48, opacity: 0.5, border: '1px solid var(--border-light)' }}></div>
                ))
             ) : results.map(tutor => (
                <TutorCard key={tutor.id} tutor={tutor} />
             ))}
          </div>
      </main>

      <Footer />
    </div>
  );
};

const TutorCard = ({ tutor }) => (
  <motion.div 
    whileHover={{ y: -16, scale: 1.02 }}
    onClick={() => window.location.href=`/profile/${tutor?.id || ''}`}
    style={{ 
       background: 'var(--bg-white)', 
       borderRadius: 48, 
       overflow: 'hidden', 
       boxShadow: 'var(--shadow-subtle)', 
       cursor: 'pointer', 
       display: 'flex', 
       flexDirection: 'column',
       border: '1px solid var(--border-light)',
       transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
    }}
  >
     <div style={{ height: 320, position: 'relative' }}>
        <img src={tutor?.photo || 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7'} alt={tutor?.name || 'Tutor'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ 
           position: 'absolute', 
           top: 24, 
           right: 24, 
           background: 'rgba(255,255,255,0.9)', 
           backdropFilter: 'blur(12px)', 
           padding: '8px 20px', 
           borderRadius: 99, 
           fontSize: '0.85rem', 
           fontWeight: 900,
           color: 'var(--primary-blue)',
           display: 'flex',
           alignItems: 'center',
           gap: 8,
           boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
           <ShieldCheck size={18} /> {tutor?.tier || 'Gold'} Verified
        </div>
     </div>
     <div style={{ padding: 32, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
           <h3 style={{ margin: 0, fontSize: '1.7rem', fontWeight: 900, color: 'var(--text-strong)', letterSpacing: '-0.02em' }}>{tutor?.name || 'Tutor Name'}</h3>
           <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'var(--rating-bg)', padding: '6px 14px', borderRadius: 99 }}>
              <Star size={18} fill="var(--rating-star)" color="var(--rating-star)" />
              <span style={{ fontWeight: 900, color: 'var(--text-strong)', fontSize: '1rem' }}>{tutor?.rating || '5.0'}</span>
           </div>
        </div>
        <p style={{ color: 'var(--text-subtle)', fontSize: '1rem', fontWeight: 800, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
           <MapPin size={16} color="var(--primary-blue)"/> {tutor?.organization || 'TutorMate Certified Teacher'}
        </p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 32 }}>
           {(tutor?.services || []).slice(0, 3).map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'var(--bg-soft-grey)', padding: '8px 16px', borderRadius: 12, fontSize: '0.85rem', fontWeight: 900, color: 'var(--text-medium)' }}>
                 {s.type === '1:1 Class' ? <Video size={16} color="var(--primary-blue)"/> : <Package size={16} color="var(--purple)"/>}
                 {s.title}
              </div>
           ))}
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, borderTop: '1px solid var(--border-light)' }}>
           <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tuition Fee</span>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--text-strong)' }}>₹{tutor?.price || '999'}<span style={{ fontSize: '0.9rem', color: 'var(--text-subtle)', fontWeight: 600 }}>/class</span></div>
           </div>
           <button className="btn btn-primary" style={{ padding: '16px 28px', borderRadius: 16, fontSize: '1rem', fontWeight: 800 }}>
              Enroll Now
           </button>
        </div>
     </div>
  </motion.div>
);

export default Marketplace;
