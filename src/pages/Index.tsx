
import React from 'react';
import CustomNavbar from '@/components/CustomNavbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Benefits from '@/components/Benefits';
import LearnMore from '@/components/LearnMore';
import Reviews from '@/components/Reviews';
import Story from '@/components/Story';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomNavbar />
      <main>
        <Hero />
        <Products />
        <Benefits />
        <LearnMore />
        <Reviews />
        <Story />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
