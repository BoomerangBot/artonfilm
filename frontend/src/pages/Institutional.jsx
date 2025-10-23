import React from 'react';
import { Link } from 'react-router-dom';
import { institutionalData } from '../mock';
import { Globe2, ArrowRight } from 'lucide-react';

const Institutional = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Header */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Globe2 size={64} className="text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-12">
            {institutionalData.headline}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-zinc-900 rounded-2xl p-12 border border-white/10">
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              {institutionalData.content}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Support Options</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>• Endorsement & official support</li>
                  <li>• Venue hosting & facilities</li>
                  <li>• Media collaboration</li>
                  <li>• Local network introductions</li>
                </ul>
              </div>

              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Who Can Join</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>• Embassies & consulates</li>
                  <li>• Cultural institutes</li>
                  <li>• Government agencies</li>
                  <li>• International organizations</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/contact?subject=Embassy+/+Institute+Support"
                className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
              >
                Discuss Institutional Support
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-400 italic">
            "Culture as dialogue, not decoration"
          </p>
        </div>
      </section>
    </div>
  );
};

export default Institutional;