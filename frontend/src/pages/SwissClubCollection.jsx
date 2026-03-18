import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Calendar, MapPin, ArrowRight, Image, Palette } from 'lucide-react';

const SwissClubCollection = () => {
  const exhibitionImages = [
    // Event photos and artwork images will be added here
    // Example structure:
    // {
    //   id: 1,
    //   title: 'Exhibition Opening',
    //   description: 'Swiss Club exhibition opening night',
    //   image: 'URL_HERE'
    // }
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      <div className="film-grain"></div>

      {/* Header */}
      <section className="relative py-32 border-b border-amber-500/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8">
            <Building2 size={20} className="text-amber-400" />
            <span className="text-amber-400 text-sm font-semibold tracking-widest">EXHIBITION PROGRAMME</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif leading-tight">
            <span className="gradient-text">Swiss Club</span>
          </h1>
          
          <p className="text-2xl text-amber-400 mb-4 font-medium">
            Natasha Kissell Exhibition
          </p>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A curated exhibition of contemporary paintings from the Natasha Kissell collection, presented at the prestigious Swiss Club.
          </p>

          {/* Exhibition Details */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-amber-400" />
              <span>Swiss Club</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-amber-400" />
              <span>2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Palette size={18} className="text-amber-400" />
              <span>Natasha Kissell Collection</span>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibition Gallery */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
              Exhibition Gallery
            </h2>
            <p className="text-xl text-gray-400">
              {exhibitionImages.length > 0 ? `${exhibitionImages.length} exhibition views` : 'Images coming soon'}
            </p>
          </div>

          {exhibitionImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {exhibitionImages.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-gradient-to-br from-zinc-900 to-black rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-amber-400/70 italic mb-3">
                      This work forms part of the ArtOnFilm curated programme.
                    </p>
                    <p className="text-sm text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-zinc-900/50 rounded-2xl border border-white/10">
              <Image size={64} className="mx-auto text-amber-500/30 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Exhibition Images Coming Soon</h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Gallery images from the Swiss Club exhibition will be added shortly.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* About the Exhibition */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 font-serif">
              About the Exhibition
            </h2>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-10 border border-white/10 mb-8">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              ArtOnFilm presented a curated exhibition of contemporary paintings from the Natasha Kissell collection at the Swiss Club. The exhibition showcased vibrant works exploring themes of architecture, coastal living, and mid-century modernism.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              The Swiss Club provided an elegant setting for collectors and art enthusiasts to experience the Modern Eden series, with works available for acquisition through ArtOnFilm's retail programme.
            </p>
          </div>

          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/50 rounded-xl p-6 border border-amber-500/20">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4">
                <Building2 size={24} className="text-amber-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Venue</h3>
              <p className="text-gray-400 text-sm">Swiss Club – an exclusive members' club and prestigious exhibition venue.</p>
            </div>
            <div className="bg-black/50 rounded-xl p-6 border border-purple-500/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Palette size={24} className="text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Featured Artist</h3>
              <p className="text-gray-400 text-sm">Natasha Kissell – contemporary paintings from the Modern Eden series.</p>
            </div>
            <div className="bg-black/50 rounded-xl p-6 border border-red-500/20">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <Image size={24} className="text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Collection</h3>
              <p className="text-gray-400 text-sm">Works commissioned and owned by ArtOnFilm Ltd as trading stock.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Statement */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl p-8 border-l-4 border-blue-500">
            <p className="text-lg text-gray-300 text-center leading-relaxed">
              <span className="font-semibold text-white">ArtOnFilm Ltd operates as a trading company</span> commissioning, producing and selling contemporary artworks through exhibitions and its website.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-serif">
            Explore the Full Collection
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            View the complete Natasha Kissell collection and available works.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/collection/natasha-kissell"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105"
            >
              View Natasha Kissell Collection
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all"
            >
              Shop Available Works
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SwissClubCollection;
