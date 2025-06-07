import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon, GitHubIcon } from './SocialIcons';

const Footer = () => {
    const footerStyle = {
        backgroundColor: 'var(--bg-secondary)',
        padding: '5rem 0 2rem 0',
        borderTop: '1px solid var(--border-color)',
        color: 'var(--text-secondary)',
    };

    const linkStyle = {
        color: 'var(--text-secondary)',
        textDecoration: 'none',
        marginBottom: '0.75rem',
        display: 'inline-block',
        transition: 'color 0.2s ease, transform 0.2s ease',
    };

    const linkHoverStyle = {
        color: 'var(--accent-primary)',
        transform: 'translateX(-4px)'
    };

    const socialLinkStyle = {
        color: 'var(--text-secondary)',
        transition: 'color 0.3s, transform 0.3s',
    };

    const socialLinkHoverStyle = (accentColor: string) => ({
        color: `var(--${accentColor})`,
        transform: 'scale(1.2)'
    });

    const FooterColumn = ({ title, children }: { title: string, children: React.ReactNode }) => (
        <div>
            <h4 style={{
                color: 'var(--text-primary)',
                fontWeight: 700,
                fontSize: '1.2rem',
                marginBottom: '1.5rem',
                position: 'relative',
                paddingBottom: '0.5rem',
            }}>
                {title}
                <span style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    height: '2px',
                    width: '30px',
                    background: 'var(--accent-primary)'
                }}></span>
            </h4>
            {children}
        </div>
    );

    return (
        <footer style={footerStyle}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '3rem',
                    marginBottom: '4rem',
                    textAlign: 'right'
                }}>
                    {/* Column 1: Brand */}
                    <div style={{ marginRight: 'auto' }}>
                        <Link to="/" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontSize: '1.8rem', fontWeight: '900', display: 'block', marginBottom: '1rem' }}>
                            Idea<span style={{ color: 'var(--accent-primary)' }}>To</span>App
                        </Link>
                        <p style={{ lineHeight: 1.8 }}>
                            نحول أفكارك إلى واقع رقمي. حلول برمجية مبتكرة وتصاميم عصرية.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <FooterColumn title="روابط سريعة">
                        <Link to="/" style={linkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, linkHoverStyle)} onMouseOut={e => Object.assign(e.currentTarget.style, linkStyle)}>الرئيسية</Link><br />
                        <Link to="/about" style={linkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, linkHoverStyle)} onMouseOut={e => Object.assign(e.currentTarget.style, linkStyle)}>من نحن</Link><br />
                        <a href="/#services" style={linkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, linkHoverStyle)} onMouseOut={e => Object.assign(e.currentTarget.style, linkStyle)}>خدماتنا</a><br />
                        <Link to="/contact" style={linkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, linkHoverStyle)} onMouseOut={e => Object.assign(e.currentTarget.style, linkStyle)}>تواصل معنا</Link>
                    </FooterColumn>

                    {/* Column 3: Contact */}
                    <FooterColumn title="راسلنا">
                        <a href="mailto:contact@ideatoapp.com" style={linkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, linkHoverStyle)} onMouseOut={e => Object.assign(e.currentTarget.style, linkStyle)}>contact@ideatoapp.com</a><br />
                        <a href="https://wa.me/201104532940" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, linkHoverStyle)} onMouseOut={e => Object.assign(e.currentTarget.style, linkStyle)}>تواصل عبر WhatsApp</a>
                    </FooterColumn>

                    {/* Column 4: Social Media */}
                    <FooterColumn title="تابعنا">
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'flex-end' }}>
                            <a href="https://www.facebook.com/ideato.app.official" aria-label="Facebook" style={socialLinkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, socialLinkHoverStyle('accent-primary'))} onMouseOut={e => Object.assign(e.currentTarget.style, socialLinkStyle)}><FacebookIcon /></a>
                            <a href="https://x.com/ideato_app" aria-label="Twitter" style={socialLinkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, socialLinkHoverStyle('accent-primary'))} onMouseOut={e => Object.assign(e.currentTarget.style, socialLinkStyle)}><TwitterIcon /></a>
                            <a href="https://www.instagram.com/ideato.app/" aria-label="Instagram" style={socialLinkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, socialLinkHoverStyle('accent-secondary'))} onMouseOut={e => Object.assign(e.currentTarget.style, socialLinkStyle)}><InstagramIcon /></a>
                            <a href="https://www.linkedin.com/in/ideato-app" aria-label="LinkedIn" style={socialLinkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, socialLinkHoverStyle('accent-primary'))} onMouseOut={e => Object.assign(e.currentTarget.style, socialLinkStyle)}><LinkedInIcon /></a>
                            <a href="https://github.com/ideato-app" aria-label="GitHub" style={socialLinkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, socialLinkHoverStyle('text-primary'))} onMouseOut={e => Object.assign(e.currentTarget.style, socialLinkStyle)}><GitHubIcon /></a>
                        </div>
                    </FooterColumn>
                </div>

                <div style={{
                    paddingTop: '2rem',
                    borderTop: '1px solid var(--border-color)',
                    textAlign: 'center',
                    fontSize: '0.9rem',
                }}>
                    <p>
                        © {new Date().getFullYear()} Idea to App. جميع الحقوق محفوظة.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 