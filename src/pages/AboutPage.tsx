import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import { useEffect } from 'react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
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

const TeamMemberCard = ({ name, role, imgSrc }: { name: string, role: string, imgSrc: string }) => {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const isSmallMobile = useMediaQuery('(max-width: 480px)');

    return (
        <motion.div
            variants={itemVariants}
            className="team-member-card"
            style={{
                padding: isSmallMobile ? '1.25rem' : isMobile ? '1.5rem' : '2rem',
            }}
        >
            <div className="team-member-image-container">
                <img
                    src={imgSrc}
                    alt={name}
                    className="team-member-image"
                    style={{
                        width: isSmallMobile ? '80px' : isMobile ? '90px' : '120px',
                        height: isSmallMobile ? '80px' : isMobile ? '90px' : '120px',
                    }}
                />
            </div>
            <h3 className={`team-member-name ${isSmallMobile ? 'xs-text' : ''}`}>
                {name}
            </h3>
            <p className={`team-member-role ${isSmallMobile ? 'xs-text' : ''}`}>
                {role}
            </p>
        </motion.div>
    );
};

const AboutPage = () => {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const isSmallMobile = useMediaQuery('(max-width: 480px)');

    // Add CSS classes to the document body
    useEffect(() => {
        if (isSmallMobile) {
            document.body.classList.add('xs-viewport');
        } else if (isMobile) {
            document.body.classList.add('sm-viewport');
            document.body.classList.remove('xs-viewport');
        } else {
            document.body.classList.remove('xs-viewport');
            document.body.classList.remove('sm-viewport');
        }

        return () => {
            document.body.classList.remove('xs-viewport');
            document.body.classList.remove('sm-viewport');
        };
    }, [isMobile, isSmallMobile]);

    return (
        <div className="page-container">
            <div className="aurora-background">
                <motion.div className="aurora-shape aurora-shape-1" />
                <motion.div className="aurora-shape aurora-shape-2" />
            </div>
            <div className="container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="about-content"
                >
                    <motion.h1 variants={itemVariants} className="section-title">عن Idea to App</motion.h1>
                    <motion.p variants={itemVariants} className="section-subtitle responsive-text">
                        نحن فريق من المطورين والمصممين المبدعين الذين يجمعهم شغف واحد: تحويل الأفكار الرائعة إلى منتجات رقمية استثنائية.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className={`content-box mission-box ${isSmallMobile ? 'xs-padding' : isMobile ? 'sm-padding' : ''}`}
                    >
                        <h2 className={`content-box-title ${isSmallMobile ? 'xs-title' : ''}`}>مهمتنا</h2>
                        <p className="mission-text responsive-text">
                            مهمتنا هي تمكين رواد الأعمال والشركات من خلال تقديم حلول تقنية متطورة ومبتكرة تساعدهم على التميز والنجاح في عالم رقمي متغير باستمرار. نحن نؤمن أن كل فكرة قوية تستحق التنفيذ بأعلى معايير الجودة والاحترافية.
                        </p>
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className="section-title team-section-title"
                    >
                        فريقنا
                    </motion.h2>
                    <div className={`team-grid ${isMobile ? 'mobile-team-grid' : ''}`}>
                        <TeamMemberCard name="محمد عماد" role="مهندس برمجيات و خبير ذكاء اصطناعي" imgSrc="src/assets/profile.png" />
                        <TeamMemberCard name="معاذ احمد" role=" مهندس برمجيات و خبير امن سيبراني" imgSrc="src/assets/profile.png" />
                        <TeamMemberCard name="محمد عبدالرحيم" role="مهندس برمجيات و متخصص SEO" imgSrc="src/assets/profile.png" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutPage; 