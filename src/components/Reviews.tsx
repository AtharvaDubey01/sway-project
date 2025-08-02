
import React from 'react';
import { Star, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const reviewsData = [
  {
    id: 1,
    name: 'Amanda J.',
    location: 'New York, NY',
    rating: 5,
    text: "Best sparkling water I've ever tasted! The Cucumber Mint is my absolute favorite for hot summer days.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Michael T.',
    location: 'Los Angeles, CA',
    rating: 5,
    text: 'I love that these drinks have no added sugar but still taste amazing. The Berry Bliss is a game changer!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Sarah M.',
    location: 'Chicago, IL',
    rating: 4,
    text: 'These have become my daily go-to. So much better than plain water and without the guilt of sugary sodas.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1374&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'David W.',
    location: 'Austin, TX',
    rating: 5,
    text: "I've cut out soda completely thanks to Refresh. The Tropical Punch flavor is incredible!",
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1374&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Emily R.',
    location: 'Portland, OR',
    rating: 5,
    text: 'Love the sustainable packaging and the flavors are out of this world. My whole family is obsessed!',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1374&auto=format&fit=crop',
  }
];

const Reviews = () => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-yellow fill-yellow' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="reviews" className="section bg-cream py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what people are saying about Refresh.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee hover:pause-marquee">
            {/* First set of reviews */}
            {reviewsData.map((review) => (
              <div key={review.id} className="flex-shrink-0 w-80 mx-4">
                <Card className="border-none shadow-md h-full transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-coral">
                        {review.image ? (
                          <img 
                            src={review.image} 
                            alt={review.name} 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <User className="h-6 w-6 text-gray-500" />
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-bold">{review.name}</p>
                        <p className="text-sm text-gray-500">{review.location}</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-gray-700 flex-grow">"{review.text}"</p>
                  </CardContent>
                </Card>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {reviewsData.map((review) => (
              <div key={`${review.id}-duplicate`} className="flex-shrink-0 w-80 mx-4">
                <Card className="border-none shadow-md h-full transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-coral">
                        {review.image ? (
                          <img 
                            src={review.image} 
                            alt={review.name} 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <User className="h-6 w-6 text-gray-500" />
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-bold">{review.name}</p>
                        <p className="text-sm text-gray-500">{review.location}</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-gray-700 flex-grow">"{review.text}"</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
