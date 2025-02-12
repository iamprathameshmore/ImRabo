import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-transparent text-white flex flex-col items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-screen object-cover -z-10 opacity-80"
      >
        <source src="/210424.mp4" type="video/mp4" />
      </video>

      {/* Navigation */}
      <header className="w-full max-w-7xl px-6 md:px-12 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Imrabo</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="hover:text-gray-300">Features</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </nav>
        <div className="flex space-x-4">
          <Link to="/log-in" className="px-4 py-2 bg-white text-black font-semibold shadow hover:shadow-lg transition">
            Log In
          </Link>
          <Link to="/sign-up" className="px-4 py-2 bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-500 transition">
            Sign Up
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center max-w-4xl px-6 py-20">
        <h2 className="text-5xl font-extrabold tracking-tight">The Future of AI & IoT</h2>
        <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
          Imrabo seamlessly merges Artificial Intelligence with the Internet of Things, creating a smarter, more connected world.
        </p>
        <Link to="/get-started" className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-500 transition inline-block">
          Get Started
        </Link>
      </section>

      {/* Features */}
      <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 md:px-12 py-16">
        {(["AI Automation", "IoT Integration", "Real-time Insights"] as const).map((feature, index) => (
          <div key={index} className="p-6 bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition transform">
            <h3 className="text-xl font-semibold text-white">{feature}</h3>
            <p className="text-gray-400 mt-2">
              Cutting-edge technology that enhances efficiency and connectivity.
            </p>
          </div>
        ))}
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl text-center px-6 md:px-12 py-16">
        <h2 className="text-3xl font-bold">About Imrabo</h2>
        <p className="text-lg text-gray-300 mt-4">
          At the forefront of AI and IoT convergence, Imrabo offers intelligent solutions for businesses and everyday applications.
        </p>
      </section>

      {/* Footer */}
      <footer className="w-full text-gray-500 text-sm text-center py-6 border-t border-gray-700 bg-black">
        <p>&copy; 2025 Imrabo. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">GitHub</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;