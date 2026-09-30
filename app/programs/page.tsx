import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, pageSchema } from '@/lib/seo';
import ProgramsClient from './ProgramsClient';

export const metadata: Metadata = pageMetadata('/programs');

export default function ProgramsPage() {
  return (
    <>
      <JsonLd data={pageSchema('/programs', { type: 'CollectionPage', programList: true })} />
      <ProgramsClient />
    </>
  );
}
