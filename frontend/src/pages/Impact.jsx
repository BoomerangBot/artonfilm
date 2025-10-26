import React from 'react';
import { Link } from 'react-router-dom';
import { impactData, quotes } from '../mock';
import { TrendingUp, FileText } from 'lucide-react';

const Impact = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section with Artistic Background */}
      <section className="relative h-[65vh] min-h-[450px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_filmartgallery/artifacts/yx1o440r_file_00000000314461f7b345efec99445794.png')`
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
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full border-2 border-amber-500/50 backdrop-blur-sm">
              <TrendingUp size={40} className="text-amber-400" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-serif">
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                {impactData.headline}
              </span>
            </h1>
            
            <div className="inline-block px-6 py-2 border border-amber-500/30 rounded-full backdrop-blur-sm bg-black/30">
              <p className="text-amber-400 font-medium tracking-wider text-sm uppercase">
                Measurable • Transparent • Accountable
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Stats Table */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-6 text-lg font-bold">Impact Area</th>
                  <th className="text-left py-4 px-6 text-lg font-bold">Target</th>
                  <th className="text-left py-4 px-6 text-lg font-bold">Evidence</th>
                </tr>
              </thead>
              <tbody>
                {impactData.stats.map((stat, index) => (
                  <tr
                    key={stat.area}
                    className={`border-b border-white/10 transition-colors hover:bg-zinc-900 ${
                      index % 2 === 0 ? 'bg-black' : 'bg-zinc-950'
                    }`}
                  >
                    <td className="py-6 px-6 font-semibold">{stat.area}</td>
                    <td className="py-6 px-6 text-gray-300">{stat.target}</td>
                    <td className="py-6 px-6 text-gray-400">{stat.evidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <FileText size={40} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-6">Full Impact Report</h2>
          <p className="text-lg text-gray-400 mb-8">
            Access detailed metrics, case studies, and evidence of our cultural impact across all programme areas.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95">
            View Full Impact Matrix
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Placeholder - Full report will be available soon
          </p>
        </div>
      </section>

      {/* Zig Ziglar Quote - On Attitude & Success */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl text-amber-400 mb-4 font-serif">"</div>
            <blockquote className="text-2xl md:text-3xl font-light italic text-gray-200 mb-6 leading-relaxed">
              {quotes.ziglar.attitude}
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
    </div>
  );
};

export default Impact;