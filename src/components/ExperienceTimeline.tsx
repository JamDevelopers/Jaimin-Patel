import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle2, Building2, Sparkles } from 'lucide-react';
import { EXPERIENCES } from '../data/resumeData';

interface ExperienceTimelineProps {
  isDarkMode: boolean;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ isDarkMode }) => {
  const [expandedId, setExpandedId] = useState<string | null>("jsm-infotech");

  return (
    <section id="experience" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Work Experience (10+ Years)
          </h2>
          <p className={`mt-3 text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Proven track record in software engineering, mobile development, API automation, and leading development teams in Surat.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 sm:left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-emerald-500 opacity-30"></div>

          <div className="space-y-8">
            {EXPERIENCES.map((exp, index) => {
              const isExpanded = expandedId === exp.id;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative pl-10 sm:pl-16"
                >
                  {/* Timeline Dot Icon */}
                  <div className={`absolute left-0 sm:left-4 top-1.5 -translate-x-1/2 w-9 h-9 rounded-xl flex items-center justify-center border shadow-md transition-transform ${
                    isExpanded
                      ? 'bg-indigo-600 text-white border-indigo-500 scale-110 shadow-indigo-600/30'
                      : isDarkMode
                      ? 'bg-slate-900 text-indigo-400 border-slate-700'
                      : 'bg-white text-indigo-600 border-slate-200'
                  }`}>
                    <Building2 className="w-4 h-4" />
                  </div>

                  {/* Card Container */}
                  <div
                    onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                    className={`p-6 sm:p-8 rounded-3xl border transition-all cursor-pointer ${
                      isDarkMode
                        ? isExpanded
                          ? 'bg-slate-900 border-indigo-500/50 shadow-xl shadow-indigo-950/20'
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                        : isExpanded
                        ? 'bg-white border-indigo-200 shadow-xl shadow-indigo-100'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className={`text-xl sm:text-2xl font-bold ${
                            isDarkMode ? 'text-white' : 'text-slate-900'
                          }`}>
                            {exp.company}
                          </h3>
                          <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                            {exp.yearsRange}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-indigo-500 mt-0.5">
                          {exp.role}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 text-xs font-medium text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className={`text-sm leading-relaxed mb-4 ${
                      isDarkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      {exp.summary}
                    </p>

                    {/* Highlights List */}
                    <div className="space-y-2.5 mb-5">
                      {exp.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges Footer */}
                    <div className="pt-4 border-t border-slate-800/20 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                              isDarkMode
                                ? 'bg-slate-950 text-slate-300 border border-slate-800'
                                : 'bg-slate-100 text-slate-700 border border-slate-200'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <span className="text-xs font-semibold text-indigo-500 flex items-center gap-1">
                        <span>{isExpanded ? 'Show Less' : 'View Details'}</span>
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </span>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
