import { useEffect, useState } from "react";
import { Zap, Plug, Menu } from "lucide-react";


export default function IntegrationAutomation() {
  const [activeTab, setActiveTab] = useState("integrations");
  const [menuOpen, setMenuOpen] = useState(false);

   useEffect(() => {
      document.title = "Integration";
      
    }, []);

  return (
   <>
   
    <div className=" mx-auto p-4 md:p-8 bg-zinc-50 min-h-screen border border-gray-200">
      <h1 className="text-2xl font-bold mb-4">Integration & Automation</h1>

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
          } md:block md:w-1/4 bg-white dark:bg-gray-900 p-4 rounded-md border border-gray-200`}
        >
          <button
            onClick={() => {
              setActiveTab("integrations");
              setMenuOpen(false);
            }}
            className={`flex w-full items-center px-3 py-2 rounded-md mb-2 ${
              activeTab === "integrations" ? "bg-gray-200 dark:bg-gray-700" : ""
            }`}
          >
            <Plug size={18} className="mr-2" />
            Integrations
          </button>
          <button
            onClick={() => {
              setActiveTab("automation");
              setMenuOpen(false);
            }}
            className={`flex w-full items-center px-3 py-2 rounded-md mb-2 ${
              activeTab === "automation" ? "bg-gray-200 dark:bg-gray-700" : ""
            }`}
          >
            <Zap size={18} className="mr-2" />
            Automation
          </button>
        </div>

        {/* Content Section */}
        <div className="md:w-3/4 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full border border-gray-200">
          {activeTab === "integrations" && (
            <div>
              <h2 className="text-lg font-semibold">Connected Integrations</h2>
              <div className="mt-4 space-y-4">
                <div className="p-4 border border-gray-200 rounded-md flex justify-between">
                  <div>
                    <h3 className="font-medium">Google Drive</h3>
                    <p className="text-sm text-gray-600">Sync your files automatically</p>
                  </div>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md">Disconnect</button>
                </div>
                <div className="p-4 border border-gray-200 rounded-md flex justify-between">
                  <div>
                    <h3 className="font-medium">Slack</h3>
                    <p className="text-sm text-gray-600">Receive notifications on Slack</p>
                  </div>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md">Disconnect</button>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-2 w-full">
                  Add Integration
                </button>
              </div>
            </div>
          )}

          {activeTab === "automation" && (
            <div>
              <h2 className="text-lg font-semibold">Automation Rules</h2>
              <div className="mt-4 space-y-4">
                <div className="p-4 border border-gray-200 rounded-md flex justify-between">
                  <div>
                    <h3 className="font-medium">Auto-Reply Emails</h3>
                    <p className="text-sm text-gray-600">Send an auto-reply when receiving new emails</p>
                  </div>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md">Enable</button>
                </div>
                <div className="p-4 border border-gray-200 rounded-md flex justify-between">
                  <div>
                    <h3 className="font-medium">Daily Reports</h3>
                    <p className="text-sm text-gray-600">Generate and send reports every morning</p>
                  </div>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md">Enable</button>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-2 w-full">
                  Create Automation
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
   </>
  );
}
