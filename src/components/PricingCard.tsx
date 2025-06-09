import { Paper, Typography, Box, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from '@mui/material/styles';

export interface PricingPlan {
    id: string;
    title: string;
    price: string;
    priceDetails: string;
    features: string[];
    isRecommended?: boolean;
}

interface PricingCardProps {
    plan: PricingPlan;
}

const StyledPaper = styled(Paper, {
    shouldForwardProp: (prop) => prop !== 'isRecommended',
})<{ isRecommended?: boolean }>(({ theme, isRecommended }) => ({
    padding: theme.spacing(5, 3),
    textAlign: 'center',
    border: isRecommended ? `2px solid ${theme.palette.primary.main}` : `1px solid ${theme.palette.divider}`,
    borderRadius: '16px',
    position: 'relative',
    transform: isRecommended ? 'scale(1.05)' : 'scale(1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    zIndex: isRecommended ? 1 : 0,
    '&:hover': {
        transform: isRecommended ? 'scale(1.08)' : 'scale(1.03)',
        boxShadow: `0px 20px 40px -10px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.2)'}`,
    },
}));

const RecommendationChip = styled(Box)(({ theme }) => ({
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
}));

const PricingCard = ({ plan }: PricingCardProps) => {
    return (
        <StyledPaper elevation={0} isRecommended={plan.isRecommended}>
            {plan.isRecommended && <RecommendationChip>الأكثر طلباً</RecommendationChip>}
            <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                {plan.title}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', my: 2 }}>
                <Typography variant="h3" component="p" sx={{ fontWeight: 'bold' }}>
                    {plan.price}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ ml: 1 }}>
                    / {plan.priceDetails}
                </Typography>
            </Box>
            <List sx={{ my: 3 }}>
                {plan.features.map((feature, index) => (
                    <ListItem key={index} disableGutters>
                        <ListItemIcon sx={{ minWidth: 'auto', mr: 1.5, color: 'primary.main' }}>
                            <CheckCircleIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={feature} sx={{ textAlign: 'right' }} />
                    </ListItem>
                ))}
            </List>
            <Button
                variant={plan.isRecommended ? 'contained' : 'outlined'}
                color="primary"
                fullWidth
                size="large"
                sx={{ borderRadius: '8px', fontWeight: 'bold' }}
            >
                اختر الخطة
            </Button>
        </StyledPaper>
    );
};

export default PricingCard; 