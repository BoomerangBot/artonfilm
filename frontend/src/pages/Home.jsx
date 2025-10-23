import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { heroData, visionData, galleryImages } from '../mock';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  useEffect(() => {
    // Fade-in animation on scroll
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroData.backgroundImage}
            alt="Art Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              {heroData.headline}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
              {heroData.subheadline}
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              {heroData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/programme"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
              >
                Explore the Programme
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/patrons"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95"
              >
                Join as a Patron
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 fade-on-scroll opacity-0 transition-opacity duration-1000">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {visionData.headline}
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              {visionData.content}
            </p>
            <Link
              to="/programme"
              className="inline-flex items-center text-white hover:text-gray-300 transition-colors font-medium"
            >
              See the 2025–26 Tour
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-zinc-900 fade-on-scroll opacity-0 transition-opacity duration-1000">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;