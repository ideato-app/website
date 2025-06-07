import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import { motion } from 'framer-motion';

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

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <motion.div variants={itemVariants} style={{ marginBottom: '4rem' }}>
        <h2 className="section-title-small">{title}</h2>
        <div style={{
            height: '2px',
            width: '60px',
            background: 'var(--accent-primary)',
            margin: '0 auto 2rem auto',
        }}></div>
        {children}
    </motion.div>
);


const ServicePage = () => {
    const { serviceId } = useParams();
    // The user's router uses serviceId, but the links in services.ts use a path like "/services/web-development".
    // The `find` should be on the `id` property, which matches the `serviceId` from the URL.
    const service = services.find(s => s.id === serviceId);

    if (!service) {
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
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Header */}
                    <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span style={{ fontSize: '4rem', display: 'block', marginBottom: '1rem' }}>{service.icon}</span>
                        <h1 className="section-title" style={{ margin: 0 }}>{service.title}</h1>
                        <p style={{
                            fontSize: '1.2rem',
                            lineHeight: 1.8,
                            color: 'var(--text-secondary)',
                            maxWidth: '700px',
                            margin: '1rem auto 0 auto'
                        }}>
                            {service.details}
                        </p>
                    </motion.div>

                    {/* Features Section */}
                    {service.features && (
                        <Section title="أبرز الميزات">
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                gap: '1.5rem'
                            }}>
                                {service.features.map((feature, index) => (
                                    <motion.div key={index} variants={itemVariants} style={{
                                        background: 'var(--bg-secondary)',
                                        padding: '2rem',
                                        borderRadius: '12px',
                                        border: '1px solid var(--border-color)',
                                        textAlign: 'right'
                                    }}>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{feature.title}</h3>
                                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{feature.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </Section>
                    )}

                    {/* Process Section */}
                    {service.process && (
                        <Section title="منهجية عملنا">
                            <div style={{ position: 'relative' }}>
                                <div style={{
                                    position: 'absolute',
                                    right: '23px',
                                    top: '10px',
                                    bottom: '10px',
                                    width: '4px',
                                    background: 'var(--border-color)',
                                    borderRadius: '2px'
                                }}></div>
                                {service.process.map((step, index) => (
                                    <motion.div key={index} variants={itemVariants} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '1.5rem',
                                        position: 'relative',
                                        paddingRight: '60px'
                                    }}>
                                        <div style={{
                                            position: 'absolute',
                                            right: '0',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '50%',
                                            background: 'var(--bg-secondary)',
                                            border: '4px solid var(--accent-secondary)',
                                            color: 'var(--accent-secondary)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: '700',
                                            fontSize: '1.2rem',
                                            zIndex: 2,
                                        }}>
                                            {index + 1}
                                        </div>
                                        <p style={{
                                            color: 'var(--text-primary)',
                                            background: 'var(--bg-secondary)',
                                            padding: '1rem 1.5rem',
                                            borderRadius: '8px',
                                            border: '1px solid var(--border-color)',
                                            width: '100%',
                                            margin: 0
                                        }}>{step}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </Section>
                    )}

                    {/* Tech Stack Section */}
                    {service.techStack && (
                        <Section title="التقنيات التي نستخدمها">
                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                                {service.techStack.map((tech, index) => (
                                    <motion.div key={index} variants={itemVariants} style={{
                                        background: 'var(--bg-secondary)',
                                        padding: '0.75rem 1.5rem',
                                        borderRadius: '20px',
                                        border: '1px solid var(--border-color)',
                                        color: 'var(--text-secondary)',
                                        fontWeight: 600
                                    }}>
                                        {tech}
                                    </motion.div>
                                ))}
                            </div>
                        </Section>
                    )}

                    {/* CTA Section */}
                    <Section title="هل لديك فكرة مشروع؟">
                        <motion.div variants={itemVariants} style={{ textAlign: 'center' }}>
                            <p style={{
                                color: 'var(--text-secondary)',
                                maxWidth: '600px',
                                margin: '0 auto 2rem auto',
                                lineHeight: 1.8
                            }}>
                                نحن متحمسون لسماع المزيد عن مشروعك. تواصل معنا اليوم لبدء تحويل فكرتك إلى حقيقة.
                            </p>
                            <Link to="/contact" className="cta-button" style={{ textDecoration: 'none' }}>
                                ابدأ مشروعك الآن
                            </Link>
                        </motion.div>
                    </Section>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicePage; 