import { motion } from 'framer-motion';
import { Box, Typography, Container, Paper, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';

interface Feature {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const features: Feature[] = [
    {
        id: 1,
        title: 'تصميم عصري',
        description: 'نصمم واجهات مستخدم جذابة وعصرية تعكس هوية مشروعك وتجذب العملاء',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        )
    },
    {
        id: 2,
        title: 'تطوير متكامل',
        description: 'نقدم حلولاً متكاملة تشمل تصميم وتطوير المواقع والتطبيقات بأحدث التقنيات',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        )
    },
    {
        id: 3,
        title: 'تجربة مستخدم مميزة',
        description: 'نركز على تجربة المستخدم لضمان سهولة الاستخدام وزيادة التفاعل مع المحتوى',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
        )
    },
    {
        id: 4,
        title: 'تحسين محركات البحث',
        description: 'نطبق أفضل ممارسات تحسين محركات البحث لزيادة ظهور موقعك في نتائج البحث',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        )
    },
    {
        id: 5,
        title: 'دعم فني مستمر',
        description: 'نقدم دعماً فنياً مستمراً لضمان عمل موقعك أو تطبيقك بكفاءة عالية',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        )
    },
    {
        id: 6,
        title: 'تكامل مع وسائل الدفع',
        description: 'نوفر حلول متكاملة مع بوابات الدفع المحلية والعالمية لتسهيل عمليات البيع الإلكتروني',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
        )
    }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1.0]
        }
    }
};

const MotionPaper = motion(Paper);

const SectionRoot = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'hasBackground'
})<{ hasBackground?: boolean }>(({ theme, hasBackground }) => ({
    padding: theme.spacing(12, 0),
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: hasBackground
        ? theme.palette.mode === 'dark'
            ? 'rgba(15, 23, 42, 0.95)'
            : 'rgba(245, 247, 255, 0.7)'
        : 'transparent',
    '&::before': hasBackground ? {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: theme.palette.mode === 'dark'
            ? 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.12\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")'
            : 'linear-gradient(180deg, hsla(0, 0%, 100%, 0.7), #ffffff)',
        backgroundAttachment: 'fixed',
        zIndex: -1,
    } : {},
}));

const FeaturesSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <SectionRoot hasBackground>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" gutterBottom sx={{ mb: 10, fontWeight: 'bold', color: 'text.primary' }}>
                    خدماتنا المتميزة
                </Typography>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <Box
                        display="flex"
                        flexWrap="wrap"
                        m={isMobile ? -2 : -2.5}
                    >
                        {features.map((feature) => (
                            <Box
                                key={feature.id}
                                width={{ xs: 1, sm: 1 / 2, md: 1 / 3 }}
                                p={isMobile ? 2 : 2.5}
                            >
                                <MotionPaper
                                    variants={itemVariants}
                                    elevation={0}
                                    sx={{
                                        padding: 4,
                                        textAlign: 'center',
                                        backgroundColor: 'rgba(var(--bg-secondary-rgb), 0.5)',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: '16px',
                                        backdropFilter: 'blur(10px)',
                                        height: '300px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Box sx={{ mb: 2, color: 'primary.main', fontSize: '2.5rem' }}>{feature.icon}</Box>
                                    <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {feature.description}
                                    </Typography>
                                </MotionPaper>
                            </Box>
                        ))}
                    </Box>
                </motion.div>
            </Container>
        </SectionRoot>
    );
};

export default FeaturesSection;