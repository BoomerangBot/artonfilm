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

      {/* Zig Ziglar Quote - On Helping Others */}
      <section className="py-20 bg-black border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl text-amber-400 mb-4 font-serif">"</div>
            <blockquote className="text-2xl md:text-3xl font-light italic text-gray-200 mb-6 leading-relaxed">
              {quotes.ziglar.helping}
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-amber-400"></div>
              <div>
                <p className="text-lg font-bold text-amber-400">Zig Ziglar</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Author & Motivational Speaker</p>
              </div>
              <div className="h-px w-12 bg-amber-400"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - Stunning Premium Design */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
              <span className="text-amber-400 text-sm font-bold tracking-wider uppercase">Exclusive Benefits</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
              <span className="gradient-text">Patron</span> <span className="text-white">Privileges</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join an elite circle of cultural leaders and enjoy unparalleled access to the art world
            </p>
          </div>

          {/* Benefits Grid - Premium Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {patronData.benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                
                {/* Card */}
                <div className="relative bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-amber-500/50 transition-all duration-300 h-full">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center font-bold text-black text-lg shadow-lg shadow-amber-500/50">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-amber-500/20 rounded-xl blur-md"></div>
                      <div className="relative w-14 h-14 bg-gradient-to-br from-amber-500/30 to-amber-600/30 rounded-xl flex items-center justify-center border border-amber-500/40 group-hover:scale-110 transition-transform duration-300">
                        <Check size={28} className="text-amber-400" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Benefit Text */}
                  <p className="text-lg text-gray-200 leading-relaxed group-hover:text-white transition-colors">
                    {benefit}
                  </p>
                  
                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action - Premium Card */}
          <div className="relative max-w-4xl mx-auto">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 via-purple-500/30 to-amber-500/30 rounded-3xl blur-2xl opacity-50"></div>
            
            <div className="relative bg-gradient-to-br from-zinc-900/95 to-black/95 backdrop-blur-xl rounded-3xl p-12 border-2 border-amber-500/30 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-amber-500/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-purple-500/10 to-transparent"></div>
              
              <div className="relative">
                {/* Top Section */}
                <div className="text-center mb-8 pb-8 border-b border-white/10">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400"></div>
                    <Users className="text-amber-400" size={24} />
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400"></div>
                  </div>
                  <p className="text-gray-400 mb-3 text-sm uppercase tracking-wider font-semibold">Annual Contribution</p>
                  <p className="text-6xl font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
                    {patronData.contribution}
                  </p>
                  <p className="text-gray-400 mt-4 text-sm">
                    Flexible payment plans available
                  </p>
                </div>

                {/* Benefits Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="text-center p-4 bg-black/30 rounded-xl border border-white/5">
                    <div className="text-3xl font-bold text-amber-400 mb-1">{patronData.benefits.length}</div>
                    <div className="text-sm text-gray-400">Exclusive Benefits</div>
                  </div>
                  <div className="text-center p-4 bg-black/30 rounded-xl border border-white/5">
                    <div className="text-3xl font-bold text-amber-400 mb-1">∞</div>
                    <div className="text-sm text-gray-400">Lifetime Access</div>
                  </div>
                  <div className="text-center p-4 bg-black/30 rounded-xl border border-white/5">
                    <div className="text-3xl font-bold text-amber-400 mb-1">VIP</div>
                    <div className="text-sm text-gray-400">Elite Status</div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <Link
                    to="/contact?subject=Founding+Patron+2025"
                    className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-lg rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-amber-500/40"
                  >
                    <span>Join the Patron Circle</span>
                    <ArrowRight size={24} />
                  </Link>
                  <p className="text-xs text-gray-500 mt-4">
                    Limited founding memberships available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info - Enhanced */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
        
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="relative">
            {/* Decorative corners */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-amber-500/30"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-amber-500/30"></div>
            
            <div className="bg-gradient-to-br from-zinc-900/50 to-black/50 backdrop-blur-sm rounded-3xl p-16 border border-white/10">
              <blockquote className="text-2xl md:text-3xl text-gray-200 leading-relaxed text-center font-light italic">
                As a Founding Patron, you become part of a select group shaping the future of UK-EU cultural exchange. Your support enables extraordinary artists to reach new audiences and creates lasting connections across borders.
              </blockquote>
              
              <div className="mt-10 flex justify-center">
                <div className="h-1 w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Patrons;