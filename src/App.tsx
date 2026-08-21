/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsGrid } from './components/SkillsGrid';
import { AuthenticGallery } from './components/AuthenticGallery';
import { Education } from './components/Education';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeViewerModal } from './components/ResumeViewerModal';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 selection:bg-indigo-500 selection:text-white ${
      isDarkMode ? 'bg-[#080808] text-[#F0F0F0]' : 'bg-[#FAFAFA] text-[#121212]'
    }`}>
      {/* Sticky Header Navigation */}
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Sections */}
      <main>
        <Hero
          isDarkMode={isDarkMode}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />

        <Stats isDarkMode={isDarkMode} />

        <ExperienceTimeline isDarkMode={isDarkMode} />

        <SkillsGrid isDarkMode={isDarkMode} />

        <AuthenticGallery isDarkMode={isDarkMode} />

        <Education isDarkMode={isDarkMode} />

        <ContactSection isDarkMode={isDarkMode} />
      </main>

      {/* Footer */}
      <Footer
        isDarkMode={isDarkMode}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Downloadable / Printable Resume PDF Modal */}
      <ResumeViewerModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
