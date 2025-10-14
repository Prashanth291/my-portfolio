import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.js';
import Home from './pages/Home.tsx';
import './index.css'; // Your main stylesheet with Tailwind imports

// Define the application's routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // The main App layout with Navbar/Footer
    // Nested routes will be rendered inside App's <Outlet />
    children: [
      {
        index: true, // This makes 'Home' the default component for the '/' path
        element: <Home />,
      },
      // If you wanted to add a separate blog page, you could add it here:
      // {
      //   path: 'blog',
      //   element: <BlogPage />
      // }
    ],
  },
]);

// Render the application
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);