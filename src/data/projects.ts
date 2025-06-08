export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    tags: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'E-commerce Platform',
        description: 'A full-featured e-commerce platform with a modern UI, product management, and a secure checkout process.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlkJ3bqM4elgdYziNtKfMnR1BW504gn1G8kQ&s',
        projectUrl: '#',
        tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    },
    {
        id: 2,
        title: 'Social Media Dashboard',
        description: 'A powerful dashboard to manage multiple social media accounts, schedule posts, and analyze engagement.',
        imageUrl: 'https://www.searchenginejournal.com/wp-content/uploads/2021/09/16-reasons-why-social-media-is-important-to-your-company-616d3200e6dc6-sej-1280x720.png',
        projectUrl: '#',
        tags: ['Vue.js', 'Firebase', 'Chart.js'],
    },
    {
        id: 3,
        title: 'Mobile Banking App',
        description: 'A secure and intuitive mobile banking application with features like transfers, bill payments, and account statements.',
        imageUrl: 'https://via.placeholder.com/400x300/ff006e/ffffff?text=Banking+App',
        projectUrl: '#',
        tags: ['React Native', 'TypeScript', 'Redux'],
    },
    {
        id: 4,
        title: 'Project Management Tool',
        description: 'A collaborative tool for teams to manage tasks, track progress, and communicate effectively on projects.',
        imageUrl: 'https://via.placeholder.com/400x300/fb5607/ffffff?text=Project+Tool',
        projectUrl: '#',
        tags: ['Angular', 'Spring Boot', 'PostgreSQL'],
    },
    {
        id: 5,
        title: 'Online Learning Platform',
        description: 'An interactive e-learning platform offering video courses, quizzes, and certificates of completion.',
        imageUrl: 'https://via.placeholder.com/400x300/ffbe0b/000000?text=E-Learning',
        projectUrl: '#',
        tags: ['Next.js', 'GraphQL', 'Prisma'],
    },
    {
        id: 6,
        title: 'Healthcare Management System',
        description: 'A comprehensive system for hospitals to manage patient records, appointments, and billing efficiently.',
        imageUrl: 'https://d1pflc66vs2s7d.cloudfront.net/wp-content/uploads/2023/02/healthcare-management-system-erp-software-uae.webp',
        projectUrl: '#',
        tags: ['Java', 'Hibernate', 'MySQL'],
    }
]; 