import React from 'react';
const Footer = () => {
  return <footer className="bg-dark text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">SWAY</h3>
            <p className="text-gray-400">
              Redefining refreshment with real ingredients and zero sugar.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Shop</h4>
            <ul className="space-y-2">
              {['All Flavors', 'Bestsellers', 'Bundles', 'Gift Cards'].map((item, index) => <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Our Story', 'Careers', 'Press'].map((item, index) => <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Help</h4>
            <ul className="space-y-2">
              {['FAQ', 'Shipping', 'Returns', 'Contact'].map((item, index) => <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Refresh Beverages. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            {['Terms', 'Privacy', 'Cookies'].map((item, index) => <a key={index} href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                {item}
              </a>)}
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;