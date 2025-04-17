
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

const CustomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-navy">SWAY</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => handleNavClick('products')} className="nav-link">Products</button>
          <button onClick={() => handleNavClick('benefits')} className="nav-link">Benefits</button>
          <button onClick={() => handleNavClick('story')} className="nav-link">Our Story</button>
          <button onClick={() => handleNavClick('contact')} className="nav-link">Contact</button>
          <Link to="/cart" className="nav-link flex items-center">
            <ShoppingCart className="h-4 w-4 mr-1" />
            Cart
          </Link>
        </nav>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-navy" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-md">
          <div className="flex flex-col space-y-4">
            <button onClick={() => handleNavClick('products')} className="nav-link">Products</button>
            <button onClick={() => handleNavClick('benefits')} className="nav-link">Benefits</button>
            <button onClick={() => handleNavClick('story')} className="nav-link">Our Story</button>
            <button onClick={() => handleNavClick('contact')} className="nav-link">Contact</button>
            <Link to="/cart" className="nav-link flex items-center">
              <ShoppingCart className="h-4 w-4 mr-1" />
              Cart
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default CustomNavbar;
