import React, { useState } from 'react';
import { artworks } from '../mock';
import { ShoppingBag, Film, Eye, Mail } from 'lucide-react';
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
              <Film size={20} />
              Visit Artist Website
            </a>
            <a
              href="mailto:justart@artonfilm.uk?subject=Artwork Inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-300 hover:via-amber-400 hover:to-amber-500 transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl shadow-amber-500/30"
            >
              <Mail size={20} />
              Contact Gallery
            </a>
          </div>
        </div>
      </section>

      {/* Artworks Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 soft-light-center"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-gray-400 text-lg">
              Showing <span className="text-amber-400 font-semibold">{artworks.length}</span> available works
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {artworks.map((artwork) => (
              <div
                key={artwork.id}
                className="group relative bg-gradient-to-br from-zinc-900 to-black rounded-xl overflow-hidden border border-white/10 hover:border-amber-500/30 transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedArtwork(artwork)}
              >
                {/* Image - More compact */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button
                      className="px-4 py-2 bg-white/90 backdrop-blur-sm text-black font-bold rounded-full hover:bg-white transition-all flex items-center gap-2 text-sm"
                    >
                      <Eye size={16} />
                      View
                    </button>
                  </div>

                  {/* Artistic Badge */}
                  <div className="absolute top-3 right-3 px-4 py-2 bg-gradient-to-br from-amber-500/20 to-amber-600/20 backdrop-blur-md rounded-full border border-amber-500/30">
                    <span className="text-amber-400 font-semibold text-xs tracking-wider uppercase">Original</span>
                  </div>
                </div>

                {/* Info - More compact */}
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1 group-hover:text-amber-400 transition-colors line-clamp-1">
                    {artwork.title}
                  </h3>
                  <p className="text-gray-400 text-xs mb-1">{artwork.medium}</p>
                  <p className="text-gray-500 text-xs">{artwork.year}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination placeholder for future */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">More artworks coming soon</p>
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

                  <div className="mb-8 p-6 bg-gradient-to-br from-amber-500/10 to-purple-500/10 rounded-2xl border border-amber-500/20 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
                      <span className="text-amber-400 font-bold text-sm uppercase tracking-wider">Collector's Edition</span>
                    </div>
                    <p className="text-gray-200 leading-relaxed italic text-sm">
                      "Each piece carries the essence of modern romance—where steel meets sky, and architecture becomes poetry."
                    </p>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-xs text-gray-400">
                        <span className="text-amber-400 font-semibold">Collector Quality</span> • Certificate of Authenticity • Museum-Grade Materials
                      </p>
                    </div>
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

      {/* Artist Showcase Video */}
      <section className="py-24 bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 soft-light-center"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 mb-6 bg-gradient-to-r from-amber-500/20 to-purple-500/20 border border-amber-400/30 rounded-full backdrop-blur-md">
              <Film size={20} className="text-amber-400" />
              <span className="text-amber-400 text-sm font-semibold tracking-wider">ARTIST SHOWCASE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent mb-4">
              Behind the Canvas
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Discover Natasha Kissell's creative process and artistic journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Video 1 */}
            <div className="space-y-4">
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/20 border-2 border-amber-500/30 hover:border-amber-500/50 transition-all mx-auto" style={{ maxWidth: '540px', aspectRatio: '9/16' }}>
                <video 
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 540 960'%3E%3Crect fill='%23000000' width='540' height='960'/%3E%3C/svg%3E"
                >
                  <source 
                    src="https://customer-assets.emergentagent.com/job_art-platform-revamp-1/artifacts/jvtvbukl_WhatsApp%20Video%202025-11-04%20at%2016.11.02_65f0fa6b.mp4" 
                    type="video/mp4" 
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-center text-sm text-gray-400">
                Experience the artistry and passion behind each masterpiece
              </p>
            </div>

            {/* Video 2 - New */}
            <div className="space-y-4">
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 border-2 border-purple-500/30 hover:border-purple-500/50 transition-all mx-auto" style={{ maxWidth: '540px', aspectRatio: '9/16' }}>
                <video 
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 540 960'%3E%3Crect fill='%23000000' width='540' height='960'/%3E%3C/svg%3E"
                >
                  <source 
                    src="https://customer-assets.emergentagent.com/job_art-platform-revamp-1/artifacts/bxb8kaqz_WhatsApp%20Video%202025-11-04%20at%2016.48.13_5977d510.mp4" 
                    type="video/mp4" 
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-center text-sm text-gray-400">
                Artist insights and creative inspiration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Artist */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 soft-light-center"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 font-serif text-center">About the Artist</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Artist Photo */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-2xl">
                <img 
                  src="https://customer-assets.emergentagent.com/job_film-canvas/artifacts/9ecw3iwg_natashakissell.jpeg"
                  alt="Natasha Kissell"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Artist Bio */}
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                Natasha Kissell is an award-winning British painter based in Brighton. Her work explores the interplay 
                between modern architecture, natural landscapes, and the quality of light. Each piece captures a moment 
                of serenity and contemplation, inviting viewers to pause and reflect on the relationship between built 
                and natural environments.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Her paintings have been featured in exhibitions across Europe and are held in private collections 
                internationally.
              </p>
              
              {/* Artist Details */}
              <div className="pt-6 border-t border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-amber-400 text-sm font-semibold mb-1">Based in</p>
                    <p className="text-white">Brighton, UK</p>
                  </div>
                  <div>
                    <p className="text-amber-400 text-sm font-semibold mb-1">Style</p>
                    <p className="text-white">Contemporary</p>
                  </div>
                  <div>
                    <p className="text-amber-400 text-sm font-semibold mb-1">Medium</p>
                    <p className="text-white">Oil on Canvas</p>
                  </div>
                  <div>
                    <p className="text-amber-400 text-sm font-semibold mb-1">Recognition</p>
                    <p className="text-white">Award-Winning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
