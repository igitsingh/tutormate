import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Video, Calendar, Book, MessageSquare, Package, Zap, Users, ShieldCheck, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Ecosystem = () => {
    return (
        <div style={{ background: '#FAFAFA', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
            <Navbar />

            {/* ── SECTION 01: HERO (THE ECOSYSTEM) ── */}
            <section style={{ padding: '160px 20px 120px', textAlign: 'center', background: '#f9f9f7', overflow: 'hidden' }}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: 8, 
                        background: 'white', 
                        padding: '8px 20px', 
                        borderRadius: 99, 
                        boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                        marginBottom: 32,
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        color: 'var(--text-medium)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}
                >
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary-blue)' }}></div>
                    The Tutor Ecosystem
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
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
                    One platform. Every way to <span className="text-gradient-primary">teach & earn.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ 
                        fontSize: '1.4rem', 
                        color: 'var(--text-medium)', 
                        maxWidth: 800, 
                        margin: '0 auto 56px',
                        lineHeight: 1.5,
                        fontWeight: 500
                    }}
                >
                    1:1 classes, group tuition, course packages, live cohorts, study material, lesson bundles, and doubt solvers. 
                    All from one profile. <span style={{ color: 'var(--text-strong)', fontWeight: 700 }}>Keep 90% of everything you earn.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 56 }}
                >
                    <button className="btn btn-cta" style={{ padding: '24px 48px', borderRadius: 20, fontSize: '1.2rem' }}>
                        Get Started Free <ArrowRight size={22} style={{ marginLeft: 12 }} />
                    </button>
                    <button className="btn btn-white" style={{ padding: '24px 48px', borderRadius: 20, fontSize: '1.2rem', boxShadow: 'var(--shadow-subtle)' }}>
                        <Play size={20} fill="currentColor" style={{ marginRight: 12 }} /> Explore All Features
                    </button>
                </motion.div>

                {/* Social Proof */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, color: 'var(--text-subtle)', fontWeight: 700, fontSize: '0.95rem' }}
                >
                    <div style={{ display: 'flex', marginLeft: 10 }}>
                        {[1, 2, 3].map(i => (
                            <div key={i} style={{ width: 36, height: 36, borderRadius: '50%', border: '3px solid white', marginLeft: -12, background: `url(https://i.pravatar.cc/100?img=${i+10})`, backgroundSize: 'cover' }}></div>
                        ))}
                    </div>
                    <span>300K+ tutors · Unified educational infrastructure · Keep 90%</span>
                </motion.div>

                {/* Floating UI Elements */}
                <div style={{ position: 'relative', maxWidth: 1200, margin: '100px auto 0', height: 600 }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'white', borderRadius: '40px 40px 0 0', boxShadow: '0 -20px 60px rgba(0,0,0,0.05)', border: '1px solid var(--border-light)' }}>
                        {/* Internal Mock Dashboard */}
                        <div style={{ padding: 40, textAlign: 'left' }}>
                            <div style={{ width: 200, height: 24, background: '#f1f5f9', borderRadius: 8, marginBottom: 40 }}></div>
                            <div style={{ fontSize: '2rem', fontWeight: 900, marginBottom: 40 }}>Earnings Overview</div>
                            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20, height: 300 }}>
                                {[60, 40, 80, 50, 90, 70, 100, 85, 65, 75].map((h, i) => (
                                    <div key={i} style={{ flex: 1, height: `${h}%`, background: 'var(--soft-blue)', borderRadius: '8px 8px 0 0' }}></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Floating Cards */}
                    <FloatingCard 
                        top={-40} left={0} 
                        icon={<Calendar color="white" size={20} />} 
                        bg="var(--primary-blue)"
                        label="NEW ENROLLMENT" 
                        title="1:1 Physics Class" 
                    />
                    <FloatingCard 
                        top={40} right={-40} 
                        icon={<Video color="white" size={20} />} 
                        bg="var(--purple)"
                        label="LIVE CLASS" 
                        title="1.2k Students" 
                    />
                    <FloatingCard 
                        bottom={200} left={-80} 
                        icon={<Book color="white" size={20} />} 
                        bg="var(--mint-green)"
                        label="MATERIAL SALE" 
                        title="₹499.00 - Study Notes" 
                    />
                    <FloatingCard 
                        bottom={100} right={-60} 
                        icon={<MessageSquare color="white" size={20} />} 
                        bg="var(--cta-orange)"
                        label="DOUBT SOLVED" 
                        title="Video Solution Sent" 
                    />
                    <FloatingCard 
                        bottom={-40} left={80} 
                        icon={<Zap color="white" size={20} />} 
                        bg="var(--primary-blue)"
                        label="LEARNING PROGRESS" 
                        title="85% - Class 9" 
                    />
                    <FloatingCard 
                        bottom={-100} right={120} 
                        icon={<Package color="white" size={20} />} 
                        bg="var(--primary-blue)"
                        label="BATCH ACTIVE" 
                        title="Term 1 Foundation" 
                    />
                </div>
            </section>

            {/* ── SECTION 02: PRODUCT GRID (DARK) ── */}
            <section style={{ background: '#0a0a0a', padding: '140px 80px', color: 'white' }}>
                <div style={{ maxWidth: 1400, margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 48 }}>
                        <ProductCard 
                            badge="MOST POPULAR"
                            title="1:1 Tuition"
                            desc="One link, automated scheduling, instant payouts. Turn your teaching hours into a steady income stream."
                            image="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800"
                            link="/marketplace"
                        />
                        <ProductCard 
                            badge="LIVE CLASSES"
                            title="Group Classes"
                            desc="Teach multiple students, host group events, and record sessions for future learning."
                            image="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800"
                            link="/groupclasses"
                        />
                        <ProductCard 
                            badge="INTERACTIVE"
                            title="Batch Learning"
                            desc="Bundle classes into structured multi-week foundation batches for organized learning."
                            image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
                            link="/livecohorts"
                        />
                        <ProductCard 
                            badge="SCALABLE"
                            title="Recorded Classes"
                            desc="Upload your material once. Students can learn at their own pace while you earn passively."
                            image="https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800"
                            link="/courses"
                        />
                        <ProductCard 
                            badge="LEARNING RESOURCES"
                            title="Study Material"
                            desc="Sell e-books, formula sheets, important notes, and question banks with instant delivery."
                            image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800"
                            link="/products"
                        />
                        <ProductCard 
                            badge="TOP TICKET"
                            title="Lesson Bundles"
                            desc="Bundle multiple classes and doubt-solving sessions into high-value packs for better student outcomes."
                            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
                            link="/packages"
                        />
                        <ProductCard 
                            badge="ASYNC HELP"
                            title="Doubt Solvers"
                            desc="Get paid to solve doubts on the go. No fixed hours — students submit, you solve when you can."
                            image="https://images.unsplash.com/photo-1577563906417-45a11b3f9dc7?w=800"
                            link="/priority-dm"
                        />
                    </div>
                </div>

                {/* ── INFRASTRUCTURE SECTION ── */}
                <div style={{ maxWidth: 1400, margin: '140px auto 0', textAlign: 'center' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: 24, fontFamily: "'Outfit', sans-serif" }}
                    >
                        Built for the global teacher
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.5)', maxWidth: 600, margin: '0 auto 80px', lineHeight: 1.6 }}
                    >
                        Payments, compliance, and client management. Built in, not bolted on.
                    </motion.p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
                        <InfraCard 
                            icon={<Zap size={24} color="var(--primary-blue)" />} 
                            title="Instant Payouts" 
                            desc="Get paid instantly after every sale. You keep 90%." 
                        />
                        <InfraCard 
                            icon={<ShieldCheck size={24} color="var(--primary-blue)" />} 
                            title="Global Compliance" 
                            desc="Automated GST/VAT handling and global tax compliance in 150+ countries." 
                        />
                        <InfraCard 
                            icon={<Users size={24} color="var(--primary-blue)" />} 
                            title="Student Management" 
                            desc="Every student and attendee in one dashboard. No separate CRM needed." 
                        />
                        <InfraCard 
                            icon={<Book size={24} color="var(--primary-blue)" />} 
                            title="Custom Intake" 
                            desc="Custom forms for each class. Collect the right student info before you start." 
                        />
                    </div>
                </div>
            </section>

            {/* ── SECTION 03: FINAL CTA CARD ── */}
            <section style={{ padding: '140px 80px', background: 'white' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{ 
                        maxWidth: 1300, 
                        margin: '0 auto', 
                        background: '#0a0a0a', 
                        borderRadius: 60, 
                        padding: '100px 120px', 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        gap: 80,
                        color: 'white',
                        boxShadow: '0 40px 100px rgba(0,0,0,0.2)'
                    }}
                >
                    <div style={{ flex: 1 }}>
                        <h2 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: 32, lineHeight: 1.1, fontFamily: "'Outfit', sans-serif" }}>One link. Seven teaching streams.</h2>
                        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', marginBottom: 48, lineHeight: 1.6, maxWidth: 450 }}>
                            Join 300K+ tutors teaching on TutorMate. Set up in under 5 minutes. No fixed costs.
                        </p>
                        <button className="btn btn-primary" style={{ padding: '24px 48px', borderRadius: 20, fontSize: '1.2rem', background: '#2563EB' }}>
                            Start Teaching Free <ArrowRight size={22} style={{ marginLeft: 12 }} />
                        </button>
                        <p style={{ marginTop: 20, fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>Zero upfront fee. Set up in minutes.</p>
                    </div>

                    <div style={{ flex: 0.8, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                        <MetricCard label="TUTORS" value="300K+" />
                        <MetricCard label="NATIONS" value="150+" />
                        <MetricCard label="SHARE" value="90%" />
                        <MetricCard label="EARNINGS" value="₹85Cr+" />
                    </div>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
};

const FloatingCard = ({ top, left, right, bottom, icon, bg, label, title }) => (
    <motion.div
        drag
        dragConstraints={{ top: -100, bottom: 100, left: -100, right: 100 }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        style={{ 
            position: 'absolute', 
            top, left, right, bottom,
            background: 'white',
            padding: '20px 32px',
            borderRadius: 24,
            boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            border: '1px solid var(--border-light)',
            zIndex: 10,
            cursor: 'grab'
        }}
    >
        <div style={{ width: 48, height: 48, borderRadius: 12, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {icon}
        </div>
        <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 900, color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{label}</div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-strong)' }}>{title}</div>
        </div>
    </motion.div>
);

const InfraCard = ({ icon, title, desc }) => (
    <div style={{ 
        background: '#141414', 
        padding: 40, 
        borderRadius: 32, 
        textAlign: 'left', 
        display: 'flex', 
        gap: 24, 
        alignItems: 'flex-start',
        border: '1px solid rgba(255,255,255,0.05)'
    }}>
        <div style={{ background: 'rgba(37, 99, 235, 0.1)', padding: 16, borderRadius: 16 }}>{icon}</div>
        <div>
            <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 12 }}>{title}</h4>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.5 }}>{desc}</p>
        </div>
    </div>
);

const MetricCard = ({ label, value }) => (
    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: 32, borderRadius: 24, textAlign: 'center' }}>
        <div style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: 8, fontFamily: "'Outfit', sans-serif" }}>{value}</div>
        <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</div>
    </div>
);

const ProductCard = ({ badge, title, desc, image, link }) => (
    <motion.div
        whileHover={{ y: -12 }}
        style={{ 
            background: '#141414', 
            borderRadius: 48, 
            padding: 56, 
            display: 'flex', 
            flexDirection: 'column',
            border: '1px solid rgba(255,255,255,0.05)',
            boxShadow: '0 40px 80px rgba(0,0,0,0.3)',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
    >
        <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            background: 'var(--primary-blue)', 
            color: 'white', 
            padding: '8px 20px', 
            borderRadius: 99, 
            fontSize: '0.75rem', 
            fontWeight: 900, 
            width: 'fit-content',
            marginBottom: 40,
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
        }}>
            {badge}
        </div>
        
        <div style={{ width: '100%', height: 400, borderRadius: 32, overflow: 'hidden', marginBottom: 48, background: '#1a1a1a' }}>
            <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
        </div>

        <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: 20, fontFamily: "'Outfit', sans-serif" }}>{title}</h3>
        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: 40, flex: 1 }}>{desc}</p>
        
        <a href={link} style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--primary-blue)', fontWeight: 900, textDecoration: 'none', fontSize: '1.1rem' }}>
            Explore {title} <ArrowRight size={20} />
        </a>
    </motion.div>
);

export default Ecosystem;
