
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <div className="bg-yellow/10 rounded-3xl p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Stay Refreshed</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our newsletter for exclusive offers, new flavor alerts, and refreshing content.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 rounded-full" 
                required
              />
              <Button className="bg-coral hover:bg-coral/90 rounded-full">Subscribe</Button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4">
              By subscribing, you agree to receive marketing emails from us. 
              No worries, we don't spam.
            </p>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-3">Contact Us</h3>
            <p className="text-gray-600">hello@refreshdrinks.com</p>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold mb-3">Visit Us</h3>
            <p className="text-gray-600">123 Beverage Avenue</p>
            <p className="text-gray-600">New York, NY 10001</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold mb-3">Follow Us</h3>
            <div className="flex justify-center gap-4 mt-2">
              {['Instagram', 'Twitter', 'Facebook'].map((social, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-coral hover:text-white transition-colors"
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
