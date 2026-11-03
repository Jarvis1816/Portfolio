import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { soundFX } from '../../utils/audio';

const PRESENTATION_CALLOUTS = [
  '“Behold! The Production Machine Learning Models!”',
  '“Presenting: Smart Park & OLA Fleet Telematics!”',
  '“Engineered with SQL, Python & Predictive Regression!”',
  '“Built with mathematical rigor & real fleet datasets!”',
];

export const WillSmithPresentationAnimation: React.FC = () => {
  const [calloutIndex, setCalloutIndex] = useState(0);

  const handleClick = () => {
    soundFX.playClick();
    setCalloutIndex((prev) => (prev + 1) % PRESENTATION_CALLOUTS.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onClick={handleClick}
      className="relative mb-10 p-5 sm:p-6 rounded-2xl bg-[#FFFFFF] border border-[#111114]/15 shadow-collage hover:border-[#FF4D36] transition-all cursor-pointer group select-none overflow-hidden"
      title="Click Will Smith to celebrate the projects!"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Presentation Figure (Will Smith Gesture) */}
        <div className="relative shrink-0 w-36 sm:w-44 h-40 sm:h-44 flex items-center justify-center">
          
          {/* Subtle Stage Spotlight */}
          <div className="absolute inset-0 rounded-full bg-[#FF4D36]/10 filter blur-xl group-hover:bg-[#FF4D36]/25 transition-all" />

          {/* Spring Floating Gesture Motion */}
          <motion.div
            animate={{
              y: [0, -6, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-full h-full relative"
          >
            <img
              src="/assets/pins/pin1.jpg"
              alt="Will Smith presenting gesture meme"
              className="w-full h-full object-contain mix-blend-multiply filter contrast-110 group-hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Presentation Tag Stamp */}
          <div className="absolute bottom-1 left-2 px-2 py-0.5 rounded bg-[#111114] text-white text-[9px] font-mono uppercase font-bold tracking-wider">
            FEATURED DEMO
          </div>
        </div>

        {/* Right Content: Callout pointing towards the projects */}
        <div className="space-y-3 flex-grow text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF4D36] animate-ping" />
            <span className="text-[11px] font-mono uppercase font-bold text-[#FF4D36] tracking-wider">
              TA-DA! SHOWCASE TIME
            </span>
          </div>

          <h3 className="font-heading text-xl sm:text-2xl font-black text-[#111114] uppercase tracking-tight">
            Here are the Applied Works & Models
          </h3>

          <motion.div
            key={calloutIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-3.5 rounded-xl bg-[#F5F2EB] border border-[#111114]/15 text-xs sm:text-sm font-mono text-[#111114]"
          >
            <p className="font-bold text-[#FF4D36]">
              {PRESENTATION_CALLOUTS[calloutIndex]}
            </p>
            <span className="text-[10px] text-[#6B6675] mt-1 block uppercase">
              Click to cycle presentation callouts ↻
            </span>
          </motion.div>

          <p className="text-xs text-[#6B6675] leading-relaxed">
            Hands-on machine learning engineering from real fleet telemetry to live interactive mathematics platforms.
          </p>
        </div>

        {/* Directional Indicator Pointing Below */}
        <div className="hidden lg:flex flex-col items-center justify-center p-3 text-[#FF4D36]">
          <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#6B6675] rotate-90 my-2">
            SCROLL
          </span>
          <ArrowRight size={20} className="rotate-90 animate-bounce" />
        </div>

      </div>
    </motion.div>
  );
};
