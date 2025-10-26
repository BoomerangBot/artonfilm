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

      {/* Details - More Artistic with Background Image */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Image with Overlays */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://customer-assets.emergentagent.com/job_filmartgallery/artifacts/19lhfee4_file_00000000820061f9927fb678fcdac653.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90"></div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
              <span className="text-amber-400 text-sm font-bold tracking-wider uppercase">Programme Impact</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 font-serif text-white">
              Driving <span className="text-amber-400">Cultural Change</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our exhibitions create lasting impact through strategic partnerships and measurable outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* Partners Card - Enhanced Professional Design */}
            <div className="group relative">
              {/* Card Background with Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              
              <div className="relative bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-md rounded-3xl p-10 border-2 border-amber-500/30 hover:border-amber-500/50 transition-all duration-300">
                {/* Header with Icon */}
                <div className="flex items-start gap-4 mb-8 pb-6 border-b border-amber-500/20">
                  <div className="relative">
                    <div className="absolute inset-0 bg-amber-500/20 rounded-2xl blur-md"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-amber-500/30 to-amber-600/30 rounded-2xl flex items-center justify-center border border-amber-500/40">
                      <Users size={32} className="text-amber-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold font-serif text-white mb-2">Strategic Partners</h3>
                    <p className="text-gray-400 text-sm">Collaborating for cultural excellence</p>
                  </div>
                </div>
                
                {/* Partners List */}
                <div className="space-y-4">
                  {programmeData.partners.map((partner, idx) => (
                    <div 
                      key={partner}
                      className="flex items-center gap-4 p-4 bg-black/30 rounded-xl border border-amber-500/10 hover:border-amber-500/30 hover:bg-black/40 transition-all group/item"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center border border-amber-500/30">
                        <span className="text-amber-400 font-bold text-sm">{idx + 1}</span>
                      </div>
                      <p className="text-gray-200 text-lg font-medium group-hover/item:text-white transition-colors">
                        {partner}
                      </p>
                    </div>
                  ))}
                </div>
                
                {/* Decorative Bottom Element */}
                <div className="mt-8 pt-6 border-t border-amber-500/20">
                  <p className="text-center text-amber-400 text-sm font-medium">
                    Building bridges through art and culture
                  </p>
                </div>
              </div>
            </div>

            {/* Outcomes Card - Enhanced Professional Design */}
            <div className="group relative">
              {/* Card Background with Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              
              <div className="relative bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-md rounded-3xl p-10 border-2 border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
                {/* Header with Icon */}
                <div className="flex items-start gap-4 mb-8 pb-6 border-b border-purple-500/20">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-500/20 rounded-2xl blur-md"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-2xl flex items-center justify-center border border-purple-500/40">
                      <Film size={32} className="text-purple-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold font-serif text-white mb-2">Expected Outcomes</h3>
                    <p className="text-gray-400 text-sm">Measurable impact and deliverables</p>
                  </div>
                </div>
                
                {/* Outcomes List */}
                <div className="space-y-4">
                  {programmeData.outcomes.map((outcome, idx) => (
                    <div 
                      key={outcome}
                      className="flex items-start gap-4 p-4 bg-black/30 rounded-xl border border-purple-500/10 hover:border-purple-500/30 hover:bg-black/40 transition-all group/item"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30 mt-0.5">
                        <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-200 text-lg font-medium leading-relaxed group-hover/item:text-white transition-colors">
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>
                
                {/* Decorative Bottom Element */}
                <div className="mt-8 pt-6 border-t border-purple-500/20">
                  <p className="text-center text-purple-400 text-sm font-medium">
                    Creating lasting cultural legacy
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-md rounded-3xl p-12 border-2 border-white/20 hover:border-amber-500/40 transition-all duration-300 shadow-2xl">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl"></div>
                <Download size={48} className="relative text-amber-400" />
              </div>
              <h3 className="text-3xl font-bold mb-4 font-serif text-white">Full Programme Details</h3>
              <p className="text-gray-300 mb-8 max-w-md mx-auto leading-relaxed">
                Download the complete exhibition programme with dates, venues, and artist information
              </p>
              <button className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/30">
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