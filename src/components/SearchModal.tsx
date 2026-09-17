import React, { useState, useEffect, useRef } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { Search, X, ArrowRight, ExternalLink } from 'lucide-react';
import { ProductCover } from './ProductCover';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (slug: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = PRODUCTS.filter((p) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 p-4 animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-[#090d1f]/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/15 overflow-hidden text-white">
        
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-white/10 bg-white/[0.03]">
          <Search className="w-5 h-5 text-white/40 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products by name, category, or keyword..."
            className="w-full text-white placeholder:text-white/40 text-sm sm:text-base font-medium focus:outline-none bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-lg text-white/40 hover:text-white mr-2 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-xs font-mono bg-white/10 text-white/60 rounded border border-white/15">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-3 divide-y divide-white/10">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-white/60">
              <p className="text-sm font-semibold text-white/80">No digital products found matching "{query}"</p>
              <p className="text-xs text-white/40 mt-1">Try searching for AI, career, workflows, founders, or productivity.</p>
            </div>
          ) : (
            filtered.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product.slug);
                  onClose();
                }}
                className="group flex items-center justify-between p-3 rounded-2xl hover:bg-white/[0.06] cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-14 h-11 rounded-lg overflow-hidden flex-shrink-0">
                    <ProductCover product={product} size="sm" showBadge={false} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                        {product.category}
                      </span>
                      <span className="text-white/20 text-xs">•</span>
                      <span className="text-[10px] text-white/50 font-semibold">{product.format}</span>
                    </div>
                    <h4 className="text-sm font-extrabold text-white group-hover:text-blue-300 transition-colors truncate">
                      {product.name}
                    </h4>
                    <p className="text-xs text-white/60 line-clamp-1">
                      {product.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 ml-3 flex-shrink-0">
                  <span className="text-sm font-black text-white">₹{product.price}</span>
                  <div className="w-7 h-7 rounded-lg bg-white/10 group-hover:bg-blue-500 group-hover:text-white flex items-center justify-center transition-colors text-white/60">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info strip */}
        <div className="px-4 py-2.5 bg-white/[0.02] border-t border-white/10 flex items-center justify-between text-xs text-white/50">
          <span>Showing {filtered.length} of {PRODUCTS.length} digital resources</span>
          <span className="hidden sm:inline">Use ↑↓ keys to navigate</span>
        </div>
      </div>
    </div>
  );
};
