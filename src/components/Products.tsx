
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface Product {
  id: number;
  name: string;
  description: string;
  color: string;
  image: string;
  price: number;
}

const productData: Product[] = [
  {
    id: 1,
    name: 'Citrus Burst',
    description: 'A zesty blend of lemon, lime, and orange',
    color: 'bg-yellow/10',
    image: 'https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?q=80&w=1374&auto=format&fit=crop',
    price: 3.99
  },
  {
    id: 2,
    name: 'Berry Bliss',
    description: 'Sweet and tart mixed berries flavor',
    color: 'bg-coral/10',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1374&auto=format&fit=crop',
    price: 3.99
  },
  {
    id: 3,
    name: 'Cucumber Mint',
    description: 'Cool and refreshing cucumber with a hint of mint',
    color: 'bg-[#A1D6E2]/10',
    image: 'https://images.unsplash.com/photo-1591735179859-a49991df5d56?q=80&w=1374&auto=format&fit=crop',
    price: 3.99
  },
  {
    id: 4,
    name: 'Tropical Punch',
    description: 'Exotic blend of pineapple, mango and passion fruit',
    color: 'bg-[#F9A03F]/10',
    image: 'https://images.unsplash.com/photo-1620882133512-5149956b1391?q=80&w=1374&auto=format&fit=crop',
    price: 3.99
  },
  {
    id: 5,
    name: 'Peach Paradise',
    description: 'Sweet peach and nectarine with a hint of honey',
    color: 'bg-[#FFB347]/10',
    image: 'https://images.unsplash.com/photo-1596803244618-8dbee441d70b?q=80&w=1374&auto=format&fit=crop',
    price: 3.99
  },
  {
    id: 6,
    name: 'Watermelon Wave',
    description: 'Refreshing watermelon with a splash of lime',
    color: 'bg-[#FF6B6B]/10',
    image: 'https://images.unsplash.com/photo-1589734575451-5c4c3d91a494?q=80&w=1374&auto=format&fit=crop',
    price: 3.99
  }
];

interface CartItem extends Product {
  quantity: number;
}

const Products = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [addedToCart, setAddedToCart] = useState<{[key: number]: boolean}>({});
  const { toast } = useToast();

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      // Check if product already exists in cart
      const exists = prevCart.find(item => item.id === product.id);
      
      if (exists) {
        // Increase quantity if already in cart
        return prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // Add new product to cart
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    // Show success animation for this product
    setAddedToCart({...addedToCart, [product.id]: true});
    
    // Reset success animation after 1.5 seconds
    setTimeout(() => {
      setAddedToCart({...addedToCart, [product.id]: false});
    }, 1500);

    // Show toast notification
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  // Calculate total number of items in cart
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <section id="products" className="section bg-gray-50 py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Discover Our Flavors</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each flavor is carefully crafted using real ingredients, natural flavors, and zero added sugar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productData.map((product) => (
            <div 
              key={product.id}
              className={`product-card ${product.color} relative overflow-hidden`}
            >
              <div className="mb-6 h-64 flex items-center justify-center overflow-hidden group">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-image h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-lg font-bold text-navy mb-4">${product.price.toFixed(2)}</p>
              <Button 
                className="w-full bg-coral hover:bg-coral/90 transition-all duration-300"
                onClick={() => addToCart(product)}
                disabled={addedToCart[product.id]}
              >
                {addedToCart[product.id] ? (
                  <span className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Added!
                  </span>
                ) : (
                  <span className="flex items-center">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </span>
                )}
              </Button>
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
