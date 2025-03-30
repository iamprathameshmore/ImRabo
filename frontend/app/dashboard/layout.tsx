"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";
import { AppSidebar } from "@/components/custom/dashboard/side-bar";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import {
  BellIcon,
  Search,
  Sun,
  Moon,
  UserCircleIcon,
  CreditCardIcon,
  LogOutIcon,
  MoonIcon,
  SunIcon,
  Settings,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState(3); // Example notifications count

  useEffect(() => {
    // const token = sessionStorage.getItem("token");
    // if (!token) {
    //   router.replace("/log-in");
    //   return;
    // }
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

  // if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <SidebarProvider className="rounded">
      <AppSidebar/>
      <SidebarInset className="rounded">
        <header className="flex h-16 shrink-0 items-center justify-between px-4 border-b border-gray-300 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <SidebarTrigger />
            <Breadcrumb className="hidden md:block">
              <BreadcrumbList>
                {pathSegments.map((segment, index) => {
                  const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
                  const isLast = index === pathSegments.length - 1;
                  const formattedSegment = segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
                  return (
                    <BreadcrumbItem key={href}>
                      {isLast ? (
                        <BreadcrumbPage>{formattedSegment}</BreadcrumbPage>
                      ) : (
                        <>
                          <BreadcrumbLink href={href}>{formattedSegment}</BreadcrumbLink>
                          <BreadcrumbSeparator />
                        </>
                      )}
                    </BreadcrumbItem>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <BellIcon className="h-5 w-5" />
                  {notifications > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      {notifications}
                    </span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>New Alert: Device Offline</DropdownMenuItem>
                <DropdownMenuItem>Automation Updated</DropdownMenuItem>
                <DropdownMenuItem>Integration Successful</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}

            >
              {isDarkMode ? <SunIcon className="h-5 w-5 text-blue-500" /> : <MoonIcon className="h-5 w-5 text-blue-500" />}

            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <UserCircleIcon className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuGroup>
                <Link href={'/dashboard/profile'}>
                  <DropdownMenuItem>
                    <UserCircleIcon /> Profile
                  </DropdownMenuItem>
                  </Link>
                <Link href={'/dashboard/settings'}>
                  <DropdownMenuItem>
                    <Settings /> Settings
                  </DropdownMenuItem>
                  </Link>
                  
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-500">
                  <LogOutIcon /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex flex-col flex-1 p-6">{children}</main>
        <footer className="w-full  dark:bg-black py-6 text-center">
          <span className="text-sm">
            &copy; {new Date().getFullYear()} Created By
            <Link href="/">
              <Button variant="link" className="hover:underline text-blue-500">@iamprathameshmore</Button>
            </Link>
          </span>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  );
}