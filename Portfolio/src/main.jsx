import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Portfolio from './pages/portfolio.jsx';
import Resume from './pages/resume.jsx';

// const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <App />,
//       errorElement: <ErrorPage />,
//       children: [
//         {
//           index: true,
//           element: <About />,
//         },
//         {
//           path: '/contact',
//           element: <Contact />,
//         },
//         {
//           path: '/portfolio',
//           element: <Portfolio />,
//         },
//         {
//             path: '/resume',
//             element: <Resume />,
//         },
//       ],
//     },
//   ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    // <RouterProvider router={router} />
    <App />
)
