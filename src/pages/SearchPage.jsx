import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search as SearchIcon, X } from 'lucide-react';
import Navbar from '../components/Navbar';

const CATEGORIES = [
  "Class 10 Maths", 
  "JEE Physics", 
  "NEET Biology", 
  "Class 12 Boards", 
  "Spoken English", 
  "Coding for Kids", 
  "UPSC History", 
  "Doubt Clearing", 
  "Spanish Language", 
  "Mental Maths"
];

const SearchPage = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      window.location.href = `/marketplace?query=${encodeURIComponent(query)}`;
    }
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
        justifyContent: 'center', 
        paddingTop: 160,
        paddingBottom: 100,
        maxWidth: 1000,
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ 
            fontSize: 'max(4rem, 5vw)', 
            fontWeight: 800, 
            marginBottom: 24, 
            fontFamily: "'Outfit', sans-serif",
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: 'white'
          }}
        >
          Find the Right Tutor. <span style={{ color: 'white' }}>Instantly.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ 
            fontSize: '1.4rem', 
            color: 'rgba(255,255,255,0.7)', 
            marginBottom: 64, 
            maxWidth: 700, 
            lineHeight: 1.5,
            fontWeight: 500
          }}
        >
          Tell us what you want to learn—our AI will find the right teacher, mentor, or classes for you.
        </motion.p>

        {/* Search Input Container */}
        <div style={{ position: 'relative', width: '100%', maxWidth: 850, marginBottom: 48 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
              placeholder='What do you want to learn? (e.g. "Class 10 Physics", "JEE Maths Prep")'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
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
            <button 
              onClick={handleSearch}
              style={{
                background: 'var(--cta-orange)',
                color: 'white',
                border: 'none',
                width: 56,
                height: 56,
                borderRadius: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <ArrowRight size={24} />
            </button>
          </motion.div>
        </div>

        {/* Categories / Tags */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: 12,
            maxWidth: 900
          }}
        >
          {CATEGORIES.map((cat, i) => (
            <motion.button
              key={i}
              whileHover={{ y: -2, background: 'rgba(255,255,255,0.1)' }}
              onClick={() => {
                setQuery(cat);
                // Trigger search immediately if needed, or just set text
              }}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 12,
                padding: '12px 24px',
                color: 'rgba(255,255,255,0.7)',
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
      </main>

      <style>{`
        body { margin: 0; background: #0a0a0a; }
        ::placeholder { color: rgba(255,255,255,0.3); }
      `}</style>
    </div>
  );
};

export default SearchPage;
