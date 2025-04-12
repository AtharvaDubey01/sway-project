
import React from 'react';
import CustomNavbar from '@/components/CustomNavbar';
import Footer from '@/components/Footer';
import ImageGenerator from '@/components/ImageGenerator';

const CanGenerator = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomNavbar />
      <main className="flex-grow py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Can Image Generator</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Generate custom can designs using AI. Enter your Runware API key and create realistic product images.
            </p>
          </div>
          <ImageGenerator />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CanGenerator;
