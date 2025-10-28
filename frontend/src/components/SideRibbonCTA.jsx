import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const SideRibbonCTA = () => {
  const [ctaText, setCtaText] = useState('Collection');

  // Array of short CTA text variations for ribbon
  const ctaVariations = [
    'Collection',
    'Gallery',
    'Artworks',
    'Masterpieces',
    'New Art'
  ];

  useEffect(() => {
    // Rotate CTA text every 4 seconds
    const textInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * ctaVariations.length);
      setCtaText(ctaVariations[randomIndex]);
    }, 4000);

    return () => {
      clearInterval(textInterval);
    };
  }, []);

  return (
    <Link
      to="/collection"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 group"
      style={{ writingMode: 'vertical-rl' }}
    >
      <div className="relative">
        {/* Background ribbon with gradient */}
        <div className="relative bg-gradient-to-b from-amber-600 via-amber-500 to-amber-600 px-4 py-6 shadow-2xl transition-all duration-300 group-hover:px-5 rounded-l-xl border-l-4 border-amber-400">
          {/* Decorative top edge */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
          
          {/* Text */}
          <div className="flex items-center gap-3">
            <Sparkles size={18} className="text-black rotate-180 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-black font-bold text-lg tracking-wider uppercase group-hover:tracking-widest transition-all duration-300">
              {ctaText}
            </span>
            <Sparkles size={18} className="text-black rotate-180 group-hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Decorative bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

          {/* Pulse effect on hover */}
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-xl"></div>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-amber-500 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300 -z-10"></div>
      </div>
    </Link>
  );
};

export default SideRibbonCTA;
