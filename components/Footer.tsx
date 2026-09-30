'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';
import { BUSINESS, PROGRAMS, fullAddress } from '@/lib/site';

const linkClass = 'text-bisa-white/70 hover:text-bisa-gold transition-colors font-medium text-sm uppercase tracking-wider flex items-center group';
const headingClass = 'text-bisa-white font-black uppercase tracking-widest mb-6 text-sm border-b border-white/10 pb-2 inline-block w-max';

const academyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/programs', label: 'All Programs' },
  { href: '/tryouts', label: 'Tryouts & Registration' },
  { href: '/projeto-bilu', label: 'Projeto BILU' },
  { href: '/sponsorship', label: 'Sponsorship' },
  { href: '/resources', label: 'Parent & Player Hub' },
  { href: '/contact', label: 'Contact Us' },
];

function Dot() {
  return <span className="w-2 h-2 bg-bisa-gold rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>;
}

export default function Footer() {
  const pathname = usePathname();

  if (pathname === '/sponsorship') {
    return null;
  }

  return (
    <footer className="bg-bisa-navy pt-20 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Col 1: Brand & About */}
          <div className="flex flex-col">
            <Link href="/" className="relative w-56 h-28 mb-6 transition-transform hover:scale-105" aria-label={`${BUSINESS.fullName} home`}>
              <Image
                src={BUSINESS.logo}
                alt={`${BUSINESS.fullName} logo`}
                fill
                className="object-contain object-left"
                unoptimized
              />
            </Link>
            <p className="text-bisa-white/70 font-medium tracking-wide text-sm mb-6">
              Elite youth soccer development in Metro Charleston, SC. Developing champions on and off the field through Global Elite Methodology and professional coaching.
            </p>
            <div className="flex flex-col space-y-3">
              <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-bisa-white/50 hover:text-bisa-gold transition-colors text-sm font-medium" aria-label="BISA on Instagram">
                <Instagram className="w-5 h-5" /> @bilu_soccer
              </a>
              <a href={BUSINESS.social.projetoBiluInstagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-bisa-white/50 hover:text-bisa-gold transition-colors text-sm font-medium" aria-label="Projeto BILU on Instagram">
                <Instagram className="w-5 h-5" /> @projetobilu
              </a>
              <a href={BUSINESS.social.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-bisa-white/50 hover:text-bisa-gold transition-colors text-sm font-medium" aria-label="BISA on Facebook">
                <Facebook className="w-5 h-5" /> Bilu Soccer
              </a>
              <a href={BUSINESS.social.youtube} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-bisa-white/50 hover:text-bisa-gold transition-colors text-sm font-medium" aria-label="BISA on YouTube">
                <Youtube className="w-5 h-5" /> @bilusoccer
              </a>
            </div>
          </div>

          {/* Col 2: Academy */}
          <div className="flex flex-col">
            <h3 className={headingClass}>Academy</h3>
            <ul className="space-y-3">
              {academyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}><Dot />{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div className="flex flex-col">
            <h3 className={headingClass}>Programs</h3>
            <ul className="space-y-3">
              {PROGRAMS.map((p) => (
                <li key={p.slug}>
                  <Link href={p.path} className={linkClass}><Dot />{p.name} ({p.ages})</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: NAP (Name, Address, Phone) — values come from lib/site.ts */}
          <div className="flex flex-col">
            <h3 className={headingClass}>Contact Info</h3>
            <address className="not-italic space-y-4 text-bisa-white/70 font-medium text-sm">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-bisa-gold mr-3 shrink-0 mt-0.5" />
                <a href={BUSINESS.venue.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-bisa-gold transition-colors">
                  <span className="block text-bisa-white font-bold mb-1">{BUSINESS.fullName}</span>
                  <span className="block">{BUSINESS.venue.name}</span>
                  {fullAddress}
                </a>
              </div>

              <div className="flex items-center">
                <Phone className="w-5 h-5 text-bisa-gold mr-3 shrink-0" />
                <a href={`tel:${BUSINESS.phoneE164}`} className="hover:text-bisa-gold transition-colors">
                  {BUSINESS.phone}
                </a>
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 text-bisa-gold mr-3 shrink-0" />
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-bisa-gold transition-colors">
                  {BUSINESS.email}
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-bisa-white/50 text-xs font-medium uppercase tracking-wider text-center md:text-left">
            © {new Date().getFullYear()} {BUSINESS.fullName}. All Rights Reserved.
          </p>
          <p className="text-bisa-white/50 text-xs font-medium uppercase tracking-wider text-center md:text-right">
            Youth soccer in Ladson, Summerville, Goose Creek &amp; Charleston, SC
          </p>
        </div>
      </div>
    </footer>
  );
}
