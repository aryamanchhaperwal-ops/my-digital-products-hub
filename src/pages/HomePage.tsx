import React from 'react';
import { PageView, CategoryFilter, Product } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductCover } from '../components/ProductCover';
import {
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle2,
  FolderSync,
  Compass,
  Database,
  Layers,
  Award,
  BarChart3,
  Search,
  BookOpen,
  Briefcase,
  Bot
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageView) => void;
  onSelectProduct: (slug: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProduct }) => {
  // Featured products specified in prompt: Founder OS (₹199), AI Career Blueprint (₹299), AI Atlas (₹99), Prompt Vault (₹99)
  const featuredProductIds = ['founder-os', 'ai-career-blueprint', 'ai-atlas', 'prompt-vault'];
  const featuredProducts = featuredProductIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));

  const heroFeaturedProduct = PRODUCTS.find((p) => p.id === 'ai-career-blueprint') || PRODUCTS[0];
  const heroSecondProduct = PRODUCTS.find((p) => p.id === 'founder-os') || PRODUCTS[1];

  const handleCategoryClick = (cat: CategoryFilter) => {
    onNavigate({ type: 'store', initialCategory: cat });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* ==================================================
          1. HERO SECTION
          ================================================== */}
      <section id="hero-section" className="relative pt-8 sm:pt-14 pb-4 overflow-hidden">
        {/* Ambient blurred gradient lights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none -z-10">
          <div className="absolute top-4 left-1/4 w-80 h-80 rounded-full bg-blue-500/20 blur-[120px]" />
          <div className="absolute top-10 right-1/4 w-96 h-96 rounded-full bg-purple-500/20 blur-[140px]" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full bg-cyan-400/10 blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headlines and CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md shadow-lg shadow-black/20">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                <span className="text-xs font-extrabold text-blue-300 tracking-wide uppercase">
                  11 Practical Digital Products • Ready to Use
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
                Digital Resources Built for the <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">AI Era</span>
              </h1>

              <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Practical digital products designed to help you discover, learn, organize, research, and work smarter in a rapidly changing world.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  id="hero-primary-cta"
                  onClick={() => onNavigate({ type: 'store' })}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white font-extrabold text-base border border-white/20 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Explore the Store</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  id="hero-secondary-cta"
                  onClick={() => {
                    const el = document.getElementById('all-products-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-base backdrop-blur-md shadow-lg shadow-black/10 transition-all"
                >
                  <span>Browse Products</span>
                </button>
              </div>

              {/* Mini Value Highlights */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-white/10 max-w-lg mx-auto lg:mx-0 text-left">
                <div>
                  <span className="block text-xl font-black text-white">₹99–₹299</span>
                  <span className="text-xs font-semibold text-white/50">Accessible pricing</span>
                </div>
                <div>
                  <span className="block text-xl font-black text-white">11 Guides</span>
                  <span className="text-xs font-semibold text-white/50">Curated & vetted</span>
                </div>
                <div>
                  <span className="block text-xl font-black text-white">Instant</span>
                  <span className="text-xs font-semibold text-white/50">Direct cloud files</span>
                </div>
              </div>

            </div>

            {/* Right Column: Abstract/Product-Oriented Visual Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Foreground Card (AI Career Blueprint) */}
                <div
                  onClick={() => onSelectProduct(heroFeaturedProduct.slug)}
                  className="relative z-20 bg-white/[0.06] backdrop-blur-2xl rounded-3xl p-3 sm:p-4 shadow-2xl border border-white/15 hover:border-white/25 hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer group"
                >
                  <ProductCover product={heroFeaturedProduct} size="md" />
                  
                  <div className="pt-4 pb-2 px-2 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-blue-400">
                        {heroFeaturedProduct.category}
                      </span>
                      <h4 className="font-extrabold text-white text-base sm:text-lg group-hover:text-blue-300 transition-colors">
                        {heroFeaturedProduct.name}
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-black text-white">₹{heroFeaturedProduct.price}</span>
                      <span className="block text-[11px] font-bold text-emerald-400">Verified Resource</span>
                    </div>
                  </div>
                </div>

                {/* Floating Second Card in background (Founder OS) */}
                <div
                  onClick={() => onSelectProduct(heroSecondProduct.slug)}
                  className="hidden sm:block absolute -top-8 -right-6 w-4/5 z-10 opacity-80 hover:opacity-100 hover:z-30 transition-all duration-300 cursor-pointer bg-[#0b1329]/85 backdrop-blur-xl rounded-2xl p-2.5 shadow-2xl border border-white/15 -rotate-2"
                >
                  <div className="flex items-center justify-between px-2 pb-1.5 text-xs font-bold text-white/60">
                    <span>Founder OS • Business</span>
                    <span className="text-white font-extrabold">₹199</span>
                  </div>
                  <div className="h-28 overflow-hidden rounded-xl">
                    <ProductCover product={heroSecondProduct} size="sm" showBadge={false} />
                  </div>
                </div>

                {/* Floating pill badge */}
                <div className="absolute -bottom-5 -left-4 z-30 bg-[#0b1329]/95 backdrop-blur-xl text-white px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/15">
                  <div className="w-8 h-8 rounded-xl bg-blue-500 text-white flex items-center justify-center font-black shadow-md shadow-blue-500/40">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold block text-white">Direct Cloud Delivery</span>
                    <span className="text-[10px] text-white/50">Drive & Sheets Access</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          2. TRUST / VALUE STRIP
          ================================================== */}
      <section id="trust-strip" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 text-white p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            <div className="pt-3 md:pt-0">
              <span className="block text-2xl sm:text-3xl font-black text-white tracking-tight">11</span>
              <span className="text-xs sm:text-sm font-semibold text-blue-300">Digital Products</span>
            </div>

            <div className="pt-3 md:pt-0">
              <span className="block text-sm sm:text-base font-extrabold text-white tracking-wide">
                AI • Productivity
              </span>
              <span className="text-xs sm:text-sm font-semibold text-blue-300">Career • Research</span>
            </div>

            <div className="pt-3 md:pt-0">
              <span className="block text-base sm:text-lg font-black text-white">Practical & Ready</span>
              <span className="text-xs sm:text-sm font-semibold text-blue-300">Immediate Usability</span>
            </div>

            <div className="pt-3 md:pt-0">
              <span className="block text-base sm:text-lg font-black text-emerald-400">Affordable</span>
              <span className="text-xs sm:text-sm font-semibold text-blue-300">Digital Resources</span>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          3. FEATURED PRODUCTS SECTION
          ================================================== */}
      <section id="featured-products-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-400 uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              Handpicked Essentials
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Featured Digital Products
            </h2>
          </div>

          <button
            onClick={() => onNavigate({ type: 'store' })}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>View all 11 products</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Featured Products: Founder OS, AI Career Blueprint, AI Atlas, Prompt Vault */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewProduct={onSelectProduct}
            />
          ))}
        </div>
      </section>

      {/* ==================================================
          4. CATEGORIES SECTION
          ================================================== */}
      <section id="categories-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-blue-400">
            Browse by Domain
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Curated Categories
          </h2>
          <p className="text-sm sm:text-base text-white/60">
            Explore resources organized by domain to find the exact database, playbook, or blueprint you need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            {
              name: 'AI & Technology' as CategoryFilter,
              icon: Bot,
              count: '5 resources',
              color: 'from-blue-600 to-cyan-600',
              description: 'Databases, prompts, workflows & repos'
            },
            {
              name: 'Productivity' as CategoryFilter,
              icon: Zap,
              count: '1 resource',
              color: 'from-fuchsia-600 to-purple-600',
              description: 'Focus systems & execution frameworks'
            },
            {
              name: 'Career & Learning' as CategoryFilter,
              icon: Compass,
              count: '3 resources',
              color: 'from-indigo-600 to-blue-600',
              description: 'Blueprints, certificates & summaries'
            },
            {
              name: 'Research' as CategoryFilter,
              icon: BarChart3,
              count: '1 resource',
              color: 'from-emerald-600 to-teal-700',
              description: 'Company & market analysis frameworks'
            },
            {
              name: 'Business & Founder Resources' as CategoryFilter,
              icon: Briefcase,
              count: '1 resource',
              color: 'from-purple-600 to-violet-800',
              description: 'Idea validation & founder operating system'
            }
          ].map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.name}
                id={`cat-card-${cat.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => handleCategoryClick(cat.name)}
                className="group text-left p-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-xl border border-white/10 hover:border-white/25 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${cat.color} text-white flex items-center justify-center mb-3.5 shadow-md border border-white/20 group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-white text-sm sm:text-base group-hover:text-blue-300 transition-colors mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed mb-3">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-white/40 group-hover:text-blue-300">
                  <span>{cat.count}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ==================================================
          5. ALL PRODUCTS PREVIEW (All 11 Products)
          ================================================== */}
      <section id="all-products-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-400">
              Complete Storefront
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              All 11 Digital Products
            </h2>
            <p className="text-sm text-white/60 mt-1">
              Every resource engineered for immediate practical application.
            </p>
          </div>

          <button
            onClick={() => onNavigate({ type: 'store' })}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-extrabold backdrop-blur-md transition-colors"
          >
            <span>Open Dedicated Store View</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4-column desktop, 2-column tablet, 1-column mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewProduct={onSelectProduct}
            />
          ))}
        </div>
      </section>

      {/* ==================================================
          6. WHY THESE PRODUCTS (3-4 Benefits)
          ================================================== */}
      <section id="why-these-products-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 sm:p-12 shadow-2xl">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-400">
              Value & Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Why These Products
            </h2>
            <p className="text-sm text-white/60">
              Built with care to save time, eliminate guesswork, and bring order to complex topics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white/[0.04] hover:bg-white/[0.07] p-6 rounded-2xl border border-white/10 shadow-md backdrop-blur-md space-y-3 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-300 flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-white">Practical</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Resources designed to be useful immediately. No theoretical fluff—just actionable templates and roadmaps.
              </p>
            </div>

            <div className="bg-white/[0.04] hover:bg-white/[0.07] p-6 rounded-2xl border border-white/10 shadow-md backdrop-blur-md space-y-3 transition-all">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 flex items-center justify-center font-bold">
                <FolderSync className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-white">Curated</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Organized collections instead of scattered information across hundreds of fragmented browser tabs.
              </p>
            </div>

            <div className="bg-white/[0.04] hover:bg-white/[0.07] p-6 rounded-2xl border border-white/10 shadow-md backdrop-blur-md space-y-3 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-white">Affordable</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Useful digital resources at accessible prices (₹99 to ₹299) so anyone can upgrade their knowledge.
              </p>
            </div>

            <div className="bg-white/[0.04] hover:bg-white/[0.07] p-6 rounded-2xl border border-white/10 shadow-md backdrop-blur-md space-y-3 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-300 flex items-center justify-center font-bold">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-white">Built for the AI Era</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Designed around modern AI, productivity, learning, and research to keep you ahead of rapid disruption.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          7. ABOUT PREVIEW
          ================================================== */}
      <section id="about-preview-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-white/[0.04] backdrop-blur-2xl p-8 sm:p-12 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-blue-300 text-xs font-bold backdrop-blur-md">
                <span>About the Creator</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Created by Aryaman Chhaperwal
              </h2>

              <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                These digital products are a collection of practical resources built around AI, productivity, learning, research, careers, and entrepreneurship.
              </p>

              <div className="pt-2">
                <button
                  id="about-preview-cta"
                  onClick={() => onNavigate({ type: 'about' })}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold text-sm backdrop-blur-md shadow-lg shadow-black/20 transition-all"
                >
                  <span>Learn More About Me</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center text-white text-5xl font-black shadow-2xl shadow-indigo-500/30 border border-white/20">
                AC
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          8. FINAL CTA
          ================================================== */}
      <section id="final-cta-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-950/40 via-purple-950/30 to-slate-900/60 backdrop-blur-2xl border border-white/15 text-white p-8 sm:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Find the Resource You Need
            </h2>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              Explore the collection and discover practical digital products built to save time, organize knowledge, and help you work smarter.
            </p>

            <div className="pt-4">
              <button
                id="final-cta-btn"
                onClick={() => {
                  onNavigate({ type: 'store' });
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white font-extrabold text-base border border-white/20 shadow-xl shadow-blue-500/30 transition-all duration-200"
              >
                <span>Explore Store</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
