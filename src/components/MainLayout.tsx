import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import ScrollToTopButton from './ScrollToTopButton';
import { useEffect } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

const MainLayout = () => {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const isSmallMobile = useMediaQuery('(max-width: 480px)');

    // Apply mobile classes to the root element
    useEffect(() => {
        const rootElement = document.documentElement;

        if (isSmallMobile) {
            rootElement.classList.add('xs-viewport');
            rootElement.classList.remove('sm-viewport');
        } else if (isMobile) {
            rootElement.classList.add('sm-viewport');
            rootElement.classList.remove('xs-viewport');
        } else {
            rootElement.classList.remove('xs-viewport', 'sm-viewport');
        }

        return () => {
            rootElement.classList.remove('xs-viewport', 'sm-viewport');
        };
    }, [isMobile, isSmallMobile]);

    return (
        <div className="main-layout">
            <ScrollToTop />
            <Navbar />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
            <ScrollToTopButton />
        </div>
    );
};

export default MainLayout; 