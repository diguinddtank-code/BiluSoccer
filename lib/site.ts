/**
 * Single source of truth for NAP (name, address, phone), links, programs and indexable routes.
 * Footer, contact page, JSON-LD, sitemap, robots and llms.txt all read from here.
 * Never hardcode the phone, email or address anywhere else.
 */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bilusoccer.com').replace(/\/$/, '');

export const BUSINESS = {
  name: 'BISA',
  legalName: 'Bilu International Soccer Academy',
  fullName: 'BISA – Bilu International Soccer Academy',
  alternateNames: ['Bilu International Soccer Academy', 'BISA Soccer Academy', 'Bilu Soccer'],
  tagline: 'Premier youth soccer academy in Metro Charleston, SC',
  description:
    'BISA (Bilu International Soccer Academy) is a youth soccer academy in Metro Charleston, SC, training boys and girls from U4 to U18 with the Global Elite Methodology — from first touches to the Elite college-prep squad, plus futsal and summer camps.',
  phone: '(843) 304-9414',
  phoneE164: '+18433049414',
  email: 'info@bilusoccer.com',
  sponsorshipEmail: 'amoreira@bilusoccer.com',
  logo: 'https://i.imgur.com/mHzuZgK.png',
  ogImage: 'https://i.imgur.com/mHzuZgK.png',
  foundingLocation: 'Metro Charleston, SC',
  /** 501(c)(3) nonprofit (IRS ruling 2022). */
  taxId: '88-0635486',
  /** Official training ground — the club's public location. */
  venue: {
    name: 'Sangaree Middle School',
    streetAddress: '1050 Discovery Dr',
    addressLocality: 'Ladson',
    addressRegion: 'SC',
    postalCode: '29456',
    addressCountry: 'US',
    latitude: 33.0271,
    longitude: -80.1076,
    mapsUrl: 'https://maps.google.com/?q=1050+Discovery+Dr,+Ladson,+SC+29456',
  },
  areaServed: [
    { name: 'Ladson', wiki: 'https://en.wikipedia.org/wiki/Ladson,_South_Carolina' },
    { name: 'Summerville', wiki: 'https://en.wikipedia.org/wiki/Summerville,_South_Carolina' },
    { name: 'Goose Creek', wiki: 'https://en.wikipedia.org/wiki/Goose_Creek,_South_Carolina' },
    { name: 'North Charleston', wiki: 'https://en.wikipedia.org/wiki/North_Charleston,_South_Carolina' },
    { name: 'Charleston', wiki: 'https://en.wikipedia.org/wiki/Charleston,_South_Carolina' },
    { name: 'Mount Pleasant', wiki: 'https://en.wikipedia.org/wiki/Mount_Pleasant,_South_Carolina' },
  ],
  social: {
    instagram: 'https://www.instagram.com/bilu_soccer/',
    facebook: 'https://www.facebook.com/bilusoccer',
    youtube: 'https://www.youtube.com/@bilusoccer',
    projetoBiluInstagram: 'https://www.instagram.com/projetobilu/',
  },
  registerUrl:
    'https://playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS05OTEtMTc4MTkwNTQwNXxvL1ZERU5WK3NXeVh6eWFNTFBtdUZIS2pOZUVWM0ZnTmlIdnhocTJHV2pvPQ==',
} as const;

export const fullAddress = `${BUSINESS.venue.streetAddress}, ${BUSINESS.venue.addressLocality}, ${BUSINESS.venue.addressRegion} ${BUSINESS.venue.postalCode}`;

export const absoluteUrl = (path = '/') => (path === '/' ? SITE_URL : `${SITE_URL}${path}`);

export type Program = {
  slug: string;
  path: string;
  name: string;
  ages: string;
  /** Age range for schema (typicalAgeRange). */
  ageRange: string;
  summary: string;
};

export const PROGRAMS: Program[] = [
  {
    slug: 'academy-development',
    path: '/programs/academy-development',
    name: 'Academy Development',
    ages: 'U4–U14',
    ageRange: '3-14',
    summary:
      'Progressive curriculum for boys and girls U4–U14: technical mastery, tactical awareness and age-specific athletic development — the first step on the BISA pathway.',
  },
  {
    slug: 'junior-academy',
    path: '/programs/junior-academy',
    name: 'Junior Academy',
    ages: 'U8–U12',
    ageRange: '7-12',
    summary:
      'Accelerated, selective track for high-potential U8–U12 players: intensive training, small-sided games, video analysis and regional competition.',
  },
  {
    slug: 'elite',
    path: '/programs/elite',
    name: 'BISA Elite',
    ages: 'U15–U18',
    ageRange: '14-18',
    summary:
      'The top of the BISA pathway for U15–U18: professional-standard training, showcases, strength & conditioning and college recruitment support.',
  },
  {
    slug: 'futsal',
    path: '/programs/futsal',
    name: 'BISA Futsal',
    ages: 'All ages',
    ageRange: '5-18',
    summary:
      'Indoor futsal sessions that sharpen ball mastery, 1v1 skills and quick decision-making — the year-round complement to outdoor training.',
  },
  {
    slug: 'summer-camps',
    path: '/programs/summer-camps',
    name: 'Summer Camps',
    ages: 'All levels',
    ageRange: '4-18',
    summary:
      'June & July soccer camps at Sangaree Middle School: two trainings per week and an intramural tournament, open to every skill level.',
  },
];

export const getProgram = (slug: string) => {
  const program = PROGRAMS.find((p) => p.slug === slug);
  if (!program) throw new Error(`Unknown program: ${slug}`);
  return program;
};

export type RouteInfo = {
  path: string;
  /** Page title without the brand suffix (the root layout template adds it). */
  title: string;
  description: string;
  /** Breadcrumb label. */
  label: string;
  priority: number;
  changeFrequency: 'weekly' | 'monthly' | 'yearly';
  /** Excluded from sitemap/llms.txt and set to noindex. */
  noindex?: boolean;
};

/** Every page on the site. Sitemap, llms.txt and page metadata are generated from this list. */
export const ROUTES: RouteInfo[] = [
  {
    path: '/',
    title: 'BISA | Youth Soccer Academy in Charleston & Summerville, SC',
    label: 'Home',
    description:
      'Youth soccer for boys and girls U4–U18 in Ladson, Summerville & Goose Creek, SC. Academy, Junior Academy, Elite, futsal and summer camps at BISA.',
    priority: 1,
    changeFrequency: 'weekly',
  },
  {
    path: '/programs',
    title: 'Youth Soccer Programs U4–U18 in Charleston, SC',
    label: 'Programs',
    description:
      'Compare BISA youth soccer programs in Metro Charleston, SC: Academy Development (U4–U14), Junior Academy (U8–U12), Elite (U15–U18), futsal and summer camps.',
    priority: 0.9,
    changeFrequency: 'monthly',
  },
  {
    path: '/programs/academy-development',
    title: 'Academy Development (U4–U14) Youth Soccer Program',
    label: 'Academy Development',
    description:
      'BISA Academy Development: youth soccer training for boys and girls U4–U14 in Ladson, Summerville & Charleston, SC. Technical mastery, tactics and a clear pathway to Elite.',
    priority: 0.9,
    changeFrequency: 'monthly',
  },
  {
    path: '/programs/junior-academy',
    title: 'Junior Academy (U8–U12) Competitive Soccer Program',
    label: 'Junior Academy',
    description:
      'BISA Junior Academy: an accelerated U8–U12 soccer track in Metro Charleston, SC with intensive training, small-sided games, video analysis and regional competition.',
    priority: 0.9,
    changeFrequency: 'monthly',
  },
  {
    path: '/programs/elite',
    title: 'Elite (U15–U18) College-Prep Soccer Program',
    label: 'Elite',
    description:
      'BISA Elite: U15–U18 soccer in Charleston, SC with professional-standard training, showcases, strength & conditioning and NCAA college recruitment support.',
    priority: 0.9,
    changeFrequency: 'monthly',
  },
  {
    path: '/programs/futsal',
    title: 'Youth Futsal Training in Charleston, SC',
    label: 'Futsal',
    description:
      'BISA Futsal: indoor youth futsal in Metro Charleston, SC that builds ball mastery, 1v1 skills and fast decision-making. Register on PlayMetrics.',
    priority: 0.85,
    changeFrequency: 'monthly',
  },
  {
    path: '/programs/summer-camps',
    title: 'Summer Soccer Camps in Ladson & Summerville, SC',
    label: 'Summer Camps',
    description:
      'BISA summer soccer camps in June & July at Sangaree Middle School, Ladson, SC: two trainings a week and an intramural tournament for every skill level.',
    priority: 0.9,
    changeFrequency: 'monthly',
  },
  {
    path: '/programs/girls-futsal',
    title: 'Girls Futsal in Ladson, SC · First Session Free',
    label: 'Girls Futsal',
    description:
      'Girls Futsal (Fútbol de las Niñas) at BISA: Fridays 6:30–7:30 PM at Sangaree Middle School, Ladson, SC, starting December 4, 2026. No experience needed, first session free.',
    priority: 0.9,
    changeFrequency: 'monthly',
  },
  {
    path: '/tryouts',
    title: 'Youth Soccer Tryouts & Registration',
    label: 'Tryouts',
    description:
      'BISA youth soccer tryouts in Metro Charleston, SC. Register on PlayMetrics to be evaluated for U8–U18 competitive teams.',
    priority: 0.85,
    changeFrequency: 'monthly',
  },
  {
    path: '/about',
    title: 'About Us – Bilu International Soccer Academy',
    label: 'About',
    description:
      'Meet BISA, the Bilu International Soccer Academy in Metro Charleston, SC: our mission, the Global Elite Methodology and how we develop players on and off the field.',
    priority: 0.7,
    changeFrequency: 'yearly',
  },
  {
    path: '/projeto-bilu',
    title: 'Projeto BILU – Soccer for Human Transformation',
    label: 'Projeto BILU',
    description:
      'Projeto BILU uses soccer as a tool for human transformation — the social project and story behind BISA – Bilu International Soccer Academy.',
    priority: 0.6,
    changeFrequency: 'yearly',
  },
  {
    path: '/sponsorship',
    title: 'Become a Sponsor',
    label: 'Sponsorship',
    description:
      'Sponsor BISA youth soccer in Metro Charleston, SC. See sponsorship packages and put your brand in front of local soccer families.',
    priority: 0.6,
    changeFrequency: 'monthly',
  },
  {
    path: '/resources',
    title: 'Parent & Player Hub',
    label: 'Resources',
    description:
      'Resources for BISA families: PlayMetrics registration and scheduling, SCYSA and US Club Soccer links, the zero tolerance policy and age group formation guide.',
    priority: 0.5,
    changeFrequency: 'monthly',
  },
  {
    path: '/contact',
    title: 'Contact BISA',
    label: 'Contact',
    description: `Contact BISA youth soccer academy in Metro Charleston, SC. Call ${BUSINESS.phone} or email ${BUSINESS.email}. Training at Sangaree Middle School, Ladson, SC.`,
    priority: 0.7,
    changeFrequency: 'yearly',
  },
  {
    path: '/coach-onboarding',
    title: 'Coach Onboarding',
    label: 'Coach Onboarding',
    description: 'Internal onboarding form for BISA coaches.',
    priority: 0,
    changeFrequency: 'yearly',
    noindex: true,
  },
];

export const getRoute = (path: string) => {
  const route = ROUTES.find((r) => r.path === path);
  if (!route) throw new Error(`Unknown route: ${path}`);
  return route;
};

export const INDEXABLE_ROUTES = ROUTES.filter((r) => !r.noindex);
