import React, { useRef, useState } from 'react';
import { Download, Printer, X, Check, FileText, Sparkles, Loader2 } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, SKILL_CATEGORIES, AI_CODING_ASSISTANTS } from '../data/resumeData';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({ isOpen, onClose, isDarkMode }) => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownloadPDF = async () => {
    if (!resumeRef.current) return;
    setIsGeneratingPdf(true);
    setDownloadSuccess(false);

    try {
      const element = resumeRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.98);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;
      
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save('Jaimin_R_Patel_Resume.pdf');
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (err) {
      console.error('PDF generation error:', err);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl my-8 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Action Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                Jaimin R Patel — Printable Resume Document
              </h3>
              <p className="text-xs text-slate-400">
                Official PDF version formatted for single-click export & print
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors cursor-pointer"
              title="Print Document"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>

            <button
              onClick={handleDownloadPDF}
              disabled={isGeneratingPdf}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-all cursor-pointer disabled:opacity-50"
            >
              {isGeneratingPdf ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Generating PDF...</span>
                </>
              ) : downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Printable Resume Body Scroll Container */}
        <div className="p-4 sm:p-8 overflow-y-auto flex-1 bg-slate-950">
          
          {/* Printable HTML Resume Paper (A4 Style) */}
          <div
            ref={resumeRef}
            id="printable-resume-paper"
            className="w-full max-w-[210mm] mx-auto bg-white text-slate-900 p-8 sm:p-12 shadow-2xl rounded-xl border border-slate-200 text-left space-y-6 font-sans print:shadow-none print:border-none print:p-0"
          >
            {/* Header / Name & Contact */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 border-b-2 border-slate-900 pb-6">
              <div className="space-y-1 max-w-xl">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm sm:text-base font-bold text-indigo-700">
                  {PERSONAL_INFO.title}
                </p>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {PERSONAL_INFO.subTitle}
                </p>
              </div>

              <div className="text-xs text-slate-700 font-medium space-y-1 sm:text-right shrink-0">
                <p className="font-semibold text-slate-900">{PERSONAL_INFO.address}</p>
                <p>Surat - 395007, Gujarat, India</p>
                <p className="font-bold text-slate-900">+91 8160763069</p>
                <p className="text-indigo-600 font-semibold">{PERSONAL_INFO.email}</p>
                <p className="text-slate-800 font-medium">GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">github.com/JamDevelopers</a></p>
                <p className="text-slate-800 font-medium">LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">in/jaiminpatelsurat</a></p>
              </div>
            </div>

            {/* Experience Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 flex items-center justify-between">
                <span>Experience</span>
                <span className="text-xs font-normal text-slate-500 capitalize">10+ Years Professional</span>
              </h2>

              <div className="space-y-5">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="space-y-1.5">
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-base font-bold text-slate-900">
                        {exp.company} <span className="font-normal text-slate-600">— {exp.role}</span>
                      </h3>
                      <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                        {exp.period} ({exp.yearsRange})
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 font-medium">{exp.location}</p>

                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-800 leading-relaxed pl-1">
                      {exp.highlights.map((item, idx) => (
                        <li key={idx} className="marker:text-indigo-600">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-3">
              <h2 className="text-lg font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                Education
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {EDUCATION.map((edu) => (
                  <div key={edu.id} className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                    <h3 className="text-xs font-bold text-slate-900">{edu.degree}</h3>
                    <p className="text-[11px] font-semibold text-indigo-700">{edu.institution}</p>
                    <p className="text-[10px] text-slate-500">{edu.location}</p>
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-800 pt-1 border-t border-slate-200">
                      <span>Score: {edu.score}</span>
                      <span className="text-slate-600">{edu.passingYear}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Technologies Section */}
            <div className="space-y-3">
              <h2 className="text-lg font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                Skills & Known Languages / Frameworks
              </h2>

              <p className="text-xs text-slate-800 leading-relaxed font-mono bg-slate-50 p-3 rounded-lg border border-slate-200">
                C++, C#, HTML, JS, SQL, jQuery, CSS, XML, WordPress, Magento, OpenCart, SEO, PrestaShop, Joomla, Drupal, Google Utilities, PHP APIs, SMO, API Integrations, Web Services, PHP, VB.NET, .NET, ASP.NET, .NET Core, Crystal Reports, SMM, JSON, Node.js, Payment Gateways Integration, Web Scraper, Selenium, Puppeteer Sharp, WebView2, Flutter, Java, Dart, ChatGPT, Digital Marketing, SEO, Content Writing, Google Ads, Keyword Ranking, Android Studio, Shopify, Laravel, QA Testing, PlayStore Console, AI Automation, Postman.
              </p>
            </div>

            {/* AI Coding Assistants Section */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                AI Coding Assistants & CLI Tools
              </h2>
              <div className="flex flex-wrap gap-1.5 text-[11px]">
                {AI_CODING_ASSISTANTS.map((ai) => (
                  <span key={ai} className="px-2 py-0.5 bg-slate-100 text-slate-800 rounded font-semibold border border-slate-200">
                    {ai}
                  </span>
                ))}
              </div>
            </div>

            {/* Closing Faithfully Declaration */}
            <div className="pt-6 border-t border-slate-300 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-600">Yours Faithfully,</p>
                <p className="text-base font-extrabold text-slate-950 uppercase tracking-wider mt-0.5">
                  JAIMIN R PATEL
                </p>
              </div>

              <div className="text-right">
                <p className="text-xs italic text-indigo-700 font-bold">
                  {PERSONAL_INFO.tagline}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
