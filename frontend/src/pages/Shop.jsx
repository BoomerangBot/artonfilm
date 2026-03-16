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
            <span className="text-amber-400 text-sm font-semibold tracking-widest">PAINTING PROGRAMME</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif leading-tight">
            <span className="gradient-text">Collection 1: Modern Eden</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-4">
            Collection 2 coming soon
          </p>
          
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            This collection forms part of ArtOnFilm Ltd commissioned retail inventory.
          </p>
        </div>
      </section>

      {/* Artwork Grid - Pictures First */}
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
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                    {artwork.title}
                  </h3>
                  <p className="text-xs text-amber-400/70 italic mb-3">
                    This work forms part of the ArtOnFilm curated programme.
                  </p>
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
                    Enquire
                  </button>
                </div>
              </div>
            ))}
          </div>
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
              <p className="text-gray-200 text-lg">Works are released through the ArtOnFilm programme.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-black/30 rounded-xl border border-amber-500/10">
              <div className="w-2 h-2 rounded-full bg-amber-400 mt-3 flex-shrink-0"></div>
              <p className="text-gray-200 text-lg">Revenue is generated through artwork sales and exhibitions.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-black/30 rounded-xl border border-amber-500/10">
              <div className="w-2 h-2 rounded-full bg-amber-400 mt-3 flex-shrink-0"></div>
              <p className="text-gray-200 text-lg">No royalty, license, or intellectual property income is derived from these works.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Acquisition Process */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-4 bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-400/30 rounded-full backdrop-blur-sm">
              <ShoppingBag size={18} className="text-amber-400" />
              <span className="text-amber-400 text-xs font-semibold tracking-wider">HOW TO PURCHASE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
              How Purchasing Works
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-10 border border-white/10">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                ArtOnFilm Ltd commissions and releases artworks through its programme. Works are available through exhibitions and the ArtOnFilm website.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                All works available for purchase are owned outright by ArtOnFilm Ltd and are offered for sale in the ordinary course of business.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl p-10 border border-purple-500/20">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Each artwork has been commissioned under a fixed-fee agreement. Ownership transfers fully to ArtOnFilm Ltd upon completion. The work is offered as part of the company's retail inventory. Sales are completed directly with the buyer through standard commercial transactions.
              </p>
              <p className="font-semibold text-white text-lg">ArtOnFilm does not act as a broker or intermediary. All listed works are company-owned inventory.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance Statement */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl p-8 border-l-4 border-blue-500">
            <p className="text-lg text-gray-300 text-center leading-relaxed">
              <span className="font-semibold text-white">ArtOnFilm Ltd operates as a trading company</span> commissioning, producing and selling contemporary artworks through exhibitions and its website.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
