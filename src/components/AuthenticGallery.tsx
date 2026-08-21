import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Images, 
  ExternalLink, 
  Maximize2, 
  X, 
  Filter, 
  ChevronRight, 
  Layers,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
  CheckCircle
} from 'lucide-react';
import { GALLERY_ASSETS } from '../data/resumeData';
import { GalleryAsset } from '../types';

interface AuthenticGalleryProps {
  isDarkMode: boolean;
}

export const AuthenticGallery: React.FC<AuthenticGalleryProps> = ({ isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxAsset, setLightboxAsset] = useState<GalleryAsset | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const categories = ['All', ...Array.from(new Set(GALLERY_ASSETS.map((a) => a.category)))];

  const filteredAssets = selectedCategory === 'All'
    ? GALLERY_ASSETS
    : GALLERY_ASSETS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
            <Images className="w-4 h-4 text-indigo-400" />
            <span>Authentic Production Screenshots & Certifications</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Authentic Work Gallery
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Explore actual high-resolution screenshots, Google ranking results, government PESO cylinder testing certifications, and custom web applications developed across 10+ years.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 ring-2 ring-indigo-500/40'
                  : isDarkMode
                  ? 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
              {cat === 'All' ? ` (${GALLERY_ASSETS.length})` : ` (${GALLERY_ASSETS.filter(a => a.category === cat).length})`}
            </button>
          ))}
        </div>

        {/* Grid of Authentic Assets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredAssets.map((asset, index) => (
            <motion.div
              key={asset.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (index % 4) * 0.05 }}
              onClick={() => {
                setLightboxAsset(asset);
                setZoomLevel(1);
              }}
              className={`group rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer flex flex-col justify-between ${
                isDarkMode 
                  ? 'bg-slate-900/80 border-slate-800 hover:border-indigo-500/60 shadow-black/40' 
                  : 'bg-white border-slate-200 hover:border-indigo-400 shadow-slate-200/60'
              }`}
            >
              {/* Image Preview Container */}
              <div className="relative aspect-video sm:aspect-4/3 overflow-hidden bg-slate-950 flex items-center justify-center">
                <img
                  src={asset.src}
                  alt={asset.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3.5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-indigo-600/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Authentic Capture</span>
                  </span>
                </div>
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-slate-200 border border-white/10">
                    {asset.category}
                  </span>
                </div>
              </div>

              {/* Caption & Details */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h4 className={`text-xs sm:text-sm font-bold line-clamp-1 group-hover:text-indigo-400 transition-colors ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {asset.title}
                  </h4>
                  <p className={`text-[11px] line-clamp-2 mt-1 leading-relaxed ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {asset.caption}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/40 flex items-center justify-between text-[10px] font-medium text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                  <span className="text-indigo-400 font-mono font-bold">
                    {asset.id.toUpperCase()}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxAsset && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setLightboxAsset(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl max-h-[92vh] bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="px-5 py-3.5 border-b border-slate-800 flex items-center justify-between bg-slate-900">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center text-xs">
                    <Images className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-tight">{lightboxAsset.title}</h3>
                    <p className="text-xs text-slate-400">{lightboxAsset.category} • Authentic Screenshot Asset</p>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-slate-950 px-2 py-1 rounded-xl border border-slate-800 text-xs text-slate-300">
                    <button
                      onClick={() => setZoomLevel((z) => Math.max(0.75, z - 0.25))}
                      className="p-1 hover:text-white"
                      title="Zoom Out"
                    >
                      <ZoomOut className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-mono text-[11px] px-1">{Math.round(zoomLevel * 100)}%</span>
                    <button
                      onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.25))}
                      className="p-1 hover:text-white"
                      title="Zoom In"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setZoomLevel(1)}
                      className="p-1 hover:text-white"
                      title="Reset"
                    >
                      <RotateCcw className="w-3 h-3" />
                    </button>
                  </div>

                  <button
                    onClick={() => setLightboxAsset(null)}
                    className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Image View */}
              <div className="flex-1 overflow-auto p-4 sm:p-6 bg-slate-950 flex items-center justify-center custom-scrollbar">
                <img
                  src={lightboxAsset.src}
                  alt={lightboxAsset.title}
                  style={{ transform: `scale(${zoomLevel})` }}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl transition-transform duration-200"
                />
              </div>

              {/* Footer */}
              <div className="px-5 py-3 border-t border-slate-800 bg-slate-900 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
                <span className="max-w-2xl">{lightboxAsset.caption}</span>
                <button
                  onClick={() => setLightboxAsset(null)}
                  className="px-4 py-1.5 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-colors shrink-0"
                >
                  Close Viewer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
