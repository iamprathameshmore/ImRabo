'use client';

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { GithubIcon, LucideLinkedin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-black text-white">
      <Head>
        <title>Modern Landing Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-4 border-b border-gray-800 bg-black">
        <h1 className="text-2xl font-bold">Imrabo</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          <Link href="#" className="hover:text-gray-400">Home</Link>
          <Link href="#" className="hover:text-gray-400">Features</Link>
          <Link href="#" className="hover:text-gray-400">Pricing</Link>
          <Link href="#" className="hover:text-gray-400">Contact</Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link href="https://app.imrabo.com">
            <Button variant="default">Get Started</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-black py-4 space-y-4 border-b border-gray-800">
          <Link href="#" className="hover:text-gray-400">Home</Link>
          <Link href="#" className="hover:text-gray-400">Features</Link>
          <Link href="#" className="hover:text-gray-400">Pricing</Link>
          <Link href="#" className="hover:text-gray-400">Contact</Link>
          <Link href="https://app.imrabo.com/sign-up">
            <Button>Sign Up</Button>
          </Link>
        </div>
      )}

      {/* Hero Section */}
      <header className="text-center py-32 px-6 md:py-40">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Build for the Future
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
          Scalable, high-performance applications with a seamless developer experience.
        </p>
        <div className="mt-6 flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 md:space-x-4">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </header>

      {/* Features Section */}
      <section className="px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {[
          { title: "🚀 Blazing Fast", description: "Optimized for speed and efficiency." },
          { title: "💡 Developer Friendly", description: "Built with the latest technologies." },
          { title: "📈 Scalable & Secure", description: "Designed to grow with your needs." }
        ].map((feature, index) => (
          <Card key={index}>
            <CardContent className="space-y-3 p-4">
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Footer */}
      <footer className=" py-6 border-t border-gray-800 px-6">
        <p className="text-zinc-100 mt-2 text-xl font-medium">ImRabo</p>
        <div className="flex items-center justify-between">

        <p className="text-xs"> Created by @iamprathameshmore</p>
        <div className="flex justify-center items-center gap-2">
          
          <p className="text-xs mr-2">Contact</p>
          <Button size='icon' variant='link' className="text-white text-xs"><GithubIcon/></Button>
          <Button size='icon' variant='link' className="text-white text-xs"><LucideLinkedin/></Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
