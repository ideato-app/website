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
        imageUrl: '../src/assets/projects/zahebintl.png',
        projectUrl: 'https://zahebintl.com',
        tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    },    
    {
        id: 2,
        title: 'المسار للعمرة',
        description: 'شركة متخصصة في خدمات العمرة، تقدم باقات ميسرة ومستوى عالٍ من الراحة والخدمة.',
        imageUrl: '/src/assets/projects/al-masar.png',
        projectUrl: 'https://almasar-umrah.com',
        tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    },
    {
        id: 3,
        title: 'الإسلام لخدمة المعتمرين',
        description: 'باقات عمرة من الرياض تشمل فنادق 5 نجوم قريبة من الحرم ونقل فاخر بباصات VIP، بأسعار تنافسية وخدمات متكاملة.',
        imageUrl: 'https://raw.githubusercontent.com/ideato-app/website/refs/heads/main/src/assets/projects/al-eslam.png',
        projectUrl: 'https://aleslaam.com',
        tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    },
    {
        id: 4,
        title: 'درة الأقصى للعمرة',
        description: 'موقع لحجز رحلات العمرة إلكترونيًا من خلال برامج متنوعة وتنظيم احترافي.',
        imageUrl: '../src/assets/projects/dora-alaqsa.png',
        projectUrl: 'https://dora-alaqsa.com',
        tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    },
    {
        id: 5,
        title: 'ماستر القهوة',
        description: 'موقع إلكتروني مخصص لعرض وطلب منتجات ماستر القهوة.',
        imageUrl: '../src/assets/projects/master-cofee.png',
        projectUrl: 'https://t-offee.pages.dev/',
        tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    },    
]; 