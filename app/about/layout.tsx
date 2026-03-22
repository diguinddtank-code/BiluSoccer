import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | BILU International Soccer Academy',
  description: 'Learn about BILU International Soccer Academy (BISA) in Charleston, SC. Discover our Brazilian methodology, elite coaching staff, and mission to develop youth soccer players.',
  openGraph: {
    title: 'About Us | BILU International Soccer Academy',
    description: 'Learn about BILU International Soccer Academy (BISA) in Charleston, SC. Discover our Brazilian methodology and elite coaching staff.',
    url: 'https://bilusoccer.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
