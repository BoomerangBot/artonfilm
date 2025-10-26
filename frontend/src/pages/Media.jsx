import React from 'react';
import { mediaData, galleryImages } from '../mock';
import { Film, Play } from 'lucide-react';

const Media = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section with Artistic Background */}
      <section className="relative h-[65vh] min-h-[450px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_filmartgallery/artifacts/6ls4mrvv_file_00000000aa6c6246b72a85fdcf36d7d0.png')`
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
          <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full border-2 border-amber-500/50 backdrop-blur-sm">
              <Film size={40} className="text-amber-400" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-serif">
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                {mediaData.headline}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {mediaData.content}
            </p>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Video Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video bg-zinc-900 rounded-2xl overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/30 transition-colors">
              <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white transition-colors">
                <Play size={32} className="text-black ml-1" />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-400 text-lg">Video Teaser Coming Soon</p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Placeholder - Teaser video by Carnaby Films will be available soon
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Behind the Scenes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Behind the scenes ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Film Credits */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-400 mb-4">
            Cinematic documentation by
          </p>
          <p className="text-3xl font-bold">Carnaby Films</p>
        </div>
      </section>
    </div>
  );
};

export default Media;