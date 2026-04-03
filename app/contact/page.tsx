'use client';

import { motion } from 'motion/react';
import LocationsSection from '@/components/LocationsSection';
import LeadForm from '@/components/LeadForm';

export default function ContactPage() {
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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-bisa-white/80 font-medium tracking-wide max-w-2xl border-l-4 border-bisa-gold pl-4">
              Get in touch with the BISA team.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-bisa-navy-light">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-black text-bisa-white uppercase tracking-tighter mb-12">
              Reach Out Directly
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-bisa-navy p-8 border-t-4 border-bisa-gold rounded-lg">
                <span className="block text-bisa-gold font-bold uppercase tracking-widest text-sm mb-3">Phone</span>
                <span className="text-xl font-black text-bisa-white">(843) 304-9414</span>
              </div>
              <div className="bg-bisa-navy p-8 border-t-4 border-bisa-gold rounded-lg">
                <span className="block text-bisa-gold font-bold uppercase tracking-widest text-sm mb-3">Email</span>
                <span className="text-xl font-black text-bisa-white">info@bilusoccer.com</span>
              </div>
              <div className="bg-bisa-navy p-8 border-t-4 border-bisa-gold rounded-lg">
                <span className="block text-bisa-gold font-bold uppercase tracking-widest text-sm mb-3">Region</span>
                <span className="text-xl font-black text-bisa-white">Metro Charleston, SC</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <LeadForm />
      <LocationsSection />
    </div>
  );
}
