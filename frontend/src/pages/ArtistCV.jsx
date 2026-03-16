import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, GraduationCap, MapPin, Calendar } from 'lucide-react';

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
        { year: '2024', title: 'Pacific Dreams', venue: 'Carnaby Gallery', location: 'London' },
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
      discipline: 'Photography',
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
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-black to-black"></div>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-400/30 rounded-full">
            <Award size={18} className="text-purple-400" />
            <span className="text-purple-400 text-xs font-semibold tracking-wider">CREDENTIALS</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
            Artist CV
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional backgrounds, exhibition histories, and credentials of our commissioned artists.
          </p>
        </div>
      </section>

      {/* Artist CVs */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-20">
          {artists.map((artist) => (
            <div 
              key={artist.id}
              id={artist.id}
              className="scroll-mt-32"
            >
              {/* Artist Header */}
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="w-full md:w-1/3">
                  <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <span className="inline-block px-3 py-1 bg-amber-500/20 border border-amber-400/30 rounded-full text-amber-400 text-xs font-semibold mb-3">
                    {artist.discipline}
                  </span>
                  <h2 className="text-4xl font-bold text-white mb-4 font-serif">
                    {artist.name}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {artist.bio}
                  </p>
                  <Link
                    to={artist.collectionLink}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all"
                  >
                    View Collection
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              {/* Education */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap size={24} className="text-purple-400" />
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>
                <div className="space-y-4">
                  {artist.education.map((edu, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 bg-zinc-900/50 rounded-xl border border-white/5"
                    >
                      <span className="text-amber-400 font-bold">{edu.year}</span>
                      <div>
                        <p className="text-white font-semibold">{edu.degree}</p>
                        <p className="text-gray-400">{edu.institution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exhibition History */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar size={24} className="text-amber-400" />
                  <h3 className="text-2xl font-bold text-white">Selected Exhibitions</h3>
                </div>
                <div className="space-y-4">
                  {artist.exhibitions.map((exhibition, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 bg-zinc-900/50 rounded-xl border border-white/5"
                    >
                      <span className="text-amber-400 font-bold">{exhibition.year}</span>
                      <div className="flex-1">
                        <p className="text-white font-semibold">{exhibition.title}</p>
                        <p className="text-gray-400">{exhibition.venue}</p>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <MapPin size={14} />
                        {exhibition.location}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Collections */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Award size={24} className="text-green-400" />
                  <h3 className="text-2xl font-bold text-white">Collections</h3>
                </div>
                <ul className="space-y-3">
                  {artist.collections.map((collection, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></span>
                      {collection}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="mt-16 border-b border-white/10"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArtistCV;
