import React, { useState } from 'react';
import { artworks } from '../mock';
import { ShoppingBag, Package, FileText, Info } from 'lucide-react';
import { toast } from 'sonner';

const Shop = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const handleInquiry = (artwork) => {
    toast.success("Inquiry Sent!", {
      description: `We'll contact you about "${artwork.title}" within 24 hours.`,
    });
    setSelectedArtwork(null);
  };

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      <div className="film-grain"></div>

      {/* Header */}
      <section className="relative py-32 border-b border-amber-500/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8">
            <Package size={20} className="text-amber-400" />
            <span className="text-amber-400 text-sm font-semibold tracking-widest">COMMISSIONED COLLECTION</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 font-serif leading-tight">
            <span className="gradient-text">Natasha Kissell</span>
            <br />
            <span className="text-white text-4xl">Commissioned Collection</span>
          </h1>
          
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            This collection forms part of ArtOnFilm Ltd commissioned retail inventory.
          </p>
        </div>
      </section>

      {/* About the Collection */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-4 bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-400/30 rounded-full backdrop-blur-sm">
              <Info size={18} className="text-purple-400" />
              <span className="text-purple-400 text-xs font-semibold tracking-wider">COLLECTION DETAILS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
              About the Collection
            </h2>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-10 border border-white/10 space-y-6">
            <p className="text-xl text-gray-300 leading-relaxed">
              Each work was produced under a fixed-fee commissioning agreement and is fully owned by ArtOnFilm Ltd as trading stock.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              The Modern Eden series was commissioned as part of ArtOnFilm's ongoing inventory growth strategy. These works are presented through curated retail activations and direct commercial placements.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              The collection is part of the company's continuous retail trading model and is not held for speculative or investment purposes.
            </p>
          </div>
        </div>
      </section>

      {/* Ownership & Sale Structure */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-4 bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-400/30 rounded-full backdrop-blur-sm">
              <FileText size={18} className="text-amber-400" />
              <span className="text-amber-400 text-xs font-semibold tracking-wider">OWNERSHIP</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
              Ownership & Sale Structure
            </h2>
          </div>

          <div className="bg-gradient-to-br from-amber-500/5 to-transparent rounded-2xl p-10 border border-amber-500/20 space-y-4">
            <div className="flex items-start gap-3 p-4 bg-black/30 rounded-xl border border-amber-500/10">
              <div className="w-2 h-2 rounded-full bg-amber-400 mt-3 flex-shrink-0"></div>
              <p className="text-gray-200 text-lg">Artwork is owned outright by ArtOnFilm Ltd.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-black/30 rounded-xl border border-amber-500/10">
              <div className="w-2 h-2 rounded-full bg-amber-400 mt-3 flex-shrink-0"></div>
              <p className="text-gray-200 text-lg">Works are recorded as trading stock.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-black/30 rounded-xl border border-amber-500/10">
              <div className="w-2 h-2 rounded-full bg-amber-400 mt-3 flex-shrink-0"></div>
              <p className="text-gray-200 text-lg">Revenue is generated solely through retail resale.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-black/30 rounded-xl border border-amber-500/10">
              <div className="w-2 h-2 rounded-full bg-amber-400 mt-3 flex-shrink-0"></div>
              <p className="text-gray-200 text-lg">No royalty, license, or intellectual property income is derived from these works.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-4 bg-gradient-to-r from-green-500/10 to-transparent border border-green-400/30 rounded-full backdrop-blur-sm">
              <ShoppingBag size={18} className="text-green-400" />
              <span className="text-green-400 text-xs font-semibold tracking-wider">RETAIL AVAILABILITY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
              Availability
            </h2>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-10 border border-white/10">
            <p className="text-xl text-gray-300 leading-relaxed text-center">
              Available works remain part of active company inventory until sold. Unsold works continue within the company's retail cycle and may be presented in future activations or offered via direct commercial placement.
            </p>
          </div>
        </div>
      </section>

      {/* Artwork Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
              Current Inventory
            </h2>
            <p className="text-xl text-gray-400">
              {artworks.length} works available for retail sale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork) => (
              <div
                key={artwork.id}
                className="group relative bg-gradient-to-br from-zinc-900 to-black rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {artwork.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    {artwork.medium} • {artwork.dimensions}
                  </p>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {artwork.description}
                  </p>
                  
                  <button
                    onClick={() => handleInquiry(artwork)}
                    className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/30"
                  >
                    Inquire About Purchase
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance Statement */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl p-8 border-l-4 border-blue-500">
            <p className="text-lg text-gray-300 text-center leading-relaxed">
              <span className="font-semibold text-white">ArtOnFilm Ltd operates solely as a retail trading company.</span> Artwork is commissioned and acquired as trading stock for resale through structured commercial channels.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
