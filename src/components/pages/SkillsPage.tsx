import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Terminal, 
  Layers, 
  Wrench, 
  Sparkles, 
  Compass, 
  ArrowRight,
  Cpu,
  Brain,
  LineChart
} from 'lucide-react';
import { SectionId } from '../../types';
import { soundFX } from '../../utils/audio';

interface SkillsPageProps {
  onNavigateTo: (section: SectionId) => void;
}

type FilterCategory = 'all' | 'languages' | 'libraries' | 'concepts' | 'tools' | 'ai';

export const SkillsPage: React.FC<SkillsPageProps> = ({ onNavigateTo }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const categories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: Terminal,
      description: 'Core syntax and procedural/structured programming foundations',
      items: [
        { name: 'Python', note: 'Primary scripting & ML language', highlight: true },
        { name: 'C', note: 'Low-level memory & fundamentals', highlight: false },
        { name: 'SQL', note: 'Relational querying & data extraction', highlight: true },
      ],
    },
    {
      id: 'libraries',
      title: 'Data & Python Libraries',
      icon: LineChart,
      description: 'Foundational scientific and data manipulation libraries (introductory)',
      items: [
        { name: 'NumPy', note: 'N-dimensional arrays & numerical operations', highlight: false },
        { name: 'Pandas', note: 'DataFrames, series, cleaning & shaping', highlight: true },
        { name: 'Matplotlib', note: 'Data visualization & telemetry plots', highlight: false },
      ],
    },
    {
      id: 'concepts',
      title: 'Computer Science Core Concepts',
      icon: Layers,
      description: 'Algorithmic grounding and software engineering foundations',
      items: [
        { name: 'Object-Oriented Programming (OOP)', note: 'Encapsulation, modularity, classes', highlight: true },
        { name: 'Data Structures', note: 'Arrays, linked lists, stacks, trees', highlight: true },
        { name: 'Algorithm Design', note: 'Sorting, searching, time/space complexity', highlight: false },
        { name: 'Data Analysis', note: 'Exploratory analysis, cleansing, aggregation', highlight: false },
        { name: 'Machine Learning Fundamentals', note: 'Supervised regression & predictive workflows', highlight: true },
      ],
    },
    {
      id: 'tools',
      title: 'Developer Tools & Platforms',
      icon: Wrench,
      description: 'Environments and version control tooling for active development',
      items: [
        { name: 'Git', note: 'Distributed version control & branching', highlight: false },
        { name: 'GitHub', note: 'Repository management & collaboration', highlight: true },
        { name: 'Visual Studio Code', note: 'Primary code editor & extensions ecosystem', highlight: false },
      ],
    },
    {
      id: 'ai',
      title: 'Prompt Engineering & LLM Context',
      icon: Sparkles,
      description: 'Structured context orchestration and prompt architecture',
      items: [
        { name: 'Prompt Engineering', note: 'Crafting task-specific instructions for Claude & ChatGPT', highlight: true },
        { name: 'Context Structuring', note: 'Structuring multi-turn input context & system guidelines', highlight: false },
        { name: 'Iterative Prompt Improvement', note: 'Systematic refinement and evaluation', highlight: false },
      ],
    },
  ];

  const filteredCategories = activeFilter === 'all'
    ? categories
    : categories.filter(c => c.id === activeFilter);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#111114]">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 border-b border-[#111114]/15 pb-8"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-[2px] bg-[#FF4D36]" />
          <span className="text-xs font-mono tracking-widest text-[#FF4D36] uppercase font-bold">
            03 // TECHNICAL CAPABILITIES
          </span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#111114] uppercase">
          Skills & Technologies
        </h1>
        <p className="text-sm sm:text-base text-[#6B6675] max-w-2xl mt-2 font-normal">
          Organized by domain-specific capabilities. Grounded in computational fundamentals, data manipulation, and machine learning foundations.
        </p>
      </motion.div>

      {/* Interactive Filter Controls */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#FFFFFF] border border-[#111114]/15 rounded-xl mb-10 shadow-xs">
        {[
          { id: 'all', label: 'All Categories' },
          { id: 'languages', label: 'Languages' },
          { id: 'libraries', label: 'Data Libraries' },
          { id: 'concepts', label: 'Core CS Concepts' },
          { id: 'tools', label: 'Tools & Platforms' },
          { id: 'ai', label: 'Prompt Engineering' },
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => {
              soundFX.playClick();
              setActiveFilter(btn.id as FilterCategory);
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer uppercase tracking-wider ${
              activeFilter === btn.id
                ? 'bg-[#111114] text-white shadow-xs'
                : 'text-[#6B6675] hover:text-[#111114] hover:bg-[#111114]/5'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Categorized Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#111114]/15 hover:border-[#FF4D36] transition-all shadow-collage group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#F5F2EB] border border-[#111114]/15 flex items-center justify-center text-[#FF4D36] group-hover:scale-105 transition-transform">
                  <Icon size={20} />
                </div>
                <div>
                  <h2 className="font-heading text-lg font-black text-[#111114] uppercase">
                    {cat.title}
                  </h2>
                  <p className="text-xs text-[#6B6675]">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skills Items List */}
              <div className="mt-5 space-y-2.5">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-3 rounded-xl bg-[#F5F2EB] border border-[#111114]/10 hover:border-[#FF4D36]/40 transition-colors flex items-start justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#111114]">
                          {item.name}
                        </span>
                        {item.highlight && (
                          <span className="text-[10px] font-mono text-[#FF4D36] bg-[#FF4D36]/10 px-1.5 py-0.2 rounded font-semibold uppercase">
                            Core
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#6B6675] mt-0.5 font-normal">
                        {item.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}

        {/* Looping Dev Video Card - Placed beside Prompt Engineering & LLM Context */}
        {(activeFilter === 'all' || activeFilter === 'ai') && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#111114]/15 hover:border-[#FF4D36] transition-all shadow-collage flex flex-col justify-between group overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F2EB] border border-[#111114]/15 flex items-center justify-center text-[#FF4D36] group-hover:scale-105 transition-transform">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h2 className="font-heading text-lg font-black text-[#111114] uppercase">
                      Dev Flow & Rapid Prompting
                    </h2>
                    <p className="text-xs text-[#6B6675]">
                      Iterative model experimentation & high-speed typing flow
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-md bg-[#111114] text-white text-[10px] font-mono uppercase font-bold tracking-wider shrink-0">
                  DEV CAM
                </span>
              </div>

              {/* Looping Keyboard Cat Video Frame */}
              <div className="relative rounded-xl overflow-hidden border border-[#111114]/20 bg-[#111114] shadow-inner aspect-[16/10] sm:aspect-[16/11]">
                <video
                  src="/assets/videos/skills_cat_keyboard.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[9px] font-mono text-white flex items-center gap-1.5 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D36] animate-ping" />
                  <span>60 FPS // LOOP</span>
                </div>

                <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[9px] font-mono text-[#FF4D36] font-bold">
                  120 WPM · FLOW STATE
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#111114]/10 flex items-center justify-between text-xs font-mono text-[#6B6675]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Active Terminal Session
              </span>
              <span className="text-[#111114] font-semibold">Claude · ChatGPT · VS Code</span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Career Interests Focus Box */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="mt-10 p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-[#111114]/15 shadow-collage"
      >
        <div className="flex items-center gap-2.5 text-[#FF4D36] mb-2">
          <Compass size={20} />
          <h2 className="font-heading text-lg font-black text-[#111114] uppercase">
            Primary Career & Exploration Interests
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#6B6675] mb-4">
          Areas where I am channeling my academic depth, analytical experiments, and future opportunities:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[#F5F2EB] border border-[#111114]/10">
            <div className="flex items-center gap-2 text-[#FF4D36] mb-1 font-bold text-sm">
              <Brain size={16} />
              <span>Data Science</span>
            </div>
            <p className="text-xs text-[#6B6675]">
              Exploratory analysis, feature cleaning, numerical pipelines, and statistical reasoning.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F5F2EB] border border-[#111114]/10">
            <div className="flex items-center gap-2 text-[#FF4D36] mb-1 font-bold text-sm">
              <Cpu size={16} />
              <span>Machine Learning</span>
            </div>
            <p className="text-xs text-[#6B6675]">
              Regression modeling, supervised training, evaluation metrics, and algorithmic tuning.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F5F2EB] border border-[#111114]/10">
            <div className="flex items-center gap-2 text-[#FF4D36] mb-1 font-bold text-sm">
              <Sparkles size={16} />
              <span>Artificial Intelligence</span>
            </div>
            <p className="text-xs text-[#6B6675]">
              Modern LLM context orchestration, prompt engineering, and intelligent systems design.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Footer Navigation */}
      <div className="mt-12 pt-6 border-t border-[#111114]/15 flex justify-end">
        <button
          onClick={() => {
            soundFX.playClick();
            onNavigateTo('experience');
          }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-[#111114] bg-[#FFFFFF] border border-[#111114]/20 hover:border-[#FF4D36] hover:text-[#FF4D36] transition-all cursor-pointer uppercase tracking-wider"
        >
          <span>Explore Experience & Projects</span>
          <ArrowRight size={15} />
        </button>
      </div>

    </div>
  );
};

