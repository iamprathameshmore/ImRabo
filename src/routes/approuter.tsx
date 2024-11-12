import React from "react";
import { createBrowserRouter, RouterProvider, RouteObject } from "react-router-dom";

import SignUp from "../pages/auth/sign_up";
import SignIn from "../pages/auth/sign_in";
import HomeScreen from "../pages/home";
import DashboardLayout from "../layout/dashboard-layout";
import Dashboard from "../pages/dashboard/dashboard";
import Resources from "../pages/dashboard/resources";
import Users from "../pages/dashboard/users";
import Organization from "../pages/dashboard/organization";
import Teams from "../pages/dashboard/team";
import Project from "../pages/dashboard/project";
import Courses from "../pages/dashboard/croues";

const AppRouter: React.FC = () => {
  // Define route objects using TypeScript types
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <HomeScreen />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { path: "", element: <Dashboard /> },
        { path: "resources", element: <Resources /> },
        { path: "organization", element: <Organization /> },
        { path: "project", element: <Project /> },
        { path: "courses", element: <Courses /> },
        { path: "teams", element: <Teams /> },
        { path: "users", element: <Users /> },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return (
    <>
      {/* RouterProvider to render the routes */}
      <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
    </>
  );
};

export default AppRouter;
