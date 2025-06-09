import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon, GitHubIcon } from './SocialIcons';
import './Footer.css';

const Footer = () => {
    const FooterColumn = ({ title, children }: { title: string, children: React.ReactNode }) => (
        <div className="footer-column">
            <h4>{title}</h4>
            {children}
        </div>
    );

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Column 1: Brand */}
                    <div className="footer-brand-column">
                        <Link to="/" className="footer-logo">
                            Idea<span className="footer-logo-accent">To</span>App
                        </Link>
                        <p className="footer-description">
                            بنحوّل أفكارك لواقع رقمي مبتكر. حلول برمجية وتصميمات عصرية تناسب احتياجاتك.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <FooterColumn title="روابط سريعة">
                        <Link to="/" className="footer-link">الرئيسية</Link><br />
                        <Link to="/about" className="footer-link">من نحن</Link><br />
                        <a href="/#services" className="footer-link">خدماتنا</a><br />
                        <Link to="/contact" className="footer-link">تواصل معنا</Link>
                    </FooterColumn>

                    {/* Column 3: Contact */}
                    <FooterColumn title="راسلنا">
                        <a href="mailto:contact@ideatoapp.com" className="footer-link">contact@ideatoapp.com</a><br />
                        <a href="https://wa.me/201104532940" target="_blank" rel="noopener noreferrer" className="footer-link">تواصل عبر WhatsApp</a>
                    </FooterColumn>

                    {/* Column 4: Social Media */}
                    <FooterColumn title="تابعنا">
                        <div className="footer-social-links">
                            <a href="https://www.facebook.com/ideato.app.official" aria-label="Facebook" className="footer-social-link facebook"><FacebookIcon /></a>
                            <a href="https://x.com/ideato_app" aria-label="Twitter" className="footer-social-link twitter"><TwitterIcon /></a>
                            <a href="https://www.instagram.com/ideato.app/" aria-label="Instagram" className="footer-social-link instagram"><InstagramIcon /></a>
                            <a href="https://www.linkedin.com/in/ideato-app" aria-label="LinkedIn" className="footer-social-link linkedin"><LinkedInIcon /></a>
                            <a href="https://github.com/ideato-app" aria-label="GitHub" className="footer-social-link github"><GitHubIcon /></a>
                        </div>
                    </FooterColumn>
                </div>

                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} Idea to App. جميع الحقوق محفوظة.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 