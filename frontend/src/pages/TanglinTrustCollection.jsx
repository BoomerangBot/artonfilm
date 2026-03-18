import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Calendar, MapPin, ArrowRight, Image } from 'lucide-react';

const TanglinTrustCollection = () => {
  const exhibitionImages = [
    {
      id: 1,
      title: 'Exhibition View - Main Gallery',
      description: 'Contemporary paintings displayed in the main exhibition space',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/vacukyia_IMG-20251127-WA0061.jpg'
    },
    {
      id: 2,
      title: 'Exhibition View - Heritage Hall',
      description: 'Works showcased alongside school heritage displays',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/imp0fiiy_IMG-20251127-WA0062.jpg'
    },
    {
      id: 3,
      title: 'Exhibition View - Central Atrium',
      description: 'Beach and coastal themed paintings in the central space',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/aw8250rw_IMG-20251127-WA0063.jpg'
    },
    {
      id: 4,
      title: 'Student Engagement',
      description: 'Young visitors exploring the artwork collection',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/4r1rwcak_IMG-20251127-WA0064.jpg'
    },
    {
      id: 5,
      title: 'Exhibition View - Corner Display',
      description: 'Alpine and architectural series on display',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/u16cwv62_IMG-20251127-WA0065.jpg'
    },
    {
      id: 6,
      title: 'Alpine Collection',
      description: 'Mountain pool and chalet scenes from the Alpine series',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/ttomb3q9_IMG-20251127-WA0067.jpg'
    },
    {
      id: 7,
      title: 'Alpine Trio',
      description: 'Winter landscapes with pool and mountain views',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/3q1pvkup_IMG-20251127-WA0068.jpg'
    },
    {
      id: 8,
      title: 'California Modern',
      description: 'Mid-century modern architecture and poolside living',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/6rq97d9f_IMG-20251127-WA0069.jpg'
    },
    {
      id: 9,
      title: 'Coastal Paradise',
      description: 'Tropical beach views and Mediterranean villa scenes',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/pixgwils_IMG-20251127-WA0070.jpg'
    },
    {
      id: 10,
      title: 'Palm Springs & Portofino',
      description: 'Desert modernism and Italian Riviera luxury',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/7wflp6ll_IMG-20251127-WA0071.jpg'
    },
    {
      id: 11,
      title: 'Workshop - Collage Creation',
      description: 'Student creating nature-inspired collage artwork',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/qw4vit3y_IMG-20251127-WA0079.jpg'
    },
    {
      id: 12,
      title: 'Workshop - Hands-On Learning',
      description: 'Student hands shaping landscape collage',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/g1id4lbn_IMG-20251127-WA0072.jpg'
    },
    {
      id: 13,
      title: 'Workshop - Mixed Media',
      description: 'Vibrant paint palette and texture experimentation',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/o6rpxpza_IMG-20251127-WA0073.jpg'
    },
    {
      id: 14,
      title: 'Workshop - Pattern Work',
      description: 'Abstract pattern composition in warm tones',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/lf43srx2_IMG-20251127-WA0075.jpg'
    },
    {
      id: 15,
      title: 'Workshop - Nature Studies',
      description: 'Botanical collage with leaf forms',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/d2h720fr_IMG-20251127-WA0076.jpg'
    },
    {
      id: 16,
      title: 'Workshop - Landscape Collage',
      description: 'Completed landscape with cityscape and water elements',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/4t8pkd5i_IMG-20251127-WA0080.jpg'
    },
    {
      id: 17,
      title: 'Workshop - Abstract Seascape',
      description: 'Turquoise and blue mixed media seascape',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/qwy6a5nv_IMG-20251127-WA0082.jpg'
    },
    {
      id: 18,
      title: 'Artist in Residence',
      description: 'Natasha Kissell guiding students through technique',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/upa4sash_IMG-20251127-WA0084.jpg'
    },
    {
      id: 19,
      title: 'Workshop Session',
      description: 'Artist engaging with students during workshop',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/6qmg1exz_IMG-20251127-WA0085.jpg'
    },
    {
      id: 20,
      title: 'Workshop - Texture Detail',
      description: 'Close-up of texture techniques on monochrome work',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/9t1mv9iw_IMG-20251127-WA0086.jpg'
    },
    {
      id: 21,
      title: 'Heritage Gallery Installation',
      description: 'Full exhibition view in the school heritage space',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/dih2ia96_IMG-20251127-WA0087.jpg'
    },
    {
      id: 22,
      title: 'Artist Demonstration',
      description: 'Natasha Kissell demonstrating canvas technique',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/f3br4qy5_IMG-20251127-WA0088.jpg'
    },
    {
      id: 23,
      title: 'Workshop - Colour Exploration',
      description: 'Student working with pink and purple paint textures',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/hnhppsd5_IMG-20251127-WA0089.jpg'
    },
    {
      id: 24,
      title: 'Exhibition Poster',
      description: 'Official Natasha Kissell exhibition poster at Tanglin Trust',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/v4v31l7j_IMG-20251127-WA0090.jpg'
    },
    {
      id: 25,
      title: 'Workshop Critique',
      description: 'Artist reviewing student work during workshop session',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/usid5kv6_IMG-20251127-WA0091.jpg'
    },
    {
      id: 26,
      title: 'Exhibition Setup - Entrance',
      description: 'Gallery panels with promotional signage in school entrance',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/d0ojet8v_PHOTO-2025-11-21-11-06-26%20%281%29.jpg'
    },
    {
      id: 27,
      title: 'Heritage Space',
      description: 'Exhibition integrated with school heritage displays and uniforms collection',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/7c9ytdkz_PHOTO-2025-11-21-11-06-26.jpg'
    },
    {
      id: 28,
      title: 'Gallery Corridor',
      description: 'Exhibition panels positioned in main corridor with school photography',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/i6n1hnds_PHOTO-2025-11-21-11-06-27.jpg'
    },
    {
      id: 29,
      title: 'Main Exhibition Display',
      description: 'Collection featuring tropical gardens, Mediterranean views and poolside scenes',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/kj0mx8va_IMG-20251127-WA0092.jpg'
    },
    {
      id: 30,
      title: 'Workshop - Composition Assembly',
      description: 'Student hands assembling landscape collage elements',
      image: 'https://customer-assets.emergentagent.com/job_1a691542-aad6-45f0-8138-f326ff6ae66e/artifacts/sia1wsew_IMG-20251209-WA0045.jpg'
    },
    {
      id: 31,
      title: 'Artist Talk - Introduction',
      description: 'Natasha Kissell presenting her artistic vision to the school community',
      image: 'https://customer-assets.emergentagent.com/job_8612bb1e-f34a-4ed4-a2ec-6a808376b9b4/artifacts/bp6xiomv_WhatsApp%20Image%202026-03-11%20at%2013.56.33.jpeg'
    },
    {
      id: 32,
      title: 'Student Presentation',
      description: 'Engaging the next generation of art enthusiasts',
      image: 'https://customer-assets.emergentagent.com/job_8612bb1e-f34a-4ed4-a2ec-6a808376b9b4/artifacts/maokeytm_WhatsApp%20Image%202026-03-11%20at%2013.56.33%20%281%29.jpeg'
    },
    {
      id: 33,
      title: 'Workshop Collaboration',
      description: 'Hands-on creative session with students',
      image: 'https://customer-assets.emergentagent.com/job_8612bb1e-f34a-4ed4-a2ec-6a808376b9b4/artifacts/alt9k4cw_WhatsApp%20Image%202026-03-11%20at%2013.56.33%20%282%29.jpeg'
    },
    {
      id: 34,
      title: 'Exhibition Tour',
      description: 'Guided tour through the curated collection',
      image: 'https://customer-assets.emergentagent.com/job_8612bb1e-f34a-4ed4-a2ec-6a808376b9b4/artifacts/i8bql4b4_WhatsApp%20Image%202026-03-11%20at%2013.56.33%20%283%29.jpeg'
    },
    {
      id: 35,
      title: 'Heritage Hall Display',
      description: 'Exhibition installation in the school heritage space',
      image: 'https://customer-assets.emergentagent.com/job_8612bb1e-f34a-4ed4-a2ec-6a808376b9b4/artifacts/xdx1epeu_WhatsApp%20Image%202026-03-11%20at%2013.56.33%20%284%29.jpeg'
    },
    {
      id: 36,
      title: 'Creative Workshop Session',
      description: 'Students exploring artistic techniques under artist guidance',
      image: 'https://customer-assets.emergentagent.com/job_8612bb1e-f34a-4ed4-a2ec-6a808376b9b4/artifacts/0o11iz4d_WhatsApp%20Image%202026-03-11%20at%2013.56.33%20%285%29.jpeg'
    },
    {
      id: 37,
      title: 'Gallery Overview',
      description: 'Panoramic view of the complete exhibition installation',
      image: 'https://customer-assets.emergentagent.com/job_8612bb1e-f34a-4ed4-a2ec-6a808376b9b4/artifacts/0z3071fo_WhatsApp%20Image%202026-03-11%20at%2013.56.33%20%286%29.jpeg'
    },
    {
      id: 38,
      title: 'School Noticeboard',
      description: 'Tanglin Trust School noticeboard featuring Natasha Kissell exhibition poster',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/1gr5rdcl_IMG20251127170952_01.jpg'
    },
    {
      id: 39,
      title: 'Butterfly Union Jack',
      description: 'Artistic butterfly installation in the school celebrating British heritage',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/n0e3ozcb_IMG20251127171101.jpg'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      <div className="film-grain"></div>

      {/* Header */}
      <section className="relative py-32 border-b border-amber-500/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8">
            <Building2 size={20} className="text-amber-400" />
            <span className="text-amber-400 text-sm font-semibold tracking-widest">EXHIBITION PROGRAMME</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif leading-tight">
            <span className="gradient-text">Tanglin Trust School</span>
          </h1>
          
          <p className="text-2xl text-amber-400 mb-4 font-medium">
            Singapore – 100 Years Celebration
          </p>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A curated exhibition celebrating 100 years of Tanglin Trust School, featuring works from the ArtOnFilm collection displayed in the school's heritage space.
          </p>

          {/* Exhibition Details */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-amber-400" />
              <span>Singapore</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-amber-400" />
              <span>November 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Image size={18} className="text-amber-400" />
              <span>Natasha Kissell Collection</span>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibition Gallery */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
              Exhibition Gallery
            </h2>
            <p className="text-xl text-gray-400">
              {exhibitionImages.length} exhibition views
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exhibitionImages.map((item) => (
              <div
                key={item.id}
                className="group relative bg-gradient-to-br from-zinc-900 to-black rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-amber-400/70 italic mb-3">
                    This work forms part of the ArtOnFilm curated programme.
                  </p>
                  <p className="text-sm text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Exhibition */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 font-serif">
              About the Exhibition
            </h2>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-10 border border-white/10 mb-8">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              In celebration of Tanglin Trust School's centenary, ArtOnFilm presented a curated exhibition of contemporary paintings from the Natasha Kissell collection. The exhibition was displayed in the school's heritage space, bringing vibrant contemporary art to students, staff and visitors.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              The collection features works exploring themes of architecture, coastal living, and mid-century modernism – providing an inspiring visual experience within the educational environment.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Beyond the exhibition, ArtOnFilm delivered an immersive artist-in-residence programme, with Natasha Kissell leading hands-on workshops for students. These creative sessions introduced young learners to collage, mixed media and texture techniques, fostering artistic exploration and expression. The programme exemplifies ArtOnFilm's commitment to bringing world-class contemporary art into educational spaces across Asia.
            </p>
          </div>

          {/* ArtOnFilm in Singapore */}
          <div className="bg-gradient-to-br from-amber-500/5 to-purple-500/5 rounded-2xl p-10 border border-amber-500/20 mb-8">
            <h3 className="text-2xl font-bold text-amber-400 mb-4 font-serif">ArtOnFilm in Singapore</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Singapore represents a key market for ArtOnFilm's expansion into Asia-Pacific. The Tanglin Trust School exhibition marks a significant milestone in bringing our curated collections to one of the world's most dynamic art markets.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Through partnerships with prestigious educational institutions and cultural venues, ArtOnFilm continues to establish its presence across the region, connecting contemporary British art with discerning collectors and audiences throughout Southeast Asia.
            </p>
          </div>

          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/50 rounded-xl p-6 border border-amber-500/20">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4">
                <Building2 size={24} className="text-amber-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Venue Partner</h3>
              <p className="text-gray-400 text-sm">Tanglin Trust School, Singapore – one of Asia's leading international schools.</p>
            </div>
            <div className="bg-black/50 rounded-xl p-6 border border-purple-500/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Image size={24} className="text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Featured Artist</h3>
              <p className="text-gray-400 text-sm">Natasha Kissell – contemporary paintings from the Modern Eden series.</p>
            </div>
            <div className="bg-black/50 rounded-xl p-6 border border-green-500/20">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <Calendar size={24} className="text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Centenary Event</h3>
              <p className="text-gray-400 text-sm">Part of the school's 100 years celebration programme.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Statement */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl p-8 border-l-4 border-blue-500">
            <p className="text-lg text-gray-300 text-center leading-relaxed">
              <span className="font-semibold text-white">ArtOnFilm Ltd operates as a trading company</span> commissioning, producing and selling contemporary artworks through exhibitions and its website.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-serif">
            Explore the Full Collection
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            View the complete Natasha Kissell collection and available works.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/collection/natasha-kissell"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105"
            >
              View Natasha Kissell Collection
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all"
            >
              Shop Available Works
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TanglinTrustCollection;
