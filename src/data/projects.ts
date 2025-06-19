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
        title: 'زاهب للتأشيرات والسفر',
        description: 'شركة كويتية تقدم خدمات التأشيرات، حجوزات السفر، الترجمة المعتمدة، وتأمين السفر للأفراد والشركات.',
        imageUrl: 'assets/images/projects/zahebintl.png',
        projectUrl: 'https://zahebintl.com',
        tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    },    
    {
        id: 2,
        title: 'المسار للعمرة',
        description: 'شركة متخصصة في خدمات العمرة، تقدم باقات ميسرة ومستوى عالٍ من الراحة والخدمة.',
        imageUrl: 'assets/images/projects/almasar-umrah.png',
        projectUrl: 'https://almasar-umrah.com',
        tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    },
    {
        id: 3,
        title: 'الإسلام لخدمة المعتمرين',
        description: 'باقات عمرة من الرياض تشمل فنادق 5 نجوم قريبة من الحرم ونقل فاخر بباصات VIP، بأسعار تنافسية وخدمات متكاملة.',
        imageUrl: 'assets/images/projects/aleslaam.png',
        projectUrl: 'https://aleslaam.com',
        tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    },
    {
        id: 4,
        title: 'درة الأقصى للعمرة',
        description: 'موقع لحجز رحلات العمرة إلكترونيًا من خلال برامج متنوعة وتنظيم احترافي.',
        imageUrl: 'assets/images/projects/dora-alaqsa.png',
        projectUrl: 'https://dora-alaqsa.com',
        tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
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