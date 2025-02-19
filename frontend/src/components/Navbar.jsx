import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar fixed w-full z-50 top-0 backdrop-blur-md border-b border-cyan-500/20 bg-gradient-to-b from-black/80 to-transparent">
      {/* Space Background for Navbar */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="random-stars"></div>
        <div className="constellations"></div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              MUJ Central
            </span>
            <div className="h-2 w-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="nav-link text-sm font-medium relative group">
              <span className="text-white hover:text-cyan-400 transition-colors duration-300">Home</span>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#" className="nav-link text-sm font-medium relative group">
              <span className="text-white hover:text-cyan-400 transition-colors duration-300">Resources</span>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#" className="nav-link text-sm font-medium relative group">
              <span className="text-white hover:text-cyan-400 transition-colors duration-300">About</span>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
            </a>
            <button className="px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-cyan-500/20 hover:shadow-lg">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="pt-4 pb-6 space-y-4">
            <a href="#" className="block text-cyan-300 hover:text-cyan-400 text-lg transition-colors duration-200">Home</a>
            <a href="#" className="block text-cyan-300 hover:text-cyan-400 text-lg transition-colors duration-200">Resources</a>
            <a href="#" className="block text-cyan-300 hover:text-cyan-400 text-lg transition-colors duration-200">About</a>
            <button className="w-full py-3 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-lg border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;