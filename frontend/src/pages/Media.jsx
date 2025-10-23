import React from 'react';
import { mediaData, galleryImages } from '../mock';
import { Film, Play } from 'lucide-react';

const Media = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Header */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Film size={48} className="text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {mediaData.headline}
          </h1>
          <p className="text-xl text-gray-400">
            {mediaData.content}
          </p>
        </div>
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