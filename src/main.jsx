import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PageNav from './PageNav.jsx';
import Navbar1 from './components/Navbar/Navbar1'
import Navbar2 from './components/Navbar/Navbar2'
import Navbar3 from './components/Navbar/Navbar3'
import Navbar4 from './components/Navbar/Navbar4'
import Navbar5 from './components/Navbar/Navbar5'
import Navbar6 from './components/Navbar/Navbar6'
import Navbar7 from './components/Navbar/Navbar7'
import Navbar8 from './components/Navbar/Navbar8'
import Navbar9 from './components/Navbar/Navbar9'
import Navbar10 from './components/Navbar/Navbar10'
import ErrorPage from './ErrorPage.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <PageNav />,
  },
  {
    path: "/navbar1",
    element: <Navbar1 />,
  },
  {
    path: "/navbar2",
    element: <Navbar2 />,
  },
  {
    path: "/navbar3",
    element: <Navbar3 />,
  },
  {
    path: "/navbar4",
    element: <Navbar4 />,
  },
  {
    path: "/navbar5",
    element: <Navbar5 />,
  },
  {
    path: "/navbar6",
    element: <Navbar6 />,
  },
  {
    path: "/navbar7",
    element: <Navbar7 />,
  },
  {
    path: "/navbar8",
    element: <Navbar8 />,
  },
  {
    path: "/navbar9",
    element: <Navbar9 />,
  },
  {
    path: "/navbar10",
    element: <Navbar10 />,
  },
  {
    path: "*",
    element: <ErrorPage />, 
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
