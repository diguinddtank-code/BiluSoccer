import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import RelatedPrograms from '@/components/RelatedPrograms';
import { PROGRAM_FAQS } from '@/lib/faqs';
import { pageMetadata, pageSchema } from '@/lib/seo';
import { getProgram } from '@/lib/site';

const program = getProgram('junior-academy');

export const metadata: Metadata = pageMetadata(program.path);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={pageSchema(program.path, { program, faqs: PROGRAM_FAQS[program.slug] })} />
      {children}
      <RelatedPrograms current={program.slug} />
    </>
  );
}
