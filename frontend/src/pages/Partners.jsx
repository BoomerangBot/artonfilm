import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { partnersVenuesData, partnersData } from '../mock';
import { Users, X } from 'lucide-react';
import PartnerModal from '../components/PartnerModal';

const Partners = () => {
  const [selectedPartner, setSelectedPartner] = useState(null);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-amber-500/10 via-transparent to-transparent blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-20">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full border-2 border-amber-500/50 backdrop-blur-sm">
            <Users size={40} className="text-amber-400" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight font-serif">
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
              {partnersData.headline}
            </span>
          </h1>
          
          <p className="text-lg text-gray-400 italic mb-2">
            Friends During ArtOnTour: Singapore:
          </p>
          <p className="text-base text-gray-400 italic">
            Partners, Friends & Sponsors JUSTART together creating tomorrow, today. JUSTDO we JUSTGIVE
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Partners</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Building tomorrow together through art, culture, and shared vision
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partnersVenuesData.partners.map((partner, index) => (
              <div
                key={index}
                onClick={() => setSelectedPartner(partner)}
                className="group relative bg-white rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 border-2 border-transparent hover:border-amber-500/50"
              >
                {/* Logo Container */}
                <div className="aspect-video flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end justify-center pb-4">
                  <p className="text-white font-semibold text-sm">Click to learn more</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-black border-y border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl text-amber-400 mb-4 font-serif">"</div>
            <blockquote className="text-2xl md:text-3xl font-light italic text-gray-200 mb-6 leading-relaxed">
              JUSTART together creating tomorrow, today. JUSTDO we JUSTGIVE
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-amber-400"></div>
              <div>
                <p className="text-lg font-bold text-amber-400">ArtOnFilm</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Building Together</p>
              </div>
              <div className="h-px w-12 bg-amber-400"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Modal */}
      {selectedPartner && (
        <PartnerModal
          partner={selectedPartner}
          onClose={() => setSelectedPartner(null)}
        />
      )}
    </div>
  );
};

export default Partners;
