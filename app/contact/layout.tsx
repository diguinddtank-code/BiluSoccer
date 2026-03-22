import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | BILU International Soccer Academy',
  description: 'Contact BILU International Soccer Academy in Charleston, SC. Get in touch for program inquiries, tryout information, and academy details.',
  openGraph: {
    title: 'Contact Us | BILU International Soccer Academy',
    description: 'Contact BILU International Soccer Academy in Charleston, SC. Get in touch for program inquiries and tryout information.',
    url: 'https://bilusoccer.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
