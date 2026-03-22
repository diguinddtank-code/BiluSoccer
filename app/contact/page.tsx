'use client';

import { motion } from 'motion/react';
import LocationsSection from '@/components/LocationsSection';

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-bisa-white uppercase tracking-tighter mb-8">
                Reach Out
              </h2>
              <div className="space-y-8">
                <div>
                  <span className="block text-bisa-gold font-bold uppercase tracking-widest text-sm mb-2">Phone</span>
                  <span className="text-2xl font-black text-bisa-white">(843) 304-9414</span>
                </div>
                <div>
                  <span className="block text-bisa-gold font-bold uppercase tracking-widest text-sm mb-2">Email</span>
                  <span className="text-2xl font-black text-bisa-white">info@bilusoccer.com</span>
                </div>
                <div>
                  <span className="block text-bisa-gold font-bold uppercase tracking-widest text-sm mb-2">Region</span>
                  <span className="text-2xl font-black text-bisa-white">Metro Charleston, SC</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-bisa-navy p-8 border-t-4 border-bisa-gold"
            >
              <h3 className="text-2xl font-black text-bisa-white uppercase tracking-tighter mb-6">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-bisa-white/70 font-bold uppercase tracking-widest text-xs mb-2">Name</label>
                  <input type="text" className="w-full bg-bisa-navy-dark border border-white/10 text-bisa-white px-4 py-3 focus:outline-none focus:border-bisa-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-bisa-white/70 font-bold uppercase tracking-widest text-xs mb-2">Email</label>
                  <input type="email" className="w-full bg-bisa-navy-dark border border-white/10 text-bisa-white px-4 py-3 focus:outline-none focus:border-bisa-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-bisa-white/70 font-bold uppercase tracking-widest text-xs mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-bisa-navy-dark border border-white/10 text-bisa-white px-4 py-3 focus:outline-none focus:border-bisa-gold transition-colors resize-none"></textarea>
                </div>
                <button className="w-full bg-bisa-gold text-bisa-navy font-black uppercase tracking-widest py-4 hover:bg-white transition-colors">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <LocationsSection />
    </div>
  );
}
