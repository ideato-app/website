import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navStyle: any = {
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 1000,
        padding: '1.5rem 0',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease',
        backgroundColor: scrolled ? 'rgba(var(--bg-secondary-rgb), 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 2px 10px rgba(var(--shadow-color), 0.1)' : 'none',
        borderBottom: '1px solid',
        borderColor: scrolled ? 'var(--border-color)' : 'transparent',
    };

    const linkStyle: any = {
        color: 'var(--text-secondary)',
        fontWeight: '700',
        textDecoration: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '6px',
        transition: 'color 0.2s ease, background-color 0.2s ease',
    };

    const hoverStyle: any = {
        color: 'var(--text-primary)',
        backgroundColor: 'var(--bg-tertiary)',
    };

    const handleMouseOver = (e: React.MouseEvent<HTMLAnchorElement>) => Object.assign(e.currentTarget.style, hoverStyle);
    const handleMouseOut = (e: React.MouseEvent<HTMLAnchorElement>) => Object.assign(e.currentTarget.style, linkStyle);

    return (
        <motion.nav
            style={navStyle}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontSize: '1.5rem', fontWeight: '900' }}>
                    Idea<span style={{ color: 'var(--accent-primary)' }}>To</span>App
                </Link>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {/* Desktop Menu */}
                    <div className="desktop-nav">
                        <Link to="/" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>الرئيسية</Link>
                        <a href="/#services" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>خدماتنا</a>
                        <Link to="/about" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>من نحن</Link>
                        <Link to="/contact" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>تواصل معنا</Link>
                    </div>
                    <DarkModeToggle />
                    <button className="mobile-nav-toggle" onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: 'var(--text-primary)' }}>
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
                    style={{
                        position: 'absolute',
                        top: '100%',
                        right: 0,
                        left: 0,
                        background: 'var(--bg-secondary)',
                        padding: '1rem 0',
                        textAlign: 'center'
                    }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                >
                    <Link to="/" style={{ ...linkStyle, display: 'block', padding: '1rem' }} onClick={() => setIsOpen(false)}>الرئيسية</Link>
                    <a href="/#services" style={{ ...linkStyle, display: 'block', padding: '1rem' }} onClick={() => setIsOpen(false)}>خدماتنا</a>
                    <Link to="/about" style={{ ...linkStyle, display: 'block', padding: '1rem' }} onClick={() => setIsOpen(false)}>من نحن</Link>
                    <Link to="/contact" style={{ ...linkStyle, display: 'block', padding: '1rem' }} onClick={() => setIsOpen(false)}>تواصل معنا</Link>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar; 