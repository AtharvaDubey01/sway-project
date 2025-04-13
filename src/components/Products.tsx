
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
    description: 'Refreshing watermelon flavor with energy boost',
    color: 'bg-red-100',
    image: '/lovable-uploads/50d0cee4-da84-4300-bc39-e7d1f42d082a.png',
    price: 2.99
  },
  {
    id: 2,
    name: 'SWAY Cherry',
    description: 'Sweet cherry flavor with immunity boost',
    color: 'bg-pink-100',
    image: '/lovable-uploads/224006f0-cd3a-4124-acc4-23bf3ab3946b.png',
    price: 2.99
  },
  {
    id: 3,
    name: 'SWAY Lemon Lime',
    description: 'Zesty lemon lime flavor for refreshing energy',
    color: 'bg-green-100',
    image: '/lovable-uploads/bbd3ca53-50ce-45e5-9e6a-0ceffc361178.png',
    price: 2.99
  },
  {
    id: 4,
    name: 'SWAY Mango',
    description: 'Tropical mango flavor with natural energy',
    color: 'bg-yellow-100',
    image: '/lovable-uploads/1d2920c5-40d1-430c-95e0-b0a39cfbb8ec.png',
    price: 2.99
  },
  {
    id: 5,
    name: 'SWAY Orange',
    description: 'Citrus orange flavor for daily energy boost',
    color: 'bg-orange-100',
    image: '/lovable-uploads/da348ffd-6491-448e-9dc4-a1809deb54db.png',
    price: 2.99
  },
  {
    id: 6,
    name: 'SWAY Passion Fruit',
    description: 'Exotic passion fruit flavor with immunity support',
    color: 'bg-purple-100',
    image: '/lovable-uploads/d2e01409-7bc5-45e3-b1ee-cc25c54ef014.png',
    price: 2.99
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
      </div>
    </section>
  );
};

export default Products;
