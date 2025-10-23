import React from 'react';
import { Link } from 'react-router-dom';
import { corporateData } from '../mock';
import { Building2, ArrowRight } from 'lucide-react';

const Partners = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Header */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Building2 size={48} className="text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {corporateData.headline}
          </h1>
          <p className="text-2xl text-gray-400">
            {corporateData.subheadline}
          </p>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporateData.tiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 border-2 transition-all hover:scale-105 ${
                  index === 0
                    ? 'bg-zinc-900 border-white'
                    : 'bg-zinc-900 border-white/20 hover:border-white/40'
                }`}
              >
                <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                <p className="text-3xl font-bold mb-6 text-gray-300">{tier.amount}</p>
                <ul className="space-y-3 mb-8">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="text-gray-400">
                      • {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Section */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">CSR Alignment</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            {corporateData.csrNote}
          </p>
          <Link
            to="/contact?subject=Corporate+Partnership+2025"
            className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
          >
            Request Partnership Pack
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Partners;