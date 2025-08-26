import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//react router
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './index.css'
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
// import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "sobre",
    element: <Sobre />
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <RouterProvider router={router} />,
  </StrictMode>,
)
