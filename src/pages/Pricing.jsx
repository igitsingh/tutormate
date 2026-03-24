import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, Star, Zap, ShoppingCart, Heart, Globe, MessageSquare, ThumbsUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Pricing = () => {
    return (
        <div style={{ background: '#FFFAF5', minHeight: '100vh', fontFamily: "'Inter', sans-serif", overflowX: 'hidden' }}>
            <Navbar />

            {/* ── SECTION 01: HERO (THE PRICING) ── */}
            <section style={{ padding: '160px 20px 100px', textAlign: 'center', background: 'linear-gradient(180deg, #FFF1F1 0%, #DFF3E5 100%)' }}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ 
                        fontSize: 'max(4.5rem, 6vw)', 
                        fontWeight: 900, 
                        color: 'var(--text-strong)', 
                        lineHeight: 1.05, 
                        letterSpacing: '-0.04em', 
                        maxWidth: 900, 
                        margin: '0 auto 32px', 
                        fontFamily: "'Outfit', sans-serif"
                    }}
                >
                    We earn only when <span style={{ display: 'block' }}>you <span className="text-gradient-primary">teach</span></span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    style={{ 
                        fontSize: '1.4rem', 
                        color: 'rgba(0,0,0,0.5)', 
                        maxWidth: 700, 
                        margin: '0 auto 80px',
                        lineHeight: 1.5,
                        fontWeight: 500
                    }}
                >
                    We charge a small commission on your earnings. No CC required. No upfront fees. No recurring charges.
                </motion.p>

                <div style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, padding: '0 20px' }}>
                    <PricePointCard 
                        value="10%" 
                        desc="on every class or resource sold through your profile link." 
                        accent="#F97316"
                        icon={<Star size={100} color="#F97316" fill="#F97316" style={{ opacity: 0.1, position: 'absolute', top: 20, right: 20 }} />}
                    />
                    <PricePointCard 
                        value="20%" 
                        desc={<span>Charged per transaction for students who find and book you through our <b>marketplace.</b></span>}
                        accent="#8B5CF6"
                        icon={<Star size={100} color="#8B5CF6" fill="#8B5CF6" style={{ opacity: 0.1, position: 'absolute', top: 20, right: 20 }} />}
                    />
                    <PricePointCard 
                        custom
                        value="Custom" 
                        desc={<span>High-volume tutor handling <b>100+ students/month?</b> Let's build a plan for your scale.</span>}
                        accent="#111827"
                    />
                </div>
            </section>

            {/* ── SECTION 02: VALUE PROP (DARK GREEN) ── */}
            <section style={{ background: '#132C1D', padding: '140px 80px', color: 'white', textAlign: 'center' }}>
                <h2 style={{ fontSize: 'max(3.5rem, 4.5vw)', fontWeight: 900, marginBottom: 80, fontFamily: "'Outfit', sans-serif" }}>
                    Tutors on TutorMate earn <span style={{ color: '#D4F5A1' }}>73% more</span>
                </h2>

                <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                        <ValueCard 
                            bg="#F9E0D9" 
                            color="#331812" 
                            value="17%" 
                            desc="Uplift in repeat enrollments with study material suggestions"
                            icon={<ThumbsUp size={48} />}
                        />
                        <ValueCard 
                            bg="#D9E9E0" 
                            color="#132C1D" 
                            value="25%" 
                            desc="more earnings with interactive doubt-solving sessions"
                            icon={<Heart size={48} />}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                        <ValueCard 
                            bg="#E2D9F9" 
                            color="#1E1233" 
                            value="40%" 
                            desc="increase in trust with student testimonial showcases"
                            icon={<MessageSquare size={48} />}
                        />
                        <ValueCard 
                            bg="#E9E7D9" 
                            color="#312E1A" 
                            value="13%" 
                            desc="uplift in class bookings with reminder emails"
                            icon={<ShoppingCart size={48} />}
                        />
                    </div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        style={{ 
                            gridRow: 'span 1', 
                            background: '#D4F5A1', 
                            borderRadius: 48, 
                            padding: 60, 
                            color: '#132C1D', 
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <Globe size={300} style={{ position: 'absolute', top: -50, right: -100, opacity: 0.1, color: '#132C1D' }} />
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <div style={{ display: 'flex', gap: 12, marginBottom: 40, justifyContent: 'center' }}>
                                <MetricBadge flag="🇺🇸" val="400$" />
                                <MetricBadge flag="🇮🇳" val="100$" />
                            </div>
                            <div style={{ fontSize: '5rem', fontWeight: 950, fontFamily: "'Outfit', sans-serif", lineHeight: 1, marginBottom: 12 }}>upto 4X</div>
                            <div style={{ fontSize: '1.4rem', fontWeight: 700, opacity: 0.8 }}>your earnings with <b>country based pricing</b></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── SECTION 03: COMPARISON (WHITE) ── */}
            <section style={{ padding: '140px 80px', background: 'white' }}>
                <div style={{ maxWidth: 1300, margin: '0 auto' }}>
                    <div style={{ display: 'flex', gap: 100, marginBottom: 100 }}>
                        <div style={{ flex: 1.2 }}>
                            <span style={{ color: '#F97316', fontWeight: 900, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Comparison</span>
                            <h2 style={{ fontSize: '4.5rem', fontWeight: 950, color: '#111827', marginTop: 16, lineHeight: 1.1, fontFamily: "'Outfit', sans-serif" }}>Here's why we edge past others</h2>
                        </div>
                        <div style={{ flex: 1, paddingTop: 40 }}>
                            <p style={{ fontSize: '1.25rem', color: '#4B5563', lineHeight: 1.6, fontWeight: 500 }}>
                                At TutorMate the aim is to <b>always challenge the status quo</b> and create scalable solutions that don't burn holes in the pocket.
                            </p>
                        </div>
                    </div>

                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                                <th style={{ textAlign: 'left', padding: '40px 0', width: '40%' }}></th>
                                <th style={{ textAlign: 'center', padding: '40px 0' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: '1.5rem', fontWeight: 900 }}>
                                        <div style={{ width: 32, height: 32, background: 'var(--primary-blue)', borderRadius: 8 }} className="gradient-primary-brand"></div>
                                        <span>tutor<span style={{ fontWeight: 400 }}>mate</span></span>
                                    </div>
                                </th>
                                <th style={{ textAlign: 'center', padding: '40px 0' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, fontSize: '1.5rem', fontWeight: 700, color: '#006BFF' }}>
                                        <div style={{ width: 32, height: 32, background: '#006BFF', borderRadius: '50%' }}></div>
                                        Calendly
                                    </div>
                                </th>
                                <th style={{ textAlign: 'center', padding: '40px 0' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, fontSize: '1.5rem', fontWeight: 950, color: '#FF90E8' }}>
                                        <div style={{ width: 32, height: 32, background: 'black', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>G</div>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <ComparisonRow label="Pricing" tutor="10%" other1="$10 - $20/m" other2="10%" />
                            <ComparisonRow label="Transaction fees" tutor="2%/3%" other1="2.9%" other2="2.9%" />
                            
                            <tr><td colSpan="4" style={{ padding: '60px 0 20px', fontSize: '1.25rem', fontWeight: 950, color: '#111827' }}>Teaching & Learning</td></tr>
                            <ComparisonRow label="Instant student payouts" tutor={true} other1={true} other2={false} />
                            <ComparisonRow label="Country based tuition rates" tutor={true} other1={false} other2={true} />

                            <tr><td colSpan="4" style={{ padding: '60px 0 20px', fontSize: '1.25rem', fontWeight: 950, color: '#111827' }}>Student Growth</td></tr>
                            <ComparisonRow label="Practice worksheets for students" tutor={true} other1={false} other2={false} />
                            <ComparisonRow label="Group discount codes" tutor={true} other1={false} other2={true} />
                            <ComparisonRow label="Re-enrollment reminders" tutor={true} other1={false} other2={false} />

                            <tr><td colSpan="4" style={{ padding: '60px 0 20px', fontSize: '1.25rem', fontWeight: 950, color: '#111827' }}>Tutor Page</td></tr>
                            <ComparisonRow label="Beautiful teaching profile" tutor={true} other1={false} other2={false} />
                            <ComparisonRow label="Educational themes" tutor={true} other1={false} other2={false} />
                            <ComparisonRow label="Class highlights & student reviews" tutor={true} other1={false} other2={false} />
                            <ComparisonRow label="Student results showcase" tutor={true} other1={false} other2={false} />

                            <tr><td colSpan="4" style={{ padding: '60px 0 20px', fontSize: '1.25rem', fontWeight: 950, color: '#111827' }}>Educational Services</td></tr>
                            <ComparisonRow label="1:1 Tuition Scheduling" tutor={true} other1={true} other2={false} />
                            <ComparisonRow label="Selling Study Material" tutor={true} other1={false} other2={true} />
                            <ComparisonRow label="Doubt Solvers (Async)" tutor={true} other1={false} other2={false} />
                            <ComparisonRow label="Live Classes & Foundation Batches" tutor={true} other1={false} other2={false} />
                            <ComparisonRow label="Lesson Bundles" tutor={true} other1={false} other2={false} />
                            <ComparisonRow label="Zoom Pro included" tutor={true} other1={false} other2={false} />
                        </tbody>
                    </table>

                    <div style={{ textAlign: 'center', marginTop: 100 }}>
                        <button className="btn btn-cta" style={{ padding: '24px 60px', borderRadius: 20, fontSize: '1.3rem' }}>
                            Get Started <ArrowRight size={24} style={{ marginLeft: 12 }} />
                        </button>
                    </div>
                </div>
            </section>

            <TestimonialMarquee />
            <FAQSection />

            <Footer />
        </div>
    );
};

const TestimonialMarquee = () => {
    const testimonials = [
        { name: "Ananya Sharma", role: "JEE Physics Specialist", bg: "#F3E8FF", text: "TutorMate eases out the process of connecting with students! The dashboard is interactive and easy to use for both the teacher and student. As a tutor, you get full control on the customizations and pricing of your classes. Highly recommended!" },
        { name: "Rohit Verma", role: "English Language Mentor", bg: "#ECFDF5", text: "TutorMate is the single best tool for scheduling classes and selling study materials. Watching my first batch enroll was a truly lovely experience." },
        { name: "Saurav Chaudhary", role: "Senior Maths Teacher", bg: "#FFF1F1", text: "Conducting 1:1 doubt sessions with my students helped me understand their pain points better. It feels great knowing I can manage my entire tuition business from one link." },
        { name: "Isha Kapoor", role: "High School Biology Teacher", bg: "#F3E8FF", text: "My phone was always flooded with student doubts. Now I just share my link and everything is handled in one place. It's a lifesaver for professional educators." },
    ];

    return (
        <section style={{ padding: '120px 0', background: 'white', overflow: 'hidden' }}>
            <h2 style={{ fontSize: 'max(4rem, 5vw)', fontWeight: 950, textAlign: 'center', marginBottom: 80, fontFamily: "'Outfit', sans-serif" }}>
                No wonder, tutors love us. <span style={{ display: 'block' }}>Cuz we help them <span className="text-gradient-primary">win</span></span>
            </h2>
            
            <div style={{ display: 'flex', gap: 32, padding: '0 40px' }}>
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        style={{ 
                            background: t.bg, 
                            padding: 48, 
                            borderRadius: 40, 
                            minWidth: 450, 
                            display: 'flex', 
                            flexDirection: 'column', 
                            justifyContent: 'space-between',
                            minHeight: 450
                        }}
                    >
                        <p style={{ fontSize: '1.25rem', color: '#1F2937', lineHeight: 1.6, fontWeight: 500 }}>"{t.text}"</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 40 }}>
                            <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#ccc', backgroundImage: `url(https://i.pravatar.cc/100?u=${t.name})`, backgroundSize: 'cover' }}></div>
                            <div>
                                <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#111827' }}>{t.name}</div>
                                <div style={{ fontSize: '0.85rem', color: '#6B7280', fontWeight: 600 }}>{t.role}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

const FAQSection = () => {
    const faqs = [
        "What is TutorMate?",
        "Can I conduct paid tuition classes?",
        "How much can I charge for my classes?",
        "How do student payments work?",
        "Wait, is TutorMate really free for teachers?",
        "What are the transaction charges for tutors?"
    ];

    return (
        <section style={{ padding: '140px 80px', background: 'white' }}>
            <div style={{ maxWidth: 1300, margin: '0 auto', display: 'flex', gap: 120 }}>
                <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: '4rem', fontWeight: 950, marginBottom: 24, fontFamily: "'Outfit', sans-serif" }}>Frequently asked questions</h2>
                    <p style={{ fontSize: '1.25rem', color: '#4B5563' }}>
                        Can't find the answer you are looking for? <br/>
                        <a href="#" style={{ color: '#059669', fontWeight: 800, textDecoration: 'none' }}>Reach out to us</a>
                    </p>
                </div>
                <div style={{ flex: 1.5 }}>
                    {faqs.map((q, i) => (
                        <div key={i} style={{ padding: '32px 0', borderBottom: '1px solid #F3F4F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                            <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#111827' }}>{q}</span>
                            <div style={{ color: '#9CA3AF' }}>+</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const PricePointCard = ({ value, desc, accent, icon, custom }) => (
    <motion.div
        whileHover={{ y: -10 }}
        style={{ 
            background: 'white', 
            borderRadius: 48, 
            padding: 56, 
            textAlign: 'left',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.04)',
            border: '1px solid rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            minHeight: 400
        }}
    >
        {icon}
        <div style={{ fontSize: '5rem', fontWeight: 950, color: accent, fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.04em' }}>{value}</div>
        <p style={{ fontSize: '1.3rem', color: '#4B5563', lineHeight: 1.5, fontWeight: 500 }}>{desc}</p>
        {custom && (
            <button className="btn" style={{ background: '#111827', color: 'white', width: '100%', marginTop: 'auto', borderRadius: 16 }}>Contact Sales</button>
        )}
    </motion.div>
);

const ValueCard = ({ bg, color, value, desc, icon }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        style={{ 
            background: bg, 
            padding: 40, 
            borderRadius: 40, 
            color: color, 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 24,
            flex: 1
        }}
    >
        <div style={{ position: 'absolute', opacity: 0.1, zIndex: 0 }}>{icon}</div>
        <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '4rem', fontWeight: 950, fontFamily: "'Outfit', sans-serif" }}>{value}</div>
            <p style={{ fontSize: '1.15rem', fontWeight: 700, lineHeight: 1.4, opacity: 0.8 }}>{desc}</p>
        </div>
    </motion.div>
);

const MetricBadge = ({ flag, val }) => (
    <div style={{ background: 'white', padding: '12px 24px', borderRadius: 16, fontSize: '1.2rem', fontWeight: 900, display: 'flex', gap: 12, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <span>{flag}</span> {val}
    </div>
);

const ComparisonRow = ({ label, tutor, other1, other2 }) => (
    <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
        <td style={{ padding: '24px 0', fontSize: '1.2rem', fontWeight: 700, color: '#4B5563' }}>{label}</td>
        <td style={{ textAlign: 'center', padding: '24px 0' }}>{renderVal(tutor, true)}</td>
        <td style={{ textAlign: 'center', padding: '24px 0' }}>{renderVal(other1, false)}</td>
        <td style={{ textAlign: 'center', padding: '24px 0' }}>{renderVal(other2, false)}</td>
    </tr>
);

const renderVal = (v, isMain) => {
    if (typeof v === 'boolean') {
        return v ? (
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                <Check color="white" size={18} strokeWidth={4} />
            </div>
        ) : (
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', opacity: 0.3 }}>
                <X color="#9CA3AF" size={18} strokeWidth={4} />
            </div>
        );
    }
    return <span style={{ fontSize: '1.25rem', fontWeight: 800, color: isMain ? '#111827' : '#9CA3AF' }}>{v}</span>;
}

export default Pricing;
