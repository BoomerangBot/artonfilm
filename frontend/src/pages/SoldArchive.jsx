import React from 'react';
import { Link } from 'react-router-dom';
import { Archive, CheckCircle, ArrowRight } from 'lucide-react';
import { artworks, photographyShopWorks } from '../mock';

const SoldArchive = () => {
  // Filter sold works from both collections
  const soldPaintings = artworks.filter(w => w.status === 'sold');
  const soldPhotography = photographyShopWorks.filter(w => w.status === 'sold');
  const allSoldWorks = [...soldPaintings, ...soldPhotography];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="film-grain"></div>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b border-red-500/20">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-black to-black"></div>
        
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-gradient-to-r from-red-500/10 to-transparent border border-red-400/30 rounded-full">
            <Archive size={20} className="text-red-400" />
            <span className="text-red-400 text-sm font-semibold tracking-widest">SOLD ARCHIVE</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
            <span className="gradient-text">Sold Works</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A record of works that have found homes with collectors. These pieces are no longer available but demonstrate the quality and range of the ArtOnFilm programme.
          </p>

          <div className="mt-8">
            <span className="text-4xl font-bold text-red-400">{allSoldWorks.length}</span>
            <span className="text-gray-400 ml-2">works sold</span>
          </div>
        </div>
      </section>

      {/* Sold Works Grid */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {allSoldWorks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allSoldWorks.map((artwork) => (
                <div
                  key={artwork.id}
                  className="group bg-gradient-to-br from-zinc-900 to-black rounded-2xl overflow-hidden border border-white/5 opacity-80"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white/80 uppercase tracking-widest">Sold</span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-500/20 text-red-400 text-xs font-semibold rounded-full border border-red-500/30">
                        <CheckCircle size={12} />
                        Sold
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {artwork.title}
                    </h3>
                    <p className="text-xs text-red-400/70 italic mb-3">
                      This work forms part of the ArtOnFilm curated programme.
                    </p>
                    
                    <div className="space-y-1 mb-4">
                      <p className="text-amber-400 text-sm font-medium">{artwork.artist}</p>
                      <p className="text-gray-400 text-sm">{artwork.medium}</p>
                      {artwork.size && <p className="text-gray-400 text-sm">{artwork.size}</p>}
                      <p className="text-gray-400 text-sm">{artwork.year}</p>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <p className="text-gray-500 text-sm">Sold Price: {artwork.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Archive size={64} className="mx-auto text-gray-600 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">No Sold Works Yet</h3>
              <p className="text-gray-400 mb-8">
                All current works remain available for acquisition.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all"
              >
                View Available Works
                <ArrowRight size={18} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-serif">
            Interested in Similar Works?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Explore our current collection of available works or register for early access to upcoming releases.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all"
            >
              Shop Available Works
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all"
            >
              Register Interest
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoldArchive;
