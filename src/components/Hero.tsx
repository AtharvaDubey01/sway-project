
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, ChevronRight } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'; 
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

// Customer review data with images and ratings
const customerReviews = [
  {
    id: 1,
    name: 'Sarah M.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop',
    rating: 5,
    comment: "I love the Cherry flavor! It's my new favorite energy drink."
  },
  {
    id: 2,
    name: 'James L.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop',
    rating: 5,
    comment: "The Lemon Lime is so refreshing after my workout."
  },
  {
    id: 3,
    name: 'Emily R.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1374&auto=format&fit=crop',
    rating: 5,
    comment: "Zero sugar but full flavor - just what I needed!"
  },
  {
    id: 4,
    name: 'Michael T.',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1374&auto=format&fit=crop',
    rating: 5,
    comment: "Mango is incredible - tastes like real fruit."
  },
  {
    id: 5,
    name: 'Olivia K.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1374&auto=format&fit=crop',
    rating: 5,
    comment: "I drink Passion Fruit SWAY every morning now. So good!"
  }
];

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
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
              <Button 
                onClick={() => scrollToSection('products')} 
                className="btn-primary text-lg py-6 px-8 bg-[#F97316] hover:bg-[#F97316]/90 transition-all duration-300 shadow-lg"
              >
                Shop Now
              </Button>
              <Button 
                onClick={() => scrollToSection('benefits')} 
                variant="outline" 
                className="btn-outline text-lg py-6 px-8 border-2 bg-[#F2FCE2] text-dark border-[#84cc16] hover:bg-[#84cc16]/20 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
            
            <div className="mt-8">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex -space-x-2 mb-3">
                  {customerReviews.map((review) => (
                    <HoverCard key={review.id}>
                      <HoverCardTrigger asChild>
                        <Avatar className="w-12 h-12 border-2 border-white hover:border-coral hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm">
                          <AvatarImage src={review.image} alt={review.name} />
                          <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-64 p-4 bg-white shadow-xl rounded-xl">
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2 mb-2">
                            <Avatar className="w-8 h-8">
                              <AvatarImage src={review.image} />
                              <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{review.name}</span>
                          </div>
                          <div className="flex mb-2">
                            {Array(review.rating).fill(0).map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow fill-yellow" />
                            ))}
                          </div>
                          <p className="text-sm text-gray-600">{review.comment}</p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-gray-600">
                    <span className="font-bold">500+</span> 5-star reviews
                  </p>
                  <button 
                    onClick={() => scrollToSection('reviews')} 
                    className="text-sm text-coral font-medium flex items-center hover:underline transition-all"
                  >
                    View All Reviews <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-10 animate-float">
              <div className="absolute top-[-10%] right-[20%] w-32 h-32 rounded-full bg-coral/20 blur-xl"></div>
              <div className="absolute bottom-[10%] left-[5%] w-40 h-40 rounded-full bg-yellow/30 blur-xl"></div>
              <div className="absolute top-[30%] right-[-5%] w-24 h-24 rounded-full bg-navy/20 blur-xl"></div>
              <img 
                src="/lovable-uploads/224006f0-cd3a-4124-acc4-23bf3ab3946b.png" 
                alt="SWAY Cherry Energy Drink" 
                className="max-w-full h-auto object-contain mx-auto drop-shadow-2xl" 
                style={{ maxHeight: "500px" }} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
