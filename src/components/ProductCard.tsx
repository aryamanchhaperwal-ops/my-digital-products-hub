import React from 'react';
import { Product } from '../types';
import { ProductCover } from './ProductCover';
import { useCart } from '../context/CartContext';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewProduct: (slug: string) => void;
  variant?: 'standard' | 'compact' | 'featured';
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewProduct,
  variant = 'standard'
}) => {
  const { openCheckout } = useCart();

  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (product.paymentUrl) {
      window.open(product.paymentUrl, '_blank', 'noopener,noreferrer');
    } else {
      openCheckout(product);
    }
  };

  return (
    <div
      id={`product-card-${product.id}`}
      onClick={() => onViewProduct(product.slug)}
      className="group relative flex flex-col bg-white hover:bg-white rounded-3xl border border-slate-200/90 hover:border-indigo-300 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-pointer"
    >
      {/* Product Cover Container with subtle zoom on card hover */}
      <div className="relative overflow-hidden bg-slate-50/50 p-3 pb-0">
        <div className="transform group-hover:scale-[1.02] transition-transform duration-300 ease-out">
          <ProductCover product={product} size="md" showBadge={false} />
        </div>

        {/* Floating Category and Format tags */}
        <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider bg-white/95 text-slate-800 shadow-sm backdrop-blur-md border border-slate-200">
            {product.category}
          </span>
          <span className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-white/90 text-slate-700 shadow-sm backdrop-blur-md border border-slate-200">
            {product.format === 'PDF' ? 'PDF Guide' : 'Sheets / Excel'}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 bg-white">
        
        {/* Category sub-line */}
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[11px] font-bold tracking-wider text-blue-600 uppercase">
            {product.category}
          </span>
          {product.featured && (
            <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
              <Sparkles className="w-3 h-3 text-amber-500" />
              Featured
            </span>
          )}
        </div>

        {/* Product Title */}
        <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1 mb-2">
          {product.name}
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4 flex-1">
          {product.shortDescription || product.description}
        </p>

        {/* Price and Format strip */}
        <div className="flex items-baseline justify-between pt-3 border-t border-slate-100 mb-4">
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Price</span>
            <span className="text-xl font-black text-slate-950 tracking-tight">
              ₹{product.price}
            </span>
          </div>

          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            <span>Instant Access</span>
          </span>
        </div>

        {/* Action Buttons: View Product & Buy Now */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          <button
            id={`btn-view-${product.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onViewProduct(product.slug);
            }}
            className="w-full inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 hover:text-slate-950 border border-slate-200/80 transition-colors"
          >
            <span>View Product</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            id={`btn-buy-${product.id}`}
            onClick={handleBuyNow}
            className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-200"
          >
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
