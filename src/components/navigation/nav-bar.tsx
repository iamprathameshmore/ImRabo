import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SideNavigation from "./side-nav";
import ProfileModal from "../modal/profilemodal";
import { FaBell, FaQuestionCircle, FaBug } from "react-icons/fa";

// TypeScript type for User object
interface User {
  name: string;
  company: string;
  profilePicture: string;
}

const NavigationBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize user data
  const [user] = useState<User>({
    name: "Prathamesh More",
    company: "Bugs and Glitches",
    profilePicture:
      "https://photos.wellfound.com/users/18320732-medium_jpg?1723330532",
  });

  // Function to toggle the sidebar
  const toggleSwitch = () => {
    setOpen(!open);
  };

  // Function to close the sidebar when clicking outside
  const handleClose = () => {
    setOpen(false);
  };

  // Toggle profile modal visibility
  const toggleProfileModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const location = useLocation();

  // Split the pathname into path segments
  const pathSegments = location.pathname
    .split("/")
    .filter((item) => item !== "");

  // Generate breadcrumb items
  const breadcrumbItems = pathSegments.map((segment, index) => {
    // Create the path for each segment dynamically
    const linkPath = "/" + pathSegments.slice(0, index + 1).join("/");
    // Capitalize the first letter of each segment
    const segmentLabel = segment.charAt(0).toUpperCase() + segment.slice(1);
    return { label: segmentLabel, path: linkPath };
  });

  return (
    <div className="w-full p-3 bg-zinc-50 border-b-2">
      <div className="w-full flex justify-between items-center">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleSwitch} className="text-black p-2 rounded-md bg-gray-200">
            <img
              src="https://avatars.githubusercontent.com/u/176706430?s=200&v=4"
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
          </button>
        </div>

        {/* Breadcrumbs */}
        <div className="hidden lg:block text-gray-500 w-full lg:w-auto gap-3 ml-5">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          {breadcrumbItems.map((item, index) => (
            <span key={index}>
              {" > "}
              <Link to={item.path} className="text-blue-600 hover:underline">
                {item.label}
              </Link>
            </span>
          ))}
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex w-auto flex-grow justify-center items-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-3/4 sm:w-1/2 p-2 border rounded-md shadow-sm focus:outline-none"
          />
        </div>

        {/* Right Section - Icons and Profile */}
        <div className="flex gap-4 items-center lg:gap-2">
          <button className="p-2 rounded-lg hover:bg-zinc-200">
            <FaBell className="text-xl text-gray-600" />
          </button>
          <div className="hidden lg:block">
            <button className="p-2 rounded-lg hover:bg-zinc-200">
              <FaQuestionCircle className="text-xl text-gray-600" />
            </button>
          </div>
          <div className="hidden lg:block">
            <button className="p-2 rounded-lg hover:bg-zinc-200">
              <FaBug className="text-xl text-gray-600" />
            </button>
          </div>

          {/* User Profile */}
          <div
            className="flex gap-2 items-center cursor-pointer hover:bg-zinc-200 p-2 rounded-lg transition duration-300"
            onClick={toggleProfileModal}
          >
            <img
              src={user.profilePicture}
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
            <div className="hidden lg:block">
              <p className="text-xs font-semibold">{user.name}</p>
              <p className="text-xs">{user.company}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Drawer for Mobile */}
      {open && (
        <>
          {/* Overlay for closing sidebar */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
            onClick={handleClose}
          ></div>

          {/* Sidebar Drawer */}
          <div className="fixed top-0 left-0 h-screen w-72 bg-gray-200 z-50 lg:hidden transform translate-x-0 transition-transform duration-300 ease-in-out">
            <SideNavigation />
            <button
              onClick={toggleSwitch}
              className="absolute top-2 right-2 text-black mt-4 mr-3"
            >
              Close
            </button>
          </div>
        </>
      )}

      {/* Profile Modal */}
      <ProfileModal
        open={isModalOpen}
        handleClose={toggleProfileModal}
        user={user}
        handleUpdateProfile={() => {
          // Handle profile update logic here
        }}
      />
    </div>
  );
};

export default NavigationBar;
