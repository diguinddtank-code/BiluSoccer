'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Camera, Gift, Heart, Users, ChevronDown, Globe, Trophy } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// ==========================================
// DADOS DOS COMPONENTES PARA FÁCIL ATUALIZAÇÃO
// ==========================================

const galeriaFotos = [
  { id: 1, src: null },
  { id: 2, src: null },
  { id: 3, src: null },
  { id: 4, src: null },
  { id: 5, src: null },
  { id: 6, src: null },
  { id: 7, src: null },
  { id: 8, src: null },
  { id: 9, src: null },
];

const brasilStates = [
  { state: 'São Paulo', centers: 6, volunteers: 65 },
  { state: 'Ceará', centers: 3, volunteers: 25 },
  { state: 'Minas Gerais', centers: 2, volunteers: 10 },
  { state: 'Piauí', centers: 1, volunteers: 15 },
  { state: 'Bahia', centers: 1, volunteers: 12 },
  { state: 'Santa Catarina', centers: 1, volunteers: 8 },
  { state: 'Pernambuco', centers: 1, volunteers: 8 },
  { state: 'Paraná', centers: 1, volunteers: 6 },
  { state: 'Espírito Santo', centers: 1, volunteers: 4 },
];

// Nomes originais são mantidos e se precisar podemos traduzir (US -> Estados Unidos / United States)
// Mas vamos assumir a lista visual original para evitar complexidade e por nomeclatura natural.
const globalCountries = [
  { name: 'Brasil', nameEn: 'Brazil', nameEs: 'Brasil', flag: '🇧🇷' },
  { name: 'Estados Unidos', nameEn: 'United States', nameEs: 'Estados Unidos', flag: '🇺🇸' },
  { name: 'Cuba', nameEn: 'Cuba', nameEs: 'Cuba', flag: '🇨🇺' },
  { name: 'Suriname', nameEn: 'Suriname', nameEs: 'Surinam', flag: '🇸🇷' },
  { name: 'Peru', nameEn: 'Peru', nameEs: 'Perú', flag: '🇵🇪' },
  { name: 'Haiti', nameEn: 'Haiti', nameEs: 'Haití', flag: '🇭🇹' },
  { name: 'Portugal', nameEn: 'Portugal', nameEs: 'Portugal', flag: '🇵🇹' },
  { name: 'Ucrânia', nameEn: 'Ukraine', nameEs: 'Ucrania', flag: '🇺🇦' },
  { name: 'Honduras', nameEn: 'Honduras', nameEs: 'Honduras', flag: '🇭🇳' },
];

// ==========================================
// COMPONENTE CONTADOR ANIMADO
// ==========================================
function CountUp({ end, suffix = "" }: { end: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let startTimestamp: number;
    const duration = 2000; // 2 seconds
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [inView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ==========================================
// PÁGINA PRINCIPAL
// ==========================================
export default function ProjetoBiluPage() {
  const { t, language } = useLanguage();

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-black z-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-[#050505]/80 to-[#050505]"></div>
          {/* Subtle green glow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#CCFF00] rounded-full blur-[200px] opacity-[0.05] pointer-events-none"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 max-w-4xl px-6 flex flex-col items-center mt-20"
        >
          <div className="w-32 h-32 md:w-48 md:h-48 relative mb-8 rounded-full shadow-[0_0_50px_rgba(204,255,0,0.2)]">
            <Image 
              src="https://i.imgur.com/V6cPinz.jpeg" 
              alt="Projeto BILU Logo"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
          
          <h1 className="font-bebas text-7xl md:text-9xl text-[#CCFF00] uppercase tracking-widest leading-[0.9] drop-shadow-2xl">
            Projeto BILU
          </h1>
          <div className="h-1 w-24 bg-[#CCFF00] my-6 md:my-8 rounded-full"></div>
          <p className="text-xl md:text-3xl text-gray-300 font-light tracking-wide max-w-2xl">
            {t('pb.hero.sub1') || 'Futebol como instrumento de'} <span className="font-bold text-white">{t('pb.hero.sub2') || 'transformação humana'}</span>
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-50 z-10"
        >
          <span className="text-xs uppercase tracking-widest mb-2 font-bold text-[#CCFF00]">{t('pb.scroll') || 'Descubra'}</span>
          <ChevronDown className="w-6 h-6 text-[#CCFF00]" />
        </motion.div>
      </section>

      {/* 2. O QUE É O PROJETO BILU */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="font-bebas text-5xl md:text-7xl text-white tracking-widest mb-8">
              {t('pb.whatis.title') || 'O Que É O '} <span className="text-[#CCFF00]">{t('pb.whatis.titleHighlight') || 'Projeto BILU?'}</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-400 font-medium leading-relaxed">
              <p>
                {t('pb.whatis.p1')}
              </p>
              <p>
                {t('pb.whatis.p2.1')} <span className="text-[#CCFF00]">{t('pb.whatis.p2.2')}</span>{t('pb.whatis.p2.3')} <span className="text-[#CCFF00]">{t('pb.whatis.p2.4')}</span>{t('pb.whatis.p2.5')}
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            {/* Placeholder / Video area */}
            <div className="relative aspect-video bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center group">
              <div className="absolute inset-0 bg-[#CCFF00]/5 group-hover:bg-[#CCFF00]/20 transition-colors duration-500 z-10 mix-blend-overlay"></div>
              <Camera className="w-16 h-16 text-[#CCFF00]/30" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] to-transparent opacity-80 pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. IMPACTO EM NÚMEROS */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-bebas text-5xl md:text-7xl text-white tracking-widest mb-4">
              {t('pb.numbers.title') || 'Impacto em Números'}
            </h2>
            <div className="w-16 h-1 bg-[#CCFF00] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {[
              { value: 10, label: t('pb.numbers.l1') || 'Países com Núcleos' },
              { value: 13, label: t('pb.numbers.l2') || 'Países com Ações Pontuais' },
              { value: 23, label: t('pb.numbers.l3') || 'Países Alcançados' },
              { value: 153, label: t('pb.numbers.l4') || 'Voluntários (Somente BR)' },
              { value: 17, label: t('pb.numbers.l5') || 'Núcleos no Brasil' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#111] p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center shadow-xl hover:border-[#CCFF00]/50 transition-colors duration-300"
              >
                <span className="font-bebas text-5xl lg:text-6xl text-[#CCFF00] mb-2 drop-shadow-[0_0_15px_rgba(204,255,0,0.3)]">
                  <CountUp end={stat.value} />
                </span>
                <span className="text-gray-400 font-bold uppercase tracking-wider text-xs sm:text-sm">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRESENÇA GLOBAL */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:flex md:items-end md:justify-between"
          >
            <div>
              <h2 className="font-bebas text-5xl md:text-7xl text-white tracking-widest mb-4">
                {t('pb.global.title')}
              </h2>
              <div className="w-16 h-1 bg-[#CCFF00] rounded-full mb-6 relative"></div>
              <p className="text-xl text-gray-400 max-w-xl">
                {t('pb.global.desc')}
              </p>
            </div>
            <Globe className="hidden md:block w-24 h-24 text-[#1a1a1a]" />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
            {globalCountries.map((country, i) => {
              const countryName = language === 'en' ? country.nameEn : language === 'es' ? country.nameEs : country.name;
              return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-4 flex items-center gap-4 hover:bg-[#111] hover:border-[#CCFF00]/30 transition-all cursor-default"
              >
                <span className="text-4xl filter drop-shadow-md">{country.flag}</span>
                <span className="font-bold text-white tracking-wide text-sm md:text-base">{countryName}</span>
              </motion.div>
            )})}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-[#111] border-l-4 border-[#CCFF00] p-6 rounded-r-xl"
          >
            <h4 className="text-[#CCFF00] font-bold uppercase tracking-widest text-sm mb-2">{t('pb.global.otherTitle')}</h4>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              {t('pb.global.otherDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. BRASIL EM DETALHES */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="font-bebas text-5xl md:text-7xl text-white tracking-widest mb-4">
              {t('pb.brazil.title')}
            </h2>
            <div className="w-16 h-1 bg-[#CCFF00] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-400">{t('pb.brazil.desc')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brasilStates.map((state, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#151515] p-6 rounded-2xl border border-white/5 flex gap-4 items-center group hover:border-[#CCFF00]/40 transition-colors"
              >
                <div className="bg-[#CCFF00]/10 text-[#CCFF00] w-12 h-12 rounded-full flex items-center justify-center font-bebas text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                  BR
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg tracking-wide uppercase">{state.state}</h3>
                  <div className="flex gap-4 text-sm text-gray-400 mt-1">
                    <span><strong className="text-white">{state.centers}</strong> {t('pb.brazil.centers')}</span>
                    <span>&bull;</span>
                    <span><strong className="text-[#CCFF00]">{state.volunteers}</strong> {t('pb.brazil.volunteers')}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. O QUE FAZEMOS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-bebas text-5xl md:text-7xl text-white tracking-widest mb-4">
              {t('pb.actions.title')}
            </h2>
            <div className="w-16 h-1 bg-[#CCFF00] rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Gift className="w-8 h-8" />, title: t('pb.actions.1.title'), desc: t('pb.actions.1.desc') },
              { icon: <Heart className="w-8 h-8" />, title: t('pb.actions.2.title'), desc: t('pb.actions.2.desc') },
              { icon: <Users className="w-8 h-8" />, title: t('pb.actions.3.title'), desc: t('pb.actions.3.desc') },
              { icon: <Globe className="w-8 h-8" />, title: t('pb.actions.4.title'), desc: t('pb.actions.4.desc') },
              { icon: <Trophy className="w-8 h-8" />, title: t('pb.actions.5.title'), desc: t('pb.actions.5.desc') },
            ].map((action, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5"
              >
                <div className="w-16 h-16 bg-[#CCFF00]/10 text-[#CCFF00] rounded-xl flex items-center justify-center mb-6">
                  {action.icon}
                </div>
                <h3 className="font-bold text-xl text-white mb-3 tracking-wide">{action.title}</h3>
                <p className="text-gray-400 leading-relaxed font-medium">{action.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GALERIA DO PROJETO */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="font-bebas text-5xl md:text-7xl text-white tracking-widest mb-4">
              {t('pb.gallery.title')}
            </h2>
            <div className="w-16 h-1 bg-[#CCFF00] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t('pb.gallery.desc')}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galeriaFotos.map((foto, i) => (
              <motion.div
                key={foto.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="aspect-square relative rounded-2xl overflow-hidden bg-[#1a1a1a] border border-white/5 group cursor-pointer"
              >
                {foto.src ? (
                  <>
                    <Image 
                      src={foto.src} 
                      alt={`Galeria Projeto BILU ${foto.id}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#CCFF00]/0 group-hover:bg-[#CCFF00]/10 transition-colors duration-500 z-10 mix-blend-overlay"></div>
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-700 group-hover:scale-105">
                    <div className="absolute inset-0 bg-[#CCFF00]/0 group-hover:bg-[#CCFF00]/10 transition-colors duration-500 z-10 mix-blend-overlay"></div>
                    <Camera className="w-12 h-12 text-[#CCFF00]/50 mb-3" />
                    <span className="text-[#CCFF00]/60 font-bold tracking-widest uppercase text-sm">{t('pb.gallery.soon')}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-32 bg-[#CCFF00] text-black text-center relative overflow-hidden">
        {/* Background glow for contrast if needed, or subtle pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4),transparent)] opacity-50"></div>
        
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-bebas text-6xl md:text-8xl tracking-widest mb-10 drop-shadow-sm text-black">
              {t('pb.cta.title')}
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="https://www.instagram.com/projetobilu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-black text-[#CCFF00] px-10 py-5 rounded-sm font-black uppercase tracking-widest text-lg hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                {t('pb.cta.btn1')}
              </Link>
              <Link 
                href="/"
                className="w-full sm:w-auto bg-transparent border-2 border-black text-black px-10 py-5 rounded-sm font-black uppercase tracking-widest text-lg hover:bg-black hover:text-[#CCFF00] transition-colors"
              >
                {t('pb.cta.btn2')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
