import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sun, Users, Activity, Globe } from 'lucide-react';

export const metadata = {
  title: 'Summer Camps | BILU International Soccer Academy',
  description: 'A full summer of soccer, development, and fun. Intensive training, new friendships, and cultural immersion.',
};

export default function SummerCampsPage() {
  return (
    <main className="min-h-screen bg-bisa-navy">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2069&auto=format&fit=crop"
            alt="Kids playing soccer in the summer"
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-bisa-navy-dark/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-bisa-navy via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center mt-20">
          <span className="text-bisa-gold font-bold uppercase tracking-widest text-sm sm:text-base mb-4 block">
            Seasonal Program
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-bisa-white uppercase tracking-tighter mb-6">
            Summer Camps
          </h1>
          <p className="text-lg sm:text-xl text-bisa-white/80 max-w-2xl mx-auto font-medium">
            Turn your summer vacation into an unforgettable experience of soccer, fun, friendships, and cultural immersion.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-bisa-white uppercase tracking-tight mb-6">
              The Best Summer of <span className="text-bisa-gold">Your Life</span>
            </h2>
            <p className="text-bisa-white/70 text-lg leading-relaxed">
              Our Summer Camps combine high-level technical training from BILU Academy with recreational activities, language learning, and lots of fun. It's the perfect opportunity to improve your soccer skills while making friends from all over the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/5 p-8 border-t-4 border-bisa-gold text-center hover:bg-white/10 transition-colors">
              <Activity className="w-12 h-12 text-bisa-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-bisa-white uppercase tracking-wide mb-2">Technical Training</h3>
              <p className="text-bisa-white/60 text-sm">Focus on fundamentals, ball control, and finishing every day.</p>
            </div>
            <div className="bg-white/5 p-8 border-t-4 border-bisa-gold text-center hover:bg-white/10 transition-colors">
              <Users className="w-12 h-12 text-bisa-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-bisa-white uppercase tracking-wide mb-2">Mini-Tournaments</h3>
              <p className="text-bisa-white/60 text-sm">Daily competitions, internal World Cup, and lots of games.</p>
            </div>
            <div className="bg-white/5 p-8 border-t-4 border-bisa-gold text-center hover:bg-white/10 transition-colors">
              <Globe className="w-12 h-12 text-bisa-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-bisa-white uppercase tracking-wide mb-2">Cultural Immersion</h3>
              <p className="text-bisa-white/60 text-sm">Integration with languages (Spanish and Portuguese) and global culture.</p>
            </div>
            <div className="bg-white/5 p-8 border-t-4 border-bisa-gold text-center hover:bg-white/10 transition-colors">
              <Sun className="w-12 h-12 text-bisa-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-bisa-white uppercase tracking-wide mb-2">Fun</h3>
              <p className="text-bisa-white/60 text-sm">Recreational activities, prizes, challenges, and lots of positive energy.</p>
            </div>
          </div>

          <div className="bg-bisa-navy-dark p-8 md:p-12 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-black text-bisa-white uppercase tracking-wide mb-2">Limited Spots!</h3>
              <p className="text-bisa-white/70">Secure your spot in the next Summer Camp. Registration opens in the spring.</p>
            </div>
            <Link 
              href="https://playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS05OTEtMTc0NzQzMzA1N3xkS2RTeERnQ0d4TlNqcEVlWnI3M1EzRnRQeThEd28xSGx4WFdVWkhYTWVFPQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center bg-bisa-gold text-bisa-navy px-8 py-4 rounded font-black uppercase tracking-widest hover:bg-white transition-all hover:scale-105 active:scale-95"
            >
              Register Interest <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
