
import React, { useState, useEffect } from 'react';
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
    name: 'SWAY Watermelon',
    description: 'Refreshing watermelon flavor with natural energy boost',
    color: 'bg-red-100',
    image: '/lovable-uploads/WATERMELON.png',
    price: 120
  },
  {
    id: 2,
    name: 'SWAY Cherry',
    description: 'Sweet cherry flavor with immunity-boosting properties',
    color: 'bg-pink-100',
    image: '/lovable-uploads/224006f0-cd3a-4124-acc4-23bf3ab3946b.png',
    price: 120
  },
  {
    id: 3,
    name: 'SWAY Lemon Lime',
    description: 'Zesty lemon lime flavor for refreshing daily energy',
    color: 'bg-green-100',
    image: '/lovable-uploads/LEMONLIME.png',
    price: 120
  },
  {
    id: 4,
    name: 'SWAY Mango',
    description: 'Tropical mango flavor with natural energy ingredients',
    color: 'bg-yellow-100',
    image: '/lovable-uploads/MANGO.png',
    price: 120
  },
  {
    id: 5,
    name: 'SWAY Orange',
    description: 'Citrus orange flavor for revitalizing energy boost',
    color: 'bg-orange-100',
    image: '/lovable-uploads/ORANGE.png',
    price: 120
  },
  {
    id: 6,
    name: 'SWAY Passion Fruit',
    description: 'Exotic passion fruit flavor with immunity benefits',
    color: 'bg-purple-100',
    image: '/lovable-uploads/PASSIONFRUIT.png',
    price: 120
  }
];

interface CartItem extends Product {
  quantity: number;
}

const Products = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [addedToCart, setAddedToCart] = useState<{[key: number]: boolean}>({});
  const { toast } = useToast();

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        setCart(parsedCart);
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const event = new CustomEvent('cart-updated', { detail: { count: cartCount } });
    window.dispatchEvent(event);
  }, [cart]);

  const addToCart = (product: Product) => {
    const productToAdd = {...product};
    
    setCart(prevCart => {
      const exists = prevCart.find(item => item.id === productToAdd.id);
      
      if (exists) {
        return prevCart.map(item => 
          item.id === productToAdd.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevCart, { ...productToAdd, quantity: 1 }];
      }
    });

    setAddedToCart(prevState => ({...prevState, [product.id]: true}));
    
    setTimeout(() => {
      setAddedToCart(prevState => ({...prevState, [product.id]: false}));
    }, 1500);

    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <section id="products" className="section bg-gray-50 py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">SWAY Energy Drinks</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Zero sugar, immunity boosting energy drinks with bold flavors and natural ingredients.
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
                  className="product-image h-auto max-h-full w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-lg font-bold text-navy mb-4">₹{product.price}</p>
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
      </div>
    </section>
  );
};

export default Products;
