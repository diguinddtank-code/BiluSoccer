'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

export default function FinalCTA() {
  return (
    <section className="relative py-32 bg-bisa-navy-dark border-t-8 border-bisa-gold text-center overflow-hidden">
      {/* Dramatic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Soccer Stadium Lights" 
          fill 
          className="object-cover object-center opacity-30 mix-blend-luminosity"
          unoptimized
        />
        {/* Gradient Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-bisa-navy-dark via-bisa-navy-dark/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-bisa-navy-dark via-transparent to-bisa-navy-dark" />
        <div className="absolute inset-0 bg-bisa-navy-dark/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-black text-bisa-white uppercase tracking-tighter mb-6 drop-shadow-2xl">
            Join the Academy
          </h2>
          <p className="text-xl md:text-2xl text-bisa-white/90 font-medium tracking-wide mb-12 drop-shadow-md">
            Applications open for all programs. Take the first step.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="https://playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS05OTEtMTc4MTkwNTQwNXxvL1ZERU5WK3NXeVh6eWFNTFBtdUZIS2pOZUVWM0ZnTmlIdnhocTJHV2pvPQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center bg-bisa-gold text-bisa-navy px-10 py-5 rounded-xl font-black text-lg md:text-xl uppercase tracking-widest hover:bg-white transition-all shadow-[0_8px_30px_rgba(245,166,35,0.3)] hover:-translate-y-1 min-h-[56px]"
            >
              Register Now
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto flex items-center justify-center text-bisa-white font-bold uppercase tracking-widest hover:text-bisa-navy hover:bg-bisa-white transition-all bg-white/5 backdrop-blur-sm px-8 py-5 rounded-xl border border-white/20 hover:border-transparent min-h-[56px]"
            >
              Contact Us <span className="ml-2 text-xl">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
