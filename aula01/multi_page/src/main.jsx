import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//react router
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './index.css'
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import { Main } from './layout/main/Main';
import Blog from './pages/Blog/Blog';
// import App from './App.jsx'

const router = createBrowserRouter([
{
  element: <Main/>,
  children: [
    {path: "/", element: <Home />},
    {path: "/sobre", element: <Sobre />},
    {path: "/blog", element: <Blog />},
  ]
}

  // {
  //   path: "/",
  //   element: <Home />
  // },
  // {
  //   path: "sobre",
  //   element: <Sobre />
  // }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <RouterProvider router={router} />,
  </StrictMode>,
)
