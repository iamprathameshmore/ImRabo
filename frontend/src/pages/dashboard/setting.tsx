import { useEffect, useState } from "react";
import { Lock, Bell, User, PaintBucket, Menu } from "lucide-react";


export default function Settings() {
  const [activeTab, setActiveTab] = useState("account");
  const [menuOpen, setMenuOpen] = useState(false);


   useEffect(() => {
        document.title = "Settings";
        
      }, []);

  return (
    <>
    
    <div className="mx-auto p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-3"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Menu size={20} className="mr-2" />
        {menuOpen ? "Close" : "Open"} Menu
      </button>

      {/* Sidebar - Responsive Tabs */}
      <div className="md:flex md:space-x-4">
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:block md:w-1/4 bg-gray-100 dark:bg-gray-800 p-4 rounded-md`}
        >
          <button
            onClick={() => {
              setActiveTab("account");
              setMenuOpen(false);
            }}
            className={`flex w-full items-center px-3 py-2 rounded-md mb-2 ${
              activeTab === "account" ? "bg-gray-200 dark:bg-gray-700" : ""
            }`}
          >
            <User size={18} className="mr-2" />
            Account
          </button>
          <button
            onClick={() => {
              setActiveTab("security");
              setMenuOpen(false);
            }}
            className={`flex w-full items-center px-3 py-2 rounded-md mb-2 ${
              activeTab === "security" ? "bg-gray-200 dark:bg-gray-700" : ""
            }`}
          >
            <Lock size={18} className="mr-2" />
            Security
          </button>
          <button
            onClick={() => {
              setActiveTab("notifications");
              setMenuOpen(false);
            }}
            className={`flex w-full items-center px-3 py-2 rounded-md mb-2 ${
              activeTab === "notifications" ? "bg-gray-200 dark:bg-gray-700" : ""
            }`}
          >
            <Bell size={18} className="mr-2" />
            Notifications
          </button>
          <button
            onClick={() => {
              setActiveTab("appearance");
              setMenuOpen(false);
            }}
            className={`flex w-full items-center px-3 py-2 rounded-md mb-2 ${
              activeTab === "appearance" ? "bg-gray-200 dark:bg-gray-700" : ""
            }`}
          >
            <PaintBucket size={18} className="mr-2" />
            Appearance
          </button>
        </div>

        {/* Content Section */}
        <div className="md:w-3/4 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full">
          {activeTab === "account" && (
            <div>
              <h2 className="text-lg font-semibold">Account Settings</h2>
              <div className="mt-4 space-y-4">
                <div>
                  <label className="text-sm text-gray-600 dark:text-gray-400">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full mt-1 p-2 border rounded-md bg-gray-100 dark:bg-gray-800"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 dark:text-gray-400">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full mt-1 p-2 border rounded-md bg-gray-100 dark:bg-gray-800"
                  />
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-2">Save Changes</button>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div>
              <h2 className="text-lg font-semibold">Security Settings</h2>
              <div className="mt-4 space-y-4">
                <div>
                  <label className="text-sm text-gray-600 dark:text-gray-400">Change Password</label>
                  <input
                    type="password"
                    placeholder="New Password"
                    className="w-full mt-1 p-2 border rounded-md bg-gray-100 dark:bg-gray-800"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 dark:text-gray-400">Two-Factor Authentication</label>
                  <div className="flex items-center mt-1">
                    <input type="checkbox" className="mr-2" />
                    <span>Enable 2FA</span>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-2">Update Security</button>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div>
              <h2 className="text-lg font-semibold">Notification Preferences</h2>
              <div className="mt-4 space-y-4">
                <div>
                  <label className="text-sm text-gray-600 dark:text-gray-400">Email Notifications</label>
                  <div className="flex items-center mt-1">
                    <input type="checkbox" className="mr-2" />
                    <span>Receive emails for activity</span>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-600 dark:text-gray-400">Push Notifications</label>
                  <div className="flex items-center mt-1">
                    <input type="checkbox" className="mr-2" />
                    <span>Enable push notifications</span>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-2">Save Preferences</button>
              </div>
            </div>
          )}

          {activeTab === "appearance" && (
            <div>
              <h2 className="text-lg font-semibold">Appearance</h2>
              <div className="mt-4 space-y-4">
                <div>
                  <label className="text-sm text-gray-600 dark:text-gray-400">Theme</label>
                  <select className="w-full mt-1 p-2 border rounded-md bg-gray-100 dark:bg-gray-800">
                    <option>Light</option>
                    <option>Dark</option>
                    <option>System Default</option>
                  </select>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-2">Apply Changes</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}
