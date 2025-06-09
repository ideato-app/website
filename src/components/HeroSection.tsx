import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './HeroSection.css';

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

const fadeInUpVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};

const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
        scale: 1,
        opacity: 1,
        transition: { 
            delay: 0.6 + (i * 0.2),
            duration: 0.7,
            ease: [0.215, 0.61, 0.355, 1]
        }
    })
};

const HeroSection = () => {
    const stats = [
        { number: '50+', label: 'مشروع منجز' },
        { number: '30+', label: 'عميل سعيد' },
        { number: '100%', label: 'رضا العملاء' },
    ];

    return (
        <section className="hero-section">
            <div className="aurora-background">
                <motion.div
                    className="aurora-shape aurora-shape-1"
                    animate={{ 
                        rotate: 360,
                        scale: [1, 1.1, 1],
                        opacity: [0.6, 0.8, 0.6],
                    }}
                    transition={{ 
                        rotate: { repeat: Infinity, duration: 20, ease: 'linear' },
                        scale: { repeat: Infinity, duration: 8, ease: 'easeInOut' },
                        opacity: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
                    }}
                />
                <motion.div
                    className="aurora-shape aurora-shape-2"
                    animate={{ 
                        rotate: -360, 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 0.9, 0.7],
                    }}
                    transition={{ 
                        rotate: { repeat: Infinity, duration: 25, ease: 'linear' },
                        scale: { repeat: Infinity, duration: 10, ease: 'easeInOut' },
                        opacity: { repeat: Infinity, duration: 5, ease: 'easeInOut' },
                    }}
                />
            </div>
            <div className="container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="hero-content"
                >
                    <motion.div className="hero-main" variants={itemVariants}>
                        <motion.h1
                            variants={itemVariants}
                            className="hero-title"
                        >
                            <span className="hero-title-gradient">من الفكرة</span> إلى التطبيق
                            <motion.span 
                                className="title-highlight"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                .
                            </motion.span>
                        </motion.h1>
                        <motion.p
                            variants={itemVariants}
                            className="hero-subtitle"
                        >
                            نحول أفكارك الإبداعية إلى واقع رقمي متكامل من خلال تطوير مواقع وتطبيقات احترافية 
                            بأحدث التقنيات وأفضل الممارسات العالمية.
                        </motion.p>
                        <motion.div variants={itemVariants} className="hero-cta-container">
                            <a href="/#services" className="hero-cta-button primary">
                                اكتشف خدماتنا
                            </a>
                            <Link to="/portfolio" className="hero-cta-button secondary">
                                أعمالنا
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className="hero-stats-container"
                        variants={fadeInUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {stats.map((stat, i) => (
                            <motion.div 
                                key={i} 
                                className="stat-item"
                                custom={i}
                                variants={statsVariants}
                            >
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                   
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection; 