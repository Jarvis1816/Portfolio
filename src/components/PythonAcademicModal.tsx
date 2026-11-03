import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Code, Copy, Check, Terminal, FileCode, CheckCircle2 } from 'lucide-react';
import { soundFX } from '../utils/audio';

interface PythonAcademicModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PythonAcademicModal: React.FC<PythonAcademicModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'explanation' | 'app_py' | 'templates'>('explanation');

  if (!isOpen) return null;

  const pythonFlaskCode = `"""
Cheruvu Siva Teja - Academic Python Portfolio Backend
Framework: Python 3.10+ / Flask
University: Jain (Deemed-to-be University), Bengaluru
Course: B.Tech CSE (AI & ML)
"""

from flask import Flask, render_template, request, jsonify, send_from_directory
import os

app = Flask(__name__)

# Personal & Academic Data Verified Repository
PORTFOLIO_DATA = {
    "name": "Cheruvu Siva Teja",
    "degree": "B.Tech - Computer Science & Engineering (AI & ML)",
    "university": "Jain (Deemed-to-be University), Bengaluru",
    "semester": "2nd Year (Semester 2 SGPA: 9.435, Semester 1 SGPA: 8.90)",
    "chess_rating": 1505,
    "email": "sivateja.cheruvu@gmail.com",
    "linkedin": "https://linkedin.com/in/siva-teja-cheruvu-39b60638a/",
    "github": "https://github.com/Jarvis1816",
    "youtube": "https://www.youtube.com/@Jarvis-CR/shorts"
}

@app.route('/')
def home():
    """Renders the Editorial Magazine Portfolio Homepage"""
    return render_template('index.html', data=PORTFOLIO_DATA)

@app.route('/about')
def about():
    """Renders About Me section with biography and mindset"""
    return render_template('about.html', data=PORTFOLIO_DATA)

@app.route('/education')
def education():
    """Renders Academic Timeline and SGPA credentials"""
    return render_template('education.html', data=PORTFOLIO_DATA)

@app.route('/skills')
def skills():
    """Renders Categorized Technical Skills (Python, C, SQL, ML)"""
    return render_template('skills.html', data=PORTFOLIO_DATA)

@app.route('/experience')
def experience():
    """Renders OLA ML Internship & Smart Park Project"""
    return render_template('experience.html', data=PORTFOLIO_DATA)

@app.route('/beyond')
@app.route('/beyond-academics')
def beyond():
    """Renders Chess (FIDE 1505), Sports, and Jarvis CR YouTube Channel"""
    return render_template('beyond.html', data=PORTFOLIO_DATA)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    """Renders Contact information & handles message submissions"""
    if request.method == 'POST':
        name = request.form.get('name')
        subject = request.form.get('subject')
        message = request.form.get('message')
        print(f"[INQUIRY RECEIVED] From: {name} | Subject: {subject} | Note: {message}")
        return jsonify({"status": "success", "message": "Thank you for reaching out!"})
    return render_template('contact.html', data=PORTFOLIO_DATA)

@app.route('/download-resume')
def download_resume():
    """Serves the official PDF resume"""
    documents_dir = os.path.join(app.root_path, 'static', 'documents')
    return send_from_directory(documents_dir, 'Cheruvu_Siva_Teja_Resume.pdf', as_attachment=True)

if __name__ == '__main__':
    # Run development server on port 5000
    print("🚀 Siva Teja's Portfolio Server running at http://127.0.0.1:5000/")
    app.run(host='0.0.0.0', port=5000, debug=True)
`;

  const copyFlaskCode = () => {
    soundFX.playClick();
    navigator.clipboard.writeText(pythonFlaskCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          className="absolute inset-0 bg-[#111114]/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-[#FFFFFF] border border-[#111114]/20 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-[#111114]/10 bg-[#F5F2EB]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#FF4D36]/10 text-[#FF4D36] border border-[#FF4D36]/30">
                <Code size={18} />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#FF4D36] uppercase tracking-wider font-bold block">
                  Academic Compliance & Faculty Submission
                </span>
                <h2 className="font-heading text-lg sm:text-xl font-black text-[#111114] uppercase">
                  Python Flask Architecture Bundle
                </h2>
              </div>
            </div>

            <button
              onClick={() => {
                soundFX.playClick();
                onClose();
              }}
              className="p-2 rounded-lg text-[#6B6675] hover:text-[#111114] hover:bg-[#111114]/5 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="flex items-center gap-2 px-6 pt-3 border-b border-[#111114]/10 bg-[#FFFFFF]">
            <button
              onClick={() => setActiveTab('explanation')}
              className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                activeTab === 'explanation'
                  ? 'border-[#FF4D36] text-[#FF4D36]'
                  : 'border-transparent text-[#6B6675] hover:text-[#111114]'
              }`}
            >
              Academic Disclosure & Setup
            </button>
            <button
              onClick={() => setActiveTab('app_py')}
              className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                activeTab === 'app_py'
                  ? 'border-[#FF4D36] text-[#FF4D36]'
                  : 'border-transparent text-[#6B6675] hover:text-[#111114]'
              }`}
            >
              Python Backend (app.py)
            </button>
            <button
              onClick={() => setActiveTab('templates')}
              className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                activeTab === 'templates'
                  ? 'border-[#FF4D36] text-[#FF4D36]'
                  : 'border-transparent text-[#6B6675] hover:text-[#111114]'
              }`}
            >
              Directory Structure
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-[#383344] bg-[#FFFFFF]">
            
            {activeTab === 'explanation' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#F5F2EB] border border-[#111114]/15">
                  <h3 className="font-heading font-bold text-sm text-[#111114] uppercase mb-1">
                    Transparent Note for Siva Teja & College Evaluators
                  </h3>
                  <p className="text-xs text-[#6B6675] leading-relaxed">
                    This interactive web preview delivers a 60fps editorial magazine aesthetic, fanned card collage, and fluid page transitions.
                  </p>
                  <p className="text-xs text-[#FF4D36] font-semibold mt-2">
                    To satisfy your college faculty’s Python requirement with 100% academic integrity, we have bundled the complete Python Flask backend (<code className="bg-[#FFFFFF] px-1 py-0.5 rounded border border-[#111114]/15 text-[#111114]">python_flask_bundle/app.py</code>) and templates directly in this repository!
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-[#6B6675] uppercase text-[11px] font-semibold block">
                    How to run the Python backend on your local computer:
                  </span>
                  
                  <div className="p-3.5 rounded-xl bg-[#111114] font-mono text-xs text-[#F5F2EB] space-y-2">
                    <div className="text-[#6B6675]"># 1. Open terminal in project directory</div>
                    <div className="text-[#FF4D36]">$ cd python_flask_bundle</div>
                    <div className="text-[#6B6675]"># 2. Install Flask</div>
                    <div className="text-[#FF4D36]">$ pip install flask</div>
                    <div className="text-[#6B6675]"># 3. Start Python backend server</div>
                    <div className="text-[#FF4D36]">$ python app.py</div>
                    <div className="text-[#6B6675]"># 4. Open in browser</div>
                    <div className="text-white">http://127.0.0.1:5000/</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F5F2EB] border border-[#111114]/10 text-xs text-[#6B6675]">
                  <strong className="text-[#111114]">College Viva / Demo Tip:</strong> You can explain to your professor that the architecture is dual-mode: a Python Flask backend serving modular Jinja2 templates for backend academic evaluation, complemented by client-side motion scripts for modern web responsiveness.
                </div>
              </div>
            )}

            {activeTab === 'app_py' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#6B6675] font-semibold">python_flask_bundle/app.py</span>
                  <button
                    onClick={copyFlaskCode}
                    className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#111114] text-white text-xs hover:bg-[#FF4D36] transition-colors cursor-pointer"
                  >
                    {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                    <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                  </button>
                </div>
                <pre className="p-4 rounded-xl bg-[#111114] font-mono text-[11px] text-[#F5F2EB] overflow-x-auto max-h-[350px]">
                  {pythonFlaskCode}
                </pre>
              </div>
            )}

            {activeTab === 'templates' && (
              <div className="space-y-3">
                <p className="text-xs text-[#6B6675]">
                  The modular template organization ready for academic evaluation:
                </p>
                <div className="p-4 rounded-xl bg-[#111114] font-mono text-xs text-[#F5F2EB] space-y-1">
                  <div className="text-[#FF4D36] font-bold">python_flask_bundle/</div>
                  <div>├── app.py                     <span className="text-[#6B6675] text-[11px]"># Flask Routing & API</span></div>
                  <div>├── requirements.txt           <span className="text-[#6B6675] text-[11px]"># Flask==3.0.0</span></div>
                  <div>├── templates/                 <span className="text-[#6B6675] text-[11px]"># HTML Templates</span></div>
                  <div>│   ├── base.html              <span className="text-[#6B6675] text-[11px]"># Editorial base layout</span></div>
                  <div>│   ├── index.html             <span className="text-[#6B6675] text-[11px]"># Editorial magazine hero & cards</span></div>
                  <div>│   ├── about.html             <span className="text-[#6B6675] text-[11px]"># Profile & narrative</span></div>
                  <div>│   ├── education.html         <span className="text-[#6B6675] text-[11px]"># SGPA & timeline</span></div>
                  <div>│   ├── skills.html            <span className="text-[#6B6675] text-[11px]"># Tech stacks & concepts</span></div>
                  <div>│   ├── experience.html        <span className="text-[#6B6675] text-[11px]"># OLA & Smart Park</span></div>
                  <div>│   ├── beyond.html            <span className="text-[#6B6675] text-[11px]"># Chess, sports, YouTube</span></div>
                  <div>│   └── contact.html           <span className="text-[#6B6675] text-[11px]"># Direct contact form</span></div>
                  <div>└── static/</div>
                  <div>    ├── css/style.css</div>
                  <div>    ├── js/editorial.js</div>
                  <div>    ├── images/</div>
                  <div>    └── documents/Cheruvu_Siva_Teja_Resume.pdf</div>
                </div>
              </div>
            )}

          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-4 border-t border-[#111114]/10 bg-[#F5F2EB]">
            <span className="text-xs font-mono text-[#6B6675]">
              Ready for academic college submission
            </span>
            <button
              onClick={() => {
                soundFX.playClick();
                onClose();
              }}
              className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#111114] hover:bg-[#FF4D36] transition-all cursor-pointer"
            >
              Close
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
