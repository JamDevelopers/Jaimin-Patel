import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { EDUCATION } from '../data/resumeData';

interface EducationProps {
  isDarkMode: boolean;
}

export const Education: React.FC<EducationProps> = ({ isDarkMode }) => {
  return (
    <section id="education" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Education & Qualifications
          </h2>
          <p className={`mt-3 text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Strong foundational computer applications background from leading educational institutions in Surat, Gujarat.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all ${
                isDarkMode
                  ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl ${
                    isDarkMode ? 'bg-amber-950/80 text-amber-400 border border-amber-800/40' : 'bg-amber-50 text-amber-600'
                  }`}>
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    Passed {edu.passingYear}
                  </span>
                </div>

                <h3 className={`text-lg font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {edu.degree}
                </h3>

                <p className="text-sm font-semibold text-indigo-500 mb-2">
                  {edu.institution}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{edu.location}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/20 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Score Achieved:</span>
                  <span className="font-extrabold text-emerald-500 text-sm">{edu.score}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Board / Uni:</span>
                  <span className={`font-semibold text-right ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Gujarat Board
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
