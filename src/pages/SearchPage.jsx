import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Search as SearchIcon, X, MapPin, Star, ShieldCheck, Video, Package } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ApiService } from '../services/api';

const CATEGORIES = [
  "All",
  "Maths", 
  "Physics", 
  "Biology", 
  "English", 
  "JEE", 
  "NEET",
  "Coding", 
  "History", 
  "Music"
];

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      const data = await ApiService.getTutors();
      setResults(data);
      setFilteredResults(data);
      setLoading(false);
    };
    fetchResults();
  }, []);

  useEffect(() => {
    let filtered = results;
    
    // Filter by Category
    if (activeCategory !== "All") {
      filtered = filtered.filter(tutor => 
        tutor.categories?.includes(activeCategory) || 
        tutor.subject === activeCategory ||
        tutor.services?.some(s => s.title.toLowerCase().includes(activeCategory.toLowerCase()))
      );
    }

    // Filter by Query
    if (query.trim()) {
      const q = query.toLowerCase();
      filtered = filtered.filter(tutor => 
        tutor.name.toLowerCase().includes(q) || 
        tutor.subject?.toLowerCase().includes(q) ||
        tutor.organization?.toLowerCase().includes(q)
      );
    }

    setFilteredResults(filtered);
  }, [query, activeCategory, results]);

  const handleSearch = () => {
    // Already handled by real-time filtering, but could trigger specific actions
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#0a0a0a', 
      color: 'white', 
      fontFamily: "'Inter', sans-serif",
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Stars/Particles Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: Math.random() * 0.5, scale: Math.random() }}
            animate={{ 
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: Math.random() * 3 + 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              background: 'white',
              borderRadius: '50%',
              boxShadow: '0 0 10px rgba(255,255,255,0.5)'
            }}
          />
        ))}
      </div>

      <Navbar />

      <main style={{ 
        position: 'relative', 
        zIndex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        paddingTop: 160,
        paddingBottom: 100,
        maxWidth: 1400,
        margin: '0 auto',
        paddingLeft: 40,
        paddingRight: 40
      }}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ 
            fontSize: 'max(3.5rem, 4vw)', 
            fontWeight: 800, 
            marginBottom: 24, 
            fontFamily: "'Outfit', sans-serif",
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: 'white',
            textAlign: 'center'
          }}
        >
          Find the Right Tutor. <span style={{ color: 'rgba(255,255,255,0.4)' }}>Instantly.</span>
        </motion.h1>

        {/* Search Input Container */}
        <div style={{ position: 'relative', width: '100%', maxWidth: 850, marginBottom: 48 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: 24,
              padding: '12px 12px 12px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              backdropFilter: 'blur(20px)'
            }}
          >
            <SearchIcon color="rgba(255,255,255,0.5)" size={24} />
            <input 
              type="text"
              placeholder='What do you want to learn? (e.g. "Physics", "Maths")'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                flex: 1,
                color: 'white',
                fontSize: '1.25rem',
                fontWeight: 600,
                outline: 'none',
                height: 56,
                fontFamily: "'Inter', sans-serif"
              }}
            />
            {query && (
              <X 
                size={20} 
                style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.4)' }} 
                onClick={() => setQuery("")}
              />
            )}
            <div 
              style={{
                background: 'var(--cta-orange)',
                color: 'white',
                width: 56,
                height: 56,
                borderRadius: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ArrowRight size={24} />
            </div>
          </motion.div>
        </div>

        {/* Categories / Tags */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: 12,
            maxWidth: 1000,
            marginBottom: 80
          }}
        >
          {CATEGORIES.map((cat, i) => (
            <motion.button
              key={i}
              whileHover={{ y: -2, background: 'rgba(255,255,255,0.1)' }}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: activeCategory === cat ? 'white' : 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 12,
                padding: '12px 24px',
                color: activeCategory === cat ? 'black' : 'rgba(255,255,255,0.7)',
                fontSize: '0.95rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap'
              }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Tutor Grid */}
        <div style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 32,
        }}>
          {loading ? (
             Array(6).fill(0).map((_, i) => (
                <div key={i} style={{ height: 450, background: 'rgba(255,255,255,0.03)', borderRadius: 40, border: '1px solid rgba(255,255,255,0.05)' }}></div>
             ))
          ) : (
            <AnimatePresence>
              {filteredResults.map(tutor => (
                <TutorCard key={tutor.id} tutor={tutor} />
              ))}
            </AnimatePresence>
          )}
        </div>
        
        {!loading && filteredResults.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '100px 0' }}>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.5)' }}>No tutors found matching your search. Try another keyword!</p>
          </motion.div>
        )}
      </main>

      <Footer />
      
      <style>{`
        body { margin: 0; background: #0a0a0a; }
        ::placeholder { color: rgba(255,255,255,0.3); }
      `}</style>
    </div>
  );
};

const TutorCard = ({ tutor }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    whileHover={{ y: -10 }}
    onClick={() => window.location.href=`/profile/${tutor?.id || ''}`}
    style={{ 
       background: 'rgba(15,15,15,0.8)', 
       borderRadius: 40, 
       overflow: 'hidden', 
       boxShadow: '0 20px 40px rgba(0,0,0,0.3)', 
       cursor: 'pointer', 
       display: 'flex', 
       flexDirection: 'column',
       border: '1px solid rgba(255,255,255,0.05)',
       backdropFilter: 'blur(10px)'
    }}
  >
     <div style={{ height: 280, position: 'relative' }}>
        <img src={tutor?.photo || 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7'} alt={tutor?.name || 'Tutor'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ 
           position: 'absolute', 
           top: 20, 
           right: 20, 
           background: 'rgba(255,255,255,0.1)', 
           backdropFilter: 'blur(12px)', 
           padding: '6px 16px', 
           borderRadius: 99, 
           fontSize: '0.75rem', 
           fontWeight: 900,
           color: 'white',
           display: 'flex',
           alignItems: 'center',
           gap: 6,
           border: '1px solid rgba(255,255,255,0.1)'
        }}>
           <ShieldCheck size={16} /> Verified
        </div>
     </div>
     <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
           <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 800, color: 'white' }}>{tutor?.name || 'Tutor Name'}</h3>
           <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Star size={14} fill="#fbbf24" color="#fbbf24" />
              <span style={{ fontWeight: 800, color: 'white', fontSize: '0.9rem' }}>{tutor?.rating || '5.0'}</span>
           </div>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', fontWeight: 600, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 6 }}>
           <MapPin size={14} color="var(--primary-blue)"/> {tutor?.organization || 'TutorMate Certified'}
        </p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
           {(tutor?.services || []).slice(0, 2).map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: 10, fontSize: '0.75rem', fontWeight: 800, color: 'rgba(255,255,255,0.7)' }}>
                 {s.type === '1:1 Class' ? <Video size={14} color="var(--primary-blue)"/> : <Package size={14} color="var(--purple)"/>}
                 {s.title}
              </div>
           ))}
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
           <div>
              <div style={{ fontSize: '1.3rem', fontWeight: 900, color: 'white' }}>₹{tutor?.price || '999'}<span style={{ fontSize: '0.8rem', opacity: 0.5, fontWeight: 500 }}>/class</span></div>
           </div>
           <button style={{ background: 'white', color: 'black', border: 'none', padding: '10px 20px', borderRadius: 12, fontSize: '0.85rem', fontWeight: 900, cursor: 'pointer' }}>
              View Profile
           </button>
        </div>
     </div>
  </motion.div>
);

export default SearchPage;

