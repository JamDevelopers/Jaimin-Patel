import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Layers, 
  CheckCircle2, 
  Send, 
  Receipt, 
  MessageSquare, 
  Smartphone, 
  Flame, 
  ArrowRight, 
  Activity, 
  Terminal, 
  Sparkles,
  QrCode,
  ShieldCheck,
  Zap,
  Copy,
  Check,
  ZoomIn,
  Image as ImageIcon
} from 'lucide-react';
import { ProjectHighlight } from '../types';

interface ProductDetailModalProps {
  project: ProjectHighlight | null;
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  isDarkMode,
}) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'features' | 'interactive'>('architecture');
  
  // Interactive Sandbox States
  // 1. WhatsApp Engine Demo
  const [waPhone, setWaPhone] = useState('918160763069');
  const [waCustomer, setWaCustomer] = useState('Shree Ram Textiles');
  const [waAmount, setWaAmount] = useState('45800');
  const [waStatus, setWaStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  
  // 2. TaxPro GST Engine Demo
  const [invAmount, setInvAmount] = useState('125000');
  const [gstRate, setGstRate] = useState('18');
  const [generatedIrn, setGeneratedIrn] = useState<string | null>(null);
  
  // 3. Flutter OMS Demo
  const [omsStatus, setOmsStatus] = useState<'Placed' | 'In Production' | 'Quality Check' | 'Packed' | 'Dispatched'>('In Production');
  
  // 4. Cylinder CRM Demo
  const [cylinderId, setCylinderId] = useState('CYL-9982-SURAT');
  const [copiedText, setCopiedText] = useState(false);

  // Image Gallery & Lightbox States
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!isOpen || !project) return null;

  const currentGallery = project.galleryImages && project.galleryImages.length > 0 
    ? project.galleryImages 
    : project.imageUrl 
    ? [project.imageUrl] 
    : [];

  const currentActiveImg = currentGallery[selectedImgIndex] || project.imageUrl;

  const iconMap: Record<string, React.ElementType> = {
    Receipt,
    MessageSquare,
    Smartphone,
    Flame,
  };

  const IconComponent = iconMap[project.icon] || Layers;

  const handleSendWhatsAppDemo = (e: React.FormEvent) => {
    e.preventDefault();
    setWaStatus('sending');
    setTimeout(() => {
      setWaStatus('sent');
    }, 1200);
  };

  const handleGenerateTaxProDemo = (e: React.FormEvent) => {
    e.preventDefault();
    const fakeIrn = Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
    setGeneratedIrn(fakeIrn);
  };

  const handleCopyIrn = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className={`relative w-full max-w-4xl rounded-3xl border shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto ${
            isDarkMode 
              ? 'bg-[#0f1117] border-slate-800 text-white' 
              : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          {/* Top Header Bar */}
          <div className={`p-6 border-b flex items-start justify-between gap-4 ${
            isDarkMode ? 'border-slate-800 bg-slate-900/50' : 'border-slate-200 bg-slate-50'
          }`}>
            <div className="flex items-start gap-4">
              <div className={`p-3.5 rounded-2xl shrink-0 ${
                isDarkMode ? 'bg-indigo-950/80 text-indigo-400 border border-indigo-800/50' : 'bg-indigo-100 text-indigo-700'
              }`}>
                <IconComponent className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                    {project.category}
                  </span>
                  <span className="text-xs font-medium text-emerald-500 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Production Deployed
                  </span>
                </div>
                <h2 className="text-2xl font-black tracking-tight">{project.title}</h2>
                <p className={`text-sm mt-0.5 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {project.tagline || project.description}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className={`p-2 rounded-xl transition-colors shrink-0 cursor-pointer ${
                isDarkMode 
                  ? 'hover:bg-slate-800 text-slate-400 hover:text-white' 
                  : 'hover:bg-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Key Metrics Strip */}
          {project.metrics && (
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 border-b ${
              isDarkMode ? 'border-slate-800 bg-slate-950/40' : 'border-slate-100 bg-slate-100/60'
            }`}>
              {project.metrics.map((m, i) => (
                <div key={i} className={`p-3 rounded-xl border text-center ${
                  isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
                }`}>
                  <div className="text-xl sm:text-2xl font-black text-indigo-500">{m.value}</div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Tabs Navigation */}
          <div className={`flex border-b px-6 ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`py-3.5 px-4 font-bold text-sm border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'architecture'
                  ? 'border-indigo-500 text-indigo-500'
                  : isDarkMode
                  ? 'border-transparent text-slate-400 hover:text-slate-200'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>System Architecture</span>
            </button>

            <button
              onClick={() => setActiveTab('features')}
              className={`py-3.5 px-4 font-bold text-sm border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'features'
                  ? 'border-indigo-500 text-indigo-500'
                  : isDarkMode
                  ? 'border-transparent text-slate-400 hover:text-slate-200'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Core Modules & Features</span>
            </button>

            <button
              onClick={() => setActiveTab('interactive')}
              className={`py-3.5 px-4 font-bold text-sm border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'interactive'
                  ? 'border-indigo-500 text-indigo-500'
                  : isDarkMode
                  ? 'border-transparent text-slate-400 hover:text-slate-200'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <Terminal className="w-4 h-4 text-emerald-500" />
              <span className="flex items-center gap-1.5">
                <span>Interactive Sandbox</span>
                <span className="px-1.5 py-0.2 rounded text-[10px] font-extrabold bg-emerald-500/20 text-emerald-400">DEMO</span>
              </span>
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 overflow-y-auto flex-1 space-y-6">

            {/* Product Image Showcase Banner & Gallery */}
            {currentActiveImg && (
              <div className="space-y-3">
                <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-slate-800/80 shadow-lg group">
                  <img
                    src={currentActiveImg}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Click to Zoom Overlay Button */}
                  <button
                    onClick={() => setIsLightboxOpen(true)}
                    className="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-slate-950/80 hover:bg-slate-900 text-white border border-white/20 backdrop-blur-md text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-md transition-all"
                  >
                    <ZoomIn className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Enlarge Image</span>
                  </button>

                  <div className="absolute bottom-3 left-3 flex items-center gap-2 pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-950/80 text-white border border-white/20 backdrop-blur-md">
                      Production Interface Screenshot
                    </span>
                  </div>
                </div>

                {/* Gallery Thumbnails */}
                {currentGallery.length > 1 && (
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {currentGallery.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImgIndex(idx)}
                        className={`relative w-20 h-14 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                          selectedImgIndex === idx 
                            ? 'border-indigo-500 scale-105 shadow-md shadow-indigo-500/30' 
                            : 'border-slate-800/80 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={imgUrl}
                          alt={`${project.title} preview ${idx + 1}`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
            
            {/* Tab 1: System Architecture */}
            {activeTab === 'architecture' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-extrabold mb-1">Architectural Pipeline & Data Flow</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    How data flows through the application components, external APIs, queues, and security layers.
                  </p>
                </div>

                <div className="relative pl-6 border-l-2 border-indigo-500/30 space-y-6">
                  {project.architecture?.map((step, idx) => (
                    <div key={idx} className="relative group">
                      {/* Circle indicator */}
                      <div className="absolute -left-[31px] top-1 w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px] font-black shadow-md shadow-indigo-600/50">
                        {idx + 1}
                      </div>

                      <div className={`p-4 rounded-2xl border transition-all ${
                        isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                      }`}>
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h4 className="font-bold text-base">{step.title}</h4>
                          {step.badge && (
                            <span className="px-2 py-0.5 rounded text-[11px] font-extrabold uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                              {step.badge}
                            </span>
                          )}
                        </div>
                        <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack List */}
                <div className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-100/70 border-slate-200'}`}>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3">Technologies & Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className={`px-3 py-1.5 rounded-xl text-xs font-extrabold border ${
                        isDarkMode ? 'bg-slate-950 border-slate-800 text-indigo-300' : 'bg-white border-slate-200 text-slate-800'
                      }`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Core Modules & Features */}
            {activeTab === 'features' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-extrabold mb-1">Key Enterprise Features</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Capabilities engineered specifically for business automation and compliance.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features?.map((feature, i) => (
                    <div key={i} className={`p-5 rounded-2xl border flex flex-col justify-between ${
                      isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h4 className="font-bold text-base flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                            {feature.name}
                          </h4>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-800 text-slate-300">
                            {feature.tag}
                          </span>
                        </div>
                        <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Business Impact Box */}
                <div className={`p-5 rounded-2xl border flex items-start gap-4 ${
                  isDarkMode ? 'bg-emerald-950/20 border-emerald-800/40 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-900'
                }`}>
                  <Sparkles className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-extrabold text-emerald-500 text-base mb-1">Measured Business Outcome</h4>
                    <p className="text-sm font-medium leading-relaxed">{project.impact}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Interactive Sandbox */}
            {activeTab === 'interactive' && (
              <div className="space-y-6">
                
                {/* 1. WHATSAPP ENGINE SANDBOX */}
                {project.demoType === 'whatsapp' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-extrabold mb-1">WhatsApp Automation Live Simulator</h3>
                      <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        Simulate dispatching a ledger statement or invoice notification to a client's WhatsApp number.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Control Panel */}
                      <form onSubmit={handleSendWhatsAppDemo} className={`p-5 rounded-2xl border space-y-4 ${
                        isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
                      }`}>
                        <div className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">
                          Message Dispatch Parameters
                        </div>

                        <div>
                          <label className="block text-xs font-bold mb-1">Customer / Client Name</label>
                          <input
                            type="text"
                            value={waCustomer}
                            onChange={(e) => setWaCustomer(e.target.value)}
                            className={`w-full px-3 py-2 rounded-xl text-sm border outline-none ${
                              isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-300 text-slate-900'
                            }`}
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold mb-1">WhatsApp Phone Number</label>
                          <input
                            type="text"
                            value={waPhone}
                            onChange={(e) => setWaPhone(e.target.value)}
                            className={`w-full px-3 py-2 rounded-xl text-sm border outline-none ${
                              isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-300 text-slate-900'
                            }`}
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold mb-1">Invoice / Outstanding Amount (₹)</label>
                          <input
                            type="text"
                            value={waAmount}
                            onChange={(e) => setWaAmount(e.target.value)}
                            className={`w-full px-3 py-2 rounded-xl text-sm border outline-none ${
                              isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-300 text-slate-900'
                            }`}
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={waStatus === 'sending'}
                          className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-600/30 transition-all disabled:opacity-50"
                        >
                          <Send className="w-4 h-4" />
                          <span>{waStatus === 'sending' ? 'Dispatching Payload...' : 'Test WhatsApp Dispatch'}</span>
                        </button>
                      </form>

                      {/* WhatsApp Phone Mockup Preview */}
                      <div className="bg-[#0b141a] text-white p-4 rounded-2xl border border-slate-800 flex flex-col justify-between font-sans min-h-[300px]">
                        <div className="bg-[#202c33] p-3 rounded-xl flex items-center gap-3 border-b border-slate-700">
                          <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xs">
                            JSM
                          </div>
                          <div>
                            <div className="font-bold text-xs text-white">JSM Infotech Accounting Bot</div>
                            <div className="text-[10px] text-emerald-400">Official Business Account</div>
                          </div>
                        </div>

                        {/* Chat Message Bubble */}
                        <div className="my-4 space-y-3">
                          <div className="bg-[#005c4b] p-3.5 rounded-2xl rounded-tl-none text-xs leading-relaxed max-w-[90%] shadow">
                            <p className="font-bold mb-1">Hello {waCustomer || 'Valued Client'}, 👋</p>
                            <p className="mb-2">Your Tax Invoice <span className="font-mono text-emerald-200">#INV-2025-084</span> for <strong className="text-white">₹{Number(waAmount || 0).toLocaleString('en-IN')}</strong> is ready!</p>
                            <div className="p-2 rounded bg-black/20 border border-emerald-400/30 flex items-center justify-between text-[11px] mb-2">
                              <span>📄 Ledger_Statement.pdf</span>
                              <span className="text-[10px] text-emerald-300">240 KB</span>
                            </div>
                            <p className="text-[10px] text-emerald-200/80 text-right mt-1">12:42 PM ✓✓</p>
                          </div>

                          {waStatus === 'sent' && (
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="bg-emerald-950/80 border border-emerald-500/50 p-3 rounded-xl text-xs text-emerald-300 flex items-center gap-2"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                              <span>Payload Dispatched via Node.js Microservice Gateway!</span>
                            </motion.div>
                          )}
                        </div>

                        {/* Status bar */}
                        <div className="text-[11px] text-slate-400 font-mono bg-[#111b21] p-2 rounded-lg border border-slate-800">
                          Status: {waStatus === 'sending' ? 'Connecting to WhatsApp API...' : waStatus === 'sent' ? 'HTTP 200 OK - Message Delivered' : 'Ready for test trigger'}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. TAXPRO GST SUITE SANDBOX */}
                {project.demoType === 'taxpro' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-extrabold mb-1">TaxPro GST eInvoice IRN Generator Demo</h3>
                      <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        Simulate generating a 64-character Invoice Registration Number (IRN) and signed QR payload.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <form onSubmit={handleGenerateTaxProDemo} className={`p-5 rounded-2xl border space-y-4 ${
                        isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
                      }`}>
                        <div className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">
                          GST Invoice Payload Input
                        </div>

                        <div>
                          <label className="block text-xs font-bold mb-1">Invoice Value (₹)</label>
                          <input
                            type="number"
                            value={invAmount}
                            onChange={(e) => setInvAmount(e.target.value)}
                            className={`w-full px-3 py-2 rounded-xl text-sm border outline-none ${
                              isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-300 text-slate-900'
                            }`}
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold mb-1">GST Rate (%)</label>
                          <select
                            value={gstRate}
                            onChange={(e) => setGstRate(e.target.value)}
                            className={`w-full px-3 py-2 rounded-xl text-sm border outline-none ${
                              isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-300 text-slate-900'
                            }`}
                          >
                            <option value="5">5% SGST + CGST</option>
                            <option value="12">12% SGST + CGST</option>
                            <option value="18">18% Standard GST</option>
                            <option value="28">28% Premium GST</option>
                          </select>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800 text-xs font-mono text-slate-300 space-y-1">
                          <div className="flex justify-between">
                            <span>Taxable Value:</span>
                            <span>₹{Number(invAmount || 0).toLocaleString('en-IN')}</span>
                          </div>
                          <div className="flex justify-between text-indigo-400">
                            <span>GST Amount ({gstRate}%):</span>
                            <span>₹{((Number(invAmount || 0) * Number(gstRate)) / 100).toLocaleString('en-IN')}</span>
                          </div>
                          <div className="flex justify-between font-bold text-emerald-400 pt-1 border-t border-slate-800">
                            <span>Total Gross Bill:</span>
                            <span>₹{(Number(invAmount || 0) * (1 + Number(gstRate)/100)).toLocaleString('en-IN')}</span>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-indigo-600/30 transition-all"
                        >
                          <Zap className="w-4 h-4" />
                          <span>Generate NIC eInvoice & IRN</span>
                        </button>
                      </form>

                      {/* Response Payload & QR Mockup */}
                      <div className={`p-5 rounded-2xl border flex flex-col justify-between font-mono text-xs ${
                        isDarkMode ? 'bg-slate-950 border-slate-800 text-emerald-400' : 'bg-slate-900 border-slate-800 text-emerald-400'
                      }`}>
                        <div>
                          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                            <span className="text-slate-400 font-sans text-xs font-bold flex items-center gap-2">
                              <QrCode className="w-4 h-4 text-indigo-400" />
                              TaxPro API Response Payload
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 font-bold">
                              STATUS: 200 SUCCESS
                            </span>
                          </div>

                          {generatedIrn ? (
                            <div className="space-y-3">
                              <div>
                                <span className="text-slate-400 block text-[10px]">Generated 64-Char IRN:</span>
                                <div className="p-2.5 rounded bg-black/50 border border-slate-800 text-[11px] break-all text-indigo-300 font-bold flex items-center justify-between gap-2">
                                  <span>{generatedIrn}</span>
                                  <button
                                    onClick={() => handleCopyIrn(generatedIrn)}
                                    className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white"
                                  >
                                    {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                                  </button>
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-2 text-[11px]">
                                <div className="p-2 rounded bg-black/40 border border-slate-800">
                                  <span className="text-slate-400 block text-[10px]">Ack No:</span>
                                  <span className="text-white font-bold">14259837261</span>
                                </div>
                                <div className="p-2 rounded bg-black/40 border border-slate-800">
                                  <span className="text-slate-400 block text-[10px]">eWaybill Status:</span>
                                  <span className="text-emerald-400 font-bold">Generated</span>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="p-8 text-center text-slate-500 font-sans">
                              Click "Generate NIC eInvoice & IRN" to simulate API call.
                            </div>
                          )}
                        </div>

                        <div className="text-[10px] text-slate-500 pt-3 border-t border-slate-800 font-sans">
                          Encrypted with USB DSC Token • NIC Portal Connected
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. FLUTTER OMS SANDBOX */}
                {project.demoType === 'flutter' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-extrabold mb-1">Flutter Order Lifecycle Tracker Demo</h3>
                      <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        Toggle order stages to observe dynamic status updates across manufacturing floors & field agency apps.
                      </p>
                    </div>

                    <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                      <div className="text-xs font-black uppercase tracking-wider text-slate-400 mb-4">
                        Order Lifecycle Stage Controls
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {(['Placed', 'In Production', 'Quality Check', 'Packed', 'Dispatched'] as const).map((stage) => (
                          <button
                            key={stage}
                            onClick={() => setOmsStatus(stage)}
                            className={`px-4 py-2 rounded-xl text-xs font-extrabold cursor-pointer transition-all ${
                              omsStatus === stage
                                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                                : isDarkMode
                                ? 'bg-slate-950 text-slate-400 hover:text-white'
                                : 'bg-white text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            {stage}
                          </button>
                        ))}
                      </div>

                      {/* Flutter Phone UI Preview */}
                      <div className="max-w-md mx-auto rounded-3xl border-4 border-slate-800 bg-[#121824] p-5 text-white shadow-xl font-sans">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                          <div className="flex items-center gap-2">
                            <Smartphone className="w-5 h-5 text-indigo-400" />
                            <span className="font-extrabold text-sm">OMS Agency App v2.4</span>
                          </div>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold">FLUTTER</span>
                        </div>

                        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-slate-400">Order ID: <strong className="text-white">#OMS-88412</strong></span>
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-500/20 text-emerald-300">
                              {omsStatus}
                            </span>
                          </div>

                          <div>
                            <div className="text-sm font-bold">Surat Silk Weaving Order</div>
                            <div className="text-xs text-slate-400">Qty: 1,200 Meters • Agency: Laxmi Textiles</div>
                          </div>

                          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                            <div 
                              className="bg-indigo-500 h-full transition-all duration-500"
                              style={{
                                width: omsStatus === 'Placed' ? '20%' : omsStatus === 'In Production' ? '45%' : omsStatus === 'Quality Check' ? '70%' : omsStatus === 'Packed' ? '85%' : '100%'
                              }}
                            />
                          </div>

                          <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1">
                            <Activity className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Synced via PHP REST API in 0.8s</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. GAS CYLINDER CRM SANDBOX */}
                {project.demoType === 'crm' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-extrabold mb-1">CNG/LPG Cylinder Barcode Tracker</h3>
                      <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        Simulate looking up cylinder safety inspection dates and deposit account history.
                      </p>
                    </div>

                    <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                      <div className="max-w-md mx-auto space-y-4">
                        <div>
                          <label className="block text-xs font-bold mb-1">Cylinder Barcode Serial ID</label>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={cylinderId}
                              onChange={(e) => setCylinderId(e.target.value)}
                              className={`flex-1 px-3 py-2 rounded-xl text-sm border outline-none font-mono ${
                                isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-300 text-slate-900'
                              }`}
                            />
                            <button
                              type="button"
                              className="px-4 py-2 rounded-xl bg-orange-600 text-white text-xs font-bold cursor-pointer hover:bg-orange-500"
                            >
                              Scan
                            </button>
                          </div>
                        </div>

                        <div className={`p-4 rounded-2xl border space-y-2 text-xs font-sans ${
                          isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-800'
                        }`}>
                          <div className="flex justify-between border-b border-slate-800/40 pb-2">
                            <span className="text-slate-400">Gas Type:</span>
                            <span className="font-bold text-orange-400">LPG Commercial (47.5 KG)</span>
                          </div>
                          <div className="flex justify-between border-b border-slate-800/40 pb-2">
                            <span className="text-slate-400">Holder Account:</span>
                            <span className="font-bold">Surat Industrial Foods Ltd</span>
                          </div>
                          <div className="flex justify-between border-b border-slate-800/40 pb-2">
                            <span className="text-slate-400">Security Deposit Status:</span>
                            <span className="font-bold text-emerald-400">Verified (₹4,500 Paid)</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Hydro Testing Expiry:</span>
                            <span className="font-bold text-indigo-400">OCT 2028 (Valid)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            )}

          </div>

          {/* Modal Footer */}
          <div className={`p-4 border-t flex items-center justify-between gap-4 ${
            isDarkMode ? 'border-slate-800 bg-slate-900/50' : 'border-slate-200 bg-slate-50'
          }`}>
            <div className="text-xs font-medium text-slate-400">
              Designed & Built by <strong className="text-indigo-400">Jaimin R Patel</strong>
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold cursor-pointer shadow-md transition-all"
            >
              Close Showcase
            </button>
          </div>

        </motion.div>

        {/* Lightbox Modal Overlay */}
        {isLightboxOpen && currentActiveImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl border border-slate-800">
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 hover:bg-black text-white z-10 transition-colors cursor-pointer border border-white/20"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={currentActiveImg}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[85vh] object-contain rounded-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 text-center bg-black/70 backdrop-blur-md py-2 px-4 rounded-xl border border-white/10 text-white text-xs font-bold">
                {project.title} — Interface Screenshot Preview
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};
