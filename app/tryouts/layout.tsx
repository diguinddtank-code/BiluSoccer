import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tryouts & Registration | BILU International Soccer Academy',
  description: 'Register for upcoming soccer tryouts at BILU International Soccer Academy in Charleston, SC. Secure your spot for U8-U18 competitive teams.',
  openGraph: {
    title: 'Tryouts & Registration | BILU International Soccer Academy',
    description: 'Register for upcoming soccer tryouts at BILU International Soccer Academy in Charleston, SC.',
    url: 'https://bilusoccer.com/tryouts',
  },
};

export default function TryoutsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
