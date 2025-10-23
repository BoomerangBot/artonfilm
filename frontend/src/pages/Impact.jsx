import React from 'react';
import { Link } from 'react-router-dom';
import { impactData } from '../mock';
import { TrendingUp, FileText } from 'lucide-react';

const Impact = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Header */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <TrendingUp size={48} className="text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {impactData.headline}
          </h1>
        </div>
      </section>

      {/* Stats Table */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-6 text-lg font-bold">Impact Area</th>
                  <th className="text-left py-4 px-6 text-lg font-bold">Target</th>
                  <th className="text-left py-4 px-6 text-lg font-bold">Evidence</th>
                </tr>
              </thead>
              <tbody>
                {impactData.stats.map((stat, index) => (
                  <tr
                    key={stat.area}
                    className={`border-b border-white/10 transition-colors hover:bg-zinc-900 ${
                      index % 2 === 0 ? 'bg-black' : 'bg-zinc-950'
                    }`}
                  >
                    <td className="py-6 px-6 font-semibold">{stat.area}</td>
                    <td className="py-6 px-6 text-gray-300">{stat.target}</td>
                    <td className="py-6 px-6 text-gray-400">{stat.evidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <FileText size={40} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-6">Full Impact Report</h2>
          <p className="text-lg text-gray-400 mb-8">
            Access detailed metrics, case studies, and evidence of our cultural impact across all programme areas.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95">
            View Full Impact Matrix
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Placeholder - Full report will be available soon
          </p>
        </div>
      </section>
    </div>
  );
};

export default Impact;