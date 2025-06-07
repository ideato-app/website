import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import MainLayout from './components/MainLayout';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
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
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
