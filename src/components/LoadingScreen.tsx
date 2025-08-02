import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 500); // Small delay before hiding
          return 100;
        }
        return prevProgress + 2; // Increment by 2 for smooth animation
      });
    }, 50); // Update every 50ms for smooth animation

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full px-8 text-center">
        {/* Progress counter */}
        <div className="text-white/60 text-lg font-light mb-4 font-inter">
          {progress} - 100
        </div>
        
        {/* Main heading */}
        <h1 className="text-white text-4xl md:text-6xl font-bold font-cabinet-grotesk leading-tight mb-12">
          YOUR<br />
          WEB EXPERIENCE<br />
          IS LOADING RIGHT <span className="text-white/40 italic">NOW</span>
        </h1>
        
        {/* Progress bar */}
        <div className="w-full mb-8">
          <Progress 
            value={progress} 
            className="h-1 bg-white/20"
          />
        </div>
        
        {/* Bottom text */}
        <p className="text-white/60 text-sm font-light font-inter">
          Please wait<br />
          a few seconds
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;