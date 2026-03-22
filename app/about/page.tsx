'use client';

import { motion } from 'motion/react';
import ExperienceStrip from '@/components/ExperienceStrip';
import CoachesGrid from '@/components/CoachesGrid';
import FinalCTA from '@/components/FinalCTA';

export default function AboutPage() {
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
              About BISA
            </h1>
            <p className="text-xl md:text-2xl text-bisa-white/80 font-medium tracking-wide max-w-2xl border-l-4 border-bisa-gold pl-4">
              Developing Champions On and Off the Field
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-bisa-navy-light">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-black text-bisa-gold uppercase tracking-tighter mb-4">Our Mission</h2>
              <p className="text-xl text-bisa-white/90 font-medium leading-relaxed">
                To provide elite youth soccer development in Metro Charleston, SC, fostering technical excellence, tactical understanding, and a lifelong passion for the game.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-black text-bisa-gold uppercase tracking-tighter mb-4">Our Philosophy</h2>
              <p className="text-xl text-bisa-white/90 font-medium leading-relaxed">
                Rooted in Brazilian methodology, we believe in developing the complete player. We prioritize technical mastery, creative problem-solving, and competitive spirit within a positive, growth-oriented environment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <CoachesGrid />
      <ExperienceStrip />
      <FinalCTA />
    </div>
  );
}
