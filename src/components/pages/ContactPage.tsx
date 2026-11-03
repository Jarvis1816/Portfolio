import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Youtube, 
  Phone, 
  Send, 
  Copy, 
  Check, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { soundFX } from '../../utils/audio';

export const ContactPage: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [senderName, setSenderName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopy = (text: string, key: string) => {
    soundFX.playClick();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    soundFX.playTransition();
    const mailSubject = encodeURIComponent(subject || 'Inquiry / Connection via Portfolio');
    const mailBody = encodeURIComponent(
      `Hi Siva Teja,\n\n${message}\n\nBest regards,\n${senderName || 'A visitor'}`
    );
    window.location.href = `mailto:sivateja.cheruvu@gmail.com?subject=${mailSubject}&body=${mailBody}`;
  };

  const contacts = [
    {
      id: 'email',
      label: 'Email',
      value: 'sivateja.cheruvu@gmail.com',
      actionUrl: 'mailto:sivateja.cheruvu@gmail.com',
      icon: Mail,
      isExternal: false,
      canCopy: true,
    },
    {
      id: 'phone',
      label: 'Phone',
      value: '+91 9902868107',
      actionUrl: 'tel:+919902868107',
      icon: Phone,
      isExternal: false,
      canCopy: true,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/siva-teja-cheruvu-39b60638a',
      actionUrl: 'https://linkedin.com/in/siva-teja-cheruvu-39b60638a/',
      icon: Linkedin,
      isExternal: true,
      canCopy: false,
    },
    {
      id: 'github',
      label: 'GitHub',
      value: 'github.com/Jarvis1816',
      actionUrl: 'https://github.com/Jarvis1816',
      icon: Github,
      isExternal: true,
      canCopy: false,
    },
    {
      id: 'youtube',
      label: 'YouTube (Jarvis CR)',
      value: '@Jarvis-CR/shorts',
      actionUrl: 'https://www.youtube.com/@Jarvis-CR/shorts',
      icon: Youtube,
      isExternal: true,
      canCopy: false,
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-[#111114]">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 border-b border-[#111114]/15 pb-8"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-[2px] bg-[#FF4D36]" />
          <span className="text-xs font-mono tracking-widest text-[#FF4D36] uppercase font-bold">
            06 // DIRECT DISPATCH
          </span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#111114] uppercase">
          Contact & Connect
        </h1>
        <p className="text-base sm:text-lg text-[#2C2836] max-w-2xl mt-3 font-normal">
          Have an opportunity, an idea, or just want to connect? Feel free to reach out.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Links & Channels */}
        <div className="lg:col-span-5 space-y-3">
          <span className="text-xs font-mono text-[#6B6675] uppercase block mb-1 font-semibold">
            Direct Communication Channels
          </span>

          {contacts.map((c) => {
            const Icon = c.icon;
            const isCopied = copiedKey === c.id;

            return (
              <div
                key={c.id}
                className="p-4 rounded-xl bg-[#FFFFFF] border border-[#111114]/15 hover:border-[#FF4D36] transition-all shadow-xs flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-[#F5F2EB] border border-[#111114]/15 flex items-center justify-center text-[#FF4D36] shrink-0 group-hover:scale-105 transition-transform">
                    <Icon size={18} />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono text-[#6B6675] block uppercase font-semibold">{c.label}</span>
                    <a
                      href={c.actionUrl}
                      target={c.isExternal ? '_blank' : undefined}
                      rel={c.isExternal ? 'noopener noreferrer' : undefined}
                      onClick={() => soundFX.playClick()}
                      className="text-xs sm:text-sm font-semibold text-[#111114] hover:text-[#FF4D36] transition-colors truncate block"
                    >
                      {c.value}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {c.canCopy && (
                    <button
                      onClick={() => handleCopy(c.value, c.id)}
                      className="p-2 rounded-lg bg-[#F5F2EB] text-[#6B6675] hover:text-[#111114] border border-[#111114]/10 hover:border-[#FF4D36] transition-colors cursor-pointer"
                      title={`Copy ${c.label}`}
                    >
                      {isCopied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    </button>
                  )}

                  <a
                    href={c.actionUrl}
                    target={c.isExternal ? '_blank' : undefined}
                    rel={c.isExternal ? 'noopener noreferrer' : undefined}
                    onClick={() => soundFX.playClick()}
                    className="p-2 rounded-lg bg-[#F5F2EB] text-[#6B6675] hover:text-[#FF4D36] border border-[#111114]/10 hover:border-[#FF4D36] transition-colors"
                    title={`Open ${c.label}`}
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            );
          })}

          <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#111114]/15 text-xs text-[#6B6675] space-y-1 shadow-xs">
            <p className="text-[#111114] font-bold uppercase font-mono">Location & Timezone</p>
            <p>Bengaluru, Karnataka, India (IST · UTC +5:30)</p>
            <p className="text-[11px] text-[#6B6675]">Available for internship inquiries, academic collaborations, and technical discussions.</p>
          </div>
        </div>

        {/* Right Column: Direct Message Composer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#111114]/15 shadow-collage"
        >
          <div className="flex items-center gap-2 text-[#FF4D36] mb-2">
            <MessageSquare size={18} />
            <h2 className="font-heading text-xl font-black text-[#111114] uppercase">
              Send a Direct Message
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#6B6675] mb-6">
            Write your message below. Clicking send will prepare an email addressed to <span className="text-[#FF4D36] font-semibold">sivateja.cheruvu@gmail.com</span> in your email client.
          </p>

          <form onSubmit={handleSendMessage} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-[#6B6675] uppercase mb-1.5 font-semibold">
                Your Name
              </label>
              <input
                type="text"
                required
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="e.g. Alex Sharma"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F2EB] border border-[#111114]/15 text-sm text-[#111114] placeholder-[#6B6675]/50 focus:outline-none focus:border-[#FF4D36] focus:ring-1 focus:ring-[#FF4D36] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#6B6675] uppercase mb-1.5 font-semibold">
                Subject
              </label>
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. Internship Opportunity / Collaboration"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F2EB] border border-[#111114]/15 text-sm text-[#111114] placeholder-[#6B6675]/50 focus:outline-none focus:border-[#FF4D36] focus:ring-1 focus:ring-[#FF4D36] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#6B6675] uppercase mb-1.5 font-semibold">
                Message Content
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your note, idea, or questions here..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F2EB] border border-[#111114]/15 text-sm text-[#111114] placeholder-[#6B6675]/50 focus:outline-none focus:border-[#FF4D36] focus:ring-1 focus:ring-[#FF4D36] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-[#FF4D36] hover:bg-[#111114] transition-colors cursor-pointer uppercase tracking-wider"
            >
              <Send size={14} />
              <span>Launch Default Email Client</span>
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
};

