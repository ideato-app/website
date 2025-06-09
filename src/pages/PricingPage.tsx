import { useState } from 'react';
import { Container, Typography, Box, Tabs, Tab } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { servicePricingData } from '../data/servicePricingData';
import PricingCard from '../components/PricingCard';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

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
                <Box sx={{ pt: 5 }}>
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

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ py: 12, backgroundColor: 'var(--bg-alt-color)' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'text.primary', mb: 4 }}>
                    خطط أسعارنا
                </Typography>
                <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: '700px', mx: 'auto' }}>
                    لكل خدمة نقدمها، خطط مصممة خصيصاً لتلبية احتياجاتك المتنوعة، من المشاريع الناشئة إلى الشركات الكبرى.
                </Typography>

                <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="Service pricing tabs"
                        variant="scrollable"
                        scrollButtons="auto"
                        allowScrollButtonsMobile
                        sx={{
                            '& .MuiTabs-indicator': {
                                backgroundColor: 'primary.main',
                                height: 3,
                            },
                            '& .MuiTab-root': {
                                fontWeight: 'bold',
                                fontSize: '1rem',
                            },
                        }}
                    >
                        {servicePricingData.map((service, index) => (
                            <Tab key={service.serviceId} label={`${service.serviceIcon} ${service.serviceTitle}`} id={`service-tab-${index}`} />
                        ))}
                    </Tabs>
                </Box>

                <AnimatePresence mode="wait">
                    {servicePricingData.map((service, index) => (
                        <TabPanel key={service.serviceId} value={value} index={index}>
                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: {
                                        xs: '1fr',
                                        md: 'repeat(3, 1fr)',
                                    },
                                    gap: 4,
                                    alignItems: 'stretch',
                                }}
                            >
                                {service.plans.map((plan) => (
                                    <PricingCard key={plan.id} plan={plan} />
                                ))}
                            </Box>
                        </TabPanel>
                    ))}
                </AnimatePresence>
            </Container>
        </Box>
    );
};

export default PricingPage; 