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
  description: 'ArtOnFilm connects Britain\'s leading visual artists with Europe\'s most dynamic cultural cities — building bridges through art, film, and human story.',
  backgroundImage: 'https://images.unsplash.com/photo-1760662347435-1c0a11fea640?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBhcnQlMjBnYWxsZXJ5fGVufDB8fHx8MTc2MTIyMTA5MHww&ixlib=rb-4.1.0&q=85'
};

export const visionData = {
  headline: 'Culture without borders. Connection without politics.',
  content: 'ArtOnFilm is a British-European cultural platform that unites art, film, and purpose. Our mission: to move people through art — not just display it. In 2025–26, our headline exhibition Through Our Eyes / One Frame Ahead takes award-winning painter Natasha Kissell and photographer JustXR1 from London to Warsaw and Copenhagen before returning to the UK for a national showcase. Each exhibition is both an artwork and an act of diplomacy — culture as dialogue, not decoration.'
};

export const programmeData = {
  headline: 'Through Our Eyes / One Frame Ahead',
  subheadline: 'A UK ↔ EU Art Exchange.',
  tourDates: 'Dec 2025 – Jun 2026',
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
  contribution: '£2,000 – £5,000 per year',
  benefits: [
    'Recognition in catalogue & film credits',
    'Private London preview',
    'First access to new works and editions',
    'Invitations to European openings & dinners',
    'Annual Patron Forum in London',
    'Signed Certificate of Founding Patronage'
  ]
};

export const corporateData = {
  headline: 'Partner with ArtOnFilm',
  subheadline: 'Sponsor the UK ↔ EU Cultural Exchange 2025–26',
  tiers: [
    {
      name: 'Principal Partner',
      amount: '£15,000+',
      benefits: [
        '"Presented by" logo placement',
        'Speaking role at events',
        'Reserved artworks',
        'Full press and media coverage'
      ]
    },
    {
      name: 'Supporting Partner',
      amount: '£5,000 – £15,000',
      benefits: [
        'Logo across materials',
        'VIP invitations',
        'Corporate networking events',
        'Brand visibility'
      ]
    },
    {
      name: 'Event Partner',
      amount: '£2,500 – £5,000',
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
  content: 'ArtOnFilm invites embassies and cultural institutes to support the 2025–26 tour through endorsement, venue hosting, media collaboration, or introductions to local networks. No direct funding requested — only symbolic and logistical partnership.'
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
      target: '−40% CO₂ vs standard touring',
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
  { name: 'Red Cross', url: '#' },
  { name: 'Cancer Research UK', url: '#' },
  { name: 'ArtOnGiving CIC', url: '#' }
];

export const galleryImages = [
  'https://images.unsplash.com/photo-1518998053901-5348d3961a04',
  'https://images.unsplash.com/photo-1600903781679-7ea3cbc564c3',
  'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3'
];