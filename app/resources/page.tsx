'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { FileText, Presentation, ShieldCheck, Download, ChevronRight, HelpCircle, ArrowRight, ExternalLink, Smartphone, Globe, Shield, Instagram } from 'lucide-react';

const systems = [
  {
    id: 'playmetrics',
    titleKey: 'resources.systems.playmetrics.title',
    descKey: 'resources.systems.playmetrics.desc',
    icon: Smartphone,
    color: 'from-green-500/20 to-emerald-500/20',
    hoverColor: 'border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.3)]',
    iconColor: 'text-emerald-400',
    link: 'https://playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS05OTEtMTc4MTkwNTQwNXxvL1ZERU5WK3NXeVh6eWFNTFBtdUZIS2pOZUVWM0ZnTmlIdnhocTJHV2pvPQ==',
    colSpan: 'md:col-span-2 lg:col-span-2'
  },
  {
    id: 'scysa',
    titleKey: 'resources.systems.scysa.title',
    descKey: 'resources.systems.scysa.desc',
    icon: Globe,
    color: 'from-blue-500/20 to-indigo-500/20',
    hoverColor: 'border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.3)]',
    iconColor: 'text-indigo-400',
    link: 'https://www.scysa.org',
    colSpan: 'md:col-span-1 lg:col-span-1'
  },
  {
    id: 'usclub',
    titleKey: 'resources.systems.usclub.title',
    descKey: 'resources.systems.usclub.desc',
    icon: Shield,
    color: 'from-red-500/20 to-orange-500/20',
    hoverColor: 'border-orange-500/50 shadow-[0_0_30px_rgba(249,115,22,0.3)]',
    iconColor: 'text-orange-400',
    link: 'https://usclubsoccer.org',
    colSpan: 'md:col-span-1 lg:col-span-1'
  },
  {
    id: 'bilusoccer',
    titleKey: 'resources.systems.bilusoccer.title',
    descKey: 'resources.systems.bilusoccer.desc',
    icon: Instagram,
    color: 'from-pink-500/20 to-purple-500/20',
    hoverColor: 'border-pink-500/50 shadow-[0_0_30px_rgba(236,72,153,0.3)]',
    iconColor: 'text-pink-400',
    link: 'https://www.instagram.com/bilu_soccer/',
    colSpan: 'md:col-span-1 lg:col-span-2'
  },
  {
    id: 'projetobilu',
    titleKey: 'resources.systems.projetobilu.title',
    descKey: 'resources.systems.projetobilu.desc',
    icon: Instagram,
    color: 'from-[#CCFF00]/20 to-yellow-500/20',
    hoverColor: 'border-[#CCFF00]/50 shadow-[0_0_30px_rgba(204,255,0,0.3)]',
    iconColor: 'text-[#CCFF00]',
    link: 'https://www.instagram.com/projetobilu/',
    colSpan: 'md:col-span-1 lg:col-span-2',
    isBilu: true
  }
];

const docs = [
  {
    id: 'doc1',
    icon: ShieldCheck,
    titleKey: 'resources.doc1.title',
    descKey: 'resources.doc1.desc',
    link: 'https://docs.google.com/document/d/15sdpvotINsmsAf6HqhISPXOigTaWU6ei/edit?usp=drivesdk&ouid=103921043673995965589&rtpof=true&sd=true',
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-cyan-400',
    hoverColor: 'hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]'
  },
  {
    id: 'doc2',
    icon: Presentation,
    titleKey: 'resources.doc2.title',
    descKey: 'resources.doc2.desc',
    link: 'https://docs.google.com/presentation/u/0/d/13mm0bYAN4uDyIUJcNEzCEtAnVBBpktY03if-D9KUq94/mobilepresent?pli=1',
    color: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400',
    hoverColor: 'hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]'
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

  // Container variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <main className="relative min-h-screen bg-[#060913] text-bisa-white overflow-x-hidden w-full max-w-[100vw] pb-20 md:pb-32 selection:bg-[#CCFF00] selection:text-black">
      {/* Immersive Background Elements */}
      <div className="absolute top-0 inset-x-0 h-[60vh] w-full bg-gradient-to-b from-[#0a0f1d] via-[#060913] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-[#CCFF00]/5 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none max-w-[100vw]" />
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-blue-500/5 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none max-w-[100vw]" />

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-48 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 w-full"
            >
              <div className="inline-flex items-center space-x-3 mb-6 md:mb-8 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-md shadow-xl hover:border-white/20 transition-colors w-max max-w-full overflow-hidden">
                <div className="relative w-5 h-5 shrink-0">
                  <Image src="https://i.imgur.com/mHzuZgK.png" alt="BISA" fill className="object-contain" unoptimized />
                </div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#CCFF00] truncate">Academy Hub</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-8 break-words hyphens-auto w-full">
                Parent & <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-bisa-white via-white/80 to-white/40">Player Hub</span>
              </h1>
              
              <p className="text-lg sm:text-lg md:text-2xl text-white/50 font-medium max-w-2xl leading-relaxed">
                {t('resources.subtitle')}
              </p>
            </motion.div>

            {/* Hero Visual showing the Logos floating */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:flex relative w-full lg:w-[400px] h-[400px] shrink-0 items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#CCFF00]/10 to-transparent rounded-full blur-3xl animate-pulse" />
              
              <motion.div 
                animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 w-40 h-40 rounded-3xl bg-[#0a0f1d] border border-white/10 shadow-2xl p-6 flex items-center justify-center -ml-16 mt-20 backdrop-blur-xl"
              >
                 <Image src="https://i.imgur.com/mHzuZgK.png" alt="BISA" fill className="object-contain p-4 drop-shadow-xl" unoptimized />
              </motion.div>

              <motion.div 
                animate={{ y: [10, -10, 10], rotate: [2, -2, 2] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute z-10 w-48 h-48 rounded-full bg-[#0a0f1d] border border-white/10 shadow-[0_0_40px_rgba(204,255,0,0.15)] flex items-center justify-center ml-24 -mt-16 overflow-hidden p-1"
              >
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                     <Image src="https://i.imgur.com/V6cPinz.jpeg" alt="Projeto BILU" fill className="object-cover" />
                  </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Systems & Portals Grid */}
      <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">{t('resources.systems.title') || 'Portals & Platforms'}</h2>
              <div className="h-1 w-24 bg-[#CCFF00] mt-4 md:mt-6 rounded-full" />
            </div>
            <p className="text-white/50 max-w-sm md:text-right text-sm md:text-base">
              Quick access to our official club management apps and social communities.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {systems.map((system) => (
              <motion.div
                key={system.id}
                variants={itemVariants}
                className={`group relative bg-[#0a0f1d] border border-white/10 rounded-3xl p-6 sm:p-8 overflow-hidden hover:${system.hoverColor} transition-all duration-300 ${system.colSpan}`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br ${system.color} rounded-full blur-[50px] md:blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-20 group-hover:opacity-60 transition-opacity duration-700`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-8">
                    <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      {system.isBilu ? (
                        <div className="relative w-10 h-10 rounded-full overflow-hidden">
                           <Image src="https://i.imgur.com/V6cPinz.jpeg" alt="Projeto BILU" fill className="object-cover" />
                        </div>
                      ) : (
                        <system.icon className={`w-7 h-7 md:w-8 md:h-8 ${system.iconColor}`} />
                      )}
                    </div>
                    <Link
                      href={system.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-white text-white/50 hover:text-black transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1 shadow-sm"
                    >
                      <ArrowRight className="w-5 h-5 -rotate-45" />
                    </Link>
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-white transition-colors">{t(system.titleKey)}</h3>
                    <p className="text-bisa-white/50 text-sm md:text-base leading-relaxed font-medium">
                      {t(system.descKey)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">Official Documents</h2>
            <div className="h-1 w-24 bg-[#CCFF00] mt-4 md:mt-6 rounded-full" />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {docs.map((doc) => (
              <motion.div
                key={doc.id}
                variants={itemVariants}
                className={`group relative bg-[#0a0f1d] border border-white/10 rounded-3xl p-8 lg:p-12 overflow-hidden transition-all duration-500 ${doc.hoverColor}`}
              >
                <div className={`absolute top-0 right-0 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-br ${doc.color} rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 translate-x-1/4 opacity-30 group-hover:opacity-80 transition-opacity duration-700`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8 md:mb-10">
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shadow-xl">
                      <doc.icon className={`w-7 h-7 md:w-10 md:h-10 ${doc.iconColor}`} />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">{t(doc.titleKey)}</h3>
                  <p className="text-bisa-white/50 mb-10 md:mb-12 flex-grow text-base md:text-lg leading-relaxed font-medium">
                    {t(doc.descKey)}
                  </p>

                  <Link
                    href={doc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full bg-white/5 border border-white/10 hover:bg-white text-bisa-white hover:text-black px-6 py-5 md:px-8 md:py-6 rounded-2xl font-bold uppercase tracking-wider text-sm md:text-base transition-all duration-500 shadow-lg group-hover:shadow-white/10"
                  >
                    <span>{t('resources.viewBtn')}</span>
                    <Download className="w-5 h-5 md:w-6 md:h-6" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Parent Guide / FAQ */}
      <section className="relative py-16 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0f1d] border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-[#CCFF00] text-black mb-8 shadow-[0_0_40px_rgba(204,255,0,0.3)]">
                <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-6 leading-none">Parent<br/>Guidelines</h2>
              <p className="text-white/50 text-base md:text-lg leading-relaxed font-medium">
                To build champions on the field, we need a champion culture on the sidelines. We count on you to support our environment.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-2/3 space-y-4 md:space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100, damping: 20 }}
                className={`border border-white/10 bg-white/[0.02] rounded-3xl overflow-hidden transition-all duration-300 ${activeFaq === index ? 'shadow-[0_0_30px_rgba(204,255,0,0.05)] border-white/20' : 'hover:border-white/20'}`}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full text-left px-6 py-6 md:px-10 md:py-8 flex items-start md:items-center justify-between focus:outline-none"
                >
                  <span className={`font-bold text-lg sm:text-xl md:text-2xl pr-4 md:pr-8 transition-colors duration-300 ${activeFaq === index ? 'text-[#CCFF00]' : 'text-white'}`}>{faq.q}</span>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 mt-0.5 md:mt-0 ${activeFaq === index ? 'border-[#CCFF00] bg-[#CCFF00]/10' : 'border-white/10 bg-white/5'}`}>
                    <ChevronRight 
                      className={`w-5 h-5 transition-transform duration-500 ${activeFaq === index ? 'rotate-90 text-[#CCFF00]' : 'text-white/50'}`} 
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 md:px-10 md:pb-10 pt-2">
                        <p className="text-white/60 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                           {faq.a}
                        </p>
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


