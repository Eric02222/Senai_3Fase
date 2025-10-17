import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
// import App from './App.jsx'

//import react router
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Login from './pages/Login/Login';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './pages/DashBoard/DashBoard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import DashboardLayout from './layouts/DashboardLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/DashBoard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    )
  }
])

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
    {/* <App /> */}
  </StrictMode>,
)
