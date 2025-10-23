import React from 'react';
import { Link } from 'react-router-dom';
import { patronData } from '../mock';
import { Check, ArrowRight } from 'lucide-react';

const Patrons = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Header */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {patronData.headline}
          </h1>
          <p className="text-2xl text-gray-400 mb-8">
            {patronData.subheadline}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-zinc-900 rounded-2xl p-12 border border-white/10">
            <h2 className="text-3xl font-bold mb-8 text-center">Patron Benefits</h2>
            <ul className="space-y-6 mb-12">
              {patronData.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                      <Check size={16} className="text-black" />
                    </div>
                  </div>
                  <span className="text-lg text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-white/10 pt-8">
              <div className="text-center mb-8">
                <p className="text-gray-400 mb-2">Annual Contribution</p>
                <p className="text-4xl font-bold">{patronData.contribution}</p>
              </div>

              <Link
                to="/contact?subject=Founding+Patron+2025"
                className="block w-full px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 text-center"
              >
                Join the Patron Circle
                <ArrowRight className="inline-block ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-400 leading-relaxed">
            As a Founding Patron, you become part of a select group shaping the future of UK-EU cultural exchange. Your support enables extraordinary artists to reach new audiences and creates lasting connections across borders.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Patrons;