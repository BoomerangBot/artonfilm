import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShoppingBag, 
  FileText, 
  Shield, 
  Mail, 
  Package,
  CheckCircle,
  Clock,
  XCircle,
  ChevronDown,
  ChevronUp,
  Palette,
  Camera
} from 'lucide-react';
import { artworks, photographyShopWorks, shopPricingLadder, collectorFAQ } from '../mock';
import { toast } from 'sonner';

const ShopPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  // Combine all shop works
  const allWorks = [...artworks, ...photographyShopWorks];
  
  // Filter works based on selection
  const filteredWorks = activeFilter === 'all' 
    ? allWorks 
    : activeFilter === 'paintings' 
    ? artworks 
    : photographyShopWorks;

  // Count by status
  const availableCount = allWorks.filter(w => w.status === 'available').length;
  const reservedCount = allWorks.filter(w => w.status === 'reserved').length;
  const soldCount = allWorks.filter(w => w.status === 'sold').length;

  const getStatusBadge = (status) => {
    switch (status) {
      case 'available':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
            <CheckCircle size={12} />
            Available
          </span>
        );
      case 'reserved':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-semibold rounded-full border border-amber-500/30">
            <Clock size={12} />
            Reserved
          </span>
        );
      case 'sold':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-500/20 text-red-400 text-xs font-semibold rounded-full border border-red-500/30">
            <XCircle size={12} />
            Sold
          </span>
        );
      case 'not-for-sale':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-500/20 text-zinc-100 text-xs font-semibold rounded-full border border-zinc-300/30">
            <XCircle size={12} />
            Not for Sale
          </span>
        );
      default:
        return null;
    }
  };

  const handleAcquisitionRequest = (artwork) => {
    if (artwork.status === 'sold') {
      toast.info("This work has been sold", {
        description: "Please explore our other available works or contact us for similar pieces.",
      });
      return;
    }
    
    toast.success("Acquisition Request Sent", {
      description: `We'll contact you about "${artwork.title}" within 24 hours.`,
    });
  };

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="film-grain"></div>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden border-b border-amber-500/20">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-400/30 rounded-full">
            <ShoppingBag size={20} className="text-amber-400" />
            <span className="text-amber-400 text-sm font-semibold tracking-widest">ACQUIRE WORKS</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
            <span className="gradient-text">Shop</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Original paintings, photography and limited editions available for acquisition. Each work is held as inventory by ArtOnFilm Ltd and sold through direct retail.
          </p>

          {/* Status Summary */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">{availableCount}</div>
              <div className="text-sm text-gray-400">Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">{reservedCount}</div>
              <div className="text-sm text-gray-400">Reserved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400">{soldCount}</div>
              <div className="text-sm text-gray-400">Sold</div>
            </div>
          </div>
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

      {/* Pricing Guide */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-4 bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-400/30 rounded-full">
              <span className="text-amber-400 text-xs font-semibold tracking-wider">PRICING GUIDE</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 font-serif">
              Collection Pricing
            </h2>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {shopPricingLadder.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/5 hover:border-amber-500/20 transition-colors"
                >
                  <span className="text-gray-300">{item.category}</span>
                  <span className="text-amber-400 font-semibold">{item.range}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-amber-500/5 rounded-xl border border-amber-500/20">
              <p className="text-gray-300 text-sm text-center italic">
                Prices increase as new collections and exhibitions are released through the ArtOnFilm programme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Artwork Listings */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 font-serif">
              Available Works
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              {filteredWorks.length} works displayed
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeFilter === 'all'
                    ? 'bg-amber-500 text-black'
                    : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                }`}
              >
                All Works ({allWorks.length})
              </button>
              <button
                onClick={() => setActiveFilter('paintings')}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeFilter === 'paintings'
                    ? 'bg-amber-500 text-black'
                    : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                }`}
              >
                <Palette size={18} />
                Paintings ({artworks.length})
              </button>
              <button
                onClick={() => setActiveFilter('photography')}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeFilter === 'photography'
                    ? 'bg-amber-500 text-black'
                    : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                }`}
              >
                <Camera size={18} />
                Photography ({photographyShopWorks.length})
              </button>
            </div>
          </div>

          {/* Artwork Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorks.map((artwork) => (
              <div
                key={artwork.id}
                data-testid={`artwork-card-${artwork.id}`}
                className={`group bg-gradient-to-br from-zinc-900 to-black rounded-2xl overflow-hidden border transition-all duration-500 ${
                  artwork.status === 'sold' 
                    ? 'border-white/5 opacity-75' 
                    : 'border-white/10 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/10'
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      artwork.status !== 'sold' ? 'group-hover:scale-105' : ''
                    }`}
                  />
                  {artwork.status === 'sold' && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white/80 uppercase tracking-widest">Sold</span>
                    </div>
                  )}
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    {getStatusBadge(artwork.status)}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                    {artwork.title}
                  </h3>
                  <p className="text-xs text-amber-400/70 italic mb-3">
                    This work forms part of the ArtOnFilm curated programme.
                  </p>
                  
                  {/* Artwork Details */}
                  <div className="space-y-1 mb-4">
                    <p className="text-amber-400 text-sm font-medium">{artwork.artist}</p>
                    <p className="text-gray-400 text-sm break-words">{artwork.medium} · {artwork.size}</p>
                    <p className="text-gray-400 text-sm">{artwork.year}</p>
                    {artwork.edition && (
                      <p className="text-purple-400 text-sm">{artwork.edition}</p>
                    )}
                    {artwork.series && (
                      <p className="text-purple-400 text-sm">{artwork.series}</p>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400 text-sm">Price</span>
                    <span className="text-2xl font-bold text-white">{artwork.price}</span>
                  </div>

                  {/* Acquisition Button */}
                  {artwork.status === 'available' ? (
                    <Link
                      to={`/contact?subject=Acquisition%20Request%3A%20${encodeURIComponent(artwork.title)}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95"
                      data-testid={`acquire-btn-${artwork.id}`}
                    >
                      Request Acquisition
                      <ArrowRight size={18} />
                    </Link>
                  ) : artwork.status === 'reserved' ? (
                    <button
                      disabled
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500/20 text-amber-400 font-bold rounded-full cursor-not-allowed"
                    >
                      <Clock size={18} />
                      Currently Reserved
                    </button>
                  ) : artwork.status === 'not-for-sale' ? (
                    <button
                      disabled
                      data-testid={`status-btn-${artwork.id}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 text-gray-400 font-bold rounded-full cursor-not-allowed"
                    >
                      <XCircle size={18} />
                      Not for Sale
                    </button>
                  ) : (
                    <button
                      disabled
                      data-testid={`status-btn-${artwork.id}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 text-gray-500 font-bold rounded-full cursor-not-allowed"
                    >
                      <XCircle size={18} />
                      Sold
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collector FAQ */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-4 bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-400/30 rounded-full">
              <span className="text-purple-400 text-xs font-semibold tracking-wider">COLLECTOR FAQ</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 font-serif">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {collectorFAQ.map((faq, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                  data-testid={`faq-toggle-${index}`}
                >
                  <h3 className="text-lg font-bold text-white pr-4">{faq.question}</h3>
                  {expandedFAQ === index ? (
                    <ChevronUp size={24} className="text-amber-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={24} className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acquisition & Delivery */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-4 bg-gradient-to-r from-green-500/10 to-transparent border border-green-400/30 rounded-full">
              <Package size={18} className="text-green-400" />
              <span className="text-green-400 text-xs font-semibold tracking-wider">ACQUISITION & DELIVERY</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 font-serif">
              How Acquisition Works
            </h2>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-10 border border-white/10">
            <p className="text-xl text-gray-300 leading-relaxed mb-8 text-center">
              Artworks released through the ArtOnFilm programme may be acquired through the website or by private viewing. After acquisition confirmation, ArtOnFilm provides:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-black/40 rounded-xl border border-green-500/20">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={20} className="text-green-400" />
                </div>
                <span className="text-gray-200">Certificate of authenticity</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-black/40 rounded-xl border border-green-500/20">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={20} className="text-green-400" />
                </div>
                <span className="text-gray-200">Artwork documentation</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-black/40 rounded-xl border border-green-500/20">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={20} className="text-green-400" />
                </div>
                <span className="text-gray-200">Secure packaging and insured shipping</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-black/40 rounded-xl border border-green-500/20">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={20} className="text-green-400" />
                </div>
                <span className="text-gray-200">International delivery arrangements</span>
              </div>
            </div>

            <p className="text-gray-400 text-center italic">
              All works include documentation confirming their release through the ArtOnFilm curated programme.
            </p>
          </div>
        </div>
      </section>

      {/* View Collections CTA */}
      <section className="py-20 bg-black">
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105"
            >
              <Palette size={20} />
              Natasha Kissell
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/collection/chris-lee"
              className="inline-flex items-center gap-2 px-8 py-4 border border-purple-400/50 text-purple-400 font-semibold rounded-full hover:bg-purple-400/10 transition-all hover:scale-105"
            >
              <Camera size={20} />
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
