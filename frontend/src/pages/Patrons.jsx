import React from 'react';
import { Link } from 'react-router-dom';
import { patronData, quotes } from '../mock';
import { Check, ArrowRight, Users } from 'lucide-react';

const Patrons = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section with Artistic Background */}
      <section className="relative h-[65vh] min-h-[450px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_filmartgallery/artifacts/jxkyrjva_file_000000006a2461f7b89e4e2f623440d7.png')`
          }}
        >
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
          
          {/* Film Grain Effect */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulance type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
            }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full border-2 border-amber-500/50 backdrop-blur-sm">
              <Users size={40} className="text-amber-400" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-serif">
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                {patronData.headline}
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 font-light max-w-3xl mx-auto">
              {patronData.subheadline}
            </p>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-zinc-900 rounded-2xl p-12 border border-white/10">
            <h2 className="text-3xl font-bold mb-8 text-center">Patron Benefits</h2>
            <ul className="space-y-6 mb-12">
              {patronData.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                      <Check size={16} className="text-black" />
                    </div>
                  </div>
                  <span className="text-lg text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-white/10 pt-8">
              <div className="text-center mb-8">
                <p className="text-gray-400 mb-2">Annual Contribution</p>
                <p className="text-4xl font-bold">{patronData.contribution}</p>
              </div>

              <Link
                to="/contact?subject=Founding+Patron+2025"
                className="block w-full px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 text-center"
              >
                Join the Patron Circle
                <ArrowRight className="inline-block ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-400 leading-relaxed">
            As a Founding Patron, you become part of a select group shaping the future of UK-EU cultural exchange. Your support enables extraordinary artists to reach new audiences and creates lasting connections across borders.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Patrons;