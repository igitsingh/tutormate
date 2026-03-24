import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Star, ShieldCheck, Heart, Filter, ChevronDown, Book, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ApiService } from '../services/api';

const SearchResults = () => {
  const loc = useLocation();
  const searchParams = new URLSearchParams(loc.search);
  const subject = searchParams.get('subject') || 'All Subjects';
  const location = searchParams.get('location') || 'Meerut';

  const [activeFilters, setActiveFilters] = useState(['Online']);
  const [showFilters, setShowFilters] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showSearch, setShowSearch] = useState(false);
  const [subjectInput, setSubjectInput] = useState(subject);
  const [locationInput, setLocationInput] = useState(location);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      const data = await ApiService.getTutors({ subject, location });
      setResults(data);
      setLoading(false);
    };
    fetchResults();
  }, [subject, location]);

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#0f172a', background: 'white', minHeight: '100vh' }}>
      <Navbar />

      {/* ── TOP SEARCH BAR (MINI) ── */}
      <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          background: 'white',
          height: 80,
          padding: '0 64px',
          paddingLeft: '220px', // Make room for MA TUTORS logo
          display: 'flex',
          alignItems: 'center',
          gap: 24,
          borderBottom: '1px solid #f1f5f9',
          zIndex: 900,
          paddingTop: 0,
      }}>
         <div 
           style={{ 
             display: 'flex', 
             alignItems: 'center', 
             padding: '8px 20px', 
             background: '#f8fafc', 
             borderRadius: 999, 
             border: '1px solid #f1f5f9',
             gap: 12,
             cursor: 'pointer',
             transition: 'background 0.2s',
           }}
           onClick={() => setShowSearch(true)}
           onMouseEnter={(e) => e.currentTarget.style.background = '#f1f5f9'}
           onMouseLeave={(e) => e.currentTarget.style.background = '#f8fafc'}
         >
            <Search size={16} style={{ color: '#ff5a5f', fontWeight: 900 }} />
            <span style={{ fontSize: '0.9rem', fontWeight: 800 }}>{subject} - {location}</span>
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#ff5a5f', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
               <Search size={14} fill="white" />
            </div>
         </div>
      </div>

      {/* ── FILTER BAR (STICKY BELOW TOP BAR) ── */}
      <div style={{
          position: 'fixed',
          top: 80,
          left: 0,
          right: 0,
          background: 'white',
          padding: '12px 64px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          borderBottom: '1px solid #f1f5f9',
          zIndex: 800,
          overflowX: 'auto',
          scrollbarWidth: 'none',
      }}>
         <FilterButton label="Online" active={activeFilters.includes('Online')} onClick={() => toggleFilter('Online')} />
         <FilterButton label="Fee" hasChevron />
         <FilterButton label="Level" hasChevron />
         <FilterButton label="Response time" hasChevron />
      </div>

      {/* ── MAIN CONTENT ── */}
      <main style={{ padding: '180px 64px 80px' }}>
          <div style={{ marginBottom: 32 }}>
             <h1 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.04em', margin: 0 }}>{subject} tutors in {location}</h1>
             <p style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: 600, marginTop: 12 }}>
                {loading ? 'Searching...' : `${results.length * 123} available teachers online & offline`}
             </p>
          </div>
 
          {/* Tutor Grid */}
          <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 24,
          }}>
             {loading ? (
                Array(6).fill(0).map((_, i) => (
                    <div key={i} style={{ height: 400, background: '#f1f5f9', borderRadius: 24, animate: 'pulse' }}></div>
                ))
             ) : results.length > 0 ? (
                results.map(tutor => (
                   <ResultCard key={tutor.id} tutor={tutor} />
                ))
             ) : (
                <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: 100 }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>No tutors found in {location}</h3>
                    <p style={{ color: '#64748b' }}>Try searching for a different subject or city.</p>
                </div>
             )}
          </div>
      </main>

      <AnimatePresence>
        {showSearch && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(15, 23, 42, 0.4)',
              backdropFilter: 'blur(12px)',
              zIndex: 2000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: 120,
            }}
            onClick={() => setShowSearch(false)}
          >
             <motion.div 
               initial={{ y: -20, scale: 0.95 }}
               animate={{ y: 0, scale: 1 }}
               exit={{ y: -20, scale: 0.95 }}
               onClick={(e) => e.stopPropagation()}
               style={{
                 background: 'white',
                 borderRadius: 32,
                 padding: 24,
                 width: '100%',
                 maxWidth: 800,
                 boxShadow: '0 30px 60px rgba(0,0,0,0.2)',
                 position: 'relative',
               }}
             >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 12,
                  background: '#f8fafc',
                  borderRadius: 24,
                  padding: 8,
                  border: '1px solid #f1f5f9',
                  height: 72,
                }}>
                   <div style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center', paddingLeft: 16, borderRight: '1px solid #e2e8f0' }}>
                      <Book size={18} style={{ color: '#ff5a5f', marginRight: 12 }} />
                      <input 
                        placeholder='Try "Maths"'
                        value={subjectInput}
                        onChange={(e) => setSubjectInput(e.target.value)}
                        style={{ border: 'none', background: 'transparent', outline: 'none', fontWeight: 600, width: '100%' }}
                      />
                   </div>
                   <div style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center', paddingLeft: 16 }}>
                      <MapPin size={18} style={{ color: '#ff5a5f', marginRight: 12 }} />
                      <input 
                        placeholder='Class location'
                        value={locationInput}
                        onChange={(e) => setLocationInput(e.target.value)}
                        style={{ border: 'none', background: 'transparent', outline: 'none', fontWeight: 600, width: '100%' }}
                      />
                   </div>
                   <button 
                     onClick={() => window.location.href = `/marketplace?subject=${subjectInput}&location=${locationInput}`}
                     style={{ 
                       background: '#ff5a5f', 
                       color: 'white', 
                       border: 'none', 
                       borderRadius: 16, 
                       padding: '0 32px', 
                       height: '100%', 
                       fontWeight: 800, 
                       cursor: 'pointer' 
                     }}
                   >
                     Search
                   </button>
                </div>

                <div 
                  onClick={() => setShowSearch(false)}
                  style={{ position: 'absolute', top: -60, right: 0, color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700 }}
                >
                   <X size={24} /> Close
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        body { margin: 0; }
      `}</style>
    </div>
  );
};

const FilterButton = ({ label, active, hasChevron, onClick }) => (
  <button 
    onClick={onClick}
    style={{
      padding: '10px 20px',
      borderRadius: 999,
      border: active ? '1px solid #ff5a5f' : '1px solid #e2e8f0',
      background: active ? '#ff5a5f' : 'white',
      color: active ? 'white' : '#0f172a',
      fontSize: '0.85rem',
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'all 0.2s',
    }}
  >
    {label}
    {active && <X size={14} />}
    {hasChevron && <ChevronDown size={14} />}
  </button>
);

const ResultCard = ({ tutor }) => (
  <div 
    style={{ borderRadius: 24, overflow: 'hidden', background: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', position: 'relative', border: tutor.tier === 'Elite' ? '2px solid #0f172a' : 'none', cursor: 'pointer' }}
    onClick={() => window.location.href=`/profile/${tutor.id}`}
  >
    <div style={{ height: 320, background: '#f1f5f9', position: 'relative' }}>
       <img src={tutor.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
       
       {/* Featured Sticker */}
       {tutor.isFeatured && (
         <div style={{ position: 'absolute', top: 20, left: 20, background: '#ff5a5f', color: 'white', padding: '6px 16px', borderRadius: 12, fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', boxShadow: '0 4px 10px rgba(255, 90, 95, 0.3)' }}>
            Featured
         </div>
       )}

       <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <h3 style={{ color: 'white', fontSize: '1.4rem', fontWeight: 900 }}>{tutor.name}</h3>
            {tutor.tier === 'Elite' && <ShieldCheck size={20} style={{ color: '#10b981' }} fill="#10b981" />}
          </div>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', fontWeight: 700 }}>{tutor.location} (online)</p>
       </div>
       <div style={{ position: 'absolute', top: 16, right: 16, width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
          <Heart size={20} />
       </div>
    </div>
    <div style={{ padding: 20, textAlign: 'left' }}>
       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
             <Star size={14} fill="#ff5a5f" color="#ff5a5f" />
             <span style={{ fontWeight: 800 }}>{tutor.rating} ({tutor.reviews})</span>
          </div>
          <div style={{ 
            fontSize: '0.75rem', 
            fontWeight: 800, 
            color: tutor.tier === 'Elite' ? '#10b981' : (tutor.tier === 'Pro' ? '#2563eb' : '#64748b'), 
            background: tutor.tier === 'Elite' ? '#dcfce7' : (tutor.tier === 'Pro' ? '#eff6ff' : '#f1f5f9'), 
            padding: '4px 12px', 
            borderRadius: 999 
          }}>
            {tutor.tier === 'Elite' ? 'Elite Tutor' : (tutor.tier === 'Pro' ? 'Pro Tutor' : 'Standard')}
          </div>
       </div>
       <p style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 500, lineHeight: 1.5, marginBottom: 8 }}>
          {tutor.bio.substring(0, 100)}...
       </p>
       <p style={{ fontSize: '0.95rem', color: '#0f172a', fontWeight: 800 }}>₹{tutor.price}/hr • 1st free class</p>
    </div>
  </div>
);

export default SearchResults;
