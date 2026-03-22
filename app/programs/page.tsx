'use client';

import { motion } from 'motion/react';
import ProgramsGrid from '@/components/ProgramsGrid';
import FinalCTA from '@/components/FinalCTA';

export default function ProgramsPage() {
  return (
    <div className="pt-20">
      <section className="bg-bisa-navy-dark py-24 border-b-4 border-bisa-gold">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-bisa-white uppercase tracking-tighter mb-6">
              Our Programs
            </h1>
            <p className="text-xl md:text-2xl text-bisa-white/80 font-medium tracking-wide max-w-2xl border-l-4 border-bisa-gold pl-4">
              A comprehensive pathway for player development at every age and skill level.
            </p>
          </motion.div>
        </div>
      </section>
      
      <ProgramsGrid />
      <FinalCTA />
    </div>
  );
}
