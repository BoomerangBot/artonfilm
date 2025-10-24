import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  heroData, 
  visionData, 
  galleryImages, 
  investmentData,
  impactTransparencyData,
  partnersVenuesData,
  behindCameraData,
  testimonialData,
  charityLogos
} from '../mock';
import { 
  ArrowRight, 
  Palette, 
  Film, 
  TrendingUp, 
  Users, 
  GraduationCap, 
  Leaf, 
  Heart,
  Building2,
  Play,
  Mail
} from 'lucide-react';

const Home = () => {
  const [email, setEmail] = useState('');

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

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    alert('Thank you for subscribing! (Mock submission)');
    setEmail('');
  };

  const getIcon = (iconName) => {
    const icons = {
      users: Users,
      graduation: GraduationCap,
      leaf: Leaf,
      heart: Heart
    };
    const IconComponent = icons[iconName] || Users;
    return <IconComponent size={32} />;
  };

  return (
    <div className="bg-black text-white relative">
      {/* Film Grain Overlay */}
      <div className="film-grain"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroData.backgroundImage}
            alt="Art Gallery"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90"></div>
          
          {/* Cinematic Vignette */}
          <div className="vignette"></div>
          
          {/* Hollywood Spotlights */}
          <div className="spotlight" style={{ top: '-200px', left: '-200px' }}></div>
          <div className="spotlight" style={{ bottom: '-300px', right: '-300px' }}></div>
        </div>

        {/* Decorative Frame Elements - Gold Art Deco Style */}
        <div className="absolute top-8 left-8 w-32 h-32 border-l-4 border-t-4 border-amber-400/40"></div>
        <div className="absolute bottom-8 right-8 w-32 h-32 border-r-4 border-b-4 border-amber-400/40"></div>
        
        {/* Corner accents */}
        <div className="absolute top-8 left-8 w-4 h-4 bg-amber-400/60"></div>
        <div className="absolute bottom-8 right-8 w-4 h-4 bg-amber-400/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
          <div className="max-w-3xl">
            {/* Carnaby Films x ArtOnFilm Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-500/10 to-amber-600/10 backdrop-blur-md border border-amber-400/40 rounded-full mb-6 shadow-lg shadow-amber-500/10">
              <Film size={20} className="text-amber-400" />
              <span className="text-amber-400 text-sm font-semibold tracking-widest">CARNABY FILMS × ARTONFILM</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.95] font-serif text-shadow-lg">
              {heroData.headline}
            </h1>
            
            {/* The World Is Yours - Cinematic Tagline */}
            <div className="mb-8">
              <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 mb-2 font-serif italic" style={{ backgroundSize: '200% auto', animation: 'goldShimmer 4s ease-in-out infinite' }}>
                The World Is Yours
              </p>
            </div>
            
            <div className="relative pl-6 border-l-4 border-amber-400/50 mb-10 backdrop-blur-sm bg-black/20 py-4 rounded-r-lg">
              <p className="text-2xl md:text-3xl text-gray-100 mb-4 font-light italic">
                {heroData.subheadline}
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                {heroData.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/programme"
                className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-300 hover:via-amber-400 hover:to-amber-500 transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl shadow-amber-500/30"
              >
                Explore the Programme
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </Link>
              <Link
                to="/patrons"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-amber-400/80 text-white font-bold rounded-full hover:bg-gradient-to-r hover:from-amber-400/20 hover:to-amber-500/20 hover:border-amber-300 transition-all duration-500 hover:scale-105 active:scale-95 backdrop-blur-md shadow-xl"
              >
                Become a Patron
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Film Strip Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"></div>
      </section>

      {/* Vision Section */}
      <section className="relative py-32 fade-on-scroll opacity-0 transition-all duration-[1500ms] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black"></div>
        
        {/* Soft Hollywood Lighting */}
        <div className="absolute top-0 left-0 right-0 h-96 soft-light-top"></div>
        <div className="absolute inset-0 soft-light-center"></div>
        
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-400/6 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>

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

      {/* Gallery Preview */}
      <section className="py-32 bg-black fade-on-scroll opacity-0 transition-all duration-[1500ms] relative overflow-hidden">
        {/* Soft spotlight from above */}
        <div className="absolute inset-0 soft-light-top"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 font-serif">Through Our Eyes</h2>
            <p className="text-xl text-gray-400">A glimpse into the exhibition experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
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

      {/* Join the Movement */}
      <section className="py-32 relative overflow-hidden fade-on-scroll opacity-0 transition-all duration-[1500ms]">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-black to-amber-600/10"></div>
        <div className="absolute inset-0 soft-light-center"></div>
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

      {/* Investment in Culture Section */}
      <section className="py-32 relative overflow-hidden fade-on-scroll opacity-0 transition-all duration-[1500ms]">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
        <div className="absolute inset-0 soft-light-center"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
        
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8">
              <TrendingUp size={20} className="text-amber-400" />
              <span className="text-amber-400 text-sm font-semibold tracking-widest">FOR INVESTORS</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
              {investmentData.headline}
            </h2>
            <p className="text-2xl text-gray-400 mb-8 max-w-3xl mx-auto font-light">
              {investmentData.subheadline}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
              {investmentData.content}
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {investmentData.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 border border-amber-500/20 text-center group hover:border-amber-500/40 transition-all"
              >
                <div className="text-5xl font-bold text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-lg text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20">
              View Investment Overview
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Impact & Transparency Section */}
      <section className="py-32 bg-zinc-950 fade-on-scroll opacity-0 transition-all duration-[1500ms] relative overflow-hidden">
        <div className="absolute inset-0 soft-light-center"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 font-serif">
              {impactTransparencyData.headline}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {impactTransparencyData.content}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
                <p className="text-gray-400 text-sm">{metric.description}</p>
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

      {/* Featured Partners & Venues */}
      <section className="py-32 relative overflow-hidden fade-on-scroll opacity-0 transition-all duration-[1500ms]">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-950"></div>
        <div className="absolute inset-0 soft-light-center"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/6 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '15s' }}></div>
        
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Building2 size={40} className="text-black" />
            </div>
            <h2 className="text-5xl font-bold mb-6 font-serif">
              {partnersVenuesData.headline}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              {partnersVenuesData.content}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {partnersVenuesData.partners.map((partner, index) => {
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-zinc-900 to-black rounded-xl p-8 border border-white/10 hover:border-amber-500/30 transition-all group"
                >
                  {/* Logo Image */}
                  <div className="h-24 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  
                  <div className="text-center mb-4">
                    <p className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {partner.name}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      {partner.location}
                    </p>
                    
                    {/* Collection Button for Natasha Kissell */}
                    {partner.name === 'Natasha Kissell' && (
                      <Link
                        to="/collection/natasha-kissell"
                        className="inline-block px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20 mb-4"
                      >
                        See My Work
                      </Link>
                    )}
                    
                    {/* Website Link */}
                    {partner.website && partner.website !== '#' && partner.name !== 'Natasha Kissell' && (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm text-amber-400 hover:text-amber-300 transition-colors mb-4"
                      >
                        Visit Website →
                      </a>
                    )}
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-3 pt-4 border-t border-white/5">
                    {partner.instagram && partner.instagram !== '#' && (
                      <a
                        href={partner.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-amber-400 transition-colors"
                        aria-label="Instagram"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    )}
                    {partner.twitter && partner.twitter !== '#' && (
                      <a
                        href={partner.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-amber-400 transition-colors"
                        aria-label="Twitter"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                    )}
                    {partner.facebook && partner.facebook !== '#' && (
                      <a
                        href={partner.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-amber-400 transition-colors"
                        aria-label="Facebook"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                    )}
                    {partner.linkedin && partner.linkedin !== '#' && (
                      <a
                        href={partner.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-amber-400 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                    {partner.email && partner.email !== '#' && (
                      <a
                        href={`mailto:${partner.email}`}
                        className="text-gray-400 hover:text-amber-400 transition-colors"
                        aria-label="Email"
                      >
                        <Mail size={20} />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/partners"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20"
            >
              Partner with Us
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Behind the Camera */}
      <section className="py-32 bg-black fade-on-scroll opacity-0 transition-all duration-[1500ms] relative overflow-hidden">
        <div className="absolute inset-0 soft-light-center"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
                <Film size={16} className="text-purple-400" />
                <span className="text-purple-400 text-xs font-semibold tracking-widest">DOCUMENTARY</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight font-serif">
                {behindCameraData.headline}
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {behindCameraData.content}
              </p>
              <Link
                to="/media"
                className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-full hover:from-purple-400 hover:to-purple-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/20"
              >
                <Play size={20} />
                Watch the Teaser
              </Link>
            </div>

            <div className="relative">
              <div className="relative aspect-video bg-zinc-900 rounded-2xl overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-black/80 group-hover:from-purple-500/30 transition-colors">
                  <div className="w-24 h-24 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white transition-colors group-hover:scale-110 transition-transform">
                    <Play size={40} className="text-black ml-2" />
                  </div>
                </div>
                <img
                  src={galleryImages[1]}
                  alt="Documentary Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                Documentary teaser coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Quote Strip */}
      <section className="py-24 bg-gradient-to-r from-amber-500/10 via-amber-600/15 to-amber-500/10 fade-on-scroll opacity-0 transition-all duration-[1500ms] relative overflow-hidden">
        <div className="absolute inset-0 soft-light-center"></div>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl text-amber-400 mb-6">"</div>
            <p className="text-2xl md:text-3xl font-light italic text-gray-200 mb-8 leading-relaxed">
              {testimonialData.quote}
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-amber-400"></div>
              <div>
                <p className="text-lg font-semibold text-amber-400">{testimonialData.author}</p>
                <p className="text-sm text-gray-400">{testimonialData.title}</p>
              </div>
              <div className="h-px w-12 bg-amber-400"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Charity Partners Section */}
      <section className="py-32 bg-black fade-on-scroll opacity-0 transition-all duration-[1500ms] relative overflow-hidden">
        <div className="absolute inset-0 soft-light-center"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/10 border border-red-500/30 rounded-full mb-8">
              <Heart size={20} className="text-red-400" />
              <span className="text-red-400 text-sm font-semibold tracking-widest">GIVING BACK</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
              Charity Partners
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              15% of our gross income supports vital charitable causes. Together, we're making a difference beyond the gallery walls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {charityLogos.map((charity, index) => (
              <a
                key={charity.name}
                href={charity.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-10 border border-red-500/20 hover:border-red-500/40 transition-all h-full flex flex-col items-center text-center">
                  {/* Logo Image */}
                  <div className="w-32 h-32 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <img
                      src={charity.logo}
                      alt={charity.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                    {charity.name}
                  </h3>
                  
                  {/* Social Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    {charity.social?.twitter && (
                      <a
                        href={charity.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-red-400 transition-colors"
                        aria-label="Twitter"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                    )}
                    {charity.social?.facebook && (
                      <a
                        href={charity.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-red-400 transition-colors"
                        aria-label="Facebook"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                    )}
                    {charity.social?.instagram && (
                      <a
                        href={charity.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-red-400 transition-colors"
                        aria-label="Instagram"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-lg">
              Every exhibition, every sale, every partnership contributes to these vital causes.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter / Insider Circle */}
      <section className="py-32 bg-black fade-on-scroll opacity-0 transition-all duration-[1500ms] relative overflow-hidden">
        <div className="absolute inset-0 soft-light-center"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-12 md:p-16 border border-amber-500/20 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Mail size={40} className="text-black" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Stay in the Frame
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join the ArtOnFilm Insider Circle for exhibition updates, patron opportunities, and early access to limited editions.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 bg-black/50 border border-white/20 rounded-full focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all text-white placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
