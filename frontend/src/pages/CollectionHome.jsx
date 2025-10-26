import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Camera, Clock } from 'lucide-react';

const CollectionHome = () => {
  const collections = [
    {
      id: 1,
      name: 'Natasha Kissell',
      title: 'Modern Eden',
      description: 'Romance in architecture • Grace in modernity',
      subtitle: 'Paintings that re-imagine skylines as stories of hope',
      features: [
        'Award-winning photography',
        'Original and limited edition collections',
        'Private & charitable commissions'
      ],
      additionalInfo: 'Originals: £5,000–£7,000–£10,000 | Past performance at international auction & corporate collection artist | Limited Editions: from £1,500 | Commissions: from £100,000 (30% donated to charity)',
      image: 'https://customer-assets.emergentagent.com/job_art-investor/artifacts/2bg4klwl_16.jpeg',
      path: '/collection/natasha-kissell',
      icon: Palette,
      available: true,
      artworkCount: 24
    },
    {
      id: 2,
      name: 'Dr Chris Lee',
      subtitle: 'JustXR1 / Big City Short Life',
      title: 'Urban Photographer',
      description: 'The city breathes. We listen.',
      subtitle2: 'Photography that captures the heartbeat between chaos and calm',
      features: [
        'Award-winning photography',
        'Original and limited edition collections',
        'All sales support the Lens2Care programme for youth and mental health'
      ],
      additionalInfo: '1/1: £2,500 | 1/10: £1,500 | 1/20: £1,000 | 1/50: £750 | Limited release for Lens2Care Art&Science. JustArt JustGive JustDo',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTc2MTIyNTI0NHww&ixlib=rb-4.1.0&q=85',
      path: '/collection/chris-lee',
      icon: Camera,
      available: false,
      comingSoon: true
    },
    {
      id: 3,
      name: 'To Be Announced',
      title: 'Featured Artist',
      description: 'We are curating an exceptional new collection. Stay tuned for the reveal.',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxhcnQlMjBnYWxsZXJ5fGVufDB8fHx8MTc2MTIyNTI0NHww&ixlib=rb-4.1.0&q=85',
      path: '#',
      icon: Clock,
      available: false,
      tba: true
    },
    {
      id: 4,
      name: 'To Be Announced',
      title: 'Featured Artist',
      description: 'We are curating an exceptional new collection. Stay tuned for the reveal.',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHw1fHxhcnQlMjBnYWxsZXJ5fGVufDB8fHx8MTc2MTIyNTI0NHww&ixlib=rb-4.1.0&q=85',
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
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">Curated Collections</span>
          </div>
          
          <h1 className="brand-display text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-white via-amber-100 to-gold bg-clip-text text-transparent">
            Artist Collections
          </h1>
          
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Explore exceptional works from leading contemporary artists. Each collection tells a unique story through visual artistry.
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
                    {collection.available && collection.artworkCount && (
                      <div className="absolute top-4 right-4 z-20 px-4 py-2 bg-amber-500/90 backdrop-blur-sm rounded-full">
                        <span className="text-black font-bold text-sm">{collection.artworkCount} Artworks</span>
                      </div>
                    )}
                    
                    {collection.comingSoon && (
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
                    
                    <p className="text-neutral-300 leading-relaxed mb-6">
                      {collection.description}
                    </p>
                    
                    {/* Action Button */}
                    {collection.available ? (
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
                      <button
                        disabled
                        className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 text-neutral-400 font-medium rounded-full border border-neutral-700 cursor-not-allowed"
                      >
                        <Clock className="w-4 h-4" />
                        <span>Coming Soon</span>
                      </button>
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
