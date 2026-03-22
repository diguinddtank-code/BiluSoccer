import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'High Performance Program | BILU International Soccer Academy',
  description: 'High-intensity training for performance-focused athletes, advanced tactics, and elite physical preparation.',
};

export default function HighPerformancePage() {
  return (
    <main className="min-h-screen bg-bisa-navy">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1518605368461-1e1252220a77?q=80&w=2070&auto=format&fit=crop"
            alt="High Performance Athletes in training"
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
            U13–U18
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-bisa-white uppercase tracking-tighter mb-6">
            High Performance
          </h1>
          <p className="text-lg sm:text-xl text-bisa-white/80 max-w-2xl mx-auto font-medium">
            High-intensity training for performance-focused athletes, advanced tactics, and elite physical preparation.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-bisa-white uppercase tracking-tight mb-6">
                Elevate Your Game to the <span className="text-bisa-gold">Next Level</span>
              </h2>
              <p className="text-bisa-white/70 text-lg mb-8 leading-relaxed">
                The High Performance Program at BILU Academy is designed for players who already have a solid foundation and seek to refine their technical, tactical, physical, and mental skills. Our Brazilian methodology combined with the intensity of modern soccer prepares athletes for high-level competitions.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  'Advanced tactical training and game reading',
                  'Soccer-specific physical preparation',
                  'Video analysis and individualized feedback',
                  'Focus on quick decision-making under pressure',
                  'Mental and competitive preparation'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-bisa-gold shrink-0 mt-0.5" />
                    <span className="text-bisa-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="https://playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS05OTEtMTc0NzQzMzA1N3xkS2RTeERnQ0d4TlNqcEVlWnI3M1EzRnRQeThEd28xSGx4WFdVWkhYTWVFPQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-bisa-gold text-bisa-navy px-8 py-4 rounded font-black uppercase tracking-widest hover:bg-white transition-all hover:scale-105 active:scale-95"
              >
                Register Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden border-2 border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1574629810360-7efbb1925846?q=80&w=1964&auto=format&fit=crop"
                  alt="Tactical Training"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-bisa-navy-dark p-8 border-l-4 border-bisa-gold shadow-2xl hidden md:block">
                <p className="text-4xl font-black text-bisa-white mb-1">4x</p>
                <p className="text-bisa-white/60 font-bold uppercase tracking-widest text-sm">Practices per Week</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
