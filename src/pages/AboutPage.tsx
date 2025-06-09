import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import { useEffect } from 'react';
import { Box, Typography, Container, Grid, Paper, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
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

const PageContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    minHeight: '100vh',
    padding: theme.spacing(6, 0),
    overflow: 'hidden',
    backgroundColor: theme.palette.mode === 'dark'
        ? 'rgba(13, 17, 23, 0.97)'
        : 'rgba(248, 249, 250, 0.97)',
}));

const AuroraBackground = styled(Box)(({ theme }) => ({
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
    opacity: theme.palette.mode === 'dark' ? 0.2 : 0.5,
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
}));

const ContentBox = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    marginBottom: theme.spacing(5),
    borderRadius: theme.shape.borderRadius * 2,
    boxShadow: theme.palette.mode === 'dark'
        ? '0 10px 30px rgba(0, 0, 0, 0.2)'
        : '0 10px 30px rgba(0, 0, 0, 0.05)',
    position: 'relative',
    zIndex: 1,
    backgroundColor: theme.palette.mode === 'dark'
        ? 'rgba(22, 27, 34, 0.7)'
        : 'rgba(255, 255, 255, 0.8)',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)'}`,
    backdropFilter: 'blur(10px)',
    overflow: 'hidden',
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
        ? `linear-gradient(120deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`
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
            ? `linear-gradient(90deg, transparent, ${theme.palette.primary.light}, transparent)`
            : `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
    }
}));

const SubTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.text.secondary,
    textAlign: 'center',
    fontSize: '1.15rem',
    maxWidth: '750px',
    margin: '0 auto 2rem auto',
    lineHeight: 1.7,
}));

const TeamGrid = styled(Grid)(({ theme }) => ({
    marginTop: theme.spacing(5),
}));

const TeamMemberPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
    borderRadius: theme.shape.borderRadius * 2,
    overflow: 'hidden',
    boxShadow: theme.palette.mode === 'dark'
        ? '0 10px 30px rgba(0, 0, 0, 0.2)'
        : '0 10px 30px rgba(0, 0, 0, 0.05)',
    background: theme.palette.mode === 'dark'
        ? 'linear-gradient(145deg, rgba(22, 27, 34, 0.6), rgba(17, 24, 39, 0.8))'
        : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(249, 250, 251, 0.9))',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)'}`,
    backdropFilter: 'blur(10px)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: theme.palette.mode === 'dark'
            ? '0 20px 40px rgba(0, 0, 0, 0.3)'
            : '0 20px 40px rgba(0, 0, 0, 0.1)',
    },
}));

const TeamMemberImage = styled('img')(({ theme }) => ({
    width: 120,
    height: 120,
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: theme.spacing(2),
    border: `4px solid ${theme.palette.background.paper}`,
    boxShadow: theme.palette.mode === 'dark'
        ? `0 0 0 2px ${theme.palette.primary.dark}`
        : `0 0 0 2px ${theme.palette.primary.main}`,
}));

const TeamMemberName = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    fontSize: '1.25rem',
    marginBottom: theme.spacing(1),
    color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.text.primary,
}));

const TeamMemberRole = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.text.secondary,
    fontSize: '0.95rem',
}));

interface TeamMemberProps {
    name: string;
    role: string;
    imgSrc: string;
}

const TeamMemberCard = ({ name, role, imgSrc }: TeamMemberProps) => {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const isSmallMobile = useMediaQuery('(max-width: 480px)');
    const theme = useTheme();

    return (
        <Grid item xs={12} sm={6} md={4}>
            <motion.div variants={itemVariants}>
                <TeamMemberPaper elevation={3}>
                    <Box sx={{ position: 'relative' }}>
                        <TeamMemberImage src={imgSrc} alt={name}
                            sx={{
                                width: isSmallMobile ? 80 : isMobile ? 90 : 120,
                                height: isSmallMobile ? 80 : isMobile ? 90 : 120,
                            }}
                        />
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
                </TeamMemberPaper>
            </motion.div>
        </Grid>
    );
};

const AboutPage = () => {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const isSmallMobile = useMediaQuery('(max-width: 480px)');
    const theme = useTheme();
    const { isDarkMode } = useThemeContext();

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
                        opacity: [0.3, 0.4, 0.3]
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
                        opacity: [0.3, 0.4, 0.3]
                    }}
                    transition={{
                        duration: 25,
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
                        <SectionTitle variant="h3">عن Idea to App</SectionTitle>
                        <SubTitle variant="subtitle1">
                            نحن فريق من المطورين والمصممين المبدعين الذين يجمعهم شغف واحد: تحويل الأفكار الرائعة إلى منتجات رقمية استثنائية.
                        </SubTitle>
                    </Box>

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

                    <Box component={motion.div} variants={itemVariants} sx={{ width: '100%', textAlign: 'center', mb: 4 }}>
                        <SectionTitle variant="h3">فريقنا</SectionTitle>
                    </Box>

                    <TeamGrid container spacing={4}>
                        <TeamMemberCard name="محمد عماد" role="مهندس برمجيات و خبير ذكاء اصطناعي" imgSrc="src/assets/profile.png" />
                        <TeamMemberCard name="معاذ احمد" role=" مهندس برمجيات و خبير امن سيبراني" imgSrc="src/assets/profile.png" />
                        <TeamMemberCard name="محمد عبدالرحيم" role="مهندس برمجيات و متخصص SEO" imgSrc="src/assets/profile.png" />
                    </TeamGrid>
                </Box>
            </Container>
        </PageContainer>
    );
};

export default AboutPage; 