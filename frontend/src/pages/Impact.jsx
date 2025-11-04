import React from 'react';
import { Link } from 'react-router-dom';
import { impactTransparencyData } from '../mock';
import { TrendingUp, Users, GraduationCap, Heart, ArrowRight } from 'lucide-react';

const Impact = () => {
  const getIcon = (iconName) => {
    const icons = {
      TrendingUp: <TrendingUp size={32} className="text-amber-400" />,
      Users: <Users size={32} className="text-amber-400" />,
      GraduationCap: <GraduationCap size={32} className="text-amber-400" />,
      Heart: <Heart size={32} className="text-amber-400" />
    };
    return icons[iconName] || icons.Heart;
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-amber-500/10 via-transparent to-transparent blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-20">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full border-2 border-amber-500/50 backdrop-blur-sm">
            <TrendingUp size={40} className="text-amber-400" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight font-serif">
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
              {impactTransparencyData.headline}
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {impactTransparencyData.content}
          </p>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {impactTransparencyData.metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 border border-white/10 hover:border-amber-500/30 transition-all group"
              >
                <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500/30 transition-colors">
                  {getIcon(metric.icon)}
                </div>
                <h3 className="text-sm font-semibold text-amber-400 mb-3 uppercase tracking-wider">
                  {metric.label}
                </h3>
                <div className="text-3xl font-bold mb-3">{metric.value}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{metric.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center gap-2 px-10 py-5 border-2 border-amber-500/50 text-amber-400 font-bold rounded-full hover:bg-amber-500 hover:text-black transition-all hover:scale-105 active:scale-95">
              Download Impact Report
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-black border-y border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl text-amber-400 mb-4 font-serif">"</div>
            <blockquote className="text-2xl md:text-3xl font-light italic text-gray-200 mb-6 leading-relaxed">
              Together, we measure success not by what we sell, but by what we change.
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-amber-400"></div>
              <div>
                <p className="text-lg font-bold text-amber-400">ArtOnFilm</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Ethics Is Wealth</p>
              </div>
              <div className="h-px w-12 bg-amber-400"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 font-serif">Join the Movement</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Be part of something bigger. Every contribution, every viewing, every moment of generosity supports education, mental health, and the patient voice.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/patrons"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105"
            >
              Become a Patron
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-amber-400/80 text-white font-bold rounded-full hover:bg-amber-400/20 transition-all hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;