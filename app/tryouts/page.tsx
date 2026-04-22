'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import TryoutDatesCard from '@/components/TryoutDatesCard';
import LeadForm from '@/components/LeadForm';

export default function TryoutsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-bisa-navy-dark py-24 md:py-32 border-b-4 border-bisa-gold relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-bisa-navy transform skew-x-12 translate-x-1/4 opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-bisa-white uppercase tracking-tighter mb-6">
              Prove Yourself
            </h1>
            <p className="text-xl md:text-3xl text-bisa-gold font-medium tracking-wide mb-10 border-l-4 border-bisa-white pl-4">
              Tryouts open for the 2025/26 season
            </p>
            <Link
              href="#schedule"
              className="inline-block bg-bisa-white text-bisa-navy px-8 py-4 rounded font-black uppercase tracking-widest hover:bg-bisa-gold transition-colors"
            >
              View Schedule
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-24 bg-bisa-navy-light">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-bisa-white uppercase tracking-tighter mb-4">
              Tryout Schedule
            </h2>
            <p className="text-bisa-white/70 font-medium uppercase tracking-wide">
              All times: 6:30 PM – 8:00 PM weekdays / 3:00–4:30 PM or 4:30–6:00 PM Saturdays
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TryoutDatesCard 
              ageGroup="Boys & Girls 2016–2018"
              dates={[
                "Apr 28 (Mon)",
                "Apr 30 (Wed)",
                "May 3 (Sat)"
              ]}
            />
            <TryoutDatesCard 
              ageGroup="Boys & Girls 2015–2014"
              dates={[
                "Apr 29 (Tue)",
                "May 1 (Thu)",
                "May 3 (Sat)"
              ]}
            />
            <div className="md:col-span-2">
              <TryoutDatesCard 
                ageGroup="Boys & Girls 2013–2011"
                dates={[
                  "May 5 (Mon), May 7 (Wed), May 10 (Sat)",
                  "May 6 (Tue), May 8 (Thu), May 10 (Sat)"
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <LeadForm />

      {/* Final CTA */}
      <section className="py-32 bg-bisa-navy-dark text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-bisa-white uppercase tracking-tighter mb-10">
              Ready to Work?
            </h2>
            <Link
              href="https://playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS05OTEtMTc4MTkwNTQwNXxvL1ZERU5WK3NXeVh6eWFNTFBtdUZIS2pOZUVWM0ZnTmlIdnhocTJHV2pvPQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-bisa-gold text-bisa-navy px-12 py-6 rounded font-black text-2xl uppercase tracking-widest hover:bg-white transition-colors"
            >
              Register for Tryouts
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
