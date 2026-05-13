import { Metadata } from 'next';
import SponsorshipClient from './SponsorshipClient';

export const metadata: Metadata = {
  title: "Become a Sponsor | BISA – Bilu International Soccer Academy"
};

export default function SponsorshipPage() {
  return <SponsorshipClient />;
}

