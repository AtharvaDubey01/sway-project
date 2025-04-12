import React from 'react';
import CustomNavbar from '@/components/CustomNavbar';
import Footer from '@/components/Footer';
import Cart from '@/components/Cart';

const CartPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomNavbar />
      <main className="flex-grow py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Shopping Cart</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Review your items, adjust quantities, or proceed to checkout.
            </p>
          </div>
          <Cart />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;