import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Box, Typography, Container, Button, Stack, useTheme, alpha } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionRoot = styled(Box)(({ theme }) => ({
    position: 'relative',
    padding: theme.spacing(12, 0),
    overflow: 'hidden',
    backgroundColor: theme.palette.mode === 'dark'
        ? 'rgba(14, 21, 37, 0.9)'
        : alpha(theme.palette.primary.light, 0.04),
}));

const BackgroundGradient = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: theme.palette.mode === 'dark'
        ? `radial-gradient(circle at 20% 30%, ${alpha(theme.palette.primary.dark, 0.4)} 0%, transparent 40%), 
           radial-gradient(circle at 80% 80%, ${alpha(theme.palette.secondary.dark, 0.4)} 0%, transparent 40%)`
        : `radial-gradient(circle at 20% 30%, ${alpha(theme.palette.primary.main, 0.15)} 0%, transparent 40%), 
           radial-gradient(circle at 80% 80%, ${alpha(theme.palette.secondary.main, 0.15)} 0%, transparent 40%)`,
    opacity: 1,
    zIndex: 0,
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
    position: 'relative',
    zIndex: 2,
    background: theme.palette.mode === 'dark'
        ? 'linear-gradient(135deg, rgba(23, 36, 60, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)'
        : 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(245, 247, 255, 0.8) 100%)',
    borderRadius: theme.shape.borderRadius * 3,
    padding: theme.spacing(6),
    boxShadow: theme.palette.mode === 'dark'
        ? '0 20px 60px rgba(0, 0, 0, 0.3)'
        : '0 20px 60px rgba(0, 0, 0, 0.05)',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)'}`,
    backdropFilter: 'blur(15px)',
    overflow: 'hidden',
}));

const SectionHeading = styled(Typography)(({ theme }) => ({
    fontWeight: 800,
    marginBottom: theme.spacing(3),
    textAlign: 'center',
    position: 'relative',
    display: 'inline-block',
    color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.text.primary,
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: -8,
        left: '30%',
        right: '30%',
        height: 3,
        borderRadius: 2,
        background: theme.palette.mode === 'dark'
            ? `linear-gradient(90deg, transparent, ${theme.palette.primary.light}, transparent)`
            : `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
    }
}));

const GradientTypography = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    background: theme.palette.mode === 'dark'
        ? `linear-gradient(120deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`
        : `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: theme.spacing(3),
}));

const GlowingButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(1.5, 4),
    fontSize: '1rem',
    fontWeight: 600,
    borderRadius: theme.shape.borderRadius * 5,
    textTransform: 'none',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    border: 0,
    '&.primary': {
        background: theme.palette.mode === 'dark'
            ? `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`
            : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        color: theme.palette.primary.contrastText,
        '&:hover': {
            boxShadow: theme.palette.mode === 'dark'
                ? `0 0 25px ${alpha(theme.palette.primary.main, 0.5)}`
                : `0 0 25px ${alpha(theme.palette.primary.main, 0.3)}`,
            transform: 'translateY(-3px)',
        },
    },
    '&.secondary': {
        background: theme.palette.mode === 'dark'
            ? `rgba(255, 255, 255, 0.1)`
            : `rgba(0, 0, 0, 0.05)`,
        backdropFilter: 'blur(10px)',
        border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
        color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.text.primary,
        '&:hover': {
            boxShadow: theme.palette.mode === 'dark'
                ? `0 0 15px rgba(255, 255, 255, 0.1)`
                : `0 0 15px rgba(0, 0, 0, 0.05)`,
            background: theme.palette.mode === 'dark'
                ? `rgba(255, 255, 255, 0.15)`
                : `rgba(0, 0, 0, 0.08)`,
            transform: 'translateY(-3px)',
        },
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
    },
    '&:hover::before': {
        left: '100%',
        transition: 'all 0.7s ease',
    },
}));

const FloatingElement = styled(Box)(({ theme }) => ({
    position: 'absolute',
    borderRadius: '50%',
    background: theme.palette.mode === 'dark'
        ? `radial-gradient(circle, ${alpha(theme.palette.primary.dark, 0.6)} 0%, transparent 70%)`
        : `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.3)} 0%, transparent 70%)`,
    filter: 'blur(15px)',
}));

const DecorativeDots = styled(Box)(({ theme }) => ({
    position: 'absolute',
    width: 200,
    height: 200,
    opacity: theme.palette.mode === 'dark' ? 0.1 : 0.2,
    backgroundImage: theme.palette.mode === 'dark'
        ? `radial-gradient(${theme.palette.primary.light} 1px, transparent 1px)`
        : `radial-gradient(${theme.palette.primary.main} 1px, transparent 1px)`,
    backgroundSize: '20px 20px',
}));

const CtaSection = () => {
    const theme = useTheme();
    const [isHovered, setIsHovered] = useState(false);

    const particles = Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        size: Math.random() * 8 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
    }));

    return (
        <SectionRoot id="cta">
            <BackgroundGradient />

            {/* Decorative elements */}
            <DecorativeDots sx={{ top: '10%', right: '5%', zIndex: 1 }} />
            <DecorativeDots sx={{ bottom: '10%', left: '5%', zIndex: 1 }} />

            {/* Floating glowing elements */}
            {particles.map((particle) => (
                <FloatingElement
                    key={particle.id}
                    component={motion.div}
                    sx={{
                        width: particle.size * 10,
                        height: particle.size * 10,
                        top: `${particle.y}%`,
                        left: `${particle.x}%`,
                        opacity: theme.palette.mode === 'dark' ? 0.15 : 0.3,
                        zIndex: 1
                    }}
                    animate={{
                        y: ['-20px', '20px', '-20px'],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: 'easeInOut',
                    }}
                />
            ))}

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                <ContentWrapper>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={4}
                        alignItems="center"
                    >
                        <Stack
                            direction={{ xs: 'column', md: 'row' }}
                            spacing={4}
                            justifyContent={{ xs: 'center', md: 'flex-start' }}
                        >
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                sx={{ textAlign: { xs: 'center', md: 'right' } }}
                            >
                                <SectionHeading variant="h3">
                                    هل أنت جاهز لبدء مشروعك الرقمي؟
                                </SectionHeading>
                                <GradientTypography variant="h5">
                                    فريقنا من الخبراء جاهز لمساعدتك في تحقيق رؤيتك
                                </GradientTypography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        mb: 4,
                                        fontSize: '1.1rem',
                                        lineHeight: 1.7,
                                        color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.text.secondary
                                    }}
                                >
                                    نقدم لك استشارة مجانية لمناقشة احتياجات مشروعك والحلول المناسبة له. تواصل معنا اليوم لبدء رحلة نجاح مشروعك الرقمي.
                                </Typography>
                            </Box>
                        </Stack>
                        <Stack
                            direction={{ xs: 'column', md: 'row' }}
                            spacing={4}
                            justifyContent={{ xs: 'center', md: 'flex-end' }}
                        >
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2,
                                    alignItems: { xs: 'center', md: 'flex-start' }
                                }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <GlowingButton
                                    className="primary"
                                    component={motion.button}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    fullWidth
                                >
                                    تواصل معنا
                                </GlowingButton>
                                <GlowingButton
                                    className="secondary"
                                    component={motion.button}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    fullWidth
                                >
                                    تصفح أعمالنا
                                </GlowingButton>

                                {/* Animated glow effect */}
                                <Box
                                    component={motion.div}
                                    animate={isHovered ? {
                                        opacity: [0.3, 0.6, 0.3],
                                        scale: [1, 1.2, 1],
                                    } : { opacity: 0 }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    sx={{
                                        position: 'absolute',
                                        inset: 0,
                                        borderRadius: theme.shape.borderRadius * 3,
                                        background: theme.palette.mode === 'dark'
                                            ? `radial-gradient(circle at center, ${alpha(theme.palette.primary.dark, 0.4)} 0%, transparent 70%)`
                                            : `radial-gradient(circle at center, ${alpha(theme.palette.primary.main, 0.2)} 0%, transparent 70%)`,
                                        filter: 'blur(30px)',
                                        zIndex: -1,
                                    }}
                                />
                            </Box>
                        </Stack>
                    </Stack>
                </ContentWrapper>
            </Container>
        </SectionRoot>
    );
};

export default CtaSection; 