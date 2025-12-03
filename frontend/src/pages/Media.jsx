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

      {/* Gallery - MOVED UP */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 mb-6 bg-gradient-to-r from-amber-500/20 to-purple-500/20 border border-amber-400/30 rounded-full backdrop-blur-md">
              <Film size={20} className="text-amber-400" />
              <span className="text-amber-400 text-sm font-semibold tracking-wider">PROMOTIONAL MATERIALS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent mb-4">
              Behind the Scenes
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Explore our cinematic journey through promotional artwork and event materials
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl group cursor-pointer shadow-2xl shadow-black/50 border-2 border-amber-500/20 hover:border-amber-500/50 transition-all bg-black"
              >
                <img
                  src={image}
                  alt={`Behind the scenes ${index + 1}`}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 mb-6 bg-gradient-to-r from-amber-500/20 to-purple-500/20 border border-amber-400/30 rounded-full backdrop-blur-md">
              <Play size={20} className="text-amber-400" />
              <span className="text-amber-400 text-sm font-semibold tracking-wider">VIDEO SHOWCASE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent mb-4">
              Featured Videos
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Experience our cinematic journey through motion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Video 1 */}
            <div className="space-y-4">
              <div className="relative bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/10 border-2 border-amber-500/20 hover:border-amber-500/40 transition-all mx-auto" style={{ maxWidth: '540px', aspectRatio: '9/16' }}>
                <video 
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 540 960'%3E%3Crect fill='%23000000' width='540' height='960'/%3E%3C/svg%3E"
                >
                  <source 
                    src="https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/i5qz746b_WhatsApp%20Video%202025-10-31%20at%2009.38.20_f37e7469.mp4" 
                    type="video/mp4" 
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-center text-sm text-gray-400">
                Cinematic showcase by Carnaby International
              </p>
            </div>

            {/* Video 2 */}
            <div className="space-y-4">
              <div className="relative bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10 border-2 border-purple-500/20 hover:border-purple-500/40 transition-all mx-auto" style={{ maxWidth: '540px', aspectRatio: '9/16' }}>
                <video 
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 540 960'%3E%3Crect fill='%23000000' width='540' height='960'/%3E%3C/svg%3E"
                >
                  <source 
                    src="https://customer-assets.emergentagent.com/job_art-platform-revamp-1/artifacts/jvtvbukl_WhatsApp%20Video%202025-11-04%20at%2016.11.02_65f0fa6b.mp4" 
                    type="video/mp4" 
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-center text-sm text-gray-400">
                Artist showcase and exhibition highlights
              </p>
            </div>

            {/* Video 3 */}
            <div className="space-y-4">
              <div className="relative bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/10 border-2 border-amber-500/20 hover:border-amber-500/40 transition-all mx-auto" style={{ maxWidth: '540px', aspectRatio: '9/16' }}>
                <video 
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 540 960'%3E%3Crect fill='%23000000' width='540' height='960'/%3E%3C/svg%3E"
                >
                  <source 
                    src="https://customer-assets.emergentagent.com/job_art-platform-revamp-1/artifacts/bxb8kaqz_WhatsApp%20Video%202025-11-04%20at%2016.48.13_5977d510.mp4" 
                    type="video/mp4" 
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-center text-sm text-gray-400">
                Collection highlights and artist insights
              </p>
            </div>

            {/* Video 4 - NEW */}
            <div className="space-y-4">
              <div className="relative bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl shadow-green-500/10 border-2 border-green-500/20 hover:border-green-500/40 transition-all mx-auto" style={{ maxWidth: '540px', aspectRatio: '9/16' }}>
                <video 
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 540 960'%3E%3Crect fill='%23000000' width='540' height='960'/%3E%3C/svg%3E"
                >
                  <source 
                    src="https://customer-assets.emergentagent.com/job_art-platform-revamp-1/artifacts/fyfs8vn8_WhatsApp%20Video%202025-11-05%20at%2009.40.06_14b514f9.mp4" 
                    type="video/mp4" 
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-center text-sm text-gray-400">
                Behind the scenes creative process
              </p>
            </div>

            {/* Video 5 - NEW */}
            <div className="space-y-4">
              <div className="relative bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl shadow-red-500/10 border-2 border-red-500/20 hover:border-red-500/40 transition-all mx-auto" style={{ maxWidth: '540px', aspectRatio: '9/16' }}>
                <video 
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 540 960'%3E%3Crect fill='%23000000' width='540' height='960'/%3E%3C/svg%3E"
                >
                  <source 
                    src="https://customer-assets.emergentagent.com/job_art-platform-revamp-1/artifacts/wt03gnum_WhatsApp%20Video%202025-11-05%20at%2009.43.52_75b216e3.mp4" 
                    type="video/mp4" 
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-center text-sm text-gray-400">
                Art in motion and exhibition moments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Film Credits */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-400 mb-4">
            Cinematic documentation by
          </p>
          <p className="text-3xl font-bold">Carnaby International</p>
        </div>
      </section>
    </div>
  );
};

export default Media;