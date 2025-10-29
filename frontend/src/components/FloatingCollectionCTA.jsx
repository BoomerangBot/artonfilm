import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Film, ArrowRight, Sparkles } from 'lucide-react';

const FloatingCollectionCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ctaText, setCtaText] = useState('Explore Collection');

  // Array of CTA text variations
  const ctaVariations = [
    'Explore Collection',
    'View Artworks',
    'Discover Art',
    'Visit Gallery',
    'Browse Masterpieces'
  ];

  useEffect(() => {
    // Show button after scrolling 300px
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Rotate CTA text every 5 seconds
    const textInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * ctaVariations.length);
      setCtaText(ctaVariations[randomIndex]);
    }, 5000);

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <Link
          to="/collection"
          className="fixed bottom-6 right-6 z-40 group"
          style={{ animation: 'fadeIn 0.5s ease-in-out' }}
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300 animate-pulse"></div>
            
            {/* Main button - reduced by 25% */}
            <div className="relative flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full shadow-xl transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-amber-500/50">
              <Palette size={18} className="group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-base whitespace-nowrap">{ctaText}</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </div>

            {/* Sparkle decoration */}
            <Sparkles 
              size={12} 
              className="absolute -top-1 -right-1 text-amber-400 animate-pulse"
            />
          </div>
        </Link>
      )}
    </>
  );
};

export default FloatingCollectionCTA;
