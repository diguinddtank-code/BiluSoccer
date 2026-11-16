import ProgramPage, { type ProgramData } from '@/components/program/ProgramPage';
import { PROGRAM_FAQS } from '@/lib/faqs';

// Words for this program; layout and motion live in components/program/ProgramPage.tsx.
const DATA: ProgramData = {
  kicker: "U15 to U18 · Professional and college preparation",
  titleTop: "BISA",
  title: "ELITE",
  subtitle: "Top-tier development and college/pro exposure for elite athletes.",
  ticker: [
    "Elite Program",
    "U15 to U18",
    "College Pathways",
    "Pro Exposure",
    "Showcase Events",
    "High Performance"
  ],
  overview: [
    {
      "title": "U15–U18 Roster",
      "desc": "The pinnacle of BISA development for young adults."
    },
    {
      "title": "Showcase Access",
      "desc": "Participation in premier regional and national showcases."
    },
    {
      "title": "College Prep",
      "desc": "Guidance and support for NCAA recruitment."
    },
    {
      "title": "Professional Environment",
      "desc": "Standards mapped directly to professional soccer academies."
    }
  ],
  features: [
    {
      "title": "Tactical Periodization",
      "desc": "Advanced global elite methodology designed for peak performance."
    },
    {
      "title": "Strength & Conditioning",
      "desc": "Integrated athletic training to withstand demanding schedules."
    },
    {
      "title": "Recruitment Support",
      "desc": "Direct liaison with college networks and scouting databases."
    },
    {
      "title": "High Level Competition",
      "desc": "Playing against the best to bring out the best."
    },
    {
      "title": "Performance Analysis",
      "desc": "In-depth video breakdowns and situational analysis."
    },
    {
      "title": "Leadership Dev",
      "desc": "Building captains on the field and leaders off it."
    }
  ],
  steps: [
    {
      "num": "01",
      "title": "Submit Profile",
      "desc": "Register your player profile and background."
    },
    {
      "num": "02",
      "title": "Tryout",
      "desc": "Participate in rigorous assessment sessions."
    },
    {
      "num": "03",
      "title": "Selection",
      "desc": "Accept your roster spot in the Elite squad."
    },
    {
      "num": "04",
      "title": "Commitment",
      "desc": "Sign on for the season and begin intense preparation."
    }
  ],
  registerLabel: "REGISTER FOR ELITE",
  ages: { from: 15, to: 18, label: 'U15–U18' },
  faqs: PROGRAM_FAQS['elite'],
};

export default function EliteProgramPage() {
  return <ProgramPage data={DATA} />;
}
