import React from 'react';
import { programmeData } from '../mock';
import { Calendar, MapPin, Users, Film } from 'lucide-react';

const Programme = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Header */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {programmeData.headline}
          </h1>
          <p className="text-2xl text-gray-400 mb-8">
            {programmeData.subheadline}
          </p>
          <div className="flex items-center justify-center gap-2 text-lg text-gray-300">
            <Calendar size={20} />
            <span>{programmeData.tourDates}</span>
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programmeData.cities.map((city, index) => (
              <div
                key={city.name}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
              >
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <MapPin size={16} />
                    <span className="text-sm">{city.date}</span>
                  </div>
                  <h3 className="text-3xl font-bold">{city.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Partners */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Users size={24} className="text-white" />
                <h2 className="text-2xl font-bold">Partners</h2>
              </div>
              <ul className="space-y-3">
                {programmeData.partners.map((partner) => (
                  <li key={partner} className="text-gray-400 text-lg">
                    {partner}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcomes */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Film size={24} className="text-white" />
                <h2 className="text-2xl font-bold">Outcomes</h2>
              </div>
              <ul className="space-y-3">
                {programmeData.outcomes.map((outcome) => (
                  <li key={outcome} className="text-gray-400 text-lg">
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95">
              Download Programme PDF
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Placeholder - PDF will be available soon
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programme;