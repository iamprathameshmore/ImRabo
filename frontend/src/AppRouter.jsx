import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ImraboHome from './pages/Home';


import Login from './pages/auth/loginpage';
import Verification from './pages/auth/verifiication';
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
      element: <Login />,
    },
    {
      path: "/verification",
      element: <Verification />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRouter;
