import type { Metadata } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import SmoothScrolling from '@/components/SmoothScrolling';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bilusoccer.com'),
  title: {
    default: 'BISA | Premier Youth Soccer Academy in Charleston, SC',
    template: '%s | BISA Soccer Academy',
  },
  description: 'Rated the premier youth soccer academy and club in Charleston & Summerville, SC. BISA provides elite player development, Global Elite Methodology, and competitive programs for U4-U18 boys and girls.',
  keywords: [
    'premier soccer academy Charleston SC',
    'elite youth soccer SC',
    'best soccer club in Summerville SC',
    'bisa soccer academy',
    'bisa youth soccer',
    'Global Elite Methodology soccer',
    'Charleston competitive soccer',
    'Goose Creek soccer development',
    'youth soccer tryouts SC',
    'summer soccer camps Charleston',
    'elite soccer training South Carolina'
  ],
  authors: [{ name: 'BISA Soccer Academy', url: 'https://www.bilusoccer.com' }],
  creator: 'BISA Soccer Academy',
  publisher: 'BISA Soccer Academy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'es-ES': '/es-ES',
      'pt-BR': '/pt-BR',
    },
  },
  openGraph: {
    title: 'BISA | Premier Youth Soccer Academy in Charleston, SC',
    description: 'Rated the premier youth soccer development program in Charleston & Summerville, SC. Expert professional coaching and elite Global Elite Methodology for U4-U18 boys and girls.',
    url: 'https://www.bilusoccer.com',
    siteName: 'BISA Soccer Academy',
    images: [
      {
        url: 'https://i.imgur.com/mHzuZgK.png',
        width: 1200,
        height: 630,
        alt: 'BISA Soccer Academy - Premier Youth Soccer Club in Charleston, SC',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BISA | Premier Youth Soccer Academy in SC',
    description: 'Elite youth soccer development in Metro Charleston, SC. Join the best soccer academy.',
    images: ['https://i.imgur.com/mHzuZgK.png'],
    creator: '@bilusoccer',
    site: '@bilusoccer',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Sports',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': ['SportsClub', 'LocalBusiness'],
      name: 'BISA',
      alternateName: 'BISA',
      url: 'https://www.bilusoccer.com',
      logo: 'https://i.imgur.com/mHzuZgK.png',
      image: 'https://i.imgur.com/mHzuZgK.png',
      description: 'Recognized as the premier youth soccer academy in Charleston and Summerville, SC. BISA (BISA) provides elite Global Elite Methodology training for U4-U18 boys and girls.',
      telephone: '+1-843-304-9414',
      email: 'amoreira@bilusoccer.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Summerville / Metro Charleston Area',
        addressLocality: 'Summerville',
        addressRegion: 'SC',
        postalCode: '29483',
        addressCountry: 'US'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 33.0185,
        longitude: -80.1756
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Charleston',
          sameAs: 'https://en.wikipedia.org/wiki/Charleston,_South_Carolina'
        },
        {
          '@type': 'City',
          name: 'Summerville',
          sameAs: 'https://en.wikipedia.org/wiki/Summerville,_South_Carolina'
        },
        {
          '@type': 'City',
          name: 'Goose Creek',
          sameAs: 'https://en.wikipedia.org/wiki/Goose_Creek,_South_Carolina'
        },
        {
          '@type': 'City',
          name: 'Mount Pleasant',
          sameAs: 'https://en.wikipedia.org/wiki/Mount_Pleasant,_South_Carolina'
        }
      ],
      priceRange: '$$',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '20:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '08:00',
          closes: '14:00'
        }
      ],
      sameAs: [
        'https://www.facebook.com/bilusoccer',
        'https://www.instagram.com/bilusoccer',
        'https://www.youtube.com/@bilusoccer'
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '153',
        bestRating: '5',
        worstRating: '1'
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best soccer academy in Charleston, SC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BISA is widely considered one of the best elite soccer academies in the Charleston, SC area, serving Summerville, Goose Creek, and Mt. Pleasant. We specialize in Global Elite Methodology, providing professional coaching for U4-U18 youth players."
          }
        },
        {
          "@type": "Question",
          name: "Where are the best summer soccer camps in Charleston?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BISA offers top-tier summer soccer camps in the Charleston area. Our immersive camps run during June and July, featuring a World Cup style format, intense technical training, and an active global community."
          }
        },
        {
          "@type": "Question",
          name: "At what age can kids start playing soccer at BISA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our Future Elite program starts at U4, providing a fun and highly engaging introduction to soccer. Progressive development continues through our specialized Academy and Elite programs up to U18."
          }
        }
      ]
    }
  ];

  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable} font-sans scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bisa-navy-dark text-bisa-white antialiased flex flex-col min-h-screen" suppressHydrationWarning>
        <SmoothScrolling>
          <LanguageProvider>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </SmoothScrolling>
      </body>
    </html>
  );
}
