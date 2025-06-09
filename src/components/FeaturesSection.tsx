import { motion } from 'framer-motion';
import { Box, Typography, Container, Grid, Paper, useTheme, useMediaQuery } from '@mui/material';
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
            ? 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath opacity=\'.5\' d=\'M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z\'/%3E%3Cpath d=\'M6 5V0H5v5H0v1h5v94h1V6h94V5H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
            : 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.03\'%3E%3Cpath opacity=\'.5\' d=\'M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z\'/%3E%3Cpath d=\'M6 5V0H5v5H0v1h5v94h1V6h94V5H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        opacity: theme.palette.mode === 'dark' ? 0.15 : 0.3,
        zIndex: 0,
    } : {}
}));

const SectionHeadingWrapper = styled(Box)(({ theme }) => ({
    position: 'relative',
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: -30,
        left: '10%',
        right: '10%',
        height: 1,
        background: theme.palette.mode === 'dark'
            ? `linear-gradient(90deg, transparent, ${theme.palette.primary.main}30, transparent)`
            : `linear-gradient(90deg, transparent, ${theme.palette.primary.main}40, transparent)`,
    },
}));

const SectionHeading = styled(Typography)(({ theme }) => ({
    fontWeight: 800,
    marginBottom: theme.spacing(2),
    position: 'relative',
    display: 'inline-block',
    color: theme.palette.mode === 'dark' ? theme.palette.common.white : 'inherit',
    background: theme.palette.mode === 'dark'
        ? `linear-gradient(120deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`
        : `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: -8,
        left: '30%',
        right: '30%',
        height: 3,
        borderRadius: 3,
        background: theme.palette.mode === 'dark'
            ? `linear-gradient(90deg, transparent, ${theme.palette.primary.light}, transparent)`
            : `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
    }
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(17, 25, 40, 0.8)' : theme.palette.common.white,
    borderRadius: theme.shape.borderRadius * 2,
    padding: theme.spacing(5),
    boxShadow: theme.palette.mode === 'dark'
        ? '0 20px 60px rgba(0, 0, 0, 0.2)'
        : '0 20px 60px rgba(0, 0, 0, 0.05)',
    height: '100%',
    transition: theme.transitions.create(['transform', 'box-shadow'], {
        duration: theme.transitions.duration.standard,
    }),
    overflow: 'hidden',
    position: 'relative',
    zIndex: 1,
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 4,
        background: theme.palette.mode === 'dark'
            ? `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`
            : `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        zIndex: 2,
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        inset: 0,
        background: theme.palette.mode === 'dark'
            ? `radial-gradient(circle at 90% 10%, ${theme.palette.primary.dark}10, transparent 60%)`
            : `radial-gradient(circle at 90% 10%, ${theme.palette.primary.main}05, transparent 60%)`,
        zIndex: 0,
    },
    '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: theme.palette.mode === 'dark'
            ? '0 30px 70px rgba(0, 0, 0, 0.3)'
            : '0 30px 70px rgba(0, 0, 0, 0.08)',
    }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    marginBottom: theme.spacing(3),
    position: 'relative',
    '& svg': {
        width: 45,
        height: 45,
        zIndex: 2,
        position: 'relative',
        stroke: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        width: 70,
        height: 70,
        top: -12.5,
        right: -12.5,
        background: theme.palette.mode === 'dark'
            ? `radial-gradient(circle, ${theme.palette.primary.dark}40 0%, transparent 70%)`
            : `radial-gradient(circle, ${theme.palette.primary.light}30 0%, transparent 70%)`,
        borderRadius: '50%',
        zIndex: 1,
    }
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    position: 'relative',
    display: 'inline-block',
    color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.text.primary,
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: -5,
        right: 0,
        width: 30,
        height: 2,
        background: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    }
}));

const FeaturesSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <SectionRoot id="features" hasBackground>
            {/* Background glows */}
            <Box
                sx={{
                    position: 'absolute',
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    filter: 'blur(100px)',
                    background: theme.palette.mode === 'dark'
                        ? `radial-gradient(circle, ${theme.palette.primary.dark}30 0%, transparent 70%)`
                        : `radial-gradient(circle, ${theme.palette.primary.main}20 0%, transparent 70%)`,
                    top: '10%',
                    right: '5%',
                    opacity: theme.palette.mode === 'dark' ? 0.4 : 0.7,
                    zIndex: 0,
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    width: 250,
                    height: 250,
                    borderRadius: '50%',
                    filter: 'blur(90px)',
                    background: theme.palette.mode === 'dark'
                        ? `radial-gradient(circle, ${theme.palette.secondary.dark}30 0%, transparent 70%)`
                        : `radial-gradient(circle, ${theme.palette.secondary.main}20 0%, transparent 70%)`,
                    bottom: '15%',
                    left: '10%',
                    opacity: theme.palette.mode === 'dark' ? 0.4 : 0.6,
                    zIndex: 0,
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <SectionHeadingWrapper>
                    <Box
                        component={motion.div}
                        sx={{
                            textAlign: 'center',
                            maxWidth: '800px',
                            mx: 'auto',
                            mb: 10
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeading variant="h3">
                            لماذا تختارنا؟
                        </SectionHeading>
                        <Typography
                            variant="subtitle1"
                            color={theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.text.secondary}
                            sx={{
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                mt: 3,
                                lineHeight: 1.7
                            }}
                        >
                            نقدم لك مجموعة من الخدمات المتميزة التي تضمن نجاح مشروعك الرقمي
                        </Typography>
                    </Box>
                </SectionHeadingWrapper>

                <Box
                    component={motion.div}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: isMobile ? "0px" : "-100px" }}
                >
                    <Grid container spacing={4}>
                        {features.map((feature, index) => (
                            <Grid item xs={12} md={6} lg={4} key={feature.id}>
                                <Box
                                    component={motion.div}
                                    variants={itemVariants}
                                    sx={{ height: '100%' }}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <FeatureCard>
                                        <IconWrapper>
                                            {feature.icon}
                                            <Box
                                                component={motion.div}
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    opacity: [0.7, 1, 0.7]
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    delay: index * 0.5
                                                }}
                                                sx={{
                                                    position: 'absolute',
                                                    width: 30,
                                                    height: 30,
                                                    borderRadius: '50%',
                                                    background: theme.palette.mode === 'dark'
                                                        ? `radial-gradient(circle, ${theme.palette.primary.dark}60 0%, transparent 70%)`
                                                        : `radial-gradient(circle, ${theme.palette.primary.main}50 0%, transparent 70%)`,
                                                    right: 5,
                                                    top: 5,
                                                    filter: 'blur(8px)',
                                                    zIndex: 0
                                                }}
                                            />
                                        </IconWrapper>
                                        <FeatureTitle variant="h6">
                                            {feature.title}
                                        </FeatureTitle>
                                        <Typography
                                            variant="body2"
                                            color={theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.text.secondary}
                                            sx={{
                                                lineHeight: 1.8,
                                                position: 'relative',
                                                zIndex: 2
                                            }}
                                        >
                                            {feature.description}
                                        </Typography>
                                    </FeatureCard>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Decorative dots pattern */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 40,
                        right: 40,
                        width: 180,
                        height: 180,
                        opacity: theme.palette.mode === 'dark' ? 0.15 : 0.4,
                        display: { xs: 'none', md: 'block' },
                        zIndex: 0,
                        backgroundImage: theme.palette.mode === 'dark'
                            ? `radial-gradient(${theme.palette.primary.light}90 1px, transparent 1px)`
                            : `radial-gradient(${theme.palette.primary.main}70 1px, transparent 1px)`,
                        backgroundSize: '15px 15px'
                    }}
                />
            </Container>
        </SectionRoot>
    );
};

export default FeaturesSection; 