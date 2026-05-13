'use client';

import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

import { Monitor, Layout, Flag as FlagIcon, ChevronDown, Rocket, Trophy, Users, ShieldCheck, CheckCircle2, ChevronUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import WorldLanguages from '@/components/WorldLanguages';

/* ─── Reusable components ─── */

const GreenCheck = () => (
  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#22C55E] text-white font-bold text-sm flex-shrink-0">✓</span>
);

const WhiteCheck = () => (
  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border-2 border-white/50 text-white font-bold text-sm flex-shrink-0">✓</span>
);

const SectionPill = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
  <div className={`inline-flex rounded-full py-2 px-8 text-xs font-bold tracking-widest shadow-sm ${dark ? 'bg-white/10 text-white border border-white/20' : 'bg-[#1B3A8C] text-white'}`}>
    {children}
  </div>
);

/* ─── Parallax hook ─── */
function useParallax(value: any, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

/* ─────────────────────────────────────────────────────────────── */

export default function SponsorshipClient() {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useParallax(heroScroll, 120);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  const [expandedId, setExpandedId] = useState<string | null>(null);

  const bundleAssets = [
    {
      id: 'hudl',
      icon: <Monitor className="w-8 h-8" />,
      title: t('sp.bundle.benefit.hudl'),
      desc: t('sp.hudl.desc').split('.')[0] + '.',
      img: 'https://i.imgur.com/AwXm3Ku.png',
      checklist: [t('sp.bundle.benefit.hudl'), t('sp.hudl.badge'), t('sp.bundle.benefit.hudl'), t('sp.bundle.benefit.hudl')]
    },
    {
      id: 'banner',
      icon: <Layout className="w-8 h-8" />,
      title: t('sp.banner.title').split(' ')[0] + ' Banner',
      desc: t('sp.banner.desc').split('.')[0] + '.',
      img: 'https://i.imgur.com/6BQ7rrA.png',
      checklist: [t('sp.bundle.benefit.banner'), t('sp.banner.badge'), t('sp.banner.badge'), t('sp.banner.badge')]
    },
    {
      id: 'flag',
      icon: <FlagIcon className="w-8 h-8" />,
      title: t('sp.flag.title'),
      desc: t('sp.flag.desc').split('.')[0] + '.',
      img: 'https://i.imgur.com/xCvtLP7.png',
      checklist: [t('sp.bundle.benefit.flag'), t('sp.flag.badge'), t('sp.flag.badge'), t('sp.flag.badge')]
    }
  ];

  return (
    <main className="bg-white text-gray-800 font-[family-name:var(--font-inter)] selection:bg-[#22C55E] selection:text-white overflow-x-hidden">
      <Navbar />

      {/* ═══════════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden">

        {/* Parallax background */}
        <motion.div className="absolute inset-0 z-0 scale-110" style={{ y: heroY }}>
          <img
            src="https://i.imgur.com/0uPLpLd.png"
            alt="BISA Soccer Field"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </motion.div>

        {/* Eagle eyes overlay */}
        <div className="absolute top-0 left-0 w-full h-[55%] z-0 pointer-events-none opacity-20 mix-blend-overlay">
          <img src="/images/sponsorship/eagle-eyes.jpg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>

        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden">
          <span className="font-[family-name:var(--font-bebas)] text-[12vw] text-white opacity-[0.04] whitespace-nowrap select-none tracking-widest">
            BILUINTERNACIONALSOCCER
          </span>
        </div>

        {/* Hero content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center flex-grow px-6 pt-32 pb-12 text-center"
          style={{ opacity: heroOpacity }}
        >
          <motion.img
            src="https://i.imgur.com/mHzuZgK.png"
            alt="BISA – Bilu International Soccer Academy"
            className="w-36 md:w-48 mb-8 drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.7, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.h1
            className="font-[family-name:var(--font-bebas)] text-[13vw] md:text-[9vw] lg:text-[8rem] leading-none text-white tracking-widest drop-shadow-2xl"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {t('sp.hero.title1')}<br />
            <span className="text-[#22C55E]">{t('sp.hero.title2')}</span>
          </motion.h1>

          {/* Scroll indicator */}
          <motion.div
            className="mt-12 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <span className="text-white/50 text-xs tracking-widest uppercase font-bold">{t('sp.hero.scroll')}</span>
            <motion.div
              className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent"
              animate={{ scaleY: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>

        {/* Bottom quote banner */}
        <motion.div
          className="relative z-10 bg-[#1B3A8C] py-5 px-8 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="italic text-white/90 text-center font-medium max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
            {t('sp.hero.quote')}
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 3 — IMPACT & PURPOSE
      ═══════════════════════════════════════════════ */}
      <section className="bg-[#F3F4F6] py-20 md:py-32 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-[family-name:var(--font-bebas)] text-[#1B3A8C] text-5xl md:text-7xl leading-none tracking-wide mb-6">
              {t('sp.impact.title')}<br />
              <span className="text-[#22C55E]">{t('sp.impact.titleHighlight')}</span>
            </h2>
            <p className="text-gray-600 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              {t('sp.impact.desc')}
            </p>
          </motion.div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
            {[
              { src: '/images/sponsorship/kids-playing.jpg', alt: 'Children playing soccer at BISA', delay: 0.1 },
              { src: '/images/sponsorship/scholarship-kids.jpg', alt: 'Kids receiving BISA scholarships', delay: 0.25 },
            ].map((img) => (
              <motion.div
                key={img.src}
                className="rounded-2xl overflow-hidden aspect-video shadow-xl"
                initial={{ opacity: 0, scale: 0.93, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.9, delay: img.delay, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.08 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />
              </motion.div>
            ))}
          </div>

          {/* Callout */}
          <motion.p
            className="font-bold text-[#1B3A8C] text-2xl md:text-3xl text-center max-w-2xl leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
          >
            {t('sp.impact.callout')}
          </motion.p>

          {/* Stat cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[
              { season: '2023/24 Season', value: '$7,214', highlight: false, delay: 0.1 },
              { season: '2024/25 Season', value: '$16,243', highlight: false, delay: 0.2 },
              { season: '2025/26 Season', value: '$50,153', highlight: true, delay: 0.3, badge: t('sp.impact.stat.current') },
            ].map((stat) => (
              <motion.div
                key={stat.season}
                className={`relative rounded-2xl bg-white shadow-md p-6 text-center ${stat.highlight ? 'border-2 border-[#22C55E] shadow-lg shadow-green-100 md:-translate-y-2' : 'border border-gray-100'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: stat.delay }}
              >
                {stat.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#22C55E] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap">
                    {stat.badge}
                  </span>
                )}
                <div className="text-gray-400 font-bold uppercase tracking-wider text-xs mb-2 mt-2">{stat.season}</div>
                <div className={`text-4xl md:text-5xl font-black ${stat.highlight ? 'text-[#22C55E]' : 'text-[#1B3A8C]'}`}>{stat.value}</div>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-gray-500 font-medium max-w-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t('sp.impact.footer')}
          </motion.p>

          <SectionPill>BISA · BILU INTERNACIONAL SOCCER ACADEMY</SectionPill>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 4 — JERSEY SPONSORSHIP (PREMIUM PACTS)
      ═══════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-32 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9 }}
          >
            <span className="inline-block bg-[#22C55E]/10 text-[#22C55E] text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              {t('sp.jersey.badge')}
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-[#1B3A8C] text-5xl md:text-7xl tracking-wide leading-none">
              {t('sp.jersey.title1')}<br />{t('sp.jersey.title2')}
            </h2>
          </motion.div>

          {/* Jersey images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {[
              { src: 'https://i.imgur.com/UBxpH2k.png', alt: t('sp.jersey.front'), label: t('sp.jersey.front'), delay: 0 },
              { src: 'https://i.imgur.com/x6BB0Oi.png', alt: t('sp.jersey.sleeve'), label: t('sp.jersey.sleeve'), delay: 0.15 },
            ].map((jersey) => (
              <motion.div
                key={jersey.src}
                className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.9, delay: jersey.delay, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="overflow-hidden">
                  <motion.img
                    src={jersey.src}
                    alt={jersey.alt}
                    className="w-full h-auto object-cover block"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <div className="py-3 text-center">
                  <span className="text-[#1B3A8C] font-bold text-sm tracking-wide">{jersey.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
          >
            {[
              t('sp.jersey.benefit1'),
              t('sp.jersey.benefit2'),
              t('sp.jersey.benefit3'),
              t('sp.jersey.benefit4'),
            ].map((item) => (
              <div key={item} className="flex items-start gap-4">
                <GreenCheck />
                <span className="text-gray-700 font-medium leading-relaxed">{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-full bg-[#1B3A8C] text-white px-8 py-4 font-bold shadow-md text-sm text-center hover:bg-blue-800 transition-colors">
              Gold (Sleeve): $2,500/yr
            </div>
            <div className="rounded-full bg-[#1B3A8C] text-white px-8 py-4 font-bold shadow-md text-sm text-center outline outline-2 outline-offset-2 outline-[#1B3A8C]/30 hover:bg-blue-800 transition-colors">
              Diamond (Shirt): $5,000/yr
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 5 — BUNDLE PACKAGE (NEW)
      ═══════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-20 md:py-32 px-6 overflow-hidden border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block bg-[#1B3A8C] text-white text-[10px] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full mb-6 shadow-xl shadow-blue-500/20">
              {t('sp.bundle.badge')}
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-[#1B3A8C] text-6xl md:text-8xl tracking-tight leading-[0.9] mb-6">
              {t('sp.bundle.title1')} <span className="text-[#22C55E]">{t('sp.bundle.title2')}</span>
            </h2>
            <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              {t('sp.bundle.desc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-left">
            {bundleAssets.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                className={`bg-white rounded-[2.5rem] shadow-xl border overflow-hidden transition-all duration-500 cursor-pointer group ${
                  expandedId === item.id 
                    ? 'ring-4 ring-[#1B3A8C]/10 border-[#1B3A8C]/20' 
                    : 'border-gray-100 hover:border-[#1B3A8C]/20'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
              >
                <div className={`p-8 text-center flex flex-col items-center transition-colors ${expandedId === item.id ? 'bg-[#1B3A8C]/[0.02]' : ''}`}>
                  <motion.div 
                    layout
                    className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-6 transition-all duration-300 ${
                      expandedId === item.id ? 'bg-[#1B3A8C] text-white shadow-lg' : 'bg-[#1B3A8C]/5 text-[#1B3A8C] group-hover:scale-110'
                    }`}
                  >
                    {item.icon}
                  </motion.div>
                  <motion.h3 layout className="text-[#1B3A8C] font-black text-2xl mb-3 uppercase tracking-wider">{item.title}</motion.h3>
                  <motion.p layout className="text-gray-500 font-medium text-sm leading-relaxed mb-6">{item.desc}</motion.p>
                  
                  <motion.button
                    layout
                    className={`flex items-center gap-2 font-black text-[10px] uppercase tracking-widest px-6 py-2.5 rounded-full transition-all ${
                      expandedId === item.id 
                        ? 'bg-white text-gray-400 border border-gray-200' 
                        : 'bg-[#1B3A8C] text-white shadow-lg shadow-blue-500/20'
                    }`}
                  >
                    {expandedId === item.id ? t('sp.pkg.closeDetails') : t('sp.pkg.viewPreview')}
                    {expandedId === item.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </motion.button>
                </div>

                {/* Mobile-only Accordion Details */}
                <div className="md:hidden">
                  <AnimatePresence>
                    {expandedId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-white border-t border-gray-100"
                      >
                        <div className="px-3 pb-8 pt-2">
                          <div className="flex flex-row items-center bg-gray-50/50 rounded-[1.5rem] p-5 shadow-inner border border-gray-100 gap-4">
                            <div className="flex-[1.4] text-left">
                              <div className="flex items-center gap-2 mb-5 text-[#1B3A8C] font-black text-[12px] uppercase tracking-tighter">
                                <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                                {t('sp.bundle.asset.checklist')}
                              </div>
                              <ul className="space-y-4">
                                {item.checklist.map((check) => (
                                  <li key={check} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E] shrink-0">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    <span className="text-gray-700 font-black text-[10px] uppercase tracking-tight leading-none">{check}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex-1 max-w-[140px] flex justify-center">
                              {item.id === 'hudl' ? (
                                <div className="bg-[#0F2460] rounded-lg p-2 shadow-xl border border-white/10 w-full aspect-video relative overflow-hidden">
                                  <div className="absolute top-1.5 left-1.5 z-20 flex items-center bg-red-600 text-white text-[6px] font-bold uppercase rounded-full px-1.5 py-0.5 gap-1">
                                    <div className="w-1 h-1 rounded-full bg-white opacity-100 animate-pulse" />
                                    LIVE
                                  </div>
                                  <img src={item.img} alt="Hudl" className="w-full h-full object-cover rounded" />
                                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-3 pb-1 px-1">
                                    <div className="bg-white/95 rounded py-0.5 px-1 text-center text-[#1B3A8C] text-[6px] font-black w-full uppercase">Your Brand</div>
                                  </div>
                                </div>
                              ) : (
                                <img src={item.img} className="w-full h-auto object-contain drop-shadow-lg" alt="Preview" />
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop-only Detailed Preview Section */}
          <div className="hidden md:block mb-20 text-left">
            <AnimatePresence mode="wait">
              {expandedId ? (
                <motion.div
                  key={expandedId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 p-12 overflow-hidden relative"
                >
                  <div className="grid grid-cols-12 gap-16 items-center">
                    
                    {/* Detail Text Side */}
                    <div className="col-span-12 lg:col-span-6">
                      <div className="flex items-center gap-4 mb-10 text-[#1B3A8C] font-black text-4xl uppercase tracking-tighter">
                        <CheckCircle2 className="w-12 h-12 text-[#22C55E]" />
                        {bundleAssets.find(a => a.id === expandedId)?.title} <span className="text-[#22C55E] ml-2">{t('sp.bundle.asset.checklist').replace(':', '')}</span>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                        {bundleAssets.find(a => a.id === expandedId)?.checklist.map((check, i) => (
                          <motion.div 
                            key={check} 
                            className="flex items-center gap-5"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + (i * 0.05) }}
                          >
                            <div className="w-12 h-12 rounded-2xl bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E] shrink-0 shadow-sm border border-[#22C55E]/20">
                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <span className="text-gray-600 font-bold text-lg uppercase tracking-tight leading-tight">{check}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-12 p-6 bg-gray-50 rounded-3xl border border-gray-100">
                        <p className="text-gray-500 font-medium italic leading-relaxed">
                          &quot;{t('sp.bundle.asset.quote')}&quot;
                        </p>
                      </div>
                    </div>

                    {/* Desktop Mockup Side */}
                    <div className="col-span-12 lg:col-span-6 flex justify-center items-center">
                      <div className="relative w-full max-w-[480px]">
                        {expandedId === 'hudl' ? (
                          <motion.div 
                            initial={{ scale: 0.9, opacity: 0, rotate: 2 }}
                            animate={{ scale: 1, opacity: 1, rotate: 0 }}
                            className="bg-[#0F2460] rounded-3xl p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] border border-white/10 w-full aspect-video relative overflow-hidden"
                          >
                            <div className="absolute top-6 left-6 z-20 flex items-center bg-red-600 text-white text-sm font-black uppercase tracking-widest rounded-full px-5 py-2 gap-3 shadow-xl">
                              <motion.div className="w-2.5 h-2.5 rounded-full bg-white" animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
                              LIVE BROADCAST
                            </div>
                            <img src={bundleAssets.find(a => a.id === expandedId)?.img} alt="Live Preview" className="w-full h-full object-cover rounded-xl opacity-90" />
                            <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay pointer-events-none" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pt-20 pb-6 px-6">
                              <div className="bg-white/95 rounded-xl py-4 px-6 text-center text-[#1B3A8C] text-xl font-black tracking-[0.2em] w-full uppercase shadow-2xl">
                                YOUR BRAND HERE
                              </div>
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            className="flex flex-col items-center"
                          >
                            <img 
                              src={bundleAssets.find(a => a.id === expandedId)?.img} 
                              alt="Mockup"
                              className={`w-full ${expandedId === 'banner' ? 'h-auto rounded-xl shadow-2xl border-4 border-white' : 'h-[500px] object-contain'} drop-shadow-[0_25px_50px_rgba(0,0,0,0.2)]`} 
                            />
                            <div className="h-4 w-[60%] bg-black/5 blur-3xl rounded-full mt-4" />
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-gray-50/50 rounded-[3rem] p-12 text-center border-2 border-dashed border-gray-200"
                >
                  <Rocket className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-sm">Select an asset above to see the full preview</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>


          <motion.div
            className="bg-[#1B3A8C] rounded-[3rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none font-[family-name:var(--font-bebas)] text-[20rem] flex items-center justify-center select-none overflow-hidden">BUNDLE</div>
            
            <div className="relative z-10 max-w-xl">
              <h3 className="text-3xl md:text-5xl font-[family-name:var(--font-bebas)] tracking-widest mb-6">ALL-IN-ONE IMPACT</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[t('sp.bundle.benefit.hudl'), t('sp.bundle.benefit.banner'), t('sp.bundle.benefit.flag'), t('sp.bundle.benefit.priority')].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <WhiteCheck />
                    <span className="font-bold text-sm tracking-wide">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 text-center md:text-right">
              <div className="bg-[#22C55E] text-white px-10 py-6 rounded-3xl shadow-xl hover:scale-[1.05] transition-transform cursor-default border-4 border-white/20">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-1 opacity-80">{t('sp.pkg.annual')}</div>
                <div className="text-5xl font-black leading-none tracking-tighter mb-1">$5,000</div>
                <div className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-widest bg-yellow-400 text-green-900 px-4 py-1.5 rounded-lg mb-4 inline-block shadow-sm border border-white/50">
                  {t('sp.bundle.save')}
                </div>
                <div className="text-xs font-bold opacity-70 tracking-widest whitespace-nowrap block">HUDL + BANNER + FLAG</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 6 — INDIVIDUAL ASSETS TRANSITION
      ═══════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24 px-6 text-center">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-px h-16 bg-gray-200 mx-auto mb-10" />
          <h2 className="font-[family-name:var(--font-bebas)] text-[#1B3A8C] text-4xl md:text-5xl tracking-widest leading-none mb-4">
            Individual Asset Sponsorships
          </h2>
          <p className="text-gray-500 font-medium text-lg leading-relaxed mb-10">
            Select a specific asset that best aligns with your marketing goals or brand presence requirements.
          </p>
          <ChevronDown className="w-8 h-8 text-[#22C55E] mx-auto animate-bounce" />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 7 — HUDL LIVE STREAM
      ═══════════════════════════════════════════════ */}
      <section className="bg-[#1B3A8C] py-20 md:py-32 px-6 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9 }}
          >
            <span className="inline-block bg-yellow-400/15 text-yellow-400 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 border border-yellow-400/20">
              {t('sp.hudl.badge')}
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl tracking-wide leading-none mb-6">
              {t('sp.hudl.title')}
            </h2>
            <p className="text-white/75 max-w-2xl mx-auto text-lg leading-relaxed">
              {t('sp.hudl.desc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9 }}
            >
              <ul className="space-y-5 mb-10">
                {[
                  'Banner placement on all live broadcasts',
                  'Global exposure to remote fans and family',
                  'Official partnership status recognition',
                  'High-tech community marketing tool',
                  'Repeated visibility every game day',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <WhiteCheck />
                    <span className="text-white font-medium text-lg leading-tight pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-full bg-white text-[#1B3A8C] font-black px-8 py-3 inline-block shadow-lg hover:bg-gray-100 transition-colors text-base">
                {t('sp.pkg.investment')}: $1,600{t('sp.pkg.perYear')}
              </div>
            </motion.div>

            <motion.div
              className="bg-[#0F2460] rounded-2xl p-4 shadow-2xl border border-white/10"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9 }}
            >
              <div className="relative rounded-xl overflow-hidden aspect-video mb-3 bg-black">
                <div className="absolute top-3 left-3 z-20 flex items-center bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full px-3 py-1.5 gap-2 shadow-lg">
                  <motion.div className="w-2 h-2 rounded-full bg-white" animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
                  LIVE
                </div>
                <img src="https://i.imgur.com/AwXm3Ku.png" alt="Hudl mockup" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-10 pb-3 px-3">
                  <div className="bg-white/90 rounded-md py-2 px-3 text-center text-[#1B3A8C] text-xs font-black tracking-widest w-full uppercase">Your Brand Here</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 7 — FLAG SPONSORSHIP
      ═══════════════════════════════════════════════ */}
      <section className="bg-[#F3F4F6] py-16 md:py-24 px-4 md:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch min-h-[580px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-200 bg-white">
            
            {/* Left — Immersive Mockup Side */}
            <motion.div
              className="relative min-h-[420px] md:min-h-0 overflow-hidden bg-white flex items-center justify-center p-8 md:p-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="absolute inset-0 bg-[#1B3A8C]/[0.02] pointer-events-none" />
              <motion.div
                className="relative z-10 h-full flex flex-col items-center justify-center"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src="https://i.imgur.com/aYHpbOS.png"
                  alt="Flag Mockup"
                  className="h-full max-h-[480px] w-auto object-contain transition-transform duration-700 hover:scale-[1.03]"
                />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-40 h-10 bg-[#1B3A8C]/5 blur-3xl rounded-full z-0" />
              </motion.div>
            </motion.div>

            {/* Right — Text Side */}
            <motion.div
              className="flex flex-col justify-center p-8 md:p-14 bg-white"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 bg-[#22C55E]/5 text-[#22C55E] text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6 self-start border border-[#22C55E]/10">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                {t('sp.flag.badge')}
              </span>
              <h2 className="font-[family-name:var(--font-bebas)] text-[#1B3A8C] text-5xl md:text-7xl mb-4 tracking-wide leading-none">
                {t('sp.flag.title')}
              </h2>
              <p className="text-gray-500 mb-8 font-medium leading-relaxed max-w-md">
                {t('sp.flag.desc')}
              </p>
              <ul className="grid grid-cols-1 gap-4 mb-10">
                {[
                  'Full-color professional logo design',
                  'Present at all official academy events',
                  'Taken to every club game (high mobility)',
                  'Direct link via integrated QR Code',
                  'Social impact brand association',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E] shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-gray-700 font-semibold text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-4">
                <div className="rounded-2xl bg-[#1B3A8C] text-white px-8 py-4 font-bold shadow-lg shadow-blue-900/20 text-center hover:scale-[1.02] transition-transform cursor-default">
                  <div className="text-xl">$2,500 / Season</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 8 — BANNER SPONSORSHIP
      ═══════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24 px-4 md:px-6 overflow-hidden border-t border-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch min-h-[580px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-[#F8F9FC]">
            
            <motion.div
              className="flex flex-col justify-center p-8 md:p-14 order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 bg-[#1B3A8C]/5 text-[#1B3A8C] text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6 self-start border border-[#1B3A8C]/10">
                <span className="w-2 h-2 rounded-full bg-[#1B3A8C] animate-pulse" />
                {t('sp.banner.badge')}
              </span>
              <h2 className="font-[family-name:var(--font-bebas)] text-[#1B3A8C] text-5xl md:text-7xl mb-4 tracking-wide leading-none">
                {t('sp.banner.title')}
              </h2>
              <p className="text-gray-500 mb-8 font-medium leading-relaxed max-w-md">
                {t('sp.banner.desc')}
              </p>
              <ul className="grid grid-cols-1 gap-4 mb-10">
                {[
                  "Standard 8' x 4' field banner",
                  'Premium placement at training field',
                  'High daily foot traffic visibility',
                  'Custom QR Code for direct traffic',
                  'Association with youth sports development',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E] shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-gray-700 font-semibold text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-4">
                <div className="rounded-2xl bg-[#1B3A8C] text-white px-8 py-4 font-bold shadow-lg shadow-blue-900/20 text-center hover:scale-[1.02] transition-transform cursor-default">
                  <div className="text-xl">$1,500 / Season</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative order-1 md:order-2 min-h-[420px] md:min-h-0 overflow-hidden bg-white flex items-center justify-center p-6 md:p-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="absolute inset-0 bg-[#1B3A8C]/[0.02] pointer-events-none" />
              <motion.div
                className="relative z-10 w-full max-w-[480px]"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <img src="https://i.imgur.com/6BQ7rrA.png" alt="Banner Mockup" className="w-full h-auto object-contain" />
                <div className="absolute -bottom-6 left-[10%] right-[10%] h-8 bg-[#1B3A8C]/5 blur-2xl rounded-full z-0" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 8 — WHY BECOME A SPONSOR?
      ═══════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-[#1B3A8C]">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="https://i.imgur.com/0uPLpLd.png" alt="" className="w-full h-full object-cover opacity-20 grayscale" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1B3A8C] via-[#1B3A8C]/90 to-[#1B3A8C]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 px-4">
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-block bg-[#22C55E]/10 text-[#22C55E] text-xs font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6 border border-[#22C55E]/20">
              {t('sp.why.badge')}
            </span>
            <motion.h2
              className="font-[family-name:var(--font-bebas)] text-white text-6xl md:text-8xl tracking-tight leading-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {t('sp.why.title').split(' ').slice(0, -1).join(' ')} <span className="text-[#22C55E]">{t('sp.why.title').split(' ').pop()}</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: t('sp.why.card1.title'),
                desc: t('sp.why.card1.desc'),
                icon: <Rocket className="w-7 h-7" />,
                delay: 0.1
              },
              {
                title: t('sp.why.card2.title'),
                desc: t('sp.why.card2.desc'),
                icon: <Trophy className="w-7 h-7" />,
                delay: 0.2
              },
              {
                title: t('sp.why.card3.title'),
                desc: t('sp.why.card3.desc'),
                icon: <Users className="w-7 h-7" />,
                delay: 0.3
              },
              {
                title: t('sp.why.card4.title'),
                desc: t('sp.why.card4.desc'),
                icon: <ShieldCheck className="w-7 h-7" />,
                delay: 0.4,
                highlight: true
              }
            ].map((card) => (
              <motion.div
                key={card.title}
                className={`group relative p-8 rounded-[2rem] transition-all duration-500 overflow-hidden ${
                  card.highlight 
                    ? 'bg-[#22C55E] text-white shadow-[0_20px_50px_rgba(34,197,94,0.3)]' 
                    : 'bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white shadow-xl'
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: card.delay }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner ${
                  card.highlight ? 'bg-white/20' : 'bg-[#22C55E]/20 text-[#22C55E]'
                }`}>
                  {card.icon}
                </div>
                <h3 className="font-bold text-2xl mb-4 tracking-tight">{card.title}</h3>
                <p className={`text-lg leading-relaxed ${card.highlight ? 'text-white/90' : 'text-gray-300'}`}>
                  {card.desc}
                </p>
                
                {/* Decorative glow */}
                {!card.highlight && (
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#22C55E]/10 rounded-full blur-2xl group-hover:bg-[#22C55E]/20 transition-colors" />
                )}
              </motion.div>
            ))}
          </div>

          {/* KPI Highlight */}
          <motion.div 
            className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            <p className="text-white font-[family-name:var(--font-bebas)] text-3xl md:text-5xl tracking-wide mb-2 opacity-50">BY THE NUMBERS</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {[
                { label: t('sp.why.stat.athletes'), val: '250+' },
                { label: t('sp.why.stat.families'), val: '400+' },
                { label: t('sp.why.stat.weekly'), val: '2k+' },
                { label: t('sp.why.stat.coverage'), val: '100%' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <span className="text-[#22C55E] text-4xl md:text-6xl font-black mb-1 drop-shadow-sm">{stat.val}</span>
                  <span className="text-white/60 text-xs md:text-sm font-black uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <WorldLanguages />

      {/* ═══════════════════════════════════════════════
          SECTION 9 — PACKAGES OVERVIEW
      ═══════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-32 px-6 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
        >
          <img src="https://i.imgur.com/mHzuZgK.png" alt="BISA Logo" className="w-24 md:w-32 mx-auto mb-8" />
          <h2 className="font-[family-name:var(--font-bebas)] text-[#1B3A8C] text-5xl md:text-7xl mb-4 tracking-wide leading-none">
            {t('sp.packages.title1')} <span className="text-[#22C55E]">{t('sp.packages.title2')}</span>
          </h2>
          <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
            {t('sp.packages.desc')}
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto flex flex-col gap-5 text-left">
          {[
            {
              icon: '👕', title: t('sp.pkg.diamond'),
              items: [`${t('sp.pkg.investment')}: $5,000${t('sp.pkg.perYear')} — ${t('sp.pkg.min2years')}`, `${t('sp.pkg.total')}: $10,000`, 'Max visibility on game day'],
              delay: 0.1, premium: true,
            },
            {
              icon: '👕', title: t('sp.pkg.gold'),
              items: [`${t('sp.pkg.investment')}: $2,500${t('sp.pkg.perYear')} — ${t('sp.pkg.min2years')}`, `${t('sp.pkg.total')}: $5,000`, 'Logo prominently on sleeves'],
              delay: 0.2,
            },
            {
              icon: '💎', title: t('sp.pkg.bundle'),
              items: [`${t('sp.pkg.investment')}: $5,000${t('sp.pkg.perYear')}`, 'Includes Hudl Broadcast Ads', 'Includes Field Banner (8x4)', 'Includes Official Event Flag'],
              delay: 0.3, premium: true,
            },
            {
              icon: '🎥', title: t('sp.pkg.hudl'),
              items: [`${t('sp.pkg.investment')}: $1,600${t('sp.pkg.perYear')}`, 'Digital banner on all game broadcasts'],
              delay: 0.4,
            },
            {
              icon: '🚩', title: t('sp.pkg.flag'),
              items: [`${t('sp.pkg.investment')}: $2,500 per season`, 'Custom flag taken to all matches and events'],
              delay: 0.5,
            },
            {
              icon: '🏟️', title: t('sp.pkg.banner'),
              items: [`${t('sp.pkg.investment')}: $1,500 first season`, 'Renewal: $1,000/year'],
              delay: 0.6,
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              className="relative rounded-3xl border-2 border-[#1B3A8C] bg-white p-6 md:p-8 hover:bg-[#1B3A8C] hover:text-white transition-all duration-300 group shadow-md hover:shadow-xl hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: card.delay }}
            >
              {card.premium && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#22C55E] text-white text-xs font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-sm">
                  Premium
                </div>
              )}
              <h3 className="font-bold text-xl text-[#1B3A8C] group-hover:text-white mb-4 transition-colors">
                {card.icon} {card.title}
              </h3>
              <ul className="space-y-2">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#22C55E] font-bold bg-white rounded-full w-5 h-5 flex items-center justify-center shrink-0 shadow-sm border border-gray-100 mt-0.5 text-xs group-hover:bg-[#22C55E] group-hover:text-white transition-colors">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 501c3 box */}
        <motion.div
          className="bg-[#1B3A8C] rounded-3xl p-8 md:p-10 text-white text-center max-w-2xl mx-auto mt-10 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="font-bold text-xl mb-3">{t('sp.nonprofit.title')}</p>
          <p className="text-white/75 font-medium leading-relaxed text-sm">
            {t('sp.nonprofit.desc')}
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 10 — CTA / CLOSING
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] flex flex-col justify-center px-6 py-24 bg-[#1B3A8C] overflow-hidden">
        {/* Parallax field bg */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.imgur.com/0uPLpLd.png"
            alt=""
            className="w-full h-full object-cover grayscale opacity-30"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#1B3A8C]/75" />
        </div>

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full gap-8">
          <motion.img
            src="https://i.imgur.com/mHzuZgK.png"
            alt="BISA logo"
            className="w-32 md:w-40 drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.h2
            className="font-[family-name:var(--font-bebas)] text-5xl md:text-8xl lg:text-9xl leading-none text-white tracking-widest drop-shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {t('sp.cta.title1')}<br />
            <span className="text-[#22C55E]">{t('sp.cta.title2')}</span>
          </motion.h2>
          <motion.p
            className="font-[family-name:var(--font-bebas)] text-2xl md:text-4xl text-white/70 tracking-widest"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            {t('sp.cta.subtitle')}
          </motion.p>

          {/* Contact card */}
          <motion.div
            className="bg-[#0F2460]/90 backdrop-blur-xl rounded-3xl p-8 md:p-10 w-full max-w-md mt-6 border border-white/10 shadow-2xl text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.45 }}
          >
            <div className="flex flex-col gap-7">
              <a href="tel:8433049414" className="flex items-center gap-5 group hover:translate-x-1 transition-transform">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1B3A8C] shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.21 12 19.79 19.79 0 0 1 1.14 3.4 2 2 0 0 1 3.11 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <p className="text-white font-bold">{t('sp.contact.info')}</p>
                  <p className="text-white/70 text-sm">843-304-9414</p>
                </div>
              </a>

              <a href="https://www.bilusoccer.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group hover:translate-x-1 transition-transform">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1B3A8C] shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <div>
                  <p className="text-white font-bold">{t('sp.contact.more')}</p>
                  <p className="text-white/70 text-sm">www.bilusoccer.com</p>
                </div>
              </a>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-white rounded-xl overflow-hidden shrink-0 shadow-md p-1 border-2 border-white">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.bilusoccer.com&color=1B3A8C&bgcolor=ffffff"
                    alt="QR Code to bilusoccer.com"
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <p className="text-white font-bold">{t('sp.contact.visit')}</p>
                  <p className="text-white/50 text-xs">{t('sp.contact.scan')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}