import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import { techLogos } from '../data/techLogos';
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
    <motion.div variants={itemVariants} style={{ marginBottom: '5rem' }}>
        <h2 className="section-title-small">{title}</h2>
        <div style={{
            height: '3px',
            width: '80px',
            background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
            borderRadius: '2px',
            margin: '0 auto 2.5rem auto',
        }}></div>
        {children}
    </motion.div>
);

const FeatureCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => {
    return (
        <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, boxShadow: '0 10px 30px rgba(var(--shadow-color), 0.1)' }}
            style={{
                background: 'var(--bg-secondary)',
                padding: '2.5rem 2rem',
                borderRadius: '16px',
                border: '1px solid var(--border-color)',
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
            }}
        >
            <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1.5rem', lineHeight: 1 }}>{icon}</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>{title}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{description}</p>
        </motion.div>
    );
};


const ServicePage = () => {
    const { serviceId } = useParams();
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
                    <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <span style={{
                            fontSize: '4rem',
                            display: 'inline-block',
                            marginBottom: '1.5rem',
                            background: 'linear-gradient(45deg, var(--accent-primary), var(--accent-secondary))',
                            padding: '1rem',
                            borderRadius: '20px',
                            lineHeight: 1,
                        }}>{service.icon}</span>
                        <h1 className="section-title" style={{ margin: 0 }}>{service.title}</h1>
                        <p style={{
                            fontSize: '1.2rem',
                            lineHeight: 1.8,
                            color: 'var(--text-secondary)',
                            maxWidth: '750px',
                            margin: '1.5rem auto 0 auto'
                        }}>
                            {service.details}
                        </p>
                    </motion.div>

                    {/* Features Section */}
                    {service.features && (
                        <Section title="أبرز الميزات">
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: '2rem'
                            }}>
                                {service.features.map((feature, index) => (
                                    <FeatureCard key={index} {...feature} />
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
                                    right: '24px',
                                    top: '10px',
                                    bottom: '10px',
                                    width: '2px',
                                    background: 'var(--border-color)',
                                }}></div>
                                {service.process.map((step, index) => (
                                    <motion.div key={index} variants={itemVariants} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '2rem',
                                        position: 'relative',
                                        paddingRight: '70px'
                                    }}>
                                        <div style={{
                                            position: 'absolute',
                                            right: 0,
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '50%',
                                            background: 'var(--bg-secondary)',
                                            border: '2px solid var(--accent-secondary)',
                                            color: 'var(--accent-secondary)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 700,
                                            fontSize: '1.5rem',
                                            zIndex: 2,
                                            boxShadow: '0 0 15px rgba(var(--accent-secondary-rgb), 0.3)',
                                        }}>
                                            {index + 1}
                                        </div>
                                        <p style={{
                                            color: 'var(--text-primary)',
                                            background: 'var(--bg-tertiary)',
                                            padding: '1.5rem 2rem',
                                            borderRadius: '12px',
                                            border: '1px solid var(--border-color)',
                                            width: '100%',
                                            margin: 0,
                                            fontSize: '1.1rem',
                                        }}>{step}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </Section>
                    )}

                    {/* Tech Stack Section */}
                    {service.techStack && (
                        <Section title="التقنيات التي نستخدمها">
                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', alignItems: 'center' }}>
                                {service.techStack.map((tech, index) => {
                                    const logo = techLogos[tech] || '⚙️';
                                    const isUrl = logo.startsWith('http');

                                    return (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            title={tech}
                                            style={{
                                                background: 'var(--bg-secondary)',
                                                borderRadius: '12px',
                                                padding: '1rem',
                                                border: '1px solid var(--border-color)',
                                                width: '80px',
                                                height: '80px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                            {isUrl ? (
                                                <img src={logo} alt={tech} style={{
                                                    width: '40px',
                                                    height: '40px',
                                                    objectFit: 'contain',
                                                    filter: tech === 'Next.js' && 'var(--theme) === "dark"' ? 'invert(1)' : 'none',
                                                }} />
                                            ) : (
                                                <span style={{ fontSize: '40px' }}>{logo}</span>
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </Section>
                    )}

                    {/* CTA Section */}
                    <Section title="هل لديك فكرة مشروع؟">
                        <motion.div variants={itemVariants} style={{ textAlign: 'center' }}>
                            <p style={{
                                color: 'var(--text-secondary)',
                                maxWidth: '600px',
                                margin: '0 auto 2.5rem auto',
                                lineHeight: 1.8,
                                fontSize: '1.1rem'
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