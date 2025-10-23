import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { heroData, visionData, galleryImages } from '../mock';
import { ArrowRight, Palette, Film } from 'lucide-react';

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Hero Section - More Dramatic */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroData.backgroundImage}
            alt="Art Gallery"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
        </div>

        {/* Decorative Frame Elements */}
        <div className="absolute top-8 left-8 w-32 h-32 border-l-4 border-t-4 border-amber-400/30"></div>
        <div className="absolute bottom-8 right-8 w-32 h-32 border-r-4 border-b-4 border-amber-400/30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
          <div className="max-w-3xl">
            {/* Artistic Label */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-amber-400/30 rounded-full mb-8">
              <Palette size={20} className="text-amber-400" />
              <span className="text-amber-400 text-sm font-medium tracking-wider">UK ↔ EU CULTURAL EXCHANGE</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95] font-serif">
              {heroData.headline.split(' ').map((word, i) => (
                <span key={i} className="inline-block" style={{ animationDelay: `${i * 0.1}s` }}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            
            <div className="relative pl-6 border-l-4 border-amber-400/50 mb-8">
              <p className="text-2xl md:text-3xl text-gray-200 mb-6 font-light italic">
                {heroData.subheadline}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                {heroData.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/programme"
                className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20"
              >
                Explore the Programme
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/patrons"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/80 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
              >
                Become a Patron
              </Link>
            </div>
          </div>
        </div>

        {/* Film Strip Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent"></div>
      </section>

      {/* Vision Section - More Artistic */}
      <section className="relative py-32 fade-on-scroll opacity-0 transition-opacity duration-1000 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
                <Film size={16} className="text-amber-400" />
                <span className="text-amber-400 text-xs font-semibold tracking-widest">ABOUT / VISION</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight font-serif">
                {visionData.headline}
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {visionData.content}
              </p>
              <Link
                to="/programme"
                className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors font-semibold text-lg group"
              >
                See the 2025–26 Tour
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-zinc-900 rounded-2xl p-8 border border-white/10">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Palette size={24} className="text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Award-Winning Artists</h3>
                      <p className="text-gray-400">Natasha Kissell (Painter) & JustXR1 (Photographer)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Film size={24} className="text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Documentary Film</h3>
                      <p className="text-gray-400">Cinematic storytelling by Carnaby Films</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview - More Artistic Layout */}
      <section className="py-32 bg-black fade-on-scroll opacity-0 transition-opacity duration-1000">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 font-serif">Through Our Eyes</h2>
            <p className="text-xl text-gray-400">A glimpse into the exhibition experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large Featured Image */}
            <div className="md:col-span-8 relative group cursor-pointer overflow-hidden rounded-2xl">
              <div className="aspect-[16/10]">
                <img
                  src={galleryImages[0]}
                  alt="Featured Gallery"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 border-4 border-amber-400/0 group-hover:border-amber-400/50 transition-colors rounded-2xl"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="inline-block px-4 py-2 bg-amber-500/90 text-black text-sm font-bold rounded-full mb-3">
                    FEATURED
                  </span>
                  <h3 className="text-2xl font-bold">Contemporary Art Exhibition</h3>
                </div>
              </div>
            </div>

            {/* Side Images */}
            <div className="md:col-span-4 space-y-6">
              <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
                <div className="aspect-square">
                  <img
                    src={galleryImages[1]}
                    alt="Gallery 2"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                  <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/30 transition-colors rounded-2xl"></div>
                </div>
              </div>
              <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
                <div className="aspect-square">
                  <img
                    src={galleryImages[2]}
                    alt="Gallery 3"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                  <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/30 transition-colors rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-black to-purple-500/10"></div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Join the Movement</h2>
          <p className="text-xl text-gray-300 mb-12">
            Be part of the cultural bridge connecting Britain's finest artists with Europe's most vibrant cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/patrons"
              className="px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20"
            >
              Become a Founding Patron
            </Link>
            <Link
              to="/partners"
              className="px-10 py-5 border-2 border-white/80 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95"
            >
              Partnership Opportunities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;