import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Zap, Calendar, CreditCard, Play, MessageSquare, 
  Layers, ArrowRight, CheckCircle, Star, BarChart3, 
  BookOpen, GraduationCap, Layout, Sparkles, Video, RotateCw 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ── HELPER COMPONENTS ──

const SessionItem = ({ title, date, active }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, opacity: active ? 1 : 0.6 }}>
       <div style={{ width: 10, height: 10, borderRadius: '50%', background: active ? 'var(--mint-green)' : 'var(--text-subtle)' }} />
       <div style={{ fontSize: '1rem', fontWeight: 700, color: active ? 'var(--bg-white)' : 'var(--text-subtle)', flex: 1 }}>{title}</div>
       <div style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', fontWeight: 600 }}>{date}</div>
    </div>
);

const TimelineItem = ({ icon, title }) => (
   <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
      <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--bg-soft-grey)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
         {icon}
      </div>
      <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-strong)' }}>{title}</div>
   </div>
);

const RevenueCard = ({ title, desc, icon, visual }) => (
   <div style={{ background: '#1a1a1a', padding: 48, borderRadius: 40, border: '1px solid rgba(255,255,255,0.05)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
         <div style={{ width: 64, height: 64, borderRadius: 20, background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 32 }}>
            {icon}
         </div>
         <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--bg-white)', marginBottom: 16 }}>{title}</h3>
         <p style={{ fontSize: '1.1rem', color: 'var(--text-subtle)', lineHeight: 1.6 }}>{desc}</p>
      </div>
      {visual}
   </div>
);

const CohortCareCard = ({ title, desc, img }) => (
   <div style={{ background: 'var(--bg-white)', padding: 40, borderRadius: 40, textAlign: 'left', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-subtle)' }}>
      {img}
      <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-strong)', marginBottom: 16, marginTop: 32 }}>{title}</h3>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-medium)', lineHeight: 1.6 }}>{desc}</p>
   </div>
);

const CohortSuccessCard = ({ quote, author, result }) => (
   <div style={{ background: '#1a1a1a', padding: 48, borderRadius: 40, border: '1px solid rgba(255,255,255,0.05)', textAlign: 'left', minHeight: 380, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Star size={24} color="var(--rating-star)" style={{ marginBottom: 32 }} />
      <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--bg-white)', lineHeight: 1.7, marginBottom: 32 }}>"{quote}"</p>
      <div>
         <div style={{ fontSize: '1rem', color: 'var(--bg-white)', fontWeight: 800, marginBottom: 8 }}>{author}</div>
         <div style={{ fontSize: '0.85rem', color: 'var(--mint-green)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{result}</div>
      </div>
   </div>
);

const CohortStatItem = ({ val, label }) => (
   <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--bg-white)', marginBottom: 12, fontFamily: "'Outfit', sans-serif" }}>{val}</div>
      <div style={{ fontSize: '0.9rem', color: 'var(--text-subtle)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em' }}>{label}</div>
   </div>
);

const FAQItem = ({ q, a }) => {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: 24 }}>
         <button 
            onClick={() => setIsOpen(!isOpen)}
            style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', padding: '12px 0', cursor: 'pointer', textAlign: 'left' }}
         >
            <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-strong)' }}>{q}</span>
            <div style={{ color: 'var(--text-subtle)', transform: isOpen ? 'rotate(45deg)' : 'none', transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
               <Zap size={24} fill={isOpen ? 'var(--cta-orange)' : 'none'} color={isOpen ? 'var(--cta-orange)' : 'currentColor'} />
            </div>
         </button>
         <AnimatePresence>
            {isOpen && (
               <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  style={{ overflow: 'hidden' }}
               >
                  <p style={{ fontSize: '1.15rem', color: 'var(--text-medium)', lineHeight: 1.7, paddingTop: 16 }}>{a}</p>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
};

const Cohorts = () => {
  return (
    <div style={{ background: 'var(--bg-clean)', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      
      {/* ── SECTION 01: HERO ── */}
      <section style={{ paddingTop: 180, paddingBottom: 160, textAlign: 'center' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 80px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-badge"
            style={{ marginBottom: 48 }}
          >
            Batch Learning Programs
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            style={{ 
              fontSize: '5.2rem', 
              fontWeight: 800, 
              color: 'var(--text-strong)', 
              marginBottom: 40, 
              lineHeight: 1, 
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: '-0.03em'
            }}
          >
            Bundle Your Teaching Into <br /> 
            <span className="text-gradient-primary">a Foundation Batch</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ 
              fontSize: '1.4rem', 
              color: 'var(--text-medium)', 
              maxWidth: 900, 
              margin: '0 auto 64px', 
              lineHeight: 1.6, 
              fontWeight: 500 
            }}
          >
            Turn your live classes into a multi-week structured batch. One enrollment, scheduled sessions, and <br />
            peer accountability — batches drive 3–10× better learning outcomes than standalone <br />
            classes. Every recording helps build your student library.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 64 }}
          >
            <button 
              onClick={() => window.location.href = '/signup'}
              className="btn btn-cta" 
              style={{ padding: '24px 64px', borderRadius: 32, fontSize: '1.2rem' }}
            >
              Start Your Batch Free
            </button>
            <button 
              className="btn btn-white" 
              style={{ padding: '24px 64px', borderRadius: 32, fontSize: '1.2rem' }}
            >
              See Examples
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 140 }}
          >
             <div style={{ display: 'flex' }}>
                {[1,2,3,4,5].map(i => (
                   <div key={i} style={{ width: 40, height: 40, borderRadius: '50%', border: '3px solid white', marginLeft: i === 1 ? 0 : -12, background: 'var(--bg-soft-grey)', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                      <img src={`https://i.pravatar.cc/100?u=${i+20}`} alt="user" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                   </div>
                ))}
             </div>
             <span style={{ fontSize: '1rem', color: 'var(--text-medium)', fontWeight: 700 }}>300K+ tutors · Free to start · Keep 90%</span>
          </motion.div>

          {/* Main Hero Visual Card */}
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', damping: 25, stiffness: 60 }}
            style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}
          >
             <div style={{ background: '#111827', borderRadius: 56, padding: 56, textAlign: 'left', color: 'white', boxShadow: '0 60px 140px rgba(0,0,0,0.2)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 48 }}>
                   <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
                      <div style={{ width: 88, height: 88, borderRadius: '50%', background: '#1f2937', border: '4px solid var(--mint-green)', padding: 4, position: 'relative' }}>
                         <img src="https://i.pravatar.cc/100?u=varun" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} alt="varun" />
                         <div style={{ position: 'absolute', bottom: 6, right: 6, width: 18, height: 18, background: 'var(--mint-green)', borderRadius: '50%', border: '4px solid #111827' }} />
                      </div>
                      <div>
                         <h3 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: 6, letterSpacing: '-0.02em', color: 'white' }}>Product Management</h3>
                         <div style={{ fontSize: '1.15rem', color: 'var(--text-subtle)', fontWeight: 600 }}>with Varun T.</div>
                      </div>
                   </div>
                   <div style={{ background: 'rgba(255,255,255,0.08)', padding: '16px 28px', borderRadius: 28, fontWeight: 900, fontSize: '1.6rem' }}>₹18,000</div>
                </div>

                <div style={{ display: 'flex', gap: 40, marginBottom: 64 }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '1rem', color: 'var(--text-subtle)', fontWeight: 700 }}>
                      <Calendar size={22} color="var(--primary-blue)"/> 4 Weeks
                   </div>
                   <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '1rem', color: 'var(--text-subtle)', fontWeight: 700 }}>
                      <Users size={22} color="var(--primary-blue)"/> 40 Seats
                   </div>
                   <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '1rem', color: 'var(--text-subtle)', fontWeight: 700 }}>
                      <Video size={22} color="var(--primary-blue)"/> Live Zoom
                   </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 48 }}>
                   <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-medium)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 40 }}>Upcoming Sessions</div>
                   <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      <SessionItem title="Introduction to PM" date="Oct 21 • 7:00 PM" active />
                      <SessionItem title="Product Strategy" date="Oct 28 • 7:00 PM" />
                      <SessionItem title="Metrics & Analytics" date="Nov 04 • 7:00 PM" />
                   </div>
                </div>

                 <div 
                    className="btn btn-cta"
                    style={{ marginTop: 56, width: '100%', padding: '24px', borderRadius: 28, fontSize: '1.25rem', fontWeight: 900 }}
                 >
                    Join Foundation Batch <ArrowRight size={24}/>
                 </div>
             </div>

             {/* Floating Badge Left */}
             <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
               style={{ 
                 position: 'absolute', 
                 top: 80, 
                 left: -140, 
                 background: 'var(--text-strong)', 
                 padding: '24px 32px', 
                 borderRadius: 28, 
                 color: 'white', 
                 display: 'flex', 
                 alignItems: 'center', 
                 gap: 20, 
                 boxShadow: 'var(--shadow-hover)',
                 zIndex: 10
               }}
             >
                <div style={{ background: '#222', width: 52, height: 52, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Users size={26} color="var(--text-subtle)" />
                </div>
                <div>
                   <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Enrolled</div>
                   <div style={{ fontSize: '1.4rem', fontWeight: 900 }}>32 / 40</div>
                </div>
             </motion.div>

             {/* Floating Badge Right */}
             <motion.div 
               animate={{ y: [0, 15, 0] }}
               transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
               style={{ 
                 position: 'absolute', 
                 bottom: 120, 
                 right: -160, 
                 background: 'var(--bg-white)', 
                 padding: '24px 32px', 
                 borderRadius: 28, 
                 color: 'var(--text-strong)', 
                 display: 'flex', 
                 alignItems: 'center', 
                 gap: 20, 
                 boxShadow: 'var(--shadow-subtle)',
                 border: '1px solid var(--border-light)',
                 zIndex: 10
               }}
             >
                <div style={{ background: 'var(--text-strong)', width: 52, height: 52, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BookOpen size={26} color="white" />
                </div>
                <div>
                   <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Resource</div>
                   <div style={{ fontSize: '1.4rem', fontWeight: 900 }}>PDF Guide</div>
                </div>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 02: WHY COHORTS ── */}
      <section style={{ padding: '160px 80px', background: 'var(--bg-white)', borderTop: '1px solid var(--border-light)' }}>
         <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', gap: 140, alignItems: 'center' }}>
            <div style={{ flex: 1.2 }}>
               <div className="hero-badge" style={{ marginBottom: 48, background: 'var(--soft-green)', color: 'var(--dark-green)', border: 'none' }}>
                  Batch Learning
               </div>
               <h2 style={{ fontSize: '5.4rem', fontWeight: 800, color: 'var(--text-strong)', marginBottom: 56, fontFamily: "'Outfit', sans-serif", lineHeight: 1, letterSpacing: '-0.03em' }}>
                  Why batches outperform <br /> 
                  <span style={{ color: 'var(--primary-blue)' }}>standalone classes</span>
               </h2>
               <p style={{ fontSize: '1.45rem', color: 'var(--text-medium)', fontWeight: 500, lineHeight: 1.7, marginBottom: 56 }}>
                  A single class is one ticket. A batch is a full program — same expertise, organized live sessions, and a fixed group moving together. That structure justifies premium value (₹5K–₹25K per batch) and drives higher success rates. <br /><br /> On TutorMate, you build a batch from scheduled classes; every session auto-records so students never miss a lesson.
               </p>
            </div>
            <div style={{ flex: 1 }}>
               <div style={{ background: 'var(--bg-soft-grey)', padding: 80, borderRadius: 80, position: 'relative', border: '1px solid var(--border-light)' }}>
                  <div style={{ background: 'var(--bg-white)', padding: 56, borderRadius: 56, boxShadow: 'var(--shadow-subtle)', display: 'flex', flexDirection: 'column', gap: 48 }}>
                     <TimelineItem icon={<Users size={28} color="var(--primary-blue)"/>} title="Onboarding" />
                     <TimelineItem icon={<Play size={28} color="var(--mint-green)"/>} title="Live Sessions" />
                     <TimelineItem icon={<MessageSquare size={28} color="var(--purple)"/>} title="Community" />
                     <TimelineItem icon={<GraduationCap size={28} color="var(--rating-star)"/>} title="Graduation" />
                  </div>
                  
                  {/* Floating Completion Badge */}
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ margin: '-100px' }}
                    style={{ position: 'absolute', top: 80, right: -70, background: 'var(--text-strong)', color: 'white', padding: '40px 48px', borderRadius: 40, boxShadow: 'var(--shadow-hover)', zIndex: 10 }}
                  >
                     <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--mint-green)', fontSize: '0.85rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 16 }}>
                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: 'currentColor' }} /> Active Learning
                     </div>
                     <div style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: 6 }}>3x Higher</div>
                     <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-subtle)' }}>Completion</div>
                  </motion.div>
               </div>
            </div>
         </div>
      </section>

      {/* ── SECTION 03: REVENUE DRIVER (DARK) ── */}
      <section style={{ background: '#0a0a0a', padding: '160px 80px' }}>
         <div style={{ maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '5rem', fontWeight: 800, color: 'white', marginBottom: 120, fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.02em', lineHeight: 1.1 }}>
               Why batches are the <br /> <span style={{ color: 'var(--text-subtle)' }}>ultimate learning driver</span>
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 48 }}>
               {/* Premium Pricing */}
               <RevenueCard 
                  title="Premium Pricing"
                  desc="Cohorts command 3–10× the price of a single webinar. Live sessions, a fixed group, and a clear start/end date let you charge premium rates."
                  icon={<CreditCard size={32} color="var(--primary-blue)" />}
                  visual={
                    <div style={{ background: 'rgba(255,255,255,0.02)', padding: 32, borderRadius: 32, border: '1px solid rgba(255,255,255,0.05)' }}>
                       <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: 800, textTransform: 'uppercase', marginBottom: 20, letterSpacing: '0.1em' }}>Total Revenue</div>
                       <div style={{ fontSize: '3rem', fontWeight: 900, color: 'white', marginBottom: 32 }}>₹7,50,000</div>
                       <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                          {['Rahul S.', 'Sanya M.', 'Kevin D.'].map((name, i) => (
                             <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.03)', padding: '12px 20px', borderRadius: 16 }}>
                                <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                                   <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#444' }} />
                                   <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-subtle)' }}>{name}</span>
                                </div>
                                <span style={{ fontSize: '0.95rem', fontWeight: 900, color: 'var(--mint-green)' }}>₹25,000</span>
                             </div>
                          ))}
                       </div>
                    </div>
                  }
               />

               {/* Completion Rates */}
               <RevenueCard 
                  title="Higher Completion Rates"
                  desc="The shared start date and peer group create accountability. Cohort completion rates are 3× higher than self-paced formats."
                  icon={<BarChart3 size={32} color="var(--purple)" />}
                  visual={
                    <div style={{ background: 'rgba(255,255,255,0.02)', padding: 32, borderRadius: 32, border: '1px solid rgba(255,255,255,0.05)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: 800, textTransform: 'uppercase', marginBottom: 40, letterSpacing: '0.1em' }}>Completion Rate</div>
                        <div style={{ fontSize: '5rem', fontWeight: 900, color: 'white', marginBottom: 12 }}>88.4%</div>
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, height: 100, marginTop: 40 }}>
                           {[30, 45, 60, 40, 95].map((h, i) => (
                              <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 4 ? 'var(--primary-blue)' : 'rgba(255,255,255,0.1)', borderRadius: '6px 6px 0 0' }} />
                           ))}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--mint-green)', fontWeight: 800, marginTop: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
                           <Zap size={14}/> vs 24% (Self-paced) ↗
                        </div>
                    </div>
                  }
               />

               {/* Community */}
               <RevenueCard 
                  title="Community Learning"
                  desc="Students learn from each other as well as from you. Discussion and peer feedback deepen outcomes without extra prep."
                  icon={<Users size={32} color="var(--rating-star)" />}
                  visual={
                    <div style={{ background: 'rgba(255,255,255,0.02)', padding: 32, borderRadius: 32, border: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
                       <div style={{ display: 'flex', gap: 10, marginBottom: 28 }}>
                          {[1,2,3].map(i => <div key={i} style={{ width: 24, height: 24, borderRadius: '50%', background: '#444' }} />)}
                          <span style={{ fontSize: '0.8rem', color: 'var(--mint-green)', fontWeight: 800, paddingLeft: 8 }}>+37 online now</span>
                       </div>
                       <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                          <div style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.05)', padding: '12px 20px', borderRadius: '4px 16px 16px 16px', fontSize: '0.9rem', color: 'var(--text-subtle)', maxWidth: '85%', lineHeight: 1.5 }}>Just finished the assignment. The framework is solid!</div>
                          <div style={{ alignSelf: 'flex-end', background: 'var(--primary-blue)', padding: '12px 20px', borderRadius: '16px 16px 4px 16px', fontSize: '0.9rem', color: 'white', maxWidth: '85%', lineHeight: 1.5 }}>Awesome! Rahul, are you joining the Q&A?</div>
                       </div>
                    </div>
                  }
               />

               {/* Auto-Course */}
               <RevenueCard 
                  title="Auto-Organization"
                  desc="Every cohort session is recorded and organized into a professional resource library automatically — zero effort."
                  icon={<Sparkles size={32} color="var(--purple)" />}
                  visual={
                    <div style={{ background: 'rgba(255,255,255,0.02)', padding: 32, borderRadius: 32, border: '1px solid rgba(255,255,255,0.05)' }}>
                       <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'white', marginBottom: 28, letterSpacing: '0.05em' }}>Resource Library</div>
                       <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                          <div style={{ padding: '16px 20px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: 16 }}>
                             <Video size={18} color="var(--mint-green)" /> <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'white' }}>Session 01: Strategy</span>
                             <span style={{ marginLeft: 'auto', fontSize: '0.7rem', color: 'var(--mint-green)', fontWeight: 900 }}>LIVE</span>
                          </div>
                          <div style={{ padding: '16px 20px', borderRadius: 16, background: 'var(--soft-blue)', border: '1px solid var(--primary-blue)', display: 'flex', alignItems: 'center', gap: 16 }}>
                             <RotateCw size={18} color="var(--primary-blue)" /> <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary-blue)' }}>Session 02: Analysis</span>
                             <span style={{ marginLeft: 'auto', fontSize: '0.7rem', color: 'var(--primary-blue)', fontWeight: 900 }}>PROCESSING</span>
                          </div>
                          <div style={{ padding: '16px 20px', borderRadius: 16, border: '1px dashed rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: 16 }}>
                             <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#444' }}>+ Session 03: Pending</span>
                          </div>
                       </div>
                    </div>
                  }
               />
            </div>
         </div>
      </section>

      {/* ── SECTION 04: ATTENDEE CARE ── */}
      <section style={{ padding: '160px 80px', background: 'var(--bg-white)' }}>
         <div style={{ maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>
            <div className="hero-badge" style={{ marginBottom: 48 }}>
               Student Experience
            </div>
            <h2 style={{ fontSize: '5rem', fontWeight: 800, color: 'var(--text-strong)', marginBottom: 48, fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.02em' }}>
               Unmatched attendee care
            </h2>
            <p style={{ fontSize: '1.4rem', color: 'var(--text-medium)', fontWeight: 500, maxWidth: 850, margin: '0 auto 100px', lineHeight: 1.7 }}>
               From automated invitations to custom certificates, we handle the logistics so you can focus on teaching. We ensure every student stays on track.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
               <CohortCareCard 
                  title="Automated Reminders"
                  desc="WhatsApp, Email, and SMS alerts ensure your students never miss a live session. 95% attendance rates guaranteed."
                  img={<div style={{ height: 180, background: 'var(--soft-orange)', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--cta-orange)', opacity: 0.6 }}><Zap size={48} color="var(--cta-orange)" fill="var(--cta-orange)" /></div>}
               />
               <CohortCareCard 
                  title="Resource Library"
                  desc="Recordings, PDFs, and worksheets organized automatically. A permanent home for all your cohort assets."
                  img={<div style={{ height: 180, background: 'var(--soft-blue)', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--primary-blue)', opacity: 0.6 }}><Layers size={48} color="var(--primary-blue)" /></div>}
               />
               <CohortCareCard 
                  title="Custom Certificates"
                  desc="Professional co-branded certificates issued automatically upon completion. Build your brand with every graduate."
                  img={<div style={{ height: 180, background: 'var(--rating-bg)', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--rating-star)', opacity: 0.6 }}><GraduationCap size={48} color="var(--rating-star)" /></div>}
               />
            </div>
         </div>
      </section>

      {/* ── SECTION 05: SUCCESS STORIES (DARK) ── */}
      <section style={{ background: '#0a0a0a', padding: '160px 80px' }}>
         <div style={{ maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '5rem', fontWeight: 800, color: 'white', marginBottom: 120, fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.02em' }}>
               Real success, <span style={{ color: 'var(--text-subtle)' }}>real scale</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, marginBottom: 140 }}>
               <CohortSuccessCard 
                  quote="Switching my product workshop to a 4-week cohort increased my average revenue per user by 6x."
                  author="Varun T., Product Leader"
                  result="₹25L+ REVENUE"
               />
               <CohortSuccessCard 
                  quote="The community feature is a game-changer. My students learn more from each other than they ever did before."
                  author="Ananya D., UX Designer"
                  result="92% COMPLETION"
               />
               <CohortSuccessCard 
                  quote="Auto-course creation saved me 10 hours a week. I just teach live, and TutorMate builds the library."
                  author="Rohit K., Tech Architect"
                  result="500+ STUDENTS"
               />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 48, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 100 }}>
               <CohortStatItem val="300k+" label="TUTORS" />
               <CohortStatItem val="1M+" label="STUDENTS" />
               <CohortStatItem val="4.9★" label="RATING" />
               <CohortStatItem val="90%" label="REV SHARE" />
            </div>
         </div>
      </section>

      {/* ── SECTION 06: FAQ ── */}
      <section style={{ padding: '160px 80px', background: 'var(--bg-white)' }}>
         <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <h2 style={{ fontSize: '4.2rem', fontWeight: 800, color: 'var(--text-strong)', marginBottom: 100, textAlign: 'center', fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.02em' }}>
               Common Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
               <FAQItem q="How do I set up my first cohort?" a="Setting up a cohort is simple. Create a new service, select 'Cohort', and define your sessions. You can add dates, curriculum topics, and set your pricing tiers in under 5 minutes." />
               <FAQItem q="Can I charge in global currencies?" a="Yes! TutorMate supports 50+ global currencies. We handle all tax compliance, localized payment methods (like UPI, Card, PayPal), and automated invoicing." />
               <FAQItem q="How does the recording library work?" a="Every live session you host is automatically recorded and processed. Within minutes, it's organized into a structured resource library for your students to access forever." />
               <FAQItem q="Is there a limit on student count?" a="No. Whether you want an intimate 10-person mastermind or a 1000-person massive cohort, our infrastructure scales seamlessly with your needs." />
               <FAQItem q="Do I keep my student data?" a="Absolutely. You own 100% of your student list and data. You can export it anytime and use our built-in CRM tools to nurture your community." />
               <FAQItem q="What are the platform fees?" a="We win when you win. You keep 90% of your earnings. Our 10% fee covers everything: hosting, payments, automated marketing, and 24/7 support." />
            </div>
         </div>
      </section>

      {/* ── SECTION 07: FINAL CTA (DARK) ── */}
      <section style={{ background: '#0a0a0a', padding: '180px 80px', textAlign: 'center' }}>
         <div style={{ maxWidth: 1400, margin: '0 auto' }}>
            <h2 style={{ fontSize: '5.6rem', fontWeight: 800, color: 'var(--bg-white)', marginBottom: 48, fontFamily: "'Outfit', sans-serif", lineHeight: 1, letterSpacing: '-0.03em' }}>
               Build your first <br /> 
               <span className="text-gradient-primary">cohort today</span>
            </h2>
            <p style={{ fontSize: '1.6rem', color: 'var(--text-subtle)', marginBottom: 72, maxWidth: 800, margin: '0 auto 72px', lineHeight: 1.6 }}>
               Join 300,000+ tutors scaling their impact <br /> with high-impact group learning.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 32 }}>
               <button 
                  onClick={() => window.location.href = '/signup'}
                  className="btn btn-cta"
                  style={{ padding: '28px 72px', borderRadius: 40, fontSize: '1.4rem', fontWeight: 900 }}
               >
                  Start Your Batch <ArrowRight size={28}/>
               </button>
               <button 
                  className="btn btn-white"
                  style={{ padding: '28px 72px', borderRadius: 40, fontSize: '1.4rem', fontWeight: 900, background: 'transparent', color: 'white', border: '2px solid rgba(255,255,255,0.2)' }}
               >
                  Book a Demo
               </button>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cohorts;
