import { motion } from 'framer-motion';
import { services } from '../data/services';
import ServiceCard from './ServiceCard';

const ServicesGrid = () => {
    return (
        <section id="services" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="container">
                <h2 className="section-title">خدماتنا</h2>
                <p className="section-subtitle">
                    نقدم مجموعة متكاملة من الخدمات التقنية لتحويل أفكارك إلى واقع ملموس، بأعلى معايير الجودة والابتكار.
                </p>

                <motion.div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                    }}
                >
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            id={service.id}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            index={index}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesGrid; 