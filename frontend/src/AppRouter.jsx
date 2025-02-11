import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ImraboHome from './pages/Home';
import LogIn from './pages/auth/login'; // Ensure correct capitalization
import Verification from './pages/auth/Verification'; // Fix typo
import SignUp from './pages/auth/SignUp';

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ImraboHome />,
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
