import { Outlet } from "react-router-dom"; 
import NavigationBar from "../components/navigationbar"; 

export default function DashboardLayout() {
  return (
    <div>
      <header>
        <NavigationBar />
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Outlet /> 
      </main>
    </div>
  );
}
