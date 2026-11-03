import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionId } from './types';
import { EditorialHeader } from './components/EditorialHeader';
import { EditorialHomepage } from './components/EditorialHomepage';
import { AboutPage } from './components/pages/AboutPage';
import { EducationPage } from './components/pages/EducationPage';
import { SkillsPage } from './components/pages/SkillsPage';
import { ExperiencePage } from './components/pages/ExperiencePage';
import { BeyondAcademicsPage } from './components/pages/BeyondAcademicsPage';
import { ContactPage } from './components/pages/ContactPage';
import { ResumeViewerModal } from './components/ResumeViewerModal';
import { PythonAcademicModal } from './components/PythonAcademicModal';
import { soundFX } from './utils/audio';

// Helper to extract SectionId from path
function getSectionFromPath(pathname: string): SectionId {
  const clean = pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
  if (!clean || clean === 'home') return 'home';
  if (clean === 'about') return 'about';
  if (clean === 'education') return 'education';
  if (clean === 'skills') return 'skills';
  if (clean === 'experience' || clean === 'projects') return 'experience';
  if (clean === 'beyond' || clean === 'beyond-academics') return 'beyond-academics';
  if (clean === 'contact') return 'contact';
  return 'home';
}

function getPathFromSection(section: SectionId): string {
  if (section === 'home') return '/';
  return `/${section}`;
}

export default function App() {
  const [currentSection, setCurrentSection] = useState<SectionId>(() => {
    if (typeof window !== 'undefined') {
      return getSectionFromPath(window.location.pathname);
    }
    return 'home';
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isPythonGuideOpen, setIsPythonGuideOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Synchronize browser history (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const targetSection = getSectionFromPath(window.location.pathname);
      setCurrentSection(targetSection);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Synchronize audio state
  const handleToggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    soundFX.setMuted(nextMuted);
  };

  // Keyboard shortcut listener for Home (Esc or H)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key.toLowerCase() === 'h') {
        if (isResumeOpen) {
          setIsResumeOpen(false);
          return;
        }
        if (isPythonGuideOpen) {
          setIsPythonGuideOpen(false);
          return;
        }
        if (currentSection !== 'home') {
          soundFX.playTransition();
          navigateTo('home');
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, isResumeOpen, isPythonGuideOpen]);

  // Synchronize document title
  useEffect(() => {
    const titles: Record<SectionId, string> = {
      home: 'Cheruvu Siva Teja | Portfolio',
      about: 'About Me | Cheruvu Siva Teja',
      education: 'Education & SGPA | Cheruvu Siva Teja',
      skills: 'Skills & Technologies | Cheruvu Siva Teja',
      experience: 'Experience & Projects | Cheruvu Siva Teja',
      'beyond-academics': 'Beyond Academics (Chess, Sports, YouTube) | Cheruvu Siva Teja',
      contact: 'Contact & Connect | Cheruvu Siva Teja',
    };
    document.title = titles[currentSection] || titles.home;
  }, [currentSection]);

  const navigateTo = (section: SectionId) => {
    setCurrentSection(section);
    const newPath = getPathFromSection(section);
    if (window.location.pathname !== newPath) {
      window.history.pushState(null, '', newPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#F5F2EB] text-[#111114] font-sans selection:bg-[#FF4D36] selection:text-white flex flex-col justify-between overflow-x-hidden">
      
      {/* Editorial Navigation Header */}
      <EditorialHeader
        currentSection={currentSection}
        onNavigateHome={() => navigateTo('home')}
        onNavigateTo={navigateTo}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenPythonGuide={() => setIsPythonGuideOpen(true)}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
      />

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col">
        <AnimatePresence mode="wait">
          {currentSection === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="w-full flex-grow"
            >
              <EditorialHomepage
                onNavigateTo={navigateTo}
                onOpenResume={() => setIsResumeOpen(true)}
                onOpenPythonGuide={() => setIsPythonGuideOpen(true)}
              />
            </motion.div>
          )}

          {currentSection === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <AboutPage
                onNavigateTo={navigateTo}
                onOpenResume={() => setIsResumeOpen(true)}
              />
            </motion.div>
          )}

          {currentSection === 'education' && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <EducationPage onNavigateTo={navigateTo} />
            </motion.div>
          )}

          {currentSection === 'skills' && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <SkillsPage onNavigateTo={navigateTo} />
            </motion.div>
          )}

          {currentSection === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <ExperiencePage onNavigateTo={navigateTo} />
            </motion.div>
          )}

          {currentSection === 'beyond-academics' && (
            <motion.div
              key="beyond-academics"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <BeyondAcademicsPage onNavigateTo={navigateTo} />
            </motion.div>
          )}

          {currentSection === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <ContactPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Consistent Footer for Dedicated Pages */}
      {currentSection !== 'home' && (
        <footer className="border-t border-[#111114]/10 bg-[#FFFFFF] px-4 sm:px-8 py-6 text-xs text-[#6B6675]">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-heading font-black text-[#111114] uppercase">Cheruvu Siva Teja</span>
              <span className="text-[#FF4D36]">·</span>
              <span>B.Tech CSE (AI & ML) · Jain University</span>
            </div>

            <div className="flex items-center gap-6 font-mono text-xs">
              <button
                onClick={() => {
                  soundFX.playTransition();
                  navigateTo('home');
                }}
                className="text-[#FF4D36] font-semibold hover:underline cursor-pointer"
              >
                ← Return to Homepage (Esc)
              </button>
              <a
                href="https://github.com/Jarvis1816"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#111114] transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/siva-teja-cheruvu-39b60638a/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#111114] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      )}

      {/* Modals */}
      <ResumeViewerModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <PythonAcademicModal
        isOpen={isPythonGuideOpen}
        onClose={() => setIsPythonGuideOpen(false)}
      />

    </div>
  );
}
