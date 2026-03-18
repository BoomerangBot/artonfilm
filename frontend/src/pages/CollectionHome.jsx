import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Camera, Clock, Palette, Building2 } from 'lucide-react';

const CollectionHome = () => {
  const collections = [
    {
      id: 1,
      name: 'Natasha Kissell',
      title: 'Commissioned Collection',
      description: 'Contemporary artwork commissioned as part of company inventory',
      subtitle: 'The Modern Eden series forms part of ArtOnFilm Ltd commissioned retail inventory, produced under fixed-fee agreements and held as trading stock.',
      features: [
        'Original paintings commissioned by ArtOnFilm Ltd',
        'Owned outright as trading stock',
        'Available through retail activations',
        'Proceeds support ongoing inventory growth'
      ],
      image: 'https://customer-assets.emergentagent.com/job_art-investor/artifacts/2bg4klwl_16.jpeg',
      path: '/collection/natasha-kissell',
      icon: Palette,
      available: true,
      artworkCount: 24
    },
    {
      id: 2,
      name: 'Dr Chris Lee',
      subtitle: 'JustXR1 – Commissioned Photography',
      title: 'Urban Photography Collection',
      description: 'Contemporary urban photography held as company inventory',
      subtitle2: 'Commissioned photography series documenting contemporary urban life, produced under fixed-fee agreement and owned by ArtOnFilm Ltd as trading stock.',
      features: [
        'Photography commissioned by ArtOnFilm Ltd',
        'Owned outright as trading stock',
        'Available through retail channels',
        'Part of continuous inventory cycle'
      ],
      image: 'https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/1z5jlpab_file_00000000b81461f4a29365c740e75d5b%20%281%29.png',
      path: '/collection/chris-lee',
      icon: Camera,
      available: true,
      artworkCount: 49
    },
    {
      id: 5,
      name: 'Tanglin Trust School',
      subtitle: 'Singapore – 100 Years Celebration',
      title: 'Exhibition Collection',
      description: 'Curated exhibition celebrating 100 years of Tanglin Trust School, Singapore.',
      features: [
        'Exhibition partnership with Tanglin Trust School',
        'Curated collection for centenary celebration',
        'Singapore-based exhibition programme'
      ],
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/q053ny3t_Main%20Image.png',
      path: '/collection/tanglin-trust',
      icon: Building2,
      available: true,
      artworkCount: 37
    },
    {
      id: 6,
      name: 'Swiss Club',
      subtitle: 'Natasha Kissell Exhibition',
      title: 'Exhibition Collection',
      description: 'Curated exhibition of contemporary paintings at the prestigious Swiss Club.',
      features: [
        'Exclusive members\' club venue',
        'Natasha Kissell Modern Eden series',
        'Works available for acquisition'
      ],
      image: 'https://customer-assets.emergentagent.com/job_filmartgallery/artifacts/w4ge5kno_SWISS%20CLUB.jpg',
      path: '/collection/swiss-club',
      icon: Building2,
      available: true,
      artworkCount: 19
    },
    {
      id: 3,
      name: 'Future Commissions',
      title: 'In Development',
      description: 'Additional collections being commissioned as part of inventory growth strategy.',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxhcnQlMjBnYWxsZXJ5fGVufDB8fHx8MTc2MTIyNTI0NHww&ixlib=rb-4.1.0&q=85',
      path: '#',
      icon: Clock,
      available: false,
      tba: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Cinematic background effects */}
        <div className="absolute inset-0 bg-gradient-radial from-amber-500/5 via-transparent to-transparent opacity-30"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-2 border border-amber-500/30 rounded-full bg-amber-500/5">
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">Commissioned Inventory</span>
          </div>
          
          <h1 className="brand-display text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-white via-amber-100 to-gold bg-clip-text text-transparent">
            Commissioned Collections
          </h1>
          
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Contemporary artwork commissioned and owned by ArtOnFilm Ltd as trading stock for retail sale through structured activations and direct placements.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection) => {
              const IconComponent = collection.icon;
              
              return (
                <div
                  key={collection.id}
                  className="group relative overflow-hidden rounded-2xl bg-neutral-900/50 border border-neutral-800/50 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10"
                >
                  {/* Image Section */}
                  <div className="relative h-80 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent z-10"></div>
                    
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Status Badge */}
                    {(collection.available && collection.artworkCount) && (
                      <div className="absolute top-4 right-4 z-20 px-4 py-2 bg-amber-500/90 backdrop-blur-sm rounded-full">
                        <span className="text-black font-bold text-sm">{collection.artworkCount} Artworks</span>
                      </div>
                    )}
                    
                    {collection.comingSoon && collection.id !== 2 && (
                      <div className="absolute top-4 right-4 z-20 px-4 py-2 bg-neutral-800/90 backdrop-blur-sm rounded-full border border-amber-500/30">
                        <span className="text-amber-400 font-medium text-sm">Coming Soon</span>
                      </div>
                    )}
                    
                    {collection.tba && (
                      <div className="absolute top-4 right-4 z-20 px-4 py-2 bg-neutral-800/90 backdrop-blur-sm rounded-full border border-neutral-700">
                        <span className="text-neutral-400 font-medium text-sm">TBA</span>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="relative p-8 z-20">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-amber-400" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                          {collection.name}
                        </h3>
                        {collection.subtitle && (
                          <p className="text-sm text-amber-400 font-medium mb-1">{collection.subtitle}</p>
                        )}
                        <p className="text-sm text-neutral-400 font-medium">{collection.title}</p>
                      </div>
                    </div>
                    
                    <p className="text-neutral-300 leading-relaxed mb-4 italic">
                      {collection.description}
                    </p>
                    
                    {collection.subtitle2 && (
                      <p className="text-neutral-400 text-sm mb-6">
                        {collection.subtitle2}
                      </p>
                    )}
                    
                    {/* Features List */}
                    {collection.features && (
                      <div className="mb-6 space-y-2">
                        {collection.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2"></div>
                            <p className="text-neutral-300 text-sm">{feature}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Additional Info - Small Text */}
                    {collection.additionalInfo && (
                      <p className="text-xs text-neutral-500 mb-6 leading-relaxed">
                        {collection.additionalInfo}
                      </p>
                    )}
                    
                    {/* Action Button */}
                    {(collection.id === 2 || collection.available) ? (
                      <Link
                        to={collection.path}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20"
                      >
                        <span>View Collection</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    ) : collection.comingSoon ? (
                      collection.id === 2 ? (
                        <Link
                          to={collection.path}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20"
                        >
                          <span>View Collection</span>
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      ) : (
                        <button
                          disabled
                          className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 text-neutral-400 font-medium rounded-full border border-neutral-700 cursor-not-allowed"
                        >
                          <Clock className="w-4 h-4" />
                          <span>Coming Soon</span>
                        </button>
                      )
                    ) : (
                      <button
                        disabled
                        className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-neutral-500 font-medium rounded-full border border-neutral-800 cursor-not-allowed"
                      >
                        <span>To Be Announced</span>
                      </button>
                    )}
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 to-transparent"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-amber-500/10 to-gold/10 border border-amber-500/20 rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated on New Collections
          </h2>
          <p className="text-neutral-300 mb-8">
            Be the first to know when we announce new artists and collections.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20"
          >
            Get Notified
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CollectionHome;
