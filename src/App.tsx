import React, { useState } from 'react';
import {
  ScrollTravelBackground,
  ActiveTargetCoords,
} from './components/ScrollTravelBackground';
import { NavbarAndStickyBar } from './components/NavbarAndStickyBar';
import { HeroSection } from './components/HeroSection';
import { UniversesSection } from './components/UniversesSection';
import { GuideSealSection } from './components/GuideSealSection';
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

  const handleStartWizardWithDestination = (destinationId: string) => {
    setWizardDestination(destinationId);
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

      {/* 1. Sticky Editorial Navbar & Mobile Floating CTA Bar */}
      <NavbarAndStickyBar onNavigate={handleNavigate} />

      {/* Main Content Flow (Reordered for Clean Progressive Disclosure) */}
      <main className="relative z-10">
        {/* 2. Clean Hero Section (Without Savings Calculator) */}
        <HeroSection onNavigate={handleNavigate} />

        {/* Subtle Editorial Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/45 to-transparent" />
        </div>

        {/* 3. SECCIÓN DE LOS 13 DESTINOS (Immediately after Hero with Expandable Accordions) */}
        <UniversesSection
          onSelectGlobeTarget={setGlobeTargetOverride}
          onStartWizardWithDestination={handleStartWizardWithDestination}
        />

        {/* Subtle Editorial Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-sage-mist/45 to-transparent" />
        </div>

        {/* 4. La Esencia del Servicio (Simplified & Clean) */}
        <GuideSealSection />

        {/* 5 & 6. ¿Para Quién Diseña el Hada? (3 Traveler Profiles Intact) & Escalera de Servicios */}
        <ProfilesAndServicesSection
          onSelectServiceForWizard={handleSelectServiceForWizard}
        />

        {/* 7. El Taller del Hada (4-Step Wizard with 13 Destinations & Duration Range Slider) */}
        <FairyWorkshopWizard
          preselectedDestination={wizardDestination}
          preselectedService={wizardService}
        />

        {/* 8. Preguntas Frecuentes (FAQ) + Editorial Footer */}
        <FaqAndFooterSection onNavigate={handleNavigate} />
      </main>
    </div>
  );
}

export default App;
