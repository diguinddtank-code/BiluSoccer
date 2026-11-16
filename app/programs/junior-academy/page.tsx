import ProgramPage, { type ProgramData } from '@/components/program/ProgramPage';
import { PROGRAM_FAQS } from '@/lib/faqs';

// Words for this program; layout and motion live in components/program/ProgramPage.tsx.
const DATA: ProgramData = {
  kicker: "U8 to U12 · Accelerated technical development",
  titleTop: "JUNIOR",
  title: "ACADEMY",
  subtitle: "Accelerated development program focused on technical mastery and game intelligence.",
  ticker: [
    "Junior Academy",
    "U8 to U12",
    "Accelerated Growth",
    "Elite Environment",
    "Technical Mastery",
    "Tactical IQ"
  ],
  overview: [
    {
      "title": "U8–U12 Age Groups",
      "desc": "The golden age of learning and technical acquisition."
    },
    {
      "title": "Intensive Training",
      "desc": "Designed to challenge players out of their comfort zone safely."
    },
    {
      "title": "Game Intelligence",
      "desc": "Teaching players not just how to kick, but how to think."
    },
    {
      "title": "Competitive Play",
      "desc": "Regular matches against top regional opponents."
    }
  ],
  features: [
    {
      "title": "Elite Coaching Staff",
      "desc": "Specialized youth coaches who understand the psychological needs of U8-U12."
    },
    {
      "title": "Advanced Technique",
      "desc": "Mastery of complex movements, turns, and striking techniques."
    },
    {
      "title": "Small Sided Games",
      "desc": "Extensive use of small-sided play to maximize decision making."
    },
    {
      "title": "Video Analysis",
      "desc": "Introduction to tactical reviews to enhance game understanding."
    },
    {
      "title": "Growth Mindset",
      "desc": "Fostering an environment where mistakes are seen as learning opportunities."
    },
    {
      "title": "Next Level Prep",
      "desc": "Direct pathway and preparation for the BISA Elite program."
    }
  ],
  steps: [
    {
      "num": "01",
      "title": "Apply Now",
      "desc": "Fill out the Playmetrics registration to express interest."
    },
    {
      "num": "02",
      "title": "Tryout/Eval",
      "desc": "Attend a session to be evaluated by our technical directors."
    },
    {
      "num": "03",
      "title": "Program Invite",
      "desc": "Receive your formal invitation to join the Junior Academy."
    },
    {
      "num": "04",
      "title": "Accelerate",
      "desc": "Start training with like-minded, ambitious players."
    }
  ],
  registerLabel: "REGISTER FOR ACADEMY",
  ages: { from: 8, to: 12, label: 'U8–U12' },
  faqs: PROGRAM_FAQS['junior-academy'],
};

export default function JuniorAcademyPage() {
  return <ProgramPage data={DATA} />;
}
