// Import React
import React from 'react';
import ReactDOM from 'react-dom/client';
// Import Bootstrap and CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';
// Import React Components
import App from './App';
import AboutMePage from './pages/AboutMePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';

// Import React Router modules
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Declare router variable for RouterProvider
const router = createBrowserRouter([
  {
    // Set parent path and component
    path: '/',
    element: <App />,
    // Children elements will render in place of Outlet in App component
    children: [
      {
        path: '/',
        element: <AboutMePage />,
      },
      {
        path: '/portfolio',
        element: <PortfolioPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/resume',
        element: <ResumePage />,
      }
    ]
  }
]);

// Render components in HTML file
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);