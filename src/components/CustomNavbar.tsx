
import React from 'react';
import { Link } from 'react-router-dom';
import { Wand2 } from 'lucide-react';

const CustomNavbar = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-navy">Refresh</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link">Home</Link>
          <a href="/#products" className="nav-link">Products</a>
          <a href="/#benefits" className="nav-link">Benefits</a>
          <a href="/#story" className="nav-link">Our Story</a>
          <a href="/#contact" className="nav-link">Contact</a>
          <Link to="/can-generator" className="nav-link flex items-center">
            <Wand2 className="h-4 w-4 mr-1" />
            Can Generator
          </Link>
        </nav>
        
        <div className="md:hidden">
          <button className="text-navy">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default CustomNavbar;
