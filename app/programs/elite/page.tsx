import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Trophy } from 'lucide-react';

export const metadata = {
  title: 'Elite Program | BILU International Soccer Academy',
  description: 'Top-tier development for elite athletes. The pathway to professionalism and college scholarships.',
};

export default function ElitePage() {
  return (
    <main className="min-h-screen bg-bisa-navy">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1508344928928-7165b67de128?q=80&w=2070&auto=format&fit=crop"
            alt="Elite Athletes on the field"
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-bisa-navy-dark/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-bisa-navy via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center mt-20">
          <span className="text-bisa-gold font-bold uppercase tracking-widest text-sm sm:text-base mb-4 block">
            U15–U18
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-bisa-white uppercase tracking-tighter mb-6">
            Elite Program
          </h1>
          <p className="text-lg sm:text-xl text-bisa-white/80 max-w-2xl mx-auto font-medium">
            The pinnacle of development at BILU Academy. Preparing the best talents for college soccer and the professional level.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden border-2 border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1431324155629-1a6d0a11f479?q=80&w=2070&auto=format&fit=crop"
                  alt="Elite Competition"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -top-8 -right-8 bg-bisa-gold p-8 shadow-2xl hidden md:block">
                <Trophy className="w-12 h-12 text-bisa-navy mb-2" />
                <p className="text-bisa-navy font-black uppercase tracking-widest text-sm">Maximum Level</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-black text-bisa-white uppercase tracking-tight mb-6">
                The Pathway to <span className="text-bisa-gold">Excellence</span>
              </h2>
              <p className="text-bisa-white/70 text-lg mb-8 leading-relaxed">
                The Elite Program is the final stage of development at BILU Academy. Reserved for the most dedicated and talented athletes, this program focuses on exposure, showcase tournaments, and rigorous preparation for the challenges of college soccer (NCAA) and the professional level.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/5 p-6 border-l-2 border-bisa-gold">
                  <h3 className="text-xl font-bold text-bisa-white mb-2 uppercase tracking-wide">Showcases</h3>
                  <p className="text-bisa-white/60 text-sm">Participation in the country&apos;s top showcase tournaments for college recruiting.</p>
                </div>
                <div className="bg-white/5 p-6 border-l-2 border-bisa-gold">
                  <h3 className="text-xl font-bold text-bisa-white mb-2 uppercase tracking-wide">Recruiting</h3>
                  <p className="text-bisa-white/60 text-sm">Full support in creating highlight videos and contacting college coaches.</p>
                </div>
                <div className="bg-white/5 p-6 border-l-2 border-bisa-gold">
                  <h3 className="text-xl font-bold text-bisa-white mb-2 uppercase tracking-wide">Performance</h3>
                  <p className="text-bisa-white/60 text-sm">Professional-level nutritional, physiological, and psychological support.</p>
                </div>
                <div className="bg-white/5 p-6 border-l-2 border-bisa-gold">
                  <h3 className="text-xl font-bold text-bisa-white mb-2 uppercase tracking-wide">Competition</h3>
                  <p className="text-bisa-white/60 text-sm">Facing off against the best academies and clubs in the region and the country.</p>
                </div>
              </div>

              <Link 
                href="https://playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS05OTEtMTc0NzQzMzA1N3xkS2RTeERnQ0d4TlNqcEVlWnI3M1EzRnRQeThEd28xSGx4WFdVWkhYTWVFPQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-bisa-gold text-bisa-navy px-8 py-4 rounded font-black uppercase tracking-widest hover:bg-white transition-all hover:scale-105 active:scale-95"
              >
                Schedule Evaluation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
