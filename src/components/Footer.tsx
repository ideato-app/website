import { motion } from 'framer-motion';

const Footer = () => {
    const footerStyle = {
        backgroundColor: 'var(--bg-secondary)',
        padding: '4rem 0 2rem 0',
        borderTop: '1px solid var(--border-color)',
    };

    const linkStyle = {
        color: 'var(--text-secondary)',
        textDecoration: 'none',
        transition: 'color 0.2s ease',
    };

    return (
        <footer id="contact" style={footerStyle}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <h3 style={{
                        fontSize: '2rem',
                        fontWeight: 900,
                        background: 'linear-gradient(45deg, var(--accent-primary), var(--accent-secondary))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '1rem',
                    }}>
                        هل لديك فكرة مشروع؟
                    </h3>
                    <p style={{
                        color: 'var(--text-secondary)',
                        marginBottom: '2rem',
                        maxWidth: '500px',
                        margin: '0 auto 2rem auto',
                        lineHeight: 1.7
                    }}>
                        نحن هنا لمساعدتك في تحويلها إلى حقيقة. تواصل معنا اليوم لنبدأ.
                    </p>
                    <a href="mailto:info@ideato.app" style={{
                        display: 'inline-block',
                        background: 'var(--accent-primary)',
                        color: '#ffffff',
                        padding: '0.8rem 2rem',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        fontWeight: 700,
                        transition: 'transform 0.3s ease, background 0.3s ease',
                    }}
                        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        info@ideato.app
                    </a>
                </motion.div>

                <div style={{
                    marginTop: '4rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid var(--border-color)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                }}>
                    <p>
                        © {new Date().getFullYear()} Idea to App. جميع الحقوق محفوظة.
                    </p>
                    <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                        <a href="#" style={linkStyle} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>سياسة الخصوصية</a>
                        <a href="#" style={linkStyle} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>شروط الخدمة</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 