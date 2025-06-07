import { motion } from 'framer-motion';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon, GitHubIcon } from '../components/SocialIcons';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

const ContactPage = () => {

    const contactButtonStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        padding: '1.5rem 2rem',
        color: 'var(--text-primary)',
        textDecoration: 'none',
        fontSize: '1.2rem',
        fontWeight: 700,
        transition: 'all 0.3s ease',
    };

    const contactButtonHoverStyle: React.CSSProperties = {
        transform: 'translateY(-5px)',
        boxShadow: '0 10px 20px rgba(var(--shadow-color), 0.1)',
        borderColor: 'var(--accent-primary)',
        color: 'var(--accent-primary)',
    };

    const socialLinkStyle: React.CSSProperties = {
        color: 'var(--text-secondary)',
        transition: 'color 0.3s, transform 0.3s',
        display: 'inline-block'
    };

    const socialLinkHoverStyle = (accentColor: string): React.CSSProperties => ({
        color: `var(--${accentColor})`,
        transform: 'scale(1.2)'
    });


    return (
        <div style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
            <div className="aurora-background">
                <motion.div className="aurora-shape aurora-shape-1" />
                <motion.div className="aurora-shape aurora-shape-2" />
            </div>
            <div className="container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 variants={itemVariants} className="section-title">تواصل معنا</motion.h1>
                    <motion.p variants={itemVariants} className="section-subtitle">
                        نحن متحمسون لسماع أفكارك. اختر طريقة التواصل المفضلة لديك أدناه.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        style={{
                            background: 'var(--bg-secondary)',
                            padding: '3rem',
                            borderRadius: '16px',
                            border: '1px solid var(--border-color)',
                            textAlign: 'center'
                        }}
                    >
                        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '3rem' }}>التواصل المباشر</h2>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '2rem',
                            marginBottom: '4rem'
                        }}>
                            <motion.a
                                href="mailto:contact@ideatoapp.com"
                                style={contactButtonStyle}
                                whileHover="hover"
                                onMouseOver={e => Object.assign(e.currentTarget.style, contactButtonHoverStyle)}
                                onMouseOut={e => Object.assign(e.currentTarget.style, contactButtonStyle)}
                            >
                                <span style={{ fontSize: '1.5rem' }}>📧</span>
                                <span>راسلنا عبر البريد</span>
                            </motion.a>
                            <motion.a
                                href="https://wa.me/201104532940"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={contactButtonStyle}
                                onMouseOver={e => Object.assign(e.currentTarget.style, contactButtonHoverStyle)}
                                onMouseOut={e => Object.assign(e.currentTarget.style, contactButtonStyle)}
                            >
                                <span style={{ fontSize: '1.5rem' }}>💬</span>
                                <span>تواصل عبر WhatsApp</span>
                            </motion.a>
                        </div>

                        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '2rem' }}>تابعنا على الشبكات الاجتماعية</h2>
                        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="https://www.facebook.com/ideato.app.official" aria-label="Facebook" style={socialLinkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, socialLinkHoverStyle('accent-primary'))} onMouseOut={e => Object.assign(e.currentTarget.style, socialLinkStyle)}><FacebookIcon /></a>
                            <a href="https://x.com/ideato_app" aria-label="Twitter" style={socialLinkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, socialLinkHoverStyle('accent-primary'))} onMouseOut={e => Object.assign(e.currentTarget.style, socialLinkStyle)}><TwitterIcon /></a>
                            <a href="https://www.instagram.com/ideato.app/" aria-label="Instagram" style={socialLinkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, socialLinkHoverStyle('accent-secondary'))} onMouseOut={e => Object.assign(e.currentTarget.style, socialLinkStyle)}><InstagramIcon /></a>
                            <a href="https://www.linkedin.com/in/ideato-app" aria-label="LinkedIn" style={socialLinkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, socialLinkHoverStyle('accent-primary'))} onMouseOut={e => Object.assign(e.currentTarget.style, socialLinkStyle)}><LinkedInIcon /></a>
                            <a href="https://github.com/ideato-app" aria-label="GitHub" style={socialLinkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, socialLinkHoverStyle('text-primary'))} onMouseOut={e => Object.assign(e.currentTarget.style, socialLinkStyle)}><GitHubIcon /></a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage; 