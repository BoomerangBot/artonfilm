import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { corporateData, quotes, partnersVenuesData } from '../mock';
import { Building2, ArrowRight } from 'lucide-react';
import PartnerModal from '../components/PartnerModal';

const Partners = () => {
  const [selectedPartner, setSelectedPartner] = useState(null);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section with Artistic Background */}
      <section className="relative h-[65vh] min-h-[450px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_filmartgallery/artifacts/gjdqmwuv_file_00000000a1a06243881e54f4f8977420.png')`
          }}
        >
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
          
          {/* Film Grain Effect */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
            }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full border-2 border-amber-500/50 backdrop-blur-sm">
              <Building2 size={40} className="text-amber-400" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-serif">
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                {corporateData.headline}
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 font-light">
              {corporateData.subheadline}
            </p>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Andrew Carnegie Quote - On Enriching Others */}
      <section className="py-20 bg-black border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl text-amber-400 mb-4 font-serif">"</div>
            <blockquote className="text-2xl md:text-3xl font-light italic text-gray-200 mb-6 leading-relaxed">
              {quotes.carnegie.culture}
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-amber-400"></div>
              <div>
                <p className="text-lg font-bold text-amber-400">Andrew Carnegie</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Industrialist & Philanthropist</p>
              </div>
              <div className="h-px w-12 bg-amber-400"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporateData.tiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 border-2 transition-all hover:scale-105 ${
                  index === 0
                    ? 'bg-zinc-900 border-white'
                    : 'bg-zinc-900 border-white/20 hover:border-white/40'
                }`}
              >
                <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                <p className="text-3xl font-bold mb-6 text-gray-300">{tier.amount}</p>
                <ul className="space-y-3 mb-8">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="text-gray-400">
                      • {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Section */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">CSR Alignment</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            {corporateData.csrNote}
          </p>
          <Link
            to="/contact?subject=Corporate+Partnership+2025"
            className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
          >
            Request Partnership Pack
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Partners, Friends & Sponsors Section */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                Partners, Friends & Sponsors
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {partnersVenuesData.content}
            </p>
          </div>

          {/* Partners Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partnersVenuesData.partners.map((partner, index) => (
              <div
                key={index}
                onClick={() => setSelectedPartner(partner)}
                className="group relative bg-white rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 border-2 border-transparent hover:border-amber-500/50"
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