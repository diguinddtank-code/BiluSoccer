import type { Metadata } from 'next';
import { Anton, Montserrat } from 'next/font/google';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, pageSchema } from '@/lib/seo';

// Girls Futsal / Fútbol de las Niñas: its own type (Anton for headlines,
// Montserrat for text), matching the Las Niñas campaign.
const anton = Anton({ weight: '400', subsets: ['latin'], variable: '--font-anton' });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '600', '700', '800'], variable: '--font-mont' });

const PATH = '/programs/girls-futsal';

export const metadata: Metadata = pageMetadata(PATH);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${anton.variable} ${montserrat.variable}`}>
      <JsonLd data={pageSchema(PATH)} />
      {children}
    </div>
  );
}
