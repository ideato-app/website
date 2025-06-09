import { motion } from 'framer-motion';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon, GitHubIcon } from '../components/SocialIcons';
import useMediaQuery from '../hooks/useMediaQuery';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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

const ContactPage = () => {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const isSmallMobile = useMediaQuery('(max-width: 480px)');
    const location = useLocation();

    // Check if coming from pricing page
    const fromPricing = location.state?.fromPricing;
    const selectedPlan = location.state?.selectedPlan;

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

    return (
        <div className="page-container">
            <div className="aurora-background">
                <motion.div className="aurora-shape aurora-shape-1" />
                <motion.div className="aurora-shape aurora-shape-2" />
            </div>
            <div className="container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="contact-content"
                >
                    <motion.h1 variants={itemVariants} className="section-title">تواصل معنا</motion.h1>

                    {fromPricing ? (
                        <motion.p variants={itemVariants} className="section-subtitle responsive-text highlight-text">
                            أنت على وشك التقدم لباقة "{selectedPlan}". يرجى إخبارنا بالمزيد عن مشروعك لنتمكن من مساعدتك بشكل أفضل.
                        </motion.p>
                    ) : (
                        <motion.p variants={itemVariants} className="section-subtitle responsive-text">
                            نحن متحمسون لسماع أفكارك. اختر طريقة التواصل المفضلة لديك أدناه.
                        </motion.p>
                    )}

                    <motion.div
                        variants={itemVariants}
                        className={`content-box ${isSmallMobile ? 'xs-padding' : isMobile ? 'sm-padding' : ''}`}
                    >
                        <h2 className={`content-box-title ${isSmallMobile ? 'xs-title' : ''}`}>التواصل المباشر</h2>

                        {fromPricing && (
                            <div className="pricing-request-box">
                                <h3>طلب الحصول على باقة {selectedPlan}</h3>
                                <p>يرجى ذكر اسم الباقة في رسالتك لنا</p>
                            </div>
                        )}

                        <div className="contact-grid">
                            <motion.a
                                href={`mailto:contact@ideatoapp.com${fromPricing ? `?subject=طلب باقة ${selectedPlan}` : ''}`}
                                className={`contact-button ${isSmallMobile ? 'xs-contact-button' : isMobile ? 'sm-contact-button' : ''}`}
                                whileHover={!isMobile ? { y: -5, boxShadow: '0 10px 20px rgba(var(--shadow-color), 0.1)' } : {}}
                            >
                                <span className={`contact-icon ${isSmallMobile ? 'xs-icon' : ''}`}>📧</span>
                                <span className="contact-text">راسلنا عبر البريد</span>
                            </motion.a>
                            <motion.a
                                href={`https://wa.me/201104532940${fromPricing ? `?text=أرغب في الاستفسار عن باقة ${selectedPlan}` : ''}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`contact-button ${isSmallMobile ? 'xs-contact-button' : isMobile ? 'sm-contact-button' : ''}`}
                                whileHover={!isMobile ? { y: -5, boxShadow: '0 10px 20px rgba(var(--shadow-color), 0.1)' } : {}}
                            >
                                <span className={`contact-icon ${isSmallMobile ? 'xs-icon' : ''}`}>💬</span>
                                <span className="contact-text">تواصل عبر WhatsApp</span>
                            </motion.a>
                        </div>

                        <h3 className={`content-box-subtitle ${isSmallMobile ? 'xs-subtitle' : ''}`}>تابعنا على وسائل التواصل</h3>
                        <div className={`social-icons-grid ${isSmallMobile ? 'xs-social-grid' : ''}`}>
                            <a href="https://www.facebook.com/ideato.app.official" aria-label="Facebook" className="social-link" data-color="accent-primary">
                                <FacebookIcon />
                            </a>
                            <a href="https://x.com/ideato_app" aria-label="Twitter" className="social-link" data-color="accent-primary">
                                <TwitterIcon />
                            </a>
                            <a href="https://www.instagram.com/ideato.app/" aria-label="Instagram" className="social-link" data-color="accent-secondary">
                                <InstagramIcon />
                            </a>
                            <a href="https://www.linkedin.com/in/ideato-app" aria-label="LinkedIn" className="social-link" data-color="accent-primary">
                                <LinkedInIcon />
                            </a>
                            <a href="https://github.com/ideato-app" aria-label="GitHub" className="social-link" data-color="text-primary">
                                <GitHubIcon />
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage; 