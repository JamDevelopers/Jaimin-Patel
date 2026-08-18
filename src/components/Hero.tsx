import React from 'react';
import { motion } from 'motion/react';
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Sparkles, 
  Code2, 
  CheckCircle2, 
  Bot, 
  ArrowRight,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface HeroProps {
  isDarkMode: boolean;
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isDarkMode, onOpenResumeModal }) => {
  return (
    <section id="hero" className="relative pt-24 sm:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-30 blur-3xl">
        <div className="w-full h-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-emerald-400"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Experience Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border shadow-sm bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-emerald-500/10 border-indigo-500/30 text-indigo-500">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-spin-slow" />
              <span>10+ Years Full-Stack & Automation Specialist</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Hi, I'm <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
              </h1>

              <p className={`text-lg sm:text-xl font-medium ${
                isDarkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Subtitle Details */}
            <p className={`text-sm sm:text-base leading-relaxed ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Specialized in building high-performance <strong className={isDarkMode ? 'text-white' : 'text-slate-900'}>Flutter Mobile Apps</strong>, <strong className={isDarkMode ? 'text-white' : 'text-slate-900'}>Laravel & Node.js REST APIs</strong>, <strong className={isDarkMode ? 'text-white' : 'text-slate-900'}>TaxPro GST eInvoicing Automation</strong>, and desktop <strong className={isDarkMode ? 'text-white' : 'text-slate-900'}>WhatsApp API Integrations</strong>.
            </p>

            {/* Tagline Badge */}
            <div className={`p-4 rounded-2xl border flex items-center gap-3 ${
              isDarkMode 
                ? 'bg-slate-900/80 border-indigo-900/40 text-slate-300' 
                : 'bg-indigo-50/70 border-indigo-100 text-indigo-950'
            }`}>
              <div className="p-2 rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-indigo-500 uppercase tracking-wider">Motto</div>
                <div className="text-sm sm:text-base font-bold">{PERSONAL_INFO.tagline}</div>
              </div>
            </div>

            {/* Quick Contact Chips */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium pt-1">
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border ${
                isDarkMode ? 'bg-slate-900/60 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}>
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>Surat, Gujarat, India</span>
              </div>
              
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-colors ${
                  isDarkMode 
                    ? 'bg-slate-900/60 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700' 
                    : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-colors ${
                  isDarkMode 
                    ? 'bg-slate-900/60 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700' 
                    : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-download-resume-btn"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all cursor-pointer active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume PDF</span>
              </button>

              <a
                id="hero-contact-btn"
                href="#contact"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold border transition-all ${
                  isDarkMode
                    ? 'bg-slate-900 text-white border-slate-700 hover:bg-slate-800'
                    : 'bg-white text-slate-900 border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-whatsapp-btn"
                href={`https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent('Hello Jaimin, I am interested in your software development services.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Quick Chat</span>
              </a>
            </div>

          </motion.div>

          {/* Right Visual Tech Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className={`p-6 sm:p-8 rounded-3xl border shadow-2xl relative overflow-hidden ${
              isDarkMode
                ? 'bg-slate-900/90 border-slate-800 shadow-indigo-950/20'
                : 'bg-white border-slate-200 shadow-slate-200/80'
            }`}>
              {/* Corner decorative glow */}
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-indigo-500/20 blur-2xl"></div>

              {/* Header profile Avatar & Title */}
              <div className="flex items-center gap-4 pb-6 border-b border-slate-800/20">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-emerald-400 p-0.5 shadow-lg">
                    <div className={`w-full h-full rounded-[14px] flex items-center justify-center font-extrabold text-2xl tracking-wider ${
                      isDarkMode ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-900'
                    }`}>
                      JRP
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-emerald-500 text-white ring-2 ring-slate-950" title="Available for Projects">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    Jaimin R Patel
                  </h3>
                  <p className="text-xs text-indigo-500 font-semibold">
                    Surat, Gujarat • Full-Stack Engineer
                  </p>
                  <p className={`text-xs mt-0.5 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    B.C.A Graduate (2015)
                  </p>
                </div>
              </div>

              {/* Core Skill Pills Highlight */}
              <div className="py-6 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Primary Stack</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Flutter", "Laravel", "Node.js", "PHP", "TaxPro API", "WhatsApp API", "VB.NET", "ASP.NET"].map((stack) => (
                    <span
                      key={stack}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold border ${
                        isDarkMode
                          ? 'bg-indigo-950/40 text-indigo-300 border-indigo-800/40'
                          : 'bg-indigo-50 text-indigo-700 border-indigo-100'
                      }`}
                    >
                      {stack}
                    </span>
                  ))}
                </div>

                {/* AI Tools Badge */}
                <div className="pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-2">
                    <Bot className="w-3.5 h-3.5 text-emerald-400" />
                    <span>AI Coding Workflow</span>
                  </div>
                  <div className={`p-3 rounded-xl border text-xs leading-relaxed ${
                    isDarkMode ? 'bg-slate-950/60 border-slate-800/80 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}>
                    Fluent with 15+ AI coding tools including ChatGPT, Claude Code, Cursor, Gemini CLI, NotebookLM, & Copilot.
                  </div>
                </div>
              </div>

              {/* Bottom Quick Feature Highlights */}
              <div className="pt-4 border-t border-slate-800/20 grid grid-cols-2 gap-3 text-center">
                <div className={`p-3 rounded-2xl border ${
                  isDarkMode ? 'bg-slate-950/40 border-slate-800/60' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="text-xl font-extrabold text-indigo-500">10+ Yrs</div>
                  <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Development Exp</div>
                </div>

                <div className={`p-3 rounded-2xl border ${
                  isDarkMode ? 'bg-slate-950/40 border-slate-800/60' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="text-xl font-extrabold text-emerald-500">100%</div>
                  <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>GST & Tax API</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
