import React from 'react';
import { motion } from 'framer-motion';
import { Video, Zap, Users, ShieldCheck, Mail, MessageSquare, Calendar, CreditCard, RotateCw, Play, Globe, CheckCircle, ArrowRight, Star, Heart, Layers as LayersIcon } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Webinars = () => {
  return (
    <div style={{ background: 'var(--bg-clean)', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      
      {/* ── SECTION 01: HERO ── */}
      <section style={{ paddingTop: 180, paddingBottom: 120, textAlign: 'center' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 80px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-badge"
            style={{ marginBottom: 32 }}
          >
            Live Classes & Workshops
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '5rem', fontWeight: 900, color: 'var(--text-strong)', marginBottom: 24, lineHeight: 1.1, fontFamily: "'Outfit', sans-serif" }}
          >
            Host Paid Live Classes <br /> <span className="text-gradient-primary">with Zero Setup</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.4rem', color: 'var(--text-medium)', maxWidth: 800, margin: '0 auto 48px', lineHeight: 1.6, fontWeight: 500 }}
          >
            Zoom Pro built-in. Every session auto-recorded. Sell the replay. <br />
            Email your attendees. WhatsApp reminders included.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 40 }}
          >
            <button className="btn btn-cta" style={{ padding: '20px 48px', borderRadius: 20, fontSize: '1.2rem' }}>
              Host Your First Class Free
            </button>
            <button className="btn btn-white" style={{ padding: '20px 48px', borderRadius: 20, fontSize: '1.2rem' }}>
              Watch Demo
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}
          >
             <div style={{ display: 'flex' }}>
                {[1,2,3].map(i => (
                   <div key={i} style={{ width: 36, height: 36, borderRadius: '50%', border: '3px solid white', marginLeft: i === 1 ? 0 : -12, background: 'var(--bg-soft-grey)', overflow: 'hidden' }}>
                      <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                   </div>
                ))}
             </div>
             <span style={{ fontSize: '0.95rem', color: 'var(--text-subtle)', fontWeight: 700 }}>300K+ tutors · 1M+ classes hosted · 4.9 ★</span>
          </motion.div>

          {/* Video Player Mock */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: 'spring', damping: 20 }}
            style={{ 
              marginTop: 100,
              aspectRatio: '16/9',
              background: '#0a0a0a',
              borderRadius: 56,
              maxWidth: 1000,
              margin: '100px auto 0',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 60px 140px rgba(0,0,0,0.2)',
              border: '16px solid #111'
            }}
          >
             <div style={{ position: 'absolute', top: 32, left: 32, display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 900, fontSize: '1.1rem' }}>AM</div>
                <div style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(12px)', padding: '8px 20px', borderRadius: 99, color: 'white', fontSize: '0.85rem', fontWeight: 800 }}>
                   Ananya is Live
                </div>
             </div>
             <div style={{ position: 'absolute', top: 32, right: 32 }}>
                <div style={{ background: '#ef4444', color: 'white', padding: '8px 20px', borderRadius: 12, fontSize: '0.8rem', fontWeight: 900, display: 'flex', alignItems: 'center', gap: 8 }}>
                   <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 2 }} style={{ width: 10, height: 10, borderRadius: '50%', background: 'white' }} /> LIVE
                </div>
             </div>

             <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 3 }} style={{ display: 'flex', gap: 6, height: 60, alignItems: 'center' }}>
                   {[1,2,3,4,5,4,3,2,1].map((h, i) => (
                      <div key={i} style={{ width: 6, height: h * 12, background: 'var(--primary-blue)', borderRadius: 3 }} />
                   ))}
                </motion.div>
             </div>

             <div style={{ position: 'absolute', bottom: 40, left: 40, right: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: 16 }}>
                   <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}><Video size={24}/></div>
                   <div style={{ minWidth: 160, height: 56, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', borderRadius: 16, display: 'flex', alignItems: 'center', gap: 12, padding: '0 20px', color: 'white', fontSize: '0.9rem', fontWeight: 800 }}>
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }} /> Cloud Recording
                   </div>
                </div>
                <button style={{ background: 'white', color: '#1a1a1a', border: 'none', padding: '16px 32px', borderRadius: 16, fontWeight: 900, fontSize: '1rem', cursor: 'pointer' }}>
                   End Workshop
                </button>
             </div>

             {/* Floating Replay Card */}
             <motion.div 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, type: 'spring' }}
                style={{ 
                  position: 'absolute', 
                  top: '45%', 
                  right: 48, 
                  background: 'var(--bg-white)', 
                  padding: 28, 
                  borderRadius: 32, 
                  boxShadow: 'var(--shadow-hover)',
                  width: 320,
                  border: '1px solid var(--border-light)'
                }}
             >
                <div style={{ fontSize: '0.75rem', fontWeight: 900, color: 'var(--primary-blue)', textTransform: 'uppercase', marginBottom: 16, letterSpacing: '0.1em' }}>New Replay Ready</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                   <div style={{ width: 64, height: 64, borderRadius: 16, background: 'var(--bg-soft-grey)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-strong)' }}><RotateCw size={28}/></div>
                    <div>
                       <div style={{ fontWeight: 900, fontSize: '1.1rem', color: 'var(--text-strong)' }}>Class Replay</div>
                       <div style={{ fontSize: '0.9rem', color: 'var(--mint-green)', fontWeight: 800 }}>Set Price: ₹499</div>
                    </div>
                </div>
             </motion.div>

             <div style={{ position: 'absolute', bottom: 50, left: -60, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(24px)', padding: '16px 32px', borderRadius: 24, color: 'white', display: 'flex', alignItems: 'center', gap: 16, border: '1px solid rgba(255,255,255,0.1)' }}>
                <Users size={24} color="var(--primary-blue)"/> <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>248 Attendees online</span>
             </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 02: FEATURES (DARK) ── */}
      <section style={{ background: '#0a0a0a', padding: '160px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '5rem', fontWeight: 900, color: 'white', marginBottom: 100, fontFamily: "'Outfit', sans-serif" }}>
            Zoom, recording, replays, <br /> <span style={{ color: 'var(--text-subtle)' }}>reminders. All for your students.</span>
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
            <FeatureCard 
               icon={<Video size={28}/>} 
               title="Free Zoom Pro Built-In" 
               desc="Every live class runs on Zoom Pro. No separate Zoom account or subscription needed. Just click start." 
               badge="Zoom Pro"
               badgeColor="var(--primary-blue)"
            />
            <FeatureCard 
               icon={<RotateCw size={28}/>} 
               title="Auto-Recording" 
               desc="Every session is recorded automatically in HD. Use replays for course content or marketing clips." 
               badge="HD Cloud"
               badgeColor="var(--purple)"
            />
            <FeatureCard 
               icon={<CreditCard size={28}/>} 
               title="Sell Recordings as Replays" 
               desc="Turn every live class into a passive revenue stream — sell study replays indefinitely with one click." 
               badge="₹499"
               badgeColor="var(--mint-green)"
            />
            <FeatureCard 
               icon={<Users size={28}/>} 
               title="Attendee Management" 
               desc="Advanced dashboard to see who registered, who attended, and their interaction metrics." 
               badge="CRM"
               badgeColor="var(--dark-blue)"
            />
            <FeatureCard 
               icon={<Mail size={28}/>} 
               title="Bulk Email Communications" 
               desc="Email your entire attendee list directly with resources, links, or upsells after the event." 
               badge="Marketing"
               badgeColor="var(--cta-orange)"
            />
            <FeatureCard 
               icon={<MessageSquare size={28}/>} 
               title="WhatsApp Automations" 
               desc="Maximize attendance with automatic WhatsApp reminders 24 hours and 1 hour before go-live." 
               badge="Reminders"
               badgeColor="var(--mint-green)"
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 03: MONETIZATION ── */}
      <section style={{ padding: '160px 80px', background: 'var(--bg-clean)' }}>
         <div style={{ maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '4.5rem', fontWeight: 900, color: 'var(--text-strong)', marginBottom: 100, fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.02em' }}>
               Four ways to earn from <br /> <span className="text-gradient-primary">one single live class</span>
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 48, maxWidth: 1100, margin: '0 auto' }}>
               <MoneyCard icon={<Zap size={32}/>} title="Free Class + Upsell" desc="Run a high-value introductory session, then pitch your full course or 1:1 tuition." num="01" />
               <MoneyCard icon={<CreditCard size={32}/>} title="Direct Tuition Fees" desc="Charge for a seat. Scarcity & urgency drive higher enrollment for group classes." num="02" />
               <MoneyCard icon={<RotateCw size={32}/>} title="Replay Learning Sales" desc="Scale infinitely by selling the recording to students who missed the live slot." num="03" />
               <MoneyCard icon={<LayersIcon size={32}/>} title="Batch Foundation" desc="Use your live class series as the core building block for a premium foundation batch." num="04" />
            </div>
         </div>
      </section>

      {/* ── SECTION 05: ATTENDEE CARE ── */}
      <section style={{ padding: '140px 80px', background: 'var(--bg-white)', borderTop: '1px solid var(--border-light)' }}>
         <div style={{ maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '4.5rem', fontWeight: 900, color: 'var(--text-strong)', marginBottom: 100, fontFamily: "'Outfit', sans-serif" }}>
               From signup to replay, we <br /> <span style={{ color: 'var(--primary-blue)' }}>handle the full student journey</span>
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
               <CareCard 
                  title="Instant Calendar Invites" 
                  desc="Every registrant automatically receives a Google Calendar invite with the meeting details."
                  img={
                    <div style={{ width: '100%', height: 200, background: 'var(--soft-blue)', borderRadius: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                       <div style={{ width: 180, background: 'white', padding: 20, borderRadius: 20, boxShadow: 'var(--shadow-hover)', display: 'flex', alignItems: 'center', gap: 16 }}>
                          <Calendar size={24} color="var(--primary-blue)" />
                          <div>
                             <div style={{ fontSize: '0.8rem', fontWeight: 900 }}>Webinar Invite</div>
                             <div style={{ fontSize: '0.7rem', color: 'var(--text-subtle)' }}>zoom.us/j/123...</div>
                          </div>
                       </div>
                       <motion.div initial={{ y: 20 }} animate={{ y: 0 }} style={{ position: 'absolute', bottom: 24, background: 'var(--soft-green)', color: 'var(--dark-green)', fontSize: '0.65rem', fontWeight: 900, padding: '6px 16px', borderRadius: 8 }}>SYNCED TO CALENDAR</motion.div>
                    </div>
                  }
               />
               <CareCard 
                  title="Smart Notifications" 
                  desc="Personalized WhatsApp and email reminders to ensure 90%+ attendance rates."
                  img={
                    <div style={{ width: '100%', height: 200, background: 'var(--soft-orange)', borderRadius: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                       <div style={{ background: 'white', padding: '12px 24px', borderRadius: 12, boxShadow: 'var(--shadow-hover)', display: 'flex', alignItems: 'center', gap: 12, width: 220 }}>
                          <div style={{ width: 14, height: 14, borderRadius: 4, background: 'var(--mint-green)' }} />
                          <div style={{ fontSize: '0.75rem', fontWeight: 800 }}>Webinar starts in 1 hour</div>
                       </div>
                       <div style={{ background: 'white', opacity: 0.6, padding: '12px 24px', borderRadius: 12, boxShadow: 'var(--shadow-hover)', display: 'flex', alignItems: 'center', gap: 12, width: 220 }}>
                          <div style={{ width: 14, height: 14, borderRadius: 4, background: 'var(--primary-blue)' }} />
                          <div style={{ fontSize: '0.75rem', fontWeight: 800 }}>Webinar starts in 24 hours</div>
                       </div>
                    </div>
                  }
               />
               <CareCard 
                  title="Lifetime Replay Access" 
                  desc="One-click access to the high-quality recording after the session ends."
                  img={
                    <div style={{ width: '100%', height: 200, background: 'var(--bg-soft-grey)', borderRadius: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                       <div style={{ width: 220, height: 130, background: '#000', borderRadius: 20, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                          <Play size={40} color="var(--primary-blue)" />
                          <div style={{ position: 'absolute', bottom: 12, right: 12, fontSize: '0.75rem', fontWeight: 900, background: 'rgba(0,0,0,0.5)', padding: '4px 8px', borderRadius: 6 }}>1:24:05</div>
                          <div style={{ position: 'absolute', top: -12, right: -12, background: 'var(--primary-blue)', color: 'white', fontSize: '0.65rem', fontWeight: 900, padding: '6px 12px', borderRadius: 8 }}>HD REPLAY</div>
                       </div>
                    </div>
                  }
               />
            </div>
         </div>
      </section>

      {/* ── SECTION 06: SUCCESS STORIES (DARK) ── */}
      <section style={{ background: '#0a0a0a', padding: '160px 80px' }}>
         <div style={{ maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>
            <div className="hero-badge" style={{ marginBottom: 48, background: 'rgba(255,255,255,0.05)', color: 'var(--text-subtle)', border: '1px solid rgba(255,255,255,0.1)' }}>
               Trust Markers
            </div>
            <h2 style={{ fontSize: '5rem', fontWeight: 900, color: 'white', marginBottom: 120, fontFamily: "'Outfit', sans-serif" }}>
               Tutors already <br /> <span className="text-gradient-primary">filling their digital classrooms</span>
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, marginBottom: 140 }}>
               <SuccessCard 
                  quote="I ran a ₹999 resume review webinar for 250 people. After the event I sold the recording for another 6 months. That one 90-minute session made ₹4.5 lakhs."
                  author="Ananya D., HR Tutor"
                  result="₹4.5L REVENUE"
               />
               <SuccessCard 
                  quote="I do one paid webinar every two weeks. Each fills 300-500 seats. TutorMate handles everything. I just show up and teach. It's my primary source of income now."
                  author="Rohit K., Finance Tutor"
                  result="500+ SEATS/SESSION"
               />
               <SuccessCard 
                  quote="I was using Zoom + Google Forms + a payment link + manual emails. TutorMate replaced 5 different tools with one seamless storefront."
                  author="Devika R., Educator"
                  result="ALL-IN-ONE SYSTEM"
               />
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: 100, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 100 }}>
               <StatItem val="300k+" label="TUTORS" />
               <StatItem val="1M+" label="ATTENDEES" />
               <StatItem val="4.9★" label="AVG RATING" />
               <StatItem val="90%" label="REV SHARE" />
            </div>
         </div>
      </section>

      {/* ── SECTION 08: FINAL CTA ── */}
      <section style={{ padding: '180px 80px', background: 'var(--bg-clean)', textAlign: 'center' }}>
         <div style={{ maxWidth: 1400, margin: '0 auto' }}>
            <h2 style={{ fontSize: '5.5rem', fontWeight: 900, color: 'var(--text-strong)', marginBottom: 48, fontFamily: "'Outfit', sans-serif", lineHeight: 1.1 }}>
               Build your teaching <br /> <span className="text-gradient-primary">business today</span>
            </h2>
            <p style={{ fontSize: '1.6rem', color: 'var(--text-medium)', marginBottom: 72, maxWidth: 850, margin: '0 auto 72px' }}>
               Join 300,000+ tutors scaling their educational business. <br />
               Free setup, Zoom Pro included, and keep 90% of your earnings.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: 32 }}>
               <button className="btn btn-cta" style={{ padding: '24px 72px', borderRadius: 40, fontSize: '1.4rem' }}>
                  Get Started Free <ArrowRight size={28}/>
               </button>
               <button className="btn btn-white" style={{ padding: '24px 72px', borderRadius: 40, fontSize: '1.4rem' }}>
                  View Pricing
               </button>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
};

// Helper Components
const FeatureCard = ({ icon, title, desc, badge, badgeColor }) => (
  <div style={{ background: '#111', padding: 56, borderRadius: 40, textAlign: 'left', border: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
    <div style={{ width: 72, height: 72, borderRadius: 20, background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: 48 }}>
       {icon}
    </div>
    {badge && (
       <div style={{ position: 'absolute', top: 56, right: 56, background: badgeColor, color: 'white', padding: '6px 16px', borderRadius: 8, fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {badge}
       </div>
    )}
    <h3 style={{ color: 'white', fontSize: '1.8rem', fontWeight: 800, marginBottom: 20 }}>{title}</h3>
    <p style={{ color: 'var(--text-subtle)', lineHeight: 1.7, fontSize: '1.05rem', fontWeight: 500 }}>{desc}</p>
  </div>
);

const MoneyCard = ({ icon, title, desc, num }) => (
  <div style={{ background: 'var(--bg-white)', padding: 56, borderRadius: 40, textAlign: 'left', position: 'relative', overflow: 'hidden', boxShadow: 'var(--shadow-subtle)', border: '1px solid var(--border-light)' }}>
     <div style={{ position: 'absolute', bottom: -40, right: 60, fontSize: '14rem', fontWeight: 900, color: 'var(--bg-soft-grey)', zIndex: 0 }}>{num}</div>
     <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ width: 72, height: 72, borderRadius: 20, background: 'var(--soft-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-blue)', marginBottom: 48 }}>
           {icon}
        </div>
        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-strong)', marginBottom: 20 }}>{title}</h3>
        <p style={{ color: 'var(--text-medium)', fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.7, maxWidth: '90%' }}>{desc}</p>
     </div>
  </div>
);

const SuccessCard = ({ quote, author, result }) => (
  <div style={{ background: '#111', padding: 56, borderRadius: 40, textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 450, border: '1px solid rgba(255,255,255,0.05)' }}>
     <p style={{ color: 'var(--text-subtle)', fontSize: '1.2rem', fontWeight: 600, lineHeight: 1.7, fontStyle: 'italic' }}>"{quote}"</p>
     <div>
        <div style={{ color: 'white', fontWeight: 900, fontSize: '1.2rem', marginBottom: 12 }}>{author}</div>
        <div style={{ color: 'var(--mint-green)', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '0.15em' }}>{result}</div>
     </div>
  </div>
);

const CareCard = ({ title, desc, img }) => (
  <div style={{ background: 'var(--bg-clean)', padding: 48, borderRadius: 40, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 40, border: '1px solid var(--border-light)' }}>
     {img}
     <div>
        <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-strong)', marginBottom: 16 }}>{title}</h3>
        <p style={{ color: 'var(--text-medium)', lineHeight: 1.7, fontSize: '1.1rem', fontWeight: 500 }}>{desc}</p>
     </div>
  </div>
);

const StatItem = ({ val, label }) => (
  <div style={{ textAlign: 'center' }}>
     <div style={{ fontSize: '4.5rem', fontWeight: 900, color: 'white', fontFamily: "'Outfit', sans-serif" }}>{val}</div>
     <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-subtle)', letterSpacing: '0.2em', marginTop: 12 }}>{label}</div>
  </div>
);

export default Webinars;
