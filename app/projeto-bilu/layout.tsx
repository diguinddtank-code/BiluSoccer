import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, pageSchema } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('/projeto-bilu');

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={pageSchema('/projeto-bilu')} />
      {children}
    </>
  );
}
