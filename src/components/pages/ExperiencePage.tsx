import React from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  ExternalLink, 
  ArrowRight,
  CheckCircle2,
  Ticket
} from 'lucide-react';
import { SectionId } from '../../types';
import { soundFX } from '../../utils/audio';
import { WillSmithPresentationAnimation } from '../animations/WillSmithPresentationAnimation';

interface ExperiencePageProps {
  onNavigateTo: (section: SectionId) => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({ onNavigateTo }) => {
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
            04 // PROFESSIONAL & APPLIED WORKS
          </span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#111114] uppercase">
          Experience & Projects
        </h1>
        <p className="text-sm sm:text-base text-[#6B6675] max-w-2xl mt-2 font-normal">
          A showcase of hands-on industry exposure at OLA and applied mathematics & software engineering coursework.
        </p>
      </motion.div>

      {/* Presentation Animation (Pin Reference - Will Smith Gesture) */}
      <WillSmithPresentationAnimation />

      {/* SECTION 1: OLA Machine Learning Internship */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mb-14 rounded-2xl bg-[#FFFFFF] border border-[#111114]/15 overflow-hidden shadow-collage"
      >
        <div className="p-6 sm:p-8">
          
          {/* Top metadata tag and title */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-md bg-[#111114] text-xs font-mono text-white font-semibold uppercase tracking-wider">
                Internship Experience
              </span>
              <span className="text-xs font-mono text-[#6B6675]">Data Handling & Machine Learning</span>
            </div>
            <span className="text-xs font-mono font-bold text-[#FF4D36]">OLA</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left column: Role & Context */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-black text-[#111114] uppercase">
                  Machine Learning Intern
                </h2>
                <p className="text-sm font-semibold text-[#FF4D36] mt-1 font-mono">
                  Organisation: OLA
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#2C2836] font-normal leading-relaxed">
                During my internship at OLA, I undertook a structured learning and data science progression. The experience bridge theoretical concepts with real-world mobility fleet data, progressing from structured database querying into predictive machine learning workflows.
              </p>

              {/* Step Progression Timeline */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono text-[#6B6675] uppercase block font-semibold">
                  Learning & Technical Progression
                </span>

                <div className="space-y-2.5">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F5F2EB] border border-[#111114]/10">
                    <span className="text-xs font-mono text-[#FF4D36] font-bold mt-0.5">01</span>
                    <div>
                      <h3 className="text-xs font-bold text-[#111114] uppercase">SQL Foundations & Data Retrieval</h3>
                      <p className="text-[11px] text-[#6B6675]">Began by mastering relational queries to extract, filter, and inspect structured data tables.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F5F2EB] border border-[#111114]/10">
                    <span className="text-xs font-mono text-[#FF4D36] font-bold mt-0.5">02</span>
                    <div>
                      <h3 className="text-xs font-bold text-[#111114] uppercase">Python Programming Fundamentals</h3>
                      <p className="text-[11px] text-[#6B6675]">Transitioned to programmatic scripting, object manipulation, and data transformation.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F5F2EB] border border-[#111114]/10">
                    <span className="text-xs font-mono text-[#FF4D36] font-bold mt-0.5">03</span>
                    <div>
                      <h3 className="text-xs font-bold text-[#111114] uppercase">Data Analysis & Python Libraries</h3>
                      <p className="text-[11px] text-[#6B6675]">Explored libraries (Pandas, NumPy, Matplotlib) for data cleaning, aggregation, and plotting.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F5F2EB] border border-[#111114]/10">
                    <span className="text-xs font-mono text-[#FF4D36] font-bold mt-0.5">04</span>
                    <div>
                      <h3 className="text-xs font-bold text-[#111114] uppercase">Fleet Dataset Analysis (VIN & Distance)</h3>
                      <p className="text-[11px] text-[#6B6675]">Worked with a real dataset containing Vehicle Identification Numbers (VIN) and distance-related metrics.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F5F2EB] border border-[#FF4D36]/40">
                    <span className="text-xs font-mono text-[#FF4D36] font-bold mt-0.5">05</span>
                    <div>
                      <h3 className="text-xs font-bold text-[#FF4D36] uppercase">Regression Machine Learning Model</h3>
                      <p className="text-[11px] text-[#6B6675]">Engineered a predictive machine learning model leveraging regression techniques.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right column: Visual Representation */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden border border-[#111114]/20 bg-[#111114] shadow-md">
                <img
                  src="/assets/aistudio/image_c9cfca54.png"
                  alt="OLA Office & Machine Learning Internship"
                  className="w-full aspect-[16/10] object-cover object-center"
                />
                <div className="p-3.5 bg-[#111114] border-t border-white/10 text-xs text-[#B3ADBE]">
                  <span className="text-[#FF4D36] font-semibold block uppercase">OLA Electric & Mobility</span>
                  Machine Learning Internship · Vehicle fleet telemetry & regression modeling.
                </div>
              </div>
            </div>

          </div>

        </div>
      </motion.div>

      {/* SECTION 2: Academic Projects – Smart Park */}
      <div className="mb-8">
        <span className="text-xs font-mono tracking-widest text-[#FF4D36] uppercase block mb-1 font-bold">
          Academic Project Spotlight
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-black text-[#111114] uppercase">
          Smart Park
        </h2>
        <p className="text-sm text-[#6B6675] mt-1 font-normal">
          AI-Powered Theme Park Analytics & Mathematics Experiential Learning System.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="rounded-2xl bg-[#FFFFFF] border border-[#111114]/15 overflow-hidden shadow-collage group"
      >
        <div className="p-6 sm:p-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Preview */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-xl overflow-hidden border border-[#111114]/20 bg-[#111114] shadow-md group-hover:border-[#FF4D36] transition-all">
                <img
                  src="/assets/aistudio/image_eada5d06.png"
                  alt="Smart Park AI Analytics Project Preview"
                  className="w-full aspect-[16/10] object-cover filter contrast-[1.02] group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#111114]/90 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white flex items-center gap-1.5 uppercase font-semibold">
                  <Ticket size={12} className="text-[#FF4D36]" />
                  <span>AI Analytics & Park Experience</span>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-[#111114] text-xs font-mono text-white font-semibold uppercase">
                  Mathematics & AI Analytics
                </span>
                <span className="text-xs font-mono text-[#6B6675]">College Academic Project</span>
              </div>

              <h3 className="font-heading text-2xl font-black text-[#111114] uppercase">
                Smart Park
              </h3>

              <p className="text-sm text-[#2C2836] font-normal leading-relaxed">
                Smart Park is an experiential learning project conceived around theme park analytics and guest experience engineering. The application combines mathematical crowd modeling, ride wait-time analytics, and customer experience systems.
              </p>

              {/* Core capabilities */}
              <div className="space-y-2 pt-1 text-xs text-[#6B6675]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-[#FF4D36] shrink-0 mt-0.5" />
                  <span><strong className="text-[#111114]">Zone & Ride Intelligence:</strong> Explores thrill zones, water rides, family zones, and real-time operational capacity metrics.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-[#FF4D36] shrink-0 mt-0.5" />
                  <span><strong className="text-[#111114]">Crowd & Wait-Time Analytics:</strong> Real-time estimation of wait times (18 min average) and visitor volume flow modeling.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-[#FF4D36] shrink-0 mt-0.5" />
                  <span><strong className="text-[#111114]">Interactive Experience System:</strong> Digital navigation, park map distribution, and intuitive visitor admission workflows.</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="https://wonderlab-sentinel.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFX.playClick()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#FF4D36] hover:bg-[#111114] transition-colors cursor-pointer uppercase tracking-wider"
                >
                  <span>View Live Project</span>
                  <ExternalLink size={14} />
                </a>

                <a
                  href="https://github.com/Jarvis1816"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-[#111114] bg-[#FFFFFF] border border-[#111114]/20 hover:border-[#FF4D36] transition-all uppercase tracking-wider"
                >
                  <span>GitHub Profile</span>
                  <ExternalLink size={13} className="text-[#6B6675]" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </motion.div>

      {/* Navigation Footer */}
      <div className="mt-12 pt-6 border-t border-[#111114]/15 flex justify-end">
        <button
          onClick={() => {
            soundFX.playClick();
            onNavigateTo('beyond-academics');
          }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-[#111114] bg-[#FFFFFF] border border-[#111114]/20 hover:border-[#FF4D36] hover:text-[#FF4D36] transition-all cursor-pointer uppercase tracking-wider"
        >
          <span>Explore Beyond Academics</span>
          <ArrowRight size={15} />
        </button>
      </div>

    </div>
  );
};

