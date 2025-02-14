import { useEffect, useState } from "react";
import { MapPin, Link as LinkIcon, Star, Github } from "lucide-react";


export default function Profile() {
  const [isBioExpanded, setIsBioExpanded] = useState(false);

  useEffect(() => {
    document.title = "Prathamesh More";
  }, []);

  return (
    <>
      
      <div className=" mx-auto p-4 md:p-8">
        {/* Profile Header */}
        <div className="bg-zinc-50  rounded-lg  p-6 border-gray-200 border">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            {/* Profile Image */}
            <img
              src="https://github.com/iamprathameshmore.png" // Replace with actual profile image URL
              alt="Profile"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-gray-300"
            />

            {/* Profile Details */}
            <div className="mt-4 md:mt-0 md:ml-6">
              <h1 className="text-2xl font-bold">John Doe</h1>
              <p className="text-gray-600 ">@johndoe</p>
              <p className="text-gray-700  text-sm mt-1">
                Software Engineer | Open Source Contributor
              </p>

              {/* Location, Website & Social Links */}
              <div className="mt-3 flex flex-wrap items-center gap-4 text-gray-600 ">
                <div className="flex items-center">
                  <MapPin size={18} className="mr-1" />
                  <span>Pune, India</span>
                </div>
                <a
                  href="https://johndoe.com"
                  className="flex items-center hover:text-blue-600"
                >
                  <LinkIcon size={18} className="mr-1" />
                  johndoe.com
                </a>
                <a
                  href="https://twitter.com/johndoe"
                  className="flex items-center hover:text-blue-600"
                >
                  <Github size={18} className="mr-1" />
                  @johndoe
                </a>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold">About Me</h2>
            <p
              className={`text-gray-700 dark:text-gray-300 ${
                isBioExpanded ? "" : "line-clamp-2"
              }`}
            >
              Passionate about building scalable software solutions. Contributed
              to open-source projects like React and Next.js. Loves
              problem-solving and mentoring developers.
            </p>
            <button
              onClick={() => setIsBioExpanded(!isBioExpanded)}
              className="text-blue-600 mt-1 text-sm focus:outline-none"
            >
              {isBioExpanded ? "Show Less" : "Read More"}
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-zinc-50  p-4 rounded-lg  text-center border-gray-200 border">
            <h3 className="text-xl font-semibold">52</h3>
            <p className="text-gray-600  text-sm">Repositories</p>
          </div>
          <div className="bg-zinc-50  p-4 rounded-lg  text-center border-gray-200 border">
            <h3 className="text-xl font-semibold">1.2k</h3>
            <p className="text-gray-600  text-sm">Followers</p>
          </div>
          <div className="bg-zinc-50  p-4 rounded-lg  text-center border-gray-200 border">
            <h3 className="text-xl font-semibold">200</h3>
            <p className="text-gray-600  text-sm">Following</p>
          </div>
          <div className="bg-zinc-50  p-4 rounded-lg  text-center border-gray-200 border">
            <h3 className="text-xl font-semibold">150</h3>
            <p className="text-gray-600  text-sm">Stars</p>
          </div>
        </div>

        {/* Recent Activity or Projects */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Recent Projects</h2>
          <div className="space-y-3">
            <div className="bg-zinc-50  p-4 rounded-lg  flex justify-between border-gray-200 border">
              <div>
                <h3 className="text-sm font-semibold">React Portfolio</h3>
                <p className="text-xs text-gray-600 ">
                  A modern portfolio template built with React.
                </p>
              </div>
              <div className="flex items-center text-gray-600 ">
                <Star size={16} className="mr-1" />
                <span>25</span>
              </div>
            </div>
            <div className="bg-zinc-50  p-4 rounded-lg  flex justify-between border-gray-200 border">
              <div>
                <h3 className="text-sm font-semibold">Next.js Blog</h3>
                <p className="text-xs text-gray-600 ">
                  A fast and scalable blog built with Next.js.
                </p>
              </div>
              <div className="flex items-center text-gray-600 ">
                <Star size={16} className="mr-1" />
                <span>40</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
