import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Box, Typography, Container, Paper, useTheme } from '@mui/material';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeOut' }
    }
};

const ServiceContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    minHeight: '100vh',
    paddingTop: '8rem',
    paddingBottom: '4rem',
    overflow: 'hidden',
    backgroundColor: theme.palette.mode === 'dark'
        ? 'rgba(10, 15, 25, 0.97)'
        : 'rgba(255, 255, 255, 0.97)',
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

const ServiceHeader = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    marginBottom: '6rem',
    position: 'relative',
    zIndex: 1,
}));

const IconContainer = styled(Box)(({ theme }) => ({
    fontSize: '4rem',
    display: 'inline-block',
    marginBottom: '1.5rem',
    background: theme.palette.mode === 'dark'
        ? `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`
        : `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    padding: '1rem',
    borderRadius: '20px',
    lineHeight: 1,
    boxShadow: theme.palette.mode === 'dark'
        ? '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(59, 130, 246, 0.15)'
        : '0 10px 30px rgba(0, 0, 0, 0.1)',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 800,
    fontSize: '2.5rem',
    textAlign: 'center',
    margin: 0,
    position: 'relative',
    display: 'inline-block',
    background: theme.palette.mode === 'dark'
        ? `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
        : `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
}));

const SectionTitleSmall = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    fontSize: '2rem',
    textAlign: 'center',
    color: theme.palette.text.primary,
}));

const ServiceDescription = styled(Typography)(({ theme }) => ({
    fontSize: '1.2rem',
    lineHeight: 1.8,
    color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.85)' : theme.palette.text.secondary,
    maxWidth: '750px',
    margin: '1.5rem auto 0 auto'
}));

const Divider = styled(Box)(({ theme }) => ({
    height: '3px',
    width: '80px',
    background: theme.palette.mode === 'dark'
        ? `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`
        : `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: '2px',
    margin: '0 auto 2.5rem auto',
}));

const FeaturesGrid = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
}));

const FeatureCardStyled = styled(Paper)(({ theme }) => ({
    background: theme.palette.mode === 'dark'
        ? 'linear-gradient(145deg, rgba(19, 26, 43, 0.8), rgba(15, 23, 42, 0.95))'
        : 'rgba(255, 255, 255, 0.8)',
    padding: '2.5rem 2rem',
    borderRadius: '16px',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.03)'}`,
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
    backdropFilter: 'blur(10px)',
    boxShadow: theme.palette.mode === 'dark'
        ? '0 8px 20px rgba(0, 0, 0, 0.25)'
        : '0 8px 20px rgba(0, 0, 0, 0.05)',
}));

const FeatureIcon = styled(Box)(({ theme }) => ({
    fontSize: '3rem',
    display: 'block',
    marginBottom: '1.5rem',
    lineHeight: 1,
    color: theme.palette.primary.main,
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.5rem',
    fontWeight: 700,
    color: theme.palette.text.primary,
    marginBottom: '1rem'
}));

const FeatureDescription = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.75)' : theme.palette.text.secondary,
    lineHeight: 1.8
}));

const ProcessTimeline = styled(Box)(({ theme }) => ({
    position: 'relative',
}));

const TimelineTrack = styled(Box)(({ theme }) => ({
    position: 'absolute',
    right: '24px',
    top: '10px',
    bottom: '10px',
    width: '2px',
    background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
}));

const ProcessStep = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2rem',
    position: 'relative',
    paddingRight: '70px'
}));

const StepNumber = styled(Box)(({ theme }) => ({
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: theme.palette.mode === 'dark'
        ? 'rgba(15, 23, 42, 0.8)'
        : theme.palette.background.paper,
    border: `2px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700,
    fontSize: '1.5rem',
    zIndex: 2,
    boxShadow: theme.palette.mode === 'dark'
        ? `0 0 15px rgba(${theme.palette.secondary.main}, 0.3)`
        : `0 0 15px rgba(${theme.palette.secondary.main}, 0.15)`,
}));

const StepText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    background: theme.palette.mode === 'dark'
        ? 'rgba(17, 25, 40, 0.7)'
        : theme.palette.background.paper,
    padding: '1.5rem 2rem',
    borderRadius: '12px',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.03)'}`,
    width: '100%',
    margin: 0,
    fontSize: '1.1rem',
    boxShadow: theme.palette.mode === 'dark'
        ? '0 4px 15px rgba(0, 0, 0, 0.2)'
        : '0 4px 15px rgba(0, 0, 0, 0.05)',
}));

const CtaText = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.85)' : theme.palette.text.secondary,
    maxWidth: '600px',
    margin: '0 auto 2.5rem auto',
    lineHeight: 1.8,
    fontSize: '1.1rem'
}));

const CtaButton = styled(Link)(({ theme }) => ({
    display: 'inline-block',
    background: theme.palette.mode === 'dark'
        ? `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`
        : `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    color: 'white',
    textDecoration: 'none',
    padding: '1rem 2.5rem',
    borderRadius: '8px',
    fontWeight: 700,
    fontSize: '1.1rem',
    boxShadow: theme.palette.mode === 'dark'
        ? '0 10px 25px rgba(0, 0, 0, 0.3), 0 0 15px rgba(59, 130, 246, 0.15)'
        : '0 10px 25px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: theme.palette.mode === 'dark'
            ? '0 15px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(59, 130, 246, 0.2)'
            : '0 15px 30px rgba(0, 0, 0, 0.15)',
    }
}));

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <motion.div variants={itemVariants} style={{ marginBottom: '5rem' }}>
        <SectionTitleSmall variant="h2">{title}</SectionTitleSmall>
        <Divider />
        {children}
    </motion.div>
);

const FeatureCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => {
    return (
        <motion.div variants={itemVariants}>
            <motion.div
                whileHover={{
                    y: -8,
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)'
                }}
            >
                <FeatureCardStyled>
                    <FeatureIcon>{icon}</FeatureIcon>
                    <FeatureTitle variant="h3">{title}</FeatureTitle>
                    <FeatureDescription variant="body1">{description}</FeatureDescription>
                </FeatureCardStyled>
            </motion.div>
        </motion.div>
    );
};

const ServicePage = () => {
    const { serviceId } = useParams();
    const service = services.find(s => s.id === serviceId);
    const theme = useTheme();

    if (!service) {
        return <Navigate to="/" replace />;
    }

    return (
        <ServiceContainer>
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

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Header */}
                    <motion.div variants={itemVariants}>
                        <ServiceHeader>
                            <IconContainer>{service.icon}</IconContainer>
                            <SectionTitle variant="h1">{service.title}</SectionTitle>
                            <ServiceDescription variant="body1">
                                {service.details}
                            </ServiceDescription>
                        </ServiceHeader>
                    </motion.div>

                    {/* Features Section */}
                    {service.features && (
                        <Section title="أبرز الميزات">
                            <FeaturesGrid>
                                {service.features.map((feature, index) => (
                                    <FeatureCard key={index} {...feature} />
                                ))}
                            </FeaturesGrid>
                        </Section>
                    )}

                    {/* Process Section */}
                    {service.process && (
                        <Section title="منهجية عملنا">
                            <ProcessTimeline>
                                <TimelineTrack />
                                {service.process.map((step, index) => (
                                    <motion.div key={index} variants={itemVariants}>
                                        <ProcessStep>
                                            <StepNumber>{index + 1}</StepNumber>
                                            <StepText variant="body1">{step}</StepText>
                                        </ProcessStep>
                                    </motion.div>
                                ))}
                            </ProcessTimeline>
                        </Section>
                    )}

                    {/* CTA Section */}
                    <Section title="عندك فكرة مشروع؟">
                        <motion.div variants={itemVariants} style={{ textAlign: 'center' }}>
                            <CtaText variant="body1">
                                مستنيين نعرف أكتر عن مشروعك. ابدأ معانا أول خطوة في تنفيذ فكرتك دلوقتي.
                            </CtaText>
                            <CtaButton to="/contact">
                                ابدأ مشروعك دلوقتي
                            </CtaButton>
                        </motion.div>
                    </Section>
                </motion.div>
            </Container>
        </ServiceContainer>
    );
};

export default ServicePage; 