import React from 'react';
import { PageView } from '../types';
import { Bot, Compass, Zap, BarChart3, Briefcase, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageView) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Hero / Intro */}
      <div className="space-y-6 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-blue-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          Founder & Creator
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          About Aryaman Chhaperwal
        </h1>

        <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 shadow-2xl space-y-4 text-white/70 text-base sm:text-lg leading-relaxed">
          <p className="font-semibold text-white">
            Hi, I'm Aryaman Chhaperwal. I create practical digital products focused on AI, productivity, learning, careers, research, and entrepreneurship.
          </p>
          <p className="text-white/65 font-normal">
            This collection brings together structured resources designed to make useful information easier to discover, organize, and apply. From AI tools and prompts to career resources, productivity systems, research databases, workflows, and founder resources, each product is built with practical use in mind.
          </p>
        </div>
      </div>

      {/* Section: What I Create */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-wider text-blue-400">
            Domains of Focus
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            What I Create
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <div className="p-6 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-lg space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-300 flex items-center justify-center font-bold">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-white">AI & Technology</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Resources for exploring AI tools, agents, prompts, workflows, and open-source technology.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-lg space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 flex items-center justify-center font-bold">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-white">Learning & Careers</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Resources for discovering learning opportunities, certificates, books, and AI-ready career paths.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-lg space-y-3">
            <div className="w-10 h-10 rounded-xl bg-fuchsia-500/20 border border-fuchsia-500/30 text-fuchsia-300 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-white">Productivity</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Systems and resources designed to help organize work and improve productivity.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-lg space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 flex items-center justify-center font-bold">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-white">Research</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Structured resources for exploring companies, markets, technology, and research.
            </p>
          </div>

          <div className="sm:col-span-2 p-6 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-lg space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-300 flex items-center justify-center font-bold">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-white">Entrepreneurship</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Resources designed around founders, ideas, business thinking, and startup exploration.
            </p>
          </div>

        </div>
      </section>

      {/* Section: Why I Build These Products */}
      <section className="space-y-4 rounded-3xl bg-gradient-to-r from-blue-950/40 via-purple-950/30 to-slate-900/60 backdrop-blur-2xl border border-white/15 text-white p-8 sm:p-10 shadow-2xl">
        <span className="text-xs font-extrabold uppercase tracking-wider text-blue-400">
          Core Mission
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Why I Build These Products
        </h2>
        <blockquote className="text-lg sm:text-xl font-medium text-white/90 leading-relaxed border-l-4 border-blue-400 pl-4 py-1">
          "The goal is simple: turn scattered information into structured, useful digital resources that people can actually use."
        </blockquote>
      </section>

      {/* Bottom CTA */}
      <div className="text-center pt-6 space-y-4">
        <h3 className="text-xl font-extrabold text-white">
          Ready to explore the digital products?
        </h3>
        <button
          onClick={() => onNavigate({ type: 'store' })}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white font-extrabold text-sm border border-white/20 shadow-xl shadow-blue-500/25 transition-all"
        >
          <span>Explore All 11 Resources</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
