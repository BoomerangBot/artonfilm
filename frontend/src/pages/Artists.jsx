import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Camera } from 'lucide-react';

const Artists = () => {
  const artists = [
    {
      id: 'natasha-kissell',
      name: 'Natasha Kissell',
      discipline: 'Contemporary Painting',
      image: 'https://customer-assets.emergentagent.com/job_8612bb1e-f34a-4ed4-a2ec-6a808376b9b4/artifacts/0o11iz4d_WhatsApp%20Image%202026-03-11%20at%2013.56.33%20%285%29.jpeg',
      description: 'British contemporary artist known for vibrant architectural paintings that capture the essence of mid-century modernism and coastal luxury.',
      collectionLink: '/collection/natasha-kissell',
      cvLink: '/artist-cv#natasha-kissell'
    },
    {
      id: 'chris-lee',
      name: 'Dr Chris Lee',
      discipline: 'Photography',
      image: 'https://customer-assets.emergentagent.com/job_film-canvas/artifacts/5z2mwq5y_big%20ben.jpg',
      description: 'Award-winning photographer whose urban landscapes and documentary work explore the intersection of architecture, music, and human experience.',
      collectionLink: '/collection/chris-lee',
      cvLink: '/artist-cv#chris-lee'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-black to-black"></div>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-400/30 rounded-full">
            <Palette size={18} className="text-amber-400" />
            <span className="text-amber-400 text-xs font-semibold tracking-wider">COMMISSIONED ARTISTS</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
            Our Artists
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            ArtOnFilm commissions established and emerging artists to create original works for exhibition and sale. Each artist brings a unique vision to our contemporary art collections.
          </p>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {artists.map((artist) => (
              <div 
                key={artist.id}
                className="group bg-gradient-to-br from-zinc-900 to-black rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/30 transition-all duration-500"
              >
                {/* Artist Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-amber-500/20 border border-amber-400/30 rounded-full text-amber-400 text-xs font-semibold mb-2">
                      {artist.discipline}
                    </span>
                  </div>
                </div>
                
                {/* Artist Info */}
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {artist.name}
                  </h2>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {artist.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to={artist.collectionLink}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all"
                    >
                      View Collection
                      <ArrowRight size={18} />
                    </Link>
                    <Link
                      to={artist.cvLink}
                      className="inline-flex items-center gap-2 px-6 py-3 border border-amber-400/50 text-amber-400 font-semibold rounded-full hover:bg-amber-400/10 transition-all"
                    >
                      Artist CV
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Information */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-serif">
            Commission Process
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            All artists are commissioned under fixed-fee agreements. Upon completion, artwork ownership transfers fully to ArtOnFilm Ltd and becomes part of our trading inventory for exhibition and sale.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all"
          >
            Enquire About Commissions
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Artists;
