import type { Metadata } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import './globals.css';
import { BUSINESS, SITE_URL } from '@/lib/site';
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

// Site-wide defaults. Every page overrides title, description, canonical and Open Graph via pageMetadata() in lib/seo.ts.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'BISA | Youth Soccer Academy in Charleston & Summerville, SC',
    template: '%s | BISA Soccer Academy',
  },
  description: BUSINESS.description,
  applicationName: BUSINESS.fullName,
  authors: [{ name: BUSINESS.fullName, url: SITE_URL }],
  creator: BUSINESS.fullName,
  publisher: BUSINESS.fullName,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: BUSINESS.fullName,
    images: [{ url: BUSINESS.ogImage, alt: `${BUSINESS.fullName} logo` }],
  },
  twitter: { card: 'summary_large_image', images: [BUSINESS.ogImage] },
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
  category: 'Sports',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable} font-sans scroll-smooth`}>
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
