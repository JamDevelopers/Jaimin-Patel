import React from 'react';
import { Download, Mail, Phone, MapPin, Heart, Sparkles, MessageSquare, Github, Linkedin, Facebook, Instagram, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface FooterProps {
  isDarkMode: boolean;
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ isDarkMode, onOpenResumeModal }) => {
  return (
    <footer className={`border-t transition-colors ${
      isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/20">
          
          {/* Brand & Closing Faithfully Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-emerald-400 p-0.5 shadow-md">
                <div className={`w-full h-full rounded-[10px] flex items-center justify-center font-bold text-lg ${
                  isDarkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
                }`}>
                  JP
                </div>
              </div>
              <div>
                <h3 className={`text-lg font-extrabold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs text-indigo-500 font-medium">Full-Stack & Automation Specialist</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed max-w-md">
              10+ Years experience engineering custom mobile apps in Flutter, backends in Laravel/Node.js, desktop GST tax accounting tools, and WhatsApp API automation.
            </p>

            {/* Social Links Row */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                  isDarkMode 
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700' 
                    : 'bg-white border-slate-200 text-slate-700 hover:text-slate-950 shadow-sm'
                }`}
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub (JamDevelopers)</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                  isDarkMode 
                    ? 'bg-slate-900 border-slate-800 text-blue-400 hover:text-blue-300 hover:border-blue-900/50' 
                    : 'bg-white border-slate-200 text-blue-600 hover:text-blue-700 shadow-sm'
                }`}
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className={`p-4 rounded-2xl border ${
              isDarkMode ? 'bg-slate-900/60 border-slate-800/80 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-sm'
            }`}>
              <div className="text-xs font-semibold text-slate-400">Formal Closing Declaration:</div>
              <div className="text-sm font-extrabold text-indigo-500 uppercase tracking-wider mt-0.5">
                {PERSONAL_INFO.closingDeclaration}
              </div>
              <div className="text-xs font-bold mt-0.5">
                JAIMIN R PATEL
              </div>
              <div className="text-[11px] text-emerald-500 italic mt-1 font-medium">
                "{PERSONAL_INFO.tagline}"
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#hero" className="hover:text-indigo-400 transition-colors">Overview</a></li>
              <li><a href="#experience" className="hover:text-indigo-400 transition-colors">Career Experience</a></li>
              <li><a href="#skills" className="hover:text-indigo-400 transition-colors">Skills & AI Coding Tools</a></li>
              <li><a href="#gallery" className="hover:text-indigo-400 transition-colors">Work Gallery</a></li>
              <li><a href="#education" className="hover:text-indigo-400 transition-colors">Education</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Get In Touch</a></li>
            </ul>
          </div>

          {/* Contact & Download Actions */}
          <div className="md:col-span-4 space-y-4">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Direct Contact
            </h4>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>23, Om Sai Row House, Vesu, Surat - 395007</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-white transition-colors">{PERSONAL_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">{PERSONAL_INFO.email}</a>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </button>

              <a
                href={`https://wa.me/${PERSONAL_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-colors ${
                  isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white' : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900'
                }`}
                title="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-colors ${
                  isDarkMode ? 'bg-slate-900 border-slate-800 text-blue-400 hover:text-blue-300' : 'bg-white border-slate-200 text-blue-600 hover:text-blue-700'
                }`}
                title="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

               <a
                href={PERSONAL_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-colors ${
                  isDarkMode ? 'bg-slate-900 border-slate-800 text-blue-400 hover:text-blue-300' : 'bg-white border-slate-200 text-blue-600 hover:text-blue-700'
                }`}
                title="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
                <span>Facebook</span>
              </a>

               <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-colors ${
                  isDarkMode ? 'bg-slate-900 border-slate-800 text-red-400 hover:text-red-300' : 'bg-white border-slate-200 text-red-600 hover:text-red-700'
                }`}
                title="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Jaimin R Patel. All rights reserved. Surat, Gujarat, India.
          </div>
          <div className="flex items-center gap-4">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors">GitHub</a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors">LinkedIn</a>
            <span className="text-slate-700">•</span>
            <span>Built with React, Tailwind CSS, & Framer Motion</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
