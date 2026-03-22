import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';

export const metadata = {
  title: 'Futsal | BILU International Soccer Academy',
  description: 'Small court, big skills. The secret of Brazilian soccer to develop ball control and quick thinking.',
};

export default function FutsalPage() {
  return (
    <main className="min-h-screen bg-bisa-navy">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=2070&auto=format&fit=crop"
            alt="Futsal Game"
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
            All Ages
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-bisa-white uppercase tracking-tighter mb-6">
            Futsal
          </h1>
          <p className="text-lg sm:text-xl text-bisa-white/80 max-w-2xl mx-auto font-medium">
            The secret of Brazilian soccer. Smaller court, heavier ball, quick thinking, and absolute control.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-bisa-white uppercase tracking-tight mb-6">
                The Foundation of <span className="text-bisa-gold">Brazilian Soccer</span>
              </h2>
              <p className="text-bisa-white/70 text-lg mb-8 leading-relaxed">
                Neymar, Ronaldinho, Pelé... they all started in futsal. The reduced space and heavier ball force the player to think faster, use both feet, and master ball control in tight spaces. At BILU Academy, futsal is an essential development tool.
              </p>
              
              <ul className="space-y-6 mb-10">
                <li className="flex items-start gap-4">
                  <div className="bg-bisa-gold/10 p-3 rounded-full shrink-0 mt-1">
                    <Zap className="w-6 h-6 text-bisa-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-bisa-white uppercase tracking-wide mb-1">Decision Making</h3>
                    <p className="text-bisa-white/60 text-sm">Less time and space demand quick thinking and constant tactical intelligence.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-bisa-gold/10 p-3 rounded-full shrink-0 mt-1">
                    <Zap className="w-6 h-6 text-bisa-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-bisa-white uppercase tracking-wide mb-1">Ball Control</h3>
                    <p className="text-bisa-white/60 text-sm">The futsal ball (heavier) improves receiving, passing, and short dribbling.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-bisa-gold/10 p-3 rounded-full shrink-0 mt-1">
                    <Zap className="w-6 h-6 text-bisa-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-bisa-white uppercase tracking-wide mb-1">More Touches on the Ball</h3>
                    <p className="text-bisa-white/60 text-sm">With only 5 players on each side, everyone actively participates in the game all the time.</p>
                  </div>
                </li>
              </ul>

              <Link 
                href="https://playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS05OTEtMTc0NzQzMzA1N3xkS2RTeERnQ0d4TlNqcEVlWnI3M1EzRnRQeThEd28xSGx4WFdVWkhYTWVFPQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-bisa-gold text-bisa-navy px-8 py-4 rounded font-black uppercase tracking-widest hover:bg-white transition-all hover:scale-105 active:scale-95"
              >
                Register for Futsal <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden border-2 border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2029&auto=format&fit=crop"
                  alt="Futsal Court"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
