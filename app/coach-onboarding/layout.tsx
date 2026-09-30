import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

// Internal form: kept out of search results and the sitemap.
export const metadata: Metadata = pageMetadata('/coach-onboarding');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
