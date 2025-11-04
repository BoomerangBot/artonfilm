import React from 'react';
import { Link } from 'react-router-dom';
import { impactTransparencyData } from '../mock';
import { TrendingUp, Users, GraduationCap, Heart, ArrowRight, Sparkles } from 'lucide-react';

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
      {/* Hero Section with Artwork Background */}
      <section className="relative min-h-[80vh] overflow-hidden flex items-center justify-center">
        {/* Artwork Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_art-investor/artifacts/2bg4klwl_16.jpeg')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/90"></div>
          {/* Film grain effect */}
          <div className="absolute inset-0 opacity-30 mix-blend-overlay" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
            }}
          ></div>
        </div>
        
        {/* Floating Artwork Badges */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-2xl overflow-hidden rotate-12 shadow-2xl shadow-amber-500/20 animate-float">
          <img src="https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/kg42jehx_NOM17-min.jpg" alt="Art" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-2xl overflow-hidden -rotate-12 shadow-2xl shadow-purple-500/20 animate-float" style={{animationDelay: '1s'}}>
          <img src="https://customer-assets.emergentagent.com/job_art-investor/artifacts/1axxgyr7_20.jpeg" alt="Art" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-1/2 right-20 w-24 h-24 rounded-full overflow-hidden shadow-2xl shadow-amber-500/30 animate-float" style={{animationDelay: '2s'}}>
          <img src="https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/xho0bx9q_tiger%20and%20turtle.jpg" alt="Art" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-20">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-8 bg-gradient-to-br from-amber-500/30 to-amber-600/30 rounded-full border-4 border-amber-500/50 backdrop-blur-xl shadow-2xl shadow-amber-500/40 animate-pulse-slow">
            <TrendingUp size={50} className="text-amber-400" />
          </div>
          
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-6 bg-gradient-to-r from-amber-500/20 to-purple-500/20 border border-amber-400/40 rounded-full backdrop-blur-md">
            <Sparkles size={20} className="text-amber-400" />
            <span className="text-amber-400 text-sm font-semibold tracking-widest">MEASURABLE IMPACT</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight font-serif">
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent drop-shadow-2xl">
              {impactTransparencyData.headline}
            </span>
          </h1>
          
          <p className="text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
            {impactTransparencyData.content}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/patrons"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-110 shadow-2xl shadow-amber-500/50"
            >
              Join the Impact
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Metrics with Artwork Backgrounds */}
      <section className="py-32 relative overflow-hidden">
        {/* Artwork Background Collage */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/3 h-1/2 opacity-10">
            <img src="https://customer-assets.emergentagent.com/job_art-investor/artifacts/g8idwuhn_18.jpeg" className="w-full h-full object-cover" alt="" />
          </div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/2 opacity-10">
            <img src="https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/89sw7x5n_Winter%209.jpg" className="w-full h-full object-cover" alt="" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/95 to-black"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 mb-6 bg-gradient-to-r from-purple-500/20 to-amber-500/20 border border-amber-400/30 rounded-full backdrop-blur-md">
              <Heart size={20} className="text-amber-400" />
              <span className="text-amber-400 text-sm font-semibold tracking-wider">OUR REACH & INFLUENCE</span>
            </div>
            <h2 className="text-5xl font-bold font-serif text-white mb-4">Impact by Numbers</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {impactTransparencyData.metrics.map((metric, index) => {
              const artworks = [
                'https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/qktaq7ds_NOM19-min.jpg',
                'https://customer-assets.emergentagent.com/job_art-investor/artifacts/lfqa35q2_22.jpeg',
                'https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/1fov7k8q_sunlight.jpg',
                'https://customer-assets.emergentagent.com/job_art-investor/artifacts/2bg4klwl_16.jpeg'
              ];
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl overflow-hidden border border-amber-500/30 hover:border-amber-500/60 transition-all hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-amber-500/30"
                >
                  {/* Artwork background */}
                  <div className="absolute inset-0">
                    <img src={artworks[index]} className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/90 to-zinc-900/80"></div>
                  </div>
                  
                  <div className="relative p-8">
                    <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500/40 transition-colors shadow-lg">
                      {getIcon(metric.icon)}
                    </div>
                    <h3 className="text-sm font-semibold text-amber-400 mb-3 uppercase tracking-wider">
                      {metric.label}
                    </h3>
                    <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                      {metric.value}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{metric.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center gap-2 px-10 py-5 border-2 border-amber-500/50 text-amber-400 font-bold rounded-full hover:bg-amber-500 hover:text-black transition-all hover:scale-105 active:scale-95 shadow-xl shadow-amber-500/20">
              Download Full Report
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="py-20 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif text-white mb-4">Art That Creates Change</h2>
            <p className="text-gray-400 text-lg">Every artwork supports our mission</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/kg42jehx_NOM17-min.jpg',
              'https://customer-assets.emergentagent.com/job_art-investor/artifacts/1axxgyr7_20.jpeg',
              'https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/24f3x6ro_shad2.jpg',
              'https://customer-assets.emergentagent.com/job_art-investor/artifacts/g8idwuhn_18.jpeg',
              'https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/xho0bx9q_tiger%20and%20turtle.jpg',
              'https://customer-assets.emergentagent.com/job_art-investor/artifacts/2bg4klwl_16.jpeg',
              'https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/w6zn765f_NOM11-min.jpg',
              'https://customer-assets.emergentagent.com/job_art-investor/artifacts/lfqa35q2_22.jpeg'
            ].map((img, index) => (
              <div key={index} className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
                <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Impact artwork" />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote with Artwork */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/89sw7x5n_Winter%209.jpg" className="w-full h-full object-cover opacity-5" alt="" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="text-8xl text-amber-400 mb-6 font-serif">"</div>
            <blockquote className="text-3xl md:text-4xl font-light italic text-white mb-8 leading-relaxed">
              We measure success not by what we sell, but by what we change.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400"></div>
              <div>
                <p className="text-xl font-bold text-amber-400">ArtOnFilm</p>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Ethics Is Wealth</p>
              </div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA with Artwork Background */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://customer-assets.emergentagent.com/job_art-investor/artifacts/2bg4klwl_16.jpeg" className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6 font-serif text-white">Join the Movement</h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Be part of something bigger. Every contribution supports education, mental health, and the patient voice.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/patrons"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-110 shadow-2xl shadow-amber-500/50"
            >
              Become a Patron
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 border-2 border-amber-400/80 text-white font-bold rounded-full hover:bg-amber-400/20 backdrop-blur-md transition-all hover:scale-110 shadow-xl"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Impact;
