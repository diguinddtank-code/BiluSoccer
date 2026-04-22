import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bisa-navy pt-20 pb-8 border-t border-white/5" itemScope itemType="https://schema.org/SportsClub">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Col 1: Brand & About */}
          <div className="flex flex-col">
            <Link href="/" className="relative w-56 h-28 mb-6 transition-transform hover:scale-105">
              <Image 
                src="https://bilusoccer.com/wp-content/uploads/2025/03/h2-3.png" 
                alt="BISA Logo" 
                fill 
                className="object-contain object-left" 
                unoptimized
                itemProp="logo"
              />
            </Link>
            <p className="text-bisa-white/70 font-medium tracking-wide text-sm mb-6" itemProp="description">
              Elite youth soccer development in Metro Charleston, SC. Developing champions on and off the field through Global Elite Methodology and professional coaching.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-bisa-white/50 hover:text-bisa-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-bisa-white/50 hover:text-bisa-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-bisa-white/50 hover:text-bisa-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-bisa-white font-black uppercase tracking-widest mb-6 text-sm border-b border-white/10 pb-2 inline-block w-max">Academy</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-bisa-white/70 hover:text-bisa-gold transition-colors font-medium text-sm uppercase tracking-wider flex items-center group">
                  <span className="w-2 h-2 bg-bisa-gold rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-bisa-white/70 hover:text-bisa-gold transition-colors font-medium text-sm uppercase tracking-wider flex items-center group">
                  <span className="w-2 h-2 bg-bisa-gold rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/tryouts" className="text-bisa-white/70 hover:text-bisa-gold transition-colors font-medium text-sm uppercase tracking-wider flex items-center group">
                  <span className="w-2 h-2 bg-bisa-gold rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Tryouts & Registration
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-bisa-white/70 hover:text-bisa-gold transition-colors font-medium text-sm uppercase tracking-wider flex items-center group">
                  <span className="w-2 h-2 bg-bisa-gold rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div className="flex flex-col">
            <h3 className="text-bisa-white font-black uppercase tracking-widest mb-6 text-sm border-b border-white/10 pb-2 inline-block w-max">Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/programs#juniors" className="text-bisa-white/70 hover:text-bisa-gold transition-colors font-medium text-sm uppercase tracking-wider flex items-center group">
                  <span className="w-2 h-2 bg-bisa-gold rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  BISA Juniors (U4-U7)
                </Link>
              </li>
              <li>
                <Link href="/programs#pre-academy" className="text-bisa-white/70 hover:text-bisa-gold transition-colors font-medium text-sm uppercase tracking-wider flex items-center group">
                  <span className="w-2 h-2 bg-bisa-gold rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Pre-Academy (U8-U12)
                </Link>
              </li>
              <li>
                <Link href="/programs#academy" className="text-bisa-white/70 hover:text-bisa-gold transition-colors font-medium text-sm uppercase tracking-wider flex items-center group">
                  <span className="w-2 h-2 bg-bisa-gold rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Academy (U13-U18)
                </Link>
              </li>
              <li>
                <Link href="/programs#camps" className="text-bisa-white/70 hover:text-bisa-gold transition-colors font-medium text-sm uppercase tracking-wider flex items-center group">
                  <span className="w-2 h-2 bg-bisa-gold rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Summer Camps
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Perfect NAP (Name, Address, Phone) */}
          <div className="flex flex-col">
            <h3 className="text-bisa-white font-black uppercase tracking-widest mb-6 text-sm border-b border-white/10 pb-2 inline-block w-max">Contact Info</h3>
            <address className="not-italic space-y-4 text-bisa-white/70 font-medium text-sm">
              <div className="flex items-start" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <MapPin className="w-5 h-5 text-bisa-gold mr-3 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-bisa-white font-bold mb-1" itemProp="name">BISA</span>
                  <span itemProp="streetAddress">Metro Charleston Area</span><br />
                  <span itemProp="addressLocality">Goose Creek</span>, <span itemProp="addressRegion">SC</span> <span itemProp="postalCode">29445</span>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-bisa-gold mr-3 shrink-0" />
                <a href="tel:+18433049414" className="hover:text-bisa-gold transition-colors" itemProp="telephone">
                  (843) 304-9414
                </a>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-bisa-gold mr-3 shrink-0" />
                <a href="mailto:info@bilusoccer.com" className="hover:text-bisa-gold transition-colors" itemProp="email">
                  info@bilusoccer.com
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-bisa-white/50 text-xs font-medium uppercase tracking-wider text-center md:text-left">
            © {new Date().getFullYear()} BISA. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-xs font-medium uppercase tracking-wider text-bisa-white/50">
            <Link href="/privacy" className="hover:text-bisa-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-bisa-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
