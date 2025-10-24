// Mock data for ArtOnFilm website

export const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Programme', path: '/programme' },
  { name: 'Patrons', path: '/patrons' },
  { name: 'Partners', path: '/partners' },
  { name: 'Institutional', path: '/institutional' },
  { name: 'Impact', path: '/impact' },
  { name: 'Media', path: '/media' },
  { name: 'Contact', path: '/contact' }
];

export const heroData = {
  headline: 'The Silver Screen of Culture',
  subheadline: 'Where art, ethics, and exposure meet.',
  description: 'ArtOnFilm connects Britain\'s leading visual artists with Europe\'s most dynamic cultural cities - building bridges through art, film, and human story.',
  backgroundImage: 'https://images.unsplash.com/photo-1491156855053-9cdff72c7f85?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxicmlnaHQlMjBhcnQlMjBnYWxsZXJ5fGVufDB8fHx8MTc2MTIyNTI0NHww&ixlib=rb-4.1.0&q=85'
};

export const visionData = {
  headline: 'Culture without borders. Connection without politics.',
  content: 'ArtOnFilm is a British-European cultural platform that unites art, film, and purpose. Our mission: to move people through art - not just display it. In 2025-26, our headline exhibition Through Our Eyes / One Frame Ahead takes award-winning painter Natasha Kissell and photographer JustXR1 from London to Warsaw and Copenhagen before returning to the UK for a national showcase. Each exhibition is both an artwork and an act of diplomacy - culture as dialogue, not decoration.'
};

export const programmeData = {
  headline: 'Through Our Eyes / One Frame Ahead',
  subheadline: 'A UK to EU Art Exchange.',
  tourDates: 'Dec 2025 to Jun 2026',
  cities: [
    {
      name: 'London',
      image: 'https://images.unsplash.com/photo-1654271166015-d87ab7097752?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxMb25kb24lMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzYxMjIxMTM2fDA&ixlib=rb-4.1.0&q=85',
      date: 'December 2025'
    },
    {
      name: 'Warsaw',
      image: 'https://images.unsplash.com/photo-1679949180197-8f0d28abd3a3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxXYXJzYXclMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzYxMjIxMTIxfDA&ixlib=rb-4.1.0&q=85',
      date: 'February 2026'
    },
    {
      name: 'Copenhagen',
      image: 'https://images.unsplash.com/photo-1628341036825-f785c8ca030f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxDb3BlbmhhZ2VuJTIwYXJjaGl0ZWN0dXJlfGVufDB8fHx8MTc2MTIyMTEyOHww&ixlib=rb-4.1.0&q=85',
      date: 'April 2026'
    }
  ],
  partners: ['Hans Alf Gallery', 'Carnaby Films', 'ArtOnGiving CIC'],
  outcomes: [
    'Touring exhibitions',
    'Documentary film',
    'Educational workshops'
  ]
};

export const patronData = {
  headline: 'Become a Founding Patron',
  subheadline: 'Join the circle that makes art diplomacy possible.',
  contribution: 'GBP 2,000 to GBP 5,000 per year',
  benefits: [
    'Recognition in catalogue and film credits',
    'Private London preview',
    'First access to new works and editions',
    'Invitations to European openings and dinners',
    'Annual Patron Forum in London',
    'Signed Certificate of Founding Patronage'
  ]
};

export const corporateData = {
  headline: 'Partner with ArtOnFilm',
  subheadline: 'Sponsor the UK to EU Cultural Exchange 2025-26',
  tiers: [
    {
      name: 'Principal Partner',
      amount: 'GBP 15,000+',
      benefits: [
        'Presented by logo placement',
        'Speaking role at events',
        'Reserved artworks',
        'Full press and media coverage'
      ]
    },
    {
      name: 'Supporting Partner',
      amount: 'GBP 5,000 to GBP 15,000',
      benefits: [
        'Logo across materials',
        'VIP invitations',
        'Corporate networking events',
        'Brand visibility'
      ]
    },
    {
      name: 'Event Partner',
      amount: 'GBP 2,500 to GBP 5,000',
      benefits: [
        'Single-city co-branding',
        'Press wall logo',
        'Event participation',
        'Local recognition'
      ]
    }
  ],
  csrNote: 'Financial or in-kind support welcome. Every partnership funds accessibility, education, and health-charity programmes.'
};

export const institutionalData = {
  headline: 'Cultural Collaboration Invitation',
  content: 'ArtOnFilm invites embassies and cultural institutes to support the 2025-26 tour through endorsement, venue hosting, media collaboration, or introductions to local networks. No direct funding requested - only symbolic and logistical partnership.'
};

export const impactData = {
  headline: 'Art That Gives Back',
  stats: [
    {
      area: 'Public Reach',
      target: '10,000+ visitors',
      evidence: 'Ticketing data'
    },
    {
      area: 'Education',
      target: '300+ students',
      evidence: 'Workshop logs'
    },
    {
      area: 'Accessibility',
      target: '100% inclusive events',
      evidence: 'Event checklists'
    },
    {
      area: 'Sustainability',
      target: 'Minus 40% CO2 vs standard touring',
      evidence: 'Freight audit'
    },
    {
      area: 'Charity Support',
      target: '15% of gross income',
      evidence: 'CSR report'
    },
    {
      area: 'Media',
      target: '3 national + 10 regional features',
      evidence: 'Press clippings'
    }
  ]
};

export const mediaData = {
  headline: 'Every Frame Tells a Story',
  content: 'Follow the journey through cinematic footage by Carnaby Films. Short films, artist interviews, and behind-the-scenes content will premiere online during the tour.',
  placeholderVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
};

export const charityLogos = [
  { 
    name: 'Red Cross', 
    url: 'https://www.redcross.org',
    logo: 'https://customer-assets.emergentagent.com/job_culturescreen/artifacts/7c054fpk_redcross.png',
    social: {
      twitter: 'https://twitter.com/RedCross',
      facebook: 'https://facebook.com/redcross',
      instagram: 'https://instagram.com/americanredcross'
    }
  },
  { 
    name: 'Cancer Research UK', 
    url: 'https://www.cancerresearchuk.org',
    logo: 'https://customer-assets.emergentagent.com/job_culturescreen/artifacts/gy6qkv2h_cancerresearchuk.png',
    social: {
      twitter: 'https://twitter.com/CR_UK',
      facebook: 'https://facebook.com/cancerresearchuk',
      instagram: 'https://instagram.com/cr_uk'
    }
  },
  { 
    name: 'ArtOnGiving', 
    url: 'https://artofgivingfoundation.org',
    logo: 'https://via.placeholder.com/200x100/000000/FFFFFF?text=ArtOnGiving',
    social: {
      facebook: 'https://facebook.com/artofgivingfoundation',
      instagram: 'https://instagram.com/artofgivingfoundation'
    }
  }
];

export const galleryImages = [
  'https://images.unsplash.com/photo-1518998053901-5348d3961a04',
  'https://images.unsplash.com/photo-1600903781679-7ea3cbc564c3',
  'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3'
];

export const investmentData = {
  headline: 'Investing in Cultural Capital',
  subheadline: 'ArtOnFilm transforms creativity into long-term value.',
  content: 'Each exhibition is built on a sustainable model where artistic merit, education, and brand visibility align. From limited-edition works and licensing to educational sponsorships, every partnership leaves a measurable legacy.',
  stats: [
    { label: '6 Cities', value: '6' },
    { label: '10,000+ Visitors', value: '10K+' },
    { label: '15% of Revenue Donated', value: '15%' }
  ]
};

export const impactTransparencyData = {
  headline: 'Measurable Cultural Impact',
  content: 'Every ArtOnFilm programme reports outcomes across five pillars - reach, education, accessibility, sustainability, and giving.',
  metrics: [
    {
      icon: 'users',
      label: 'Public Reach',
      value: '10,000+ visitors',
      description: 'Across all exhibition venues'
    },
    {
      icon: 'graduation',
      label: 'Education',
      value: '300+ students',
      description: 'Workshop and outreach programmes'
    },
    {
      icon: 'leaf',
      label: 'Sustainability',
      value: 'Minus 40% CO2',
      description: 'vs standard touring exhibitions'
    },
    {
      icon: 'heart',
      label: 'Charity Support',
      value: '15% gross income',
      description: 'Donated to health charities'
    }
  ]
};

export const partnersVenuesData = {
  headline: 'Trusted by Cultural Leaders',
  content: 'Our partners span art, film, hospitality, and science - united by one belief: culture creates connection.',
  partners: [
    {
      name: 'Hans Alf Gallery',
      location: 'Copenhagen',
      logo: 'https://customer-assets.emergentagent.com/job_culturescreen/artifacts/ryh5nhf5_hansalfgallery.jpeg',
      website: 'http://hansalf.com/',
      instagram: 'https://instagram.com/hansalfgallery',
      facebook: 'https://facebook.com/hansalfgallery'
    },
    {
      name: 'Carnaby Films',
      location: 'London',
      logo: 'https://customer-assets.emergentagent.com/job_culturescreen/artifacts/m524tx8t_carnabyfilms.jpeg',
      website: 'http://www.carnabysales.com',
      twitter: 'https://twitter.com/CarnabyFilms',
      facebook: 'https://facebook.com/carnaby.international'
    },
    {
      name: 'DHS Labs',
      location: 'Berlin',
      logo: 'https://via.placeholder.com/200x100/000000/FFFFFF?text=DHS+Labs',
      website: '#',
      linkedin: '#'
    },
    {
      name: 'Bluebird Group',
      location: 'Chelsea',
      logo: 'https://via.placeholder.com/200x100/000000/FFFFFF?text=Bluebird',
      website: '#',
      instagram: '#'
    },
    {
      name: 'South Place Hotel',
      location: 'London City',
      logo: 'https://via.placeholder.com/200x100/000000/FFFFFF?text=South+Place',
      website: '#',
      instagram: '#'
    },
    {
      name: 'Natasha Kissell',
      location: 'Brighton',
      logo: 'https://customer-assets.emergentagent.com/job_culturescreen/artifacts/0uay4yw2_natashakissell.jpeg',
      website: 'https://natashakissell.uk',
      instagram: 'https://instagram.com/natashakissell',
      email: 'njkissell@aol.com'
    }
  ]
};

export const behindCameraData = {
  headline: 'Every Frame Tells a Story',
  content: 'Follow the making of Through Our Eyes / One Frame Ahead - a documentary capturing the people, process, and purpose behind Europe newest cultural exchange.',
  videoPlaceholder: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
};

export const testimonialData = {
  quote: 'ArtOnFilm redefines cultural diplomacy - proof that art can move economies as well as hearts.',
  author: 'Dr Chris Lee',
  title: 'Art and Science Director'
};

export const artworks = [
  {
    id: 1,
    title: 'Mountain Villa with Pool',
    artist: 'Natasha Kissell',
    medium: 'Oil on Canvas',
    year: '2024',
    description: 'A stunning contemporary piece capturing the serene beauty of modern architecture nestled in mountain landscapes. The vibrant colors and bold brushstrokes create a sense of tranquility and luxury.',
    image: 'https://customer-assets.emergentagent.com/job_culturescreen/artifacts/m5z5gyle_1.jpeg',
    price: 'POA'
  },
  {
    id: 2,
    title: 'Modernist Poolside',
    artist: 'Natasha Kissell',
    medium: 'Oil on Canvas',
    year: '2024',
    description: 'An exploration of light and reflection through the lens of mid-century modern architecture. The interplay between the pool and surrounding structure creates a captivating visual dialogue.',
    image: 'https://customer-assets.emergentagent.com/job_culturescreen/artifacts/s0yg3lwq_2.jpeg',
    price: 'POA'
  },
  {
    id: 3,
    title: 'Desert Oasis',
    artist: 'Natasha Kissell',
    medium: 'Oil on Canvas',
    year: '2024',
    description: 'Vibrant colors dance across the canvas in this celebration of Palm Springs modernism. The playful patterns in the pool contrast beautifully with the desert landscape and palm trees.',
    image: 'https://customer-assets.emergentagent.com/job_culturescreen/artifacts/q8bw9otk_3.jpeg',
    price: 'POA'
  },
  {
    id: 4,
    title: 'Alpine Reflection',
    artist: 'Natasha Kissell',
    medium: 'Oil on Canvas',
    year: '2024',
    description: 'Majestic mountain peaks frame this serene poolside scene. The crystal-clear water reflects the grandeur of the alpine landscape, creating a harmonious blend of luxury and nature.',
    image: 'https://customer-assets.emergentagent.com/job_culturescreen/artifacts/1o4c82hd_4.jpeg',
    price: 'POA'
  },
  {
    id: 5,
    title: 'Snowscape Sanctuary',
    artist: 'Natasha Kissell',
    medium: 'Oil on Canvas',
    year: '2024',
    description: 'A masterful study of winter light and architectural form. The snow-covered mountains provide a dramatic backdrop to this contemplative poolside composition.',
    image: 'https://customer-assets.emergentagent.com/job_culturescreen/artifacts/3tdybigr_5.jpeg',
    price: 'POA'
  }
];
