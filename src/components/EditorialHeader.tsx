import React from 'react';
import { 
  ArrowLeft, 
  FileDown, 
  Volume2, 
  VolumeX, 
  Code,
  Sparkles
} from 'lucide-react';
import { SectionId } from '../types';
import { soundFX } from '../utils/audio';

interface EditorialHeaderProps {
  currentSection: SectionId;
  onNavigateHome: () => void;
  onNavigateTo: (section: SectionId) => void;
  onOpenResume: () => void;
  onOpenPythonGuide: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
}

const NAV_ROUTES: { id: SectionId; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'beyond-academics', label: 'Beyond' },
  { id: 'contact', label: 'Contact' },
];

export const EditorialHeader: React.FC<EditorialHeaderProps> = ({
  currentSection,
  onNavigateHome,
  onNavigateTo,
  onOpenResume,
  onOpenPythonGuide,
  isMuted,
  onToggleMute,
}) => {
  const isHome = currentSection === 'home';

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F5F2EB]/90 backdrop-blur-md border-b border-[#111114]/10 px-4 sm:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left Zone: Brand or Back Button */}
        <div className="flex items-center gap-3">
          {!isHome ? (
            <button
              onClick={() => {
                soundFX.playTransition();
                onNavigateHome();
              }}
              onMouseEnter={() => soundFX.playHover()}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111114] text-[#F5F2EB] hover:bg-[#FF4D36] text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer group"
              title="Return to Homepage"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              <span>Home</span>
            </button>
          ) : (
            <button
              onClick={() => {
                soundFX.playTransition();
                onNavigateHome();
              }}
              className="flex items-center gap-2 text-left cursor-pointer group"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF4D36]" />
              <span className="font-heading font-black text-sm sm:text-base tracking-tight text-[#111114] group-hover:text-[#FF4D36] transition-colors">
                CHERUVU SIVA TEJA
              </span>
            </button>
          )}

          {!isHome && (
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#6B6675]">
              <span className="text-[#111114]/30">/</span>
              <span className="uppercase text-[#111114] font-semibold">
                {currentSection === 'beyond-academics' ? 'Beyond Academics' : currentSection}
              </span>
            </div>
          )}
        </div>

        {/* Center Zone: Clean Editorial Nav Links for Desktop */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider">
          {NAV_ROUTES.map((route) => {
            const isActive = currentSection === route.id;
            return (
              <button
                key={route.id}
                onClick={() => {
                  soundFX.playClick();
                  onNavigateTo(route.id);
                }}
                onMouseEnter={() => soundFX.playHover()}
                className={`relative py-1 transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#FF4D36]'
                    : 'text-[#111114] hover:text-[#FF4D36]'
                }`}
              >
                {route.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF4D36]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Zone: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Academic Python Project button */}
          <button
            onClick={() => {
              soundFX.playClick();
              onOpenPythonGuide();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#111114] bg-[#FFFFFF] border border-[#111114]/15 rounded-lg hover:border-[#FF4D36] hover:text-[#FF4D36] transition-all cursor-pointer whitespace-nowrap shadow-xs"
            title="Academic Python Project documentation & Flask bundle"
          >
            <Code size={13} className="text-[#FF4D36]" />
            <span className="hidden md:inline">Academic Python (Flask)</span>
          </button>

          {/* Resume Download CTA */}
          <button
            onClick={() => {
              soundFX.playClick();
              onOpenResume();
            }}
            onMouseEnter={() => soundFX.playHover()}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#F5F2EB] bg-[#FF4D36] hover:bg-[#111114] rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-xs"
          >
            <FileDown size={14} />
            <span>Resume</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={onToggleMute}
            className="p-2 text-[#6B6675] hover:text-[#111114] hover:bg-[#111114]/5 rounded-lg transition-colors cursor-pointer"
            title={isMuted ? 'Unmute UI sounds' : 'Mute UI sounds'}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>
        </div>

      </div>
    </header>
  );
};
