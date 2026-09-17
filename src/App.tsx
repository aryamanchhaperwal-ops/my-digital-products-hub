import React, { useState, useEffect } from 'react';
import { PageView } from './types';
import { PRODUCTS } from './data/products';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { HomePage } from './pages/HomePage';
import { StorePage } from './pages/StorePage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';

export function AppContent() {
  const [currentPage, setCurrentPage] = useState<PageView>(() => {
    // Parse initial URL path
    const path = window.location.pathname;
    if (path.startsWith('/product/')) {
      const slug = path.replace('/product/', '').replace(/\/$/, '');
      const productExists = PRODUCTS.some((p) => p.slug === slug);
      if (productExists) {
        return { type: 'product', slug };
      }
    } else if (path === '/store') {
      return { type: 'store' };
    } else if (path === '/about') {
      return { type: 'about' };
    } else if (path === '/faq') {
      return { type: 'faq' };
    } else if (path === '/contact') {
      return { type: 'contact' };
    }
    return { type: 'home' };
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sync URL with browser history
  const navigate = (newPage: PageView) => {
    setCurrentPage(newPage);
    let targetPath = '/';
    if (newPage.type === 'store') {
      targetPath = '/store';
    } else if (newPage.type === 'product') {
      targetPath = `/product/${newPage.slug}`;
    } else if (newPage.type === 'about') {
      targetPath = '/about';
    } else if (newPage.type === 'faq') {
      targetPath = '/faq';
    } else if (newPage.type === 'contact') {
      targetPath = '/contact';
    }

    try {
      if (window.location.pathname !== targetPath) {
        window.history.pushState(newPage, '', targetPath);
      }
    } catch {
      // ignore history errors in sandboxed iframes
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.startsWith('/product/')) {
        const slug = path.replace('/product/', '').replace(/\/$/, '');
        const exists = PRODUCTS.some((p) => p.slug === slug);
        if (exists) {
          setCurrentPage({ type: 'product', slug });
          return;
        }
      } else if (path === '/store') {
        setCurrentPage({ type: 'store' });
        return;
      } else if (path === '/about') {
        setCurrentPage({ type: 'about' });
        return;
      } else if (path === '/faq') {
        setCurrentPage({ type: 'faq' });
        return;
      } else if (path === '/contact') {
        setCurrentPage({ type: 'contact' });
        return;
      }
      setCurrentPage({ type: 'home' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Keyboard shortcut ⌘K or Ctrl+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectProduct = (slug: string) => {
    navigate({ type: 'product', slug });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#020617] text-white font-sans antialiased relative selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      {/* Frosted Glass Ambient Lighting Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-8%] left-[-10%] w-[55%] h-[55%] bg-blue-600/25 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[150px]" />
        <div className="absolute top-[35%] right-[5%] w-[35%] h-[35%] bg-emerald-500/10 rounded-full blur-[110px]" />
        <div className="absolute top-[60%] left-[-5%] w-[30%] h-[30%] bg-indigo-600/15 rounded-full blur-[120px]" />
      </div>

      {/* Top Banner Notice - Frosted Translucent Pill Strip */}
      <div className="bg-white/[0.04] backdrop-blur-md border-b border-white/10 text-white/90 text-[11px] sm:text-xs font-semibold py-2 px-4 text-center tracking-wide flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="opacity-90">11 Practical Digital Resources for the AI Era • Instant Google Drive & Google Sheets Access</span>
      </div>

      {/* Main Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content View */}
      <main className="flex-1">
        {currentPage.type === 'home' && (
          <HomePage
            onNavigate={navigate}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentPage.type === 'store' && (
          <StorePage
            initialCategory={currentPage.initialCategory}
            initialSearch={currentPage.initialSearch}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentPage.type === 'product' && (
          <ProductDetailPage
            slug={currentPage.slug}
            onNavigate={navigate}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentPage.type === 'about' && (
          <AboutPage onNavigate={navigate} />
        )}

        {currentPage.type === 'faq' && (
          <FAQPage onNavigate={navigate} />
        )}

        {currentPage.type === 'contact' && (
          <ContactPage onNavigate={navigate} />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigate} />

      {/* Cart Slide-Over Drawer */}
      <CartDrawer onNavigateToProduct={handleSelectProduct} />

      {/* Checkout Modal */}
      <CheckoutModal />

      {/* Global Search Dialog Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={handleSelectProduct}
      />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
