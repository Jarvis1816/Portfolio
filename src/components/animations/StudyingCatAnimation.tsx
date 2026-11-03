import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Sparkles, GraduationCap } from 'lucide-react';
import { soundFX } from '../../utils/audio';

const STUDY_QUOTES = [
  'Deep Focus Mode · Sem 2 SGPA: 9.435',
  'Analyzing Algorithms & Discrete Mathematics',
  'Coding Machine Learning Pipelines in Python',
  'Consistency beats intensity · 100% Academic Focus',
];

export const StudyingCatAnimation: React.FC = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const handleInteract = () => {
    soundFX.playClick();
    setQuoteIndex((prev) => (prev + 1) % STUDY_QUOTES.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      onClick={handleInteract}
      className="relative p-5 rounded-2xl bg-[#FFFFFF] border border-[#111114]/15 shadow-collage hover:border-[#FF4D36] transition-all cursor-pointer select-none group overflow-hidden"
      title="Click to interact with the Study Companion!"
    >
      {/* Background Subtle Grid Accent */}
      <div className="absolute top-2 right-2 flex items-center gap-1 text-[10px] font-mono text-[#6B6675]">
        <Sparkles size={12} className="text-[#FF4D36] animate-pulse" />
        <span>STUDY COMPANION</span>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-5">
        
        {/* Animated Cat with Glasses & Book */}
        <div className="relative shrink-0 w-28 sm:w-32 aspect-square flex items-center justify-center">
          
          {/* Gentle Halo Glow */}
          <div className="absolute inset-0 rounded-full bg-[#FF4D36]/10 filter blur-md -z-10 group-hover:bg-[#FF4D36]/20 transition-all" />

          {/* Floating and Bobbing Motion */}
          <motion.div
            animate={{
              y: [0, -7, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-full h-full relative"
          >
            <img
              src="/assets/pins/pin2.jpg"
              alt="Studying Cat with glasses and open notebook"
              className="w-full h-full object-contain mix-blend-multiply filter contrast-105 group-hover:scale-105 transition-transform duration-300"
            />

            {/* Pencil Writing Scribble Pulse */}
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute bottom-2 right-3 w-3 h-3 rounded-full bg-[#FF4D36]/30 flex items-center justify-center pointer-events-none"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D36]" />
            </motion.div>
          </motion.div>
        </div>

        {/* Textual Narrative & Clickable Speech Bubble */}
        <div className="space-y-2 text-center sm:text-left flex-grow">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FF4D36]/10 text-[#FF4D36] text-[10px] font-mono font-bold uppercase tracking-wider">
            <GraduationCap size={12} />
            <span>Academic Excellence Mode</span>
          </div>

          <h3 className="font-heading text-lg font-black text-[#111114] uppercase tracking-tight">
            Rigorous Study Routine
          </h3>

          {/* Interactive Dynamic Bubble */}
          <motion.div
            key={quoteIndex}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 rounded-xl bg-[#F5F2EB] border border-[#111114]/10 text-xs font-mono text-[#111114] relative"
          >
            <span className="text-[#FF4D36] font-bold">“</span>
            <span className="font-medium">{STUDY_QUOTES[quoteIndex]}</span>
            <span className="text-[#FF4D36] font-bold">”</span>
            <span className="block text-[9px] text-[#6B6675] mt-1 uppercase">
              Click companion to cycle focus status ↻
            </span>
          </motion.div>

        </div>

      </div>

    </motion.div>
  );
};
