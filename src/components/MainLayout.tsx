import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import ScrollToTopButton from './ScrollToTopButton';
import useMediaQuery from '../hooks/useMediaQuery';
import { useThemeContext } from './ThemeProvider';

const MainLayout = () => {
    const [loading, setLoading] = useState(true);
    const isMobile = useMediaQuery('(max-width: 767px)');
    const isSmallMobile = useMediaQuery('(max-width: 480px)');
    const { isDarkMode } = useThemeContext();

    // Apply mobile classes to the root element
    useEffect(() => {
        const rootElement = document.documentElement;

        if (isSmallMobile) {
            rootElement.classList.add('xs-viewport');
            rootElement.classList.remove('sm-viewport');
        } else if (isMobile) {
            rootElement.classList.add('sm-viewport');
            rootElement.classList.remove('xs-viewport');
        } else {
            rootElement.classList.remove('xs-viewport', 'sm-viewport');
        }

        return () => {
            rootElement.classList.remove('xs-viewport', 'sm-viewport');
        };
    }, [isMobile, isSmallMobile]);

    // Simulate loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    const fadeVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6 } }
    };

    const pageTransition = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
            }
        },
        exit: { 
            opacity: 0, 
            y: -20,
            transition: { 
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const loaderVariants = {
        animate: {
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            borderRadius: ["20%", "50%", "20%"],
            transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
            }
        }
    };

    // Enhanced gradient for dark mode
    const loaderGradient = isDarkMode
        ? 'linear-gradient(135deg, #7dd3fc, #c4b5fd)'
        : 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))';

    // Background pattern for dark mode
    const darkModePattern = isDarkMode ? {
        backgroundImage: `
            radial-gradient(circle at 25% 10%, rgba(125, 211, 252, 0.15) 0%, transparent 25%),
            radial-gradient(circle at 75% 90%, rgba(196, 181, 253, 0.15) 0%, transparent 25%)
        `,
        backgroundAttachment: 'fixed'
    } : {};

    return (
        <div className="main-layout" style={darkModePattern}>
            <ScrollToTop />
            <AnimatePresence mode="wait">
                {loading ? (
                    <motion.div
                        key="loader"
                        className="page-loader"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'var(--bg-primary)',
                            zIndex: 9999,
                            ...darkModePattern
                        }}
                    >
                        <motion.div
                            variants={loaderVariants}
                            animate="animate"
                            style={{
                                width: 60,
                                height: 60,
                                background: loaderGradient,
                                marginBottom: 20,
                                boxShadow: isDarkMode 
                                    ? '0 0 30px rgba(125, 211, 252, 0.3)'
                                    : '0 0 20px rgba(var(--shadow-color), 0.2)'
                            }}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            style={{
                                fontSize: '1.2rem',
                                color: 'var(--text-primary)',
                                fontWeight: 500,
                            }}
                        >
                            جاري التحميل...
                        </motion.div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="content"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={fadeVariants}
                        style={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            minHeight: '100vh',
                            position: 'relative'
                        }}
                    >
                        <Navbar />
                        <motion.main 
                            className="main-content" 
                            style={{ flex: 1 }}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={pageTransition}
                        >
                            <Outlet />
                        </motion.main>
                        <Footer />
                        <ScrollToTopButton />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MainLayout; 