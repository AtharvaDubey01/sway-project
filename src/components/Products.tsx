
import React from 'react';
import { Button } from '@/components/ui/button';

const productData = [
  {
    id: 1,
    name: 'Citrus Burst',
    description: 'A zesty blend of lemon, lime, and orange',
    color: 'bg-yellow/10',
    image: 'https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?q=80&w=1374&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Berry Bliss',
    description: 'Sweet and tart mixed berries flavor',
    color: 'bg-coral/10',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1374&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Cucumber Mint',
    description: 'Cool and refreshing cucumber with a hint of mint',
    color: 'bg-[#A1D6E2]/10',
    image: 'https://images.unsplash.com/photo-1591735179859-a49991df5d56?q=80&w=1374&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Tropical Punch',
    description: 'Exotic blend of pineapple, mango and passion fruit',
    color: 'bg-[#F9A03F]/10',
    image: 'https://images.unsplash.com/photo-1620882133512-5149956b1391?q=80&w=1374&auto=format&fit=crop'
  }
];

const Products = () => {
  return (
    <section id="products" className="section bg-gray-50 py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Discover Our Flavors</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each flavor is carefully crafted using real ingredients, natural flavors, and zero added sugar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productData.map((product) => (
            <div 
              key={product.id}
              className={`product-card ${product.color}`}
            >
              <div className="mb-6 h-64 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-image"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <Button className="w-full bg-coral hover:bg-coral/90">Add to Cart</Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="outline" className="btn-outline text-lg py-6 px-8">View All Flavors</Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
