import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, Footprints, Wind, Sparkles } from 'lucide-react';
import { soundFX } from '../../utils/audio';

export const WalkingStrideAnimation: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => {
        setIsHovered(true);
        soundFX.playHover();
      }}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => soundFX.playClick()}
      className="relative mb-12 rounded-2xl overflow-hidden bg-gradient-to-r from-[#FF5238] via-[#FF6636] to-[#FA462B] text-white p-6 sm:p-8 shadow-collage cursor-pointer select-none group"
      title="Click to feel the momentum!"
    >
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-editorial-grid opacity-15 pointer-events-none" />

      {/* Floating Cloud / Wind Puffs drifting across the background */}
      <motion.div
        animate={{ x: ['100%', '-100%'] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        className="absolute top-6 w-24 h-6 rounded-full bg-white/20 filter blur-xs pointer-events-none"
      />
      <motion.div
        animate={{ x: ['120%', '-100%'] }}
        transition={{ duration: 18, delay: 4, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-8 w-36 h-8 rounded-full bg-white/15 filter blur-xs pointer-events-none"
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        
        {/* Left: Walking Character in Stride */}
        <div className="md:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-44 sm:w-52 aspect-[3/4] rounded-xl overflow-hidden border-2 border-white/30 shadow-2xl bg-[#FF4D36]">
            
            {/* Character Walk Cycle Simulation */}
            <motion.div
              animate={{
                y: [0, -5, 0],
                x: [-4, 4, -4],
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-full h-full relative"
            >
              <img
                src="/assets/pins/pin3.jpg"
                alt="Stylized animated character in blue robe walking in stride"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

            {/* In-Card Stamp */}
            <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[9px] font-mono text-white uppercase tracking-wider font-bold">
              FORWARD MOMENTUM
            </div>
          </div>
        </div>

        {/* Right: Narrative on Energy, Athletics & Strategy */}
        <div className="md:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 backdrop-blur-md text-xs font-mono font-bold tracking-widest uppercase">
            <Footprints size={14} className="text-white" />
            <span>Active Motion & Creative Pursuits</span>
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight">
            Striding Beyond The Classroom
          </h3>

          <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light">
            Continuous forward momentum defines my approach outside academics. From the calculated, deliberate pawn breaks on the 64-square chessboard (FIDE 1505) to physical stamina on the football pitch and high-energy video pacing on YouTube (Jarvis CR).
          </p>

          <div className="flex flex-wrap gap-3 pt-2 text-xs font-mono">
            <span className="px-3 py-1.5 rounded-lg bg-black/30 backdrop-blur-sm border border-white/20">
              ♘ Chess: 1505 FIDE Rating
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-black/30 backdrop-blur-sm border border-white/20">
              ⚽ Athletics: Football & Cricket
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-black/30 backdrop-blur-sm border border-white/20">
              🎬 Media: Jarvis CR Channel
            </span>
          </div>
        </div>

      </div>

    </motion.div>
  );
};
