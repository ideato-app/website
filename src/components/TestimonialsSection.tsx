import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Container, Avatar, Paper, Stack, Rating, IconButton, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

interface Testimonial {
    id: number;
    name: string;
    position: string;
    company: string;
    text: string;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "أحمد محمد",
        position: "مدير تنفيذي",
        company: "شركة تقنية الحلول",
        text: "تعاملنا مع فريق العمل كان مميزًا جدًا. قاموا بتحويل فكرتنا إلى منصة رقمية احترافية تجاوزت توقعاتنا من حيث الأداء والتصميم.",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        id: 2,
        name: "سارة علي",
        position: "مالكة مشروع",
        company: "بوتيك الأناقة",
        text: "ساعدوني في إنشاء متجر إلكتروني سهل الاستخدام وجميل التصميم. أصبحت المبيعات الإلكترونية تشكل الآن أكثر من 50% من إيراداتنا.",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        id: 3,
        name: "خالد عبدالله",
        position: "رائد أعمال",
        company: "مؤسسة المستقبل",
        text: "لقد قدموا لي استشارات تقنية ممتازة ساعدتني في تطوير مشروعي الناشئ وتوفير الكثير من الوقت والموارد. تعاون مثمر ومهني للغاية.",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg"
    },
];

const SectionWrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(12, 0),
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: theme.palette.mode === 'dark'
        ? 'rgba(16, 23, 42, 0.95)'
        : 'rgba(245, 247, 255, 0.8)',
}));

const BackgroundPatterns = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: theme.palette.mode === 'dark' ? 0.15 : 0.3,
    zIndex: 0,
    background: theme.palette.mode === 'dark'
        ? `
            radial-gradient(circle at 20% 30%, ${theme.palette.primary.dark}40 0%, transparent 50px),
            radial-gradient(circle at 75% 80%, ${theme.palette.secondary.dark}40 0%, transparent 70px),
            radial-gradient(circle at 90% 20%, ${theme.palette.primary.dark}40 0%, transparent 60px)
        `
        : `
            radial-gradient(circle at 20% 30%, ${theme.palette.primary.light}15 0%, transparent 50px),
            radial-gradient(circle at 75% 80%, ${theme.palette.secondary.light}15 0%, transparent 70px),
            radial-gradient(circle at 90% 20%, ${theme.palette.primary.light}15 0%, transparent 60px)
        `,
}));

const GlowEffect = styled(Box)(({ theme }) => ({
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: '50%',
    filter: 'blur(80px)',
    opacity: theme.palette.mode === 'dark' ? 0.1 : 0.1,
    zIndex: 0,
}));

const SectionHeading = styled(Typography)(({ theme }) => ({
    fontWeight: 800,
    marginBottom: theme.spacing(1),
    position: 'relative',
    display: 'inline-block',
    color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.text.primary,
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: -10,
        left: '30%',
        right: '30%',
        height: 4,
        borderRadius: 2,
        background: theme.palette.mode === 'dark'
            ? `linear-gradient(90deg, transparent, ${theme.palette.primary.light}, transparent)`
            : `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
    }
}));

const SectionSubHeading = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.text.secondary,
    maxWidth: '600px',
    margin: '0 auto',
    marginTop: theme.spacing(3),
}));

const TestimonialCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(5),
    borderRadius: theme.shape.borderRadius * 3,
    boxShadow: theme.shadows[3],
    position: 'absolute',
    inset: 0,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
    },
    alignItems: 'center',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
        textAlign: 'right',
    },
    gap: theme.spacing(4),
    background: theme.palette.mode === 'dark'
        ? `linear-gradient(145deg, ${theme.palette.grey[900]}, #111827)`
        : `linear-gradient(145deg, ${theme.palette.common.white}, ${theme.palette.grey[50]})`,
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)'}`,
    backdropFilter: 'blur(10px)',
}));

const QuoteIcon = styled('div')(({ theme }) => ({
    position: 'absolute',
    fontSize: '120px',
    opacity: theme.palette.mode === 'dark' ? 0.1 : 0.07,
    fontFamily: 'serif',
    lineHeight: 1,
    top: theme.spacing(2),
    right: theme.spacing(3),
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
}));

const TestimonialAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(14),
    height: theme.spacing(14),
    border: `4px solid ${theme.palette.background.paper}`,
    boxShadow: `0 0 0 2px ${theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main}40`,
}));

const IndicatorButton = styled(IconButton, {
    shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive?: boolean }>(({ theme, isActive }) => ({
    width: isActive ? theme.spacing(4) : theme.spacing(1.5),
    height: theme.spacing(1.5),
    padding: 0,
    borderRadius: theme.shape.borderRadius * 3,
    backgroundColor: isActive
        ? theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
        : theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[300],
    transition: theme.transitions.create(['width', 'background-color'], {
        duration: theme.transitions.duration.standard,
    }),
    '&:hover': {
        backgroundColor: isActive
            ? theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.dark
            : theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    }
}));

const TestimonialsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const theme = useTheme();

    const startAutoplay = () => {
        intervalRef.current = setInterval(() => {
            setActiveIndex((current) => (current + 1) % testimonials.length);
        }, 6000);
    };

    const stopAutoplay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    useEffect(() => {
        startAutoplay();
        return () => stopAutoplay();
    }, []);

    return (
        <SectionWrapper id="testimonials">
            <BackgroundPatterns />
            <GlowEffect
                sx={{
                    top: '20%',
                    right: '10%',
                    background: theme.palette.mode === 'dark'
                        ? `radial-gradient(circle, ${theme.palette.primary.dark}40 0%, transparent 70%)`
                        : `radial-gradient(circle, ${theme.palette.primary.main}40 0%, transparent 70%)`
                }}
            />
            <GlowEffect
                sx={{
                    bottom: '15%',
                    left: '5%',
                    background: theme.palette.mode === 'dark'
                        ? `radial-gradient(circle, ${theme.palette.secondary.dark}40 0%, transparent 70%)`
                        : `radial-gradient(circle, ${theme.palette.secondary.main}40 0%, transparent 70%)`
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box component={motion.div}
                    sx={{ textAlign: 'center', mb: 10 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <SectionHeading variant="h3">ماذا يقول عملاؤنا</SectionHeading>
                    <SectionSubHeading variant="subtitle1">
                        نفخر بتقديم خدمات ذات جودة عالية تحوز على رضا عملائنا
                    </SectionSubHeading>
                </Box>

                <Box
                    sx={{
                        maxWidth: '1000px',
                        mx: 'auto',
                        position: 'relative',
                        '&::before': theme.palette.mode === 'dark' ? {
                            content: '""',
                            position: 'absolute',
                            top: '-20px',
                            left: '-20px',
                            right: '-20px',
                            bottom: '-20px',
                            background: `radial-gradient(circle at center, rgba(30, 41, 59, 0.7) 60%, transparent 100%)`,
                            opacity: 0.8,
                            zIndex: -1,
                        } : {
                            content: '""',
                            position: 'absolute',
                            top: '-20px',
                            left: '-20px',
                            right: '-20px',
                            bottom: '-20px',
                            background: `radial-gradient(circle at center, ${theme.palette.background.paper} 60%, transparent 100%)`,
                            opacity: 0.5,
                            zIndex: -1,
                        }
                    }}
                >
                    <Box sx={{ position: 'relative', height: { xs: '450px', md: '300px' } }}>
                        {testimonials.map((testimonial, index) => (
                            <Box
                                component={motion.div}
                                key={testimonial.id}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{
                                    opacity: activeIndex === index ? 1 : 0,
                                    x: activeIndex === index ? 0 : 100,
                                    scale: activeIndex === index ? 1 : 0.9,
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <TestimonialCard elevation={2}>
                                    <QuoteIcon>"</QuoteIcon>
                                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                                        <TestimonialAvatar src={testimonial.avatar} alt={testimonial.name} />
                                        <Box
                                            component={motion.div}
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                            sx={{
                                                position: 'absolute',
                                                inset: 0,
                                                borderRadius: '50%',
                                                background: theme.palette.mode === 'dark'
                                                    ? `radial-gradient(circle, ${theme.palette.primary.dark}30 0%, transparent 70%)`
                                                    : `radial-gradient(circle, ${theme.palette.primary.main}30 0%, transparent 70%)`,
                                                filter: 'blur(10px)',
                                                opacity: 0.7,
                                                transform: 'translateY(5px)',
                                            }}
                                        />
                                    </Box>
                                    <Box sx={{ flex: 1 }}>
                                        <Rating value={5} readOnly sx={{ mb: 2 }} />
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                mb: 3,
                                                fontStyle: 'italic',
                                                fontWeight: 300,
                                                lineHeight: 1.8,
                                                color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.text.secondary
                                            }}
                                        >
                                            "{testimonial.text}"
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            fontWeight={700}
                                            sx={{
                                                color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.text.primary
                                            }}
                                        >
                                            {testimonial.name}
                                        </Typography>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                background: theme.palette.mode === 'dark'
                                                    ? `linear-gradient(90deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`
                                                    : `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                fontWeight: 600
                                            }}
                                        >
                                            {testimonial.position} | {testimonial.company}
                                        </Typography>
                                    </Box>
                                </TestimonialCard>
                            </Box>
                        ))}
                    </Box>

                    <Stack
                        direction="row"
                        spacing={1}
                        justifyContent="center"
                        sx={{ mt: 4 }}
                        component={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        {testimonials.map((_, index) => (
                            <IndicatorButton
                                key={index}
                                isActive={activeIndex === index}
                                onClick={() => {
                                    setActiveIndex(index);
                                    stopAutoplay();
                                    startAutoplay();
                                }}
                                aria-label={`View testimonial ${index + 1}`}
                                size="small"
                            />
                        ))}
                    </Stack>
                </Box>
            </Container>
        </SectionWrapper>
    );
};

export default TestimonialsSection; 