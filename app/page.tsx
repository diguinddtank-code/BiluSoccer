import HeroSection from '@/components/HeroSection';
import StatsBar from '@/components/StatsBar';
import ElitePathway from '@/components/ElitePathway';
import OfficialLeagues from '@/components/OfficialLeagues';
import WorldLanguages from '@/components/WorldLanguages';
import ProgramsGrid from '@/components/ProgramsGrid';
import CoachesGrid from '@/components/CoachesGrid';
import AcademyCTA from '@/components/AcademyCTA';
import ExperienceStrip from '@/components/ExperienceStrip';
import ClubGallery from '@/components/ClubGallery';
import LocationsSection from '@/components/LocationsSection';
import LeadForm from '@/components/LeadForm';
import SponsorsSection from '@/components/SponsorsSection';
import ProjetoBiluCTA from '@/components/ProjetoBiluCTA';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ElitePathway />
      <OfficialLeagues />
      <div className="hidden lg:block">
        <SponsorsSection />
      </div>
      <ExperienceStrip />
      <ClubGallery />
      <div className="block lg:hidden">
        <SponsorsSection />
      </div>
      <ProgramsGrid />
      <WorldLanguages />
      <CoachesGrid />
      <LocationsSection />
      <AcademyCTA />
      <LeadForm />
      <ProjetoBiluCTA />
      <FinalCTA />
    </>
  );
}
