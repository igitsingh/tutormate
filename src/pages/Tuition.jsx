import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Video, 
  DollarSign, 
  Clock, 
  RotateCw, 
  ShieldCheck, 
  Zap, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  MessageSquare, 
  Mail,
  Plus,
  Play
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Tuition = () => {
  return (
    <div style={{ background: '#000', minHeight: '100vh', color: 'white', fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      
      {/* ── SECTION 01: HERO ── */}
      <section style={{ paddingTop: 180, paddingBottom: 100, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 80px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-badge"
            style={{ 
              marginBottom: 32, 
              background: 'rgba(255,255,255,0.05)', 
              color: 'var(--text-subtle)', 
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'inline-block',
              padding: '8px 20px',
              borderRadius: 99,
              fontSize: '0.85rem',
              fontWeight: 700
            }}
          >
            1:1 Meetings
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ 
              fontSize: '5.5rem', 
              fontWeight: 900, 
              color: 'white', 
              marginBottom: 32, 
              lineHeight: 1.1, 
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: '-0.03em'
            }}
          >
            Turn 1:1 Calls Into <br /> a Revenue Stream
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ 
              fontSize: '1.4rem', 
              color: 'var(--text-subtle)', 
              maxWidth: 900, 
              margin: '0 auto 56px', 
              lineHeight: 1.6, 
              fontWeight: 500 
            }}
          >
            Set your rate, share one link, and get paid. Free Zoom Pro, calendar <br /> 
            sync, and instant payouts — no subscription.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 48 }}
          >
            <button 
              onClick={() => window.location.href='/signup'}
              style={{ 
                background: 'white', 
                color: 'black', 
                padding: '20px 48px', 
                borderRadius: 20, 
                fontSize: '1.2rem', 
                fontWeight: 900, 
                border: 'none', 
                cursor: 'pointer' 
              }}
            >
              Start Getting Paid
            </button>
            <button style={{ background: 'rgba(255,255,255,0.05)', color: 'white', padding: '20px 48px', borderRadius: 20, fontSize: '1.2rem', fontWeight: 900, border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}>
              See How It Works
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 80 }}
          >
             <div style={{ display: 'flex' }}>
                {[1,2,3].map(i => (
                   <div key={i} style={{ width: 32, height: 32, borderRadius: '50%', border: '2px solid black', marginLeft: i === 1 ? 0 : -10, overflow: 'hidden' }}>
                      <img src={`https://i.pravatar.cc/100?u=meeting_${i}`} alt="user" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                   </div>
                ))}
             </div>
             <span style={{ fontSize: '0.9rem', color: 'var(--text-subtle)', fontWeight: 600 }}>Trusted by 300K+ creators · 4.9 ★ rating</span>
          </motion.div>

          {/* Booking Widget Visual Mock */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: 'spring', damping: 20 }}
            style={{ 
              maxWidth: 500, 
              margin: '0 auto', 
              background: 'rgba(20,20,20,0.8)', 
              backdropFilter: 'blur(20px)', 
              borderRadius: 40, 
              padding: 40, 
              border: '1px solid rgba(255,255,255,0.08)',
              textAlign: 'left',
              boxShadow: '0 40px 100px rgba(0,0,0,0.5)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 900 }}>AM</div>
                <div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>Design Review</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-subtle)' }}>with Alex Morgan</div>
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: 12, fontWeight: 800, fontSize: '0.9rem' }}>$150</div>
            </div>

            <div style={{ display: 'flex', gap: 12, marginBottom: 32 }}>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.03)', padding: 16, borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Date</div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Oct 21, 2024</div>
              </div>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.03)', padding: 16, borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Duration</div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>30 min</div>
              </div>
            </div>

            <div style={{ marginBottom: 32 }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: 20, textAlign: 'center' }}>October 2024</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 }}>
                {[14,15,16,17,18,19,20,21,22,23,24,25,26,27,28].map(d => (
                  <div key={d} style={{ 
                    height: 48, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    borderRadius: 12, 
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    background: d === 21 ? 'white' : 'rgba(255,255,255,0.03)',
                    color: d === 21 ? 'black' : 'white',
                    border: '1px solid rgba(255,255,255,0.05)'
                  }}>
                    {d}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 32 }}>
              <div style={{ padding: '12px 0', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, textAlign: 'center', fontSize: '0.8rem', fontWeight: 700 }}>9:00 AM</div>
              <div style={{ padding: '12px 0', border: '2px solid white', borderRadius: 12, textAlign: 'center', fontSize: '0.8rem', fontWeight: 700 }}>9:30 AM</div>
              <div style={{ padding: '12px 0', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, textAlign: 'center', fontSize: '0.8rem', fontWeight: 700 }}>10:00 AM</div>
            </div>

            <button style={{ width: '100%', background: 'white', color: 'black', padding: '18px 0', borderRadius: 16, fontWeight: 900, border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
              Confirm Booking ✓
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 02: VALUE GRID ── */}
      <section style={{ padding: '140px 80px', background: '#000' }}>
         <div style={{ maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: 80, fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.02em' }}
            >
              One link. Automated bookings. <br /> <span style={{ color: 'rgba(255,255,255,0.4)' }}>Instant payouts.</span>
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
               <ValueCard 
                  icon={<DollarSign size={28}/>} 
                  title="Set Your Rate" 
                  desc="You choose the price. Per session, per hour, or per day."
                  accent="+ $150.00"
               />
               <ValueCard 
                  icon={<Calendar size={28}/>} 
                  title="Automated Scheduling" 
                  desc="Clients book themselves. No back-and-forth DMs."
                  visual={<div style={{ display: 'flex', gap: 6 }}><div style={{ width: 24, height: 24, background: '#1a1a1a', borderRadius: 4 }} /><div style={{ width: 24, height: 24, background: 'white', borderRadius: 4 }} /><div style={{ width: 24, height: 24, background: '#1a1a1a', borderRadius: 4 }} /></div>}
               />
               <ValueCard 
                  icon={<Video size={28}/>} 
                  title="Free Zoom Pro" 
                  desc="Zoom Pro included for every creator. No 40-minute cap, no extra fee."
               />
               <ValueCard 
                  icon={<RotateCw size={28}/>} 
                  title="Calendar Sync" 
                  desc="Google Calendar syncs in one click. Your availability is always accurate."
               />
               <ValueCard 
                  icon={<Clock size={28}/>} 
                  title="Meeting Recordings" 
                  desc="Record every call with one click. Sell the replay or share it later."
               />
               <ValueCard 
                  icon={<Zap size={28}/>} 
                  title="Instant Withdrawals" 
                  desc="Withdraw after every session. INR via PayU/Razorpay, global via AirWallex/Stripe."
                  accent="⚡"
               />
            </div>
         </div>
      </section>

      {/* ── SECTION 03: HOW IT WORKS ── */}
      <section style={{ padding: '140px 80px', background: '#000', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
         <div style={{ maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: 100, fontFamily: "'Outfit', sans-serif" }}>How it works</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 40, maxWidth: 1000, margin: '0 auto' }}>
               <StepCard num="1" title="Set your rate" desc="Pick your price per session. One rate or several — you're in control." />
               <StepCard num="2" title="Sync your calendar" desc="Connect Google Calendar once. Your real availability drives the booking page." />
               <StepCard num="3" title="Share your TutorMate link" desc="One link for everything: Instagram bio, LinkedIn, email." />
               <StepCard num="4" title="Get paid" desc="They book, pay, and get a Zoom link. You get paid — no chasing." />
            </div>
         </div>
      </section>

      {/* ── SECTION 04: EXPERTISE ── */}
      <section style={{ padding: '140px 80px', background: '#000' }}>
         <div style={{ maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: 100, fontFamily: "'Outfit', sans-serif" }}>
              Built for your <br /> <span className="text-gradient-primary">specific expertise</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 40, maxWidth: 1100, margin: '0 auto' }}>
               <ExpertCard 
                  title="Career Coaching" 
                  price="₹2,000–8,000/session" 
                  desc="Résumé reviews, interview prep, career pivots — clients get clarity and next steps."
                  label="HIRED"
               />
               <ExpertCard 
                  title="Business Consulting" 
                  price="₹5,000–25,000/session" 
                  desc="Strategic advice, idea validation, process audits — paid outcomes, not free calls."
               />
               <ExpertCard 
                  title="Tech Mentorship" 
                  price="₹3,000–15,000/session" 
                  desc="Code reviews, architecture help, mock interviews — technical growth with accountability."
               />
               <ExpertCard 
                  title="Expert Ask-Me-Anything" 
                  price="₹1,500–10,000/session" 
                  desc="Short, high-value slots — clients book when they need your expertise most."
               />
            </div>
         </div>
      </section>

      {/* ── SECTION 05: CLIENT EXPERIENCE ── */}
      <section style={{ padding: '140px 80px', background: '#000', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
         <div style={{ maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: 24, fontFamily: "'Outfit', sans-serif" }}>A world-class experience</h2>
            <p style={{ color: 'var(--text-subtle)', fontSize: '1.2rem', marginBottom: 80 }}>We handle the friction so you can focus on the conversation.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
               <ExperienceCard 
                  title="Instant WhatsApp Confirmation" 
                  desc="Your client gets a WhatsApp confirmation within seconds of booking. No manual follow-up."
                  visual={<div style={{ background: 'white', color: 'black', padding: '12px 24px', borderRadius: 12, fontWeight: 900, fontSize: '0.8rem' }}>TUTORMATE <br/> Booking Confirmed! 🚀</div>}
               />
               <ExperienceCard 
                  title="Calendar Invite Auto-Sent" 
                  desc="Both creator and client receive a Google Calendar invite immediately."
                  visual={<div style={{ width: '100%', padding: '20px', background: '#1a1a1a', borderRadius: 20 }}>
                     <div style={{ fontSize: '0.75rem', fontWeight: 800 }}>1:1 Mentorship Session</div>
                     <div style={{ fontSize: '0.65rem', opacity: 0.5 }}>10:30 AM - 11:00 AM</div>
                  </div>}
               />
               <ExperienceCard 
                  title="24/7 Support" 
                  desc="TutorMate's support team handles rescheduling, tech issues, and refund queries."
                  visual={<div style={{ background: 'white', color: 'black', padding: '12px 24px', borderRadius: 30, display: 'flex', alignItems: 'center', gap: 10, fontWeight: 800, fontSize: '0.8rem' }}><ShieldCheck size={16}/> 24/7 Priority Support</div>}
               />
            </div>
         </div>
      </section>

      {/* ── SECTION 06: TESTIMONIALS ── */}
      <section style={{ padding: '140px 80px', background: '#000' }}>
         <div style={{ maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>
            <div className="hero-badge" style={{ marginBottom: 32, background: 'rgba(255,255,255,0.05)', color: 'var(--text-subtle)' }}>Success Stories</div>
            <h2 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: 100, fontFamily: "'Outfit', sans-serif" }}>Creators who turned free <br/> advice into paid sessions</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginBottom: 120 }}>
               <TestimonialCard 
                  quote="I went from charging ₹0 for advice to ₹5,000 per session. In three months, I had booked 120 sessions. TutorMate handles everything — the calendar, the payments, the Zoom link."
                  author="Priya M."
                  role="Career Coach"
                  img="https://i.pravatar.cc/100?u=priya"
               />
               <TestimonialCard 
                  quote="My LinkedIn profile was getting 2,000 views a week. I added a TutorMate link, set a ₹8,000/hr rate, and filled my calendar in the first week."
                  author="Arjun S."
                  role="Senior Software Architect"
                  img="https://i.pravatar.cc/100?u=arjun"
               />
               <TestimonialCard 
                  quote="I was manually booking through WhatsApp DMs and collecting payments via UPI. TutorMate gave me a professional setup with zero effort."
                  author="Nisha V."
                  role="Executive Coach"
                  img="https://i.pravatar.cc/100?u=nisha"
               />
            </div>

            <div style={{ 
               display: 'grid', 
               gridTemplateColumns: 'repeat(4, 1fr)', 
               gap: 40, 
               background: '#0a0a0a', 
               padding: '80px', 
               borderRadius: 60,
               border: '1px solid rgba(255,255,255,0.05)'
            }}>
               <StatItem val="300k+" label="CREATORS" />
               <StatItem val="1M+" label="BOOKINGS" />
               <StatItem val="4.9★" label="AVG RATING" />
               <StatItem val="$10M+" label="EARNED BY CREATORS" />
            </div>
         </div>
      </section>

      {/* ── SECTION 07: FAQ ── */}
      <section style={{ padding: '140px 80px', background: '#000' }}>
         <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 80 }}>
               <div className="hero-badge" style={{ marginBottom: 24, background: 'rgba(255,255,255,0.05)', color: 'var(--text-subtle)' }}>Questions</div>
               <h2 style={{ fontSize: '3.5rem', fontWeight: 900, fontFamily: "'Outfit', sans-serif" }}>Common questions about Meetings</h2>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
               {[
                  "How do I set my meeting rate?",
                  "Which calendars does TutorMate sync with?",
                  "Do I need a Zoom account?",
                  "How does TutorMate handle different timezones?",
                  "What happens if a client cancels?",
                  "Can I offer instant/on-demand calls?",
                  "What if a client doesn't show up?",
                  "Which currencies does TutorMate support?",
                  "Can I change my meeting price later?",
                  "How do I get my first booking?"
               ].map((q, i) => (
                  <div key={i} style={{ 
                     background: '#0a0a0a', 
                     padding: '24px 40px', 
                     borderRadius: 20, 
                     display: 'flex', 
                     justifyContent: 'space-between', 
                     alignItems: 'center',
                     border: '1px solid rgba(255,255,255,0.05)'
                  }}>
                     <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
                        <span style={{ fontSize: '0.8rem', opacity: 0.3, fontWeight: 800 }}>{String(i + 1).padStart(2, '0')}.</span>
                        <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>{q}</span>
                     </div>
                     <Plus size={20} opacity={0.3}/>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ── SECTION 08: FINAL CTA ── */}
      <section style={{ padding: '160px 80px', background: '#000', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
         <div style={{ maxWidth: 1400, margin: '0 auto' }}>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontSize: '5.5rem', fontWeight: 900, marginBottom: 32, fontFamily: "'Outfit', sans-serif" }}
            >
              Set up in 5 minutes. <br/> Get paid this week.
            </motion.h2>
            <p style={{ fontSize: '1.5rem', color: 'var(--text-subtle)', marginBottom: 64, maxWidth: 800, margin: '0 auto 64px' }}>
              300K+ creators already earn on TutorMate. No subscription. No setup fees. Keep 90% of every booking.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 120 }}>
               <button 
                  onClick={() => window.location.href='/signup'}
                  style={{ background: 'white', color: 'black', padding: '24px 64px', borderRadius: 40, fontSize: '1.3rem', fontWeight: 900, border: 'none', cursor: 'pointer' }}
               >
                  Start Getting Paid ↗
               </button>
               <button style={{ background: '#0a0a0a', color: 'white', padding: '24px 64px', borderRadius: 40, fontSize: '1.3rem', fontWeight: 900, border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}>
                  See Pricing
               </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 40 }}>
               <div style={{ background: '#0a0a0a', padding: '24px 40px', borderRadius: 24, border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: 16 }}>
                 <Users size={20} color="var(--primary-blue)"/>
                 <span style={{ fontWeight: 800, fontSize: '0.9rem' }}>Packages</span>
               </div>
               <div style={{ background: '#0a0a0a', padding: '24px 40px', borderRadius: 24, border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: 16 }}>
                 <RotateCw size={20} color="var(--purple)"/>
                 <span style={{ fontWeight: 800, fontSize: '0.9rem' }}>Courses</span>
               </div>
               <div style={{ background: '#0a0a0a', padding: '24px 40px', borderRadius: 24, border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: 16 }}>
                 <Play size={20} color="var(--mint-green)"/>
                 <span style={{ fontWeight: 800, fontSize: '0.9rem' }}>Webinars</span>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
};

// Sub-components
const ValueCard = ({ icon, title, desc, accent, visual }) => (
  <div style={{ background: '#0a0a0a', padding: 56, borderRadius: 48, textAlign: 'left', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
    <div style={{ width: 64, height: 64, background: '#111', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
      {icon}
    </div>
    {accent && (
      <div style={{ position: 'absolute', top: 56, right: 56, background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: 12, fontWeight: 900, fontSize: '0.95rem', color: '#10b981' }}>
        {accent}
      </div>
    )}
    {visual && (
      <div style={{ position: 'absolute', top: 56, right: 56 }}>
        {visual}
      </div>
    )}
    <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 20 }}>{title}</h3>
    <p style={{ color: 'var(--text-subtle)', lineHeight: 1.6, fontSize: '1.1rem' }}>{desc}</p>
  </div>
);

const StepCard = ({ num, title, desc }) => (
   <div style={{ background: '#0a0a0a', padding: '56px', borderRadius: 48, textAlign: 'left', border: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
      <div style={{ fontSize: '8rem', fontWeight: 900, position: 'absolute', bottom: -20, right: 40, opacity: 0.05 }}>{num}</div>
      <div style={{ position: 'relative', zIndex: 1 }}>
         <div style={{ width: 48, height: 48, background: '#111', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 40, fontWeight: 900, fontSize: '0.75rem', opacity: 0.5 }}>STEP 0{num}</div>
         <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 20 }}>{title}</h3>
         <p style={{ color: 'var(--text-subtle)', lineHeight: 1.6, fontSize: '1.1rem' }}>{desc}</p>
      </div>
   </div>
);

const ExpertCard = ({ title, price, desc, label }) => (
   <div style={{ background: '#0a0a0a', padding: 56, borderRadius: 48, textAlign: 'left', border: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
      {label && (
         <div style={{ position: 'absolute', top: 56, right: 56, background: 'white', color: 'black', padding: '6px 14px', borderRadius: 12, fontSize: '0.7rem', fontWeight: 900 }}>{label}</div>
      )}
      <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 12 }}>{title}</h3>
      <div style={{ color: 'var(--purple)', fontWeight: 800, fontSize: '1.1rem', marginBottom: 32 }}>{price}</div>
      <p style={{ color: 'var(--text-subtle)', lineHeight: 1.6, fontSize: '1.1rem' }}>{desc}</p>
   </div>
);

const ExperienceCard = ({ title, desc, visual }) => (
   <div style={{ background: '#0a0a0a', padding: '56px 40px', borderRadius: 48, textAlign: 'left', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: 40 }}>
      <div style={{ height: 200, background: '#111', borderRadius: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
         {visual}
      </div>
      <div>
         <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 20 }}>{title}</h3>
         <p style={{ color: 'var(--text-subtle)', lineHeight: 1.7, fontSize: '1.05rem' }}>{desc}</p>
      </div>
   </div>
);

const TestimonialCard = ({ quote, author, role, img }) => (
   <div style={{ background: '#0a0a0a', padding: 56, borderRadius: 48, textAlign: 'left', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: 48 }}>
      <p style={{ fontSize: '1.15rem', color: 'var(--text-subtle)', lineHeight: 1.7, fontStyle: 'italic' }}>"{quote}"</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
         <img src={img} alt={author} style={{ width: 56, height: 56, borderRadius: '50%' }} />
         <div>
            <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>{author}</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-subtle)' }}>{role}</div>
         </div>
      </div>
   </div>
);

const StatItem = ({ val, label }) => (
   <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '3rem', fontWeight: 900, marginBottom: 12 }}>{val}</div>
      <div style={{ fontSize: '0.75rem', fontWeight: 800, opacity: 0.3, letterSpacing: '0.15em' }}>{label}</div>
   </div>
);

export default Tuition;
