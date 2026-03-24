import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, Zap, Users, ChevronRight, CheckCircle, Heart, ArrowRight,
  MessageCircle, Video, Package, Globe, CreditCard, ChevronDown,
  Instagram, Linkedin, Twitter, Layout, ShieldCheck, Sparkles, Book, BookOpen
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ApiService } from '../services/api';

const CATEGORIES = [
  "Class 10", "Class 12", "JEE Physics", "NEET Biology", "Coding", "Spoken English", 
  "Maths", "Accountancy", "Upskilling", "Doubt Clearing", "Others"
];

const FAQ_DATA = [
  { q: "What is TutorMate?", a: "TutorMate is an all-in-one storefront for tutors and teachers to sell classes, host group sessions, and grow their teaching brand from a single link." },
  { q: "Can I conduct paid classes?", a: "Yes, you can easily set your price and schedule for 1:1 or group tuition classes. We handle the payments and calendar syncing." },
  { q: "How much can I charge for my classes?", a: "You have complete control over your pricing. Most tutors charge between ₹500 to ₹5000 per class based on subject and level." },
  { q: "How do the payments work?", a: "Payments are collected upfront from students and settled directly to your bank account via our integrated payment partners." },
  { q: "Wait, is TutorMate really free?", a: "We have a free-forever tier to get you started. We only make money when you do, via a small processing fee — no upfront costs." },
  { q: "What are the transaction charges?", a: "We charge a minimal 5-10% commission depending on your membership tier to cover platform costs and payment processing." }
];

const TUTORS_COLUMN_1 = [
  { bg: "var(--soft-blue)", name: "Ananya Sharma", title: "JEE Physics Specialist", org: "Ex-IITian", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop" },
  { bg: "var(--light-purple)", name: "Rohit Verma", title: "Spoken English Tutor", org: "British Council Certif.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop" },
  { bg: "var(--soft-blue)", name: "Saurav Chaudhary", title: "Maths Tutor", org: "Delhi University", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop" },
];

const TUTORS_COLUMN_2 = [
  { bg: "var(--soft-green)", name: "Isha Kapoor", title: "Class 10 Board Prep", org: "KVS Alumna", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" },
  { bg: "var(--rating-bg)", name: "Arjun Mehta", title: "Coding for Kids", org: "IIT Bombay", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop" },
  { bg: "var(--soft-orange)", name: "Farhan Ali", title: "UPSC History Guide", org: "Civil Services Mentor", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop" },
];

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("Class 10");
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={{ backgroundColor: 'var(--bg-clean)', minHeight: '100vh', fontFamily: "'Outfit', sans-serif" }}>
      <Navbar />

      {/* ── SECTION 01: HERO ── */}
      <section style={{ 
        paddingTop: 180, 
        paddingBottom: 100, 
        paddingLeft: 80, 
        paddingRight: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 1400,
        margin: '0 auto',
        gap: 40
      }}>
        <div style={{ flex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-badge"
            style={{ marginBottom: 32 }}
          >
             Global Tutor Ecosystem ⚡
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ fontSize: '5rem', fontWeight: 800, color: 'var(--text-strong)', lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.02em' }}
          >
            Find the perfect<br /><span className="text-gradient-primary">Tutor</span> instantly
          </motion.h1>
          <p style={{ fontSize: '1.4rem', color: 'var(--text-medium)', lineHeight: 1.6, marginBottom: 48, maxWidth: 550 }}>
            Make money from your tuition classes, sell study material, host live cohorts, and grow your teaching brand — all from a single link.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <button 
              className="btn btn-cta"
              onClick={() => window.location.href = '/signup'}
              style={{ 
                padding: '24px 48px', 
                borderRadius: 20, 
                fontSize: '1.2rem', 
                fontWeight: 800, 
              }}
            >
              Start Teaching <ArrowRight size={24} />
            </button>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '1rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-strong)' }}>
                100k+ <span style={{ color: 'var(--rating-star)', display: 'flex' }}>{[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}</span> reviews
              </div>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-subtle)', fontWeight: 600 }}>1mn+ professionals trust us</div>
            </div>
          </div>
        </div>

        {/* HERO ANIMATED GRID - Topmate Style */}
        <div style={{ 
          flex: 1, 
          height: 640, 
          position: 'relative', 
          overflow: 'hidden',
          display: 'flex',
          gap: 24,
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
        }}>
          {/* Column 1 - Moving Up */}
          <motion.div 
            animate={{ y: [0, -1000] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            style={{ display: 'flex', flexDirection: 'column', gap: 24, flex: 1 }}
          >
            {[...TUTORS_COLUMN_1, ...TUTORS_COLUMN_1, ...TUTORS_COLUMN_1].map((exp, i) => (
              <TutorHeroCard key={i} {...exp} />
            ))}
          </motion.div>

          {/* Column 2 - Moving Down */}
          <motion.div 
            animate={{ y: [-1000, 0] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            style={{ display: 'flex', flexDirection: 'column', gap: 24, flex: 1, marginTop: -60 }}
          >
            {[...TUTORS_COLUMN_2, ...TUTORS_COLUMN_2, ...TUTORS_COLUMN_2].map((exp, i) => (
              <TutorHeroCard key={i} {...exp} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 02: GREEN BANNER (TRUST) ── */}
      <section style={{ background: 'var(--text-strong)', padding: '100px 20px' }}>
        <h2 style={{ color: 'white', textAlign: 'center', fontSize: '3rem', marginBottom: 60, fontWeight: 300 }}>
          New on <span className="text-gradient-primary" style={{ fontWeight: 900 }}>tutor</span><span className="text-gradient-primary" style={{ fontWeight: 200 }}>mate</span>
        </h2>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{ 
            background: 'var(--dark-green)', 
            maxWidth: 1300, 
            margin: '0 auto', 
            borderRadius: 40, 
            padding: '60px 80px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 60,
            boxShadow: '0 40px 100px rgba(0,0,0,0.3)'
          }}
        >
          <div style={{ flex: 1 }}>
             <h3 style={{ color: 'white', fontSize: '2.8rem', fontWeight: 800, marginBottom: 32, lineHeight: 1.1 }}>Grow beyond<br />1:1 tuition</h3>
             <div style={{ display: 'flex', gap: 16 }}>
                <button className="btn btn-white" style={{ borderRadius: 99, padding: '14px 32px' }} onClick={() => window.location.href = '/ecosystem'}>Explore Ecosystem</button>
             </div>
          </div>
          <div style={{ flex: 2, display: 'flex', flexWrap: 'wrap', gap: 20 }}>
             <FeatureCapsule label="Study Material" icon={<Book size={24} color="var(--primary-blue)" />} onClick={() => window.location.href = '/marketplace'} />
             <FeatureCapsule label="Live Cohorts" icon={<Users size={24} color="var(--mint-green)" />} onClick={() => window.location.href = '/livecohorts'} />
             <FeatureCapsule label="Course Packets" icon={<Package size={24} color="var(--purple)" />} onClick={() => window.location.href = '/marketplace'} />
             <FeatureCapsule label="Group Classes" icon={<Zap size={24} color="var(--rating-star)" />} onClick={() => window.location.href = '/groupclasses'} />
             <FeatureCapsule label="Digital Products" icon={<Globe size={24} color="var(--primary-blue)" />} onClick={() => window.location.href = '/marketplace'} />
          </div>
        </motion.div>
      </section>

      {/* ── SECTION 03: FLASH PAGE ── */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ padding: '140px 80px', maxWidth: 1400, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 100 }}
      >
        <div style={{ flex: 1 }}>
           <h2 style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--text-strong)', marginBottom: 32, lineHeight: 1.1 }}>Create your<br />TutorMate page in a <span style={{ color: 'var(--cta-orange)' }}>flash</span></h2>
           <p style={{ fontSize: '1.4rem', color: 'var(--text-medium)', marginBottom: 56, lineHeight: 1.6 }}>Start earning $$ by the time you finish reading our website. Seamless onboarding, instant storefront.</p>
           
           <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              <AccordionItem num="01" title="Offer 1:1 Tuition" desc="Personalized learning sessions, doubt clearing, or exam guidance - teach what you love. We handle the rest." defaultOpen={true} />
              <AccordionItem num="02" title="Setup Doubt Solving in seconds" desc="Help students with specific roadblocks and grow your tuition business efficiently." />
              <AccordionItem num="03" title="Host a Group Class" desc="Reach dozens of students at once with seamless live group teaching." />
              <AccordionItem num="04" title="Bundle Learning Resources" desc="Boost your earnings by packaging recorded classes and study materials." />
            </div>
        </div>
        <div style={{ flex: 1, background: 'var(--soft-blue)', borderRadius: 64, padding: 80, position: 'relative', border: '1px solid var(--border-light)' }}>
           <div style={{ background: 'var(--bg-white)', borderRadius: 32, padding: 48, boxShadow: 'var(--shadow-hover)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 32 }}>
                 <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--primary-blue)', border: '4px solid white' }}>
                    <img src="https://i.pravatar.cc/200?u=sandeep" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} alt="Sandeep" />
                 </div>
                 <div>
                    <div style={{ fontWeight: 900, fontSize: '1.4rem', color: 'var(--text-strong)' }}>Sandeep Sethi</div>
                    <div style={{ color: 'var(--primary-blue)', fontSize: '1rem', fontWeight: 700 }}>tutormate.io/sandeep</div>
                 </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                 <div style={{ height: 16, background: 'var(--bg-soft-grey)', borderRadius: 8, width: '100%' }}></div>
                 <div style={{ height: 16, background: 'var(--bg-soft-grey)', borderRadius: 8, width: '80%' }}></div>
                 <div style={{ height: 50, background: 'var(--cta-orange)', borderRadius: 16, width: '100%', marginTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800 }}>Visit Storefront</div>
              </div>
           </div>
           {/* Floating Success Notifs */}
           <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 4 }} style={{ position: 'absolute', top: 40, right: -20, background: 'white', padding: '16px 28px', borderRadius: 99, boxShadow: 'var(--shadow-hover)', display: 'flex', alignItems: 'center', gap: 12, fontWeight: 800, color: 'var(--text-strong)' }}>
              <Zap size={20} color="var(--rating-star)" fill="var(--rating-star)" /> New sale | ₹3,000
           </motion.div>
           <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 1 }} style={{ position: 'absolute', bottom: 120, left: -40, background: 'white', padding: '16px 28px', borderRadius: 99, boxShadow: 'var(--shadow-hover)', display: 'flex', alignItems: 'center', gap: 12, fontWeight: 800, color: 'var(--text-strong)' }}>
              <CheckCircle size={20} color="var(--mint-green)" /> New testimonial +5★
           </motion.div>
        </div>
      </motion.section>

      {/* ── SECTION 04: TESTIMONIALS (DARK) ── */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ background: '#0f172a', padding: '140px 80px' }}
      >
        <h2 style={{ color: 'white', fontSize: '4rem', fontWeight: 800, textAlign: 'center', marginBottom: 100, letterSpacing: '-0.02em' }}>Scale your <span className="text-gradient-primary">impact & income</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, maxWidth: 1400, margin: '0 auto' }}>
           <TestimonialCard text="The WhatsApp and Calendar integrations make scheduling my doubt-solving sessions so easy!" author="Aishwarya Sharma" role="JEE Physics Tutor" />
           <TestimonialCard text="My students love the seamless booking experience. It's the best platform for independent teachers!" author="Rohit Verma" role="English Language Tutor" />
           <TestimonialCard text="TutorMate is my primary tool for hosting group classes and selling revision notes!" author="Saurav Chaudhary" role="Maths Tutor" />
           <TestimonialCard text="Every single lesson booking and payment now happens in one place. Truly game-changing." author="Isha Kapoor" role="Middle School Teacher" />
           <TestimonialCard text="The platform's focus on education makes me feel right at home. Highly recommended for all tutors!" author="Arjun Mehta" role="Coding Tutor" />
           <TestimonialCard text="I love TutorMate! It has made it effortless to manage my tuitions and classes." author="Jessica" role="SAT English Tutor" />
        </div>
      </motion.section>

      {/* ── SECTION 05: EARN & CONVERT GRID ── */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ padding: '140px 80px', maxWidth: 1400, margin: '0 auto' }}
      >
        <h2 style={{ fontSize: '4rem', fontWeight: 800, textAlign: 'center', color: 'var(--text-strong)', marginBottom: 100, letterSpacing: '-0.02em' }}>
          Earn & Convert <span style={{ fontWeight: 400 }}>more with </span> 
          <span className="text-gradient-primary" style={{ fontWeight: 900 }}>tutor</span><span className="text-gradient-primary" style={{ fontWeight: 300 }}>mate</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 320px)', gap: 40 }}>
           <ValueCard bg="var(--soft-blue)" textColor="var(--primary-blue)" title="2X" desc="Convert better with localized currency" icon={<Globe size={48} />} />
           <ValueCard bg="var(--soft-purple)" textColor="var(--purple)" title="40%" desc="Increase in conversion with social proof" icon={<CheckCircle size={48}/>}/>
           <ValueCard bg="var(--soft-green)" textColor="var(--dark-green)" title="4X" desc="Earnings with country based pricing" icon={<Zap size={48} />} />
           <ValueCard bg="var(--bg-white)" border="1px solid var(--border-light)" title="Instant" desc="Withdraw directly to your bank account" icon={<CreditCard size={48} color="var(--primary-blue)"/>} />
           <ValueCard bg="var(--rating-bg)" textColor="var(--rating-star)" title="13%" desc="Uplift in bookings with cart recovery" icon={<ShieldCheck size={48}/>}/>
           <ValueCard bg="var(--soft-blue)" textColor="var(--primary-blue)" title="AI" desc="Automated funnels that bring you bookings" icon={<Sparkles size={48} />} />
        </div>
      </motion.section>

      {/* ── TUTOR DISCOVERY ── */}
      <section style={{ padding: '140px 80px', background: 'var(--bg-soft-grey)' }}>
         <h2 style={{ fontSize: '4rem', fontWeight: 300, textAlign: 'center', color: 'var(--text-strong)', marginBottom: 32 }}>The <span style={{ fontWeight: 800 }}>Go-To Platform</span> for Tutors</h2>
         <p style={{ textAlign: 'center', color: 'var(--text-medium)', fontSize: '1.4rem', marginBottom: 64, maxWidth: 800, margin: '0 auto 64px' }}>Teachers from every subject use TutorMate to build trust, grow income, and stay booked.</p>
         
         <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16, marginBottom: 80, maxWidth: 1000, margin: '0 auto 80px' }}>
            {CATEGORIES.map(cat => (
               <button 
                key={cat} 
                className={activeCategory === cat ? 'btn btn-primary' : 'btn btn-white'}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '16px 32px',
                  border: activeCategory === cat ? 'none' : '1px solid var(--border-light)',
                  borderRadius: 99,
                }}
               >
                 {cat}
               </button>
            ))}
         </div>

         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 32, maxWidth: 1400, margin: '0 auto' }}>
            <TutorCard name="Saurav Chaudhary" role="Prep Tutor" img="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop" />
            <TutorCard name="Sanjeev Kumar" role="Engineering Tutor" img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" />
            <TutorCard name="Nandini Agrawal" role="Marketing Tutor" img="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop" />
            <TutorCard name="Code Bashers" role="Coding Community" img="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=300&fit=crop" />
            <TutorCard name="Farhan Ali" role="Tech Sales Tutor" img="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop" />
         </div>
      </section>

      {/* ── SECTION 07: FAQ ── */}
      <section style={{ padding: '140px 80px', maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 120 }}>
         <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--text-strong)', marginBottom: 24, lineHeight: 1.1 }}>Common <br />Questions</h2>
            <p style={{ color: 'var(--text-medium)', fontSize: '1.2rem', marginBottom: 32 }}>Can't find the answer you are looking for?</p>
            <a href="#" style={{ color: 'var(--primary-blue)', fontWeight: 800, textDecoration: 'none', fontSize: '1.1rem' }}>Reach out to support ↗</a>
         </div>
         <div style={{ flex: 1.5 }}>
            {FAQ_DATA.map((faq, i) => (
               <div key={i} style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: 32, marginBottom: 32 }}>
                  <div 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                  >
                     <h4 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0, color: 'var(--text-strong)' }}>{faq.q}</h4>
                     <ChevronDown size={24} color="var(--text-subtle)" style={{ transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
                  </div>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: 'hidden' }}
                      >
                         <p style={{ color: 'var(--text-medium)', marginTop: 20, lineHeight: 1.7, fontSize: '1.15rem' }}>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
               </div>
            ))}
         </div>
      </section>

      <Footer />

    </div>
  );
};

// Helper Components
const TutorHeroCard = ({ bg, name, title, org, img }) => (
  <motion.div 
    whileHover={{ y: -12, scale: 1.05 }}
    style={{ 
      background: 'var(--bg-white)', 
      borderRadius: 28, 
      overflow: 'hidden', 
      boxShadow: 'var(--shadow-subtle)',
      flexShrink: 0,
      cursor: 'pointer',
      border: '1px solid var(--border-light)'
    }}
  >
    <div style={{ height: 160, backgroundColor: bg }}>
       <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    <div style={{ padding: 20 }}>
       <div style={{ fontWeight: 900, fontSize: '1.1rem', color: 'var(--text-strong)' }}>{name}</div>
       <div style={{ color: 'var(--text-subtle)', fontSize: '0.9rem', fontWeight: 700 }}>{title}</div>
    </div>
  </motion.div>
);

const FeatureCapsule = ({ label, icon, onClick }) => (
  <div 
    onClick={onClick}
    style={{ 
        background: 'var(--bg-white)', 
        padding: '16px 32px', 
        borderRadius: 99, 
        display: 'flex', 
        alignItems: 'center', 
        gap: 16, 
        fontWeight: 800, 
        boxShadow: 'var(--shadow-hover)',
        cursor: 'pointer',
        transition: '0.2s'
    }}
    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
  >
    {icon} {label}
  </div>
);

const AccordionItem = ({ num, title, desc, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: 32 }}>
       <div 
        onClick={() => setIsOpen(!isOpen)}
        style={{ display: 'flex', alignItems: 'center', gap: 32, cursor: 'pointer' }}
       >
          <span style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--cta-orange)' }}>{num}</span>
          <h4 style={{ flex: 1, fontSize: '1.6rem', fontWeight: 800, margin: 0, color: 'var(--text-strong)' }}>{title}</h4>
          <ChevronDown size={28} color="var(--text-subtle)" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
       </div>
       <AnimatePresence>
         {isOpen && (
           <motion.p 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            style={{ paddingLeft: 64, marginTop: 24, color: 'var(--text-medium)', lineHeight: 1.7, fontSize: '1.2rem', margin: 0 }}
           >
             {desc}
           </motion.p>
         )}
       </AnimatePresence>
    </div>
  )
};

const TestimonialCard = ({ text, author, role }) => (
  <div style={{ background: 'var(--bg-white)', padding: 48, borderRadius: 40, boxShadow: '0 20px 50px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
     <div>
        <div style={{ display: 'flex', gap: 6, marginBottom: 32, color: 'var(--rating-star)' }}>
          {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
        </div>
        <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-strong)', lineHeight: 1.6 }}>"{text}"</p>
     </div>
     <div style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--primary-blue)', border: '3px solid white' }}>
           <img src={`https://i.pravatar.cc/100?u=${author}`} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} alt="" />
        </div>
        <div>
           <div style={{ fontWeight: 900, fontSize: '1.1rem', color: 'var(--text-strong)' }}>{author}</div>
           <div style={{ color: 'var(--text-subtle)', fontSize: '0.9rem', fontWeight: 700 }}>{role}</div>
        </div>
     </div>
  </div>
);

const ValueCard = ({ bg, textColor, title, desc, icon, border }) => (
  <div style={{ background: bg, border, padding: 48, borderRadius: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: 'var(--shadow-subtle)' }}>
     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <h3 style={{ fontSize: '4.5rem', fontWeight: 900, margin: 0, lineHeight: 1, color: textColor || 'var(--text-strong)' }}>{title}</h3>
        {icon}
     </div>
     <p style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0, lineHeight: 1.3, maxWidth: '85%', color: 'var(--text-strong)' }}>{desc}</p>
  </div>
);

const TutorCard = ({ name, role, img }) => (
  <motion.div 
    whileHover={{ y: -12, scale: 1.05 }}
    onClick={() => window.location.href = '/marketplace'}
    style={{ background: 'var(--bg-white)', borderRadius: 32, padding: 0, overflow: 'hidden', boxShadow: 'var(--shadow-subtle)', cursor: 'pointer', border: '1px solid var(--border-light)' }}
  >
     <div style={{ height: 220 }}>
        <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
     </div>
     <div style={{ padding: 24 }}>
        <div style={{ fontWeight: 900, fontSize: '1.1rem', color: 'var(--text-strong)' }}>{name}</div>
        <div style={{ color: 'var(--text-subtle)', fontSize: '0.95rem', fontWeight: 700 }}>{role}</div>
     </div>
  </motion.div>
)

export default Home;
