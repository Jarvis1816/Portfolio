import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, FileDown, ExternalLink, CheckCircle2 } from 'lucide-react';
import { soundFX } from '../utils/audio';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const resumePdfPath = '/assets/aistudio/Cheruvu_Sivateja_Resume_Updated__2__42e9f862.pdf';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            soundFX.playClick();
            onClose();
          }}
          className="absolute inset-0 bg-[#111114]/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-[#FFFFFF] border border-[#111114]/20 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh] text-[#111114]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-[#111114]/15 bg-[#F5F2EB]">
            <div>
              <span className="text-[11px] font-mono text-[#FF4D36] uppercase tracking-wider block font-bold">
                Official Document
              </span>
              <h2 className="font-heading text-lg sm:text-xl font-black text-[#111114] uppercase">
                Cheruvu Siva Teja – Resume
              </h2>
            </div>

            <button
              onClick={() => {
                soundFX.playClick();
                onClose();
              }}
              className="p-2 rounded-lg text-[#6B6675] hover:text-[#111114] hover:bg-[#111114]/5 transition-colors cursor-pointer"
              title="Close (Esc)"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 overflow-y-auto space-y-5 text-sm text-[#2C2836]">
            
            {/* Quick Profile Summary */}
            <div className="p-4 rounded-xl bg-[#F5F2EB] border border-[#111114]/10 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-bold text-[#111114] text-base uppercase">Cheruvu Siva Teja</span>
                <span className="text-xs font-mono text-[#FF4D36] font-semibold">2nd Semester B.Tech</span>
              </div>
              <p className="text-xs text-[#6B6675]">
                Computer Science & Engineering (AI & ML) · Jain (Deemed-to-be University), Bengaluru
              </p>
              <div className="flex flex-wrap gap-2 text-xs pt-1">
                <span className="px-2.5 py-0.5 rounded bg-white text-[#111114] border border-[#111114]/15 font-mono font-semibold">
                  SGPA: 9.435
                </span>
                <span className="px-2.5 py-0.5 rounded bg-white text-[#FF4D36] border border-[#111114]/15 font-mono font-semibold">
                  FIDE 1505
                </span>
                <span className="px-2.5 py-0.5 rounded bg-white text-[#111114] border border-[#111114]/15 font-mono font-semibold">
                  OLA ML Intern
                </span>
              </div>
            </div>

            {/* Embedded Resume Highlights */}
            <div className="space-y-3 text-xs">
              <span className="font-mono text-[#6B6675] uppercase block font-semibold">
                Resume Verified Highlights
              </span>
              
              <div className="space-y-2">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F5F2EB] border border-[#111114]/10">
                  <CheckCircle2 size={16} className="text-[#FF4D36] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#111114]">B.Tech – CSE (AI & ML):</strong> Jain University (Aug 2025–Present). Sem 1 SGPA: 8.9 / 10.0 | Sem 2 SGPA: 9.435 / 10.0.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F5F2EB] border border-[#111114]/10">
                  <CheckCircle2 size={16} className="text-[#FF4D36] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#111114]">Internship at OLA:</strong> Data handling (collecting, cleaning, preparing) and Machine Learning regression model development.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F5F2EB] border border-[#111114]/10">
                  <CheckCircle2 size={16} className="text-[#FF4D36] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#111114]">Technical Proficiencies:</strong> Python, C, SQL, NumPy, Pandas, Matplotlib, Git, VS Code, Algorithm Design & OOP.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F5F2EB] border border-[#111114]/10">
                  <CheckCircle2 size={16} className="text-[#FF4D36] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#111114]">Languages:</strong> English (Professional), Telugu (Native), Hindi (Conversational), Kannada (Conversational).
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-5 border-t border-[#111114]/15 bg-[#F5F2EB]">
            <span className="text-xs text-[#6B6675]">
              Original PDF file provided by candidate
            </span>

            <div className="flex items-center gap-3">
              <a
                href={resumePdfPath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-[#111114] bg-[#FFFFFF] border border-[#111114]/20 hover:border-[#FF4D36] transition-all uppercase tracking-wider"
              >
                <ExternalLink size={13} />
                <span>Open in Tab</span>
              </a>

              <a
                href={resumePdfPath}
                download="Cheruvu_Siva_Teja_Resume.pdf"
                onClick={() => soundFX.playClick()}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#FF4D36] hover:bg-[#111114] transition-colors uppercase tracking-wider"
              >
                <FileDown size={14} />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

