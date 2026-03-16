import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  ArrowRight,
  Palette,
  Camera,
  ShoppingBag,
  TrendingUp
} from 'lucide-react';

const FAQ = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      question: 'What is ArtOnFilm?',
      answer: 'ArtOnFilm Ltd is a UK creative intellectual property and advertising company that commissions contemporary artists to produce original works released through exhibitions, media projects, and curated collections.'
    },
    {
      question: 'How does ArtOnFilm work?',
      answer: 'ArtOnFilm commissions artists to create original pieces as part of its creative programme. Collections are developed for exhibitions, media documentation, and promotional campaigns, with artworks released through exhibitions and the ArtOnFilm website.'
    },
    {
      question: 'How can collectors acquire artwork?',
      answer: 'Collectors can acquire works through direct purchase via the website, private viewing appointments, or exhibition releases. Availability is limited, and works are released periodically through the ArtOnFilm programme.'
    },
    {
      question: 'What types of artwork does ArtOnFilm present?',
      answer: 'ArtOnFilm currently showcases works across two creative programmes: Painting programme (original works) and Photography programme (original exhibition pieces and limited editions). Additional collections will be introduced through future exhibitions.'
    },
    {
      question: 'Are artworks supplied with documentation?',
      answer: 'Yes. All works include: certificate of authenticity, artwork documentation, collection reference, and exhibition record where applicable.'
    },
    {
      question: 'How are artworks delivered?',
      answer: 'After confirming acquisition, ArtOnFilm arranges secure packaging, insured shipping, and international delivery when needed.'
    },
    {
      question: 'What is the ArtOnFilm exhibition programme?',
      answer: 'ArtOnFilm presents collections through curated exhibitions and media documentation projects, introducing new works to collectors and broader audiences.'
    },
    {
      question: 'Can collectors receive early access to new works?',
      answer: 'Yes. Collectors can register for early access to upcoming releases, exhibition invitations, and private viewing opportunities.'
    },
    {
      question: 'How does ArtOnFilm generate revenue?',
      answer: 'ArtOnFilm operates as a trading company producing and selling creative intellectual property, generating revenue through sale of original artworks, release of limited edition prints, and exhibitions.'
    },
    {
      question: 'Is ArtOnFilm open to investment?',
      answer: 'ArtOnFilm is expanding its creative programme and international exhibition schedule. Investors can request further information through the Invest section.'
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="film-grain"></div>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden border-b border-blue-500/20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-black to-black"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-400/30 rounded-full">
            <HelpCircle size={20} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-semibold tracking-widest">FAQ</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about ArtOnFilm, our creative programme, and how collectors can acquire works.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-zinc-950 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-center text-gray-400 text-sm mb-4">Looking for specific information?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/shop#collector-faq"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900/50 border border-amber-500/20 rounded-full text-amber-400 text-sm hover:bg-amber-500/10 transition-all"
            >
              <ShoppingBag size={16} />
              Collector FAQ
            </Link>
            <Link
              to="/invest#investor-faq"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900/50 border border-green-500/20 rounded-full text-green-400 text-sm hover:bg-green-500/10 transition-all"
            >
              <TrendingUp size={16} />
              Investor FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-white/10 overflow-hidden"
                data-testid={`general-faq-${index}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                  data-testid={`general-faq-toggle-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold text-sm">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-bold text-white pr-4">{faq.question}</h3>
                  </div>
                  {expandedFAQ === index ? (
                    <ChevronUp size={24} className="text-blue-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={24} className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-6 pl-18">
                    <div className="ml-12 p-4 bg-blue-500/5 rounded-xl border border-blue-500/10">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Programmes Overview */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-serif">
              Our Creative Programmes
            </h2>
            <p className="text-gray-400 text-lg">
              ArtOnFilm currently presents works across two creative programmes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 border border-amber-500/20">
              <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
                <Palette size={28} className="text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Painting Programme</h3>
              <p className="text-gray-300 mb-6">
                Original contemporary paintings commissioned through the ArtOnFilm programme. Unique works exploring themes of architecture, landscape, and modern living.
              </p>
              <Link
                to="/collection/natasha-kissell"
                className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors"
              >
                View Painting Collection
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 border border-purple-500/20">
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <Camera size={28} className="text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Photography Programme</h3>
              <p className="text-gray-300 mb-6">
                Fine art photography and limited edition prints. Original exhibition pieces and signed editions exploring urban life, music culture, and human experience.
              </p>
              <Link
                to="/collection/chris-lee"
                className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition-colors"
              >
                View Photography Collection
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-serif">
            Still Have Questions?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Our team is here to help. Contact us for any enquiries about artworks, exhibitions, or the ArtOnFilm programme.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-full hover:from-blue-400 hover:to-blue-500 transition-all hover:scale-105 active:scale-95"
          >
            Contact Us
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
