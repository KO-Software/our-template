import React from 'react';
import HeroSection from '@/components/layout/sections/hero';
import BenefitsSection from '@/components/layout/sections/benefits';
import { ContactSection } from '@/components/layout/sections/contact';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <ContactSection />
    </main>
  );
}