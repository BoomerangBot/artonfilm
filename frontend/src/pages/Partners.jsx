import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { partnersVenuesData, partnersData } from '../mock';
import { Users, Globe, Handshake, Star } from 'lucide-react';
import PartnerModal from '../components/PartnerModal';

const Partners = () => {
  const [selectedPartner, setSelectedPartner] = useState(null);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section with Dynamic Artwork Mosaic */}
      <section className="relative min-h-[85vh] overflow-hidden flex items-center justify-center">
        {/* Artwork Mosaic Background */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 opacity-20">
          {[
            'https://customer-assets.emergentagent.com/job_art-investor/artifacts/2bg4klwl_16.jpeg',
            'https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/kg42jehx_NOM17-min.jpg',
            'https://customer-assets.emergentagent.com/job_art-investor/artifacts/1axxgyr7_20.jpeg',
            'https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/xho0bx9q_tiger%20and%20turtle.jpg',
            'https://customer-assets.emergentagent.com/job_art-investor/artifacts/g8idwuhn_18.jpeg',
            'https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/24f3x6ro_shad2.jpg',
            'https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/qktaq7ds_NOM19-min.jpg',
            'https://customer-assets.emergentagent.com/job_art-investor/artifacts/lfqa35q2_22.jpeg',
            'https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/w6zn765f_NOM11-min.jpg',
            'https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/89sw7x5n_Winter%209.jpg',
            'https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/1fov7k8q_sunlight.jpg',
            'https://customer-assets.emergentagent.com/job_art-investor/artifacts/2bg4klwl_16.jpeg'
          ].map((img, index) => (
            <div key={index} className="relative overflow-hidden">
              <img src={img} className="w-full h-full object-cover" alt="" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/70 to-black"></div>
        
        {/* Floating Artwork Badges */}
        <div className="absolute top-10 left-10 w-36 h-36 rounded-2xl overflow-hidden rotate-12 shadow-2xl shadow-purple-500/40 border-4 border-purple-500/50 animate-float">
          <img src="https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/kg42jehx_NOM17-min.jpg" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="absolute bottom-20 right-10 w-44 h-44 rounded-3xl overflow-hidden -rotate-6 shadow-2xl shadow-amber-500/40 border-4 border-amber-500/50 animate-float" style={{animationDelay: '1s'}}>
          <img src="https://customer-assets.emergentagent.com/job_art-investor/artifacts/1axxgyr7_20.jpeg" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-28 h-28 rounded-full overflow-hidden shadow-2xl shadow-amber-500/50 animate-float" style={{animationDelay: '2s'}}>
          <img src="https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/xho0bx9q_tiger%20and%20turtle.jpg" className="w-full h-full object-cover" alt="" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-20">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-8 bg-gradient-to-br from-purple-500/30 to-amber-500/30 rounded-full border-4 border-amber-500/50 backdrop-blur-xl shadow-2xl animate-pulse-slow">
            <Handshake size={50} className="text-amber-400" />
          </div>
          
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-6 bg-gradient-to-r from-purple-500/30 to-amber-500/30 border border-amber-400/50 rounded-full backdrop-blur-xl shadow-xl">
            <Globe size={20} className="text-amber-400" />
            <span className="text-amber-400 text-sm font-semibold tracking-widest">GLOBAL COLLABORATION</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight font-serif drop-shadow-2xl">
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-purple-200 bg-clip-text text-transparent">
              {partnersData.headline}
            </span>
          </h1>
          
          <p className="text-xl text-amber-100 italic mb-3 drop-shadow-lg">
            Friends During ArtOnTour: Singapore:
          </p>
          <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Partners, Friends & Sponsors JUSTART together creating tomorrow, today. JUSTDO we JUSTGIVE
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="px-6 py-3 bg-gradient-to-r from-amber-500/20 to-transparent border border-amber-400/40 rounded-full backdrop-blur-md">
              <span className="text-amber-400 font-semibold">JustArt</span>
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-transparent border border-purple-400/40 rounded-full backdrop-blur-md">
              <span className="text-purple-400 font-semibold">JustGive</span>
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-transparent border border-blue-400/40 rounded-full backdrop-blur-md">
              <span className="text-blue-400 font-semibold">JustDo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid with Artwork Backgrounds */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 opacity-5">
            <img src="https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/89sw7x5n_Winter%209.jpg" className="w-full h-full object-cover" alt="" />
          </div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-5">
            <img src="https://customer-assets.emergentagent.com/job_art-investor/artifacts/g8idwuhn_18.jpeg" className="w-full h-full object-cover" alt="" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/95 to-black"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 mb-6 bg-gradient-to-r from-amber-500/20 to-purple-500/20 border border-amber-400/30 rounded-full backdrop-blur-md">
              <Star size={20} className="text-amber-400" />
              <span className="text-amber-400 text-sm font-semibold tracking-wider">BUILDING TOGETHER</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold font-serif text-white mb-6">Our Partners</h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Building tomorrow together through art, culture, and shared vision
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
            {partnersVenuesData.partners.map((partner, index) => (
              <div
                key={index}
                onClick={() => setSelectedPartner(partner)}
                className="group relative bg-white rounded-2xl p-6 cursor-pointer transition-all duration-500 hover:scale-110 hover:shadow-2xl shadow-xl border-4 border-transparent hover:border-amber-500/60 overflow-hidden"
              >
                {/* Subtle artwork background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
                  <img 
                    src={[
                      'https://customer-assets.emergentagent.com/job_art-investor/artifacts/2bg4klwl_16.jpeg',
                      'https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/kg42jehx_NOM17-min.jpg',
                      'https://customer-assets.emergentagent.com/job_art-investor/artifacts/1axxgyr7_20.jpeg',
                      'https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/xho0bx9q_tiger%20and%20turtle.jpg'
                    ][index % 4]} 
                    className="w-full h-full object-cover" 
                    alt="" 
                  />
                </div>
                
                {/* Logo Container */}
                <div className="relative aspect-video flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Hover Overlay with Artwork Accent */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/90 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl flex items-end justify-center pb-6">
                  <div className="text-center">
                    <p className="text-white font-bold text-lg mb-2">{partner.name}</p>
                    <p className="text-amber-200 text-sm font-semibold">Click to learn more</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artwork Gallery Showcase */}
      <section className="py-20 bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif text-white mb-4">United Through Art</h2>
            <p className="text-gray-400 text-lg">Partnerships that celebrate creativity and culture</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'https://customer-assets.emergentagent.com/job_art-investor/artifacts/2bg4klwl_16.jpeg',
              'https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/kg42jehx_NOM17-min.jpg',
              'https://customer-assets.emergentagent.com/job_art-investor/artifacts/1axxgyr7_20.jpeg',
              'https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/xho0bx9q_tiger%20and%20turtle.jpg',
              'https://customer-assets.emergentagent.com/job_art-investor/artifacts/g8idwuhn_18.jpeg',
              'https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/24f3x6ro_shad2.jpg',
              'https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/qktaq7ds_NOM19-min.jpg',
              'https://customer-assets.emergentagent.com/job_art-investor/artifacts/lfqa35q2_22.jpeg'
            ].map((img, index) => (
              <div key={index} className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-amber-500/40 transition-all hover:scale-105">
                <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" alt="Partnership artwork" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/50 via-amber-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section with Dramatic Artwork */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/1fov7k8q_sunlight.jpg" className="w-full h-full object-cover opacity-15" alt="" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="text-9xl text-amber-400 mb-6 font-serif drop-shadow-2xl animate-pulse-slow">"</div>
            <blockquote className="text-3xl md:text-5xl font-light italic text-white mb-10 leading-relaxed drop-shadow-xl">
              JUSTART together creating tomorrow, today. JUSTDO we JUSTGIVE
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-400 to-purple-400 rounded-full"></div>
              <div>
                <p className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent">ArtOnFilm</p>
                <p className="text-sm text-gray-400 uppercase tracking-widest">Building Together</p>
              </div>
              <div className="h-1 w-24 bg-gradient-to-l from-transparent via-purple-400 to-amber-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Artwork */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://customer-assets.emergentagent.com/job_art-investor/artifacts/2bg4klwl_16.jpeg" className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-serif text-white drop-shadow-2xl">Become a Partner</h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            Join our network of visionaries who believe in the power of art to transform lives and communities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-amber-500 to-purple-500 text-white text-lg font-bold rounded-full hover:from-amber-400 hover:to-purple-400 transition-all hover:scale-110 shadow-2xl shadow-amber-500/50"
          >
            <Handshake size={24} />
            Partner With Us
          </Link>
        </div>
      </section>

      {/* Partner Modal */}
      {selectedPartner && (
        <PartnerModal
          partner={selectedPartner}
          onClose={() => setSelectedPartner(null)}
        />
      )}
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Partners;
