import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Zap, 
  ShoppingBag, 
  Bot, 
  TrendingUp, 
  Search, 
  Sparkles, 
  Check, 
  Cpu
} from 'lucide-react';
import { SKILL_CATEGORIES, AI_CODING_ASSISTANTS } from '../data/resumeData';

interface SkillsGridProps {
  isDarkMode: boolean;
}

export const SkillsGrid: React.FC<SkillsGridProps> = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIconMap: Record<string, React.ElementType> = {
    Code2,
    Zap,
    ShoppingBag,
    Bot,
    TrendingUp,
  };

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    if (activeTab !== 'all' && cat.id !== activeTab) {
      return null;
    }

    const filteredSkills = cat.skills.filter((s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (searchQuery && filteredSkills.length === 0) {
      return null;
    }

    return {
      ...cat,
      skills: searchQuery ? filteredSkills : cat.skills,
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Mastery & AI Workflow</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Skills, Frameworks & AI Tooling
          </h2>
          <p className={`mt-3 text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Comprehensive tech stack honed over 10+ years across mobile, web backends, desktop software, and AI coding assistants.
          </p>
        </div>

        {/* AI Coding Assistants Special Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mb-10 p-6 sm:p-8 rounded-3xl border relative overflow-hidden bg-gradient-to-r ${
            isDarkMode
              ? 'from-indigo-950/80 via-slate-900 to-purple-950/80 border-indigo-800/50'
              : 'from-indigo-50 via-white to-purple-50 border-indigo-100 shadow-md'
          }`}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2 text-indigo-500 font-bold text-sm uppercase tracking-wider">
                <Bot className="w-4 h-4 text-emerald-400" />
                <span>AI Coding Assistants Native</span>
              </div>
              <h3 className={`text-xl sm:text-2xl font-extrabold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                15+ AI Coding Tools & Agent Workflows
              </h3>
              <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Hyper-productive modern developer workflow utilizing state-of-the-art AI code generation, CLI agents, and prompt engineering for rapid feature delivery.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 max-w-md">
              {AI_CODING_ASSISTANTS.map((ai) => (
                <span
                  key={ai}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border ${
                    isDarkMode
                      ? 'bg-slate-950/80 text-emerald-300 border-emerald-500/30'
                      : 'bg-white text-indigo-700 border-indigo-200 shadow-sm'
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  <span>{ai}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : isDarkMode
                  ? 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Skills
            </button>

            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === cat.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : isDarkMode
                    ? 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Filter skills (e.g. Flutter, Laravel)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-xl text-xs font-medium border outline-none transition-all ${
                isDarkMode
                  ? 'bg-slate-900 border-slate-800 text-white placeholder-slate-500 focus:border-indigo-500'
                  : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-500'
              }`}
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            if (!cat) return null;
            const IconComponent = categoryIconMap[cat.iconName] || Code2;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`p-6 rounded-3xl border transition-all ${
                  isDarkMode
                    ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-3 rounded-2xl ${
                    isDarkMode ? 'bg-indigo-950/80 text-indigo-400 border border-indigo-800/40' : 'bg-indigo-50 text-indigo-600'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-400">{cat.skills.length} competencies</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 border transition-all ${
                        skill.featured
                          ? isDarkMode
                            ? 'bg-indigo-950/80 text-indigo-300 border-indigo-600/50 shadow-sm'
                            : 'bg-indigo-50 text-indigo-800 border-indigo-200 font-semibold'
                          : isDarkMode
                          ? 'bg-slate-950 text-slate-300 border-slate-800'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      {skill.featured && <Check className="w-3 h-3 text-emerald-400" />}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
