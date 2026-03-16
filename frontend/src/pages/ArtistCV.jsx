import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, GraduationCap, MapPin, Calendar, Briefcase } from 'lucide-react';

const ArtistCV = () => {
  const artists = [
    {
      id: 'natasha-kissell',
      name: 'Natasha Kissell',
      discipline: 'Contemporary Painting',
      image: 'https://customer-assets.emergentagent.com/job_8612bb1e-f34a-4ed4-a2ec-6a808376b9b4/artifacts/0o11iz4d_WhatsApp%20Image%202026-03-11%20at%2013.56.33%20%285%29.jpeg',
      bio: 'Natasha Kissell is a British contemporary artist whose vibrant paintings celebrate architectural beauty, coastal luxury, and mid-century modernism. Her work captures the essence of aspirational living through bold colours and expressive brushwork.',
      education: [
        { year: '2008', institution: 'Royal College of Art, London', degree: 'MA Fine Art' },
        { year: '2005', institution: 'Central Saint Martins, London', degree: 'BA (Hons) Fine Art' }
      ],
      exhibitions: [
        { year: '2024', title: 'Modern Eden', venue: 'Singapore Art Week', location: 'Singapore' },
        { year: '2024', title: 'Pacific Dreams', venue: 'Carnaby AV', location: 'London' },
        { year: '2023', title: 'Coastal Visions', venue: 'Copenhagen Contemporary', location: 'Copenhagen' },
        { year: '2022', title: 'Architectural Reverie', venue: 'Swiss Club', location: 'Singapore' }
      ],
      collections: [
        'Private collections in UK, Singapore, and USA',
        'Corporate collections including luxury hospitality groups',
        'ArtOnFilm Ltd permanent collection'
      ],
      collectionLink: '/collection/natasha-kissell'
    },
    {
      id: 'chris-lee',
      name: 'Dr Chris Lee',
      alias: 'JustXR1',
      discipline: 'Fine Art Photography',
      image: 'https://customer-assets.emergentagent.com/job_film-canvas/artifacts/5z2mwq5y_big%20ben.jpg',
      bio: 'Dr Chris Lee (JustXR1) is an award-winning photographer whose work explores the intersection of urban architecture, music culture, and human experience. His documentary approach captures fleeting moments of beauty in everyday urban landscapes.',
      education: [
        { year: '2010', institution: 'University of Westminster', degree: 'PhD Visual Culture' },
        { year: '2004', institution: 'London College of Communication', degree: 'MA Photojournalism' }
      ],
      exhibitions: [
        { year: '2024', title: 'Urban Rhythms', venue: 'ArtOnTour Singapore', location: 'Singapore' },
        { year: '2024', title: 'Lens2Care', venue: 'Chelsea Arts Club', location: 'London' },
        { year: '2023', title: 'City Symphonies', venue: 'DHS Labs', location: 'Berlin' },
        { year: '2022', title: 'Night Visions', venue: 'Tanglin Trust', location: 'Singapore' }
      ],
      collections: [
        'Museum of London photographic archive',
        'Private collections across Europe and Asia',
        'ArtOnFilm Ltd permanent collection'
      ],
      collectionLink: '/collection/chris-lee'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="film-grain"></div>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden border-b border-purple-500/20">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-black to-black"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-400/30 rounded-full">
            <Award size={20} className="text-purple-400" />
            <span className="text-purple-400 text-sm font-semibold tracking-widest">ARTIST CV</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
            <span className="gradient-text">Professional Credentials</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional backgrounds, exhibition histories, and credentials of our commissioned artists.
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-zinc-950 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {artists.map((artist) => (
              <a
                key={artist.id}
                href={`#${artist.id}`}
                className="px-6 py-3 bg-zinc-900/50 border border-white/10 rounded-full text-gray-300 hover:text-amber-400 hover:border-amber-500/30 transition-all"
              >
                {artist.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Artist CVs */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-24">
          {artists.map((artist, artistIndex) => (
            <div 
              key={artist.id}
              id={artist.id}
              className="scroll-mt-32"
              data-testid={`artist-cv-${artist.id}`}
            >
              {/* Artist Header Card */}
              <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl border border-white/10 overflow-hidden mb-12">
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="w-full lg:w-2/5">
                    <div className="relative aspect-square lg:h-full">
                      <img
                        src={artist.image}
                        alt={artist.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r"></div>
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="w-full lg:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="inline-block px-4 py-1.5 bg-amber-500/20 border border-amber-400/30 rounded-full text-amber-400 text-xs font-semibold tracking-wider">
                        {artist.discipline}
                      </span>
                      {artist.alias && (
                        <span className="inline-block px-4 py-1.5 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-400 text-xs font-semibold">
                          {artist.alias}
                        </span>
                      )}
                    </div>
                    
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-serif">
                      {artist.name}
                    </h2>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      {artist.bio}
                    </p>
                    
                    <Link
                      to={artist.collectionLink}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95 w-fit"
                    >
                      View Collection
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* CV Sections Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Education */}
                <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-white/10 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                      <GraduationCap size={24} className="text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Education</h3>
                  </div>
                  <div className="space-y-4">
                    {artist.education.map((edu, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-4 p-4 bg-black/40 rounded-xl border border-purple-500/10"
                      >
                        <span className="text-purple-400 font-bold text-lg">{edu.year}</span>
                        <div>
                          <p className="text-white font-semibold">{edu.degree}</p>
                          <p className="text-gray-400 text-sm">{edu.institution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Collections */}
                <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-white/10 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <Briefcase size={24} className="text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Collections</h3>
                  </div>
                  <div className="space-y-3">
                    {artist.collections.map((collection, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-3 p-4 bg-black/40 rounded-xl border border-green-500/10"
                      >
                        <span className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></span>
                        <p className="text-gray-300">{collection}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Exhibition History - Full Width */}
              <div className="mt-8 bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-white/10 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                    <Calendar size={24} className="text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Selected Exhibitions</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {artist.exhibitions.map((exhibition, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 bg-black/40 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-colors"
                    >
                      <span className="text-amber-400 font-bold text-lg">{exhibition.year}</span>
                      <div className="flex-1">
                        <p className="text-white font-semibold">{exhibition.title}</p>
                        <p className="text-gray-400 text-sm">{exhibition.venue}</p>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <MapPin size={14} />
                        {exhibition.location}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider between artists */}
              {artistIndex < artists.length - 1 && (
                <div className="mt-20 flex items-center gap-4">
                  <div className="flex-1 border-t border-white/10"></div>
                  <Award size={20} className="text-amber-400/50" />
                  <div className="flex-1 border-t border-white/10"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-serif">
            Explore Available Works
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            View and acquire works from our commissioned artists through the ArtOnFilm programme.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105"
            >
              Shop Available Works
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/artists"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all"
            >
              View All Artists
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtistCV;
