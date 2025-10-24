import React, { useState } from 'react';
import { artworks } from '../mock';
import { ShoppingBag, Palette, Eye, Mail } from 'lucide-react';
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
        <div className="absolute inset-0 soft-light-center"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8">
            <ShoppingBag size={20} className="text-amber-400" />
            <span className="text-amber-400 text-sm font-semibold tracking-widest">ORIGINAL ARTWORKS</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 font-serif leading-tight">
            <span className="gradient-text">Natasha Kissell</span>
            <br />
            <span className="text-white">Collection</span>
          </h1>
          
          <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Award-winning contemporary paintings exploring the relationship between architecture, 
            landscape, and light.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://natashakissell.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-amber-400/80 text-white font-bold rounded-full hover:bg-gradient-to-r hover:from-amber-400/20 hover:to-amber-500/20 hover:border-amber-300 transition-all duration-500 hover:scale-105 active:scale-95 backdrop-blur-md"
            >
              <Palette size={20} />
              Visit Artist Website
            </a>
            <a
              href="mailto:rh@artonfilm.uk?subject=Artwork Inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-300 hover:via-amber-400 hover:to-amber-500 transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl shadow-amber-500/30"
            >
              <Mail size={20} />
              Contact Gallery
            </a>
          </div>
        </div>
      </section>

      {/* Artworks Grid */}
      <section className="py-32 relative">
        <div className="absolute inset-0 soft-light-center"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork) => (
              <div
                key={artwork.id}
                className="group relative bg-gradient-to-br from-zinc-900 to-black rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/30 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button
                      onClick={() => setSelectedArtwork(artwork)}
                      className="px-6 py-3 bg-white/90 backdrop-blur-sm text-black font-bold rounded-full hover:bg-white transition-all flex items-center gap-2"
                    >
                      <Eye size={20} />
                      View Details
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-400 transition-colors">
                    {artwork.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-1">{artwork.medium}</p>
                  <p className="text-gray-500 text-sm mb-4">{artwork.year}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-amber-400">{artwork.price}</span>
                    <button
                      onClick={() => setSelectedArtwork(artwork)}
                      className="px-4 py-2 bg-amber-500/20 text-amber-400 font-semibold rounded-lg hover:bg-amber-500/30 transition-all"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Artwork Details */}
      {selectedArtwork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedArtwork(null)}
        >
          <div
            className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl max-w-5xl w-full border border-amber-500/20 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative aspect-square md:aspect-auto">
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <h2 className="text-4xl font-bold mb-4 font-serif">{selectedArtwork.title}</h2>
                  <p className="text-xl text-amber-400 mb-2">{selectedArtwork.artist}</p>
                  <p className="text-gray-400 mb-1">{selectedArtwork.medium}</p>
                  <p className="text-gray-500 mb-6">{selectedArtwork.year}</p>
                  
                  <p className="text-gray-300 leading-relaxed mb-8">
                    {selectedArtwork.description}
                  </p>

                  <div className="flex items-center justify-between mb-8 p-4 bg-black/50 rounded-xl">
                    <span className="text-gray-400">Price</span>
                    <span className="text-3xl font-bold text-amber-400">{selectedArtwork.price}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={() => handleInquiry(selectedArtwork)}
                    className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20"
                  >
                    Make an Inquiry
                  </button>
                  <button
                    onClick={() => setSelectedArtwork(null)}
                    className="w-full px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* About the Artist */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 soft-light-center"></div>
        
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif">About the Artist</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Natasha Kissell is an award-winning British painter based in Brighton. Her work explores the interplay 
            between modern architecture, natural landscapes, and the quality of light. Each piece captures a moment 
            of serenity and contemplation, inviting viewers to pause and reflect on the relationship between built 
            and natural environments.
          </p>
          <p className="text-lg text-gray-400">
            Her paintings have been featured in exhibitions across Europe and are held in private collections 
            internationally.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Shop;
