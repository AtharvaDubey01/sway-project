import React from 'react';
import { Leaf, Droplets, CheckCircle } from 'lucide-react';
const LearnMore = () => {
  return <section id="learn-more" className="section bg-white py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">SWAY- Philosophy</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 bg-coral/10 p-3 rounded-full">
                  <Leaf className="h-6 w-6 text-coral" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Natural Ingredients</h3>
                  <p className="text-gray-600">
                    We use only real fruit extracts and natural flavors. No artificial sweeteners,
                    colors, or preservatives ever.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-navy/10 p-3 rounded-full">
                  <Droplets className="h-6 w-6 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Zero Sugar</h3>
                  <p className="text-gray-600">
                    Enjoy the perfect balance of flavor without any added sugar or calories.
                    Just clean, refreshing hydration.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-yellow/10 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-yellow" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Sustainable Packaging</h3>
                  <p className="text-gray-600">
                    Our cans are made from recycled aluminum and are 100% recyclable.
                    We're committed to reducing our environmental footprint.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="/lovable-uploads/can factory.jpg" alt="Can Factory" className="rounded-2xl shadow-lg h-64 w-full object-cover" />
              <img src="/lovable-uploads/no sugar.jpg" alt="No Sugar" className="rounded-2xl shadow-lg h-48 w-full object-cover" />
            </div>
            <div className="space-y-4 mt-8">
              <img src="https://images.unsplash.com/photo-1603569283847-aa295f0d016a?q=80&w=1472&auto=format&fit=crop" alt="Zero sugar" className="rounded-2xl shadow-lg h-48 w-full object-cover" />
              <img src="/lovable-uploads/oranges pic.jpg" alt="Refreshing drinks" className="rounded-2xl shadow-lg h-64 w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default LearnMore;