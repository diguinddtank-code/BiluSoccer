import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, pageSchema } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('/about');

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={pageSchema('/about', { type: 'AboutPage' })} />
      {children}
    </>
  );
}
