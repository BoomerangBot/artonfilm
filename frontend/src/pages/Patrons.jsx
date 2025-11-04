import React from 'react';
import { Link } from 'react-router-dom';
import { membershipData, quotes } from '../mock';
import { ArrowRight, Crown, Gem, Award, Sparkles } from 'lucide-react';

const Patrons = () => {
  const tierIcons = [
    { icon: <Award size={40} className="text-amber-400" />, color: 'from-amber-500/20 to-yellow-500/20' },
    { icon: <Gem size={40} className="text-purple-400" />, color: 'from-purple-500/20 to-pink-500/20' },
    { icon: <Crown size={40} className="text-gold-400" />, color: 'from-amber-500/20 to-orange-500/20' },
    { icon: <Sparkles size={40} className="text-blue-400" />, color: 'from-blue-500/20 to-purple-500/20' }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero with Artwork Collage Background */}
      <section className="relative min-h-[90vh] overflow-hidden flex items-center justify-center">
        {/* Multi-layer Artwork Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/2 h-full">
            <img src="https://customer-assets.emergentagent.com/job_art-investor/artifacts/1axxgyr7_20.jpeg" className="w-full h-full object-cover opacity-30" alt="" />
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full">
            <img src="https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/kg42jehx_NOM17-min.jpg" className="w-full h-full object-cover opacity-30" alt="" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black"></div>
        </div>
        
        {/* Floating Artwork Elements */}
        <div className="absolute top-10 left-10 w-40 h-40 rounded-3xl overflow-hidden rotate-6 shadow-2xl shadow-amber-500/30 border-4 border-amber-500/50 animate-float">
          <img src="https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/xho0bx9q_tiger%20and%20turtle.jpg" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-3xl overflow-hidden -rotate-12 shadow-2xl shadow-purple-500/30 border-4 border-purple-500/50 animate-float" style={{animationDelay: '1.5s'}}>
          <img src="https://customer-assets.emergentagent.com/job_art-investor/artifacts/g8idwuhn_18.jpeg" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="absolute top-1/3 right-20 w-32 h-32 rounded-2xl overflow-hidden rotate-12 shadow-2xl shadow-amber-500/40 animate-float" style={{animationDelay: '0.5s'}}>
          <img src="https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/24f3x6ro_shad2.jpg" className="w-full h-full object-cover" alt="" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-6 bg-gradient-to-r from-amber-500/30 to-purple-500/30 border border-amber-400/50 rounded-full backdrop-blur-xl shadow-2xl">
            <Crown size={24} className="text-amber-400 animate-pulse" />
            <span className="text-amber-400 text-sm font-semibold tracking-widest">EXCLUSIVE MEMBERSHIP</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif text-white drop-shadow-2xl">
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
              {membershipData.title}
            </span>
          </h1>
          
          <p className="text-2xl text-amber-100 mb-4 italic drop-shadow-lg">
            {membershipData.subtitle}
          </p>
          <p className="text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto mb-8 drop-shadow-md">
            {membershipData.description}
          </p>
          
          {/* Quotes with Artwork Badges */}
          <div className="max-w-3xl mx-auto mb-8 p-8 bg-gradient-to-r from-amber-500/10 to-purple-500/10 backdrop-blur-md border border-amber-500/30 rounded-2xl shadow-2xl">
            <p className="text-xl text-amber-100 italic mb-3 leading-relaxed">
              {membershipData.quote}
            </p>
            <p className="text-base text-gray-300 italic mb-2">
              {membershipData.subQuote}
            </p>
            <p className="text-sm text-gray-400 italic">
              {membershipData.attribution}
            </p>
          </div>
        </div>
      </section>

      {/* Patron Levels with Artwork Backgrounds */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
          <div className="absolute top-0 left-0 w-1/3 h-full opacity-5">
            <img src="https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/89sw7x5n_Winter%209.jpg" className="w-full h-full object-cover" alt="" />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 mb-6 bg-gradient-to-r from-purple-500/20 to-amber-500/20 border border-amber-400/30 rounded-full backdrop-blur-md">
              <Gem size={20} className="text-amber-400" />
              <span className="text-amber-400 text-sm font-semibold tracking-wider">TIERS OF GIVING</span>
            </div>
            <h2 className="text-5xl font-bold font-serif text-white mb-4">Patron Levels</h2>
            <p className="text-gray-400 text-lg">Choose your path to legacy</p>
          </div>
          
          <div className="space-y-8 mb-16">
            {membershipData.patronLevels.map((level, index) => {
              const artworks = [
                'https://customer-assets.emergentagent.com/job_art-investor/artifacts/2bg4klwl_16.jpeg',
                'https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/qktaq7ds_NOM19-min.jpg',
                'https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/24f3x6ro_shad2.jpg',
                'https://customer-assets.emergentagent.com/job_art-investor/artifacts/lfqa35q2_22.jpeg'
              ];
              return (
                <div
                  key={index}
                  className="group relative rounded-3xl overflow-hidden border-2 border-amber-500/30 hover:border-amber-500/60 transition-all hover:scale-[1.02] shadow-2xl hover:shadow-amber-500/30"
                >
                  {/* Artwork Background */}
                  <div className="absolute inset-0">
                    <img src={artworks[index]} className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900/95 to-black"></div>
                  </div>
                  
                  <div className="relative p-10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h4 className="text-3xl font-bold text-amber-400 mb-3 flex items-center gap-3">
                          {level.tier}
                        </h4>
                        {level.headline && (
                          <p className="text-lg text-purple-300 italic mb-4">{level.headline}</p>
                        )}
                      </div>
                      <div className={`w-20 h-20 bg-gradient-to-br ${tierIcons[index].color} rounded-2xl flex items-center justify-center shadow-xl border border-amber-500/30`}>
                        {tierIcons[index].icon}
                      </div>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {level.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-gray-200 leading-relaxed flex items-start text-lg">
                          <span className="text-amber-400 mr-4 text-2xl">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="border-t-2 border-amber-500/30 pt-6">
                      <p className="text-amber-400 font-bold italic text-xl">
                        {level.tagline}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Closing Statements with Art */}
          <div className="text-center mb-12 p-10 bg-gradient-to-r from-purple-900/20 via-black/50 to-amber-900/20 rounded-3xl border border-amber-500/30 backdrop-blur-sm">
            {membershipData.closingStatements.map((statement, idx) => (
              <p key={idx} className="text-gray-200 text-xl italic mb-3 leading-relaxed">
                {statement}
              </p>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-12 py-6 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-lg font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-110 active:scale-95 shadow-2xl shadow-amber-500/50"
            >
              Apply for Membership
              <ArrowRight className="ml-3" size={24} />
            </Link>
          </div>
        </div>
      </section>

      {/* Artwork Gallery */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif text-white mb-4">Supporting Our Artists</h2>
            <p className="text-gray-400 text-lg">Your patronage brings art to life</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'https://customer-assets.emergentagent.com/job_art-investor/artifacts/2bg4klwl_16.jpeg',
              'https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/kg42jehx_NOM17-min.jpg',
              'https://customer-assets.emergentagent.com/job_art-investor/artifacts/1axxgyr7_20.jpeg',
              'https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/xho0bx9q_tiger%20and%20turtle.jpg',
              'https://customer-assets.emergentagent.com/job_art-investor/artifacts/g8idwuhn_18.jpeg',
              'https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/24f3x6ro_shad2.jpg'
            ].map((img, index) => (
              <div key={index} className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-amber-500/30 transition-all hover:scale-105">
                <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Patron artwork" />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote with Dramatic Artwork */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/w6zn765f_NOM11-min.jpg" className="w-full h-full object-cover opacity-20" alt="" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="text-9xl text-amber-400 mb-6 font-serif drop-shadow-2xl">"</div>
            <blockquote className="text-3xl md:text-5xl font-light italic text-white mb-10 leading-relaxed drop-shadow-xl">
              Grace is what you leave behind. Legacy is what you create for others.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent to-amber-400 rounded-full"></div>
              <div>
                <p className="text-2xl font-bold text-amber-400">ArtOnFilm</p>
                <p className="text-sm text-gray-400 uppercase tracking-widest">Perks of Giving</p>
              </div>
              <div className="h-1 w-20 bg-gradient-to-l from-transparent to-amber-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Unknown Salesman - Exposure Quote */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-black to-amber-900/20 border-t border-amber-500/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="text-5xl text-amber-400 mb-4 font-serif">"</div>
            <blockquote className="text-xl md:text-2xl font-light italic text-gray-200 mb-6 leading-relaxed">
              {quotes.unknownSalesman.exposure}
            </blockquote>
            <p className="text-sm text-gray-400 uppercase tracking-wider">— The Unknown Salesman</p>
          </div>
        </div>
      </section>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Patrons;
