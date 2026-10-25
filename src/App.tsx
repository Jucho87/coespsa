/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutCompany } from './components/AboutCompany';
import { CorporateDivisions } from './components/CorporateDivisions';
import { EngineeringLines } from './components/EngineeringLines';
import { OperationsAndFleet } from './components/OperationsAndFleet';
import { OrganigramViewer } from './components/OrganigramViewer';
import { StrategicPartners } from './components/StrategicPartners';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ImageModal } from './components/ImageModal';
import { ScrollIndicator, useReveal } from './components/ScrollIndicator';
import { ContactSubmission } from './types';

export default function App() {
  useReveal();
  const [preselectedDivision, setPreselectedDivision] = React.useState<ContactSubmission['targetDivision']>('transporte');
  const [preselectedService, setPreselectedService] = React.useState<ContactSubmission['serviceCategory']>('civil');

  const [modalImage, setModalImage] = React.useState<{
    isOpen: boolean;
    src: string;
    title: string;
    subtitle?: string;
  }>({
    isOpen: false,
    src: '',
    title: '',
    subtitle: ''
  });

  const handleOpenImage = (src: string, title: string, subtitle?: string) => {
    setModalImage({
      isOpen: true,
      src,
      title,
      subtitle
    });
  };

  const handleCloseImage = () => {
    setModalImage((prev) => ({ ...prev, isOpen: false }));
  };

  const handleNavigateTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDivisionForContact = (divisionId: ContactSubmission['targetDivision']) => {
    setPreselectedDivision(divisionId);
    handleNavigateTo('contacto');
  };

  const handleSelectServiceForContact = (serviceCategory: ContactSubmission['serviceCategory']) => {
    setPreselectedService(serviceCategory);
    handleNavigateTo('contacto');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Executive Clean Light Navbar */}
      <Navbar onNavigateTo={handleNavigateTo} />

      {/* Main Flowing Corporate Page */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenImage={handleOpenImage}
          onNavigateTo={handleNavigateTo}
        />

        {/* 2. About Company / Misión, Visión, HSEQ */}
        <AboutCompany onOpenImage={handleOpenImage} />

        {/* 3. Las 4 Gerencias Corporativas */}
        <CorporateDivisions
          onOpenImage={handleOpenImage}
          onSelectDivisionForContact={handleSelectDivisionForContact}
        />

        {/* 4. Líneas de Ingeniería Especializada */}
        <EngineeringLines
          onOpenImage={handleOpenImage}
          onSelectServiceForContact={handleSelectServiceForContact}
        />

        {/* 5. Flota, Telemetría Satelital y Operaciones */}
        <OperationsAndFleet
          onOpenImage={handleOpenImage}
          onNavigateToContact={() => handleNavigateTo('contacto')}
        />

        {/* 6. Organigrama Oficial Piramidal */}
        <OrganigramViewer onOpenImage={handleOpenImage} />

        {/* 7. Alianzas Estratégicas y Holdings */}
        <StrategicPartners />

        {/* 8. Contáctenos y Radicación de Proyectos */}
        <ContactSection
          preselectedDivision={preselectedDivision}
          preselectedService={preselectedService}
        />
      </main>

      <ScrollIndicator />

      {/* Corporate Footer */}
      <Footer onNavigateTo={handleNavigateTo} />

      {/* Lightbox Modal for High-Res Engineering & Slide Inspection */}
      <ImageModal
        isOpen={modalImage.isOpen}
        onClose={handleCloseImage}
        imageSrc={modalImage.src}
        title={modalImage.title}
        subtitle={modalImage.subtitle}
      />
    </div>
  );
}
