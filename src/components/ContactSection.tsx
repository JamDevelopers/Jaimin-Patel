import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Clock, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';
import { ContactFormInput } from '../types';

interface ContactSectionProps {
  isDarkMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    serviceType: 'Flutter Mobile App',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const services = [
    'Flutter Mobile App',
    'Laravel & Node.js REST API',
    'WhatsApp API Automation',
    'TaxPro / GST eInvoice Integration',
    'VB.NET / ASP.NET Desktop Software',
    'WordPress & E-Commerce Web',
    'Full-Stack Consulting',
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Contact Jaimin R Patel
          </h2>
          <p className={`mt-3 text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Have a project in mind, need custom WhatsApp or GST API automation, or want to discuss full-stack development? Reach out directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct WhatsApp Box */}
            <div className={`p-6 sm:p-8 rounded-3xl border relative overflow-hidden bg-gradient-to-br ${
              isDarkMode
                ? 'from-emerald-950/60 via-slate-900 to-slate-950 border-emerald-800/40'
                : 'from-emerald-50 via-white to-slate-50 border-emerald-200'
            }`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    Fastest Response via WhatsApp
                  </h3>
                  <p className="text-xs text-emerald-500 font-semibold">Instant Mobile Chat</p>
                </div>
              </div>

              <p className={`text-xs sm:text-sm mb-5 leading-relaxed ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Need urgent assistance or quick project estimation? Click below to chat directly with Jaimin R Patel on WhatsApp.
              </p>

              <a
                id="contact-whatsapp-direct"
                href={`https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent('Hello Jaimin, I found your resume portfolio and would like to connect.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp Chat (+91 8160763069)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Email Card */}
            <div className={`p-6 rounded-3xl border flex items-center justify-between gap-4 ${
              isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center gap-3 min-w-0">
                <div className={`p-3 rounded-2xl shrink-0 ${
                  isDarkMode ? 'bg-indigo-950 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
                }`}>
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-slate-400">Email Address</div>
                  <div className={`text-sm font-bold truncate ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className={`p-2.5 rounded-xl border shrink-0 transition-colors cursor-pointer ${
                  isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-300 hover:text-white' : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className={`p-6 rounded-3xl border flex items-center justify-between gap-4 ${
              isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center gap-3 min-w-0">
                <div className={`p-3 rounded-2xl shrink-0 ${
                  isDarkMode ? 'bg-amber-950 text-amber-400' : 'bg-amber-50 text-amber-600'
                }`}>
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-slate-400">Phone / Mobile</div>
                  <div className={`text-sm font-bold truncate ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {PERSONAL_INFO.phone}
                  </div>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className={`p-2.5 rounded-xl border shrink-0 transition-colors cursor-pointer ${
                  isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-300 hover:text-white' : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}
                title="Copy Phone Number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className={`p-6 rounded-3xl border ${
              isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-start gap-3">
                <div className={`p-3 rounded-2xl shrink-0 ${
                  isDarkMode ? 'bg-purple-950 text-purple-400' : 'bg-purple-50 text-purple-600'
                }`}>
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400">Office / Residence Address</div>
                  <div className={`text-sm font-bold mt-0.5 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {PERSONAL_INFO.address}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Surat - 395007, Gujarat, India
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-3xl border shadow-xl ${
              isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Send a Message Directly
              </h3>
              <p className={`text-xs sm:text-sm mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Fill out the form below to inquire about software engineering, Flutter mobile development, or API automation.
              </p>

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-8 rounded-2xl border text-center space-y-4 ${
                    isDarkMode ? 'bg-emerald-950/30 border-emerald-800/40 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold">Message Received!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Jaimin R Patel will review your request regarding <strong>{formData.serviceType}</strong> and contact you back at <strong>{formData.email}</strong> shortly.
                  </p>

                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <a
                      href={`https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent(`Hi Jaimin, I submitted the message form regarding ${formData.serviceType}. My subject was: ${formData.subject}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Follow Up on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 rounded-xl text-xs font-bold border border-slate-700 text-slate-300 hover:bg-slate-800"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Shah"
                        className={`w-full px-4 py-3 rounded-xl text-xs font-medium border outline-none transition-all ${
                          isDarkMode
                            ? 'bg-slate-950 border-slate-800 text-white focus:border-indigo-500'
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500'
                        }`}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rajesh@company.com"
                        className={`w-full px-4 py-3 rounded-xl text-xs font-medium border outline-none transition-all ${
                          isDarkMode
                            ? 'bg-slate-950 border-slate-800 text-white focus:border-indigo-500'
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 9876543210"
                        className={`w-full px-4 py-3 rounded-xl text-xs font-medium border outline-none transition-all ${
                          isDarkMode
                            ? 'bg-slate-950 border-slate-800 text-white focus:border-indigo-500'
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500'
                        }`}
                      />
                    </div>

                    {/* Service Type */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Required Service
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl text-xs font-medium border outline-none transition-all ${
                          isDarkMode
                            ? 'bg-slate-950 border-slate-800 text-white focus:border-indigo-500'
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500'
                        }`}
                      >
                        {services.map((svc) => (
                          <option key={svc} value={svc} className={isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>
                            {svc}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Inquiry regarding Flutter Android App for Production Unit"
                      className={`w-full px-4 py-3 rounded-xl text-xs font-medium border outline-none transition-all ${
                        isDarkMode
                          ? 'bg-slate-950 border-slate-800 text-white focus:border-indigo-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500'
                      }`}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Message Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project requirements, timeline, and goals..."
                      className={`w-full px-4 py-3 rounded-xl text-xs font-medium border outline-none transition-all ${
                        isDarkMode
                          ? 'bg-slate-950 border-slate-800 text-white focus:border-indigo-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500'
                      }`}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-contact-form"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending Message...' : 'Submit Inquiry'}</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
