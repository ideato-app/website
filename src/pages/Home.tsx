import HeroSection from '../components/HeroSection';
import ServicesGrid from '../components/ServicesGrid';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaSection from '../components/CtaSection';
import FeaturesSection from '../components/FeaturesSection';

const Home = () => {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <ServicesGrid />
            <TestimonialsSection />
            <CtaSection />
        </>
    );
};

export default Home;