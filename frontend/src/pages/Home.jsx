import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { 
  heroData, 
  visionData,
  keyPeople,
  galleryImages, 
  investmentData,
  impactTransparencyData,
  partnersVenuesData,
  behindCameraData,
  testimonialData,
  charityLogos,
  exhibitionsToursData,
  membershipData,
  artScienceData,
  shopData,
  artOnDesignData,
  carnabyFilmsData,
  artOnGivingData,
  givingModelData,
  partnersData,
  ethicsPrivacyData,
  contactData,
  quotes
} from '../mock';
import { 
  ArrowRight, 
  Film, 
  Camera,
  TrendingUp, 
  Users, 
  GraduationCap, 
  Leaf, 
  Heart,
  Building2,
  Play,
  Mail,
  X,
  Beaker
} from 'lucide-react';
import PartnerModal from '../components/PartnerModal';
import FloatingCollectionCTA from '../components/FloatingCollectionCTA';
import SideRibbonCTA from '../components/SideRibbonCTA';

const Home = () => {
  const [email, setEmail] = useState('');
  const [showJourneyModal, setShowJourneyModal] = useState(false);
  const [showHostEventModal, setShowHostEventModal] = useState(false);
  const [showInvitationModal, setShowInvitationModal] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);
  
  const [journeyForm, setJourneyForm] = useState({ name: '', email: '', message: '' });
  const [hostEventForm, setHostEventForm] = useState({ name: '', email: '', organization: '', eventDetails: '' });
  const [invitationForm, setInvitationForm] = useState({ name: '', email: '', interest: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    toast.success('Thank you for subscribing!');
    setEmail('');
  };

  const handleJourneySubmit = (e) => {
    e.preventDefault();
    console.log('Journey form:', journeyForm);
    toast.success('Thank you! We\'ll be in touch soon.');
    setJourneyForm({ name: '', email: '', message: '' });
    setShowJourneyModal(false);
  };

  const handleHostEventSubmit = (e) => {
    e.preventDefault();
    console.log('Host event form:', hostEventForm);
    toast.success('Thank you! We\'ll contact you about hosting an event.');
    setHostEventForm({ name: '', email: '', organization: '', eventDetails: '' });
    setShowHostEventModal(false);
  };

  const handleInvitationSubmit = (e) => {
    e.preventDefault();
    console.log('Invitation form:', invitationForm);
    toast.success('Thank you! Your invitation request has been submitted.');
    setInvitationForm({ name: '', email: '', interest: '' });
    setShowInvitationModal(false);
  };

  const getIcon = (iconName) => {
    const icons = {
      users: Users,
      graduation: GraduationCap,
      leaf: Leaf,
      heart: Heart
    };
    const IconComponent = icons[iconName] || Users;
    return <IconComponent size={32} />;
  };

  // Icon mapping for programmes
  const programmeIcons = {
    heart: Heart,
    film: Film,
    flask: Beaker,
    users: Users
  };

  return (
    <div className="bg-black text-white relative">
      {/* Film Grain Overlay */}
      <div className="film-grain"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroData.backgroundImage}
            alt="Art Gallery"
            className="w-full h-full object-cover scale-105"
          />
          {/* Artistic street art overlay */}
          <div 
            className="absolute inset-0 opacity-20 mix-blend-screen"
            style={{
              backgroundImage: 'url(https://customer-assets.emergentagent.com/job_art-investor/artifacts/gvberlem_file_000000004fbc62468d23486c88f5cf8f.png)',
              backgroundSize: '40%',
              backgroundPosition: 'bottom right',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90"></div>
          
          {/* Cinematic Vignette */}
          <div className="vignette"></div>
          
          {/* Hollywood Spotlights */}
          <div className="spotlight" style={{ top: '-200px', left: '-200px' }}></div>
          <div className="spotlight" style={{ bottom: '-300px', right: '-300px' }}></div>
        </div>

        {/* Decorative Frame Elements - Gold Art Deco Style */}
        <div className="absolute top-8 left-8 w-32 h-32 border-l-4 border-t-4 border-amber-400/40"></div>
        <div className="absolute bottom-8 right-8 w-32 h-32 border-r-4 border-b-4 border-amber-400/40"></div>
        
        {/* Corner accents */}
        <div className="absolute top-8 left-8 w-4 h-4 bg-amber-400/60"></div>
        <div className="absolute bottom-8 right-8 w-4 h-4 bg-amber-400/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
          <div className="max-w-3xl">
            {/* Hero Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-500/10 to-amber-600/10 backdrop-blur-md border border-amber-400/40 rounded-full mb-6 shadow-lg shadow-amber-500/10">
              <Heart size={20} className="text-amber-400" />
              <span className="text-amber-400 text-sm font-semibold tracking-widest">Art can be Free · Exposure Is Priceless · Ethics & Wealth</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.95] font-serif text-shadow-lg">
              {heroData.headline}
            </h1>
            
            {/* The World Is Yours - Cinematic Tagline */}
            <div className="mb-8">
              <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 mb-4 font-serif italic" style={{ backgroundSize: '200% auto', animation: 'goldShimmer 4s ease-in-out infinite' }}>
                The World Is Yours
              </p>
              
              {/* Shop Now button after "The World Is Yours" */}
              <Link
                to="/collection"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-300 hover:via-amber-400 hover:to-amber-500 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-amber-500/30"
              >
                <Film size={20} />
                Shop Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="relative pl-6 border-l-4 border-amber-400/50 mb-6 backdrop-blur-sm bg-black/20 py-4 rounded-r-lg">
              <p className="text-2xl md:text-3xl text-gray-100 mb-4 font-light">
                {heroData.subheadline}
              </p>
              <p className="text-lg text-gray-200 leading-relaxed mb-4">
                {heroData.description}
              </p>
            </div>

            {/* Quote Section */}
            <div className="mb-10 pl-6 border-l-4 border-amber-400/70 backdrop-blur-sm bg-gradient-to-r from-amber-500/10 to-transparent py-4 rounded-r-lg">
              <p className="text-xl md:text-2xl text-amber-100 italic leading-relaxed font-light">
                {heroData.quote}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <Link
                to="/programme"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-300 hover:via-amber-400 hover:to-amber-500 transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl shadow-amber-500/30"
              >
                Explore Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </Link>
              <Link
                to="/patrons"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-400/80 text-white font-bold rounded-full hover:bg-gradient-to-r hover:from-amber-400/20 hover:to-amber-500/20 hover:border-amber-300 transition-all duration-500 hover:scale-105 active:scale-95 backdrop-blur-md shadow-xl"
              >
                Join Perks of Giving
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-400/80 text-white font-bold rounded-full hover:bg-gradient-to-r hover:from-amber-400/20 hover:to-amber-500/20 hover:border-amber-300 transition-all duration-500 hover:scale-105 active:scale-95 backdrop-blur-md shadow-xl"
              >
                Contact Team
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Film Strip Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"></div>
      </section>

      {/* Vision Section */}
      <section className="relative py-32 fade-on-scroll opacity-0 transition-all duration-[1500ms] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black"></div>
        
        {/* Soft Hollywood Lighting */}
        <div className="absolute top-0 left-0 right-0 h-96 soft-light-top"></div>
        <div className="absolute inset-0 soft-light-center"></div>
        
        {/* Artistic portrait overlay - right side */}
        <div 
          className="absolute top-0 right-0 w-1/3 h-full opacity-10 mix-blend-luminosity"
          style={{
            backgroundImage: 'url(https://customer-assets.emergentagent.com/job_art-investor/artifacts/3s22vv51_file_000000000af061f494311e2844019cdb.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
          }}
        ></div>
        
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-400/6 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
                <Film size={16} className="text-amber-400" />
                <span className="text-amber-400 text-xs font-semibold tracking-widest">ABOUT / VISION</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight font-serif">
                {visionData.headline}
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-10">
                {visionData.content}
              </p>

              {/* Key People Section */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-amber-400 mb-6">Key People</h3>
                <div className="space-y-4">
                  {keyPeople.map((person, index) => (
                    <div key={index} className="border-l-2 border-amber-500/50 pl-4 py-2">
                      <p className="text-white font-semibold text-lg">{person.name}</p>
                      <p className="text-gray-400 text-sm">{person.role}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold rounded-full hover:from-amber-300 hover:to-amber-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20"
                >
                  Meet the Team
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/patrons"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-amber-400/80 text-white font-bold rounded-full hover:bg-gradient-to-r hover:from-amber-400/20 hover:to-amber-500/20 hover:border-amber-300 transition-all hover:scale-105 active:scale-95"
                >
                  Get Involved
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Motto Badge */}
              <div className="mt-8 p-6 bg-gradient-to-r from-amber-500/5 to-transparent border-l-4 border-amber-500 rounded-r-lg backdrop-blur-sm">
                <p className="text-gray-300 text-lg italic leading-relaxed">
                  "ArtOnFilm is not a charity — it's a movement that chooses to give."
                </p>
              </div>
            </div>

            {/* Artists Cards */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-amber-400 uppercase tracking-wider">Artists & Collections</h3>
                {/* Modern motto badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mt-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/30 rounded-full">
                  <span className="text-purple-400 text-xs font-semibold tracking-wider">JustArt · JustGive · JustDo</span>
                </div>
              </div>

              {/* Natasha Kissell Card */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-gold/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 border border-white/10 hover:border-amber-500/30 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Film size={24} className="text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-white mb-1">Natasha Kissell</h4>
                      <p className="text-amber-400 font-medium mb-3">Modern Eden</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 italic mb-4">
                    Romance in architecture · Grace in modernity<br />
                    Her Modern Eden collection transforms skylines into reflections of hope — bridging Chelsea rooftops, Warsaw courtyards and Singapore gardens.
                  </p>
                  
                  <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 rounded-lg p-5 mb-4 border border-amber-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
                      <p className="text-sm font-bold text-amber-400 uppercase tracking-wider">Award-Winning Artist</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-300 leading-relaxed">
                        ✦ Original paintings & limited edition prints
                      </p>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        ✦ Featured in international auctions & corporate collections
                      </p>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        ✦ Private commissions available
                      </p>
                      <p className="text-sm text-green-400 font-medium italic mt-3">
                        30% of commission proceeds support charitable causes
                      </p>
                    </div>
                  </div>
                  
                  {/* Artwork Thumbnails */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="relative aspect-square rounded-lg overflow-hidden group/img">
                      <img 
                        src="https://customer-assets.emergentagent.com/job_art-investor/artifacts/2bg4klwl_16.jpeg" 
                        alt="Modern Eden artwork"
                        className="w-full h-full object-cover transition-transform group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="relative aspect-square rounded-lg overflow-hidden group/img">
                      <img 
                        src="https://customer-assets.emergentagent.com/job_art-investor/artifacts/q53d24pp_12.jpeg" 
                        alt="Modern Eden artwork"
                        className="w-full h-full object-cover transition-transform group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="relative aspect-square rounded-lg overflow-hidden group/img">
                      <img 
                        src="https://customer-assets.emergentagent.com/job_art-investor/artifacts/1axxgyr7_20.jpeg" 
                        alt="Modern Eden artwork"
                        className="w-full h-full object-cover transition-transform group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity"></div>
                    </div>
                  </div>
                  <Link
                    to="/collection/natasha-kissell"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95"
                  >
                    View Collection
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </div>
              </div>

              {/* Dr Chris Lee Card - Updated Oct 29, 2025 */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Camera size={24} className="text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-white mb-1">Dr Chris Lee (JustXR1)</h4>
                      <p className="text-purple-400 font-medium mb-3">Big City Short Life</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 italic mb-4">
                    The city breathes. We listen.<br />
                    Through photography and film, he captures life in its fleeting seconds — the heartbeat behind the lens.
                  </p>
                  
                  <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/5 rounded-lg p-5 mb-4 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
                      <p className="text-sm font-bold text-purple-400 uppercase tracking-wider">Art for Good</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-300 leading-relaxed">
                        ✦ Unique editions & limited releases
                      </p>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        ✦ Multiple edition sizes available for collectors
                      </p>
                      <p className="text-sm text-green-400 font-medium italic mt-3">
                        All sales support the Lens2Care programme for youth and mental health
                      </p>
                      <p className="text-sm text-gray-400 italic mt-3">
                        "Art is passion and the creative light in life." — Last UK exhibitions sold out
                      </p>
                      <p className="text-sm text-purple-400 font-semibold mt-2">
                        Limited release for Lens2Care Art&Science • JustArt JustGive JustDo
                      </p>
                    </div>
                  </div>
                  
                  {/* Artwork Thumbnails */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="relative aspect-square rounded-lg overflow-hidden group/img">
                      <img 
                        src="https://customer-assets.emergentagent.com/job_film-canvas/artifacts/5z2mwq5y_big%20ben.jpg" 
                        alt="Urban Chronicles artwork"
                        className="w-full h-full object-cover transition-transform group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="relative aspect-square rounded-lg overflow-hidden group/img">
                      <img 
                        src="https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/kg42jehx_NOM17-min.jpg" 
                        alt="Soul & Strings artwork"
                        className="w-full h-full object-cover transition-transform group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="relative aspect-square rounded-lg overflow-hidden group/img">
                      <img 
                        src="https://customer-assets.emergentagent.com/job_creative-showcase-205/artifacts/xho0bx9q_tiger%20and%20turtle.jpg" 
                        alt="Urban Chronicles artwork"
                        className="w-full h-full object-cover transition-transform group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity"></div>
                    </div>
                  </div>
                  
                  <Link
                    to="/collection/chris-lee"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-lg hover:from-purple-400 hover:to-purple-500 transition-all hover:scale-105 active:scale-95"
                  >
                    View Collection
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artworks Showcase */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
              Featured Works
            </h2>
            <p className="text-gray-400 text-lg">
              Explore stunning contemporary art from our collection
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://customer-assets.emergentagent.com/job_art-investor/artifacts/2bg4klwl_16.jpeg',
              'https://customer-assets.emergentagent.com/job_art-investor/artifacts/dxeheg2r_17.jpeg',
              'https://customer-assets.emergentagent.com/job_art-investor/artifacts/g8idwuhn_18.jpeg',
              'https://customer-assets.emergentagent.com/job_art-investor/artifacts/gwa5rbec_19.jpeg',
              'https://customer-assets.emergentagent.com/job_art-investor/artifacts/1axxgyr7_20.jpeg',
              'https://customer-assets.emergentagent.com/job_art-investor/artifacts/u6ykuo0g_21.jpeg',
              'https://customer-assets.emergentagent.com/job_art-investor/artifacts/lfqa35q2_22.jpeg',
              'https://customer-assets.emergentagent.com/job_art-investor/artifacts/2hukoy8z_23.jpeg'
            ].map((img, index) => (
              <Link
                key={index}
                to="/collection/natasha-kissell"
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <img
                  src={img}
                  alt={`Artwork ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    View Collection
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/collection"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-400 transition-all hover:scale-105"
            >
              Explore Full Collection
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Patronage in Culture Section */}
      <section className="py-32 relative overflow-hidden fade-on-scroll opacity-0 transition-all duration-[1500ms]">
        {/* Background with Plane Image */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://customer-assets.emergentagent.com/job_filmartgallery/artifacts/ygw6vajq_b93a6028-f7f8-4c8b-840c-d8a7955c63e6.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="absolute inset-0 soft-light-center"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
        
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8 backdrop-blur-sm">
              <TrendingUp size={20} className="text-amber-400" />
              <span className="text-amber-400 text-sm font-semibold tracking-widest">FOR PATRONS</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-serif drop-shadow-lg">
              {investmentData.headline}
            </h2>
            <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light drop-shadow-md">
              {investmentData.subheadline}
            </p>
            <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto mb-12 drop-shadow-md">
              {investmentData.content}
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {investmentData.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-md rounded-2xl p-8 border border-amber-500/30 text-center group hover:border-amber-500/50 transition-all"
              >
                <div className="text-5xl font-bold text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-lg text-gray-200 font-medium">{stat.label}</div>
                {stat.sublabel && (
                  <div className="text-sm text-gray-400 mt-2 italic">{stat.sublabel}</div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20">
              View Asset & Art Opportunities
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Impact & Transparency Section */}
      <section className="py-32 bg-zinc-950 fade-on-scroll opacity-0 transition-all duration-[1500ms] relative overflow-hidden">
        <div className="absolute inset-0 soft-light-center"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 font-serif">
              {impactTransparencyData.headline}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {impactTransparencyData.content}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {impactTransparencyData.metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 border border-white/10 hover:border-amber-500/30 transition-all group"
              >
                <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500/30 transition-colors">
                  {getIcon(metric.icon)}
                </div>
                <h3 className="text-sm font-semibold text-amber-400 mb-3 uppercase tracking-wider">
                  {metric.label}
                </h3>
                <div className="text-3xl font-bold mb-3">{metric.value}</div>
                <p className="text-gray-400 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center gap-2 px-10 py-5 border-2 border-amber-500/50 text-amber-400 font-bold rounded-full hover:bg-amber-500 hover:text-black transition-all hover:scale-105 active:scale-95">
              Download Impact Report
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Behind the Camera */}
      <section className="py-32 bg-black fade-on-scroll opacity-0 transition-all duration-[1500ms] relative overflow-hidden">
        {/* Vibrant pool art - diagonal accent */}
        <div 
          className="absolute top-0 right-0 w-2/5 h-full opacity-20 mix-blend-screen"
          style={{
            backgroundImage: 'url(https://customer-assets.emergentagent.com/job_art-investor/artifacts/2bg4klwl_16.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)',
            filter: 'saturate(1.2)'
          }}
        ></div>
        <div className="absolute inset-0 soft-light-center"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
                <Film size={16} className="text-purple-400" />
                <span className="text-purple-400 text-xs font-semibold tracking-widest">DOCUMENTARY</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight font-serif">
                {behindCameraData.headline}
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {behindCameraData.content}
              </p>
              <Link
                to="/media"
                className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-full hover:from-purple-400 hover:to-purple-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/20"
              >
                <Play size={20} />
                Watch the Teaser
              </Link>
            </div>

            <div className="relative">
              <div className="relative aspect-video bg-zinc-900 rounded-2xl overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-black/80 group-hover:from-purple-500/30 transition-colors">
                  <div className="w-24 h-24 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white transition-colors group-hover:scale-110 transition-transform">
                    <Play size={40} className="text-black ml-2" />
                  </div>
                </div>
                <img
                  src={galleryImages[1]}
                  alt="Documentary Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                Documentary teaser coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Quote Strip */}
      <section className="py-24 bg-gradient-to-r from-amber-500/10 via-amber-600/15 to-amber-500/10 fade-on-scroll opacity-0 transition-all duration-[1500ms] relative overflow-hidden">
        <div className="absolute inset-0 soft-light-center"></div>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl text-amber-400 mb-6">"</div>
            <p className="text-2xl md:text-3xl font-light italic text-gray-200 mb-8 leading-relaxed">
              {testimonialData.quote}
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-amber-400"></div>
              <div>
                <p className="text-lg font-semibold text-amber-400">{testimonialData.author}</p>
                <p className="text-sm text-gray-400">{testimonialData.title}</p>
              </div>
              <div className="h-px w-12 bg-amber-400"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Charity Partners Section */}
      <section className="py-32 bg-black fade-on-scroll opacity-0 transition-all duration-[1500ms] relative overflow-hidden">
        <div className="absolute inset-0 soft-light-center"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/10 border border-red-500/30 rounded-full mb-8">
              <Heart size={20} className="text-red-400" />
              <span className="text-red-400 text-sm font-semibold tracking-widest">GIVING BACK</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
              ArtOnFilm Family & Memberships
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              We aim to support vital charitable causes, making a difference beyond the gallery walls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {charityLogos.map((charity, index) => (
              <a
                key={charity.name}
                href={charity.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-10 border border-red-500/20 hover:border-red-500/40 transition-all h-full flex flex-col items-center text-center">
                  {/* Logo Image */}
                  <div className="w-32 h-32 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <img
                      src={charity.logo}
                      alt={charity.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                    {charity.name}
                  </h3>
                  
                  {/* Social Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    {charity.social?.twitter && (
                      <a
                        href={charity.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-red-400 transition-colors"
                        aria-label="Twitter"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                    )}
                    {charity.social?.facebook && (
                      <a
                        href={charity.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-red-400 transition-colors"
                        aria-label="Facebook"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                    )}
                    {charity.social?.instagram && (
                      <a
                        href={charity.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-red-400 transition-colors"
                        aria-label="Instagram"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-lg">
              Every exhibition, every sale, every partnership contributes to these vital causes.
            </p>
          </div>
        </div>
      </section>

      {/* Exhibitions & Tours */}
      <section className="py-32 relative overflow-hidden fade-on-scroll opacity-0 transition-all duration-[1500ms]">
        {/* Background Image with Overlays */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://customer-assets.emergentagent.com/job_filmartgallery/artifacts/yx1o440r_file_00000000314461f7b345efec99445794.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90"></div>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 soft-light-center"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-4 bg-gradient-to-r from-green-500/10 to-transparent border border-green-400/30 rounded-full backdrop-blur-sm">
              <span className="text-green-400 text-xs font-semibold tracking-wider">Ethics & Wealth · Fortune Favours the Givers</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 font-serif text-white">
              {exhibitionsToursData.headline}
            </h2>
            <p className="text-2xl text-amber-400 font-light italic">
              {exhibitionsToursData.subheadline}
            </p>
          </div>

          {/* Events Table */}
          <div className="bg-gradient-to-br from-zinc-900/70 to-black/70 rounded-3xl border border-amber-500/30 overflow-hidden backdrop-blur-md mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 border-b border-amber-500/30">
                    <th className="px-6 py-4 text-left text-amber-400 font-bold text-sm uppercase tracking-wider">City</th>
                    <th className="px-6 py-4 text-left text-amber-400 font-bold text-sm uppercase tracking-wider">Project</th>
                    <th className="px-6 py-4 text-left text-amber-400 font-bold text-sm uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {exhibitionsToursData.events.map((event, index) => (
                    <tr 
                      key={index}
                      className="border-b border-white/5 hover:bg-amber-500/5 transition-colors"
                    >
                      <td className="px-6 py-5 text-white font-medium">{event.city}</td>
                      <td className="px-6 py-5 text-gray-300">{event.project}</td>
                      <td className="px-6 py-5 text-amber-400 font-medium">{event.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Host & Culture Venues Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Singapore 2025 Venues */}
            <div className="bg-gradient-to-br from-zinc-900/70 to-black/70 rounded-2xl border border-amber-500/20 p-8 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {exhibitionsToursData.venues.headline}
              </h3>
              <p className="text-gray-300 mb-4 italic">{exhibitionsToursData.venues.description}</p>
              <div className="space-y-2">
                <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Singapore 2025:</p>
                {exhibitionsToursData.venues.singapore2025.map((venue, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                    <span>{venue}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Partners */}
            <div className="bg-gradient-to-br from-zinc-900/70 to-black/70 rounded-2xl border border-amber-500/20 p-8 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-amber-400 mb-6">Partners & Friends on Tour</h3>
              <div className="grid grid-cols-2 gap-4">
                {exhibitionsToursData.partners.map((partner, idx) => (
                  <div key={idx} className="bg-black/40 rounded-lg p-4 border border-white/10 text-center">
                    <p className="text-gray-300 text-sm font-medium">{partner}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Previous Exhibitions History */}
          <div className="bg-gradient-to-br from-zinc-900/70 to-black/70 rounded-2xl border border-amber-500/20 p-8 backdrop-blur-md mb-12">
            <h3 className="text-2xl font-bold text-amber-400 mb-2">{exhibitionsToursData.previousExhibitions.headline}</h3>
            <div className="h-px w-32 bg-gradient-to-r from-amber-400 to-transparent mb-6"></div>
            
            <div className="space-y-4">
              {exhibitionsToursData.previousExhibitions.events.map((event, idx) => (
                <div key={idx} className="border-l-2 border-amber-500/30 pl-6 py-2 hover:border-amber-500/60 transition-colors">
                  <div className="flex items-baseline gap-4 mb-1">
                    <p className="text-white font-bold">{event.location}</p>
                    {event.event && <span className="text-amber-400 text-sm">• {event.event}</span>}
                    <span className="text-gray-500 text-sm">{event.year}</span>
                  </div>
                  {event.description && <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>}
                  {event.artist && <p className="text-gray-400 text-sm italic">Artist: {event.artist}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setShowJourneyModal(true)}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20"
            >
              Join the Journey
            </button>
            <button
              onClick={() => setShowHostEventModal(true)}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-400/80 text-white font-bold rounded-full hover:bg-gradient-to-r hover:from-amber-400/20 hover:to-amber-500/20 hover:border-amber-300 transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
            >
              Host an Event
            </button>
            <button
              onClick={() => setShowInvitationModal(true)}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-400/80 text-white font-bold rounded-full hover:bg-gradient-to-r hover:from-amber-400/20 hover:to-amber-500/20 hover:border-amber-300 transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
            >
              Apply for Invitation
            </button>
          </div>
        </div>
      </section>

      {/* ART ON GIVING — The Festival of Humanity */}
      <section className="py-32 relative overflow-hidden fade-on-scroll opacity-0 transition-all duration-[1500ms]">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-red-500/10 via-transparent to-transparent blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-6 py-2 border border-red-500/30 rounded-full bg-red-500/5">
            <Heart size={20} className="inline-block mr-2 text-red-400" />
            <span className="text-red-400 text-sm font-medium tracking-wider uppercase">{artOnGivingData.headline}</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 font-serif text-white">
            {artOnGivingData.subheadline}
          </h2>
          
          {/* ArtOnGiving Logo */}
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-amber-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
                <img 
                  src="https://customer-assets.emergentagent.com/job_film-canvas/artifacts/5b3ww1e1_Art_on_giving.jpg"
                  alt="ArtOnGiving"
                  className="h-32 w-auto object-contain"
                />
              </div>
            </div>
          </div>
          
          <p className="text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            {artOnGivingData.description}
          </p>
          
          <div className="bg-gradient-to-r from-red-500/10 to-amber-500/10 rounded-2xl p-8 border border-red-500/20 mb-12">
            <p className="text-2xl text-amber-400 italic font-light leading-relaxed mb-4">
              "{artOnGivingData.quote}"
            </p>
            <div className="text-right">
              <p className="text-white font-semibold">— {artOnGivingData.author}</p>
              <p className="text-gray-400 text-sm">{artOnGivingData.title}</p>
            </div>
          </div>

          {/* Modern motto badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="px-5 py-2.5 bg-gradient-to-r from-red-500/10 to-transparent border border-red-400/30 rounded-full backdrop-blur-sm">
              <span className="text-red-400 text-sm font-semibold">We remember the brave</span>
            </div>
            <div className="px-5 py-2.5 bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-400/30 rounded-full backdrop-blur-sm">
              <span className="text-amber-400 text-sm font-semibold">Creation is life</span>
            </div>
          </div>
        </div>
      </section>

      {/* Andrew Carnegie Quote - On Philanthropy */}
      <section className="py-24 bg-gradient-to-r from-amber-500/10 via-amber-600/10 to-amber-500/10 fade-on-scroll opacity-0 transition-all duration-[1500ms] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-amber-500/5 via-transparent to-transparent blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="text-7xl text-amber-400 mb-4 font-serif">"</div>
            <blockquote className="text-3xl md:text-4xl font-light italic text-gray-200 mb-8 leading-relaxed">
              {quotes.carnegie.philanthropy}
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
              <div>
                <p className="text-xl font-bold text-amber-400">Andrew Carnegie</p>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Industrialist & Philanthropist</p>
              </div>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership with Patron Levels */}
      <section className="py-32 relative overflow-hidden fade-on-scroll opacity-0 transition-all duration-[1500ms]">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black"></div>
        {/* Sophisticated pool art - top right corner */}
        <div 
          className="absolute top-0 right-0 w-1/3 h-1/2 opacity-15 mix-blend-lighten"
          style={{
            backgroundImage: 'url(https://customer-assets.emergentagent.com/job_art-investor/artifacts/1axxgyr7_20.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: 'radial-gradient(ellipse at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)'
          }}
        ></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-6 py-2 border border-amber-500/30 rounded-full bg-amber-500/5">
              <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">Exclusive Access</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-white">
              {membershipData.title}
            </h2>
            <p className="text-xl text-gray-300 mb-6 italic">
              {membershipData.subtitle}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
              {membershipData.description}
            </p>
            
            {/* Quotes */}
            <div className="max-w-3xl mx-auto mb-6">
              <p className="text-xl text-amber-100 italic mb-2">
                {membershipData.quote}
              </p>
              <p className="text-lg text-gray-400 italic mb-2">
                {membershipData.subQuote}
              </p>
              <p className="text-sm text-gray-500 italic">
                {membershipData.attribution}
              </p>
            </div>
          </div>

          {/* Patron Levels */}
          <div className="space-y-8 mb-12">
            {membershipData.patronLevels.map((level, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 border border-amber-500/20 hover:border-amber-500/40 transition-all"
              >
                <h4 className="text-2xl font-bold text-amber-400 mb-2">{level.tier}</h4>
                {level.headline && (
                  <p className="text-lg text-gray-300 italic mb-4">{level.headline}</p>
                )}
                <ul className="space-y-3 mb-6">
                  {level.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-gray-300 leading-relaxed flex items-start">
                      <span className="text-amber-400 mr-3">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-amber-400 font-semibold italic text-lg border-t border-amber-500/20 pt-4">
                  {level.tagline}
                </p>
              </div>
            ))}
          </div>
          
          {/* Closing Statements */}
          <div className="text-center mb-12 space-y-3">
            {membershipData.closingStatements.map((statement, idx) => (
              <p key={idx} className="text-gray-300 text-lg italic">
                {statement}
              </p>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/patrons"
              className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-amber-500/30"
            >
              Apply for Membership
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* THE 5·5·5 MODEL — JustGive2Support™ */}
      <section className="py-32 relative overflow-hidden fade-on-scroll opacity-0 transition-all duration-[1500ms]">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
        {/* Bright colorful accent - bottom right */}
        <div 
          className="absolute bottom-0 right-0 w-80 h-80 opacity-15 mix-blend-screen"
          style={{
            backgroundImage: 'url(https://customer-assets.emergentagent.com/job_art-investor/artifacts/lfqa35q2_22.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '50%',
            transform: 'translate(25%, 25%)',
            filter: 'saturate(1.4) brightness(1.2)'
          }}
        ></div>
        <div className="absolute inset-0 soft-light-center"></div>
        
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 z-10">
          <div className="bg-gradient-to-br from-green-900/20 to-black rounded-3xl p-12 md:p-16 border border-green-500/20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-white">
              {givingModelData.headline}
            </h2>
            <p className="text-2xl text-green-400 font-medium mb-8">
              {givingModelData.subheadline}
            </p>
            
            <p className="text-xl text-gray-300 mb-6">
              {givingModelData.description}
            </p>
            
            <div className="bg-black/40 rounded-2xl p-8 mb-8 border border-green-500/30">
              <p className="text-3xl text-green-400 font-bold mb-6">
                {givingModelData.breakdown}
              </p>
              <div className="space-y-3">
                {givingModelData.breakdownDetails.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-green-500/20 last:border-0">
                    <span className="text-xl text-white">{item.label}</span>
                    <span className="text-2xl text-green-400 font-bold">{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
              {givingModelData.footer}
            </p>
            
            {/* Additional Disclaimer at Bottom */}
            <div className="mt-8 pt-6 border-t border-green-500/20">
              <p className="text-sm text-gray-400 italic">
                * Illustrative example only. Actual allocations may vary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS - With Logos */}
      <section className="py-20 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                {partnersData.headline}
              </span>
            </h2>
            <p className="text-lg text-gray-400 italic mb-2">
              Friends During ArtOnTour: Singapore:
            </p>
            <p className="text-base text-gray-400 italic">
              Partners, Friends & Sponsors JUSTART together creating tomorrow, today. JUSTDO we JUSTGIVE
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partnersVenuesData.partners.map((partner, index) => (
              <div
                key={index}
                onClick={() => setSelectedPartner(partner)}
                className="group relative bg-white rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 border-2 border-transparent hover:border-amber-500/50"
              >
                {/* Logo Container */}
                <div className="aspect-video flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end justify-center pb-4">
                  <p className="text-white font-semibold text-sm">Click to learn more</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ETHICS & PRIVACY */}
      <section className="py-32 relative overflow-hidden fade-on-scroll opacity-0 transition-all duration-[1500ms]">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
        {/* "Terms Glitched" edgy background */}
        <div 
          className="absolute inset-0 opacity-15 mix-blend-lighten"
          style={{
            backgroundImage: 'url(https://customer-assets.emergentagent.com/job_art-investor/artifacts/wjv5gir6_file_0000000005746246ab1b470ae83bcdc9.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'hue-rotate(30deg)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>
        
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif text-white text-center uppercase tracking-wider">
            {ethicsPrivacyData.headline}
          </h2>
          
          <p className="text-xl text-gray-300 text-center mb-12 leading-relaxed">
            {ethicsPrivacyData.intro}
          </p>
          
          <div className="space-y-6">
            {ethicsPrivacyData.sections.map((section, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-zinc-900/50 to-black/50 rounded-xl p-6 border border-white/10"
              >
                <h3 className="text-xl font-bold text-amber-400 mb-3">{section.title}</h3>
                <p className="text-gray-300 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal & Ethical Framework */}
      <section className="py-32 relative overflow-hidden fade-on-scroll opacity-0 transition-all duration-[1500ms]">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/5 via-transparent to-transparent blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-6 py-2 border border-blue-500/30 rounded-full bg-blue-500/5">
              <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">Transparency & Compliance</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-white uppercase tracking-wider">
              Legal & Ethical Framework
            </h2>
          </div>
          
          {/* Main Content */}
          <div className="space-y-6 mb-12">
            <div className="bg-gradient-to-r from-blue-900/20 to-black/50 rounded-xl p-6 border border-blue-500/20">
              <ul className="space-y-4 text-gray-300 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Operated by <span className="text-white font-semibold">ArtOnFilm Ltd (UK)</span> — a cultural promotion company, not a charity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>All tiers support ArtOnTour, Lens2Care and ArtOnGiving projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Tokens and experiences are commercial rewards, not investments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Participants may redirect token value to verified charities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Corporate memberships may qualify for tax relief under <span className="text-white font-semibold">HMRC BIM45045 / CTA 2009 s54</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>VAT included; official invoice issued</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Annual Transparency Report published</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Risk Notice */}
          <div className="bg-gradient-to-r from-amber-900/20 to-black/50 rounded-xl p-8 border border-amber-500/30">
            <h3 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
              <span className="text-3xl">⚠️</span>
              Risk Notice
            </h3>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>Membership is a commercial partnership, not a charitable donation or financial promotion.</p>
              <p>Event benefits subject to availability and partner approval.</p>
              <p>All operations adhere to UK/EU GDPR.</p>
              <p className="text-amber-100 font-medium pt-3 border-t border-amber-500/20">
                ArtOnFilm Ltd reserves the right to adjust benefits to maintain legal and ethical compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Art & Science - Education Is Alchemy */}
      <section className="py-32 relative overflow-hidden fade-on-scroll opacity-0 transition-all duration-[1500ms]">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
        {/* "We Are The Noise" artistic background */}
        <div 
          className="absolute inset-0 opacity-25 mix-blend-overlay"
          style={{
            backgroundImage: 'url(https://customer-assets.emergentagent.com/job_art-investor/artifacts/4qv6n410_file_000000006a2461f7b89e4e2f623440d7.png)',
            backgroundSize: '50%',
            backgroundPosition: 'center left',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="absolute inset-0 soft-light-center"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-6 py-2 border border-amber-500/30 rounded-full bg-amber-500/5">
              <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">{artScienceData.headline}</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-4 font-serif text-white">
              {artScienceData.subheadline}
            </h2>
            <p className="text-2xl text-amber-400 font-light italic mb-12">
              {artScienceData.tagline}
            </p>
            
            <div className="inline-block mb-12 px-6 py-2 bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-full border border-amber-500/20">
              <span className="text-white font-semibold text-lg">Programmes</span>
            </div>
          </div>

          {/* Programme Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {artScienceData.programmes.map((programme, index) => {
              const IconComponent = programmeIcons[programme.icon] || GraduationCap;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-zinc-900/50 to-black/50 rounded-2xl p-8 border border-white/10 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <IconComponent size={24} className="text-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                        {programme.title}
                      </h3>
                      <p className="text-amber-400 font-medium mb-3">
                        {programme.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {programme.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Footer Text */}
          <div className="text-center">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {artScienceData.footer}
            </p>
          </div>
        </div>
      </section>

      {/* SHOP — Collect with Conscience */}
      <section className="py-32 relative overflow-hidden fade-on-scroll opacity-0 transition-all duration-[1500ms]">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950"></div>
        {/* Colorful artwork split - left side */}
        <div 
          className="absolute left-0 top-0 w-1/4 h-full opacity-20 mix-blend-color-dodge"
          style={{
            backgroundImage: 'url(https://customer-assets.emergentagent.com/job_art-investor/artifacts/g8idwuhn_18.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
          }}
        ></div>
        <div className="absolute inset-0 soft-light-center"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center z-10">
          <div className="inline-block mb-6 px-6 py-2 border border-amber-500/30 rounded-full bg-amber-500/5">
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">{shopData.headline}</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-serif text-white">
            {shopData.subheadline}
          </h2>
          
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {shopData.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {shopData.categories.map((category, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-zinc-900 to-black border border-white/10 rounded-full text-white font-medium hover:border-amber-500/30 transition-all"
              >
                {category}
              </span>
            ))}
          </div>
          
          <Link
            to="/collection"
            className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-amber-500/30"
          >
            Shop NOW
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* ART ON DESIGN — Where Art Meets Comfort */}
      <section className="py-32 relative overflow-hidden fade-on-scroll opacity-0 transition-all duration-[1500ms]">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-6 py-2 border border-purple-500/30 rounded-full bg-purple-500/5">
              <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">{artOnDesignData.headline}</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-serif text-white">
              {artOnDesignData.subheadline}
            </h2>
            
            <p className="text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              {artOnDesignData.description}
            </p>
            
            <p className="text-lg text-amber-400 italic mb-12">
              {artOnDesignData.details}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {artOnDesignData.items.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zinc-900/50 to-black/50 rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all text-center backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold text-white">{item}</h3>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              {artOnDesignData.footer}
            </p>
            
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-full hover:from-purple-400 hover:to-purple-500 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-purple-500/30"
            >
              Get Involved
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CARNABY INTERNATIONAL — The Silver Screen of Giving */}
      <section className="py-32 relative overflow-hidden fade-on-scroll opacity-0 transition-all duration-[1500ms]">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950"></div>
        {/* Cinematic pool art - background */}
        <div 
          className="absolute inset-0 opacity-10 mix-blend-soft-light"
          style={{
            backgroundImage: 'url(https://customer-assets.emergentagent.com/job_art-investor/artifacts/dxeheg2r_17.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(30%) contrast(1.1)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-amber-500/10 via-transparent to-transparent blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 z-10">
          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-12 md:p-16 border border-amber-500/20 text-center">
            <div className="inline-block mb-6 px-6 py-2 border border-amber-500/30 rounded-full bg-amber-500/5">
              <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">{carnabyFilmsData.headline}</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-white">
              {carnabyFilmsData.subheadline}
            </h2>
            
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              {carnabyFilmsData.description}
            </p>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              {carnabyFilmsData.additional}
            </p>
            
            <div className="bg-black/30 rounded-xl p-6 mb-8 border-l-4 border-amber-500">
              <p className="text-xl text-amber-400 italic font-light leading-relaxed">
                "{carnabyFilmsData.quote}"
              </p>
            </div>
            
            <a
              href="http://www.carnabysales.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-amber-500/30"
            >
              Visit Carnaby International
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter / Insider Circle */}
      <section className="py-32 bg-black fade-on-scroll opacity-0 transition-all duration-[1500ms] relative overflow-hidden">
        <div className="absolute inset-0 soft-light-center"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-12 md:p-16 border border-amber-500/20 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Mail size={40} className="text-black" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Stay in the Frame
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join the ArtOnFilm Giving Circle for exhibition updates, patron opportunities, and early access to limited editions.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 bg-black/50 border border-white/20 rounded-full focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all text-white placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CONTACT - Simple Bottom Section */}
      <section className="py-20 bg-zinc-950 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-400">
              We'd love to hear from you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactData.emails.map((contact, index) => (
              <a
                key={index}
                href={`mailto:${contact.email}`}
                className="group bg-black/30 border border-white/10 rounded-xl p-6 hover:border-amber-500/50 hover:bg-black/50 transition-all text-center"
              >
                <Mail className="w-6 h-6 text-amber-400 mx-auto mb-3" />
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{contact.label}</p>
                <p className="text-amber-400 font-medium group-hover:text-amber-300 transition-colors text-sm">
                  {contact.email}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Journey Modal */}
      {showJourneyModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowJourneyModal(false)}>
          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 max-w-md w-full border border-amber-500/30 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowJourneyModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-3xl font-bold text-white mb-2">Join the Journey</h3>
            <p className="text-gray-400 mb-6">Become part of the ArtOnFilm movement</p>
            
            <form onSubmit={handleJourneySubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  value={journeyForm.name}
                  onChange={(e) => setJourneyForm({ ...journeyForm, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all text-white"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={journeyForm.email}
                  onChange={(e) => setJourneyForm({ ...journeyForm, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all text-white"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  value={journeyForm.message}
                  onChange={(e) => setJourneyForm({ ...journeyForm, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all text-white resize-none"
                  placeholder="Tell us about your interest..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Host an Event Modal */}
      {showHostEventModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowHostEventModal(false)}>
          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 max-w-md w-full border border-amber-500/30 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowHostEventModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-3xl font-bold text-white mb-2">Host an Event</h3>
            <p className="text-gray-400 mb-6">Bring ArtOnFilm to your venue</p>
            
            <form onSubmit={handleHostEventSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  value={hostEventForm.name}
                  onChange={(e) => setHostEventForm({ ...hostEventForm, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all text-white"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={hostEventForm.email}
                  onChange={(e) => setHostEventForm({ ...hostEventForm, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all text-white"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Organization</label>
                <input
                  type="text"
                  value={hostEventForm.organization}
                  onChange={(e) => setHostEventForm({ ...hostEventForm, organization: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all text-white"
                  placeholder="Venue or organization name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Event Details</label>
                <textarea
                  value={hostEventForm.eventDetails}
                  onChange={(e) => setHostEventForm({ ...hostEventForm, eventDetails: e.target.value })}
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all text-white resize-none"
                  placeholder="Tell us about your venue and event ideas..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Apply for Invitation Modal */}
      {showInvitationModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowInvitationModal(false)}>
          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 max-w-md w-full border border-amber-500/30 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowInvitationModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-3xl font-bold text-white mb-2">Apply for Invitation</h3>
            <p className="text-gray-400 mb-6">Request exclusive access to our events</p>
            
            <form onSubmit={handleInvitationSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  value={invitationForm.name}
                  onChange={(e) => setInvitationForm({ ...invitationForm, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all text-white"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={invitationForm.email}
                  onChange={(e) => setInvitationForm({ ...invitationForm, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all text-white"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Why are you interested?</label>
                <textarea
                  value={invitationForm.interest}
                  onChange={(e) => setInvitationForm({ ...invitationForm, interest: e.target.value })}
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all text-white resize-none"
                  placeholder="Tell us about your interest in ArtOnFilm..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Partner Modal */}
      {selectedPartner && (
        <PartnerModal
          partner={selectedPartner}
          onClose={() => setSelectedPartner(null)}
        />
      )}

      {/* Floating Collection CTA */}
      <FloatingCollectionCTA />
    </div>
  );
};

export default Home;
