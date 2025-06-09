import { Paper, Typography, Box, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

export interface PricingPlan {
    id: string;
    title: string;
    price: string;
    priceDetails: string;
    features: string[];
    isRecommended?: boolean;
    cta?: string;
}

interface PricingCardProps {
    plan: PricingPlan;
}

const StyledPaper = styled(motion(Paper), {
    shouldForwardProp: (prop) => prop !== 'isRecommended',
})<{ isRecommended?: boolean }>(({ theme, isRecommended }) => ({
    padding: theme.spacing(5, 3),
    textAlign: 'center',
    border: isRecommended
        ? `2px solid ${theme.palette.primary.main}`
        : theme.palette.mode === 'dark'
            ? `1px solid rgba(255, 255, 255, 0.1)`
            : `1px solid ${theme.palette.divider}`,
    borderRadius: '16px',
    position: 'relative',
    overflow: 'visible',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.mode === 'dark'
        ? 'rgba(22, 28, 36, 0.8)'
        : theme.palette.background.paper,
    backdropFilter: 'blur(8px)',
    zIndex: isRecommended ? 1 : 0,
    boxShadow: isRecommended
        ? theme.palette.mode === 'dark'
            ? '0 10px 30px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.07)'
            : '0 10px 30px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.9)'
        : theme.palette.mode === 'dark'
            ? '0 4px 20px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.05)'
            : '0 4px 20px rgba(0, 0, 0, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
}));

const RecommendationChip = styled(motion.div)(({ theme }) => ({
    position: 'absolute',
    top: '-16px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(0.5, 2),
    borderRadius: '12px',
    fontWeight: 'bold',
    fontSize: '0.8rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    zIndex: 2,
}));

const PriceHighlight = styled('span')(({ theme }) => ({
    background: theme.palette.mode === 'dark'
        ? `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
        : `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
}));

const FeatureItem = styled(ListItem)(({ theme }) => ({
    padding: theme.spacing(0.5, 0),
    marginBottom: theme.spacing(1),
    '&:last-child': {
        marginBottom: 0,
    },
}));

const PricingCard = ({ plan }: PricingCardProps) => {
    return (
        <StyledPaper
            elevation={0}
            isRecommended={plan.isRecommended}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 25
            }}
            whileHover={{
                y: -5,
                transition: { duration: 0.2 }
            }}
        >
            {plan.isRecommended && (
                <RecommendationChip
                    initial={{ y: -5, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    الأكثر طلباً
                </RecommendationChip>
            )}

            <Box>
                <Typography variant="h5" component="h3" gutterBottom sx={{
                    fontWeight: 800,
                    mb: 2,
                    color: plan.isRecommended ? 'primary.main' : 'text.primary'
                }}>
                    {plan.title}
                </Typography>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'baseline',
                    my: 3,
                    position: 'relative',
                    '&::after': plan.isRecommended ? {
                        content: '""',
                        position: 'absolute',
                        bottom: '-12px',
                        left: '30%',
                        right: '30%',
                        height: '2px',
                        background: (theme) => `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
                    } : {}
                }}>
                    <Typography variant="h3" component="p" sx={{ fontWeight: 800 }}>
                        <PriceHighlight>{plan.price}</PriceHighlight>
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ ml: 1 }}>
                        / {plan.priceDetails}
                    </Typography>
                </Box>

                <List sx={{ my: 4 }}>
                    {plan.features.map((feature, index) => (
                        <FeatureItem key={index} disableGutters>
                            <ListItemIcon sx={{
                                minWidth: 'auto',
                                mr: 1.5,
                                color: 'primary.main',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <CheckCircleIcon
                                    fontSize="small"
                                    sx={{
                                        filter: plan.isRecommended ? 'drop-shadow(0 0 3px rgba(0, 150, 255, 0.3))' : 'none'
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={feature}
                                sx={{
                                    textAlign: 'right',
                                    '& .MuiTypography-root': {
                                        fontSize: '0.95rem',
                                        lineHeight: 1.5
                                    }
                                }}
                            />
                        </FeatureItem>
                    ))}
                </List>
            </Box>

            <Box>
                <Button
                    component={motion.button}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    variant={plan.isRecommended ? 'contained' : 'outlined'}
                    color="primary"
                    fullWidth
                    size="large"
                    sx={{
                        borderRadius: '10px',
                        fontWeight: 'bold',
                        py: 1.5,
                        background: plan.isRecommended
                            ? (theme) => `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                            : undefined,
                        boxShadow: plan.isRecommended
                            ? (theme) => theme.palette.mode === 'dark'
                                ? '0 4px 14px rgba(0, 0, 0, 0.5)'
                                : '0 4px 14px rgba(0, 0, 0, 0.15)'
                            : 'none',
                        '&:hover': {
                            background: plan.isRecommended
                                ? (theme) => `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`
                                : undefined,
                        }
                    }}
                >
                    {plan.cta || 'اختر الخطة'}
                </Button>
            </Box>
        </StyledPaper>
    );
};

export default PricingCard; 