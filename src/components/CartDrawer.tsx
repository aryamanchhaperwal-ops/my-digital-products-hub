import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { ProductCover } from './ProductCover';

interface CartDrawerProps {
  onNavigateToProduct: (slug: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onNavigateToProduct }) => {
  const { items, removeFromCart, clearCart, totalAmount, isCartOpen, closeCart, openCheckout } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#090d1f]/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl flex flex-col text-white">
          
          {/* Drawer Header */}
          <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.03]">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-500/30">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-white">Your Cart</h2>
                <p className="text-xs text-white/50">
                  {items.length} {items.length === 1 ? 'digital resource' : 'digital resources'}
                </p>
              </div>
            </div>

            <button
              id="close-cart-btn"
              onClick={closeCart}
              className="p-2 rounded-xl text-white/40 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close Cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 text-blue-400 flex items-center justify-center mb-4 backdrop-blur-md">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">Your cart is empty</h3>
                <p className="text-sm text-white/60 max-w-xs mb-6">
                  Explore practical AI, productivity, career, and research resources for your workflows.
                </p>
                <button
                  onClick={closeCart}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-sm backdrop-blur-md transition-all"
                >
                  Browse Store
                </button>
              </div>
            ) : (
              items.map(({ product }) => (
                <div
                  key={product.id}
                  className="flex gap-3.5 p-3.5 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] hover:border-white/20 backdrop-blur-md transition-all"
                >
                  {/* Mini Cover */}
                  <div
                    className="w-20 h-16 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer"
                    onClick={() => {
                      closeCart();
                      onNavigateToProduct(product.slug);
                    }}
                  >
                    <ProductCover product={product} size="sm" showBadge={false} />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <h4
                        className="text-sm font-bold text-white hover:text-blue-300 transition-colors truncate cursor-pointer"
                        onClick={() => {
                          closeCart();
                          onNavigateToProduct(product.slug);
                        }}
                      >
                        {product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="text-white/40 hover:text-rose-400 p-1 transition-colors"
                        title="Remove item"
                        aria-label={`Remove ${product.name}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[11px] font-semibold text-white/50">
                        {product.format}
                      </span>
                      <span className="text-white/20">•</span>
                      <a
                        href={product.resourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-400 hover:text-blue-300 hover:underline"
                        title="Open Resource in new tab"
                      >
                        Preview link <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs font-medium text-white/50">Qty: 1</span>
                      <span className="text-sm font-black text-white">₹{product.price}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer */}
          {items.length > 0 && (
            <div className="p-5 sm:p-6 border-t border-white/10 bg-white/[0.02] backdrop-blur-xl space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm text-white/60">
                  <span>Subtotal</span>
                  <span className="font-semibold text-white">₹{totalAmount}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-white/60">
                  <span>Delivery</span>
                  <span className="font-semibold text-emerald-400">Instant Digital Access</span>
                </div>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <span className="text-base font-extrabold text-white">Total</span>
                  <span className="text-2xl font-black text-white">₹{totalAmount}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-white/60 bg-white/[0.04] p-3 rounded-xl border border-white/10">
                <ShieldCheck className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Ready-to-use Google Drive & Sheets digital access</span>
              </div>

              <div className="space-y-2">
                <button
                  id="cart-checkout-btn"
                  onClick={() => openCheckout()}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white font-extrabold text-sm border border-white/20 shadow-xl shadow-blue-500/25 transition-all"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={clearCart}
                  className="w-full text-center py-2 text-xs font-semibold text-white/40 hover:text-white/70 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
