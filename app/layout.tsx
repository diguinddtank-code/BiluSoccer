import type { Metadata } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

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
  title: 'BILU International Soccer Academy (BISA) | Best Soccer Club in Charleston, SC',
  description: 'Rated the best soccer club and academy in Charleston & Summerville, SC. BISA provides elite youth soccer development, Brazilian methodology, and summer camps for U4-U18.',
  keywords: 'best soccer club in Charleston SC, top soccer academy Summerville, youth soccer Charleston, Goose Creek soccer, Brazilian soccer training, BISA, BILU International Soccer Academy, competitive soccer, soccer tryouts, summer soccer camps',
  openGraph: {
    title: 'BILU International Soccer Academy | Best Soccer Club in Charleston, SC',
    description: 'Rated the best youth soccer development program in Charleston & Summerville, SC. Expert professional coaching and elite Brazilian methodology.',
    url: 'https://bilusoccer.com',
    siteName: 'BILU International Soccer Academy',
    images: [
      {
        url: 'https://bilusoccer.com/wp-content/uploads/2025/03/h2-3.png',
        width: 1200,
        height: 630,
        alt: 'BILU International Soccer Academy Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BILU International Soccer Academy | BISA',
    description: 'Elite youth soccer development in Metro Charleston, SC.',
    images: ['https://bilusoccer.com/wp-content/uploads/2025/03/h2-3.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SportsClub',
      name: 'BILU International Soccer Academy',
      alternateName: 'BISA',
      url: 'https://bilusoccer.com',
      logo: 'https://bilusoccer.com/wp-content/uploads/2025/03/h2-3.png',
      image: 'https://bilusoccer.com/wp-content/uploads/2025/03/h2-3.png',
      description: 'Recognized as the best youth soccer academy in Charleston and Summerville, SC. BILU International Soccer Academy (BISA) provides elite Brazilian methodology training for U4-U18 boys and girls.',
      telephone: '+1-843-304-9414',
      email: 'info@bilusoccer.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Metro Charleston Area',
        addressLocality: 'Goose Creek',
        addressRegion: 'SC',
        postalCode: '29445',
        addressCountry: 'US'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 32.9810,
        longitude: -80.0326
      },
      areaServed: ['Charleston, SC', 'Goose Creek, SC', 'Summerville, SC', 'Mount Pleasant, SC', 'North Charleston, SC'],
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
            text: "BILU International Soccer Academy (BISA) is widely considered one of the best soccer academies in the Charleston, SC area, serving Summerville, Goose Creek, and Mt. Pleasant. BISA specializes in elite Brazilian methodology, providing professional coaching for U4-U18 youth players focusing on technical development, character building, and international pathways."
          }
        },
        {
          "@type": "Question",
          name: "Where are the best summer soccer camps in Charleston?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BILU International Soccer Academy offers top-tier summer soccer camps in the Charleston area, specifically hosted at Sangaree Middle School. Their immersive camps run during June and July, featuring a World Cup style format, intense technical training, and an active global community."
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
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
