'use client';

import { useState, ReactNode } from "react";
import Head from "next/head";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import { HeadManagerContext } from "next/dist/shared/lib/head-manager-context.shared-runtime";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex min-h-screen bg-black text-white">
        <Head>
          <title>Docs - Your App</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 w-64 bg-gray-900 border-r border-gray-800 p-6 transition-transform md:relative md:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:block`}
        >
          <h2 className="text-xl font-bold mb-6">Documentation</h2>
          <nav className="space-y-4">
            <a href="#" className="block hover:text-gray-400">Introduction</a>
            <a href="#" className="block hover:text-gray-400">Getting Started</a>
            <a href="#" className="block hover:text-gray-400">API Reference</a>
            <a href="#" className="block hover:text-gray-400">Examples</a>
            <a href="#" className="block hover:text-gray-400">FAQ</a>
          </nav>
        </aside>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 p-2 rounded"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Main Content */}
        <main className="flex-1 px-6 md:px-16 py-10 max-w-3xl mx-auto">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
