import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface DarkModeToggleProps {
    isNavbar?: boolean;
}

const DarkModeToggle = ({ isNavbar = false }: DarkModeToggleProps) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check for user preference on initial load
        if (localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark-mode');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark-mode');
        }
    }, []);

    const toggleDarkMode = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark-mode');
            localStorage.theme = 'light';
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark-mode');
            localStorage.theme = 'dark';
            setIsDarkMode(true);
        }
    };

    const buttonStyle = {
        padding: '0.5rem',
        borderRadius: '9999px',
        backgroundColor: isDarkMode ? '#1f2937' : '#f3f4f6',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    };

    return (
        <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={toggleDarkMode}
            style={buttonStyle}
            aria-label="Toggle Dark Mode"
            className={`theme-toggle-btn ${isNavbar ? '' : 'fixed'}`}
        >
            {isDarkMode ? (
                <svg style={{ width: isNavbar ? '1.25rem' : '1.5rem', height: isNavbar ? '1.25rem' : '1.5rem', color: '#fbbf24' }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path>
                </svg>
            ) : (
                <svg style={{ width: isNavbar ? '1.25rem' : '1.5rem', height: isNavbar ? '1.25rem' : '1.5rem', color: '#4b5563' }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
            )}
        </motion.button>
    );
};

export default DarkModeToggle; 