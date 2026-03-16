import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Building2, Users, HelpCircle, Mail } from 'lucide-react';

const Invest = () => {
  const faqs = [
    {
      question: 'What am I investing in?',
      answer: 'You are investing in ArtOnFilm Ltd, a UK-registered company that commissions and produces contemporary art collections for exhibition and sale. Investment supports business growth, not the acquisition of art itself.'
    },
    {
      question: 'Is this an art fund?',
      answer: 'No. ArtOnFilm Ltd is a trading company. Artwork is held as inventory and sold through commercial retail channels. This is not an art investment fund, fractional ownership scheme, or speculation vehicle.'
    },
    {
      question: 'What are my potential returns?',
      answer: 'Returns are generated through company growth and potential future dividends or exit events. As with any early-stage investment, capital is at risk. SEIS/EIS tax reliefs may be available to qualifying UK taxpayers.'
    },
    {
      question: 'Is ArtOnFilm SEIS/EIS eligible?',
      answer: 'ArtOnFilm Ltd is structured to qualify for SEIS (Seed Enterprise Investment Scheme) advance assurance. Final eligibility is subject to HMRC confirmation at the time of investment.'
    },
    {
      question: 'How do I proceed?',
      answer: 'Request our investor information pack using the form below. This includes company financials, business plan, and full terms. All investments are subject to due diligence and legal documentation.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-black to-black"></div>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-gradient-to-r from-green-500/10 to-transparent border border-green-400/30 rounded-full">
            <TrendingUp size={18} className="text-green-400" />
            <span className="text-green-400 text-xs font-semibold tracking-wider">INVESTMENT OPPORTUNITY</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
            Invest in ArtOnFilm
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Support the growth of a UK creative company commissioning and producing contemporary art collections for the international market.
          </p>

          <div className="inline-block p-4 bg-amber-500/10 border border-amber-400/30 rounded-xl">
            <p className="text-amber-400 text-sm font-medium">
              SEIS Advance Assurance Applied For
            </p>
          </div>
        </div>
      </section>

      {/* How ArtOnFilm Operates */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-400/30 rounded-full">
              <Building2 size={18} className="text-purple-400" />
              <span className="text-purple-400 text-xs font-semibold tracking-wider">BUSINESS MODEL</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 font-serif">
              How ArtOnFilm Operates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4">Commission & Production</h3>
              <p className="text-gray-400 leading-relaxed">
                ArtOnFilm commissions established and emerging artists to create original works under fixed-fee agreements. Upon completion, artwork ownership transfers fully to the company as trading inventory.
              </p>
            </div>
            <div className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4">Exhibition & Sale</h3>
              <p className="text-gray-400 leading-relaxed">
                Collections are presented through curated exhibitions, gallery partnerships, and direct retail channels. Revenue is generated through artwork sales and exhibition fees.
              </p>
            </div>
            <div className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4">International Reach</h3>
              <p className="text-gray-400 leading-relaxed">
                The ArtOnTour programme presents collections across Europe and Asia, building brand recognition and accessing international collector markets.
              </p>
            </div>
            <div className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4">Creative IP</h3>
              <p className="text-gray-400 leading-relaxed">
                The company develops creative content including documentary films and promotional media to support artist profiles and collection visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Investment Supports */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-400/30 rounded-full">
              <Users size={18} className="text-amber-400" />
              <span className="text-amber-400 text-xs font-semibold tracking-wider">USE OF FUNDS</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 font-serif">
              What Investment Supports
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Investment capital supports business growth and operational expansion, not the purchase of artwork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-zinc-900 to-black rounded-xl border border-white/10">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-amber-400 font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Artist Commissions</h3>
              <p className="text-gray-400 text-sm">Fund new commissions with established and emerging artists to grow collection inventory.</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-zinc-900 to-black rounded-xl border border-white/10">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-amber-400 font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Exhibition Programme</h3>
              <p className="text-gray-400 text-sm">Expand the ArtOnTour exhibition programme to new international venues and markets.</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-zinc-900 to-black rounded-xl border border-white/10">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-amber-400 font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Team & Operations</h3>
              <p className="text-gray-400 text-sm">Build operational capacity including sales, marketing, and gallery partnerships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investor FAQ */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-400/30 rounded-full">
              <HelpCircle size={18} className="text-blue-400" />
              <span className="text-blue-400 text-xs font-semibold tracking-wider">FAQ</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 font-serif">
              Investor FAQ
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="p-6 bg-zinc-900/50 rounded-2xl border border-white/5"
              >
                <h3 className="text-lg font-bold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Information CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-500/10 to-transparent rounded-3xl p-12 border border-green-500/20 text-center">
            <Mail size={48} className="text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4 font-serif">
              Request Investor Information
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Receive our investor information pack including company financials, business plan, and full investment terms.
            </p>
            <Link
              to="/contact?subject=Investor%20Information%20Request"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full hover:from-green-400 hover:to-green-500 transition-all text-lg"
            >
              Request Information Pack
              <ArrowRight size={20} />
            </Link>
            <p className="text-gray-500 text-sm mt-6">
              Capital at risk. Investment in early-stage companies involves significant risk.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-12 bg-zinc-950 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
            <p className="text-gray-400 text-sm leading-relaxed">
              <span className="font-semibold text-red-400">Important:</span> This page is for information purposes only and does not constitute financial advice or an offer to invest. Investment in ArtOnFilm Ltd is subject to eligibility, due diligence, and formal legal documentation. SEIS/EIS tax relief is subject to individual circumstances and HMRC approval. Capital is at risk. Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Invest;
