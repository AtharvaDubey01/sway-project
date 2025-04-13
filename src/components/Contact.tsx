import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';
import { NEWSLETTER_TEMPLATE } from '@/lib/emailjs-templates';
const Contact = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    try {
      const {
        serviceId,
        templateId,
        publicKey
      } = NEWSLETTER_TEMPLATE;
      const templateParams = {
        to_email: email,
        to_name: email.split('@')[0],
        // Simple name extraction from email
        message: 'Thank you for subscribing to our newsletter! Were excited to share exclusive offers and updates with you.'
      };
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
        variant: "default"
      });
      setEmail('');
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "There was a problem subscribing you. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="section">
      <div className="container-custom">
        <div className="bg-yellow/10 rounded-3xl p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Stay Refreshed</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our newsletter for exclusive offers, new flavor alerts, and refreshing content.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1 rounded-full" value={email} onChange={e => setEmail(e.target.value)} required />
              <Button type="submit" className="bg-coral hover:bg-coral/90 rounded-full" disabled={isSubmitting}>
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
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
            <p className="text-gray-600">91+9137930743</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold mb-3">Visit Us</h3>
            <p className="text-gray-600">Thakur Village, kandiwali(E)</p>
            <p className="text-gray-600">Mumbai - 400068</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold mb-3">Follow Us</h3>
            <div className="flex justify-center gap-4 mt-2">
              {['Instagram', 'Twitter', 'Facebook'].map((social, index) => <a key={index} href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-coral hover:text-white transition-colors">
                  {social.charAt(0)}
                </a>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;