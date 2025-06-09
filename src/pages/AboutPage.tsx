import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import { useEffect } from 'react';
import {
    Box,
    Typography,
    Container,
    Grid,
    Paper,
    useTheme,
    Divider,
    IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import TimelineIcon from '@mui/icons-material/Timeline';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useThemeContext } from '../components/ThemeProvider';

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

const floatVariants = {
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut"
        }
    }
};

const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
        opacity: 1,
        transition: {
            delay: 0.3 + i * 0.1,
            duration: 0.5
        }
    })
};

const PageContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    minHeight: '100vh',
    padding: theme.spacing(8, 0, 6),
    overflow: 'hidden',
    backgroundColor: theme.palette.mode === 'dark'
        ? 'rgba(10, 15, 25, 0.97)'
        : 'rgba(255, 255, 255, 0.97)',
}));

const AuroraBackground = styled(Box)(() => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    zIndex: 0,
}));

const AuroraShape = styled(motion.div)(({ theme }) => ({
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(100px)',
    opacity: theme.palette.mode === 'dark' ? 0.15 : 0.5,
    background: theme.palette.mode === 'dark'
        ? `radial-gradient(circle, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`
        : `radial-gradient(circle, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`,
    '&.aurora-shape-1': {
        width: '40%',
        height: '60%',
        top: '-10%',
        right: '-5%',
    },
    '&.aurora-shape-2': {
        width: '40%',
        height: '60%',
        bottom: '-10%',
        left: '-5%',
        background: theme.palette.mode === 'dark'
            ? `radial-gradient(circle, ${theme.palette.secondary.dark} 0%, ${theme.palette.primary.dark} 100%)`
            : `radial-gradient(circle, ${theme.palette.secondary.light} 0%, ${theme.palette.primary.light} 100%)`,
    },
    '&.aurora-shape-3': {
        width: '30%',
        height: '40%',
        top: '40%',
        left: '30%',
        background: theme.palette.mode === 'dark'
            ? `radial-gradient(circle, ${theme.palette.primary.dark}80 0%, transparent 70%)`
            : `radial-gradient(circle, ${theme.palette.primary.light}80 0%, transparent 70%)`,
    },
}));

const ContentBox = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    marginBottom: theme.spacing(5),
    borderRadius: 16,
    boxShadow: theme.palette.mode === 'dark'
        ? '0 10px 30px rgba(0, 0, 0, 0.3)'
        : '0 10px 30px rgba(0, 0, 0, 0.05)',
    position: 'relative',
    zIndex: 1,
    backgroundColor: theme.palette.mode === 'dark'
        ? 'rgba(17, 25, 40, 0.8)'
        : 'rgba(255, 255, 255, 0.8)',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.03)'}`,
    backdropFilter: 'blur(10px)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: theme.palette.mode === 'dark'
            ? '0 15px 35px rgba(0, 0, 0, 0.35)'
            : '0 15px 35px rgba(0, 0, 0, 0.1)',
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: theme.palette.mode === 'dark'
            ? `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`
            : `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        zIndex: 2,
    },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 800,
    marginBottom: theme.spacing(3),
    textAlign: 'center',
    position: 'relative',
    display: 'inline-block',
    background: theme.palette.mode === 'dark'
        ? `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
        : `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    padding: theme.spacing(0, 2),
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: -8,
        left: '25%',
        right: '25%',
        height: 3,
        borderRadius: 2,
        background: theme.palette.mode === 'dark'
            ? `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`
            : `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
    }
}));

const SubTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.85)' : theme.palette.text.secondary,
    textAlign: 'center',
    fontSize: '1.15rem',
    maxWidth: '750px',
    margin: '0 auto 2rem auto',
    lineHeight: 1.7,
}));

const TeamMemberPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
    borderRadius: 16,
    overflow: 'hidden',
    boxShadow: theme.palette.mode === 'dark'
        ? '0 10px 30px rgba(0, 0, 0, 0.3)'
        : '0 10px 30px rgba(0, 0, 0, 0.05)',
    background: theme.palette.mode === 'dark'
        ? 'linear-gradient(145deg, rgba(19, 26, 43, 0.8), rgba(15, 23, 42, 0.95))'
        : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(249, 250, 251, 0.9))',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.03)'}`,
    backdropFilter: 'blur(10px)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: theme.palette.mode === 'dark'
            ? '0 20px 40px rgba(0, 0, 0, 0.4)'
            : '0 20px 40px rgba(0, 0, 0, 0.1)',
    },
}));

const TeamMemberImage = styled('img')(({ theme }) => ({
    width: 120,
    height: 120,
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: theme.spacing(2),
    border: `4px solid ${theme.palette.mode === 'dark' ? 'rgba(30, 41, 59, 0.8)' : theme.palette.background.paper}`,
    boxShadow: theme.palette.mode === 'dark'
        ? `0 0 0 2px ${theme.palette.primary.dark}, 0 0 15px rgba(${theme.palette.primary.main}, 0.5)`
        : `0 0 0 2px ${theme.palette.primary.main}, 0 0 15px rgba(${theme.palette.primary.main}, 0.2)`,
}));

const TeamMemberName = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    fontSize: '1.25rem',
    marginBottom: theme.spacing(1),
    color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.text.primary,
}));

const TeamMemberRole = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.text.secondary,
    fontSize: '0.95rem',
}));

const SocialIconsWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(1),
    marginTop: theme.spacing(2),
    justifyContent: 'center',
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[400] : theme.palette.grey[700],
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.03)',
    padding: theme.spacing(1),
    transition: 'all 0.2s ease',
    '&:hover': {
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
        color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.primary.main,
        transform: 'translateY(-3px)',
    }
}));

const TeamBioText = styled(Typography)(({ theme }) => ({
    fontSize: '0.9rem',
    color: theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.text.secondary,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    lineHeight: 1.6,
}));

const SkillTag = styled(Box)(({ theme }) => ({
    display: 'inline-block',
    padding: '4px 10px',
    margin: '2px',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 600,
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(56, 189, 248, 0.15)' : 'rgba(59, 130, 246, 0.1)',
    color: theme.palette.mode === 'dark' ? '#38bdf8' : theme.palette.primary.main,
}));

const ValueCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
    borderRadius: 16,
    boxShadow: theme.palette.mode === 'dark'
        ? '0 8px 20px rgba(0, 0, 0, 0.25)'
        : '0 8px 20px rgba(0, 0, 0, 0.05)',
    background: theme.palette.mode === 'dark'
        ? 'linear-gradient(145deg, rgba(19, 26, 43, 0.8), rgba(15, 23, 42, 0.9))'
        : 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(249, 250, 251, 0.95))',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.03)'}`,
    backdropFilter: 'blur(10px)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: theme.palette.mode === 'dark'
            ? '0 15px 30px rgba(0, 0, 0, 0.35)'
            : '0 15px 30px rgba(0, 0, 0, 0.1)',
    },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
    width: 60,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    marginBottom: theme.spacing(2),
    background: theme.palette.mode === 'dark'
        ? `linear-gradient(135deg, ${theme.palette.primary.dark}cc, ${theme.palette.secondary.dark}cc)`
        : `linear-gradient(135deg, ${theme.palette.primary.light}40, ${theme.palette.secondary.light}40)`,
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    fontSize: '2rem',
    boxShadow: theme.palette.mode === 'dark'
        ? '0 5px 15px rgba(0, 0, 0, 0.4), 0 0 15px rgba(59, 130, 246, 0.1)'
        : '0 5px 15px rgba(0, 0, 0, 0.1)',
}));

interface TeamMemberProps {
    name: string;
    role: string;
    imgSrc: string;
    bio?: string;
    skills?: string[];
    email?: string;
    linkedin?: string;
    github?: string;
}

const TeamMemberCard = ({ name, role, imgSrc, bio, skills, email, linkedin, github }: TeamMemberProps) => {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const isSmallMobile = useMediaQuery('(max-width: 480px)');
    const theme = useTheme();

    return (
        <Grid sx={{ width: { xs: '100%', sm: '50%', md: '33.33%' } }}>
            <motion.div variants={itemVariants}>
                <TeamMemberPaper elevation={3}>
                    <Box sx={{ position: 'relative' }}>
                        <motion.div
                            variants={floatVariants}
                            animate="animate"
                            whileHover={{ scale: 1.05 }}
                        >
                            <TeamMemberImage src={imgSrc} alt={name}
                                sx={{
                                    width: isSmallMobile ? 90 : isMobile ? 100 : 140,
                                    height: isSmallMobile ? 90 : isMobile ? 100 : 140,
                                }}
                            />
                        </motion.div>
                        <Box
                            component={motion.div}
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            sx={{
                                position: 'absolute',
                                inset: 0,
                                borderRadius: '50%',
                                background: theme.palette.mode === 'dark'
                                    ? `radial-gradient(circle, ${theme.palette.primary.dark}40 0%, transparent 70%)`
                                    : `radial-gradient(circle, ${theme.palette.primary.main}40 0%, transparent 70%)`,
                                filter: 'blur(15px)',
                                opacity: 0.7,
                                transform: 'translateY(5px)',
                                zIndex: -1,
                            }}
                        />
                    </Box>
                    <TeamMemberName variant="h6">
                        {name}
                    </TeamMemberName>
                    <TeamMemberRole variant="body2">
                        {role}
                    </TeamMemberRole>

                    {bio && (
                        <TeamBioText>
                            {bio}
                        </TeamBioText>
                    )}

                    {skills && skills.length > 0 && (
                        <Box sx={{ mt: 1, mb: 2 }}>
                            {skills.map((skill, index) => (
                                <SkillTag key={index}>
                                    {skill}
                                </SkillTag>
                            ))}
                        </Box>
                    )}

                    <SocialIconsWrapper>
                        {email && (
                            <SocialIconButton
                                aria-label={`Email ${name}`}
                                size="small"
                            >
                                <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                                    <EmailIcon fontSize="small" />
                                </motion.div>
                            </SocialIconButton>
                        )}
                        {linkedin && (
                            <SocialIconButton
                                aria-label={`LinkedIn profile of ${name}`}
                                size="small"
                            >
                                <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                                    <LinkedInIcon fontSize="small" />
                                </motion.div>
                            </SocialIconButton>
                        )}
                        {github && (
                            <SocialIconButton
                                aria-label={`GitHub profile of ${name}`}
                                size="small"
                            >
                                <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                                    <GitHubIcon fontSize="small" />
                                </motion.div>
                            </SocialIconButton>
                        )}
                    </SocialIconsWrapper>
                </TeamMemberPaper>
            </motion.div>
        </Grid>
    );
};

const ValueItem = ({ icon, title, description, index }: { icon: React.ReactNode, title: string, description: string, index: number }) => {
    return (
        <Grid sx={{ width: { xs: '100%', sm: '50%', md: '25%' } }}>
            <motion.div custom={index} variants={fadeInVariants} initial="hidden" animate="visible">
                <ValueCard>
                    <IconWrapper>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            {icon}
                        </motion.div>
                    </IconWrapper>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                        {description}
                    </Typography>
                </ValueCard>
            </motion.div>
        </Grid>
    );
};

const teamMembers: TeamMemberProps[] = [
    {
        name: "محمد عماد",
        role: "مهندس برمجيات و خبير ذكاء اصطناعي",
        imgSrc: "src/assets/profile.png",
        bio: "مهندس برمجة متخصص في تقنيات الذكاء الاصطناعي وتطوير واجهات المستخدم الحديثة.",
        skills: ["React", "TypeScript", "AI", "Python"],
        email: "email@example.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
    },
    {
        name: "معاذ احمد",
        role: "مهندس برمجيات و خبير امن سيبراني",
        imgSrc: "src/assets/profile.png",
        bio: "متخصص في أمن المعلومات وحماية البيانات وتطوير البنية التحتية الآمنة.",
        skills: ["Security", "DevOps", "Node.js", "AWS"],
        email: "email@example.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
    },
    {
        name: "محمد عبدالرحيم",
        role: "مهندس برمجيات و متخصص SEO",
        imgSrc: "src/assets/profile.png",
        bio: "خبير في تحسين محركات البحث وتطوير تجربة المستخدم وتصميم المواقع.",
        skills: ["SEO", "Web Design", "UX/UI", "Analytics"],
        email: "email@example.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
    },
];

const AboutPage = () => {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const isSmallMobile = useMediaQuery('(max-width: 480px)');
    const theme = useTheme();
    useThemeContext();

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
        <PageContainer>
            <AuroraBackground>
                <AuroraShape
                    className="aurora-shape-1"
                    animate={{
                        x: [0, 30, 0],
                        opacity: [0.15, 0.2, 0.15]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <AuroraShape
                    className="aurora-shape-2"
                    animate={{
                        x: [0, -30, 0],
                        opacity: [0.15, 0.2, 0.15]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <AuroraShape
                    className="aurora-shape-3"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </AuroraBackground>

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box
                    component={motion.div}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: { xs: 2, md: 4 }
                    }}
                >
                    <Box component={motion.div} variants={itemVariants} sx={{ textAlign: 'center', mb: 4 }}>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                        >
                            <SectionTitle variant="h3">عن Idea to App</SectionTitle>
                        </motion.div>
                        <SubTitle variant="subtitle1">
                            نحن فريق من المطورين والمصممين المبدعين الذين يجمعهم شغف واحد: تحويل الأفكار الرائعة إلى منتجات رقمية استثنائية.
                        </SubTitle>
                    </Box>

                    {/* Mission Section */}
                    <Box component={motion.div} variants={itemVariants} sx={{ width: '100%', mb: 6 }}>
                        <ContentBox>
                            <Typography variant="h5" fontWeight={700} gutterBottom sx={{
                                color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.text.primary,
                                position: 'relative',
                                paddingBottom: 2,
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                    width: 50,
                                    height: 3,
                                    background: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
                                }
                            }}>
                                مهمتنا
                            </Typography>
                            <Typography variant="body1" sx={{
                                lineHeight: 1.8,
                                color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.text.secondary,
                                fontSize: isSmallMobile ? '0.95rem' : '1.1rem',
                            }}>
                                مهمتنا هي تمكين رواد الأعمال والشركات من خلال تقديم حلول تقنية متطورة ومبتكرة تساعدهم على التميز والنجاح في عالم رقمي متغير باستمرار. نحن نؤمن أن كل فكرة قوية تستحق التنفيذ بأعلى معايير الجودة والاحترافية.
                            </Typography>
                        </ContentBox>
                    </Box>

                    {/* Values Section */}
                    <Box component={motion.div} variants={itemVariants} sx={{ width: '100%', mb: 8 }}>
                        <Typography
                            variant="h5"
                            fontWeight={700}
                            align="center"
                            sx={{ mb: 4, color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.text.primary }}
                        >
                            قيمنا
                        </Typography>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', mx: -2 }}>
                            <ValueItem
                                icon={<EmojiObjectsIcon fontSize="inherit" />}
                                title="الإبداع"
                                description="نسعى دائمًا لتقديم حلول إبداعية ومبتكرة تتجاوز توقعات عملائنا وتحقق أهدافهم."
                                index={0}
                            />
                            <ValueItem
                                icon={<TimelineIcon fontSize="inherit" />}
                                title="التميز"
                                description="نلتزم بأعلى معايير الجودة في جميع أعمالنا لتقديم منتجات تتميز بالأداء العالي والموثوقية."
                                index={1}
                            />
                            <ValueItem
                                icon={<FavoriteIcon fontSize="inherit" />}
                                title="الشغف"
                                description="شغفنا بالتكنولوجيا والابتكار يدفعنا لمواكبة أحدث التقنيات وتطبيقها بشكل فعال."
                                index={2}
                            />
                            <ValueItem
                                icon={<RocketLaunchIcon fontSize="inherit" />}
                                title="النمو"
                                description="نؤمن بالتطور المستمر ونسعى دائمًا لتحسين مهاراتنا وقدراتنا لتقديم أفضل النتائج."
                                index={3}
                            />
                        </Box>
                    </Box>

                    {/* Team Section */}
                    <Box component={motion.div} variants={itemVariants} sx={{ width: '100%', textAlign: 'center', mb: 4 }}>
                        <Divider sx={{ mb: 6, width: '50%', margin: '0 auto 4rem auto' }} />
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <SectionTitle variant="h3">فريقنا</SectionTitle>
                            <SubTitle variant="subtitle1">
                                فريق من الخبراء المتخصصين الذين يعملون بشغف لتحويل أفكاركم إلى واقع ملموس
                            </SubTitle>
                        </motion.div>

                        <Typography
                            variant="body1"
                            sx={{
                                maxWidth: '700px',
                                margin: '0 auto 3rem',
                                color: theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.text.secondary,
                                lineHeight: 1.8,
                            }}
                        >
                            يتكون فريقنا من مجموعة من المبدعين ذوي الخبرة العالية في مجالات البرمجة والتصميم والتسويق الرقمي. نعمل معًا بروح الفريق الواحد لتحقيق أهدافكم وتجاوز توقعاتكم.
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', mx: -2 }}>
                        {teamMembers.map((member, index) => (
                            <TeamMemberCard
                                key={index}
                                name={member.name}
                                role={member.role}
                                imgSrc={member.imgSrc}
                                bio={member.bio}
                                skills={member.skills}
                                email={member.email}
                                linkedin={member.linkedin}
                                github={member.github}
                            />
                        ))}
                    </Box>

                    <Box sx={{ mt: 8, textAlign: 'center' }}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Typography
                                variant="h6"
                                component="a"
                                href="/contact"
                                sx={{
                                    display: 'inline-block',
                                    padding: '12px 24px',
                                    borderRadius: '8px',
                                    background: theme.palette.mode === 'dark'
                                        ? 'linear-gradient(135deg, #38bdf8, #818cf8)'
                                        : 'linear-gradient(135deg, #3b82f6, #6366f1)',
                                    color: 'white',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    boxShadow: theme.palette.mode === 'dark'
                                        ? '0 4px 15px rgba(125, 211, 252, 0.3)'
                                        : '0 4px 15px rgba(59, 130, 246, 0.3)',
                                    cursor: 'pointer',
                                }}
                            >
                                تواصل مع فريقنا
                            </Typography>
                        </motion.div>
                    </Box>
                </Box>
            </Container>
        </PageContainer>
    );
};

export default AboutPage; 