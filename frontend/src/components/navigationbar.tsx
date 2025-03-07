
import {  Home, Settings, Zap, Users } from "lucide-react"; // Icons
import { Link } from "react-router-dom";

export default function NavigationBar() {
 

  return (
    <nav className="w-full bg-zinc-50 text-black border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section - Logo & Menu */}
          <div className="flex items-center">
            

            {/* Logo */}
            <Link to="/dashboard" className="flex items-center space-x-2">
              <img
                src="/logo/imrabo-logo.png" // Ensure the correct path
                alt="Imrabo Logo"
                className="w-10 h-10 rounded-full border-gray-300"
              />
              <span className="text-2xl font-bold">Imrabo</span>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6 ml-10">
              <li>
                <Link to="/dashboard" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/integraions" className="hover:text-blue-600">
                  Integrations
                </Link>
              </li>
              <li>
                <Link to="/dashboard/automation" className="hover:text-blue-600">
                  Automation
                </Link>
              </li>
              <li>
                <Link to="/dashboard/settings" className="hover:text-blue-600">
                  Settings
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section - Profile */}
          <Link to="/dashboard/profile" className="flex items-center space-x-3">
            <img
              src="https://github.com/iamprathameshmore.png" // Replace with actual profile image URL
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-gray-300"
            />
            <div className="hidden md:flex flex-col">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs">john@gmail.com</p>
            </div>
          </Link>
        </div>
      </div>

     

      {/* Bottom Navigation Bar for Mobile */}
      <div className="md:hidden fixed bottom-0 w-full bg-zinc-200 border-t flex justify-around py-3">
        <Link to="/dashboard" className="flex flex-col items-center text-gray-700">
          <Home size={20} />
          <span className="text-xs">Home</span>
        </Link>
        <Link to="/dashboard/integrations" className="flex flex-col items-center text-gray-700">
          <Zap size={20} />
          <span className="text-xs">Integrations</span>
        </Link>
        <Link to="/dashboard/automation" className="flex flex-col items-center text-gray-700">
          <Users size={20} />
          <span className="text-xs">Automation</span>
        </Link>
        <Link to="/dashboard/settings" className="flex flex-col items-center text-gray-700">
          <Settings size={20} />
          <span className="text-xs">Settings</span>
        </Link>
      </div>
    </nav>
  );
}
