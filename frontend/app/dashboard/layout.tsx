"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { GithubIcon, SunIcon, MoonIcon, SearchIcon, UserIcon, LogOutIcon, SettingsIcon, BellIcon } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState<number>(3); // Example notification count

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      router.replace("/log-in");
      return;
    }

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }

    setLoading(false);
  }, [router]);

  const toggleTheme = () => {
    if (isDarkMode === null) return;
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    router.replace("/log-in");
  };

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <header className="border-b-2 border-blue-500 bg-white dark:bg-black">
        <div className="flex justify-between items-center p-4 flex-wrap md:flex-nowrap lg:mx-16">
          <div className="flex items-center space-x-4 md:space-x-6 w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center space-x-2">
              <GithubIcon className="h-6 w-6 text-blue-500" />
              <h1 className="text-xl font-semibold">Imrabo</h1>
            </div>
            <nav className="hidden md:flex space-x-4 text-sm font-medium text-black dark:text-white">
              {[
                { title: "Home", href: "/dashboard" },
                { title: "Automation", href: "/dashboard/automation" },
                { title: "Devices", href: "/dashboard/devices" },
                { title: "Integration", href: "/dashboard/integration" },
              ].map(({ title, href }) => (
                <Link key={href} href={href} className="hover:text-blue-500">
                  {title}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-end mt-4 md:mt-0">
            <div className="relative w-full lg:w-auto hidden lg:block">
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-2 w-full md:w-60 rounded-lg border border-blue-500 bg-white dark:bg-black text-black dark:text-white"
              />
              <SearchIcon className="absolute right-3 top-2.5 h-4 w-4 text-blue-500" />
            </div>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <SearchIcon className="h-4 w-4 text-blue-500" />
            </Button>

            {/* Notification Icon */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <BellIcon className="h-5 w-5 text-blue-500" />
                  {notifications > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      {notifications}
                    </span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-white dark:bg-black border border-blue-500">
                <DropdownMenuItem>
                  <span className="text-black dark:text-white">New Alert: Device Offline</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="text-black dark:text-white">Automation Updated</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="text-black dark:text-white">Integration Successful</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDarkMode ? <SunIcon className="h-5 w-5 text-blue-500" /> : <MoonIcon className="h-5 w-5 text-blue-500" />}
            </Button>

            {/* User Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <UserIcon className="h-6 w-6 text-blue-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-white dark:bg-black border border-blue-500">
                <DropdownMenuItem>
                  <Link href="/profile" className="flex items-center space-x-2 w-full text-black dark:text-white">
                    <UserIcon className="w-4 h-4 text-blue-500" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/settings" className="flex items-center space-x-2 w-full text-black dark:text-white">
                    <SettingsIcon className="w-4 h-4 text-blue-500" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} className="text-red-500">
                  <LogOutIcon className="w-4 h-4 text-blue-500" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-1 mx-8 lg:mx-14 my-6">{children}</main>
      <footer className="w-full bg-white dark:bg-black py-6">
        <div className="max-w-screen-xl mx-auto px-6 xl:px-0 text-center">
          <span className="text-sm">
            &copy; {new Date().getFullYear()} Created By
            <Link href="/" passHref>
              <Button variant="link" rel="noopener noreferrer" className="hover:underline text-blue-500">
                @iamprathameshmore
              </Button>
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
