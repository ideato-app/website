import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import useMediaQuery from '../hooks/useMediaQuery';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const isMobile = useMediaQuery('(max-width: 767px)');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    Idea<span className="navbar-logo-accent">To</span>App
                </Link>
                <div className="navbar-menu-container">
                    {/* Desktop Menu */}
                    <div className="desktop-nav">
                        <Link to="/" className="navbar-link">الرئيسية</Link>
                        <a href="/#services" className="navbar-link">خدماتنا</a>
                        <Link to="/pricing" className="navbar-link">الأسعار</Link>
                        <Link to="/about" className="navbar-link">من نحن</Link>
                        <Link to="/portfolio" className="navbar-link">أعمالنا</Link>
                        <Link to="/contact" className="navbar-link">تواصل معنا</Link>
                        <DarkModeToggle isNavbar={true} />
                    </div>
                    {isMobile && <DarkModeToggle isNavbar={true} />}
                    <button className="mobile-nav-toggle" onClick={() => setIsOpen(!isOpen)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d={isOpen ? "M18 6L6 18" : "M4 6H20"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d={isOpen ? "M6 6L18 18" : "M4 12H20"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            {!isOpen && <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    className="mobile-menu"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                >
                    <Link to="/" className="mobile-menu-link" onClick={() => setIsOpen(false)}>الرئيسية</Link>
                    <a href="/#services" className="mobile-menu-link" onClick={() => setIsOpen(false)}>خدماتنا</a>
                    <Link to="/pricing" className="mobile-menu-link" onClick={() => setIsOpen(false)}>الأسعار</Link>
                    <Link to="/about" className="mobile-menu-link" onClick={() => setIsOpen(false)}>من نحن</Link>
                    <Link to="/portfolio" className="mobile-menu-link" onClick={() => setIsOpen(false)}>أعمالنا</Link>
                    <Link to="/contact" className="mobile-menu-link" onClick={() => setIsOpen(false)}>تواصل معنا</Link>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar; 