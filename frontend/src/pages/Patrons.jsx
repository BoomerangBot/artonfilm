import React from 'react';
import { Handshake, Building2, MapPin, Megaphone, CheckCircle2, XCircle } from 'lucide-react';

const Patrons = () => {
  const supportForms = [
    'Sponsorship of specific retail activations',
    'Support for commissioned collections',
    'Venue hosting arrangements',
    'Promotional collaboration'
  ];

  const notInvolved = [
    'Revenue sharing',
    'License or royalty agreements',
    'Partnership structures',
    'Equity participation linked to services'
  ];

  const supporterBenefits = [
    'Brand visibility within curated retail environments',
    'Alignment with contemporary commissioned artwork',
    'Access to activation-led commercial networks'
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 border-b border-amber-500/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8">
            <Handshake size={20} className="text-amber-400" />
            <span className="text-amber-400 text-sm font-semibold tracking-widest">SPONSORSHIP OPPORTUNITIES</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 font-serif leading-tight">
            <span className="gradient-text">Support ArtOnFilm</span>
          </h1>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            ArtOnFilm collaborates with corporate sponsors and private supporters who wish to align with structured cultural retail activations.
          </p>
        </div>
      </section>

      {/* Support Forms Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
              Forms of Support
            </h2>
            <p className="text-xl text-gray-300">
              Support may take the form of:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {supportForms.map((form, index) => (
              <div key={index} className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 border border-amber-500/20 hover:border-amber-500/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-amber-500/30">
                    <CheckCircle2 size={24} className="text-amber-400" />
                  </div>
                  <p className="text-gray-200 text-lg leading-relaxed">{form}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Structure Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-4 bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-400/30 rounded-full backdrop-blur-sm">
              <Building2 size={18} className="text-purple-400" />
              <span className="text-purple-400 text-xs font-semibold tracking-wider">TRANSPARENT STRUCTURE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
              Commercial Structure
            </h2>
          </div>

          <div className="space-y-8">
            {/* What's NOT Involved */}
            <div className="bg-gradient-to-br from-red-500/5 to-transparent rounded-2xl p-10 border border-red-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Support arrangements do not involve:</h3>
              <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {notInvolved.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-black/30 rounded-xl border border-red-500/10">
                    <div className="w-8 h-8 rounded-full border-2 border-red-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <XCircle size={18} className="text-red-400" />
                    </div>
                    <span className="text-gray-200 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Statement */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-10 border border-white/10">
              <p className="text-xl text-gray-300 text-center leading-relaxed">
                All sponsorship activity supports the company's <span className="text-amber-400 font-semibold">core retail trade</span> and <span className="text-amber-400 font-semibold">activation-led sales channels</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Support Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-4 bg-gradient-to-r from-green-500/10 to-transparent border border-green-400/30 rounded-full backdrop-blur-sm">
              <Megaphone size={18} className="text-green-400" />
              <span className="text-green-400 text-xs font-semibold tracking-wider">SUPPORTER BENEFITS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
              Why Support
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Supporters gain:</h3>
              
              <div className="space-y-4">
                {supporterBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-5 bg-gradient-to-br from-green-500/5 to-transparent rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all">
                    <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-green-500/30">
                      <CheckCircle2 size={20} className="text-green-400" />
                    </div>
                    <p className="text-gray-200 text-lg leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-gradient-to-br from-amber-500/5 to-transparent rounded-2xl p-8 border border-amber-500/20">
              <p className="text-lg text-gray-300 text-center italic">
                All activities remain <span className="text-amber-400 font-semibold">ancillary to ArtOnFilm's primary retail trading operations</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-12 border-2 border-white/10 hover:border-amber-500/30 transition-all">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
              Interested in Supporting?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Contact us to discuss sponsorship opportunities and how your organization can align with our retail activations.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/30"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Patrons;
