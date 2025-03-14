import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signup";
import Verification from "./pages/auth/verification";
import Dashboard from "./pages/dashboard/dashboard";
import Profile from "./pages/dashboard/profile";
import DashboardLayout from "./layout/dashboardlayout";
import Settings from "./pages/dashboard/setting";
import IntegrationAutomation from "./pages/dashboard/Integration";
import AutomationScreen from "./pages/dashboard/automation";




const router = createBrowserRouter([

  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/verification",
    element: <Verification />,
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "integraions",
        element: <IntegrationAutomation />,
      },
      {
        path: "automation",
        element: <AutomationScreen />,
      },

    ],
  },

]);

const AppRouter: React.FC = () => {

  return <>


    <RouterProvider router={router} />;
  </>
};

export default AppRouter;
