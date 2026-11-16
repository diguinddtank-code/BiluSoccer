'use client';

import ProgramPage, { type ProgramData } from '@/components/program/ProgramPage';
import { useLanguage } from '@/contexts/LanguageContext';

// Summer Camps keeps its EN/PT/ES words (lib/translations.ts, keys "sc.*");
// layout and motion live in components/program/ProgramPage.tsx.
export default function SummerCampsPage() {
  const { t } = useLanguage();
  const n = [1, 2, 3, 4];
  const six = [1, 2, 3, 4, 5, 6];

  const data: ProgramData = {
    kicker: t('sc.hero.badge'),
    titleTop: t('sc.hero.title1'),
    title: t('sc.hero.title2'),
    subtitle: t('sc.hero.subtitle'),
    agesNote: t('sc.ov.1.title'),
    ticker: six.map((i) => t(`sc.ticker.${i}`)),
    overview: n.map((i) => ({ title: t(`sc.ov.${i}.title`), desc: t(`sc.ov.${i}.desc`) })),
    features: six.map((i) => ({ title: t(`sc.feat.${i}.title`), desc: t(`sc.feat.${i}.desc`) })),
    steps: n.map((i) => ({ num: t(`sc.step.${i}.num`), title: t(`sc.step.${i}.title`), desc: t(`sc.step.${i}.desc`) })),
    faqs: six.map((i) => ({ q: t(`sc.faq.${i}.q`), a: t(`sc.faq.${i}.a`) })),
    registerLabel: t('sc.join.btn'),
    labels: {
      heroCta: t('sc.hero.btn1'),
      heroCta2: t('sc.hero.btn2'),
      overview: t('sc.overview.badge'),
      features: t('sc.features.title'),
      globalA: t('sc.global.title1'),
      globalB: t('sc.global.title2'),
      globalDesc: t('sc.global.desc'),
      joinA: t('sc.join.title1'),
      joinB: t('sc.join.title2'),
      faq: t('sc.faq.title'),
    },
    cta: {
      badge: t('sc.cta.badge'),
      title: t('sc.cta.title'),
      subtitle: t('sc.cta.subtitle'),
      button: t('sc.cta.btn'),
      micro: t('sc.cta.micro'),
    },
  };

  return <ProgramPage data={data} />;
}
