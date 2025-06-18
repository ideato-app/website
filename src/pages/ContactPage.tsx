import { motion } from 'framer-motion';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon, GitHubIcon } from '../components/SocialIcons';
import useMediaQuery from '../hooks/useMediaQuery';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DevicesIcon from '@mui/icons-material/Devices';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

const floatingIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: 'easeOut' }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: custom * 0.1 + 0.3,
            duration: 0.5
        }
    }),
    hover: {
        y: -10,
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
        transition: { type: 'spring', stiffness: 300, damping: 15 }
    }
};

const ContactPage = () => {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const isSmallMobile = useMediaQuery('(max-width: 480px)');
    const location = useLocation();
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(false);

    // Check if coming from pricing page
    const fromPricing = location.state?.fromPricing;
    const selectedPlan = location.state?.selectedPlan;

    // Detect dark mode
    useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains('dark-mode');
        setDarkMode(isDarkMode);

        // Listen for theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    const isDark = document.documentElement.classList.contains('dark-mode');
                    setDarkMode(isDark);
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });
        return () => observer.disconnect();
    }, []);

    // Add CSS classes to the document body
    useEffect(() => {
        if (isSmallMobile) {
            document.body.classList.add('xs-viewport');
        } else if (isMobile) {
            document.body.classList.add('sm-viewport');
            document.body.classList.remove('xs-viewport');
        } else {
            document.body.classList.remove('xs-viewport');
            document.body.classList.remove('sm-viewport');
        }

        return () => {
            document.body.classList.remove('xs-viewport');
            document.body.classList.remove('sm-viewport');
        };
    }, [isMobile, isSmallMobile]);

    const handleBackToPricing = () => {
        navigate('/pricing');
    };

    return (
        <div className="page-container">
            <div className="aurora-background">
                <motion.div
                    className="aurora-shape aurora-shape-1"
                    animate={{
                        filter: darkMode ? 'blur(80px)' : 'blur(100px)',
                        opacity: darkMode ? 0.2 : 0.15
                    }}
                />
                <motion.div
                    className="aurora-shape aurora-shape-2"
                    animate={{
                        filter: darkMode ? 'blur(80px)' : 'blur(100px)',
                        opacity: darkMode ? 0.2 : 0.15
                    }}
                />

                {darkMode && (
                    <motion.div
                        className="aurora-shape aurora-shape-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2 }}
                    />
                )}
            </div>

            <div className="floating-icons">
                <motion.div
                    className="floating-icon icon-1"
                    variants={floatingIconVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.5 }}
                >
                    📱
                </motion.div>
                <motion.div
                    className="floating-icon icon-2"
                    variants={floatingIconVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.7 }}
                >
                    💻
                </motion.div>
                <motion.div
                    className="floating-icon icon-3"
                    variants={floatingIconVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.9 }}
                >
                    🚀
                </motion.div>
            </div>

            <div className="container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="contact-content"
                >
                    {fromPricing && (
                        <motion.div
                            className="back-to-pricing"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            onClick={handleBackToPricing}
                        >
                            <ArrowBackIcon className="back-icon" />
                            <span>العودة إلى صفحة الأسعار</span>
                        </motion.div>
                    )}

                    <motion.h1
                        variants={itemVariants}
                        className="section-title glow-text"
                    >
                        تواصل معنا
                    </motion.h1>

                    {fromPricing ? (
                        <motion.div
                            className="selected-plan-banner"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <motion.div
                                className="plan-badge"
                                initial={{ rotate: -5 }}
                                animate={{ rotate: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                باقة مختارة
                            </motion.div>
                            <h2>استفسار عن باقة <span className="plan-name">{selectedPlan}</span></h2>
                            <p>يرجى ذكر اسم الباقة في رسالتك لنا مع تفاصيل مشروعك لنتمكن من مساعدتك بشكل أفضل</p>
                            <motion.div
                                className="shine-line"
                                animate={{
                                    x: ["0%", "100%"],
                                    opacity: [0, 0.5, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 5
                                }}
                            />
                        </motion.div>
                    ) : (
                        <motion.p
                            variants={itemVariants}
                            className="section-subtitle responsive-text"
                        >
                            نحن متحمسون لسماع أفكارك. اختر إحدى طرق التواصل أدناه وسنرد عليك في أقرب وقت ممكن.
                        </motion.p>
                    )}

                    <div className="contact-cards-grid">
                        <motion.div
                            className="contact-card primary-card"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            custom={0}
                        >
                            <div className="card-icon">
                                <EmailIcon fontSize="large" />
                            </div>
                            <h3>البريد الإلكتروني</h3>
                            <p>نقوم بالرد على جميع الرسائل خلال 24 ساعة</p>
                            <motion.a
                                href={`mailto:contact@ideatoapp.com${fromPricing ? `?subject=طلب باقة ${selectedPlan}` : ''}`}
                                className="contact-card-button"
                                whileHover={{
                                    scale: 1.05,
                                    color: darkMode ? '#ffffff' : undefined,
                                    backgroundColor: darkMode ? 'var(--primary-hover-dark)' : undefined
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                راسلنا الآن
                            </motion.a>
                            <div className="card-decoration"></div>
                        </motion.div>

                        <motion.div
                            className="contact-card whatsapp-card"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            custom={1}
                        >
                            <div className="card-icon">
                                <WhatsAppIcon fontSize="large" />
                            </div>
                            <h3>واتساب</h3>
                            <p>للتواصل السريع والمباشر معنا</p>
                            <motion.a
                                href={`https://wa.me/201104532940${fromPricing ? `?text=أرغب في الاستفسار عن باقة ${selectedPlan}` : ''}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-card-button"
                                whileHover={{
                                    scale: 1.05,
                                    color: darkMode ? '#ffffff' : undefined,
                                    backgroundColor: darkMode ? 'var(--whatsapp-hover-dark)' : undefined
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                تواصل عبر واتساب
                            </motion.a>
                            <div className="card-decoration"></div>
                        </motion.div>

                        <motion.div
                            className="contact-card support-card"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            custom={2}
                        >
                            <div className="card-icon">
                                <SupportAgentIcon fontSize="large" />
                            </div>
                            <h3>الدعم الفني</h3>
                            <p>للعملاء الحاليين والاستفسارات التقنية</p>
                            <motion.a
                                href="tel:+201104532940"
                                className="contact-card-button"
                                whileHover={{
                                    scale: 1.05,
                                    color: darkMode ? '#ffffff' : undefined,
                                    backgroundColor: darkMode ? 'var(--support-hover-dark)' : undefined
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                اتصل بالدعم الفني
                            </motion.a>
                            <div className="card-decoration"></div>
                        </motion.div>

                        <motion.div
                            className="contact-card project-card"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            custom={3}
                        >
                            <div className="card-icon">
                                <DevicesIcon fontSize="large" />
                            </div>
                            <h3>طلب عرض سعر</h3>
                            <p>لمشاريع التطوير المخصصة وطلبات التعاون</p>
                            <motion.a
                                href={`mailto:projects@ideatoapp.com${fromPricing ? `?subject=طلب عرض سعر لباقة ${selectedPlan}` : ''}`}
                                className="contact-card-button"
                                whileHover={{
                                    scale: 1.05,
                                    color: darkMode ? '#ffffff' : undefined,
                                    backgroundColor: darkMode ? 'var(--project-hover-dark)' : undefined
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                طلب عرض سعر
                            </motion.a>
                            <div className="card-decoration"></div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="contact-info-section"
                        variants={itemVariants}
                    >
                        <div className="contact-location">
                            <div className="location-icon">
                                <LocationOnIcon />
                            </div>
                            <div className="location-details">
                                <h4>مقرنا</h4>
                                <p>القاهرة، مصر</p>
                            </div>
                        </div>

                        <div className="contact-social">
                            <h4>تابعنا على وسائل التواصل الاجتماعي</h4>
                            <div className="social-icons-grid">
                                <motion.a
                                    href="https://www.facebook.com/ideato.app.official"
                                    aria-label="Facebook"
                                    className="social-link"
                                    data-color="accent-primary"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FacebookIcon />
                                </motion.a>
                                <motion.a
                                    href="https://x.com/ideato_app"
                                    aria-label="Twitter"
                                    className="social-link"
                                    data-color="accent-primary"
                                    whileHover={{ scale: 1.2, rotate: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <TwitterIcon />
                                </motion.a>
                                <motion.a
                                    href="https://www.instagram.com/ideato.app/"
                                    aria-label="Instagram"
                                    className="social-link"
                                    data-color="accent-secondary"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <InstagramIcon />
                                </motion.a>
                                <motion.a
                                    href="https://www.linkedin.com/in/ideato-app"
                                    aria-label="LinkedIn"
                                    className="social-link"
                                    data-color="accent-primary"
                                    whileHover={{ scale: 1.2, rotate: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <LinkedInIcon />
                                </motion.a>
                                <motion.a
                                    href="https://github.com/ideato-app"
                                    aria-label="GitHub"
                                    className="social-link"
                                    data-color="text-primary"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <GitHubIcon />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage; 