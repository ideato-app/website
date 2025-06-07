import { motion } from 'framer-motion';

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

const TeamMemberCard = ({ name, role, imgSrc }: { name: string, role: string, imgSrc: string }) => (
    <motion.div
        variants={itemVariants}
        style={{
            background: 'var(--bg-secondary)',
            borderRadius: '16px',
            border: '1px solid var(--border-color)',
            textAlign: 'center',
            padding: '2rem',
            boxShadow: '0 4px 20px rgba(var(--shadow-color), 0.05)',
        }}
    >
        <img src={imgSrc} alt={name} style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            objectFit: 'cover',
            margin: '0 auto 1.5rem auto',
            border: '4px solid var(--accent-primary)',
        }} />
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{name}</h3>
        <p style={{ color: 'var(--accent-secondary)', fontWeight: '700' }}>{role}</p>
    </motion.div>
);

const AboutPage = () => {
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
                    <motion.h1 variants={itemVariants} className="section-title">عن Idea to App</motion.h1>
                    <motion.p variants={itemVariants} className="section-subtitle">
                        نحن فريق من المطورين والمصممين المبدعين الذين يجمعهم شغف واحد: تحويل الأفكار الرائعة إلى منتجات رقمية استثنائية.
                    </motion.p>

                    <motion.div variants={itemVariants} style={{
                        background: 'var(--bg-secondary)',
                        padding: '3rem',
                        borderRadius: '16px',
                        border: '1px solid var(--border-color)',
                        marginBottom: '4rem'
                    }}>
                        <h2 style={{
                            textAlign: 'center',
                            fontSize: '2rem',
                            fontWeight: '700',
                            color: 'var(--text-primary)',
                            marginBottom: '1rem'
                        }}>مهمتنا</h2>
                        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                            مهمتنا هي تمكين رواد الأعمال والشركات من خلال تزويدهم بالحلول التقنية المبتكرة التي يحتاجونها للنجاح في عالم اليوم الرقمي. نحن نؤمن بأن كل فكرة عظيمة تستحق أن تُبنى بأفضل طريقة ممكنة.
                        </p>
                    </motion.div>

                 
                </motion.div>
            </div>
        </div>
    );
};

export default AboutPage; 