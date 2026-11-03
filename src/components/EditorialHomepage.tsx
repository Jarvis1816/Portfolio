import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  User, 
  GraduationCap, 
  Code2, 
  Briefcase, 
  Trophy, 
  Send,
  ExternalLink,
  FileDown,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { SectionId, EditorialCard } from '../types';
import { soundFX } from '../utils/audio';

interface EditorialHomepageProps {
  onNavigateTo: (section: SectionId) => void;
  onOpenResume: () => void;
  onOpenPythonGuide: () => void;
}

export const EditorialHomepage: React.FC<EditorialHomepageProps> = ({
  onNavigateTo,
  onOpenResume,
  onOpenPythonGuide,
}) => {
  const [hoveredCardId, setHoveredCardId] = useState<SectionId | null>(null);

  // The 6 interactive cards arranged in a magazine collage matching the video reference
  const cards: EditorialCard[] = [
    {
      id: 'skills',
      route: '/skills',
      number: '01',
      title: 'SKILLS & TECH',
      subtitle: 'Python · C · SQL · Pandas · ML',
      tag: 'DEEP TECH',
      rotation: -14,
      zIndex: 10,
      accentColor: '#1A1829',
    },
    {
      id: 'education',
      route: '/education',
      number: '02',
      title: 'EDUCATION',
      subtitle: 'B.Tech AI & ML · SGPA 9.435',
      tag: 'ACADEMICS',
      rotation: -7,
      zIndex: 20,
      accentColor: '#2B2638',
    },
    {
      id: 'experience',
      route: '/experience',
      number: '03',
      title: 'EXPERIENCE & LABS',
      subtitle: 'OLA ML Intern · WonderLab',
      tag: 'PROJECTS',
      rotation: -2,
      zIndex: 30,
      accentColor: '#FF4D36', // Coral red card from video reference
    },
    {
      id: 'about',
      route: '/about',
      number: '04',
      title: 'ABOUT ME',
      subtitle: 'Cheruvu Siva Teja',
      tag: 'IDENTITY',
      rotation: 1,
      zIndex: 40, // Front and center
      imageSrc: '/assets/aistudio/image_7fa164d4.png',
      accentColor: '#FFFFFF',
    },
    {
      id: 'beyond-academics',
      route: '/beyond-academics',
      number: '05',
      title: 'BEYOND ACADEMICS',
      subtitle: 'FIDE 1505 · Sports · Jarvis CR',
      tag: 'CHESS & MEDIA',
      rotation: 8,
      zIndex: 25,
      accentColor: '#EBE7DE',
    },
    {
      id: 'contact',
      route: '/contact',
      number: '06',
      title: 'CONTACT',
      subtitle: 'Inquiries & Collaborations',
      tag: 'CONNECT',
      rotation: 15,
      zIndex: 15,
      accentColor: '#1C1B22',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F5F2EB] text-[#111114] flex flex-col justify-between overflow-x-hidden">
      
      {/* ============================================================== */}
      {/* 1. UPPER EDITORIAL HERO SECTION                                */}
      {/* ============================================================== */}
      <section className="relative w-full pt-10 sm:pt-14 pb-20 sm:pb-32 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
        
        {/* Subtle geometric crosshairs & stamp markers from video */}
        <div className="absolute top-6 left-6 text-[10px] font-mono text-[#6B6675] tracking-widest hidden sm:block">
          + LAT: 12.9716° N / LON: 77.5946° E
        </div>
        <div className="absolute top-6 right-6 text-[10px] font-mono text-[#6B6675] tracking-widest hidden sm:block">
          + AI & ML EDITION // 2026
        </div>

        {/* Small upper-left kicker */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-2"
        >
          <span className="w-2.5 h-[2px] bg-[#FF4D36]" />
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#111114] uppercase">
            WELCOME TO MY
          </span>
        </motion.div>

        {/* ============================================================== */}
        {/* REFINED LAYERED "PORTFOLIO" TYPOGRAPHY (SCALED DOWN)           */}
        {/* ============================================================== */}
        <div className="relative my-3 sm:my-4 select-none">
          
          {/* Vertical Coral-Red Accent Rectangle Scaled Proportionally */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[38%] sm:left-[41%] -top-3 w-8 sm:w-14 md:w-20 h-[130px] sm:h-[175px] md:h-[210px] bg-[#FF4D36] -translate-x-1/2 z-0 origin-top pointer-events-none rounded-xs"
          />

          {/* Layer 1: Outlined Background Typography */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 0.85, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-black tracking-tight text-[11vw] sm:text-[9.5vw] md:text-[8vw] lg:text-[6.2rem] leading-[0.9] text-outline-black relative z-10 pointer-events-none"
            aria-hidden="true"
          >
            PORTFOLIO
          </motion.div>

          {/* Layer 2: Solid Bold Black Foreground Typography (Slightly Offset) */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading font-black tracking-tight text-[11vw] sm:text-[9.5vw] md:text-[8vw] lg:text-[6.2rem] leading-[0.9] text-[#111114] absolute top-1.5 sm:top-2 left-1 sm:left-1.5 z-20 mix-blend-multiply"
          >
            PORTFOLIO
          </motion.h1>

          {/* Decorative Subtitles and Corner Labels (Matching Video) */}
          <div className="relative z-30 flex flex-wrap items-center justify-between gap-4 mt-6 sm:mt-8 pt-4 border-t border-[#111114]/15 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D36]" />
              <span className="font-semibold text-[#111114] uppercase tracking-wider">
                CHERUVU SIVA TEJA
              </span>
              <span className="text-[#6B6675]">· 2ND YEAR B.TECH (AI & ML)</span>
            </div>

            <div className="flex items-center gap-4 text-[#6B6675] uppercase tracking-wider">
              <span>DATA SCIENCE</span>
              <span>/</span>
              <span>MACHINE LEARNING</span>
              <span>/</span>
              <span className="text-[#FF4D36] font-semibold">JAIN UNIVERSITY</span>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 2. CENTRAL COLLAGE SECTION: 6 INTERACTIVE OVERLAPPING CARDS     */}
        {/* ============================================================== */}
        <div className="relative w-full max-w-5xl mx-auto mt-16 sm:mt-24 mb-12">
          
          {/* Subtle instruction pill */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#111114]/10 text-[11px] font-mono text-[#6B6675] uppercase tracking-wider shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D36] animate-ping" />
              Select any card below to open its dedicated page
            </span>
          </div>

          {/* Desktop & Tablet Fanned Collage View */}
          <div className="relative h-[480px] sm:h-[540px] md:h-[580px] w-full flex items-center justify-center">
            
            {/* Center Background Circular Stamp / Ring from Reference Video */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[280px] sm:w-[340px] h-[280px] sm:h-[340px] rounded-full border border-dashed border-[#111114]/20 flex items-center justify-center pointer-events-none z-0 opacity-60"
            >
              <div className="w-[180px] h-[180px] rounded-full border border-[#111114]/15 flex items-center justify-center">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#6B6675]/60">
                  · CHERUVU SIVA TEJA ·
                </span>
              </div>
            </motion.div>

            {/* The Six Overlapping Cards */}
            {cards.map((card, idx) => {
              const isHovered = hoveredCardId === card.id;

              // Horizontal spread across the fan
              // Offsets from center: -240px, -150px, -60px, +30px, +130px, +230px
              const xOffsets = [-240, -150, -50, 40, 140, 240];
              const xPos = xOffsets[idx];

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 50, rotate: 0 }}
                  animate={{
                    opacity: 1,
                    x: xPos,
                    y: isHovered ? -25 : 0,
                    rotate: isHovered ? 0 : card.rotation,
                    scale: isHovered ? 1.08 : 1,
                    zIndex: isHovered ? 60 : card.zIndex,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onMouseEnter={() => {
                    setHoveredCardId(card.id);
                    soundFX.playHover();
                  }}
                  onMouseLeave={() => setHoveredCardId(null)}
                  onClick={() => {
                    soundFX.playClick();
                    onNavigateTo(card.id);
                  }}
                  className="absolute cursor-pointer select-none group"
                >
                  {/* Card Container */}
                  <div 
                    className={`w-[170px] sm:w-[200px] md:w-[220px] h-[260px] sm:h-[300px] md:h-[330px] rounded-2xl p-4 sm:p-5 flex flex-col justify-between border transition-all duration-300 ${
                      card.id === 'about'
                        ? 'bg-[#FFFFFF] border-[#111114]/25 shadow-collage hover:border-[#FF4D36]'
                        : card.id === 'experience'
                        ? 'bg-[#FF4D36] text-[#F5F2EB] border-[#FF4D36] shadow-collage'
                        : card.id === 'skills'
                        ? 'bg-[#111114] text-[#F5F2EB] border-[#111114] shadow-collage'
                        : card.id === 'education'
                        ? 'bg-[#2A2634] text-[#F5F2EB] border-[#383344] shadow-collage'
                        : card.id === 'beyond-academics'
                        ? 'bg-[#FFFFFF] text-[#111114] border-[#111114]/20 shadow-collage'
                        : 'bg-[#111114] text-[#F5F2EB] border-[#111114] shadow-collage'
                    } ${isHovered ? 'shadow-collage-hover ring-2 ring-[#FF4D36]' : ''}`}
                  >
                    
                    {/* Card Top: Number & Tag */}
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-mono tracking-wider uppercase font-semibold ${
                        card.id === 'experience' || card.id === 'skills' || card.id === 'education' || card.id === 'contact'
                          ? 'text-[#F5F2EB]/70'
                          : 'text-[#6B6675]'
                      }`}>
                        {card.number} //
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider font-semibold ${
                        card.id === 'experience'
                          ? 'bg-[#111114]/20 text-white'
                          : card.id === 'skills' || card.id === 'education' || card.id === 'contact'
                          ? 'bg-white/10 text-[#FF4D36]'
                          : 'bg-[#FF4D36]/10 text-[#FF4D36]'
                      }`}>
                        {card.tag}
                      </span>
                    </div>

                    {/* Card Middle: Content / Visual Motif */}
                    <div className="my-auto flex flex-col items-center justify-center text-center py-2">
                      {card.id === 'about' && (
                        <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-[#111114]/15 mb-2 bg-[#F5F2EB]">
                          <img
                            src="/assets/aistudio/image_7fa164d4.png"
                            alt="Cheruvu Siva Teja"
                            className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                          />
                          <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black text-white text-[8px] font-mono">
                            ME
                          </div>
                        </div>
                      )}

                      {card.id === 'skills' && (
                        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#3B2865] to-[#7949E8] flex items-center justify-center text-white mb-3 shadow-[0_0_20px_rgba(121,73,232,0.4)]">
                          <Code2 size={28} />
                        </div>
                      )}

                      {card.id === 'education' && (
                        <div className="w-16 h-16 rounded-full bg-[#1D1A25] border border-white/20 flex items-center justify-center text-[#FF4D36] mb-3">
                          <GraduationCap size={28} />
                        </div>
                      )}

                      {card.id === 'experience' && (
                        <div className="w-16 h-16 rounded-full bg-white text-[#FF4D36] flex items-center justify-center mb-3 shadow-lg">
                          <Briefcase size={28} />
                        </div>
                      )}

                      {card.id === 'beyond-academics' && (
                        <div className="space-y-1 my-2">
                          <div className="text-3xl font-heading font-black tracking-tight text-[#111114]">
                            1 : 1
                          </div>
                          <div className="text-xs font-mono text-[#FF4D36] font-bold">
                            ♘ FIDE 1505
                          </div>
                        </div>
                      )}

                      {card.id === 'contact' && (
                        <div className="w-16 h-16 rounded-full bg-[#24222E] border border-white/10 flex items-center justify-center text-[#FF4D36] mb-3">
                          <Send size={26} />
                        </div>
                      )}

                      <h3 className={`font-heading text-sm sm:text-base font-bold tracking-tight uppercase mt-1 leading-snug ${
                        card.id === 'about' || card.id === 'beyond-academics' ? 'text-[#111114]' : 'text-[#F5F2EB]'
                      }`}>
                        {card.title}
                      </h3>
                      <p className={`text-[10px] mt-0.5 line-clamp-1 ${
                        card.id === 'about' || card.id === 'beyond-academics' ? 'text-[#6B6675]' : 'text-[#F5F2EB]/70'
                      }`}>
                        {card.subtitle}
                      </p>
                    </div>

                    {/* Card Bottom: Navigation Affordance */}
                    <div className="flex items-center justify-between pt-2 border-t border-current/10">
                      <span className={`text-[10px] font-mono uppercase font-semibold ${
                        isHovered ? 'text-[#FF4D36]' : 'opacity-80'
                      }`}>
                        OPEN PAGE
                      </span>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform ${
                        card.id === 'experience' ? 'bg-[#111114] text-white' : 'bg-[#FF4D36] text-white'
                      } ${isHovered ? 'translate-x-0.5 -translate-y-0.5' : ''}`}>
                        <ArrowUpRight size={13} />
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}

          </div>

          {/* Quick Category Jump Bar for Mobile Accessibility */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:hidden">
            {cards.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  soundFX.playClick();
                  onNavigateTo(c.id);
                }}
                className="px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#111114]/15 text-xs font-semibold text-[#111114] active:bg-[#FF4D36] active:text-white transition-colors"
              >
                {c.title}
              </button>
            ))}
          </div>

        </div>

      </section>

      {/* ============================================================== */}
      {/* 3. LOWER HOMEPAGE SECTION (THE DEEP BLACK EDITORIAL SECTION)   */}
      {/* ============================================================== */}
      <section className="w-full bg-[#111114] text-[#F5F2EB] py-16 sm:py-24 px-4 sm:px-8 border-t border-[#111114] overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Section Indicator - Scroll triggered fade-in */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-between pb-6 border-b border-white/10 text-xs font-mono text-[#6B6675]"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF4D36]" />
              <span className="text-[#F5F2EB] uppercase tracking-wider font-semibold">
                CHERUVU SIVA TEJA · PROFILE & SELECTED WORKS
              </span>
            </div>
            <span className="hidden sm:inline">AUTONOMOUS & DATA-DRIVEN</span>
          </motion.div>

          {/* Two-Column Grid: LEFT (About Me) & RIGHT (Work & Experience) with Graceful Reveal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* LEFT COLUMN: ABOUT ME - Smooth scroll-triggered slide & fade */}
            <motion.div
              initial={{ opacity: 0, y: 35, x: -15 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#FF4D36] uppercase font-bold tracking-widest">
                  01 //
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-black tracking-tight text-[#F5F2EB] uppercase">
                  ABOUT ME
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#B3ADBE] font-light leading-relaxed">
                <p>
                  I am a second-year undergraduate pursuing <strong className="text-white font-medium">Computer Science and Engineering with Artificial Intelligence & Machine Learning</strong> at Jain (Deemed-to-be University), Bengaluru.
                </p>
                <p>
                  Driven by analytical thinking, mathematics, and logical reasoning, I prefer strategic depth over surface trends. Whether training regression algorithms or calculating pawn structures over an official FIDE-rated chessboard (1505 rating), I approach challenges with deliberate observation and independent curiosity.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    soundFX.playClick();
                    onNavigateTo('about');
                  }}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase font-bold tracking-widest text-[#FF4D36] hover:text-white transition-colors cursor-pointer group"
                >
                  <span>READ MORE</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: WORK EXPERIENCE & PROJECTS - Staggered graceful reveal */}
            <motion.div
              initial={{ opacity: 0, y: 35, x: 15 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#FF4D36] uppercase font-bold tracking-widest">
                  02 //
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-black tracking-tight text-[#F5F2EB] uppercase">
                  WORK & EXPERIENCE
                </h2>
              </div>

              <div className="space-y-4">
                
                {/* Item 1: OLA ML Internship */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="p-5 rounded-xl bg-[#1A1820] border border-white/10 hover:border-[#FF4D36]/50 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <span className="text-sm font-bold text-white uppercase tracking-wide">
                      OLA · Machine Learning Intern
                    </span>
                    <span className="text-xs font-mono text-[#FF4D36]">DATA & ML</span>
                  </div>
                  <p className="text-xs text-[#A8A0B8] leading-relaxed">
                    Progressed from SQL database retrieval into Python data handling libraries (NumPy, Pandas, Matplotlib). Analyzed vehicle fleet datasets containing VIN and distance telemetry, developing a predictive machine learning model using regression techniques.
                  </p>
                </motion.div>

                {/* Item 2: WonderLab Sentinel */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="p-5 rounded-xl bg-[#1A1820] border border-white/10 hover:border-[#FF4D36]/50 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <span className="text-sm font-bold text-white uppercase tracking-wide">
                      WonderLab Sentinel · Mathematics Project
                    </span>
                    <a
                      href="https://wonderlab-sentinel.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#FF4D36] hover:underline inline-flex items-center gap-1"
                    >
                      <span>LIVE URL</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                  <p className="text-xs text-[#A8A0B8] leading-relaxed">
                    College mathematics experiential learning project based on Wonderla amusement park. Allows users to explore thrill rides, evaluate park experiences, and book admission tickets through an integrated digital workflow.
                  </p>
                </motion.div>

              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    soundFX.playClick();
                    onNavigateTo('experience');
                  }}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase font-bold tracking-widest text-[#FF4D36] hover:text-white transition-colors cursor-pointer group"
                >
                  <span>EXPLORE ALL PROJECTS</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

          </div>

          {/* LOWER COMPACT SKILLS OVERVIEW - Scroll-triggered reveal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pt-10 border-t border-white/10"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#FF4D36] uppercase font-bold tracking-widest">
                  03 //
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-white">
                  CORE TECHNICAL PROFICIENCIES
                </h3>
              </div>

              <button
                onClick={() => {
                  soundFX.playClick();
                  onNavigateTo('skills');
                }}
                className="text-xs font-mono uppercase font-semibold text-[#FF4D36] hover:underline cursor-pointer"
              >
                VIEW FULL SKILLS BREAKDOWN →
              </button>
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              {[
                'Python',
                'C Language',
                'SQL',
                'Pandas',
                'NumPy',
                'Matplotlib',
                'Machine Learning Fundamentals',
                'Prompt Engineering (Claude, ChatGPT)',
                'Object-Oriented Programming (OOP)',
                'Data Structures & Algorithms',
                'Git & GitHub',
                'Visual Studio Code'
              ].map((skill, sIdx) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * (sIdx % 6) }}
                  className="px-3.5 py-1.5 rounded-lg bg-[#1D1B24] border border-white/10 text-[#D2C8E4] font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* BOTTOM QUICK FOOTER STRIP */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-[#6B6675]"
          >
            <div className="flex items-center gap-3">
              <span>© 2026 CHERUVU SIVA TEJA</span>
              <span>·</span>
              <button
                onClick={onOpenPythonGuide}
                className="text-[#FF4D36] hover:underline cursor-pointer"
              >
                Academic Python (Flask) Bundle
              </button>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="mailto:sivateja.cheruvu@gmail.com"
                className="hover:text-white transition-colors"
              >
                sivateja.cheruvu@gmail.com
              </a>
              <a
                href="https://github.com/Jarvis1816"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/siva-teja-cheruvu-39b60638a/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};
