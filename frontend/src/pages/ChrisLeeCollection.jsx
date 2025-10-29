import React, { useState } from 'react';
import { chrisLeeArtworks, chrisLeeMusicArtworks, chrisLeeColorArtworks } from '../mock';
import { Camera, Film, Eye, Mail, Music, Building2, Image } from 'lucide-react';
import { toast } from 'sonner';

const ChrisLeeCollection = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [selectedCollection, setSelectedCollection] = useState('all');

  // Combine all collections
  const allArtworks = [
    ...chrisLeeArtworks,
    ...chrisLeeMusicArtworks,
    ...chrisLeeColorArtworks
  ];

  // Filter artworks based on selected collection
  const filteredArtworks = selectedCollection === 'all' 
    ? allArtworks 
    : selectedCollection === 'urban'
    ? chrisLeeArtworks
    : selectedCollection === 'music'
    ? chrisLeeMusicArtworks
    : chrisLeeColorArtworks;

  const handleInquiry = (artwork) => {
    toast.success("Inquiry Sent!", {
      description: `We'll contact you about "${artwork.title}" within 24 hours.`,
    });
    setSelectedArtwork(null);
  };

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      <div className="film-grain"></div>

      {/* Header */}
      <section className="relative py-32 border-b border-amber-500/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 soft-light-center"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/10 border border-red-500/30 rounded-full mb-8">
            <Camera size={20} className="text-red-400" />
            <span className="text-red-400 text-sm font-semibold tracking-widest">FINE ART PHOTOGRAPHY</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 font-serif leading-tight">
            <span className="gradient-text">Dr Chris Lee</span>
            <br />
            <span className="text-white">JUSTXR1 Collections</span>
          </h1>
          
          <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Capturing urban narratives through dramatic black & white photography, where moments become timeless stories.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://instagram.com/justxr1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-red-400/80 text-white font-bold rounded-full hover:bg-gradient-to-r hover:from-red-400/20 hover:to-red-500/20 hover:border-red-300 transition-all duration-500 hover:scale-105 active:scale-95 backdrop-blur-md"
            >
              <Camera size={20} />
              Follow on Instagram
            </a>
            <a
              href="mailto:rh@artonfilm.uk?subject=JustXR1 Artwork Inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-black font-bold rounded-full hover:from-red-300 hover:via-red-400 hover:to-red-500 transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl shadow-red-500/30"
            >
              <Mail size={20} />
              Contact Gallery
            </a>
          </div>
        </div>
      </section>

      {/* Collection Filters */}
      <section className="py-12 bg-zinc-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCollection('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCollection === 'all'
                  ? 'bg-gradient-to-r from-red-400 to-red-600 text-black'
                  : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <Film size={18} />
                All Collections ({allArtworks.length})
              </span>
            </button>
            <button
              onClick={() => setSelectedCollection('urban')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCollection === 'urban'
                  ? 'bg-gradient-to-r from-red-400 to-red-600 text-black'
                  : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <Building2 size={18} />
                Urban Chronicles ({chrisLeeArtworks.length})
              </span>
            </button>
            <button
              onClick={() => setSelectedCollection('music')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCollection === 'music'
                  ? 'bg-gradient-to-r from-red-400 to-red-600 text-black'
                  : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <Music size={18} />
                Soul & Strings ({chrisLeeMusicArtworks.length})
              </span>
            </button>
            <button
              onClick={() => setSelectedCollection('color')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCollection === 'color'
                  ? 'bg-gradient-to-r from-red-400 to-red-600 text-black'
                  : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <Image size={18} />
                Chromatic Visions ({chrisLeeColorArtworks.length})
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Artworks Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 soft-light-center"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-gray-400 text-lg">
              Showing <span className="text-red-400 font-semibold">{filteredArtworks.length}</span> available works
            </p>
          </div>

          {filteredArtworks.length === 0 ? (
            <div className="text-center py-20">
              <Image size={64} className="mx-auto mb-4 text-gray-600" />
              <p className="text-xl text-gray-400">Coming Soon</p>
              <p className="text-gray-500 mt-2">This collection is being curated</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredArtworks.map((artwork) => (
                <div
                  key={artwork.id}
                  className="group relative bg-gradient-to-br from-zinc-900 to-black rounded-xl overflow-hidden border border-white/10 hover:border-red-500/30 transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedArtwork(artwork)}
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <button
                        className="px-4 py-2 bg-white/90 backdrop-blur-sm text-black font-bold rounded-full hover:bg-white transition-all flex items-center gap-2 text-sm"
                      >
                        <Eye size={16} />
                        View
                      </button>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full">
                      <span className="text-red-400 text-xs font-semibold uppercase tracking-wider">{artwork.category}</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-1 line-clamp-1 group-hover:text-red-400 transition-colors">{artwork.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{artwork.medium}</p>
                    <p className="text-xs text-gray-500 line-clamp-2 mb-3">{artwork.description}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-white/5">
                      <span className="text-sm font-semibold text-red-400">POA</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Artwork Detail Modal */}
      {selectedArtwork && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedArtwork(null)}
        >
          <div 
            className="relative bg-zinc-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border-2 border-red-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArtwork(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/80 rounded-full hover:bg-black transition-colors"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Image */}
              <div className="relative aspect-square rounded-xl overflow-hidden border border-red-500/20">
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-4">
                    <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">{selectedArtwork.category}</span>
                  </div>
                  
                  <h2 className="text-4xl font-bold mb-4 font-serif">{selectedArtwork.title}</h2>
                  
                  <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Medium</span>
                      <span className="font-semibold">{selectedArtwork.medium}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Pricing</span>
                      <span className="font-semibold text-red-400">Price on Application</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {selectedArtwork.description}
                  </p>
                </div>

                <button
                  onClick={() => handleInquiry(selectedArtwork)}
                  className="w-full px-8 py-4 bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-black font-bold rounded-full hover:from-red-300 hover:via-red-400 hover:to-red-500 transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl shadow-red-500/30"
                >
                  Inquire About This Work
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* About the Artist */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 soft-light-center"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 font-serif text-center">About the Artist</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Artist Photo */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-red-500/30 shadow-2xl bg-zinc-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full flex items-center justify-center">
                    <Camera size={64} className="text-red-400" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">JUSTXR1</h3>
                  <p className="text-red-400 text-lg">Dr Chris Lee</p>
                </div>
              </div>
            </div>

            {/* Artist Bio */}
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                Dr Chris Lee, working under the creative moniker JUSTXR1, is a London-based photographer and mental health advocate. 
                His work merges dramatic black and white photography with themes of urban existence, architectural heritage, and human emotion.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Through the Lens2Care initiative, Chris combines art with advocacy, creating transformative experiences 
                that explore the intersection of creativity, technology, and mental wellbeing. His photography captures 
                the fleeting moments of city life with a cinematic intensity that challenges viewers to reconsider the 
                ordinary as extraordinary.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed italic">
                "Big City. Short Life." – This philosophy underpins his work, celebrating the urgency and beauty of urban narratives 
                while acknowledging the transient nature of modern existence.
              </p>
              
              {/* Artist Details */}
              <div className="pt-6 border-t border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-red-400 text-sm font-semibold mb-1">Based in</p>
                    <p className="text-white">London, UK</p>
                  </div>
                  <div>
                    <p className="text-red-400 text-sm font-semibold mb-1">Style</p>
                    <p className="text-white">Urban Documentary</p>
                  </div>
                  <div>
                    <p className="text-red-400 text-sm font-semibold mb-1">Medium</p>
                    <p className="text-white">B&W Photography</p>
                  </div>
                  <div>
                    <p className="text-red-400 text-sm font-semibold mb-1">Initiative</p>
                    <p className="text-white">Lens2Care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChrisLeeCollection;
