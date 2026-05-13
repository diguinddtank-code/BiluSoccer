'use client';

import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';

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
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useParallax(heroScroll, 120);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  return (
    <main className="bg-white text-gray-800 font-[family-name:var(--font-inter)] selection:bg-[#22C55E] selection:text-white overflow-x-hidden">

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
          className="relative z-10 flex flex-col items-center justify-center flex-grow px-6 pt-20 pb-12 text-center"
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
            CLUB SPONSORSHIP<br />
            <span className="text-[#22C55E]">PACKAGES</span>
          </motion.h1>

          {/* Scroll indicator */}
          <motion.div
            className="mt-12 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <span className="text-white/50 text-xs tracking-widest uppercase font-bold">Scroll to explore</span>
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
            &ldquo;You&rsquo;re not just placing your logo on the field — you&rsquo;re opening doors for talented young players who, thanks to your support, can pursue their dreams and build a better life through sports.&rdquo;
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 2 — MISSION
      ═══════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-32 px-6 text-center flex flex-col items-center overflow-hidden">
        <motion.div
          className="flex flex-col items-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src="https://i.imgur.com/mHzuZgK.png" alt="BISA Logo" className="w-24 md:w-32 mb-10 drop-shadow-md" />
          <h2 className="font-[family-name:var(--font-bebas)] text-[#1B3A8C] text-5xl md:text-7xl tracking-wide mb-8 leading-none">
            Help Change Lives<br />Through Sports!
          </h2>
          <div className="text-gray-500 text-lg md:text-xl space-y-5 mb-12 leading-relaxed">
            <p>Many children can only play soccer thanks to the support of sponsors.</p>
            <p>Your brand can be part of this journey, gaining strong visibility while funding scholarships that make dreams possible.</p>
            <p>We offer exclusive opportunities to showcase your brand while supporting the athletic and social development of young players.</p>
          </div>
          <SectionPill>BISA · BILU INTERNACIONAL SOCCER ACADEMY</SectionPill>
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
              More Than Sponsorship.<br />
              <span className="text-[#22C55E]">It&rsquo;s Transformation.</span>
            </h2>
            <p className="text-gray-600 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              By becoming a sponsor, you&rsquo;re not only supporting the academy — you&rsquo;re helping BISA continue its mission of creating real opportunities for children around the world.
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
            Thanks to sponsor support, BISA has grown from $7,214 in financial aid to over $50,000 this season.
          </motion.p>

          {/* Stat cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[
              { season: '2023/24 Season', value: '$7,214', highlight: false, delay: 0.1 },
              { season: '2024/25 Season', value: '$16,243', highlight: false, delay: 0.2 },
              { season: '2025/26 Season', value: '$50,153', highlight: true, delay: 0.3, badge: 'Current Season' },
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
            Each contribution helps children from different countries access soccer, education, and life-changing experiences.
          </motion.p>

          {/* Bar Chart */}
          <motion.div
            className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-center font-bold text-[#1B3A8C] uppercase tracking-widest text-xs mb-10">
              Financial Aid — Donations, Discounts &amp; Scholarships
            </h3>
            <div className="relative h-56 w-full flex items-end justify-around px-4 pb-8">
              {/* Guide lines */}
              {[0, 25, 50, 75, 100].map((pct) => (
                <div
                  key={pct}
                  className="absolute left-0 right-0 border-t border-gray-100"
                  style={{ bottom: `calc(2rem + ${pct}% * (100% - 2rem) / 100)` }}
                />
              ))}
              {/* Bar 1 */}
              <div className="relative flex flex-col items-center justify-end h-full w-[22%] max-w-20 group">
                <div className="absolute -top-7 text-xs font-bold text-[#1B3A8C] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity whitespace-nowrap">$7,214</div>
                <motion.div
                  className="w-full bg-[#1B3A8C] rounded-t-lg"
                  initial={{ height: 0 }}
                  whileInView={{ height: '13%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                />
                <div className="absolute -bottom-7 text-xs font-bold text-gray-500">23/24</div>
              </div>
              {/* Bar 2 */}
              <div className="relative flex flex-col items-center justify-end h-full w-[22%] max-w-20 group">
                <div className="absolute -top-7 text-xs font-bold text-[#1B3A8C] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity whitespace-nowrap">$16,243</div>
                <motion.div
                  className="w-full bg-[#1B3A8C] rounded-t-lg"
                  initial={{ height: 0 }}
                  whileInView={{ height: '30%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                />
                <div className="absolute -bottom-7 text-xs font-bold text-gray-500">24/25</div>
              </div>
              {/* Bar 3 stacked */}
              <div className="relative flex flex-col items-center justify-end h-full w-[22%] max-w-20 group">
                <div className="absolute -top-7 text-xs font-bold text-[#22C55E] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity whitespace-nowrap">$50,153</div>
                <motion.div
                  className="w-full flex flex-col justify-end rounded-t-lg overflow-hidden"
                  initial={{ height: 0 }}
                  whileInView={{ height: '91%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                >
                  <div className="w-full bg-[#22C55E]" style={{ height: '10%' }} />
                  <div className="w-full bg-[#1B3A8C]" style={{ height: '90%' }} />
                </motion.div>
                <div className="absolute -bottom-7 text-xs font-bold text-gray-800">25/26</div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[#1B3A8C]" />
                <span className="text-xs text-gray-500 font-medium">Actual amount</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[#22C55E]" />
                <span className="text-xs text-gray-500 font-medium">Projected amount</span>
              </div>
            </div>
          </motion.div>

          <SectionPill>BISA · BILU INTERNACIONAL SOCCER ACADEMY</SectionPill>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 4 — BANNER SPONSORSHIP
      ═══════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24 px-4 md:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch min-h-[580px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-[#F8F9FC]">
            
            {/* Left — Text Side */}
            <motion.div
              className="flex flex-col justify-center p-8 md:p-14 order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 bg-[#1B3A8C]/5 text-[#1B3A8C] text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6 self-start border border-[#1B3A8C]/10">
                <span className="w-2 h-2 rounded-full bg-[#1B3A8C] animate-pulse" />
                Sponsorship Opportunity
              </span>
              <h2 className="font-[family-name:var(--font-bebas)] text-[#1B3A8C] text-5xl md:text-7xl mb-4 tracking-wide leading-none">
                Banner<br />Sponsorship
              </h2>
              <p className="text-gray-500 mb-8 font-medium leading-relaxed max-w-md">
                Strategically positioned 8&apos; x 4&apos; banner at our training field, seen daily by parents, athletes, and the whole local community.
              </p>
              <ul className="grid grid-cols-1 gap-4 mb-10">
                {[
                  "Banner – 8' x 4' size",
                  'Strategically positioned at the field',
                  'Seen daily by parents and visitors',
                  'QR Code for direct website access',
                  'Association with youth development',
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
                  <div className="text-[10px] uppercase opacity-70 mb-0.5 tracking-tighter">Packages starting at</div>
                  <div className="text-xl">$1,500 / Season</div>
                </div>
              </div>
            </motion.div>

            {/* Right — Immersive Mockup Side */}
            <motion.div
              className="relative order-1 md:order-2 min-h-[420px] md:min-h-0 overflow-hidden bg-white flex items-center justify-center p-6 md:p-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {/* Subtle background element */}
              <div className="absolute inset-0 bg-[#1B3A8C]/[0.02] pointer-events-none" />
              
              {/* Mockup Integration */}
              <motion.div
                className="relative z-10 w-full max-w-[480px]"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src="https://i.imgur.com/6BQ7rrA.png"
                  alt="Banner Mockup"
                  className="w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.03]"
                />
                {/* Visual shadow anchor */}
                <div className="absolute -bottom-6 left-[10%] right-[10%] h-8 bg-[#1B3A8C]/5 blur-2xl rounded-full z-0" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 5 — FLAG SPONSORSHIP
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
              {/* Subtle background element */}
              <div className="absolute inset-0 bg-[#1B3A8C]/[0.02] pointer-events-none" />
              
              {/* Mockup Integration */}
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
                {/* Visual shadow anchor */}
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
                Premium Branding
              </span>
              <h2 className="font-[family-name:var(--font-bebas)] text-[#1B3A8C] text-5xl md:text-7xl mb-4 tracking-wide leading-none">
                Flag<br />Sponsorship
              </h2>
              <p className="text-gray-500 mb-8 font-medium leading-relaxed max-w-md">
                A high-visibility vertical flag featuring your brand, prominently displayed at the training center and taken to every club match.
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
                  <div className="text-[10px] uppercase opacity-90 mb-0.5 tracking-tighter">Investment value</div>
                  <div className="text-xl">$2,500 / Season</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 6 — HUDL LIVE STREAM
      ═══════════════════════════════════════════════ */}
      <section className="bg-[#1B3A8C] py-20 md:py-32 px-6 text-white relative overflow-hidden">
        {/* Glow blobs */}
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
              🎥 Live Broadcast Sponsorship
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl tracking-wide leading-none mb-6">
              Hudl Live Stream<br />Banner Sponsor
            </h2>
            <p className="text-white/75 max-w-2xl mx-auto text-lg leading-relaxed">
              Put your business front and center during every live-streamed game. Your logo and brand banner will be displayed on our Hudl broadcasts, reaching players, families, fans, and supporters throughout the season.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9 }}
            >
              <ul className="space-y-5 mb-10">
                {[
                  'Banner/logo placement on live-streamed games',
                  'Exposure to families, fans, and online viewers',
                  'Recognition as an official club partner',
                  'Community-focused marketing opportunity',
                  'Repeated visibility throughout the season',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <WhiteCheck />
                    <span className="text-white font-medium text-lg leading-tight pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-full bg-white text-[#1B3A8C] font-black px-8 py-3 inline-block shadow-lg hover:bg-gray-100 transition-colors text-base">
                Investment: $1,600/year
              </div>
            </motion.div>

            {/* LIVE mockup card */}
            <motion.div
              className="bg-[#0F2460] rounded-2xl p-4 shadow-2xl border border-white/10"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9 }}
            >
              <div className="relative rounded-xl overflow-hidden aspect-video mb-3 bg-black">
                <div className="absolute top-3 left-3 z-20 flex items-center bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full px-3 py-1.5 gap-2 shadow-lg">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-white"
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  />
                  LIVE
                </div>
                <img
                  src="https://i.imgur.com/AwXm3Ku.png"
                  alt="Hudl broadcast mockup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-10 pb-3 px-3">
                  <div className="bg-white/90 rounded-md py-2 px-3 text-center text-[#1B3A8C] text-xs font-black tracking-widest w-full">
                    YOUR COMPANY LOGO HERE
                  </div>
                </div>
              </div>
              <p className="text-center text-xs text-white/40 pt-1">
                Powered by{' '}
                <a href="https://www.hudl.com" target="_blank" rel="noopener noreferrer" className="text-white/70 font-bold hover:text-white transition-colors">
                  Hudl
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 7 — JERSEY SPONSORSHIP
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
              👕 Official Jersey Sponsorship
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-[#1B3A8C] text-5xl md:text-7xl tracking-wide leading-none">
              Official Jersey<br />Sponsorship
            </h2>
          </motion.div>

          {/* Jersey images — side by side on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {[
              { src: 'https://i.imgur.com/UBxpH2k.png', alt: 'BISA jersey front view with sponsor logo placement', label: 'Front — Your Logo Here', delay: 0 },
              { src: 'https://i.imgur.com/x6BB0Oi.png', alt: 'BISA jersey back view with sponsor logo placement', label: 'Back — Your Logo Here', delay: 0.15 },
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

          {/* Benefits */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
          >
            {[
              'Your logo on the competition jerseys — high visibility all season',
              'Constant presence in photos, videos and game coverage',
              'Direct support to children receiving scholarships to participate',
              'Strengthen your image as a brand committed to the community',
            ].map((item) => (
              <div key={item} className="flex items-start gap-4">
                <GreenCheck />
                <span className="text-gray-700 font-medium leading-relaxed">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Price badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-full bg-[#1B3A8C] text-white px-6 py-3 font-bold shadow-md text-sm text-center hover:bg-blue-800 transition-colors">
              Sleeve: $2,500/yr · 2-year min · Total $5,000
            </div>
            <div className="rounded-full bg-[#1B3A8C] text-white px-6 py-3 font-bold shadow-md text-sm text-center outline outline-2 outline-offset-2 outline-[#1B3A8C]/30 hover:bg-blue-800 transition-colors">
              Shirt: $5,000/yr · 2-year min · Total $10,000
            </div>
          </motion.div>
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
              Community & Growth
            </span>
            <motion.h2
              className="font-[family-name:var(--font-bebas)] text-white text-6xl md:text-8xl tracking-tight leading-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Why Partner With <span className="text-[#22C55E]">BISA?</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'High Exposure',
                desc: 'Gain local brand exposure all season long to hundreds of families.',
                icon: '🚀',
                delay: 0.1
              },
              {
                title: 'Youth Impact',
                desc: 'Support the athletic and social development of a diverse community.',
                icon: '⚽',
                delay: 0.2
              },
              {
                title: 'Family Network',
                desc: 'Connect your business directly with motivated parents and local leaders.',
                icon: '👨‍👩‍👧‍👦',
                delay: 0.3
              },
              {
                title: 'Exclusive Access',
                desc: 'Limited sponsorship slots ensure your brand remains prominent.',
                icon: '💎',
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
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-inner ${
                  card.highlight ? 'bg-white/20' : 'bg-[#22C55E]/20'
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
                { label: 'Athletes', val: '250+' },
                { label: 'Families', val: '400+' },
                { label: 'Weekly Reach', val: '2k+' },
                { label: 'Social Coverage', val: '100%' },
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
            Choose Your Package
          </h2>
          <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
            Exclusive opportunities to showcase your brand while supporting the athletic and social development of young players.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto flex flex-col gap-5 text-left">
          {[
            {
              icon: '🏟️', title: 'Banner Sponsor',
              items: ['Initial investment: $1,500', 'Annual renewal: $1,000'],
              delay: 0.1,
            },
            {
              icon: '🚩', title: 'Flag Sponsor',
              items: ['Initial investment: $2,500', 'Annual renewal: $2,000'],
              delay: 0.2,
            },
            {
              icon: '🎥', title: 'Hudl Live Stream Banner Sponsor',
              items: ['Investment: $1,600/year', 'Logo/banner on all live-streamed games', 'Reaches fans and online viewers all season'],
              delay: 0.3,
            },
            {
              icon: '👕', title: 'Sleeve Sponsor',
              items: ['Investment: $2,500/year — minimum 2-year agreement', 'Total Investment: $5,000', 'Payment plans available'],
              delay: 0.4,
            },
            {
              icon: '👕', title: 'Shirt Sponsor',
              items: ['Investment: $5,000/year — minimum 2-year agreement', 'Total Investment: $10,000', 'Payment plans available'],
              delay: 0.5, premium: true,
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
          <p className="font-bold text-xl mb-3">501(c)(3) Nonprofit Organization</p>
          <p className="text-white/75 font-medium leading-relaxed text-sm">
            Bilu International Soccer Academy is a registered 501(c)(3) nonprofit. Any donations or sponsorships may be tax-deductible. Feel free to reach out for a receipt or letter for tax purposes.
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
            YOUR LOGO WILL STAND<br />
            <span className="text-[#22C55E]">BESIDE SPORTS EXCELLENCE</span>
          </motion.h2>
          <motion.p
            className="font-[family-name:var(--font-bebas)] text-2xl md:text-4xl text-white/70 tracking-widest"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            CONTACT US TO GUARANTEE YOUR SPACE!
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
                  <p className="text-white font-bold">Contact Information</p>
                  <p className="text-white/70 text-sm">843-304-9414</p>
                </div>
              </a>

              <a href="https://www.bilusoccer.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group hover:translate-x-1 transition-transform">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1B3A8C] shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <div>
                  <p className="text-white font-bold">More Information</p>
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
                  <p className="text-white font-bold">Visit our website</p>
                  <p className="text-white/50 text-xs">Scan to learn more</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}