import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PROGRAMS } from '@/lib/site';

/** Internal links from a program page to the other programs, tryouts and contact. */
export default function RelatedPrograms({ current }: { current: string }) {
  const others = PROGRAMS.filter((p) => p.slug !== current);

  return (
    <nav aria-label="Other BISA programs" className="bg-black border-t border-white/5 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#CCFF00] font-bold uppercase tracking-[0.3em] text-xs mb-3">Keep exploring</p>
        <h2 className="font-bebas text-4xl md:text-5xl text-white tracking-widest uppercase mb-10">
          More BISA Programs
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {others.map((p) => (
            <li key={p.slug}>
              <Link
                href={p.path}
                className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 transition-colors hover:border-[#CCFF00]/60"
              >
                <span>
                  <span className="block text-[#CCFF00] text-xs font-bold uppercase tracking-widest mb-2">{p.ages}</span>
                  <span className="block font-bebas text-2xl tracking-wide text-white mb-2">{p.name}</span>
                  <span className="block text-sm text-white/60 leading-relaxed">{p.summary}</span>
                </span>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white group-hover:text-[#CCFF00]">
                  View program <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-white/60 text-sm">
          Not sure which program fits?{' '}
          <Link href="/programs" className="text-[#CCFF00] hover:underline">Compare all programs</Link>,{' '}
          <Link href="/tryouts" className="text-[#CCFF00] hover:underline">see tryout info</Link> or{' '}
          <Link href="/contact" className="text-[#CCFF00] hover:underline">contact the club</Link>.
        </p>
      </div>
    </nav>
  );
}
