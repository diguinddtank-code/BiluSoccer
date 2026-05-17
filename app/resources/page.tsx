'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { FileText, Presentation, ShieldCheck, Download, ChevronRight, HelpCircle, ArrowRight } from 'lucide-react';

const docs = [
  {
    id: 'doc1',
    icon: ShieldCheck,
    titleKey: 'resources.doc1.title',
    descKey: 'resources.doc1.desc',
    link: 'https://docs.google.com/document/d/15sdpvotINsmsAf6HqhISPXOigTaWU6ei/edit?usp=drivesdk&ouid=103921043673995965589&rtpof=true&sd=true',
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-cyan-400'
  },
  {
    id: 'doc2',
    icon: Presentation,
    titleKey: 'resources.doc2.title',
    descKey: 'resources.doc2.desc',
    link: 'https://docs.google.com/presentation/u/0/d/13mm0bYAN4uDyIUJcNEzCEtAnVBBpktY03if-D9KUq94/mobilepresent?pli=1',
    color: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400'
  }
];

const faqs = [
  {
    q: "What is the Zero Tolerance Policy?",
    a: "Our Zero Tolerance Policy ensures a safe, positive environment. It means absolutely no abusive language, aggressive behavior, or disrespect towards referees, coaches, players, or other parents will be tolerated under any circumstances."
  },
  {
    q: "How can parents best support their players?",
    a: "The most important role of a parent is to encourage and support. Let the coaches coach, let the referees officiate, and focus on praising your child's effort and sportsmanship rather than just the outcome of the game."
  },
  {
    q: "What equipment does my child need?",
    a: "All players must bring their BISA training kits, proper soccer cleats, shin guards (mandatory for safety), and a water bottle to every practice and game."
  }
];

export default function ResourcesPage() {
  const { t } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-bisa-navy text-bisa-white overflow-hidden pb-20 md:pb-32">
      {/* Background Elements */}
      <div className="absolute top-0 inset-x-0 h-[50vh] md:h-[60vh] bg-gradient-to-b from-[#CCFF00]/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-[#CCFF00]/5 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center space-x-3 mb-6 md:mb-8 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#CCFF00]">Academy Hub</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6 md:mb-8">
              Parent & <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bisa-white to-white/40">Player Resources</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-2xl text-white/60 font-medium max-w-2xl leading-relaxed">
              {t('resources.subtitle')} Essential guidelines, policies, and materials to ensure a successful journey at BISA.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="relative py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 md:mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight">Official Documents</h2>
              <div className="h-1 w-16 md:w-20 bg-[#CCFF00] mt-3 md:mt-4" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {docs.map((doc, i) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-[#0a0f1d] border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden hover:border-[#CCFF00]/30 transition-all duration-500"
              >
                <div className={`absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br ${doc.color} rounded-full blur-[60px] md:blur-[80px] -translate-y-1/2 translate-x-1/4 opacity-50 group-hover:opacity-100 transition-opacity duration-700`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6 md:mb-8">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <doc.icon className={`w-6 h-6 md:w-8 md:h-8 ${doc.iconColor}`} />
                    </div>
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                      <ArrowRight className="w-4 h-4 text-[#CCFF00]" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">{t(doc.titleKey)}</h3>
                  <p className="text-bisa-white/60 mb-8 md:mb-10 flex-grow text-sm sm:text-base md:text-lg leading-relaxed">
                    {t(doc.descKey)}
                  </p>

                  <Link
                    href={doc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full bg-white/5 hover:bg-[#CCFF00] text-bisa-white hover:text-bisa-navy px-6 py-4 md:px-8 md:py-5 rounded-xl md:rounded-2xl font-bold uppercase tracking-wider text-sm md:text-base transition-all duration-300"
                  >
                    <span>{t('resources.viewBtn')}</span>
                    <Download className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Guide / FAQ */}
      <section className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#CCFF00]/10 text-[#CCFF00] mb-6 md:mb-8">
                <HelpCircle className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 md:mb-6">Parent<br/>Guidelines</h2>
              <p className="text-white/60 text-sm sm:text-base md:text-lg">
                To build champions on the field, we need a champion culture on the sidelines. We count on you to support our environment.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-2/3 space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-white/10 bg-white/5 rounded-xl md:rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full text-left px-5 py-4 md:px-8 md:py-6 flex items-center justify-between hover:bg-white/5 transition-colors focus:outline-none"
                >
                  <span className="font-bold text-base sm:text-lg md:text-xl pr-4 md:pr-8">{faq.q}</span>
                  <ChevronRight 
                    className={`w-5 h-5 md:w-6 md:h-6 text-[#CCFF00] shrink-0 transition-transform duration-300 ${activeFaq === index ? 'rotate-90' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 md:px-8 md:pb-6 text-white/60 text-sm sm:text-base md:text-lg leading-relaxed border-t border-white/5 mt-1 md:mt-2 pt-4 md:pt-6">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

