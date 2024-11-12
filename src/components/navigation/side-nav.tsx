import { Link } from "react-router-dom";

function SideNavigation() {
  // Example data for usage plan and remaining credits
  const remainingCredits = 60; // Example remaining credits (out of 100)
  const usagePercentage = (remainingCredits / 100) * 100;

  return (
    <div className="h-screen w-72 border-r-2 flex flex-col bg-white">
      {/* Top Section */}
      <section className="border-b-2 p-3">
        <div className="flex gap-2 items-center lg:bg-zinc-200 p-2 rounded-md">
          <img
            src="https://avatars.githubusercontent.com/u/176706430?s=200&v=4"
            alt="Profile"
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-xl font-semibold">Im Rabo</p>
          </div>
        </div>
      </section>

      {/* Middle Section (Scrollable) */}
      <section className="flex-grow overflow-y-auto p-4 custom-scrollbar bg-zinc-50">
        {/* Home Section */}
        <div className="w-full flex flex-col items-start mb-6">
          <p className="mb-2 text-xs font-semibold">Home</p>
          <hr className="w-full border-gray-300" />
          <ul className="py-5 px-2 w-full">
            <li className="w-full mb-2">
              <Link to="/dashboard">
                <p className="w-full bg-zinc-200 p-2 rounded hover:bg-zinc-600 transition">
                  Dashboard
                </p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Projects Section */}
        <div className="w-full flex flex-col items-start mb-6">
          <p className="mb-2 text-xs font-semibold">Projects</p>
          <hr className="w-full border-gray-300" />
          <ul className="py-5 px-2 w-full">
            <li className="w-full mb-2">
              <Link to="/dashboard/project">
                <p className="w-full bg-zinc-200 p-2 rounded hover:bg-zinc-600 transition">
                  Dashboard
                </p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Management Section */}
        <div className="w-full flex flex-col items-start mb-6">
          <p className="mb-2 text-xs font-semibold">Management</p>
          <hr className="w-full border-gray-300" />
          <ul className="py-5 px-2 w-full">
            <li className="w-full mb-2">
              <Link to="/dashboard/organization">
                <p className="w-full bg-zinc-200 p-2 rounded hover:bg-zinc-600 transition">
                  Organization
                </p>
              </Link>
            </li>
            <li className="w-full mb-2">
              <Link to="/dashboard/teams">
                <p className="w-full bg-zinc-200 p-2 rounded hover:bg-zinc-600 transition">
                  Teams
                </p>
              </Link>
            </li>
            <li className="w-full mb-2">
              <Link to="/dashboard/users">
                <p className="w-full bg-zinc-200 p-2 rounded hover:bg-zinc-600 transition">
                  Users
                </p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Learn Section */}
        <div className="w-full flex flex-col items-start">
          <p className="mb-2 text-xs font-semibold">Learn</p>
          <hr className="w-full border-gray-300" />
          <ul className="py-5 px-2 w-full">
            <li className="w-full mb-2">
              <Link to="/dashboard/resources">
                <p className="w-full bg-zinc-200 p-2 rounded hover:bg-zinc-600 transition">
                  Resources
                </p>
              </Link>
            </li>
            <li className="w-full mb-2">
              <Link to="/dashboard/courses">
                <p className="w-full bg-zinc-200 p-2 rounded hover:bg-zinc-600 transition">
                  Courses
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Bottom Section with Usage Plan and Remaining Credits */}
      <section className="p-3 text-center border-t-2">
        <p className="text-xs font-semibold mb-2">Section 02 - Usage Plan</p>
        <p className="text-xs mb-4">Remaining Credits: {remainingCredits} / 100</p>
        <div className="w-full bg-zinc-200 rounded-full h-2.5 mb-4">
          <div
            className="bg-blue-500 h-2.5 rounded-full"
            style={{ width: `${usagePercentage}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500">Usage Progress</p>
      </section>
    </div>
  );
}

export default SideNavigation;
