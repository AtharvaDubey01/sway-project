import React from 'react';
const Story = () => {
  return <section id="story" className="section bg-navy text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-6 text-white/80">
              It all started in a college dorm room. We were tired of sugary sodas and boring water options, 
              so we decided to create something better.
            </p>
            <p className="text-lg mb-6 text-white/80">After countless late nights and recipe experiments, Sway was born - a delicious, healthy alternative that doesn't compromise on taste.</p>
            <p className="text-lg mb-6 text-white/80">
              Today, we're on a mission to reinvent the way people hydrate by creating 
              drinks that are as good for you as they taste.
            </p>
            <div className="flex items-center gap-6 mt-8">
              <img src="/lovable-uploads/a9d7fd53-1036-44cc-9c1b-7420a40b9836.png" alt="Founder" className="w-16 h-16 rounded-full object-cover border-2 border-coral" />
              <div>
                <h4 className="font-bold">Atharva U. Dubey</h4>
                <p className="text-sm text-white/70">Founder & CEO</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-4 -left-4 w-full h-full bg-coral rounded-3xl"></div>
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1370&auto=format&fit=crop" alt="Our story" className="relative z-10 rounded-3xl shadow-xl" />
          </div>
        </div>
      </div>
    </section>;
};
export default Story;