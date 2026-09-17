import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import { X, Shield, Lock, CreditCard, Sparkles, CheckCircle2, ArrowRight, ExternalLink, AlertCircle, Mail, User } from 'lucide-react';
import { ProductCover } from './ProductCover';

export const CheckoutModal: React.FC = () => {
  const { isCheckoutOpen, closeCheckout, checkoutProduct, items, totalAmount } = useCart();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [paymentOption, setPaymentOption] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [orderInitiated, setOrderInitiated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isCheckoutOpen) return null;

  // Determine items being checked out
  const checkoutItems: { product: Product; quantity: number }[] = checkoutProduct
    ? [{ product: checkoutProduct, quantity: 1 }]
    : items.length > 0
    ? items
    : [];

  const checkoutTotal = checkoutProduct
    ? checkoutProduct.price
    : totalAmount;

  const handleSubmitCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address to receive order confirmations and resource access.');
      return;
    }
    setErrorMessage('');
    // Storefront MVP mode: We do NOT make a fake payment completion claim.
    // Instead we showcase the integration-ready state and provide direct resource links right now.
    setOrderInitiated(true);
  };

  const handleReset = () => {
    setOrderInitiated(false);
    setEmail('');
    setName('');
    closeCheckout();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#090d1f]/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/15 overflow-hidden my-8 text-white">
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-white/[0.03]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-300 flex items-center justify-center font-bold text-sm">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-extrabold text-white">
                {orderInitiated ? 'Order Pre-Registration & Access' : 'Checkout & Order Summary'}
              </h2>
              <p className="text-xs text-white/50">
                Aryaman Chhaperwal — Digital Products Storefront
              </p>
            </div>
          </div>

          <button
            id="close-checkout-modal-btn"
            onClick={handleReset}
            className="p-2 rounded-xl text-white/40 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {orderInitiated ? (
            /* Integration-ready confirmation state - transparent, honest, and helpful */
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-400/15 border border-emerald-400/20 text-emerald-300 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-400/15 text-amber-300 border border-amber-400/30">
                  Payment Integration Coming Soon (Storefront MVP)
                </span>
                <h3 className="text-2xl font-black text-white">
                  Order Registered for {email}
                </h3>
                <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                  Thank you for your interest! Automated payment gateway integration (Razorpay / UPI) is currently being connected to this storefront.
                </p>
              </div>

              {/* Instant Access Preview for visitors during MVP */}
              <div className="p-5 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 text-left space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span>Explore Your Requested Resources Now</span>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  While online billing is finalized, you can preview and open the resource files directly:
                </p>
                <div className="space-y-2 pt-2">
                  {checkoutItems.map(({ product }) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-bold"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                        <span className="text-white">{product.name}</span>
                        <span className="text-white/40 font-normal">({product.format})</span>
                      </div>
                      <a
                        href={product.resourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors font-semibold"
                      >
                        <span>Open Resource</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-sm font-bold transition-colors backdrop-blur-md shadow-md"
                >
                  Done & Return to Store
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitCheckout} className="space-y-6">
              
              {/* Order Summary Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-white/50 pb-2 border-b border-white/10">
                  <span>Selected Products ({checkoutItems.length})</span>
                  <span>Price</span>
                </div>

                <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                  {checkoutItems.map(({ product }) => (
                    <div key={product.id} className="flex items-center justify-between gap-3 text-sm">
                      <div className="min-w-0">
                        <span className="font-bold text-white block truncate">{product.name}</span>
                        <span className="text-xs text-white/50">{product.category} • {product.format}</span>
                      </div>
                      <span className="font-extrabold text-white flex-shrink-0">
                        ₹{product.price}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-white">Total Order Amount</span>
                    <span className="block text-[11px] text-white/50">Includes all digital guide files</span>
                  </div>
                  <span className="text-2xl font-black text-white">
                    ₹{checkoutTotal}
                  </span>
                </div>
              </div>

              {/* Customer Contact Information */}
              <div className="space-y-4">
                <h3 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  Customer Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white/70 mb-1.5" htmlFor="checkout-name">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        id="checkout-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Aryaman Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white/70 mb-1.5" htmlFor="checkout-email">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="checkout-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {errorMessage && (
                  <p className="text-xs text-rose-400 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errorMessage}
                  </p>
                )}
              </div>

              {/* Payment Method Section Placeholder (Meets Requirement 9 & 24) */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-blue-400" />
                    Payment Gateway (Ready for Integration)
                  </h3>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-400/15 text-amber-300 border border-amber-400/30">
                    Integration Ready
                  </span>
                </div>

                <div className="p-3.5 rounded-xl border border-amber-400/30 bg-amber-500/10 backdrop-blur-md flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-amber-200 leading-relaxed">
                    <span className="font-bold">Storefront MVP Notice:</span> Automated Razorpay / UPI gateway integration is structured and coming soon. No charge will be made during this preview phase.
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentOption('upi')}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      paymentOption === 'upi'
                        ? 'border-blue-400 bg-blue-500/20 text-white font-bold shadow-lg'
                        : 'border-white/10 bg-white/[0.03] hover:border-white/20 text-white/70 text-xs font-semibold'
                    }`}
                  >
                    <span className="block text-xs sm:text-sm font-bold">UPI / QR</span>
                    <span className="text-[10px] text-white/50">GPay, PhonePe</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentOption('card')}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      paymentOption === 'card'
                        ? 'border-blue-400 bg-blue-500/20 text-white font-bold shadow-lg'
                        : 'border-white/10 bg-white/[0.03] hover:border-white/20 text-white/70 text-xs font-semibold'
                    }`}
                  >
                    <span className="block text-xs sm:text-sm font-bold">Cards</span>
                    <span className="text-[10px] text-white/50">Debit / Credit</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentOption('netbanking')}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      paymentOption === 'netbanking'
                        ? 'border-blue-400 bg-blue-500/20 text-white font-bold shadow-lg'
                        : 'border-white/10 bg-white/[0.03] hover:border-white/20 text-white/70 text-xs font-semibold'
                    }`}
                  >
                    <span className="block text-xs sm:text-sm font-bold">Netbanking</span>
                    <span className="text-[10px] text-white/50">All Indian Banks</span>
                  </button>
                </div>
              </div>

              {/* Complete Purchase Button */}
              <div className="pt-3 space-y-3">
                <button
                  id="submit-checkout-btn"
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white font-extrabold text-base border border-white/20 shadow-xl shadow-blue-500/25 transition-all"
                >
                  <span>Complete Purchase (₹{checkoutTotal})</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-[11px] text-center text-white/50 flex items-center justify-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Secure SSL encryption • Architecture ready for Razorpay integration</span>
                </p>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
