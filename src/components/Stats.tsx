import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Users, FileText, MessageSquare, ShieldCheck, Code } from 'lucide-react';

interface StatsProps {
  isDarkMode: boolean;
}

export const Stats: React.FC<StatsProps> = ({ isDarkMode }) => {
  const stats = [
    {
      label: 'Years Experience',
      value: '10+',
      description: 'Continuous development in web, mobile & automation',
      icon: Briefcase,
      color: 'text-indigo-500',
    },
    {
      label: 'Team Leadership',
      value: '6+',
      description: 'Engineers managed on complex CRM systems',
      icon: Users,
      color: 'text-emerald-500',
    },
    {
      label: 'eInvoice & GST',
      value: '100%',
      description: 'TaxPro eWaybill, SMS & token API integrations',
      icon: FileText,
      color: 'text-amber-500',
    },
    {
      label: 'WhatsApp Dispatch',
      value: '500k+',
      description: 'Automated invoices sent via WhatsApp API',
      icon: MessageSquare,
      color: 'text-sky-500',
    },
  ];

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-3xl border ${
          isDarkMode
            ? 'bg-slate-900/60 border-slate-800 shadow-xl'
            : 'bg-white border-slate-200 shadow-md'
        }`}>
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`p-4 rounded-2xl border transition-all ${
                  isDarkMode
                    ? 'bg-slate-950/50 border-slate-800/80 hover:border-slate-700'
                    : 'bg-slate-50 border-slate-100 hover:border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-3xl font-extrabold tracking-tight ${stat.color}`}>
                    {stat.value}
                  </span>
                  <div className={`p-2 rounded-xl ${
                    isDarkMode ? 'bg-slate-900 text-slate-300' : 'bg-white text-slate-700 shadow-sm'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className={`font-bold text-sm ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {stat.label}
                </div>
                <div className={`text-xs mt-1 leading-snug ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
