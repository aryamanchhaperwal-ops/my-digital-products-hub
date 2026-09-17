import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, ArrowRight, Sparkles, Layers } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PageView } from '../types';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch
}) => {
  const { cartCount, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', page: { type: 'home' } as PageView },
    { label: 'Store', page: { type: 'store' } as PageView },
    { label: 'About', page: { type: 'about' } as PageView },
    { label: 'FAQ', page: { type: 'faq' } as PageView },
    { label: 'Contact', page: { type: 'contact' } as PageView },
  ];

  const isCurrent = (itemPage: PageView) => {
    if (currentPage.type === itemPage.type) return true;
    return false;
  };

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#020617]/90 backdrop-blur-2xl shadow-2xl shadow-black/40 border-b border-white/15 py-3'
          : 'bg-[#020617]/70 backdrop-blur-xl border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick({ type: 'home' })}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-blue-500/25 border border-white/20 group-hover:scale-105 transition-transform duration-200">
              AC
            </div>
            <div>
              <span className="block font-extrabold text-white tracking-tight text-base sm:text-lg leading-tight group-hover:text-blue-300 transition-colors">
                Aryaman Chhaperwal
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-semibold text-white/50 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Digital Products
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navItems.map((item) => {
              const active = isCurrent(item.page);
              return (
                <button
                  key={item.label}
                  id={`nav-link-${item.label.toLowerCase()}`}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                    active
                      ? 'text-white bg-white/15 border border-white/20 backdrop-blur-md shadow-inner font-bold'
                      : 'text-white/70 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons: Search & Cart */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              id="search-trigger-btn"
              onClick={onOpenSearch}
              className="p-2.5 rounded-xl text-white/70 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label="Search products"
              title="Search products"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Button */}
            <button
              id="cart-trigger-btn"
              onClick={openCart}
              className="relative flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-200 shadow-lg shadow-black/20 backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-4 h-4 text-blue-300" />
              <span className="text-xs font-bold tracking-wide">Cart</span>
              {cartCount > 0 && (
                <span
                  id="nav-cart-badge"
                  className="ml-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 text-white text-[11px] font-black shadow-md shadow-blue-500/40"
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div id="mobile-menu-dropdown" className="md:hidden border-t border-white/10 bg-[#020617]/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200 shadow-2xl">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = isCurrent(item.page);
              return (
                <button
                  key={item.label}
                  id={`mobile-nav-${item.label.toLowerCase()}`}
                  onClick={() => handleNavClick(item.page)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                    active
                      ? 'bg-white/15 text-white font-bold border border-white/20'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-blue-400 shadow-sm shadow-blue-400"></span>}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              id="mobile-nav-search-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 font-semibold text-sm hover:bg-white/10"
            >
              <span className="flex items-center gap-2">
                <Search className="w-4 h-4 text-white/50" />
                Search all 11 products...
              </span>
              <kbd className="px-2 py-0.5 text-[10px] font-mono bg-white/10 rounded border border-white/20 text-white/70">⌘K</kbd>
            </button>

            <button
              id="mobile-nav-explore-store"
              onClick={() => handleNavClick({ type: 'store' })}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white font-bold text-sm shadow-lg shadow-blue-500/25 border border-white/20"
            >
              <span>Explore Store</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
