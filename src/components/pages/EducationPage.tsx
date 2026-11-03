import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  ArrowRight,
  TrendingUp,
  School
} from 'lucide-react';
import { SectionId } from '../../types';
import { soundFX } from '../../utils/audio';

import { StudyingCatAnimation } from '../animations/StudyingCatAnimation';

interface EducationPageProps {
  onNavigateTo: (section: SectionId) => void;
}

export const EducationPage: React.FC<EducationPageProps> = ({ onNavigateTo }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#111114]">
      
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
            02 // ACADEMIC RECORD
          </span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#111114] uppercase">
          Education & Grades
        </h1>
        <p className="text-sm sm:text-base text-[#6B6675] max-w-2xl mt-2 font-normal">
          Analytical performance, academic coursework in Computer Science & Artificial Intelligence, and verified mathematical foundations.
        </p>
      </motion.div>

      {/* Interactive Studying Cat Animation (Pin Reference) */}
      <div className="mb-10">
        <StudyingCatAnimation />
      </div>

      {/* Quick Performance Metrics Bar */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12"
      >
        <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#111114]/15 shadow-xs">
          <span className="text-[11px] font-mono text-[#6B6675] block uppercase font-semibold">Sem 2 SGPA</span>
          <span className="font-heading text-2xl sm:text-3xl font-black text-[#FF4D36] tabular-nums mt-1 block">
            9.435
          </span>
          <span className="text-[11px] text-[#6B6675]">Out of 10.0 scale</span>
        </div>

        <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#111114]/15 shadow-xs">
          <span className="text-[11px] font-mono text-[#6B6675] block uppercase font-semibold">Sem 1 SGPA</span>
          <span className="font-heading text-2xl sm:text-3xl font-black text-[#111114] tabular-nums mt-1 block">
            8.90
          </span>
          <span className="text-[11px] text-[#6B6675]">Out of 10.0 scale</span>
        </div>

        <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#111114]/15 shadow-xs">
          <span className="text-[11px] font-mono text-[#6B6675] block uppercase font-semibold">Class XII CBSE</span>
          <span className="font-heading text-2xl sm:text-3xl font-black text-[#111114] tabular-nums mt-1 block">
            87%
          </span>
          <span className="text-[11px] text-[#6B6675]">PCM + Physical Ed.</span>
        </div>

        <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#111114]/15 shadow-xs">
          <span className="text-[11px] font-mono text-[#6B6675] block uppercase font-semibold">Class X CBSE</span>
          <span className="font-heading text-2xl sm:text-3xl font-black text-[#111114] tabular-nums mt-1 block">
            92%
          </span>
          <span className="text-[11px] text-[#6B6675]">Secondary Board</span>
        </div>
      </motion.div>

      {/* Timeline Representation */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-[#111114]/15 space-y-10">
        
        {/* Milestone 1: B.Tech CSE (AI & ML) */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          {/* Timeline node */}
          <div className="absolute -left-[31px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#FFFFFF] border-3 border-[#FF4D36]" />

          {/* Academic Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-[#111114]/15 hover:border-[#FF4D36] transition-all shadow-collage">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-white bg-[#111114] px-2.5 py-1 rounded font-semibold uppercase">
                <Calendar size={13} />
                Aug 2025 – Present (2nd Year)
              </span>
              <span className="text-xs font-mono text-[#6B6675]">Bengaluru, India</span>
            </div>

            <h2 className="font-heading text-xl sm:text-2xl font-black text-[#111114] uppercase mt-2">
              B.Tech in Computer Science and Engineering
            </h2>
            <p className="text-sm font-semibold text-[#FF4D36] mt-1">
              Specialization: Artificial Intelligence & Machine Learning (AI & ML)
            </p>
            <p className="text-sm text-[#6B6675] mt-1 flex items-center gap-1.5">
              <School size={15} />
              Jain (Deemed-to-be University), Bengaluru
            </p>

            {/* Semester Performance Showcase */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5 pt-4 border-t border-[#111114]/10">
              <div className="p-3.5 rounded-xl bg-[#F5F2EB] border border-[#111114]/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#6B6675] block font-mono">Semester 1 SGPA</span>
                  <span className="font-heading text-lg font-bold text-[#111114]">8.90 / 10.0</span>
                </div>
                <Award size={20} className="text-[#6B6675]" />
              </div>

              <div className="p-3.5 rounded-xl bg-[#F5F2EB] border border-[#FF4D36]/40 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-[#FF4D36] block font-mono font-bold">Semester 2 SGPA</span>
                    <TrendingUp size={12} className="text-[#FF4D36]" />
                  </div>
                  <span className="font-heading text-lg font-black text-[#FF4D36]">9.435 / 10.0</span>
                </div>
                <Award size={20} className="text-[#FF4D36]" />
              </div>
            </div>

            {/* Coursework Tags */}
            <div className="mt-5">
              <span className="text-xs font-mono text-[#6B6675] block mb-2 uppercase font-semibold">
                Relevant Coursework
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                {['Programming in C', 'Python', 'Mathematics for Computing', 'Data Structures'].map((course) => (
                  <span 
                    key={course}
                    className="px-2.5 py-1 rounded bg-[#F5F2EB] border border-[#111114]/15 text-[#111114] font-medium"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Milestone 2: Class XII CBSE */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative group"
        >
          {/* Timeline node */}
          <div className="absolute -left-[31px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#FFFFFF] border-3 border-[#111114]" />

          <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#111114]/15 hover:border-[#111114] transition-all shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono text-[#6B6675] flex items-center gap-1.5">
                <Calendar size={13} />
                2025 · Senior Secondary
              </span>
              <span className="px-2.5 py-0.5 rounded bg-[#111114] text-xs font-mono text-white font-semibold">
                87% Aggregate
              </span>
            </div>

            <h2 className="font-heading text-lg sm:text-xl font-bold text-[#111114] uppercase">
              Class XII – Central Board of Secondary Education (CBSE)
            </h2>
            <p className="text-sm text-[#6B6675] mt-1">
              Sri Chaitanya Techno School, Bengaluru
            </p>
            <p className="text-xs text-[#6B6675] mt-2 font-normal">
              Focus stream: Physics, Chemistry, Mathematics (PCM) with Physical Education.
            </p>
          </div>
        </motion.div>

        {/* Milestone 3: Class X CBSE */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative group"
        >
          {/* Timeline node */}
          <div className="absolute -left-[31px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#FFFFFF] border-3 border-[#111114]" />

          <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#111114]/15 hover:border-[#111114] transition-all shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono text-[#6B6675] flex items-center gap-1.5">
                <Calendar size={13} />
                2023 · Secondary School Examination
              </span>
              <span className="px-2.5 py-0.5 rounded bg-[#111114] text-xs font-mono text-white font-semibold">
                92% Aggregate
              </span>
            </div>

            <h2 className="font-heading text-lg sm:text-xl font-bold text-[#111114] uppercase">
              Class X – Central Board of Secondary Education (CBSE)
            </h2>
            <p className="text-sm text-[#6B6675] mt-1">
              Mount Litera Zee School, Bengaluru
            </p>
            <p className="text-xs text-[#6B6675] mt-2 font-normal">
              Distinction across mathematics, sciences, and foundational analytical subjects.
            </p>
          </div>
        </motion.div>

      </div>

      {/* Next Step Nav CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 pt-6 border-t border-[#111114]/15 flex justify-end"
      >
        <button
          onClick={() => {
            soundFX.playClick();
            onNavigateTo('skills');
          }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-[#111114] bg-[#FFFFFF] border border-[#111114]/20 hover:border-[#FF4D36] hover:text-[#FF4D36] transition-all cursor-pointer uppercase tracking-wider"
        >
          <span>View Skills & Technologies</span>
          <ArrowRight size={15} />
        </button>
      </motion.div>
    </div>
  );
};

