import React from 'react';
import { Building2, ShoppingBag, TrendingUp, FileText } from 'lucide-react';

const About = () => {
  const tradePoints = [
    'Continuous commissioned inventory growth',
    'Activation-led commercial sales',
    'Direct private and corporate placements'
  ];

  const notOperatingAs = [
    'A financial investment vehicle',
    'A fund or broker',
    'A film production or distribution business',
    'A royalty or licensing fee-based enterprise'
  ];

  const objectives = [
    'Repeatable activation formats',
    'Controlled inventory growth',
    'Expanding geographic reach',
    'Sustainable commercial margins'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 border-b border-amber-500/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8">
            <Building2 size={20} className="text-amber-400" />
            <span className="text-amber-400 text-sm font-semibold tracking-widest">COMPANY INFORMATION</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 font-serif leading-tight">
            <span className="gradient-text">About ArtOnFilm Ltd</span>
          </h1>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            ArtOnFilm Ltd is a UK-registered retail trading company focused on commissioning, acquiring, and reselling contemporary artwork.
          </p>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-12 border border-white/10">
            <p className="text-xl text-gray-300 mb-8 text-center leading-relaxed">
              The business operates through a structured retail model built on:
            </p>
            
            <div className="space-y-4 max-w-3xl mx-auto">
              {tradePoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-black/30 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mt-3 flex-shrink-0"></div>
                  <span className="text-gray-200 text-lg">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Trade Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-4 bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-400/30 rounded-full backdrop-blur-sm">
              <ShoppingBag size={18} className="text-purple-400" />
              <span className="text-purple-400 text-xs font-semibold tracking-wider">BUSINESS OPERATIONS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
              Our Trade
            </h2>
          </div>

          <div className="space-y-8">
            {/* Main Trade Description */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-10 border border-white/10">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                ArtOnFilm commissions artwork through fixed-fee agreements with selected artists. Ownership fully transfers to the company upon completion.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                All commissioned works are recorded as trading stock and sold through structured retail channels in the ordinary course of business. Revenue is generated exclusively from retail sales of owned artwork.
              </p>
            </div>

            {/* What We Don't Do */}
            <div className="bg-gradient-to-br from-red-500/5 to-transparent rounded-2xl p-10 border border-red-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">The company does not operate as:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {notOperatingAs.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-black/30 rounded-xl border border-red-500/10">
                    <div className="w-6 h-6 rounded-full border-2 border-red-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="text-gray-200 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Media Notice */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 border border-white/10">
              <p className="text-lg text-gray-300 italic text-center">
                Media content created by ArtOnFilm serves promotional purposes only and does not generate separate income streams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Objective Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-4 bg-gradient-to-r from-green-500/10 to-transparent border border-green-400/30 rounded-full backdrop-blur-sm">
              <TrendingUp size={18} className="text-green-400" />
              <span className="text-green-400 text-xs font-semibold tracking-wider">GROWTH STRATEGY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
              Our Objective
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-10 border border-white/10">
              <p className="text-xl text-gray-300 leading-relaxed mb-8 text-center">
                ArtOnFilm's goal is to build a scalable retail trading company based on:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {objectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-3 p-5 bg-gradient-to-br from-green-500/5 to-transparent rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all">
                    <TrendingUp size={24} className="text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200 text-lg font-medium">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Statement */}
            <div className="bg-gradient-to-br from-amber-500/5 to-transparent rounded-2xl p-10 border border-amber-500/20">
              <p className="text-xl text-gray-300 leading-relaxed text-center">
                The business is structured for <span className="text-amber-400 font-semibold">long-term retail growth</span> rather than short-term or speculative projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-12 border-2 border-white/10">
            <div className="flex items-center justify-center gap-4 mb-8">
              <FileText size={40} className="text-amber-400" />
              <h2 className="text-3xl font-bold text-white font-serif">Company Registration</h2>
            </div>
            <div className="text-center space-y-4">
              <p className="text-lg text-gray-300">
                <span className="font-semibold text-white">Legal Name:</span> ArtOnFilm Ltd
              </p>
              <p className="text-lg text-gray-300">
                <span className="font-semibold text-white">Jurisdiction:</span> United Kingdom
              </p>
              <p className="text-lg text-gray-300">
                <span className="font-semibold text-white">Business Type:</span> Retail Trading Company
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
