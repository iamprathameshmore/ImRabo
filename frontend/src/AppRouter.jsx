import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './pages/auth/SignUp';
import LogIn from './pages/auth/login';
import Verification from './pages/auth/verifiication';
import HomePage from './pages/Home';
import ImraboHome from './pages/Home';

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ImraboHome/>,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/log-in",
      element: <LogIn />,
    },
    {
      path: "/verification",
      element: <Verification />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRouter;
