import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'BILU International Soccer Academy | BISA | Charleston, SC',
  description: 'Elite youth soccer development in Metro Charleston, SC. BISA offers professional coaching, Brazilian methodology, and competitive programs for U4-U18.',
  keywords: 'soccer academy, youth soccer, Charleston SC, Goose Creek soccer, soccer club, Brazilian soccer training, BISA, BILU International Soccer Academy, competitive soccer',
  openGraph: {
    title: 'BILU International Soccer Academy | BISA',
    description: 'Elite youth soccer development in Metro Charleston, SC. Professional coaching and competitive programs for U4-U18.',
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SportsClub',
    name: 'BILU International Soccer Academy',
    alternateName: 'BISA',
    url: 'https://bilusoccer.com',
    logo: 'https://bilusoccer.com/wp-content/uploads/2025/03/h2-3.png',
    image: 'https://bilusoccer.com/wp-content/uploads/2025/03/h2-3.png',
    description: 'Elite youth soccer development in Metro Charleston, SC. Professional coaching and competitive programs for U4-U18.',
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
    areaServed: ['Charleston, SC', 'Goose Creek, SC', 'Summerville, SC', 'Mount Pleasant, SC'],
    sameAs: [
      'https://www.facebook.com/bilusoccer',
      'https://www.instagram.com/bilusoccer'
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} font-sans scroll-smooth`}>
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
