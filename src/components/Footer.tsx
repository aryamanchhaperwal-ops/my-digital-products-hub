import React, { useState } from 'react';
import { PageView, CategoryFilter } from '../types';
import { Sparkles, Shield, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onFilterCategory?: (category: CategoryFilter) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onFilterCategory }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const handleCategoryClick = (cat: CategoryFilter) => {
    onNavigate({ type: 'store', initialCategory: cat });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#020617]/80 backdrop-blur-2xl text-white/70 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 flex items-center justify-center text-white font-black text-base shadow-lg shadow-blue-500/20 border border-white/20">
                AC
              </div>
              <div>
                <span className="block font-black text-white text-lg tracking-tight">
                  Aryaman Chhaperwal
                </span>
                <span className="text-xs font-semibold text-white/50">
                  Digital products for the AI era.
                </span>
              </div>
            </div>

            <p className="text-sm text-white/60 max-w-sm leading-relaxed">
              Practical digital products designed to help you discover, learn, organize, research, and work smarter in a rapidly changing world.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-white/50">
              <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" /> 11 Curated Resources
              </span>
              <span>•</span>
              <span>Google Drive & Sheets Ready</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  id="footer-nav-home"
                  onClick={() => handleNavClick({ type: 'home' })}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-store"
                  onClick={() => handleNavClick({ type: 'store' })}
                  className="hover:text-white transition-colors"
                >
                  Store
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-about"
                  onClick={() => handleNavClick({ type: 'about' })}
                  className="hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-faq"
                  onClick={() => handleNavClick({ type: 'faq' })}
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-contact"
                  onClick={() => handleNavClick({ type: 'contact' })}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Categories Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Categories
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  id="footer-cat-ai"
                  onClick={() => handleCategoryClick('AI & Technology')}
                  className="hover:text-white transition-colors text-left"
                >
                  AI & Technology
                </button>
              </li>
              <li>
                <button
                  id="footer-cat-productivity"
                  onClick={() => handleCategoryClick('Productivity')}
                  className="hover:text-white transition-colors text-left"
                >
                  Productivity
                </button>
              </li>
              <li>
                <button
                  id="footer-cat-career"
                  onClick={() => handleCategoryClick('Career & Learning')}
                  className="hover:text-white transition-colors text-left"
                >
                  Career & Learning
                </button>
              </li>
              <li>
                <button
                  id="footer-cat-research"
                  onClick={() => handleCategoryClick('Research')}
                  className="hover:text-white transition-colors text-left"
                >
                  Research
                </button>
              </li>
              <li>
                <button
                  id="footer-cat-business"
                  onClick={() => handleCategoryClick('Business & Founder Resources')}
                  className="hover:text-white transition-colors text-left"
                >
                  Business
                </button>
              </li>
            </ul>
          </div>

          {/* Legal and Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  id="footer-legal-privacy"
                  onClick={() => setLegalModal('privacy')}
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  id="footer-legal-terms"
                  onClick={() => setLegalModal('terms')}
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </button>
              </li>
            </ul>

            <div className="pt-3">
              <div className="p-3.5 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 text-xs text-white/60 space-y-1">
                <span className="font-bold text-white block">Educational Notice</span>
                <p className="text-[11px] leading-relaxed text-white/50">
                  Resources are for learning and organization. Stock Research Vault does not constitute investment advice.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© 2026 Aryaman Chhaperwal. All rights reserved.</p>
          <p className="text-white/50">
            Crafted for builders, researchers, founders, and lifelong learners.
          </p>
        </div>
      </div>

      {/* Legal Dialog Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#090d1f]/95 text-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-4 border border-white/15 backdrop-blur-2xl shadow-2xl">
            <div className="flex items-center justify-between border-b pb-3 border-white/10">
              <h3 className="text-lg font-black text-white">
                {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h3>
              <button
                onClick={() => setLegalModal(null)}
                className="text-white/40 hover:text-white font-bold p-1 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="text-xs sm:text-sm text-white/70 space-y-3 max-h-72 overflow-y-auto leading-relaxed">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    <strong className="text-white">Privacy Commitment:</strong> We respect your privacy. Any contact information, emails, or queries submitted on this website are used exclusively for digital product delivery, customer inquiries, and critical product updates.
                  </p>
                  <p>
                    We do not sell, rent, or trade your personal information to third parties. All file links are hosted securely on official Google Drive and Google Sheets platforms.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong className="text-white">Digital Products License:</strong> All digital resources, databases, templates, and guides are provided for the personal, educational, and internal business use of the purchaser or authorized previewer.
                  </p>
                  <p>
                    <strong className="text-white">Disclaimer:</strong> The Stock Research Vault is an educational and research framework and does NOT constitute financial advice or investment recommendations. All resources are provided "as is".
                  </p>
                </>
              )}
            </div>
            <div className="pt-2 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-bold backdrop-blur-md transition-all shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
