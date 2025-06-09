export interface PricingPlan {
    id: string;
    title: string;
    price: string;
    priceDetails: string;
    features: string[];
    isRecommended?: boolean;
}

export interface ServicePricing {
    serviceId: string;
    serviceTitle: string;
    serviceIcon: string;
    serviceDescription: string;
    plans: PricingPlan[];
}

export const servicePricingData: ServicePricing[] = [
    {
        serviceId: 'web-dev',
        serviceTitle: 'تطوير مواقع الويب',
        serviceIcon: '🌐',
        serviceDescription: 'مواقع إلكترونية عالية الأداء بتصميم عصري وتجربة استخدام سلسة.',
        plans: [
            {
                id: 'web-basic',
                title: 'موقع تعريفي',
                price: '1,500 ر.س',
                priceDetails: 'مرة واحدة',
                features: [
                    'صفحة رئيسية + 4 صفحات إضافية',
                    'تصميم متجاوب',
                    'فورم تواصل',
                    'ربط بوسائل التواصل الاجتماعي',
                ],
            },
            {
                id: 'web-business',
                title: 'متجر إلكتروني',
                price: '4,500 ر.س',
                priceDetails: 'مرة واحدة',
                features: [
                    'كل مزايا الموقع التعريفي',
                    'إضافة حتى 100 منتج',
                    'بوابات دفع إلكتروني',
                    'نظام إدارة الطلبات',
                    'تحسين أساسي لمحركات البحث',
                ],
                isRecommended: true,
            },
            {
                id: 'web-enterprise',
                title: 'بوابة متكاملة',
                price: 'طلب عرض سعر',
                priceDetails: '',
                features: [
                    'تصميم مخصص بالكامل',
                    'عدد غير محدود من الصفحات والمنتجات',
                    'أنظمة متعددة (بائعين، عملاء)',
                    'تكامل مع أنظمة خارجية (ERP, CRM)',
                    'أعلى مستويات الأداء والأمان',
                ],
            },
        ],
    },
    {
        serviceId: 'app-dev',
        serviceTitle: 'تطوير التطبيقات',
        serviceIcon: '📱',
        serviceDescription: 'تطبيقات ذكية تعمل بسلاسة على جميع المنصات.',
        plans: [
            {
                id: 'app-mvp',
                title: 'النسخة الأولية (MVP)',
                price: '7,000 ر.س',
                priceDetails: 'تبدأ من',
                features: [
                    'تطبيق لنظام واحد (iOS أو Android)',
                    'تصميم واجهات أساسي',
                    'حتى 5 شاشات رئيسية',
                    'لوحة تحكم بسيطة',
                ],
            },
            {
                id: 'app-full',
                title: 'تطبيق متكامل',
                price: '20,000 ر.س',
                priceDetails: 'تبدأ من',
                features: [
                    'تطبيق لنظامي iOS و Android',
                    'تصميم واجهات احترافي UI/UX',
                    'عدد مفتوح من الشاشات',
                    'ميزات متقدمة (إشعارات، تحديد مواقع)',
                    'تكامل مع خدمات طرف ثالث',
                ],
                isRecommended: true,
            },
            {
                id: 'app-suite',
                title: 'حلول الشركات',
                price: 'طلب عرض سعر',
                priceDetails: '',
                features: [
                    'كل مزايا التطبيق المتكامل',
                    'أنظمة تحليل بيانات متقدمة',
                    'بنية تحتية قابلة للتوسع',
                    'عقود صيانة ودعم فني مخصصة',
                ],
            },
        ],
    },
    {
        serviceId: 'ai',
        serviceTitle: 'الذكاء الاصطناعي',
        serviceIcon: '🤖',
        serviceDescription: 'تحويل البيانات إلى قرارات ذكية من خلال الذكاء الاصطناعي.',
        plans: [
            {
                id: 'ai-analysis',
                title: 'تحليل بيانات',
                price: '3,000 ر.س',
                priceDetails: 'للمشروع',
                features: [
                    'تحليل استكشافي للبيانات',
                    'تصورات بيانية (Dashboards)',
                    'تقرير مفصل بالنتائج',
                    'جلسة استشارية',
                ],
            },
            {
                id: 'ai-integration',
                title: 'تكامل نماذج تعلم الآلة',
                price: '9,000 ر.س',
                priceDetails: 'تبدأ من',
                features: [
                    'دمج نماذج جاهزة في أنظمتك',
                    'تخصيص النموذج لبياناتك',
                    'بناء API خاصة بالنموذج',
                    'دعم فني للتكامل',
                ],
                isRecommended: true,
            },
            {
                id: 'ai-custom',
                title: 'بناء نموذج مخصص',
                price: 'طلب عرض سعر',
                priceDetails: '',
                features: [
                    'بناء نموذج تعلم آلة من الصفر',
                    'حلول معالجة لغات طبيعية (NLP)',
                    'حلول رؤية حاسوبية (Computer Vision)',
                    'تدريب ونشر النموذج',
                ],
            },
        ],
    },
    {
        serviceId: 'ui-ux',
        serviceTitle: 'تصميم UI/UX',
        serviceIcon: '🎨',
        serviceDescription: 'تصاميم جذابة وتجربة استخدام تركز على المستخدم.',
        plans: [
            {
                id: 'ui-audit',
                title: 'تقييم تجربة المستخدم',
                price: '1,800 ر.س',
                priceDetails: 'مرة واحدة',
                features: [
                    'تحليل كامل للمنتج الحالي',
                    'تقرير مفصل بالمشاكل والتحسينات',
                    'مقترحات وحلول عملية',
                    'خارطة طريق للتنفيذ',
                ],
            },
            {
                id: 'ui-design-system',
                title: 'تصميم تطبيق أو موقع',
                price: '6,000 ر.س',
                priceDetails: 'تبدأ من',
                features: [
                    'بحث المستخدمين وبناء الشخصيات',
                    'تصميم Wireframes و Prototypes',
                    'تصميم واجهات المستخدم (UI)',
                    'إنشاء نظام تصميم (Design System)',
                ],
                isRecommended: true,
            },
            {
                id: 'ui-full-branding',
                title: 'تصميم وهوية متكاملة',
                price: 'طلب عرض سعر',
                priceDetails: '',
                features: [
                    'كل مزايا تصميم التطبيق',
                    'تصميم هوية بصرية كاملة',
                    'تصميم الشعار والمواد التسويقية',
                    'دليل استخدام الهوية البصرية',
                ],
            },
        ],
    },
    {
        serviceId: 'cybersecurity',
        serviceTitle: 'خدمات الأمن السيبراني',
        serviceIcon: '🔒',
        serviceDescription: 'حماية رقمية متكاملة لتطبيقاتك وبياناتك.',
        plans: [
            {
                id: 'security-scan',
                title: 'فحص ثغرات أساسي',
                price: '2,500 ر.س',
                priceDetails: 'للتطبيق الواحد',
                features: [
                    'فحص تلقائي للثغرات الشائعة',
                    'تقرير فني بالنتائج',
                    'توصيات للمعالجة',
                    'إعادة فحص بعد التصحيح',
                ],
            },
            {
                id: 'security-pentest',
                title: 'اختبار اختراق متقدم',
                price: '12,000 ر.س',
                priceDetails: 'تبدأ من',
                features: [
                    'محاكاة هجمات حقيقية (Pen-testing)',
                    'فحص الكود المصدري',
                    'هندسة اجتماعية',
                    'تقرير مفصل بالثغرات وخطورتها',
                ],
                isRecommended: true,
            },
            {
                id: 'security-consulting',
                title: 'استشارات أمنية شاملة',
                price: 'طلب عرض سعر',
                priceDetails: '',
                features: [
                    'مراجعة وتصميم البنية الآمنة',
                    'تطبيق معايير الأمان العالمية (ISO 27001)',
                    'تدريب الفريق على الممارسات الآمنة',
                    'متابعة دورية ومراقبة مستمرة',
                ],
            },
        ],
    },
    {
        serviceId: 'hosting',
        serviceTitle: 'الاستضافة والنشر السحابي',
        serviceIcon: '☁️',
        serviceDescription: 'نشر موثوق وأداء ثابت لتطبيقاتك على السحابة والمتاجر.',
        plans: [
            {
                id: 'hosting-shared',
                title: 'استضافة مواقع',
                price: '150 ر.س',
                priceDetails: 'شهرياً',
                features: [
                    'استضافة مشتركة',
                    'شهادة SSL مجانية',
                    'نسخ احتياطي أسبوعي',
                    'لوحة تحكم cPanel/Plesk',
                ],
            },
            {
                id: 'hosting-vps',
                title: 'خادم افتراضي (VPS)',
                price: '450 ر.س',
                priceDetails: 'شهرياً',
                features: [
                    'موارد مخصصة (CPU, RAM)',
                    'صلاحيات Root كاملة',
                    'إدارة أساسية للخادم',
                    'أداء وأمان أعلى',
                ],
                isRecommended: true,
            },
            {
                id: 'hosting-cloud',
                title: 'إدارة ونشر سحابي',
                price: 'طلب عرض سعر',
                priceDetails: '',
                features: [
                    'إدارة حسابات (AWS, Azure, GCP)',
                    'بنية تحتية كشيفرة (IaC)',
                    'إعداد CI/CD pipelines',
                    'مراقبة وتحسين الأداء والتكلفة',
                ],
            },
        ],
    },
];
