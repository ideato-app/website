import { useState } from 'react';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Box, Typography, Container, useTheme } from '@mui/material';
import { services } from '../data/services';
import ServiceCard from './ServiceCard';

const SectionTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 800,
    marginBottom: theme.spacing(1),
    fontSize: '2.5rem',
    textAlign: 'center',
    background: theme.palette.mode === 'dark'
        ? `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`
        : `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
    position: 'relative',
    display: 'inline-block',
}));

const SectionDescription = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    maxWidth: '800px',
    margin: '0 auto 3rem auto',
    textAlign: 'center',
    fontSize: '1.2rem',
    lineHeight: 1.6,
}));

const ServicesContainer = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr',
        gap: theme.spacing(3),
    },
}));

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3
        }
    }
};

const ServicesGrid = () => {
    const theme = useTheme();
    const [hoveredService, setHoveredService] = useState<string | null>(null);

    return (
        <Box component="section" id="services" sx={{
            py: { xs: 8, md: 12 },
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(16, 23, 42, 0.7)' : 'rgba(248, 250, 252, 0.8)',
            position: 'relative',
            overflow: 'hidden',
        }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 6, position: 'relative', zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <SectionTitle variant="h2">خدماتنا</SectionTitle>
                        <SectionDescription variant="subtitle1">
                            نقدم مجموعة متكاملة من الخدمات لتحويل أفكارك إلى حلول رقمية متميزة تلبي احتياجات عملك
                        </SectionDescription>
                    </motion.div>
                </Box>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <ServicesContainer>
                        {services.map((service) => (
                            <ServiceCard
                                key={service.id}
                                service={service}
                                isHovered={hoveredService === service.id}
                                onHover={(isHovered) => setHoveredService(isHovered ? service.id : null)}
                            />
                        ))}
                    </ServicesContainer>
                </motion.div>
            </Container>

            {/* Background elements */}
            <Box sx={{
                position: 'absolute',
                top: '10%',
                right: '5%',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: theme.palette.mode === 'dark'
                    ? `radial-gradient(circle, ${theme.palette.primary.dark}30 0%, transparent 70%)`
                    : `radial-gradient(circle, ${theme.palette.primary.light}20 0%, transparent 70%)`,
                filter: 'blur(60px)',
                zIndex: 0,
            }} />

            <Box sx={{
                position: 'absolute',
                bottom: '15%',
                left: '5%',
                width: '250px',
                height: '250px',
                borderRadius: '50%',
                background: theme.palette.mode === 'dark'
                    ? `radial-gradient(circle, ${theme.palette.secondary.dark}30 0%, transparent 70%)`
                    : `radial-gradient(circle, ${theme.palette.secondary.light}20 0%, transparent 70%)`,
                filter: 'blur(60px)',
                zIndex: 0,
            }} />
        </Box>
    );
};

export default ServicesGrid; 