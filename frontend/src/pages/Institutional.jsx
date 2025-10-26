import React from 'react';
import { Link } from 'react-router-dom';
import { institutionalData, quotes } from '../mock';
import { Globe2, ArrowRight, Building2, Users, Handshake, Award } from 'lucide-react';

const Institutional = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section with Artistic Background */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_filmartgallery/artifacts/dnto9g65_file_00000000b1f0624697fec431faf3e5bb.png')`
          }}
        >
          {/* Gradient Overlays for Cinematic Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
          
          {/* Film Grain Effect */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
            }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full border-2 border-amber-500/50 backdrop-blur-sm">
              <Globe2 size={40} className="text-amber-400" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight font-serif">
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                {institutionalData.headline}
              </span>
            </h1>
            
            <div className="inline-block px-6 py-2 border border-amber-500/30 rounded-full backdrop-blur-sm bg-black/30">
              <p className="text-amber-400 font-medium tracking-wider text-sm uppercase">
                Embassies • Cultural Institutes • International Partners
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="relative">
            {/* Decorative Corner Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-amber-500/30"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-amber-500/30"></div>
            
            <div className="bg-gradient-to-br from-zinc-900/80 to-black/80 rounded-3xl p-12 md:p-16 border border-amber-500/10 backdrop-blur-sm">
              <blockquote className="text-2xl md:text-3xl text-gray-200 leading-relaxed font-light text-center italic">
                "{institutionalData.content}"
              </blockquote>
              
              <div className="mt-8 flex justify-center">
                <div className="h-1 w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Partnership <span className="text-amber-400">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-400">
              Join us in making art accessible globally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Endorsement Card */}
            <div className="group relative bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-amber-500/10 rounded-2xl transition-all duration-300"></div>
              
              <div className="relative">
                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl flex items-center justify-center">
                  <Award className="text-amber-400" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Endorsement</h3>
                <p className="text-gray-400 leading-relaxed">
                  Official support and recognition for our cultural mission
                </p>
              </div>
            </div>

            {/* Venue Hosting Card */}
            <div className="group relative bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-amber-500/10 rounded-2xl transition-all duration-300"></div>
              
              <div className="relative">
                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl flex items-center justify-center">
                  <Building2 className="text-amber-400" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Venue Hosting</h3>
                <p className="text-gray-400 leading-relaxed">
                  Provide facilities and spaces for exhibitions and events
                </p>
              </div>
            </div>

            {/* Media Collaboration Card */}
            <div className="group relative bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-amber-500/10 rounded-2xl transition-all duration-300"></div>
              
              <div className="relative">
                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl flex items-center justify-center">
                  <Handshake className="text-amber-400" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Media Collaboration</h3>
                <p className="text-gray-400 leading-relaxed">
                  Partner with us for press coverage and promotional activities
                </p>
              </div>
            </div>

            {/* Network Introductions Card */}
            <div className="group relative bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-amber-500/10 rounded-2xl transition-all duration-300"></div>
              
              <div className="relative">
                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl flex items-center justify-center">
                  <Users className="text-amber-400" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Network Access</h3>
                <p className="text-gray-400 leading-relaxed">
                  Connect us with local cultural networks and communities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Partner */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Who Can <span className="text-amber-400">Partner With Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-zinc-900/50 to-black/50 rounded-2xl p-10 border border-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-3 h-3 rounded-full bg-amber-500 mt-2"></div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Embassies & Consulates</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Diplomatic missions promoting cultural exchange and international understanding through art
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-900/50 to-black/50 rounded-2xl p-10 border border-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-3 h-3 rounded-full bg-amber-500 mt-2"></div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Cultural Institutes</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Organizations dedicated to preserving and promoting cultural heritage and artistic excellence
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-900/50 to-black/50 rounded-2xl p-10 border border-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-3 h-3 rounded-full bg-amber-500 mt-2"></div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Government Agencies</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Public sector bodies supporting arts, culture, and international relations initiatives
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-900/50 to-black/50 rounded-2xl p-10 border border-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-3 h-3 rounded-full bg-amber-500 mt-2"></div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">International Organizations</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Global entities fostering cooperation and cultural dialogue across borders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="relative">
            {/* Spotlight Effect */}
            <div className="absolute inset-0 bg-gradient-radial from-amber-500/10 via-transparent to-transparent blur-3xl"></div>
            
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                Ready to <span className="text-amber-400">Collaborate?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Let's discuss how we can work together to bring art and culture to communities worldwide
              </p>
              
              <Link
                to="/contact?subject=Institutional+Partnership"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-lg rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-amber-500/30"
              >
                Start the Conversation
                <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Footer */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-2xl md:text-3xl text-gray-400 italic font-light">
            "Culture as dialogue, not decoration"
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-px w-48 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Zig Ziglar Quote - On Building Together */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl text-amber-400 mb-4 font-serif">"</div>
            <blockquote className="text-2xl md:text-3xl font-light italic text-gray-200 mb-6 leading-relaxed">
              {quotes.ziglar.together}
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

export default Institutional;