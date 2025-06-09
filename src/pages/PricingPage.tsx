import { useState } from 'react';
import { Container, Typography, Box, Tabs, Tab, useTheme, styled as muiStyled } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { servicePricingData } from '../data/servicePricingData';
import PricingCard from '../components/PricingCard';
import { styled } from '@mui/material/styles';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import LockPersonIcon from '@mui/icons-material/LockPerson';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const PageContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(12, 0),
    position: 'relative',
    minHeight: '100vh',
    backgroundColor: theme.palette.mode === 'dark'
        ? 'rgba(10, 15, 25, 0.97)'
        : 'rgba(255, 255, 255, 0.97)',
    overflow: 'hidden',
}));

const AuroraBackground = styled(Box)(() => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    zIndex: 0,
}));

const AuroraShape = styled(motion.div)(({ theme }) => ({
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(100px)',
    opacity: theme.palette.mode === 'dark' ? 0.15 : 0.5,
    '&.aurora-shape-1': {
        width: '40%',
        height: '60%',
        top: '-10%',
        right: '-5%',
        background: theme.palette.mode === 'dark'
            ? `radial-gradient(circle, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`
            : `radial-gradient(circle, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`,
    },
    '&.aurora-shape-2': {
        width: '40%',
        height: '60%',
        bottom: '-10%',
        left: '-5%',
        background: theme.palette.mode === 'dark'
            ? `radial-gradient(circle, ${theme.palette.secondary.dark} 0%, ${theme.palette.primary.dark} 100%)`
            : `radial-gradient(circle, ${theme.palette.secondary.light} 0%, ${theme.palette.primary.light} 100%)`,
    },
}));

const PageTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 800,
    marginBottom: theme.spacing(1),
    textAlign: 'center',
    position: 'relative',
    display: 'inline-block',
    background: theme.palette.mode === 'dark'
        ? `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
        : `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    padding: theme.spacing(0, 2),
}));

const PageDescription = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.85)' : theme.palette.text.secondary,
    textAlign: 'center',
    maxWidth: '750px',
    margin: '0 auto 3rem auto',
    lineHeight: 1.7,
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
    marginBottom: theme.spacing(5),
    '& .MuiTabs-indicator': {
        backgroundColor: theme.palette.primary.main,
        height: 3,
    },
    '& .MuiTab-root': {
        fontWeight: 'bold',
        fontSize: '1rem',
        color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.text.primary,
        opacity: 0.7,
        transition: 'all 0.3s ease',
        '&.Mui-selected': {
            color: theme.palette.primary.main,
            opacity: 1,
        },
        '&:hover': {
            opacity: 1,
            backgroundColor: theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, 0.08)'
                : 'rgba(0, 0, 0, 0.04)',
        },
    },
}));

const ServiceContext = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark'
        ? 'rgba(17, 25, 40, 0.7)'
        : 'rgba(255, 255, 255, 0.8)',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.03)'}`,
    borderRadius: 16,
    padding: theme.spacing(4),
    marginBottom: theme.spacing(5),
    backdropFilter: 'blur(10px)',
    boxShadow: theme.palette.mode === 'dark'
        ? '0 8px 20px rgba(0, 0, 0, 0.25)'
        : '0 8px 20px rgba(0, 0, 0, 0.05)',
    position: 'relative',
    zIndex: 1,
}));

const ServiceIcon = styled(Box)(({ theme }) => ({
    fontSize: '3rem',
    marginBottom: theme.spacing(2),
    display: 'inline-block',
}));

const ServiceTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.text.primary,
}));

const ServiceDescription = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.75)' : theme.palette.text.secondary,
    marginBottom: theme.spacing(3),
    lineHeight: 1.7,
}));

const AdditionalInfo = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(8),
    padding: theme.spacing(4),
    borderRadius: 16,
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.03)'}`,
    backgroundColor: theme.palette.mode === 'dark'
        ? 'rgba(17, 25, 40, 0.7)'
        : 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    boxShadow: theme.palette.mode === 'dark'
        ? '0 8px 20px rgba(0, 0, 0, 0.25)'
        : '0 8px 20px rgba(0, 0, 0, 0.05)',
}));

const InfoItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: theme.spacing(3),
    '&:last-child': {
        marginBottom: 0,
    },
}));

const InfoIcon = styled(Box)(({ theme }) => ({
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(0.5),
}));

const DecorativeElement = styled(motion.div)(({ theme }) => ({
    position: 'absolute',
    zIndex: 0,
    opacity: theme.palette.mode === 'dark' ? 0.15 : 0.1,
    '&.element-1': {
        top: '10%',
        right: '5%',
        fontSize: '140px',
        color: theme.palette.primary.main,
    },
    '&.element-2': {
        bottom: '15%',
        left: '5%',
        fontSize: '120px',
        color: theme.palette.secondary.main,
    },
    '&.element-3': {
        top: '30%',
        left: '10%',
        fontSize: '100px',
        color: theme.palette.primary.main,
    },
}));

const PromoBadge = styled(motion.div)(({ theme }) => ({
    position: 'absolute',
    top: -20,
    right: 40,
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,
    borderRadius: '50px',
    padding: theme.spacing(0.5, 2),
    fontSize: '0.85rem',
    fontWeight: 'bold',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)',
    zIndex: 5,
}));

const TabWrapper = styled(Box)(({ theme }) => ({
    position: 'relative',
    zIndex: 2,
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: '10%',
        right: '10%',
        height: '1px',
        background: theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.1)'
            : 'rgba(0, 0, 0, 0.1)',
        zIndex: 1,
    }
}));

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`service-tabpanel-${index}`}
            aria-labelledby={`service-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ pt: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {children}
                    </motion.div>
                </Box>
            )}
        </div>
    );
}

const PricingPage = () => {
    const [value, setValue] = useState(0);
    const theme = useTheme();

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <PageContainer>
            <AuroraBackground>
                <AuroraShape
                    className="aurora-shape-1"
                    animate={{
                        x: [0, 30, 0],
                        opacity: [0.15, 0.2, 0.15]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <AuroraShape
                    className="aurora-shape-2"
                    animate={{
                        x: [0, -30, 0],
                        opacity: [0.15, 0.2, 0.15]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </AuroraBackground>

            <DecorativeElement
                className="element-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            >
                <StarIcon fontSize="inherit" />
            </DecorativeElement>

            <DecorativeElement
                className="element-2"
                animate={{ rotate: -360 }}
                transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
            >
                <CrisisAlertIcon fontSize="inherit" />
            </DecorativeElement>

            <DecorativeElement
                className="element-3"
                animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
                <LockPersonIcon fontSize="inherit" />
            </DecorativeElement>

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <PageTitle variant="h2">
                            باقات وأسعار خدماتنا
                        </PageTitle>
                        <PageDescription variant="h6">
                            لكل خدمة نقدمها، خطط مصممة خصيصاً لتلبية احتياجاتك المتنوعة، من المشاريع الناشئة إلى الشركات الكبرى.
                            جميع الأسعار تشمل الدعم الفني والتحديثات المجانية وضمان الجودة.
                        </PageDescription>
                    </motion.div>
                </Box>

                <TabWrapper>
                    <Box sx={{
                        borderBottom: 1,
                        borderColor: 'divider',
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative',
                        zIndex: 2
                    }}>
                        <StyledTabs
                            value={value}
                            onChange={handleChange}
                            aria-label="Service pricing tabs"
                            variant="scrollable"
                            scrollButtons="auto"
                            allowScrollButtonsMobile
                        >
                            {servicePricingData.map((service, index) => (
                                <Tab
                                    key={service.serviceId}
                                    label={
                                        <motion.span
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        >
                                            {service.serviceIcon} {service.serviceTitle}
                                        </motion.span>
                                    }
                                    id={`service-tab-${index}`}
                                />
                            ))}
                        </StyledTabs>
                    </Box>
                </TabWrapper>

                <AnimatePresence mode="wait">
                    {servicePricingData.map((service, index) => (
                        <TabPanel key={service.serviceId} value={value} index={index}>
                            <ServiceContext>
                                <Box sx={{ textAlign: 'center', mb: 3 }}>
                                    <ServiceIcon>{service.serviceIcon}</ServiceIcon>
                                    <ServiceTitle variant="h4">{service.serviceTitle}</ServiceTitle>
                                    <ServiceDescription variant="body1">
                                        {service.serviceDescription}
                                    </ServiceDescription>
                                </Box>

                                {service.serviceId === 'web-dev' && (
                                    <PromoBadge
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1, rotate: -5 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 10,
                                            delay: 0.5
                                        }}
                                    >
                                        خصم 20% لفترة محدودة!
                                    </PromoBadge>
                                )}
                            </ServiceContext>

                            <Box sx={{
                                display: 'grid',
                                gridTemplateColumns: {
                                    xs: '1fr',
                                    md: 'repeat(3, 1fr)',
                                },
                                gap: 4
                            }}>
                                {service.plans.map((plan, i) => (
                                    <motion.div
                                        key={plan.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: i * 0.1 + 0.2
                                        }}
                                    >
                                        <PricingCard plan={plan} />
                                    </motion.div>
                                ))}
                            </Box>

                            <AdditionalInfo>
                                <Typography variant="h5" sx={{
                                    mb: 3,
                                    fontWeight: 700,
                                    color: theme.palette.text.primary,
                                    textAlign: 'center',
                                    position: 'relative',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: -8,
                                        left: '30%',
                                        right: '30%',
                                        height: '2px',
                                        background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
                                    }
                                }}>
                                    معلومات إضافية
                                </Typography>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <InfoItem>
                                        <InfoIcon>
                                            <VerifiedIcon />
                                        </InfoIcon>
                                        <Box>
                                            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5, color: theme.palette.text.primary }}>
                                                ضمان الجودة
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                                جميع خدماتنا تأتي مع ضمان رضا لمدة 30 يوم. إذا لم تكن راضيًا عن الخدمة، سنقوم بإصلاح أي مشاكل مجانًا.
                                            </Typography>
                                        </Box>
                                    </InfoItem>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <InfoItem>
                                        <InfoIcon>
                                            <SupportAgentIcon />
                                        </InfoIcon>
                                        <Box>
                                            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5, color: theme.palette.text.primary }}>
                                                دعم فني
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                                نقدم دعمًا فنيًا مجانيًا لمدة تتراوح من شهر إلى سنة حسب الباقة المختارة، مع إمكانية تمديد الدعم بعقود صيانة سنوية.
                                            </Typography>
                                        </Box>
                                    </InfoItem>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    <InfoItem>
                                        <InfoIcon>
                                            <QuestionAnswerIcon />
                                        </InfoIcon>
                                        <Box>
                                            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5, color: theme.palette.text.primary }}>
                                                استشارة مجانية
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                                تواصل معنا للحصول على استشارة مجانية لتحديد الباقة المناسبة لاحتياجاتك ولمعرفة المزيد عن خدماتنا.
                                            </Typography>
                                        </Box>
                                    </InfoItem>
                                </motion.div>
                            </AdditionalInfo>
                        </TabPanel>
                    ))}
                </AnimatePresence>
            </Container>
        </PageContainer>
    );
};

export default PricingPage; 