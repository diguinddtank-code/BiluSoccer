import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | BISA',
  description: 'Learn about BISA (BISA) in Charleston, SC. Discover our Global Elite Methodology, elite coaching staff, and mission to develop youth soccer players.',
  openGraph: {
    title: 'About Us | BISA',
    description: 'Learn about BISA (BISA) in Charleston, SC. Discover our Global Elite Methodology and elite coaching staff.',
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
