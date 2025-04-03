"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AppSidebar } from "@/components/custom/dashboard/side-bar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import {
  SunIcon,
  MoonIcon,
  UserCircleIcon,
  Settings,
  LogOutIcon,
  UserRoundIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  // const token = sessionStorage.removeItem("token");
  
  useEffect(() => {
     
    // if(token == null) return router.replace("/")

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
    router.replace("/");
  };

  if (loading) return <div className="flex justify-center items-center h-screen bg-zinc-300 dark:bg-zinc-800">Loading...</div>;

  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <SidebarProvider className="rounded">
      <AppSidebar />
      <SidebarInset className="rounded">
        <header className="flex h-16 shrink-0 items-center justify-between px-4 border-b border-gray-300 dark:border-gray-700">
          <div className="flex items-center gap-2 justify-center">
            <SidebarTrigger  className="dark:text-white"/>
            <Breadcrumb className="hidden md:block mt-0.5">
              <BreadcrumbList>
                {pathSegments.map((segment, index) => {
                  const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
                  const isLast = index === pathSegments.length - 1;
                  const formattedSegment = segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
                  return (
                    <BreadcrumbItem key={href}>
                      {isLast ? (
                        // <BreadcrumbPage>{formattedSegment}</BreadcrumbPage>
                        <Button size='sm' variant='link' className="dark:text-white text-black">{formattedSegment}</Button>
                      ) : (
                        <>
                         <Link href={href}><Button size='sm' variant='link' className="dark:text-zinc-400 text-zinc-700">{formattedSegment}</Button></Link>
                          {/* Avoid nested <li> tags and use a non-<li> separator */}
                          <span className="mx-2">/</span>
                        </>
                      )}
                    </BreadcrumbItem>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDarkMode ? <SunIcon className="h-5 w-5 text-blue-500" /> : <MoonIcon className="h-5 w-5 text-blue-500" />}
            </Button>
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <UserRoundIcon  className="h-14 w-14 dark:text-white" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuGroup>
                  <Link href="/dashboard/profile">
                    <DropdownMenuItem>
                      <UserCircleIcon /> Profile
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/dashboard/settings">
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
            </DropdownMenu> */}
              <Link href={'/dashboard/profile'}>   <Button variant="ghost" size="icon" className="rounded-full">
                  <UserRoundIcon  className="h-14 w-14 dark:text-white" />
                </Button></Link>
          </div>
        </header>
        <main className="flex flex-col flex-1 p-6">{children}</main>
        <footer className="w-full  dark:bg-black py-6 text-center">
          <span className="text-sm dark:text-white">
            &copy; {new Date().getFullYear()} Created By
            <Link href="https://www.linkedin.com/in/iamprathameshmore/" target="_blank">
              <span className="hover:underline text-blue-500 ml-2">@iamprathameshmore</span>
            </Link>
          </span>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  );
}
