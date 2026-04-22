
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const REGISTER_URL = "https://playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS05OTEtMTc4MTkwNTQwNXxvL1ZERU5WK3NXeVh6eWFNTFBtdUZIS2pOZUVWM0ZnTmlIdnhocTJHV2pvPQ==";

function Ticker() {
  const items = [
    "Elite Program", 
    "U15 to U18", 
    "College Pathways", 
    "Pro Exposure", 
    "Showcase Events", 
    "High Performance"
  ];
  const tripleItems = [...items, ...items, ...items];

  return (
    <div className="bg-[#CCFF00] overflow-hidden whitespace-nowrap py-4 border-y border-black">
      <motion.div
        className="inline-flex items-center gap-8"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
      >
        {tripleItems.map((text, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="font-bebas text-2xl md:text-3xl text-black tracking-widest uppercase">{text}</span>
            <span className="text-black/30 font-bold">·</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/10 hover:border-[#CCFF00]/40 transition-colors bg-[#0a0a0a]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-bebas text-xl md:text-2xl text-white tracking-wide">{question}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          className="text-[#CCFF00] ml-4 shrink-0 inline-flex"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-gray-400 font-medium">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const flags = ["br","us","mx","co","hn","gt","ec","pe","pt","fr","ng","ma","jp","de","ar","uy","cr","pa","do","ve","cu","cl","gb"];

export default function EliteProgramPage() {
  const programCards = [
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>,
      title: "U15–U18 Roster",
      desc: "The pinnacle of BISA development for young adults."
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
      title: "Showcase Access",
      desc: "Participation in premier regional and national showcases."
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: "College Prep",
      desc: "Guidance and support for NCAA recruitment."
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M18.75 4.236c.982.143 1.954.317 2.916.52a6.003 6.003 0 01-5.395 4.972m0 0a8.001 8.001 0 00-1.027-3.238 8.001 8.001 0 00-3.92-3.238 8.001 8.001 0 00-1.027 3.238 8.001 8.001 0 003.92 3.238" /></svg>,
      title: "Professional Environment",
      desc: "Standards mapped directly to professional soccer academies."
    }
  ];

  const features = [
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>,
      title: "Tactical Periodization",
      desc: "Advanced global elite methodology designed for peak performance."
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: "Strength & Conditioning",
      desc: "Integrated athletic training to withstand demanding schedules."
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>,
      title: "Recruitment Support",
      desc: "Direct liaison with college networks and scouting databases."
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M18.75 4.236c.982.143 1.954.317 2.916.52a6.003 6.003 0 01-5.395 4.972m0 0a8.001 8.001 0 00-1.027-3.238 8.001 8.001 0 00-3.92-3.238 8.001 8.001 0 00-1.027 3.238 8.001 8.001 0 003.92 3.238" /></svg>,
      title: "High Level Competition",
      desc: "Playing against the best to bring out the best."
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
      title: "Performance Analysis",
      desc: "In-depth video breakdowns and situational analysis."
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
      title: "Leadership Dev",
      desc: "Building captains on the field and leaders off it."
    }
  ];

  const steps = [
    { num: "01", title: "Submit Profile", desc: "Register your player profile and background." },
    { num: "02", title: "Tryout", desc: "Participate in rigorous assessment sessions." },
    { num: "03", title: "Selection", desc: "Accept your roster spot in the Elite squad." },
    { num: "04", title: "Commitment", desc: "Sign on for the season and begin intense preparation." }
  ];

  const faqs = [
    { q: "Is this only for players wanting to go pro?", a: "No, it is for any highly committed player looking to maximize their potential, whether for college or professional levels." },
    { q: "How many showcases do we attend?", a: "Typically 2-4 major showcases a year, dependent on team level and exact age group." },
    { q: "Do you help with college recruiting?", a: "Yes! We actively guide players on putting together highlight reels and communicating with coaches." },
    { q: "What is the practice intensity?", a: "High. Training requires maximum focus and physical readiness, mirroring collegiate requirements." }
  ];

  return (
    <main className="text-white selection:bg-[#CCFF00] selection:text-black">
      
      {/* 1. HERO */}
      <section className="relative min-h-[100svh] lg:min-h-screen pt-20 lg:pt-32 pb-20 flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-black">
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-20"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}
        />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#CCFF00_1px,transparent_1px),linear-gradient(to_bottom,#CCFF00_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]" />
        
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center mt-6 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-12"
          >
            <Image 
              src="https://bilusoccer.com/wp-content/uploads/2025/03/h2-3.png" 
              alt="BISA Logo" 
              width={160} 
              height={160} 
              className="w-24 sm:w-32 md:w-40 object-contain drop-shadow-[0_0_30px_rgba(204,255,0,0.2)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-[#CCFF00]/40 rounded-full px-4 py-1.5 md:px-6 md:py-2 mb-6 md:mb-8 bg-black/50 backdrop-blur-sm"
          >
            <span className="text-[#CCFF00] font-bold text-[10px] sm:text-xs md:text-sm tracking-[0.3em] uppercase">
              U15 TO U18 · PROFESSIONAL AND COLLEGE PREPARATION
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full flex-col font-bebas flex mb-4 sm:mb-6 md:mb-8 leading-[0.85]"
          >
            <h1 className="text-[5.5rem] leading-[0.85] sm:text-7xl md:text-[8rem] lg:text-[10rem] text-white w-full tracking-tighter m-0 p-0 break-words">BISA</h1>
            <h1 className="text-[5.5rem] leading-[0.85] sm:text-7xl md:text-[8rem] lg:text-[10rem] text-[#CCFF00] w-full tracking-tighter m-0 p-0 break-words">ELITE</h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium mb-12 px-4"
          >
            Top-tier development and college/pro exposure for elite athletes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full px-4"
          >
            <Link 
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#CCFF00] text-black px-10 py-5 rounded-sm font-black uppercase tracking-widest text-lg hover:bg-white transition-colors duration-300 flex items-center justify-center whitespace-nowrap"
            >
              SECURE YOUR SPOT →
            </Link>
            <Link 
              href="#program"
              className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-sm font-black uppercase tracking-widest text-lg hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center whitespace-nowrap"
            >
              SEE PROGRAM DETAILS
            </Link>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 pointer-events-none"
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </section>

      {/* 2. TICKER */}
      <Ticker />

      {/* 3. PROGRAM OVERVIEW */}
      <section id="program" className="bg-[#0a0a0a] py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#CCFF00] font-bold text-sm tracking-[0.3em] uppercase block mb-4">
              The Program
            </span>
            <h2 className="font-bebas text-5xl md:text-7xl text-white tracking-widest uppercase">
              PROGRAM OVERVIEW
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {programCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 border border-white/10 rounded-xl hover:border-[#CCFF00]/60 hover:shadow-[0_0_30px_rgba(204,255,0,0.06)] transition-all bg-black/40 group cursor-default"
              >
                <div className="text-[#CCFF00] mb-6 group-hover:scale-110 transition-transform origin-left">
                  {card.icon}
                </div>
                <h3 className="font-bebas text-3xl tracking-wide text-white mb-2">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed font-medium">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURES */}
      <section className="bg-black py-32 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-bebas text-4xl md:text-6xl text-white tracking-widest uppercase">
              WHAT YOUR CHILD WILL EXPERIENCE
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 border border-white/10 rounded-xl hover:border-[#CCFF00]/50 hover:scale-[1.02] transition-all bg-[#0a0a0a]"
              >
                <div className="text-[#CCFF00] mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-bebas text-2xl tracking-wide text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FLAGS / SOCIAL PROOF */}
      <section className="bg-[#0a0a0a] py-24 px-0">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-bebas text-4xl md:text-5xl text-white tracking-widest uppercase mb-4">
              BISA <span className="text-[#CCFF00]">GLOBAL DNA</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Our methodology draws from the best soccer cultures around the world.
            </p>
          </motion.div>
        </div>

                <div 
          className="relative w-full overflow-hidden mt-8 max-w-[100vw] mx-auto flex flex-col gap-4"
          style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
        >
          <motion.div
            className="flex w-max gap-4 py-2"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {[...flags, ...flags].map((code, i) => (
              <div key={"row1-" + code + "-" + i} className="shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={"https://flagcdn.com/w80/" + code + ".png"} 
                  alt={code + " flag"}
                  className="w-16 h-11 md:w-20 md:h-14 object-cover rounded shadow-lg filter hover:brightness-125 hover:scale-105 transition-all"
                />
              </div>
            ))}
          </motion.div>
          <motion.div
            className="flex w-max gap-4 py-2"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          >
            {[...[...flags].reverse(), ...[...flags].reverse()].map((code, i) => (
              <div key={"row2-" + code + "-" + i} className="shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={"https://flagcdn.com/w80/" + code + ".png"} 
                  alt={code + " flag"}
                  className="w-16 h-11 md:w-20 md:h-14 object-cover rounded shadow-lg filter hover:brightness-125 hover:scale-105 transition-all"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. HOW TO JOIN */}
      <section className="bg-black py-32 px-6 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="font-bebas text-5xl md:text-7xl text-white tracking-widest uppercase">
              BECOME A <span className="text-[#CCFF00]">CHAMPION</span>
            </h2>
          </motion.div>

          <div className="relative mb-20 max-w-2xl mx-auto">
            {/* Absolute Vertical Line */}
            <div className="hidden sm:block absolute left-[31px] top-4 bottom-4 w-px bg-[#CCFF00]/20 z-0"></div>

            <div className="flex flex-col gap-12">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start relative z-10"
                >
                  <div className="font-bebas text-4xl text-[#CCFF00] w-16 h-16 flex items-center justify-center bg-black shrink-0 rounded-full border border-white/10 sm:border-none shadow-[0_0_20px_rgba(204,255,0,0.1)] sm:shadow-none">
                    {step.num}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-bebas text-3xl text-white tracking-wide mb-2">{step.title}</h3>
                    <p className="text-gray-400 font-medium text-lg leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Link 
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#CCFF00] text-black px-16 py-6 rounded-sm font-black uppercase tracking-widest text-xl hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(204,255,0,0.2)]"
            >
              REGISTER FOR ELITE
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-[#0a0a0a] py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-bebas text-5xl md:text-6xl text-white tracking-widest uppercase">
              STILL HAVE QUESTIONS?
            </h2>
          </motion.div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <FAQItem question={faq.q} answer={faq.a} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 text-lg">
              Contact us directly at <a href="mailto:info@bilusoccer.com" className="text-[#CCFF00] hover:underline hover:text-white transition-colors">info@bilusoccer.com</a>
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
