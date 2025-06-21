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
        imageUrl: 'https://github.com/ideato-app/website/blob/main/src/assets/projects/zahebintl.png?raw=true',
        projectUrl: 'https://zahebintl.com',
        tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    },    
    {
        id: 2,
        title: 'المسار للعمرة',
        description: 'شركة متخصصة في خدمات العمرة، تقدم باقات ميسرة ومستوى عالٍ من الراحة والخدمة.',
        imageUrl: 'https://github.com/ideato-app/website/blob/main/src/assets/projects/al-masar.png?raw=true',
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
        imageUrl: 'https://github.com/ideato-app/website/blob/main/src/assets/projects/dora-alaqsa.png?raw=true',
        projectUrl: 'https://dora-alaqsa.com',
        tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    },
    {
        id: 5,
        title: 'ماستر القهوة',
        description: 'موقع إلكتروني مخصص لعرض وطلب منتجات ماستر القهوة.',
        imageUrl: 'https://github.com/ideato-app/website/blob/main/src/assets/projects/master-cofee.png?raw=true',
        projectUrl: 'https://t-offee.pages.dev/',
        tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    },    
]; 