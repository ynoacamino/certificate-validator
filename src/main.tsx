import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './app/layout';
import Home from '@/app/home';
import Certificates from "@/app/certificates"
import ErrorPage from "@/app/errorPage";
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import NotFound from './app/not-found';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element:  <Home />,
      },
      {
        path: "certificates/:id", 
        element: <Certificates />,
      },
      {
        path: "certificates/404",
        element: <NotFound />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
)
