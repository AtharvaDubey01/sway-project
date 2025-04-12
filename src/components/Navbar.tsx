
import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 px-6 bg-cream sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-3xl font-display font-black text-coral">Refresh</a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#products" className="font-medium hover:text-coral transition-colors">Products</a>
          <a href="#benefits" className="font-medium hover:text-coral transition-colors">Benefits</a>
          <a href="#story" className="font-medium hover:text-coral transition-colors">Our Story</a>
          <a href="#contact" className="font-medium hover:text-coral transition-colors">Contact</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 bg-coral text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
          </Button>
          
          <Button className="bg-coral hover:bg-coral/90 hidden md:inline-flex">Shop Now</Button>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg rounded-b-lg p-4 z-50 animate-slide-down">
          <div className="flex flex-col space-y-4">
            <a 
              href="#products" 
              className="font-medium py-2 px-4 hover:bg-coral/10 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a 
              href="#benefits" 
              className="font-medium py-2 px-4 hover:bg-coral/10 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#story" 
              className="font-medium py-2 px-4 hover:bg-coral/10 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Story
            </a>
            <a 
              href="#contact" 
              className="font-medium py-2 px-4 hover:bg-coral/10 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-coral hover:bg-coral/90 w-full">Shop Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
