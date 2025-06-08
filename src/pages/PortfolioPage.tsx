import { Helmet } from 'react-helmet-async';
import { projects } from '../data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import {
    Container,
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActionArea,
    Chip,
    Button,
    Modal,
    Box,
    Fade,
    Backdrop,
    IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 900,
    maxHeight: '90vh',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 0,
    borderRadius: 2,
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    overflow: 'hidden',
};

const PortfolioPage = () => {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [activeFilter, setActiveFilter] = useState('All');

    const allTags = useMemo(() => {
        const tags = new Set<string>();
        projects.forEach(p => p.tags.forEach(tag => tags.add(tag)));
        return ['All', ...Array.from(tags)];
    }, []);

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') {
            return projects;
        }
        return projects.filter(project => project.tags.includes(activeFilter));
    }, [activeFilter]);

    const handleOpenModal = (project: typeof projects[0]) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <>
            <Helmet>
                <title>Portfolio - Our Work</title>
                <meta name="description" content="Explore our portfolio of successfully completed projects." />
            </Helmet>

            <Container maxWidth="lg" sx={{ py: { xs: 8, sm: 12 } }}>
                {/* Header Section */}
                <Box textAlign="center" mb={10}>
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <Typography variant="h2" component="h1" fontWeight="800" color="primary.main" gutterBottom>
                            Our Portfolio
                        </Typography>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
                            We build beautiful, functional, and scalable applications. Here's a selection of projects we're proud of.
                        </Typography>
                    </motion.div>
                </Box>

                {/* Filter Buttons */}
                <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2} mb={8}>
                    {allTags.map((tag) => (
                        <motion.div key={tag} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                variant={activeFilter === tag ? 'contained' : 'outlined'}
                                onClick={() => setActiveFilter(tag)}
                                sx={{ borderRadius: '999px', textTransform: 'none', px: 3, py: 1 }}
                            >
                                {tag}
                            </Button>
                        </motion.div>
                    ))}
                </Box>

                {/* Projects Grid */}
                <Box component={motion.div} layout>
                    <Box
                        display="grid"
                        gridTemplateColumns={{
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)',
                        }}
                        gap={4}
                    >
                        <AnimatePresence>
                            {filteredProjects.length > 0 ? (
                                filteredProjects.map((project) => (
                                    <motion.div
                                        key={project.id}
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        whileHover={{ y: -8, scale: 1.03 }}
                                        style={{ height: '100%' }}
                                    >
                                        <Card
                                            sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 4, overflow: 'hidden', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.1)' }}
                                            onClick={() => handleOpenModal(project)}
                                        >
                                            <CardActionArea sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                                                <CardMedia
                                                    component={motion.div}
                                                    layoutId={`project-image-${project.id}`}
                                                    image={project.imageUrl}
                                                    sx={{ height: 200, width: '100%' }}
                                                />
                                                <CardContent sx={{ flexGrow: 1, width: '100%' }}>
                                                    <Typography gutterBottom variant="h5" component={motion.h2} layoutId={`project-title-${project.id}`} fontWeight="bold">
                                                        {project.title}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, height: 60, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                        {project.description}
                                                    </Typography>
                                                    <Box>
                                                        {project.tags.slice(0, 3).map(tag => (
                                                            <Chip key={tag} label={tag} size="small" sx={{ mr: 1, mb: 1, bgcolor: 'primary.light', color: 'primary.contrastText' }} />
                                                        ))}
                                                        {project.tags.length > 3 && (
                                                            <Chip label={`+${project.tags.length - 3}`} size="small" />
                                                        )}
                                                    </Box>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </motion.div>
                                ))
                            ) : (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ gridColumn: '1 / -1' }}>
                                    <Box textAlign="center" py={10}>
                                        <Typography variant="h5" component="h3" gutterBottom>
                                            No Projects Found
                                        </Typography>
                                        <Typography color="text.secondary">
                                            We couldn't find any projects with that tag. Try another one!
                                        </Typography>
                                    </Box>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Box>
                </Box>
            </Container>

            {/* Project Detail Modal */}
            <Modal
                open={selectedProject !== null}
                onClose={handleCloseModal}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={selectedProject !== null}>
                    <Box sx={modalStyle}>
                        {selectedProject && (
                            <>
                                <Box sx={{ width: { xs: '100%', md: '50%' }, height: { xs: 300, md: 'auto' } }}>
                                    <CardMedia
                                        component={motion.div}
                                        layoutId={`project-image-${selectedProject.id}`}
                                        image={selectedProject.imageUrl}
                                        sx={{ width: '100%', height: '100%' }}
                                    />
                                </Box>
                                <Box sx={{ width: { xs: '100%', md: '50%' }, p: 4, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
                                    <Box flexGrow={1}>
                                        <Typography variant="h3" component={motion.h2} layoutId={`project-title-${selectedProject.id}`} fontWeight="bold" gutterBottom>
                                            {selectedProject.title}
                                        </Typography>
                                        <Box display="flex" flexWrap="wrap" gap={1} mb={3}>
                                            {selectedProject.tags.map(tag => (
                                                <Chip key={tag} label={tag} />
                                            ))}
                                        </Box>
                                        <Typography variant="body1" color="text.secondary" mb={4}>
                                            {selectedProject.description}
                                        </Typography>
                                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                                            Project Highlights
                                        </Typography>
                                        <Box component="ul" pl={2.5} mb={4} sx={{ '& li': { mb: 1 } }}>
                                            <Typography component="li" color="text.secondary">Responsive design for all device sizes</Typography>
                                            <Typography component="li" color="text.secondary">Optimized performance and loading times</Typography>
                                            <Typography component="li" color="text.secondary">Intuitive user interface and experience</Typography>
                                            <Typography component="li" color="text.secondary">Secure and scalable architecture</Typography>
                                        </Box>
                                    </Box>
                                    <Button
                                        href={selectedProject.projectUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="contained"
                                        size="large"
                                        fullWidth
                                    >
                                        Visit Project
                                    </Button>
                                </Box>
                                <IconButton
                                    aria-label="close"
                                    onClick={handleCloseModal}
                                    sx={{
                                        position: 'absolute',
                                        right: 8,
                                        top: 8,
                                        color: (theme) => theme.palette.grey[500],
                                        bgcolor: 'rgba(255, 255, 255, 0.7)',
                                        '&:hover': {
                                            bgcolor: 'rgba(255, 255, 255, 1)',
                                        }
                                    }}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </>
                        )}
                    </Box>
                </Fade>
            </Modal>
        </>
    );
};

export default PortfolioPage; 