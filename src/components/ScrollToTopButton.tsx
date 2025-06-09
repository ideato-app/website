import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fab, alpha } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { styled } from '@mui/material/styles';

const StyledFab = styled(Fab)(({ theme }) => ({
    position: 'fixed',
    bottom: theme.spacing(6),
    right: theme.spacing(6),
    zIndex: 1000,
    color: theme.palette.common.white,
    background: theme.palette.mode === 'dark'
        ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`
        : `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
    boxShadow: theme.palette.mode === 'dark'
        ? `0 10px 30px -12px ${alpha(theme.palette.primary.main, 0.5)}`
        : `0 10px 30px -12px ${alpha(theme.palette.primary.main, 0.4)}`,
    '&:hover': {
        background: theme.palette.mode === 'dark'
            ? `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`
            : `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
        boxShadow: theme.palette.mode === 'dark'
            ? `0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22), 0 0 0 5px ${alpha(theme.palette.primary.main, 0.2)}`
            : `0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22), 0 0 0 5px ${alpha(theme.palette.primary.main, 0.2)}`,
    },
    [theme.breakpoints.down('sm')]: {
        bottom: theme.spacing(4),
        right: theme.spacing(4),
    },
}));

const GlowEffect = styled(motion.div)(({ theme }) => ({
    position: 'absolute',
    inset: -4,
    borderRadius: '50%',
    background: theme.palette.mode === 'dark'
        ? `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.6)} 0%, transparent 70%)`
        : `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.4)} 0%, transparent 70%)`,
    filter: 'blur(8px)',
    opacity: 0,
    zIndex: -1,
}));

const AnimatedIcon = styled(motion.div)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence mode="wait">
            {visible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <StyledFab
                        size="medium"
                        aria-label="scroll back to top"
                        onClick={scrollToTop}
                        sx={{
                            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                            transition: 'transform 0.3s ease',
                            '&:active': {
                                transform: 'scale(0.95)'
                            }
                        }}
                    >
                        <AnimatedIcon
                            animate={{ y: isHovered ? [-3, 0, -3] : 0 }}
                            transition={{
                                duration: 1.5,
                                repeat: isHovered ? Infinity : 0,
                                ease: "easeInOut"
                            }}
                        >
                            <KeyboardArrowUpIcon />
                        </AnimatedIcon>
                    </StyledFab>
                    <GlowEffect
                        animate={{
                            opacity: isHovered ? [0.3, 0.6, 0.3] : 0,
                            scale: isHovered ? [1, 1.1, 1] : 1
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTopButton; 