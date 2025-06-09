import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Box, Typography, Container, Button, Stack, useTheme } from '@mui/material';
import './CtaSection.css';

const CtaSection = () => {
    const theme = useTheme();

    const particles = Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        size: Math.random() * 8 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
    }));

    return (
        <Box component="section" id="cta" className="cta-section">
            <div className="cta-background-gradient" />

            {/* Decorative elements */}
            <div className="decorative-dots" style={{ top: '10%', right: '5%', zIndex: 1 }} />
            <div className="decorative-dots" style={{ bottom: '10%', left: '5%', zIndex: 1 }} />

            {/* Floating glowing elements */}
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="floating-element"
                    style={{
                        width: particle.size * 10,
                        height: particle.size * 10,
                        top: `${particle.y}%`,
                        left: `${particle.x}%`,
                        animationDuration: `${particle.duration}s`,
                        animationDelay: `${particle.delay}s`,
                        zIndex: 1,
                    }}
                />
            ))}

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                <div className="cta-content-wrapper">
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
                                <Typography variant="h3" className="cta-heading">
                                    هل أنت جاهز لبدء مشروعك الرقمي؟
                                </Typography>
                                <Typography variant="h5" className="cta-gradient-text">
                                    فريقنا من الخبراء جاهز لمساعدتك في تحقيق رؤيتك
                                </Typography>
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
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    gap: 2,
                                    width: { xs: '100%', md: 'auto' }
                                }}
                            >
                                <Button
                                    component={Link}
                                    to="/contact"
                                    className="glowing-button primary"
                                >
                                    اطلب استشارة مجانية
                                </Button>
                                <Button
                                    component={Link}
                                    to="/portfolio"
                                    className="glowing-button secondary"
                                >
                                    شاهد أعمالنا
                                </Button>
                            </Box>
                        </Stack>
                    </Stack>
                </div>
            </Container>
        </Box>
    );
};

export default CtaSection; 