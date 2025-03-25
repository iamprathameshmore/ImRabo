"use client"

import { GithubIcon, SunIcon, MoonIcon, SearchIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import Footer05Page from "@/components/custom/dashboard/footer";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <div className="border-b-2 border-gray-100">
        <header className="flex justify-between items-center p-2  bg-white dark:bg-gray-900 flex-wrap md:flex-nowrap lg:mx-16">
          {/* Left Side: Logo & Navigation */}
          <div className="flex items-center space-x-4 md:space-x-6 w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center space-x-2">
              <GithubIcon className="h-6 w-6" />
              <h1 className="text-xl font-semibold dark:text-white">Imrabo</h1>
            </div>
            <nav className="hidden md:flex space-x-4 text-sm font-medium text-gray-100">
              {[
                { title: "Home", href: "/dashboard" },
                { title: "Automation", href: "/dashboard/automation" },
                { title: "Devices", href: "/dashboard/devices" },
                { title: "Integration", href: "/dashboard/integration" },
              ].map(({ title, href }) => (
                <Link key={href} href={href} className="text-gray-500 dark:text-gray-100 hover:text-primary">
                  {title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Side: Search, Theme Toggle, Avatar */}
          <div className="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-end mt-4 md:mt-0">
            {/* Search Bar */}
            <div className="relative w-full lg:w-auto lg:block hidden">
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-2 w-full md:w-60 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
              <SearchIcon className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <Button variant='ghost' size='icon' className="lg:hidden"><SearchIcon className=" h-4 w-4 text-gray-400 " /></Button>

            {/* Theme Toggle */}
            <Button variant="ghost" size="icon" onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </Button>

            {/* Avatar */}
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center dark:bg-gray-700">
              <UserIcon className="h-6 w-6 text-gray-600 dark:text-gray-200" />
            </div>
          </div>
        </header>
      </div>

      <main className="mx-8 lg:mx-14 my-6">{children}</main>
      <footer className="w-full bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto px-6 xl:px-0">
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-5">
            <span className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()}{" "}
              
              Created By
              <Link href="/" passHref>
                <Button variant='link' rel="noopener noreferrer" className="hover:underline">
                @iamprathameshmore
                </Button>
              </Link>{" "}
            </span>
          </div>
        </div>
      </footer>

    </>
  );
}
