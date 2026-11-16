import type { Metadata } from 'next';
import { BUSINESS, PROGRAMS, SITE_URL, absoluteUrl, getRoute, type Program } from '@/lib/site';
import type { Faq } from '@/lib/faqs';

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/** Title, description, canonical, Open Graph, Twitter and robots for a route listed in ROUTES. */
export function pageMetadata(path: string): Metadata {
  const route = getRoute(path);
  const url = absoluteUrl(path);
  // The share card is app/opengraph-image.tsx (1200×630). Pages that set their
  // own openGraph lose the inherited file image, so it is named here too.
  const image = { url: '/opengraph-image', width: 1200, height: 630, alt: `${BUSINESS.fullName} · ${BUSINESS.tagline}` };
  return {
    // The home title already carries the brand, so skip the "%s | BISA Soccer Academy" template there.
    title: path === '/' ? { absolute: route.title } : route.title,
    description: route.description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: BUSINESS.fullName,
      url,
      title: route.title,
      description: route.description,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: route.title,
      description: route.description,
      images: [image.url],
    },
    ...(route.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

type Node = Record<string, unknown>;

function organizationNode(): Node {
  const v = BUSINESS.venue;
  return {
    '@type': ['SportsClub', 'SportsOrganization'],
    '@id': ORG_ID,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    alternateName: BUSINESS.alternateNames,
    description: BUSINESS.description,
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: BUSINESS.logo },
    image: BUSINESS.logo,
    sport: 'Soccer',
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: v.streetAddress,
      addressLocality: v.addressLocality,
      addressRegion: v.addressRegion,
      postalCode: v.postalCode,
      addressCountry: v.addressCountry,
    },
    geo: { '@type': 'GeoCoordinates', latitude: v.latitude, longitude: v.longitude },
    hasMap: v.mapsUrl,
    location: {
      '@type': 'Place',
      name: v.name,
      address: `${v.streetAddress}, ${v.addressLocality}, ${v.addressRegion} ${v.postalCode}`,
    },
    areaServed: BUSINESS.areaServed.map((c) => ({ '@type': 'City', name: `${c.name}, SC`, sameAs: c.wiki })),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: BUSINESS.phoneE164,
        email: BUSINESS.email,
        areaServed: 'US-SC',
        availableLanguage: ['English', 'Portuguese', 'Spanish'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'sponsorship',
        email: BUSINESS.sponsorshipEmail,
        areaServed: 'US-SC',
      },
    ],
    sameAs: [BUSINESS.social.instagram, BUSINESS.social.facebook, BUSINESS.social.youtube, BUSINESS.social.projetoBiluInstagram],
    nonprofitStatus: 'Nonprofit501c3',
    taxID: BUSINESS.taxId,
    knowsAbout: ['Youth soccer', 'Futsal', 'Soccer training', 'Global Elite Methodology', 'College soccer recruitment'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Youth soccer programs',
      itemListElement: PROGRAMS.map((p) => ({
        '@type': 'Offer',
        itemOffered: { '@id': `${absoluteUrl(p.path)}#program` },
      })),
    },
  };
}

function websiteNode(): Node {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: BUSINESS.fullName,
    alternateName: BUSINESS.alternateNames,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-US',
  };
}

function breadcrumbNode(path: string): Node {
  const crumbs = ['/'];
  const parts = path.split('/').filter(Boolean);
  parts.forEach((_, i) => crumbs.push('/' + parts.slice(0, i + 1).join('/')));
  return {
    '@type': 'BreadcrumbList',
    '@id': `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: crumbs.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: getRoute(p).label,
      item: absoluteUrl(p),
    })),
  };
}

function programNode(program: Program): Node {
  return {
    '@type': 'Service',
    '@id': `${absoluteUrl(program.path)}#program`,
    name: `${program.name} (${program.ages})`,
    serviceType: 'Youth soccer training',
    description: program.summary,
    url: absoluteUrl(program.path),
    provider: { '@id': ORG_ID },
    areaServed: BUSINESS.areaServed.map((c) => ({ '@type': 'City', name: `${c.name}, SC` })),
    audience: { '@type': 'PeopleAudience', audienceType: `Youth soccer players ${program.ages}` },
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: BUSINESS.registerUrl },
  };
}

function faqNode(path: string, faqs: Faq[]): Node {
  return {
    '@type': 'FAQPage',
    '@id': `${absoluteUrl(path)}#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

type PageType = 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';

/** One JSON-LD @graph per page: organization, website, the page itself, breadcrumbs and page-specific nodes. */
export function pageSchema(
  path: string,
  options: { type?: PageType; program?: Program; faqs?: Faq[]; programList?: boolean } = {},
) {
  const route = getRoute(path);
  const url = absoluteUrl(path);
  const graph: Node[] = [organizationNode(), websiteNode()];

  const webPage: Node = {
    '@type': options.type ?? 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: route.title,
    description: route.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    inLanguage: 'en-US',
    primaryImageOfPage: { '@type': 'ImageObject', url: BUSINESS.ogImage },
  };
  if (path !== '/') {
    webPage.breadcrumb = { '@id': `${url}#breadcrumb` };
    graph.push(breadcrumbNode(path));
  }
  if (options.program) {
    webPage.mainEntity = { '@id': `${url}#program` };
    graph.push(programNode(options.program));
  }
  if (options.programList) {
    graph.push({
      '@type': 'ItemList',
      '@id': `${url}#programs`,
      name: 'BISA youth soccer programs',
      itemListElement: PROGRAMS.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: absoluteUrl(p.path),
        name: p.name,
      })),
    });
    // Program nodes are referenced by the organization's OfferCatalog.
    PROGRAMS.forEach((p) => graph.push(programNode(p)));
  }
  if (options.faqs?.length) graph.push(faqNode(path, options.faqs));
  graph.push(webPage);

  return { '@context': 'https://schema.org', '@graph': graph };
}
