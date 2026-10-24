import React, { useState } from 'react';
import {
  ScrollTravelBackground,
  ActiveTargetCoords,
} from './components/ScrollTravelBackground';
import { NavbarAndStickyBar } from './components/NavbarAndStickyBar';
import { HeroSection } from './components/HeroSection';
import { GuideSealSection } from './components/GuideSealSection';
import { UniversesSection } from './components/UniversesSection';
import { LookbookSection } from './components/LookbookSection';
import { ProfilesAndServicesSection } from './components/ProfilesAndServicesSection';
import { FairyWorkshopWizard } from './components/FairyWorkshopWizard';
import { FaqAndFooterSection } from './components/FaqAndFooterSection';

export function App() {
  const [globeTargetOverride, setGlobeTargetOverride] =
    useState<ActiveTargetCoords | null>(null);
  const [wizardDestination, setWizardDestination] = useState<string | null>(null);
  const [wizardService, setWizardService] = useState<string | null>(null);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleStartWizardWithDestination = (universeId: string) => {
    setWizardDestination(universeId);
    handleNavigate('taller-hada');
  };

  const handleSelectServiceForWizard = (serviceTitle: string) => {
    setWizardService(serviceTitle);
    handleNavigate('taller-hada');
  };

  return (
    <div className="relative min-h-[100dvh] w-full overflow-x-hidden selection:bg-gold/30 selection:text-ink">
      {/* Fixed 3D Editorial Globe + Scroll-Synchronized SVG Flight Path + Telemetry HUD */}
      <ScrollTravelBackground activeOverride={globeTargetOverride} />

      {/* Section 1: Sticky Editorial Navbar & Mobile Floating CTA Bar */}
      <NavbarAndStickyBar onNavigate={handleNavigate} />

      {/* Main Content Flow */}
      <main className="relative z-10">
        {/* Section 2: Hero Section + Interactive "Tu Ahorro Real" Micro-Widget */}
        <HeroSection
          onNavigate={handleNavigate}
          onSelectGlobeTarget={setGlobeTargetOverride}
        />

        {/* Subtle Editorial Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/45 to-transparent" />
        </div>

        {/* Section 3: El Sello de Guía (Audio Pills Player + Honesty Filter + Survival Kit) */}
        <GuideSealSection />

        {/* Subtle Editorial Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-sage-mist/45 to-transparent" />
        </div>

        {/* Section 4: Los 5 Universos de Viaje (Connected to 3D Globe) */}
        <UniversesSection
          onSelectGlobeTarget={setGlobeTargetOverride}
          onStartWizardWithDestination={handleStartWizardWithDestination}
        />

        {/* Section 5: El "Entregable Estrella" (6-Module Interactive Lookbook Demo) */}
        <LookbookSection onNavigate={handleNavigate} />

        {/* Section 6 & 7: ¿Para Quién Diseña el Hada? & Escalera de Servicios (4 Tiers) */}
        <ProfilesAndServicesSection
          onSelectServiceForWizard={handleSelectServiceForWizard}
        />

        {/* Section 8: El Taller del Hada (4-Step Qualification Wizard) */}
        <FairyWorkshopWizard
          preselectedDestination={wizardDestination}
          preselectedService={wizardService}
        />

        {/* Section 9: Preguntas Frecuentes (FAQ Honestos) + Editorial Footer */}
        <FaqAndFooterSection onNavigate={handleNavigate} />
      </main>
    </div>
  );
}

export default App;
