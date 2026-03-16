import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, FileText, Shield, Mail } from 'lucide-react';
import { artworks } from '../mock';

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-black to-black"></div>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-400/30 rounded-full">
            <ShoppingBag size={18} className="text-amber-400" />
            <span className="text-amber-400 text-xs font-semibold tracking-wider">ACQUIRE WORKS</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
            Shop
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Original paintings, photography and limited editions available for acquisition. Each work is held as inventory by ArtOnFilm Ltd and sold through direct retail.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-zinc-900/50 rounded-2xl border border-white/5">
              <div className="w-16 h-16 mx-auto mb-6 bg-amber-500/10 rounded-full flex items-center justify-center">
                <FileText size={28} className="text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Direct Ownership</h3>
              <p className="text-gray-400">All works are owned outright by ArtOnFilm Ltd and sold through standard commercial transactions.</p>
            </div>
            <div className="text-center p-8 bg-zinc-900/50 rounded-2xl border border-white/5">
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-500/10 rounded-full flex items-center justify-center">
                <Shield size={28} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Full Documentation</h3>
              <p className="text-gray-400">Certificate of authenticity, provenance documentation, and official VAT invoice provided with every acquisition.</p>
            </div>
            <div className="text-center p-8 bg-zinc-900/50 rounded-2xl border border-white/5">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-500/10 rounded-full flex items-center justify-center">
                <Mail size={28} className="text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Private Viewings</h3>
              <p className="text-gray-400">Arrange private viewings in London or at our exhibition venues by appointment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Works */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-serif">
              Available Works
            </h2>
            <p className="text-gray-400 text-lg">
              {artworks.length} works currently available
            </p>
          </div>

          {/* Artwork Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork) => (
              <div
                key={artwork.id}
                className="group bg-gradient-to-br from-zinc-900 to-black rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/30 transition-all duration-500"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                    {artwork.title}
                  </h3>
                  <p className="text-xs text-amber-400/70 italic mb-2">
                    This work forms part of the ArtOnFilm curated programme.
                  </p>
                  <p className="text-amber-400 text-sm mb-2">{artwork.artist}</p>
                  <p className="text-gray-400 text-sm mb-4">
                    {artwork.medium} · {artwork.year}
                  </p>
                  <Link
                    to="/contact?subject=Artwork%20Enquiry"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* View Collections CTA */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-serif">
            Explore Full Collections
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            View our complete artist collections including exhibition history and available works.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/collection/natasha-kissell"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all"
            >
              Natasha Kissell
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/collection/chris-lee"
              className="inline-flex items-center gap-2 px-8 py-4 border border-amber-400/50 text-amber-400 font-semibold rounded-full hover:bg-amber-400/10 transition-all"
            >
              Dr Chris Lee
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
