import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soccer Programs | BISA',
  description: 'Explore our elite youth soccer programs in Charleston, SC. From BISA Juniors (U4-U7) to Academy (U13-U18), we offer professional training for all ages.',
  openGraph: {
    title: 'Soccer Programs | BISA',
    description: 'Explore our elite youth soccer programs in Charleston, SC. From BISA Juniors (U4-U7) to Academy (U13-U18).',
    url: 'https://bilusoccer.com/programs',
  },
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
