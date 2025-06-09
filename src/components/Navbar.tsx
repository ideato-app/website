import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import useMediaQuery from '../hooks/useMediaQuery';
import { useThemeContext } from './ThemeProvider';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const isMobile = useMediaQuery('(max-width: 767px)');
    const location = useLocation();
    const { isDarkMode } = useThemeContext();

    // Handle scroll event to change navbar appearance
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    // List of navigation items
    const navItems = [
        { path: '/', label: 'الرئيسية' },
        { path: '/#services', label: 'خدماتنا', isHashLink: true },
        { path: '/pricing', label: 'الأسعار' },
        { path: '/about', label: 'من نحن' },
        { path: '/portfolio', label: 'أعمالنا' },
        { path: '/contact', label: 'تواصل معنا', highlight: true },
    ];

    // Animation variants
    const mobileMenuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: 'auto',
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                staggerChildren: 0.05,
            }
        },
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.2,
                ease: "easeInOut",
                staggerChildren: 0.05,
                staggerDirection: -1,
            }
        }
    };

    const mobileMenuItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 }
    };

    const logoVariants = {
        normal: { scale: 1 },
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 },
            textShadow: isDarkMode ? '0 0 8px rgba(125, 211, 252, 0.5)' : '0 0 8px rgba(59, 130, 246, 0.3)'
        }
    };

    const navLinkVariants = {
        initial: { y: 0 },
        hover: { y: -3, transition: { duration: 0.2 } }
    };

    const isActive = (path: string, isHashLink?: boolean) => {
        if (isHashLink) {
            return location.pathname === '/' && location.hash === '#services';
        }
        return location.pathname === path;
    };

    // Enhanced gradient for dark mode
    const highlightGradient = isDarkMode
        ? 'linear-gradient(135deg, #7dd3fc, #c4b5fd)'
        : 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))';

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''} ${isDarkMode ? 'dark-navbar' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <div className="container navbar-container">
                <motion.div
                    variants={logoVariants}
                    initial="normal"
                    whileHover="hover"
                >
                    <Link to="/" className="navbar-logo">
                        Idea<span className="navbar-logo-accent">To</span>App
                    </Link>
                </motion.div>

                <div className="navbar-menu-container">
                    {/* Desktop Menu */}
                    <div className="desktop-nav">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.label}
                                className="nav-item-wrapper"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                            >
                                <motion.div
                                    variants={navLinkVariants}
                                    initial="initial"
                                    whileHover="hover"
                                >
                                    {item.isHashLink ? (
                                        <a
                                            href={item.path}
                                            className={`navbar-link ${item.highlight ? 'highlight' : ''} ${isActive(item.path, item.isHashLink) ? 'active' : ''}`}
                                            style={item.highlight ? { background: highlightGradient } : {}}
                                        >
                                            {item.label}
                                        </a>
                                    ) : (
                                        <Link
                                            to={item.path}
                                            className={`navbar-link ${item.highlight ? 'highlight' : ''} ${isActive(item.path) ? 'active' : ''}`}
                                            style={item.highlight ? { background: highlightGradient } : {}}
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </motion.div>

                                <AnimatePresence>
                                    {isActive(item.path, item.isHashLink) && !item.highlight && (
                                        <motion.div
                                            className="nav-indicator"
                                            layoutId="nav-indicator"
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={{ opacity: 1, width: '30px' }}
                                            exit={{ opacity: 0, width: 0 }}
                                            transition={{ duration: 0.3 }}
                                            style={{
                                                background: isDarkMode
                                                    ? highlightGradient
                                                    : 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))'
                                            }}
                                        />
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                        <DarkModeToggle isNavbar={true} />
                    </div>

                    {isMobile && (
                        <div className="mobile-controls">
                            <DarkModeToggle isNavbar={true} />
                            <button
                                className={`mobile-nav-toggle ${isOpen ? 'open' : ''}`}
                                onClick={() => setIsOpen(!isOpen)}
                                aria-label="Toggle mobile menu"
                            >
                                <span className="burger-line"></span>
                                <span className="burger-line"></span>
                                <span className="burger-line"></span>
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={`mobile-menu ${isDarkMode ? 'dark-mobile-menu' : ''}`}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileMenuVariants}
                    >
                        <div className="mobile-menu-inner">
                            {navItems.map((item) => (
                                <motion.div key={item.label} variants={mobileMenuItemVariants}>
                                    {item.isHashLink ? (
                                        <a
                                            href={item.path}
                                            className={`mobile-menu-link ${item.highlight ? 'highlight' : ''} ${isActive(item.path, item.isHashLink) ? 'active' : ''}`}
                                            style={item.highlight ? { background: highlightGradient } : {}}
                                        >
                                            {item.label}
                                            {isActive(item.path, item.isHashLink) && !item.highlight && (
                                                <span className="mobile-active-indicator" />
                                            )}
                                        </a>
                                    ) : (
                                        <Link
                                            to={item.path}
                                            className={`mobile-menu-link ${item.highlight ? 'highlight' : ''} ${isActive(item.path) ? 'active' : ''}`}
                                            style={item.highlight ? { background: highlightGradient } : {}}
                                        >
                                            {item.label}
                                            {isActive(item.path) && !item.highlight && (
                                                <span className="mobile-active-indicator" />
                                            )}
                                        </Link>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar; 