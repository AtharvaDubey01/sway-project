import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const Hero = () => {
  return <section className="pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
              <span className="text-coral">SWAY</span> Energy For Your Day
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-xl">
              Zero sugar. Full of flavor. Immunity boosting energy drinks that keep you going all day long.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/#products">
                <Button className="btn-primary text-lg py-6 px-8">Shop Now</Button>
              </Link>
              <Link to="/#benefits">
                <Button variant="outline" className="btn-outline text-lg py-6 px-8">Learn More</Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center md:justify-start gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3].map(item => <div key={item} className="w-12 h-12 rounded-full border-2 border-white bg-red-400"></div>)}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-bold">500+</span> 5-star reviews
              </p>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 animate-float">
              <div className="absolute top-[-10%] right-[20%] w-32 h-32 rounded-full bg-coral/20 blur-xl"></div>
              <div className="absolute bottom-[10%] left-[5%] w-40 h-40 rounded-full bg-yellow/30 blur-xl"></div>
              <div className="absolute top-[30%] right-[-5%] w-24 h-24 rounded-full bg-navy/20 blur-xl"></div>
              <img src="/lovable-uploads/224006f0-cd3a-4124-acc4-23bf3ab3946b.png" alt="SWAY Cherry Energy Drink" className="max-w-full h-auto object-contain mx-auto drop-shadow-2xl" style={{
              maxHeight: "500px"
            }} />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;