import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Book, MapPin, X, ChevronRight, Navigation, ChevronDown, Video, Users, Zap, Heart, Star, Package } from 'lucide-react';
import { AuthService } from '../services/auth';
import Logo from './Logo';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [subject, setSubject] = useState('');
  const [navLocation, setNavLocation] = useState('');
  const [activeMenu, setActiveMenu] = useState(null); // null, 'products', 'usecases'
  const [showSubjects, setShowSubjects] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  const [locationName, setLocationName] = useState('');
  
  const location = useLocation();
  const navigate = useNavigate();
  const user = AuthService.getCurrentUser();
  const isSearchActive = location.pathname === '/search';

  const handleSearch = () => {
    if (subject) {
      navigate(`/marketplace?subject=${subject}&location=${navLocation}`);
      setShowSearch(false);
    }
  };

  const handleLogout = () => {
    AuthService.logout();
  };

  return (
    <>
      {/* Top Branding Bar - Topmate Style */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: '#1a1a1a',
        color: 'white',
        fontSize: '0.75rem',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '32px',
        zIndex: 10000,
        gap: 8
      }}>
        <span style={{ color: '#fbbf24' }}>⚡</span> New: Instagram Auto DM is here! Activate it now - it's 100% free <a href="#" style={{ color: 'white', fontWeight: 800, marginLeft: 4 }}>Try Now</a>
      </div>      <nav 
        onMouseLeave={() => setActiveMenu(null)}
        style={{
          position: 'fixed',
          top: 32,
          left: 0,
          right: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '80px',
          background: 'rgba(250, 250, 250, 0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border-light)',
          padding: '0 80px'
        }}
      >
        <div style={{ width: '100%', maxWidth: 1400, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Logo onClick={() => navigate('/')} />

        {/* Desktop Menu - Pill Style Island */}
        <div style={{ 
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', 
          alignItems: 'center', 
          background: 'var(--bg-white)',
          border: '1px solid var(--border-light)',
          borderRadius: 999,
          padding: '8px 24px',
          gap: 24,
          boxShadow: 'var(--shadow-subtle)'
        }}>
           <div 
              onMouseEnter={() => setActiveMenu('products')}
              style={{ position: 'relative' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer', color: 'var(--text-medium)', fontWeight: 700, fontSize: '0.9rem' }}>
                Teaching <ChevronDown size={14} />
              </div>
              
              {/* MEGA MENU: PRODUCTS */}
              <AnimatePresence>
                {activeMenu === 'products' && (
                   <motion.div 
                    initial={{ opacity: 0, y: 10, x: '-50%' }}
                    animate={{ opacity: 1, y: 0, x: '-50%' }}
                    exit={{ opacity: 0, y: 10, x: '-50%' }}
                    style={{
                      position: 'absolute',
                      top: 40,
                      left: '50%',
                      width: 1000,
                      background: 'var(--bg-white)',
                      borderRadius: 24,
                      boxShadow: 'var(--shadow-hover)',
                      display: 'grid',
                      gridTemplateColumns: 'minmax(250px, 1fr) minmax(250px, 1fr) minmax(250px, 1fr) 300px',
                      gap: 40,
                      zIndex: 10000,
                      padding: 40,
                      border: '1px solid var(--border-light)'
                    }}
                  >
                     <div>
                        <h5 style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: 800, textTransform: 'uppercase', marginBottom: 24 }}>Teaching Services</h5>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                           <MiniLink icon={<Book size={16}/>} title="1:1 Tuition Classes" onClick={() => navigate('/tuition')} />
                          <MiniLink icon={<Users size={16}/>} title="Group Classes" onClick={() => navigate('/groupclasses')} />
                          <MiniLink icon={<Video size={16}/>} title="Live Cohorts" onClick={() => navigate('/livecohorts')} />
                          <MiniLink icon={<Zap size={16}/>} title="Doubt Solving" onClick={() => navigate('/search')} />
                        </div>
                     </div>
                     <div>
                        <h5 style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: 800, textTransform: 'uppercase', marginBottom: 24 }}>Learning Products</h5>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                          <MiniLink icon={<Package size={16}/>} title="Course Packages" onClick={() => navigate('/search')} />
                          <MiniLink icon={<Book size={16}/>} title="Study Material" onClick={() => navigate('/search')} />
                          <MiniLink icon={<Video size={16}/>} title="Recorded Classes" onClick={() => navigate('/search')} />
                        </div>
                     </div>
                     <div>
                        <h5 style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: 800, textTransform: 'uppercase', marginBottom: 24 }}>For Tutors</h5>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                          <MiniLink icon={<Users size={16}/>} title="Get Students" onClick={() => navigate('/pricing')} />
                          <MiniLink icon={<Zap size={16}/>} title="Grow Earnings" onClick={() => navigate('/pricing')} />
                          <MiniLink icon={<Book size={16}/>} title="Tutor Dashboard" onClick={() => navigate('/admin')} />
                        </div>
                     </div>
                     <div style={{ background: 'var(--bg-soft-grey)', margin: -40, marginLeft: 0, padding: 40, borderRadius: 16 }}>
                        <div style={{ width: '100%', height: 120, background: 'var(--primary-blue)', borderRadius: 16, marginBottom: 20 }} className="gradient-primary-brand"></div>
                        <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 8, color: 'var(--text-strong)' }}>TutorMate Ecosystem</h4>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-medium)', lineHeight: 1.5, marginBottom: 20 }}>Everything you need to turn your knowledge into a global business.</p>
                        <a href="/ecosystem" style={{ color: 'var(--primary-blue)', fontWeight: 800, fontSize: '0.9rem', textDecoration: 'none' }}>Explore All Tools →</a>
                     </div>
                   </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div 
              onMouseEnter={() => setActiveMenu('usecases')}
              style={{ position: 'relative' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer', color: 'var(--text-medium)', fontWeight: 700, fontSize: '0.9rem' }}>
                Use Cases <ChevronDown size={14} />
              </div>

              {/* MEGA MENU: USE CASES */}
              <AnimatePresence>
                {activeMenu === 'usecases' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, x: '-50%' }}
                    animate={{ opacity: 1, y: 0, x: '-50%' }}
                    exit={{ opacity: 0, y: 10, x: '-50%' }}
                    style={{
                      position: 'absolute',
                      top: 40,
                      left: '50%',
                      width: 900,
                      background: 'var(--bg-white)',
                      borderRadius: 24,
                      boxShadow: 'var(--shadow-hover)',
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr 1fr',
                      gap: 32,
                      zIndex: 10000,
                      padding: 32,
                      border: '1px solid var(--border-light)'
                    }}
                  >
                     <div>
                        <h5 style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: 800, textTransform: 'uppercase', marginBottom: 20 }}>School Learning</h5>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                          <MiniLink icon={<Book size={16}/>} title="CBSE / ICSE / State boards" />
                          <MiniLink icon={<Zap size={16}/>} title="Needs: Homework help, Revision" />
                        </div>
                     </div>
                     <div>
                        <h5 style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: 800, textTransform: 'uppercase', marginBottom: 20 }}>Competitive Exams</h5>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                          <MiniLink icon={<Heart size={16}/>} title="JEE / NEET / CUET" />
                          <MiniLink icon={<Star size={16}/>} title="Doubt Clearing" />
                        </div>
                     </div>
                     <div>
                        <h5 style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: 800, textTransform: 'uppercase', marginBottom: 20 }}>Skills & Logic</h5>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                          <MiniLink icon={<Users size={16}/>} title="Coding & Tech" />
                          <MiniLink icon={<Book size={16}/>} title="English & Communication" />
                        </div>
                     </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a 
              href="/search" 
              style={{ 
                color: isSearchActive ? 'var(--primary-blue)' : 'var(--text-medium)', 
                textDecoration: 'none', 
                fontWeight: 800, 
                fontSize: '0.9rem',
                background: isSearchActive ? 'var(--soft-blue)' : 'transparent',
                padding: '8px 16px',
                borderRadius: 99,
                transition: '0.2s'
              }}
            >
              Search
            </a>
            <a 
              href="/pricing" 
              style={{ 
                borderLeft: '1px solid var(--border-light)', 
                paddingLeft: 24, 
                color: location.pathname === '/pricing' ? 'var(--primary-blue)' : 'var(--text-medium)', 
                textDecoration: 'none', 
                fontWeight: 700, 
                fontSize: '0.9rem' 
              }}
            >
              Pricing
            </a>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
           <button 
              onClick={() => navigate('/login')}
              style={{ background: 'transparent', border: 'none', padding: '10px 20px', borderRadius: 12, fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem', color: 'var(--text-strong)' }}
           >
              Sign In
           </button>
           <button 
              onClick={() => navigate('/signup')}
              style={{ background: 'var(--cta-orange)', color: 'white', border: 'none', padding: '12px 28px', borderRadius: 12, fontWeight: 800, cursor: 'pointer', fontSize: '0.95rem', boxShadow: '0 4px 14px 0 rgba(249, 115, 22, 0.3)', transition: '0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--hover-orange)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--cta-orange)'; e.currentTarget.style.transform = 'translateY(0)'; }}
           >
              Start Teaching
           </button>
        </div>
      </div>
    </nav>

      {/* Global Search Overlay */}
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
                   <div 
                     style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center', paddingLeft: 16, borderRight: '1px solid #e2e8f0', cursor: 'text', position: 'relative', alignItems: 'center' }}
                     onClick={() => { setShowSubjects(true); setShowLocations(false); }}
                   >
                      <Book size={18} style={{ color: '#ff5a5f', marginRight: 12 }} />
                      <input 
                        placeholder='Try "Maths"'
                        value={subject}
                        autoFocus
                        style={{ border: 'none', background: 'transparent', outline: 'none', fontWeight: 600, width: '100%' }}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                      {showSubjects && (
                        <div style={dropdownStyle}>
                           <DropdownItem icon={<Search size={14}/>} label="English" onClick={() => setSubject('English')} />
                           <DropdownItem icon={<Search size={14}/>} label="Maths" onClick={() => setSubject('Maths')} />
                           <DropdownItem icon={<Search size={14}/>} label="Physics" onClick={() => setSubject('Physics')} />
                        </div>
                      )}
                   </div>
                   <div 
                     style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center', paddingLeft: 16, cursor: 'text', position: 'relative' }}
                     onClick={() => { setShowLocations(true); setShowSubjects(false); }}
                   >
                      <MapPin size={18} style={{ color: '#ff5a5f', marginRight: 12 }} />
                      <input 
                        placeholder='Class location'
                        value={locationName}
                        style={{ border: 'none', background: 'transparent', outline: 'none', fontWeight: 600, width: '100%' }}
                        onChange={(e) => setLocationName(e.target.value)}
                      />
                      {showLocations && (
                        <div style={dropdownStyle}>
                           <DropdownItem icon={<Navigation size={14}/>} label="Around me" onClick={() => setLocationName('Around me')} />
                           <DropdownItem icon={<Navigation size={14}/>} label="Online" onClick={() => setLocationName('Online')} />
                        </div>
                      )}
                   </div>
                   <button 
                     onClick={handleSearch}
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
      <div id="recaptcha-container"></div>
    </>
  );
};

const dropdownStyle = {
  position: 'absolute',
  top: 'calc(100% + 12px)',
  left: 0,
  minWidth: 240,
  background: 'white',
  borderRadius: 16,
  boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
  padding: '8px',
  zIndex: 100,
};

const DropdownItem = ({ icon, label, onClick }) => (
  <div 
    onClick={(e) => { e.stopPropagation(); onClick(); }}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 16px',
      borderRadius: 12,
      cursor: 'pointer',
      transition: 'background 0.2s',
      fontSize: '0.9rem',
      fontWeight: 600,
      color: '#374151',
    }}
  >
    <div style={{ color: '#94a3b8' }}>{icon}</div>
    {label}
  </div>
);

const MenuLink = ({ icon, title, sub, onClick }) => (
  <div 
    onClick={onClick}
    style={{ display: 'flex', gap: 16, cursor: 'pointer', padding: '8px', borderRadius: 12, transition: 'background 0.2s' }} 
    onMouseEnter={e => e.currentTarget.style.background = '#f8fafc'} 
    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
  >
     <div style={{ width: 44, height: 44, borderRadius: 12, background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a1a1a', flexShrink: 0 }}>
        {icon}
     </div>
     <div>
        <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#1a1a1a' }}>{title}</div>
        <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>{sub}</div>
     </div>
  </div>
);

const MiniLink = ({ icon, title, onClick }) => (
  <div 
    onClick={onClick}
    style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', padding: '8px 12px', borderRadius: 12, transition: 'background 0.2s' }} 
    onMouseEnter={e => e.currentTarget.style.background = '#f8fafc'} 
    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
  >
     <div style={{ color: '#94a3b8' }}>{icon}</div>
     <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1a1a1a' }}>{title}</div>
  </div>
);

export default Navbar;
