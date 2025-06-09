import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface Service {
    id: string;
    title: string;
    icon: string;
    description: string;
}

interface ServiceCardProps {
    service: Service;
    isHovered: boolean;
    onHover: (isHovered: boolean) => void;
}

const StyledCard = styled(Paper)(({ theme }) => ({
    borderRadius: 16,
    padding: theme.spacing(4),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease-in-out',
    background: theme.palette.mode === 'dark'
        ? 'linear-gradient(145deg, rgba(22, 27, 34, 0.9), rgba(17, 24, 39, 0.8))'
        : 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(249, 250, 251, 0.95))',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)'}`,
    backdropFilter: 'blur(10px)',
    '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: theme.palette.mode === 'dark'
            ? '0 20px 40px rgba(0, 0, 0, 0.3)'
            : '0 20px 40px rgba(0, 0, 0, 0.1)',
    }
}));

const IconContainer = styled(Box)(({ theme }) => ({
    fontSize: '3rem',
    marginBottom: theme.spacing(3),
    background: theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, 0.05)'
        : 'rgba(0, 0, 0, 0.03)',
    width: '70px',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20px',
    position: 'relative',
    overflow: 'hidden',
}));

const BackgroundGradient = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '5px',
    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    zIndex: 1,
}));

const LinkButton = styled(Link)(({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginTop: theme.spacing(2),
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '0.95rem',
    transition: 'all 0.3s ease',
    '&:hover': {
        gap: '0.7rem'
    }
}));

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const ServiceCard = ({ service, isHovered, onHover }: ServiceCardProps) => {
    const { id, title, icon, description } = service;
    const theme = useTheme();

    return (
        <motion.div
            variants={itemVariants}
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
        >
            <StyledCard elevation={isHovered ? 4 : 1}>
                <BackgroundGradient />
                <Box>
                    <IconContainer>
                        <motion.span
                            animate={{
                                scale: isHovered ? 1.2 : 1,
                                rotate: isHovered ? 10 : 0
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {icon}
                        </motion.span>
                        <Box sx={{
                            position: 'absolute',
                            inset: 0,
                            opacity: isHovered ? 0.2 : 0,
                            transition: 'opacity 0.3s ease',
                            background: `radial-gradient(circle, ${theme.palette.primary.main}50 0%, transparent 70%)`,
                        }} />
                    </IconContainer>
                    <Typography variant="h6" component="h3" sx={{ mb: 1.5, fontWeight: 'bold' }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontSize: '0.95rem' }}>
                        {description}
                    </Typography>
                </Box>

                <LinkButton to={`/services/${id}`}>
                    <span>عرض التفاصيل</span>
                    <motion.span
                        animate={{ x: isHovered ? 5 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ArrowForwardIcon fontSize="small" />
                    </motion.span>
                </LinkButton>
            </StyledCard>
        </motion.div>
    );
};

export default ServiceCard;