import React from 'react';
import { Link } from 'react-router-dom';
import { membershipData } from '../mock';
import { ArrowRight, Users } from 'lucide-react';

const Patrons = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-20">
          <div className="inline-block mb-6 px-6 py-2 border border-amber-500/30 rounded-full bg-amber-500/5">
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">Exclusive Access</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-white">
            {membershipData.title}
          </h1>
          <p className="text-xl text-gray-300 mb-6 italic">
            {membershipData.subtitle}
          </p>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
            {membershipData.description}
          </p>
          
          {/* Quotes */}
          <div className="max-w-3xl mx-auto mb-6">
            <p className="text-xl text-amber-100 italic mb-2">
              {membershipData.quote}
            </p>
            <p className="text-lg text-gray-400 italic mb-2">
              {membershipData.subQuote}
            </p>
            <p className="text-sm text-gray-500 italic">
              {membershipData.attribution}
            </p>
          </div>
        </div>
      </section>

      {/* Patron Levels */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 mb-12">
            {membershipData.patronLevels.map((level, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 border border-amber-500/20 hover:border-amber-500/40 transition-all"
              >
                <h4 className="text-2xl font-bold text-amber-400 mb-2">{level.tier}</h4>
                {level.headline && (
                  <p className="text-lg text-gray-300 italic mb-4">{level.headline}</p>
                )}
                <ul className="space-y-3 mb-6">
                  {level.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-gray-300 leading-relaxed flex items-start">
                      <span className="text-amber-400 mr-3">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-amber-400 font-semibold italic text-lg border-t border-amber-500/20 pt-4">
                  {level.tagline}
                </p>
              </div>
            ))}
          </div>
          
          {/* Closing Statements */}
          <div className="text-center mb-12 space-y-3">
            {membershipData.closingStatements.map((statement, idx) => (
              <p key={idx} className="text-gray-300 text-lg italic">
                {statement}
              </p>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-amber-500/30"
            >
              Apply for Membership
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-black border-y border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl text-amber-400 mb-4 font-serif">"</div>
            <blockquote className="text-2xl md:text-3xl font-light italic text-gray-200 mb-6 leading-relaxed">
              Grace is what you leave behind. Legacy is not wealth — it's what you create for others.
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-amber-400"></div>
              <div>
                <p className="text-lg font-bold text-amber-400">ArtOnFilm</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Perks of Giving</p>
              </div>
              <div className="h-px w-12 bg-amber-400"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Patrons;
