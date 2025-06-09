import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const HeroSection = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            paddingTop: '6rem', /* To offset fixed navbar */
            paddingBottom: '6rem',
        }}>
            <div className="aurora-background">
                <motion.div
                    className="aurora-shape aurora-shape-1"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                />
                <motion.div
                    className="aurora-shape aurora-shape-2"
                    animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 25, ease: 'easeInOut' }}
                />
            </div>
            <div className="container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        variants={itemVariants}
                        style={{
                            fontSize: 'clamp(3rem, 8vw, 6rem)',
                            fontWeight: 900,
                            lineHeight: 1.1,
                            marginBottom: '1.5rem',
                            letterSpacing: '-2px',
                        }}
                    >
                        <span style={{
                            background: 'linear-gradient(45deg, var(--accent-primary), var(--accent-secondary))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>من الفكرة</span> إلى التطبيق
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        style={{
                            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
                            color: 'var(--text-secondary)',
                            maxWidth: '750px',
                            margin: '0 auto 2.5rem auto',
                            lineHeight: 1.6,
                        }}
                    >
                        نحن نقدم خدمات متكاملة لتحويل أفكارك إلى تطبيقات ومواقع إلكترونية احترافية                    </motion.p>
                    <motion.div variants={itemVariants} style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="/#services" style={{
                            display: 'inline-block',
                            background: 'linear-gradient(45deg, var(--accent-primary), var(--accent-secondary))',
                            color: '#ffffff',
                            padding: '1rem 2.5rem',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: 700,
                            fontSize: '1.1rem',
                            boxShadow: '0 10px 30px -10px rgba(var(--shadow-color), 0.2)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        }}
                            onMouseOver={e => {
                                e.currentTarget.style.transform = 'translateY(-3px)';
                                e.currentTarget.style.boxShadow = '0 12px 35px -8px rgba(var(--shadow-color), 0.3)';
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(var(--shadow-color), 0.2)';
                            }}
                        >
                            اكتشف خدماتنا
                        </a>
                        <Link to="/portfolio" style={{
                            display: 'inline-block',
                            background: 'transparent',
                            color: 'var(--accent-primary)',
                            padding: '1rem 2.5rem',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: 700,
                            fontSize: '1.1rem',
                            border: '2px solid var(--accent-primary)',
                            transition: 'transform 0.3s ease, background-color 0.3s ease, color 0.3s ease',
                        }}
                            onMouseOver={e => {
                                e.currentTarget.style.transform = 'translateY(-3px)';
                                e.currentTarget.style.backgroundColor = 'var(--accent-primary)';
                                e.currentTarget.style.color = '#ffffff';
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = 'var(--accent-primary)';
                            }}
                        >
                            أعمالنا
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection; 