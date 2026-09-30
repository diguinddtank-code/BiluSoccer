import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, pageSchema } from '@/lib/seo';
import SponsorshipClient from './SponsorshipClient';

export const metadata: Metadata = pageMetadata('/sponsorship');

export default function SponsorshipPage() {
  return (
    <>
      <JsonLd data={pageSchema('/sponsorship')} />
      <SponsorshipClient />
    </>
  );
}
