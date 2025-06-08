import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import MainLayout from './components/MainLayout';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import ErrorPage from './pages/ErrorPage';
import './index.css';
import { useEffect } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'services/:serviceId',
        element: <ServicePage />,
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />
      }
    ]
  }
]);

function App() {
  // Ensure the viewport is properly set on mobile
  useEffect(() => {
    // Fix mobile viewport issues
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover');
    }

    // Handle mobile height issues (100vh bug on mobile browsers)
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);

    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
