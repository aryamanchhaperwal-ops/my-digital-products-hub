import React from 'react';
import { Product, PageView } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductCover } from '../components/ProductCover';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import {
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Sparkles,
  ChevronRight,
  Users
} from 'lucide-react';

interface ProductDetailPageProps {
  slug: string;
  onNavigate: (page: PageView) => void;
  onSelectProduct: (slug: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  slug,
  onNavigate,
  onSelectProduct
}) => {
  const { addToCart, isInCart, openCart, openCheckout } = useCart();

  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
  const alreadyInCart = isInCart(product.id);

  // Related products from same category or featured
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.featured)
  ).slice(0, 3);

  const handleBuyNow = () => {
    if (product.paymentUrl) {
      window.open(product.paymentUrl, '_blank', 'noopener,noreferrer');
    } else {
      openCheckout(product);
    }
  };

  const handleAddToCart = () => {
    if (!alreadyInCart) {
      addToCart(product);
    }
    openCart();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-16">
      
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500">
        <button
          onClick={() => onNavigate({ type: 'home' })}
          className="hover:text-blue-600 transition-colors"
        >
          Home
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
        <button
          onClick={() => onNavigate({ type: 'store' })}
          className="hover:text-blue-600 transition-colors"
        >
          Store
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
        <span className="text-slate-400 truncate">{product.category}</span>
        <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
        <span className="text-slate-900 font-bold truncate">{product.name}</span>
      </nav>

      {/* Main Two-Column Layout (Desktop) / Stacked (Mobile) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* LEFT COLUMN: Large Product Cover + Format info */}
        <div className="lg:col-span-6 space-y-5">
          <div className="p-3 sm:p-4 bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50">
            <ProductCover product={product} size="lg" />
          </div>

          {/* Quick Spec Strip */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-medium block">File Format</span>
                <span className="text-sm font-black text-slate-900">{product.format}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-medium block">Access Type</span>
                <span className="text-sm font-black text-slate-900">Direct Cloud Link</span>
              </div>
            </div>
          </div>

          {/* Stock Research Vault Educational Disclaimer Banner if applicable */}
          {product.disclaimer && (
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/90 border border-amber-200 text-amber-900 space-y-2">
              <div className="flex items-center gap-2 font-extrabold text-sm text-amber-900">
                <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Educational Research Notice</span>
              </div>
              <p className="text-xs leading-relaxed text-amber-800">
                {product.disclaimer}
              </p>
            </div>
          )}

        </div>

        {/* RIGHT COLUMN: Product Information & CTAs */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Header & Badges */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-md text-xs font-black uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                {product.category}
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                {product.format === 'PDF' ? 'PDF Guide' : 'Sheets / Excel'}
              </span>
              {product.featured && (
                <span className="px-3 py-1 rounded-md text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  Featured Product
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
              {product.name}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Price Strip */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50/60 via-indigo-50/40 to-purple-50/50 border border-blue-100 flex items-center justify-between shadow-xs">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">One-time purchase</span>
              <span className="text-3xl sm:text-4xl font-black text-slate-950">
                ₹{product.price}
              </span>
            </div>
            <div className="text-right">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
                Full Lifetime Access
              </span>
              <span className="block text-[11px] text-slate-500 mt-1">Instant digital delivery</span>
            </div>
          </div>

          {/* Action Buttons: Buy Now + Add to Cart (No public preview button) */}
          <div className="space-y-3 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Buy Now Button (Triggers checkout modal or opens paymentUrl) */}
              <button
                id="product-detail-buy-now-btn"
                onClick={handleBuyNow}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-extrabold text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 hover:-translate-y-0.5 transition-all"
              >
                <span>Buy Now (₹{product.price})</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Add to Cart Button */}
              <button
                id="product-detail-add-to-cart-btn"
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-slate-100 hover:bg-slate-200/80 border border-slate-200/80 text-slate-800 text-base font-extrabold transition-colors shadow-xs"
              >
                <ShoppingBag className="w-4 h-4 text-blue-600" />
                <span>{alreadyInCart ? 'In Your Cart • View' : 'Add to Cart'}</span>
              </button>
            </div>
          </div>

          {/* Product Highlights */}
          <div className="pt-4 space-y-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">
              Product Highlights
            </h3>
            <ul className="space-y-2.5">
              {product.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What's Included */}
          <div className="pt-2 space-y-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">
              What's Included
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.whatsIncluded.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-800 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Who is this for */}
          <div className="pt-2 space-y-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <Users className="w-4 h-4 text-slate-500" />
              Who Is This For?
            </h3>
            <ul className="space-y-2">
              {product.whoIsThisFor.map((item, idx) => (
                <li key={idx} className="text-xs text-slate-600 leading-relaxed flex items-center gap-2">
                  <span className="text-blue-600 font-bold">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>

      {/* Product Specific FAQ Section */}
      <section className="pt-12 border-t border-slate-200">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-black text-slate-950">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-500">
              Common questions about accessing and using this digital resource.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-2 shadow-xs">
              <h3 className="text-base font-bold text-slate-900">
                How do I open or use this product?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                After purchasing, you receive instant direct access to the complete digital resource in Google Drive or Google Sheets. You can make a personal copy to your own Google Drive or download it as an Excel or PDF file for offline use.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-2 shadow-xs">
              <h3 className="text-base font-bold text-slate-900">
                Are updates included?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Yes! Because these resources are centrally organized on Google Drive and Google Sheets, whenever databases or guide notes are updated, you automatically see the latest version through the same link.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-2 shadow-xs">
              <h3 className="text-base font-bold text-slate-900">
                Can I use this for personal learning and work?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Absolutely. Each digital product is structured for practical, immediate daily application in your projects, learning routines, startup ideas, and career workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="pt-8 border-t border-slate-200 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
              More from the Store
            </span>
            <h2 className="text-2xl font-black text-slate-950">
              Related Digital Resources
            </h2>
          </div>

          <button
            onClick={() => onNavigate({ type: 'store' })}
            className="text-sm font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onViewProduct={onSelectProduct}
            />
          ))}
        </div>
      </section>

    </div>
  );
};
