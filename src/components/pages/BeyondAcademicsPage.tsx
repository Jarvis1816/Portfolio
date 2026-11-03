import React from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, 
  Youtube, 
  ExternalLink, 
  ArrowRight,
  Gamepad2,
  Video,
  Play,
  Activity
} from 'lucide-react';
import { SectionId } from '../../types';
import { soundFX } from '../../utils/audio';
import { WalkingStrideAnimation } from '../animations/WalkingStrideAnimation';

interface BeyondAcademicsPageProps {
  onNavigateTo: (section: SectionId) => void;
}

export const BeyondAcademicsPage: React.FC<BeyondAcademicsPageProps> = ({ onNavigateTo }) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#111114]">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10 border-b border-[#111114]/15 pb-8"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-[2px] bg-[#FF4D36]" />
          <span className="text-xs font-mono tracking-widest text-[#FF4D36] uppercase font-bold">
            05 // PASSIONS & STRATEGY
          </span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#111114] uppercase">
          Beyond Academics
        </h1>
        <p className="text-sm sm:text-base text-[#6B6675] max-w-2xl mt-2 font-normal">
          Competitive strategy, athletic endurance, and digital media production that shape my analytical focus and creativity outside the classroom.
        </p>
      </motion.div>

      {/* Dynamic Walking Stride Animation (Pin Reference - Momentum & Athletic Journey) */}
      <WalkingStrideAnimation />

      {/* SECTION A: Competitive Chess */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mb-12 p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#111114]/15 shadow-collage"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Chess Narrative & Official Rating */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-md bg-[#111114] text-xs font-mono text-white font-semibold uppercase tracking-wider">
                FIDE Competitive Chess
              </span>
              <span className="text-xs font-mono text-[#6B6675]">Rated Tournament Player</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl font-black text-[#111114] uppercase">
              Strategy, Patience & Pattern Recognition
            </h2>

            <p className="text-sm sm:text-base text-[#2C2836] font-normal leading-relaxed">
              Chess has been one of my defining pursuits. As a FIDE-rated player with an official rating of <strong className="text-[#FF4D36] font-semibold">1505</strong>, tournament play has honed my ability to analyze multiple candidate moves, anticipate long-range threats, and remain composed under pressure.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#F5F2EB] border border-[#111114]/10">
                <span className="text-[11px] font-mono text-[#6B6675] block uppercase font-semibold">Official FIDE Rating</span>
                <span className="font-heading text-3xl font-black text-[#FF4D36] tabular-nums mt-1 block">
                  1505
                </span>
                <span className="text-[11px] text-[#6B6675]">Standard Classical / Rapid</span>
              </div>

              <div className="p-4 rounded-xl bg-[#F5F2EB] border border-[#111114]/10">
                <span className="text-[11px] font-mono text-[#6B6675] block uppercase font-semibold">Tournament Experience</span>
                <span className="font-heading text-xl font-black text-[#111114] mt-1.5 block uppercase">
                  Active
                </span>
                <span className="text-[11px] text-[#6B6675]">Over-the-board & rated fixtures</span>
              </div>
            </div>

            <p className="text-xs text-[#6B6675] pt-1 italic font-normal">
              "The discipline learned at the board—evaluating positional dynamics and thinking several moves ahead—directly fuels how I approach algorithmic problems and machine learning models."
            </p>
          </div>

          {/* Right: Looping 3D Chess Motion Video from Pinterest */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/14] rounded-2xl overflow-hidden bg-[#111114] border-2 border-[#111114]/25 shadow-2xl group">
              
              {/* Header Badge */}
              <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono text-white flex items-center gap-2 font-bold uppercase tracking-wider">
                <span className="text-[#FF4D36]">♘</span>
                <span>CHESS MOTION // LOOP</span>
              </div>

              {/* Looping Chess Video */}
              <video
                src="/assets/videos/chess_motion.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Bottom Subtle Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 pt-8 text-[11px] font-mono text-white flex items-center justify-between">
                <span>TACTICAL DEPTH</span>
                <span className="text-[#FF4D36] font-bold">FIDE 1505</span>
              </div>
            </div>
          </div>

        </div>
      </motion.div>

      {/* SECTION B & C: Sports and Content Creation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Sports: Football & Cricket */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-[#111114]/15 shadow-collage flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 text-[#FF4D36] mb-2">
              <Activity size={18} />
              <span className="text-xs font-mono uppercase tracking-wider font-bold">Athletics & Physical Focus</span>
            </div>

            <h2 className="font-heading text-xl sm:text-2xl font-black text-[#111114] uppercase">
              Football & Cricket
            </h2>

            <p className="text-sm text-[#2C2836] font-normal mt-3 leading-relaxed">
              Balancing long hours of computational study with high-energy team sports keeps my mindset sharp and resilient.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-5">
              <div className="p-3.5 rounded-xl bg-[#F5F2EB] border border-[#111114]/10">
                <div className="text-sm font-bold text-[#111114] flex items-center gap-1.5 uppercase">
                  <span>⚽</span> Football
                </div>
                <p className="text-xs text-[#6B6675] mt-1 font-normal">
                  Speed, spatial awareness, and quick-decision making on the pitch.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F5F2EB] border border-[#111114]/10">
                <div className="text-sm font-bold text-[#111114] flex items-center gap-1.5 uppercase">
                  <span>🏏</span> Cricket
                </div>
                <p className="text-xs text-[#6B6675] mt-1 font-normal">
                  Patience, hand-eye precision, and team match tactical execution.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#111114]/10 text-xs text-[#6B6675]">
            Physical activity provides essential mental balance to mathematical and programming projects.
          </div>
        </motion.div>

        {/* Content Creation: Jarvis CR YouTube Channel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-[#111114]/15 shadow-collage flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2 text-[#FF4D36]">
                <Youtube size={18} />
                <span className="text-xs font-mono uppercase tracking-wider font-bold">Creative Media Venture</span>
              </div>
              <span className="text-[11px] font-mono text-[#6B6675]">@Jarvis-CR</span>
            </div>

            <h2 className="font-heading text-xl sm:text-2xl font-black text-[#111114] uppercase">
              Jarvis CR · YouTube Channel
            </h2>

            <p className="text-sm text-[#2C2836] font-normal mt-3 leading-relaxed">
              I run a gaming and creative digital content channel called <strong className="text-[#FF4D36] font-semibold">Jarvis CR</strong>. This creative venture represents my passion for video editing, storytelling pacing, gaming communities, and visual media experimentation.
            </p>

            <div className="mt-5 space-y-2 text-xs text-[#6B6675]">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F5F2EB] border border-[#111114]/10">
                <Gamepad2 size={15} className="text-[#FF4D36]" />
                <span className="font-medium text-[#111114]">Gaming highlights, strategic plays, and digital commentary</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F5F2EB] border border-[#111114]/10">
                <Video size={15} className="text-[#FF4D36]" />
                <span className="font-medium text-[#111114]">Short-form pacing, video editing cuts, and visual timing</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#111114]/10 flex items-center justify-between gap-3">
            <span className="text-xs font-mono text-[#6B6675]">Official Shorts & Videos</span>
            <a
              href="https://www.youtube.com/@Jarvis-CR/shorts"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFX.playClick()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#FF4D36] hover:bg-[#111114] transition-colors cursor-pointer whitespace-nowrap uppercase tracking-wider"
            >
              <Play size={12} fill="currentColor" />
              <span>Visit Jarvis CR Channel</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </motion.div>

      </div>

      {/* Navigation Footer */}
      <div className="mt-12 pt-6 border-t border-[#111114]/15 flex justify-end">
        <button
          onClick={() => {
            soundFX.playClick();
            onNavigateTo('contact');
          }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-[#111114] bg-[#FFFFFF] border border-[#111114]/20 hover:border-[#FF4D36] hover:text-[#FF4D36] transition-all cursor-pointer uppercase tracking-wider"
        >
          <span>Proceed to Contact</span>
          <ArrowRight size={15} />
        </button>
      </div>

    </div>
  );
};

