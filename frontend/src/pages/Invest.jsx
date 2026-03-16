import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TrendingUp, 
  Building2, 
  Target, 
  HelpCircle, 
  Mail,
  ChevronDown,
  ChevronUp,
  Briefcase,
  Globe,
  Film,
  Palette
} from 'lucide-react';

const Invest = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      question: 'What does ArtOnFilm do?',
      answer: 'ArtOnFilm Ltd is a UK creative intellectual property and advertising company that commissions contemporary artists to create original works released through exhibitions and curated collections.'
    },
    {
      question: 'How does the company generate revenue?',
      answer: 'Revenue is generated through sales of artworks, limited editions, and exhibitions associated with the ArtOnFilm programme.'
    },
    {
      question: 'What stage is the company currently at?',
      answer: 'ArtOnFilm is developing its creative programme and international exhibition schedule, with new collections and exhibitions on the horizon.'
    },
    {
      question: 'How are artworks distributed?',
      answer: 'Works are made available through exhibitions and the ArtOnFilm website as part of the company\'s curated programme.'
    },
    {
      question: 'How can investors request further information?',
      answer: 'Interested investors can request additional information by contacting the company directly.'
    }
  ];

  const investmentSupports = [
    {
      icon: Palette,
      title: 'Commissioning new artwork collections',
      color: 'amber'
    },
    {
      icon: Globe,
      title: 'Producing exhibitions',
      color: 'purple'
    },
    {
      icon: Film,
      title: 'Developing media and promotional campaigns',
      color: 'blue'
    },
    {
      icon: Briefcase,
      title: 'Expanding international programmes',
      color: 'green'
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="film-grain"></div>

      {/* Section 1: Invest Introduction */}
      <section className="relative py-32 overflow-hidden border-b border-green-500/20">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-black to-black"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-gradient-to-r from-green-500/10 to-transparent border border-green-400/30 rounded-full">
            <TrendingUp size={20} className="text-green-400" />
            <span className="text-green-400 text-sm font-semibold tracking-widest">INVEST IN ARTONFILM</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-8 font-serif">
            <span className="gradient-text">Invest in ArtOnFilm</span>
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              ArtOnFilm Ltd is a UK-based creative intellectual property and advertising firm that commissions contemporary artworks and releases curated collections through exhibitions, media projects, and the ArtOnFilm website.
            </p>
            <p>
              The company is actively developing an international exhibition programme aimed at introducing new works to collectors and broader audiences.
            </p>
            <p className="text-green-400 font-medium">
              Investment will facilitate the ongoing expansion of the ArtOnFilm programme.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: How ArtOnFilm Operates */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-400/30 rounded-full">
              <Building2 size={18} className="text-purple-400" />
              <span className="text-purple-400 text-xs font-semibold tracking-wider">BUSINESS MODEL</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 font-serif">
              How ArtOnFilm Operates
            </h2>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-10 border border-white/10 mb-12">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              ArtOnFilm commissions artists to create original artworks as part of its creative programme. Collections are curated for exhibitions, media documentation, and promotional campaigns organised by ArtOnFilm. Works are released through exhibitions and the ArtOnFilm website.
            </p>

            <div className="border-t border-white/10 pt-8">
              <h3 className="text-xl font-bold text-white mb-6">Revenue is generated through:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 bg-black/40 rounded-xl border border-amber-500/20">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center mb-3">
                    <span className="text-amber-400 font-bold">1</span>
                  </div>
                  <p className="text-gray-200">Sale of original artworks</p>
                </div>
                <div className="p-5 bg-black/40 rounded-xl border border-purple-500/20">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mb-3">
                    <span className="text-purple-400 font-bold">2</span>
                  </div>
                  <p className="text-gray-200">Limited edition releases</p>
                </div>
                <div className="p-5 bg-black/40 rounded-xl border border-green-500/20">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mb-3">
                    <span className="text-green-400 font-bold">3</span>
                  </div>
                  <p className="text-gray-200">Exhibitions and related promotional activities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center p-6 bg-green-500/5 rounded-xl border border-green-500/20">
            <p className="text-gray-300 text-lg">
              ArtOnFilm functions as an <span className="text-green-400 font-semibold">active trading entity</span>, producing and selling creative intellectual property.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: What Investment Supports */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-400/30 rounded-full">
              <Target size={18} className="text-amber-400" />
              <span className="text-amber-400 text-xs font-semibold tracking-wider">USE OF FUNDS</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 font-serif">
              What Investment Supports
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Investment is allocated to enhance the ArtOnFilm programme, including:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {investmentSupports.map((item, index) => {
              const IconComponent = item.icon;
              const colorClasses = {
                amber: 'border-amber-500/20 bg-amber-500/10 text-amber-400',
                purple: 'border-purple-500/20 bg-purple-500/10 text-purple-400',
                blue: 'border-blue-500/20 bg-blue-500/10 text-blue-400',
                green: 'border-green-500/20 bg-green-500/10 text-green-400'
              };
              const borderClass = `border-${item.color}-500/20`;
              const bgClass = `bg-${item.color}-500/10`;
              
              return (
                <div 
                  key={index}
                  className={`flex items-center gap-5 p-6 bg-gradient-to-br from-zinc-900 to-black rounded-xl border ${borderClass} hover:border-${item.color}-500/40 transition-colors`}
                >
                  <div className={`w-14 h-14 ${bgClass} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <IconComponent size={28} className={colorClasses[item.color].split(' ').pop()} />
                  </div>
                  <p className="text-lg text-gray-200 font-medium">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Investor FAQ */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-400/30 rounded-full">
              <HelpCircle size={18} className="text-blue-400" />
              <span className="text-blue-400 text-xs font-semibold tracking-wider">INVESTOR FAQ</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 font-serif">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                  data-testid={`investor-faq-toggle-${index}`}
                >
                  <h3 className="text-lg font-bold text-white pr-4">{faq.question}</h3>
                  {expandedFAQ === index ? (
                    <ChevronUp size={24} className="text-green-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={24} className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Request Investor Information CTA */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-500/10 to-transparent rounded-3xl p-12 border border-green-500/20 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-8">
              <Mail size={36} className="text-green-400" />
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-6 font-serif">
              Request Investor Information
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Investors who wish to learn more about ArtOnFilm can request additional information via the contact form.
            </p>
            
            <Link
              to="/contact?subject=Investor%20Information%20Request"
              className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full hover:from-green-400 hover:to-green-500 transition-all text-lg hover:scale-105 active:scale-95 shadow-lg shadow-green-500/20"
              data-testid="request-investor-info-btn"
            >
              Request Investor Information
              <ArrowRight size={22} />
            </Link>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-12 bg-zinc-950 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
            <p className="text-gray-400 text-sm leading-relaxed">
              <span className="font-semibold text-red-400">Important:</span> This page is for information purposes only and does not constitute financial advice or an offer to invest. Investment in ArtOnFilm Ltd is subject to eligibility, due diligence, and formal legal documentation. Capital is at risk. Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Invest;
