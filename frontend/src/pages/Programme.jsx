import React from 'react';
import { programmeData } from '../mock';
import { Calendar, MapPin, Users, Film, Download } from 'lucide-react';

const Programme = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Header - More Artistic */}
      <section className="relative py-32 border-b border-amber-500/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8">
            <Film size={20} className="text-amber-400" />
            <span className="text-amber-400 text-sm font-semibold tracking-widest">2025-26 EXHIBITION</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 font-serif leading-tight">
            <span className="gradient-text">{programmeData.headline.split('/')[0]}</span>
            <span className="text-gray-400 mx-4">/</span>
            <span className="text-white">{programmeData.headline.split('/')[1]}</span>
          </h1>
          
          <p className="text-3xl text-gray-300 mb-8 font-light">
            {programmeData.subheadline}
          </p>
          
          <div className="flex items-center justify-center gap-3 text-lg text-gray-300">
            <Calendar size={24} className="text-amber-400" />
            <span className="font-medium">{programmeData.tourDates}</span>
          </div>
        </div>
      </section>

      {/* Cities - More Artistic Gallery Layout */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 font-serif">Exhibition Cities</h2>
            <p className="text-xl text-gray-400">A cultural journey across three dynamic European capitals</p>
          </div>

          <div className="space-y-8">
            {programmeData.cities.map((city, index) => (
              <div
                key={city.name}
                className={`group relative overflow-hidden rounded-3xl ${
                  index % 2 === 0 ? 'lg:ml-0 lg:mr-12' : 'lg:ml-12 lg:mr-0'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div
                    className={`relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px] overflow-hidden ${
                      index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <img
                      src={city.image}
                      alt={city.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent"></div>
                    
                    {/* City Number Badge */}
                    <div className="absolute top-8 left-8">
                      <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold text-2xl">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`bg-gradient-to-br from-zinc-900 to-black p-12 lg:p-16 flex flex-col justify-center border border-white/10 ${
                      index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="flex items-center gap-3 text-amber-400 mb-4">
                      <MapPin size={20} />
                      <span className="text-sm font-semibold tracking-wider uppercase">{city.date}</span>
                    </div>
                    
                    <h3 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
                      {city.name}
                    </h3>
                    
                    <p className="text-lg text-gray-400 leading-relaxed">
                      Experience the exhibition in one of Europe's most vibrant cultural capitals. 
                      A unique showcase bringing together visual art, photography, and cinematic storytelling.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details - More Artistic */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Partners */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-10 border border-amber-500/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-amber-500/20 rounded-2xl flex items-center justify-center">
                  <Users size={28} className="text-amber-400" />
                </div>
                <h2 className="text-3xl font-bold font-serif">Partners</h2>
              </div>
              <ul className="space-y-4">
                {programmeData.partners.map((partner) => (
                  <li key={partner} className="flex items-center gap-3 text-gray-300 text-lg">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    {partner}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcomes */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-10 border border-purple-500/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                  <Film size={28} className="text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold font-serif">Outcomes</h2>
              </div>
              <ul className="space-y-4">
                {programmeData.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-center gap-3 text-gray-300 text-lg">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-12 border border-white/10">
              <Download size={48} className="text-amber-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4 font-serif">Full Programme Details</h3>
              <p className="text-gray-400 mb-8 max-w-md">
                Download the complete exhibition programme with dates, venues, and artist information
              </p>
              <button className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20">
                <Download size={20} />
                Download Programme PDF
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Placeholder - PDF will be available soon
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programme;