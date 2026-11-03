import React from 'react';
import { motion } from 'motion/react';
import { 
  BrainCircuit, 
  Binary, 
  Compass, 
  MapPin, 
  Building2, 
  Sparkles,
  ArrowRight,
  FileDown
} from 'lucide-react';
import { SectionId } from '../../types';
import { soundFX } from '../../utils/audio';

interface AboutPageProps {
  onNavigateTo: (section: SectionId) => void;
  onOpenResume: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateTo, onOpenResume }) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#111114]">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 border-b border-[#111114]/15 pb-8"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-[2px] bg-[#FF4D36]" />
          <span className="text-xs font-mono tracking-widest text-[#FF4D36] uppercase font-bold">
            01 // IDENTITY & MINDSET
          </span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#111114] uppercase">
          Cheruvu Siva Teja
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#6B6675] mt-3 font-mono">
          <span className="flex items-center gap-1.5 text-[#111114] font-semibold">
            <Building2 size={15} className="text-[#FF4D36]" />
            Jain (Deemed-to-be University), Bengaluru
          </span>
          <span aria-hidden="true">·</span>
          <span>B.Tech CSE (AI & ML)</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <MapPin size={14} className="text-[#FF4D36]" /> Bengaluru, India
          </span>
        </div>
      </motion.div>

      {/* Main Grid: Portrait and Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left: Authentic Portrait with editorial framing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-5 relative group"
        >
          {/* Card container */}
          <div className="relative rounded-2xl overflow-hidden border border-[#111114]/20 bg-[#FFFFFF] shadow-collage hover:shadow-collage-hover transition-shadow p-3">
            <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
              <img
                src="/assets/aistudio/image_7fa164d4.png"
                alt="Cheruvu Siva Teja"
                className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-700 group-hover:scale-102"
                loading="eager"
              />
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#111114] text-white text-[10px] font-mono uppercase tracking-wider">
                PORTRAIT // 2026
              </div>
            </div>

            {/* Bottom photo caption */}
            <div className="mt-3 p-3 rounded-xl bg-[#F5F2EB] border border-[#111114]/10 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-[#111114] uppercase">Cheruvu Siva Teja</p>
                <p className="text-[11px] text-[#6B6675]">2nd Year B.Tech · AI & ML</p>
              </div>
              <div className="px-2.5 py-1 rounded bg-[#FF4D36] text-[10px] font-mono text-white font-bold">
                FIDE 1505
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Authentic Narrative & Core Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Authentic statement */}
          <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#2C2836] font-normal">
            <p>
              I am a second-year undergraduate student pursuing <strong className="text-[#111114] font-semibold">Computer Science and Engineering with Artificial Intelligence and Machine Learning</strong> at Jain (Deemed-to-be University), Bengaluru.
            </p>
            <p>
              Rather than rushing to fit an exaggerated mold, I approach technology with an honest curiosity. I naturally gravitate toward analytical thinking, mathematical problem-solving, and logical reasoning—unraveling structured systems piece by piece.
            </p>
            <p>
              By nature, I am more introverted, independent, and observant. Whether I am analyzing positions across an over-the-board chess game (<span className="text-[#FF4D36] font-semibold">FIDE 1505</span>), training machine learning regression models during my internship at OLA, or editing videos for my YouTube channel <span className="text-[#111114] font-semibold">Jarvis CR</span>, I enjoy endeavors that reward strategy, patience, and deliberate focus.
            </p>
            <p className="text-sm text-[#6B6675]">
              Currently, I am deepening my foundations in Data Science, Machine Learning, and algorithms, building solid technical rigor one concept at a time.
            </p>
          </div>

          {/* Core Mindset Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#111114]/15">
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#111114]/15 hover:border-[#FF4D36] transition-colors shadow-xs">
              <div className="flex items-center gap-2 text-[#FF4D36] mb-1.5">
                <BrainCircuit size={18} />
                <h2 className="text-sm font-bold text-[#111114] uppercase">Analytical Problem Solving</h2>
              </div>
              <p className="text-xs text-[#6B6675] leading-normal">
                Strong focus on mathematics, logic, and decomposing complex computational challenges into clear algorithmic steps.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#111114]/15 hover:border-[#FF4D36] transition-colors shadow-xs">
              <div className="flex items-center gap-2 text-[#FF4D36] mb-1.5">
                <Binary size={18} />
                <h2 className="text-sm font-bold text-[#111114] uppercase">Machine Learning & Data</h2>
              </div>
              <p className="text-xs text-[#6B6675] leading-normal">
                Hands-on exposure to SQL, Python data handling libraries, and regression modeling through my internship at OLA.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#111114]/15 hover:border-[#FF4D36] transition-colors shadow-xs">
              <div className="flex items-center gap-2 text-[#FF4D36] mb-1.5">
                <Compass size={18} />
                <h2 className="text-sm font-bold text-[#111114] uppercase">Strategic Observation</h2>
              </div>
              <p className="text-xs text-[#6B6675] leading-normal">
                FIDE-rated competitive chess player with an active 1505 rating, bringing patience and long-term planning to every domain.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#111114]/15 hover:border-[#FF4D36] transition-colors shadow-xs">
              <div className="flex items-center gap-2 text-[#FF4D36] mb-1.5">
                <Sparkles size={18} />
                <h2 className="text-sm font-bold text-[#111114] uppercase">Creative Media & Sports</h2>
              </div>
              <p className="text-xs text-[#6B6675] leading-normal">
                Creator behind the Jarvis CR channel with video editing and gaming content, alongside active interests in football and cricket.
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                soundFX.playClick();
                onOpenResume();
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#FF4D36] hover:bg-[#111114] transition-colors cursor-pointer uppercase tracking-wider"
            >
              <FileDown size={15} />
              <span>Download Official Resume</span>
            </button>

            <button
              onClick={() => {
                soundFX.playClick();
                onNavigateTo('education');
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-[#111114] bg-[#FFFFFF] border border-[#111114]/20 hover:border-[#FF4D36] hover:text-[#FF4D36] transition-all cursor-pointer uppercase tracking-wider"
            >
              <span>Explore Education</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

