import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import MainLayout from './components/MainLayout';
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
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
