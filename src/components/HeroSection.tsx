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

const HeroSection = () => {
    return (
        <section className="hero-section">
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
                        className="hero-title"
                    >
                        <span className="hero-title-gradient">من الفكرة</span> إلى التطبيق
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="hero-subtitle"
                    >
                        نحن نقدم خدمات متكاملة لتحويل أفكارك إلى تطبيقات ومواقع إلكترونية احترافية
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
            </div>
        </section>
    );
};

export default HeroSection; 