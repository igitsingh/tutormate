import React from 'react';
import { Linkedin, Twitter, Instagram, ChevronDown, Globe, Mail, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer style={{ background: 'var(--text-strong)', color: 'white', padding: '120px 80px 64px' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 100 }}>
        <div style={{ flex: 1 }}>
          <Logo size="lg" light={true} style={{ marginBottom: 48 }} onClick={() => navigate('/')} />
          
          <button style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-subtle)', padding: '14px 28px', borderRadius: 99, display: 'flex', alignItems: 'center', gap: 12, fontWeight: 800, marginBottom: 48, cursor: 'pointer', transition: 'all 0.2s' }}>
            <Globe size={18} /> Top Profiles <ChevronDown size={18} />
          </button>
          
          <div style={{ color: 'var(--text-subtle)', fontSize: '0.95rem', fontWeight: 700, lineHeight: 1.8, marginBottom: 48, maxWidth: 300 }}>
            <div style={{ color: 'white', fontWeight: 900, marginBottom: 8 }}>TUTORMATE HQ</div>
            <div>MEERUT, UTTAR PRADESH</div>
            <div>Branch: JAIPUR, RAJASTHAN</div>
          </div>
          
          <div style={{ display: 'flex', gap: 32 }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.5)', transition: '0.2s' }}><Linkedin size={28} /></a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.5)' }}><Twitter size={28} /></a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.5)' }}><Instagram size={28} /></a>
          </div>
        </div>

        <div style={{ flex: 1.5, display: 'flex', justifyContent: 'flex-end', gap: 120 }}>
          <FooterSection 
            title="Tutors" 
            links={[
              { label: "Marketplace", path: "/marketplace" },
               { label: "Live Classes", path: "/groupclasses" },
               { label: "Batch Learning", path: "/livecohorts" },
              { label: "Pricing", path: "/pricing" }
            ]} 
          />
          <FooterSection 
            title="Company" 
            links={[
              { label: "About Us", path: "#" },
              { label: "Contact", path: "#" },
              { label: "Blog", path: "#" },
              { label: "Verified Tutors", path: "#" }
            ]} 
          />
          <FooterSection 
            title="Legal" 
            links={[
              { label: "Privacy Policy", path: "#" },
              { label: "Terms of Use", path: "#" },
              { label: "Cookie Policy", path: "#" }
            ]} 
          />
        </div>
      </div>
      
      <div style={{ maxWidth: 1400, margin: '0 auto', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
         <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-subtle)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem' }}>
            <ShieldCheck size={20} color="var(--primary-blue)" /> <span>Verified Platform</span> — <span>Security First</span>
         </div>
         <div style={{ textAlign: 'right' }}>
            <div style={{ color: 'white', fontWeight: 900, fontSize: '0.95rem', letterSpacing: '0.05em' }}>HOUSE OF FLOYDS CREATION</div>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem', fontWeight: 700, marginTop: 4 }}>© 2026 TutorMate Global. All Rights Reserved.</p>
         </div>
      </div>
    </footer>
  );
};

const FooterSection = ({ title, links }) => (
  <div>
    <h4 style={{ fontWeight: 900, marginBottom: 32, fontSize: '1.1rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'white' }}>{title}</h4>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {links.map((link, i) => (
        <a key={i} href={link.path} style={{ color: 'var(--text-subtle)', textDecoration: 'none', fontWeight: 700, fontSize: '1rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'white'} onMouseOut={e => e.target.style.color = 'var(--text-subtle)'}>
          {link.label}
        </a>
      ))}
    </div>
  </div>
);

export default Footer;
