import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Globe,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Smartphone,
  Monitor,
  Tablet,
  Play,
  Pause,
  Layers,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  X,
  Search,
  Camera,
  Star,
  Award,
  Zap,
  Phone,
  Calculator,
  FileCheck,
  Wrench,
  Users,
  MapPin,
  TrendingUp
} from 'lucide-react';
import { DEVELOPED_WEBSITES } from '../data/resumeData';
import { DevelopedWebsite } from '../types';

interface WebsitesCarouselProps {
  isDarkMode: boolean;
}

export const WebsitesCarousel: React.FC<WebsitesCarouselProps> = ({ isDarkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [lightboxWebsite, setLightboxWebsite] = useState<DevelopedWebsite | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Interactive state for CNG savings calculator demo in mockup
  const [monthlyKm, setMonthlyKm] = useState(1500);

  const currentWebsite = DEVELOPED_WEBSITES[currentIndex];

  // Auto-play interval
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % DEVELOPED_WEBSITES.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPlaying, DEVELOPED_WEBSITES.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % DEVELOPED_WEBSITES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + DEVELOPED_WEBSITES.length) % DEVELOPED_WEBSITES.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxWebsite) {
        if (e.key === 'Escape') setLightboxWebsite(null);
        return;
      }
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxWebsite]);

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Render authentic interactive Mockup content for each website type
  const renderMockupContent = (website: DevelopedWebsite) => {
    switch (website.websiteType) {
      case 'seo_portfolio':
        return (
          <div className="bg-white text-slate-900 font-sans text-xs sm:text-sm p-4 sm:p-6 space-y-4 select-none">
            {/* Google SERP Header */}
            <div className="flex items-center gap-3 border-b pb-3 border-slate-200">
              <div className="text-xl font-bold tracking-tight text-blue-600 flex items-center gap-1">
                <span>Google</span>
              </div>
              <div className="flex-1 bg-slate-100 rounded-full px-3 py-1 text-slate-700 text-xs flex items-center justify-between border border-slate-200">
                <span>uphotoshoot surat</span>
                <Search className="w-3.5 h-3.5 text-slate-400" />
              </div>
            </div>

            {/* Knowledge Graph Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row gap-4 justify-between items-start">
              <div className="space-y-1.5 min-w-0">
                <div className="text-xs text-slate-500">Search Result #1 • Surat Photography</div>
                <h4 className="text-base sm:text-lg font-bold text-blue-800 leading-tight">
                  U Photoshoot Digital Studio — Best Photography | Newborn | Wedding, Maternity Near Me
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-amber-600 font-semibold">
                  <div className="flex text-amber-400">
                    {'★★★★★'.split('').map((s, i) => (
                      <span key={i}>{s}</span>
                    ))}
                  </div>
                  <span>4.9 (371+ Google reviews)</span>
                  <span className="text-slate-400">• Photography studio in Surat</span>
                </div>
                <p className="text-xs text-slate-600 line-clamp-2">
                  Shop No B 14, Monarch Pal, Gaurav Path Road, Adajan, Pal Gam, Surat, Gujarat 395009. Phone: 095588 66865
                </p>
              </div>

              <div className="flex sm:flex-col gap-2 shrink-0 w-full sm:w-auto">
                <div className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold text-center flex items-center justify-center gap-1">
                  <Phone className="w-3 h-3" />
                  <span>Call Studio</span>
                </div>
                <div className="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold text-center flex items-center justify-center gap-1">
                  <MapPin className="w-3 h-3 text-rose-500" />
                  <span>Directions</span>
                </div>
              </div>
            </div>

            {/* Photos & Portfolio Grid */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-800 flex items-center justify-between">
                <span>Featured Studio Galleries</span>
                <span className="text-blue-600 text-[11px]">5K+ Instagram followers</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-rose-100 rounded-lg p-2.5 text-center border border-rose-200">
                  <div className="font-bold text-rose-900 text-xs">Maternity Shoot</div>
                  <div className="text-[10px] text-rose-700">Studio & Outdoor</div>
                </div>
                <div className="bg-indigo-100 rounded-lg p-2.5 text-center border border-indigo-200">
                  <div className="font-bold text-indigo-900 text-xs">Pre-Wedding</div>
                  <div className="text-[10px] text-indigo-700">Cinematic Frames</div>
                </div>
                <div className="bg-amber-100 rounded-lg p-2.5 text-center border border-amber-200">
                  <div className="font-bold text-amber-900 text-xs">Newborn & Baby</div>
                  <div className="text-[10px] text-amber-700">Theme Costumes</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'agency_ecommerce':
        return (
          <div className="bg-slate-950 text-white font-sans text-xs sm:text-sm p-4 sm:p-6 space-y-4 select-none">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center font-black text-xs">G</div>
                <span className="font-black tracking-wider text-sm">GODFATHE<span className="text-blue-400">RR</span></span>
              </div>
              <div className="hidden sm:flex items-center gap-3 text-xs text-slate-300">
                <span className="text-blue-400 font-semibold">HOME</span>
                <span>ABOUT US</span>
                <span>WHAT WE DO</span>
                <span>CONTACT US</span>
              </div>
            </div>

            {/* Hero Banner */}
            <div className="text-center py-4 space-y-2 bg-gradient-to-b from-blue-900/30 to-transparent rounded-xl border border-blue-900/40 p-4">
              <div className="text-[11px] font-bold tracking-widest text-blue-400 uppercase">DO YOUR BUSINESS WORLDWIDE</div>
              <h3 className="text-sm sm:text-lg font-black leading-tight text-white">
                GET CUSTOMERS FROM WORLD WITH GODFATHE<span className="text-blue-400">RR</span> SOLUTIONS
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto line-clamp-2">
                Global provider of integrated business solutions combining state-of-the-art technology with unparalleled business sense.
              </p>
              <div className="flex items-center justify-center gap-2 pt-1">
                <span className="px-3 py-1 bg-sky-500 text-white font-bold rounded-md text-[11px]">KNOW MORE ABOUT US</span>
                <span className="px-3 py-1 border border-slate-600 text-slate-300 font-bold rounded-md text-[11px]">CONTACT US</span>
              </div>
            </div>

            {/* Service Pillars Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
              <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg">
                <div className="text-xs font-bold text-sky-400">E-Commerce</div>
                <div className="text-[10px] text-slate-400">Stores & Payment</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg">
                <div className="text-xs font-bold text-blue-400">Digital Media</div>
                <div className="text-[10px] text-slate-400">SEO & Marketing</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg">
                <div className="text-xs font-bold text-emerald-400">Lead Generation</div>
                <div className="text-[10px] text-slate-400">High Conversion</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg">
                <div className="text-xs font-bold text-purple-400">Web Dev</div>
                <div className="text-[10px] text-slate-400">Custom CMS</div>
              </div>
            </div>
          </div>
        );

      case 'cng_energy':
        const petrolCost = (monthlyKm / 15) * 105;
        const cngCost = (monthlyKm / 28) * 78;
        const monthlySaving = Math.round(petrolCost - cngCost);

        return (
          <div className="bg-emerald-950/20 text-slate-900 dark:text-slate-100 font-sans text-xs sm:text-sm p-4 sm:p-6 space-y-4 select-none">
            {/* Top Bar */}
            <div className="bg-emerald-700 text-white px-3 py-1.5 rounded-lg flex items-center justify-between text-xs font-medium">
              <span>Contact: 0381-2391113 | cngpoint@gmail.com</span>
              <span className="hidden sm:inline">PESO Govt. Approved</span>
            </div>

            {/* Brand Nav */}
            <div className="flex items-center justify-between border-b pb-3 border-emerald-500/20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xs">CNG</div>
                <div>
                  <div className="font-extrabold text-sm text-emerald-700 dark:text-emerald-400">CNG POINT</div>
                  <div className="text-[9px] text-slate-500">Green Society Heroes • Tripura</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-semibold text-emerald-800 dark:text-emerald-300">
                <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/60">CNG Conversion</span>
                <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/60">Hydro Testing</span>
              </div>
            </div>

            {/* Interactive Calculator Section */}
            <div className="bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-800/80 rounded-2xl p-4 space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-bold text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm">
                  <Calculator className="w-4 h-4" />
                  <span>Check Monthly Saving: Petrol vs CNG</span>
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                  Save ₹{monthlySaving.toLocaleString('en-IN')}/mo
                </span>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>Monthly Driving: <b>{monthlyKm} km</b></span>
                  <span>Estimated Yearly Savings: <b className="text-emerald-600">₹{(monthlySaving * 12).toLocaleString('en-IN')}</b></span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="100"
                  value={monthlyKm}
                  onChange={(e) => setMonthlyKm(Number(e.target.value))}
                  className="w-full h-1.5 bg-emerald-200 dark:bg-emerald-900 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <div className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40">
                  <div className="text-slate-500 text-[10px]">Petrol Expense</div>
                  <div className="font-bold text-rose-600">₹{Math.round(petrolCost).toLocaleString('en-IN')}</div>
                </div>
                <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40">
                  <div className="text-slate-500 text-[10px]">CNG Expense</div>
                  <div className="font-bold text-emerald-600">₹{Math.round(cngCost).toLocaleString('en-IN')}</div>
                </div>
              </div>
            </div>

            {/* Plant Network Banner */}
            <div className="bg-emerald-800 text-white rounded-xl p-3 text-center">
              <div className="font-black text-xs uppercase tracking-wide">WE ARE GREEN SOCIETY HEROES</div>
              <div className="text-[10px] text-emerald-200">1st Periodical CNG Cylinder Hydro Testing Unit in North East India</div>
            </div>
          </div>
        );

      case 'gas_safety':
        return (
          <div className="bg-amber-950/10 text-slate-900 dark:text-slate-100 font-sans text-xs sm:text-sm p-4 sm:p-6 space-y-4 select-none">
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-3 border-amber-500/20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-amber-500 text-white font-black flex items-center justify-center text-xs">CFP</div>
                <div>
                  <div className="font-extrabold text-sm text-amber-700 dark:text-amber-400">CLEAN FUEL PROJECTS</div>
                  <div className="text-[9px] text-slate-500">Safe Society • Surat | Rajkot | Ankleshwar</div>
                </div>
              </div>
              <div className="px-2.5 py-1 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-bold border border-amber-300 dark:border-amber-800">
                PESO Rule 2016 Compliant
              </div>
            </div>

            {/* Certificate Verification Portal Banner */}
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-3.5 rounded-xl space-y-1 text-center shadow-sm">
              <div className="font-extrabold text-sm uppercase">ONLINE CERTIFICATE VERIFICATION PORTAL</div>
              <div className="text-[11px] text-amber-100">
                Authorized for RTO Officers, Insurance Inspectors & Gas Station Verification
              </div>
            </div>

            {/* Verification Steps Preview */}
            <div className="bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900/60 rounded-xl p-3 space-y-2">
              <div className="font-bold text-xs text-amber-800 dark:text-amber-400 flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-emerald-500" />
                <span>Instant Cylinder Safety Verification</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-[10px] text-center">
                <div className="p-2 bg-slate-50 dark:bg-slate-800/60 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="font-semibold text-slate-800 dark:text-slate-200">Surat CTF</div>
                  <div className="text-slate-500">Barbodhan Plant</div>
                </div>
                <div className="p-2 bg-slate-50 dark:bg-slate-800/60 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="font-semibold text-slate-800 dark:text-slate-200">Rajkot CTF</div>
                  <div className="text-slate-500">Aniyala Village</div>
                </div>
                <div className="p-2 bg-slate-50 dark:bg-slate-800/60 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="font-semibold text-slate-800 dark:text-slate-200">Ankleshwar</div>
                  <div className="text-slate-500">GIDC Unit</div>
                </div>
              </div>
            </div>

            {/* SS 316 Spares Catalog preview */}
            <div className="flex items-center justify-between text-xs bg-amber-50 dark:bg-amber-950/40 p-2.5 rounded-lg border border-amber-200 dark:border-amber-900/60">
              <span className="font-semibold text-amber-900 dark:text-amber-300">SS 316 Double Ferrule Fittings Catalog</span>
              <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400">1" to 1/8" Sizes In Stock</span>
            </div>
          </div>
        );

      case 'eco_automotive':
        return (
          <div className="bg-slate-900 text-white font-sans text-xs sm:text-sm p-4 sm:p-6 space-y-4 select-none">
            {/* Top Bar */}
            <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2 text-slate-400">
              <span>Helpline: +91 (982) 402 4365</span>
              <span>Ahmedabad • Nadiad</span>
            </div>

            {/* Brand Header */}
            <div className="flex items-center justify-between">
              <div className="font-extrabold text-sm text-blue-400 tracking-wider">
                ORIGINAL FUEL SYSTEM PVT. LTD.
              </div>
              <div className="px-2 py-0.5 rounded bg-blue-600 text-white text-[11px] font-bold">
                RoC Reg. Since 2012
              </div>
            </div>

            {/* Hero Feature */}
            <div className="bg-gradient-to-r from-blue-900/60 to-indigo-900/60 border border-blue-800/80 rounded-xl p-3.5 space-y-1">
              <div className="text-blue-300 text-[10px] font-bold uppercase tracking-widest">ECO FRIENDLY VEHICLES</div>
              <h4 className="text-sm sm:text-base font-extrabold text-white leading-tight">
                ECO FRIENDLY E-RICKSHAW & GAS CYLINDER SYSTEMS
              </h4>
              <p className="text-xs text-slate-300">
                Passenger Carrier, Cargo Delivery, Eco Safari & Municipal Waste Collection Vehicles.
              </p>
            </div>

            {/* PUC & Kit Grid */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-yellow-400 text-slate-950 p-2.5 rounded-lg text-center font-bold">
                <div className="text-[10px] uppercase">COMPUTERIZED PUC CENTER</div>
                <div className="text-[11px]">Petrol • CNG • Diesel • LPG</div>
              </div>
              <div className="bg-blue-600 text-white p-2.5 rounded-lg text-center font-bold">
                <div className="text-[10px] uppercase">LOVATO & TOMASETTO</div>
                <div className="text-[11px]">Save &gt;50% Fuel Cost</div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="websites" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
            <Globe className="w-4 h-4 text-indigo-400" />
            <span>Developed Websites & Live Web Portals</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Live Websites, Client Portals & Web Architectures
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Explore responsive web platforms, industrial portals, online certificate checkers, and SEO systems developed and deployed by Jaimin R Patel.
          </p>
        </div>

        {/* Carousel Control Toolbar: Slide Counter + Device Switcher + AutoPlay */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 bg-slate-900/60 dark:bg-slate-900/90 backdrop-blur-md border border-slate-800 p-3 rounded-2xl">
          {/* Slide Indicator & Title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-indigo-600 text-white font-mono text-xs font-bold">
              <span>{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="text-indigo-300">/</span>
              <span>{String(DEVELOPED_WEBSITES.length).padStart(2, '0')}</span>
            </div>
            <div className="text-xs font-semibold text-slate-300 truncate max-w-[200px] sm:max-w-xs">
              {currentWebsite.title}
            </div>
          </div>

          {/* Device Viewport Toggle (Desktop / Tablet / Mobile) */}
          <div className="hidden sm:flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setDeviceView('desktop')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                deviceView === 'desktop' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
              title="Desktop View"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>
            <button
              onClick={() => setDeviceView('tablet')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                deviceView === 'tablet' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
              title="Tablet View"
            >
              <Tablet className="w-3.5 h-3.5" />
              <span>Tablet</span>
            </button>
            <button
              onClick={() => setDeviceView('mobile')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                deviceView === 'mobile' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
              title="Mobile Phone View"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile</span>
            </button>
          </div>

          {/* Play/Pause & Nav Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-xl border border-slate-800 bg-slate-950 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              title={isPlaying ? "Pause Auto-Slide" : "Play Auto-Slide"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
            </button>
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl border border-slate-800 bg-slate-950 text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
              title="Previous Website"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-xl border border-slate-800 bg-slate-950 text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
              title="Next Website"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Stage: Carousel Interactive Card & Browser Mockup */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentWebsite.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className={`rounded-3xl border overflow-hidden shadow-2xl transition-all ${
                isDarkMode 
                  ? 'bg-slate-900/80 border-slate-800 shadow-black/40' 
                  : 'bg-white border-slate-200 shadow-slate-300/40'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Left / Top Column: Interactive Responsive Browser Frame */}
                <div className="lg:col-span-7 p-4 sm:p-6 lg:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800/60">
                  
                  {/* Browser Shell */}
                  <div className={`mx-auto w-full transition-all duration-300 ${
                    deviceView === 'mobile' 
                      ? 'max-w-xs' 
                      : deviceView === 'tablet' 
                      ? 'max-w-lg' 
                      : 'max-w-full'
                  }`}>
                    <div className="rounded-2xl border border-slate-700/80 bg-slate-950 overflow-hidden shadow-xl">
                      {/* Browser Chrome Header Bar */}
                      <div className="px-3.5 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                        </div>

                        {/* Simulated URL Bar */}
                        <div className="flex-1 max-w-sm bg-slate-950 rounded-lg px-3 py-1 text-[11px] font-mono text-slate-400 flex items-center justify-between border border-slate-800/80">
                          <div className="flex items-center gap-1.5 truncate">
                            <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                            <span className="text-emerald-400 font-semibold">https://</span>
                            <span className="truncate text-slate-300">{currentWebsite.id}.in</span>
                          </div>
                          <span className="text-[10px] text-slate-500 uppercase">Live</span>
                        </div>

                        {/* Expand to Lightbox */}
                        <button
                          onClick={() => setLightboxWebsite(currentWebsite)}
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                          title="View Full Screenshot in Lightbox"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Authentic Image Display Frame */}
                      <div className="relative aspect-16/10 bg-slate-950 overflow-hidden group">
                        <img
                          src={currentWebsite.mainImage}
                          alt={currentWebsite.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                          <span className="text-xs font-bold text-white bg-indigo-600/90 backdrop-blur px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5">
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span>Click to Zoom Authentic Screenshot</span>
                          </span>
                        </div>
                      </div>

                      {/* Alternate Screenshots thumbnails if available */}
                      {currentWebsite.galleryImages && currentWebsite.galleryImages.length > 1 && (
                        <div className="px-3 py-2 bg-slate-900 border-t border-slate-800 flex items-center gap-2 overflow-x-auto">
                          <span className="text-[10px] uppercase font-bold text-slate-400 shrink-0">Authentic Views:</span>
                          {currentWebsite.galleryImages.map((img, idx) => (
                            <img
                              key={idx}
                              src={img}
                              alt=""
                              onClick={() => {
                                setLightboxWebsite(currentWebsite);
                              }}
                              className="h-9 w-14 object-cover object-top rounded border border-slate-700 hover:border-indigo-400 cursor-pointer transition-all"
                            />
                          ))}
                        </div>
                      )}

                      {/* Browser Bottom Status bar */}
                      <div className="px-3 py-1.5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                        <span>{currentWebsite.mockupDetails.footerCredit}</span>
                        <span className="font-semibold text-indigo-400">{currentWebsite.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick View Controls */}
                  <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-2 text-xs border-t border-slate-800/60 text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Verified Development: <b>{currentWebsite.developedBy}</b></span>
                    </div>
                    <button
                      onClick={() => setLightboxWebsite(currentWebsite)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 hover:underline cursor-pointer"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Expand Screenshot & Full Specifications</span>
                    </button>
                  </div>
                </div>

                {/* Right / Bottom Column: Rich Specs & Architecture Details */}
                <div className="lg:col-span-5 p-6 lg:p-8 flex flex-col justify-between space-y-6">
                  
                  {/* Category & Title */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        {currentWebsite.category}
                      </span>
                      <span className="text-xs text-slate-400">
                        • {currentWebsite.client}
                      </span>
                    </div>

                    <h3 className={`text-2xl sm:text-3xl font-black leading-tight ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {currentWebsite.title}
                    </h3>

                    <p className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {currentWebsite.tagline}
                    </p>

                    <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {currentWebsite.summary}
                    </p>
                  </div>

                  {/* 4 Metric Badges */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {currentWebsite.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-2xl border ${
                          isDarkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{metric.label}</div>
                        <div className="text-base font-extrabold text-indigo-400 mt-0.5">{metric.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Key Developed Highlights */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">Key Modules & Engineering:</div>
                    <div className="space-y-1.5">
                      {currentWebsite.keyHighlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Technologies Used:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {currentWebsite.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-2.5 py-1 rounded-xl text-[11px] font-semibold border ${
                            isDarkMode
                              ? 'bg-slate-950 border-slate-800 text-slate-300'
                              : 'bg-slate-100 border-slate-200 text-slate-800'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setLightboxWebsite(currentWebsite)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/20 transition-all cursor-pointer"
                    >
                      <Maximize2 className="w-4 h-4" />
                      <span>View Screenshot Lightbox</span>
                    </button>
                    
                    <a
                      href="#contact"
                      className={`px-4 py-3 rounded-2xl text-xs font-bold border transition-colors ${
                        isDarkMode 
                          ? 'bg-slate-950 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700' 
                          : 'bg-white border-slate-300 text-slate-700 hover:text-slate-900'
                      }`}
                    >
                      Inquire Custom Portal
                    </a>
                  </div>

                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnail Selection Strip Below */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {DEVELOPED_WEBSITES.map((site, index) => {
            const isSelected = index === currentIndex;
            return (
              <button
                key={site.id}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPlaying(false);
                }}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? isDarkMode 
                      ? 'bg-indigo-950/40 border-indigo-500 ring-2 ring-indigo-500/30' 
                      : 'bg-indigo-50/80 border-indigo-500 ring-2 ring-indigo-500/30'
                    : isDarkMode 
                      ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700' 
                      : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Active Indicator Top Bar */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-emerald-400"></div>
                )}
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[10px] font-bold text-indigo-400">0{index + 1}</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-semibold truncate max-w-[80px]">
                    {site.category.split(' ')[0]}
                  </span>
                </div>
                <div className={`font-bold text-xs truncate ${isSelected ? 'text-indigo-400' : isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {site.title}
                </div>
                <div className="text-[11px] text-slate-500 truncate mt-0.5">
                  {site.client}
                </div>
              </button>
            );
          })}
        </div>

      </div>

      {/* Full-Screen Screenshot Lightbox Modal */}
      <AnimatePresence>
        {lightboxWebsite && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setLightboxWebsite(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl max-h-[90vh] bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Lightbox Header */}
              <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center text-xs">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-tight">{lightboxWebsite.title}</h3>
                    <p className="text-xs text-slate-400">{lightboxWebsite.tagline}</p>
                  </div>
                </div>

                {/* Zoom Controls & Close */}
                <div className="flex items-center gap-2">
                  <div className="hidden sm:flex items-center gap-1 bg-slate-950 px-2 py-1 rounded-xl border border-slate-800 text-xs text-slate-300">
                    <button
                      onClick={() => setZoomLevel((z) => Math.max(0.75, z - 0.25))}
                      className="p-1 hover:text-white"
                      title="Zoom Out"
                    >
                      <ZoomOut className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-mono text-[11px] px-1">{Math.round(zoomLevel * 100)}%</span>
                    <button
                      onClick={() => setZoomLevel((z) => Math.min(2.0, z + 0.25))}
                      className="p-1 hover:text-white"
                      title="Zoom In"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setZoomLevel(1)}
                      className="p-1 hover:text-white"
                      title="Reset Zoom"
                    >
                      <RotateCcw className="w-3 h-3" />
                    </button>
                  </div>

                  <button
                    onClick={() => setLightboxWebsite(null)}
                    className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Lightbox Body with Zoom / Scroll */}
              <div className="flex-1 overflow-auto p-4 sm:p-6 bg-slate-900/40 custom-scrollbar">
                <div 
                  className="transition-transform duration-200 origin-top mx-auto max-w-4xl"
                  style={{ transform: `scale(${zoomLevel})` }}
                >
                  <div className="rounded-2xl border border-slate-700 bg-slate-950 overflow-hidden shadow-2xl">
                    <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs font-mono text-slate-300 flex items-center justify-between">
                      <span>{lightboxWebsite.id} — Authentic Live Screenshot</span>
                      <span className="text-emerald-400">● Authentic Asset Verified</span>
                    </div>
                    <img
                      src={lightboxWebsite.mainImage}
                      alt={lightboxWebsite.title}
                      className="w-full h-auto object-contain max-h-[60vh] bg-slate-950"
                    />
                  </div>

                  {/* Multi-Image Gallery in Lightbox */}
                  {lightboxWebsite.galleryImages && lightboxWebsite.galleryImages.length > 1 && (
                    <div className="mt-4 p-4 rounded-2xl bg-slate-950 border border-slate-800">
                      <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        All Authentic Screenshots ({lightboxWebsite.galleryImages.length}):
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {lightboxWebsite.galleryImages.map((img, idx) => (
                          <div key={idx} className="rounded-xl overflow-hidden border border-slate-700 bg-slate-900 aspect-16/10">
                            <img src={img} alt="" className="w-full h-full object-cover object-top" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Full Specifications Below Screenshot */}
                  <div className="max-w-3xl mx-auto mt-6 p-6 rounded-2xl bg-slate-950 border border-slate-800 text-slate-300 space-y-4 text-xs">
                    <div className="font-bold text-sm text-white uppercase tracking-wider border-b border-slate-800 pb-2">
                      Technical Architecture & System Breakdown
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <div className="font-semibold text-indigo-400">Client / Organization:</div>
                        <div>{lightboxWebsite.client}</div>
                        <div className="font-semibold text-indigo-400 mt-2">Location & Deployment:</div>
                        <div>{lightboxWebsite.liveUrlOrLocation}</div>
                        <div className="font-semibold text-indigo-400 mt-2">Development Lead:</div>
                        <div>{lightboxWebsite.developedBy}</div>
                      </div>
                      <div>
                        <div className="font-semibold text-indigo-400">Tech Stack:</div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {lightboxWebsite.techStack.map((t, i) => (
                            <span key={i} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-300">
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="font-semibold text-indigo-400 mt-2">Key Metrics:</div>
                        <div className="grid grid-cols-2 gap-1 mt-1">
                          {lightboxWebsite.metrics.map((m, i) => (
                            <div key={i} className="bg-slate-900 p-1.5 rounded border border-slate-800">
                              <span className="text-[10px] text-slate-500">{m.label}:</span> <b className="text-white">{m.value}</b>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lightbox Footer */}
              <div className="px-5 py-3 border-t border-slate-800 bg-slate-900 flex items-center justify-between text-xs text-slate-400">
                <span>Developed by {lightboxWebsite.developedBy} ({lightboxWebsite.period})</span>
                <button
                  onClick={() => setLightboxWebsite(null)}
                  className="px-4 py-1.5 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-colors"
                >
                  Close Lightbox
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
