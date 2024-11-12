import BottomNavigationBar from "../components/navigation/bottom-bar";
import NavigationBar from "../components/navigation/nav-bar";
import SideNavigation from "../components/navigation/side-nav";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <>
      <div className="flex w-full h-full">
        {/* Side Navigation (Fixed on large screens) */}
        <div className="hidden lg:block">
          <SideNavigation />
        </div>

        {/* Main Content Section */}
        <div className="w-full flex flex-col h-screen">
          {/* Navigation Bar */}
          <NavigationBar />

          {/* Body Section: Scrollable */}
          <section className="flex-grow overflow-y-auto custom-scrollbar">
            <Outlet /> {/* Correctly render the Outlet here */}
          </section>

          {/* Bottom Navigation (Visible on small screens) */}
          <div className="block lg:hidden">
            <BottomNavigationBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
