
import React from 'react';
import { Droplets, Banana, HeartPulse, Leaf } from 'lucide-react';

const benefitsData = [
  {
    icon: <Droplets className="h-8 w-8 text-coral" />,
    title: 'Hydrating',
    description: 'Stay refreshed and hydrated with our perfectly balanced formula.'
  },
  {
    icon: <Banana className="h-8 w-8 text-coral" />,
    title: 'Real Ingredients',
    description: 'Made with real fruit extracts and natural flavors.'
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-coral" />,
    title: 'Zero Sugar',
    description: 'Enjoy full flavor with no added sugar or artificial sweeteners.'
  },
  {
    icon: <Leaf className="h-8 w-8 text-coral" />,
    title: 'Plant-Based',
    description: 'Vegan-friendly and made with sustainable ingredients.'
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're not just another sparkling water. Here's what makes us different.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-cream rounded-2xl p-4 inline-block mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-coral/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img 
              src="/lovable-uploads/strawberry.jpg"
              alt="Fresh strawberry ingredients" 
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Made with the Finest Ingredients</h3>
            <p className="text-lg mb-6">
              We source only the highest quality ingredients for our beverages. Each can contains natural extracts, purified sparkling water, and nothing artificial.
            </p>
            <ul className="space-y-3">
              {['No artificial flavors', 'No added sugars', 'No preservatives', 'Gluten-free & vegan'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-coral text-white flex items-center justify-center mr-3">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
