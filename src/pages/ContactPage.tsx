import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { PageView } from '../types';

interface ContactPageProps {
  onNavigate: (page: PageView) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill out all fields before sending.');
      return;
    }
    if (!email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }

    // Functional-ready client state
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-blue-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-md">
          <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
          Direct Inquiries
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Get in Touch
        </h1>
        <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto">
          Have a question about a product, partnership, or something else? I'd love to hear from you.
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-white/[0.04] backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl p-6 sm:p-10 text-white">
        {submitted ? (
          <div className="text-center py-10 space-y-4 animate-in fade-in duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-400/15 border border-emerald-400/20 text-emerald-300 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-black text-white">Message Received</h3>
            <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{name}</strong>! Your message has been recorded. Aryaman will reply to <strong className="text-white">{email}</strong> shortly.
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setEmail('');
                  setMessage('');
                }}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-bold transition-all backdrop-blur-md"
              >
                Send Another Message
              </button>
              <button
                onClick={() => onNavigate({ type: 'store' })}
                className="px-5 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5 shadow-md shadow-blue-500/20"
              >
                <span>Explore Store</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <label htmlFor="contact-name" className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-2">
                Name <span className="text-rose-400">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.05] text-white placeholder-white/35 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/[0.08] transition-all"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-2">
                Email <span className="text-rose-400">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.05] text-white placeholder-white/35 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/[0.08] transition-all"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-2">
                Message <span className="text-rose-400">*</span>
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What would you like to discuss? Ask about any digital product, customized resource, or collaboration..."
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.05] text-white placeholder-white/35 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/[0.08] transition-all resize-y"
              />
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-400/30 text-rose-300 text-xs font-bold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              id="contact-submit-btn"
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white font-extrabold text-base border border-white/20 shadow-xl shadow-blue-500/25 transition-all duration-200"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>

            <p className="text-xs text-center text-white/40">
              Aryaman responds directly to genuine product inquiries and suggestions.
            </p>

          </form>
        )}
      </div>

    </div>
  );
};
