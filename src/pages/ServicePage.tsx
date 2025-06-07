import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import { motion } from 'framer-motion';

const ServicePage = () => {
    const { serviceId } = useParams();
    const service = services.find(s => s.id === serviceId);

    if (!service) {
        // Or return a 404 component
        return <Navigate to="/" replace />;
    }

    return (
        <section>
            <div className="aurora-background">
                <motion.div className="aurora-shape aurora-shape-1" />
                <motion.div className="aurora-shape aurora-shape-2" />
            </div>
            <div className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                        <span style={{ fontSize: '3rem' }}>{service.icon}</span>
                        <h1 className="section-title" style={{ textAlign: 'right', margin: 0 }}>{service.title}</h1>
                    </div>
                    <p style={{
                        fontSize: '1.2rem',
                        lineHeight: 1.8,
                        color: 'var(--text-secondary)',
                        marginBottom: '3rem'
                    }}>
                        {service.details}
                    </p>
                    <Link to="/" style={{
                        display: 'inline-block',
                        color: 'var(--accent-primary)',
                        fontWeight: 700,
                        textDecoration: 'none',
                    }}>
                        ← العودة إلى الرئيسية
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicePage; 