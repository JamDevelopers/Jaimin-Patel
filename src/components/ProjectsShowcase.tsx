import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Receipt, 
  MessageSquare, 
  Smartphone, 
  Flame, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Terminal,
  Activity,
  Zap,
  Search
} from 'lucide-react';
import { PROJECT_HIGHLIGHTS } from '../data/resumeData';
import { ProjectHighlight } from '../types';
import { ProductDetailModal } from './ProductDetailModal';

interface ProjectsShowcaseProps {
  isDarkMode: boolean;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectHighlight | null>(null);

  const iconMap: Record<string, React.ElementType> = {
    Receipt,
    MessageSquare,
    Smartphone,
    Flame,
  };

  const categories = [
    'All', 
    'Government & Tax Automation', 
    'Desktop & Cloud Automation', 
    'Mobile Application', 
    'Industrial Web Portal'
  ];

  const filteredProjects = PROJECT_HIGHLIGHTS.filter(p => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <section id="projects" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-500 border border-purple-500/20 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Product Showcase & Architecture</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Enterprise Software Products & System Architectures
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Explore production systems engineered by Jaimin R Patel for tax compliance, bulk messaging, factory OMS, and industrial logistics. Click any project to launch its live interactive demo & system workflow!
          </p>
        </div>

        {/* Filter Controls: Search Bar & Category Pills */}
        <div className="space-y-4 mb-10 max-w-4xl mx-auto">
          {/* Search Input */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products, APIs, or tech stack (e.g., Flutter, TaxPro, WhatsApp)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs font-medium border outline-none transition-all ${
                isDarkMode 
                  ? 'bg-slate-900/80 border-slate-800 text-white focus:border-indigo-500' 
                  : 'bg-white border-slate-200 text-slate-900 focus:border-indigo-500'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : isDarkMode
                    ? 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const IconComponent = iconMap[project.icon] || Layers;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveModalProject(project)}
                className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all group cursor-pointer ${
                  isDarkMode
                    ? 'bg-slate-900/80 border-slate-800 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-950/30'
                    : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-100'
                }`}
              >
                <div>
                  {/* Project Image Banner */}
                  {project.imageUrl && (
                    <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden mb-5 border border-slate-800/40 group-hover:shadow-lg transition-all">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-950/80 backdrop-blur-md text-white border border-white/20 shadow-sm">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500 text-slate-950 shadow-md flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> Interactive Demo
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3.5 rounded-2xl ${
                        isDarkMode ? 'bg-indigo-950 text-indigo-400 border border-indigo-800/40' : 'bg-indigo-50 text-indigo-600'
                      }`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider">
                          {project.category}
                        </span>
                        <h3 className={`text-xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'} group-hover:text-indigo-400 transition-colors`}>
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                      LIVE DEMO
                    </span>
                  </div>

                  {/* Tagline / Description */}
                  <p className={`text-sm leading-relaxed mb-5 ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Key Metrics Quick View Strip */}
                  {project.metrics && (
                    <div className={`grid grid-cols-2 gap-2 mb-5 p-3 rounded-2xl border ${
                      isDarkMode ? 'bg-slate-950/50 border-slate-800/80' : 'bg-slate-50 border-slate-100'
                    }`}>
                      {project.metrics.slice(0, 2).map((m, i) => (
                        <div key={i} className="text-center">
                          <div className="text-base font-black text-indigo-400">{m.value}</div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Key Business Impact Box */}
                  <div className={`p-3.5 rounded-2xl border mb-6 flex items-start gap-2.5 ${
                    isDarkMode ? 'bg-emerald-950/20 border-emerald-800/30 text-emerald-300' : 'bg-emerald-50 border-emerald-100 text-emerald-900'
                  }`}>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div className="text-xs font-semibold">
                      <strong className="block text-emerald-500 font-bold mb-0.5">Key Business Impact:</strong>
                      {project.impact}
                    </div>
                  </div>
                </div>

                {/* Footer Section */}
                <div className="pt-4 border-t border-slate-800/20 space-y-4">
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Technologies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                            isDarkMode
                              ? 'bg-slate-950 text-indigo-300 border border-slate-800'
                              : 'bg-slate-100 text-slate-700 border border-slate-200'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Trigger CTA Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalProject(project);
                    }}
                    className={`w-full py-3 px-4 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isDarkMode
                        ? 'bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30'
                        : 'bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white border border-indigo-100'
                    }`}
                  >
                    <Terminal className="w-4 h-4" />
                    <span>Explore Architecture & Launch Sandbox</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className={`text-center py-12 rounded-3xl border ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'}`}>
            <p className="font-bold text-sm">No products found matching "{searchQuery}"</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-3 text-xs text-indigo-500 hover:underline font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Interactive Detail & Demo Modal */}
      <ProductDetailModal
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
        isDarkMode={isDarkMode}
      />
    </section>
  );
};
