import React, { useState } from 'react';
import { PageView } from '../types';
import { HelpCircle, ChevronDown, Sparkles, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';

interface FAQPageProps {
  onNavigate: (page: PageView) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What are these digital products?',
      a: 'They are practical, pre-structured digital resources created by Aryaman Chhaperwal. They include curated databases, step-by-step playbooks, blueprints, frameworks, prompt libraries, and operating systems designed to help you work, research, organize, and build smarter in the modern AI landscape.'
    },
    {
      q: 'What format are the products?',
      a: 'Our products are delivered in standardized formats depending on the resource type: PDF guides for sequential playbooks & blueprints (such as AI Career Blueprint and AI Workflows Playbook), and interactive Google Sheets / downloadable Excel workbooks for searchable databases and systems (such as AI Atlas, Founder OS, and AI Agents Database).'
    },
    {
      q: 'How do I access a product?',
      a: 'You can immediately click "Preview / Open Resource" on any product detail page or card to open the resource directly in Google Drive or Google Sheets in a new browser tab. You can save, bookmark, make a personal copy, or download it to your device.'
    },
    {
      q: 'Are the resources beginner-friendly?',
      a: 'Yes! While designed with sufficient depth for practitioners, developers, and founders, each resource includes clear categorizations, setup instructions, and structured layouts so you can jump in and find immediate utility without prior technical background.'
    },
    {
      q: 'Can I use the resources for personal learning?',
      a: 'Yes, absolutely. They are crafted specifically for personal learning, skill development, career transitions, startup exploration, and day-to-day productivity enhancement.'
    },
    {
      q: 'Are these financial recommendations?',
      a: 'No. Specifically regarding the Stock Research Vault: it is strictly an educational and fundamental research organization framework. It does NOT constitute financial advice, investment advisory, stock recommendations, or an offer to buy or sell securities. Always conduct your own independent due diligence or consult a qualified financial advisor.',
      highlight: true
    },
    {
      q: 'How will I receive my purchase?',
      a: 'This website is currently in its Storefront MVP phase. All resource files are hosted on Google Drive and Google Sheets and can be previewed or opened directly right now. Automated payment gateway integration (Razorpay / UPI) and automated email invoice delivery are being connected in the next update. No charges are made during this preview phase.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-blue-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-md">
          <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
          Clear Answers
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto">
          Everything you need to know about Aryaman Chhaperwal's digital products, formats, and access.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden backdrop-blur-xl ${
                faq.highlight
                  ? 'border-amber-400/30 bg-amber-500/10'
                  : 'border-white/10 bg-white/[0.04] shadow-lg'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  {faq.highlight && (
                    <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  )}
                  <span className="text-base sm:text-lg font-extrabold text-white">
                    {faq.q}
                  </span>
                </div>
                <div
                  className={`p-1.5 rounded-lg bg-white/10 text-white/70 transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? 'rotate-180 bg-blue-500/20 text-blue-300' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-white/70 leading-relaxed border-t border-white/10 animate-in fade-in duration-150">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Have more questions */}
      <div className="p-8 rounded-3xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 text-center space-y-4 shadow-2xl">
        <h3 className="text-lg font-black text-white">
          Still have a question?
        </h3>
        <p className="text-sm text-white/60 max-w-md mx-auto">
          If you have questions about specific templates or custom requests, feel free to reach out directly.
        </p>
        <button
          onClick={() => onNavigate({ type: 'contact' })}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-sm transition-all backdrop-blur-md shadow-md"
        >
          <span>Contact Aryaman</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
