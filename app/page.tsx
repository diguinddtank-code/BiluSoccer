import HeroSection from '@/components/HeroSection';
import StatsBar from '@/components/StatsBar';
import ElitePathway from '@/components/ElitePathway';
import WorldLanguages from '@/components/WorldLanguages';
import ProgramsGrid from '@/components/ProgramsGrid';
import CoachesGrid from '@/components/CoachesGrid';
import TryoutsCTA from '@/components/TryoutsCTA';
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
      <ExperienceStrip />
      <ClubGallery />
      <ProgramsGrid />
      <WorldLanguages />
      <CoachesGrid />
      <LocationsSection />
      <TryoutsCTA />
      <LeadForm />
      <SponsorsSection />
      <ProjetoBiluCTA />
      <FinalCTA />
    </>
  );
}
