import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { artworks } from '../mock';

const Home = () => {
  // Get featured artworks (mix of both artists)
  const featuredWorks = artworks.slice(0, 4);

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1: HERO — ART FIRST
          Large visual artwork, immersive, gallery-style
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center">
        {/* Full-width artwork background */}
        <div className="absolute inset-0">
          <img
            src="https://customer-assets.emergentagent.com/job_8612bb1e-f34a-4ed4-a2ec-6a808376b9b4/artifacts/0o11iz4d_WhatsApp%20Image%202026-03-11%20at%2013.56.33%20%285%29.jpeg"
            alt="Featured Artwork"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 font-serif tracking-tight">
              ART ON FILM
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed font-light">
              ArtOnFilm commissions and releases original contemporary art collections through exhibitions, film and global campaigns.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/collection"
                className="px-8 py-4 bg-white text-black font-semibold hover:bg-gray-100 transition-all"
              >
                View Collection
              </Link>
              <Link
                to="/shop"
                className="px-8 py-4 border border-white text-white font-semibold hover:bg-white hover:text-black transition-all"
              >
                Acquire Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2: FEATURED WORKS
          Show actual artworks immediately
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Featured Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Original paintings and exhibition photography currently available.
            </p>
          </div>

          {/* Artwork Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredWorks.map((artwork) => (
              <Link
                key={artwork.id}
                to="/shop"
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1 group-hover:text-gray-600 transition-colors">
                  {artwork.title}
                </h3>
                <p className="text-gray-500 text-sm">{artwork.artist}</p>
              </Link>
            ))}
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-black font-semibold hover:gap-4 transition-all"
          >
            View Shop
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3: ARTONFILM PROGRAMME
          Commission information
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif">
                ArtOnFilm Programme
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                ArtOnFilm commissions artists to produce original works for exhibition, film documentation and campaign release.
              </p>

              {/* Programme Categories */}
              <div className="space-y-6 mb-12">
                <div className="border-l-2 border-white pl-6">
                  <h3 className="text-xl font-semibold mb-2">Painting Programme</h3>
                  <p className="text-gray-400">2 painters currently</p>
                </div>
                <div className="border-l-2 border-white pl-6">
                  <h3 className="text-xl font-semibold mb-2">Photography Programme</h3>
                  <p className="text-gray-400">1 photography artist currently</p>
                </div>
              </div>

              <Link
                to="/artists"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold hover:bg-gray-100 transition-all"
              >
                View Artists
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://customer-assets.emergentagent.com/job_8612bb1e-f34a-4ed4-a2ec-6a808376b9b4/artifacts/xdx1epeu_WhatsApp%20Image%202026-03-11%20at%2013.56.33%20%284%29.jpeg"
                  alt="Painting Programme"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden mt-12">
                <img
                  src="https://customer-assets.emergentagent.com/job_film-canvas/artifacts/5z2mwq5y_big%20ben.jpg"
                  alt="Photography Programme"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4: EXHIBITION PROGRAMME
          Tour information
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif">
              Exhibition Programme
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              ArtOnFilm works are presented through curated exhibitions, media documentation and international programmes.
            </p>
            <Link
              to="/programme"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white text-white font-semibold hover:bg-white hover:text-black transition-all"
            >
              View Tour
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5: COLLECTOR ACCESS
          Join collector list
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif">
              Collector Access
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Collectors may request: early access to works, private viewings, exhibition invitations.
            </p>
            <Link
              to="/contact?subject=Collector%20List"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-semibold hover:bg-gray-900 transition-all"
            >
              Join Collector List
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 6: HOW ARTONFILM OPERATES
          Business model explanation
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 font-serif text-center">
              How ArtOnFilm Operates
            </h2>
            <div className="border-l-2 border-white pl-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                ArtOnFilm commissions artists to produce original works which are released through exhibitions and the ArtOnFilm website. Revenue is generated through artwork sales, limited editions and exhibitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 7: INVESTMENT (FINAL SECTION)
          Investment opportunity
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-black text-white border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif">
              Investment
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              ArtOnFilm is expanding its exhibition programme and creative production schedule.
            </p>
            <Link
              to="/invest"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white text-white font-semibold hover:bg-white hover:text-black transition-all"
            >
              Investor Information
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
