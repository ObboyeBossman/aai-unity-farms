'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';
import { CartItem } from './CartProvider';

const shopifyEase = [0.2, 0, 0, 1] as const;

// Generates a short human-readable order reference
function generateOrderRef(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let ref = 'AAI-';
  for (let i = 0; i < 6; i++) ref += chars[Math.floor(Math.random() * chars.length)];
  return ref;
}

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  totalPrice: number;
  onConfirm: (note: string, ref: string) => void;
}

export function CheckoutModal({ open, onClose, items, totalPrice, onConfirm }: CheckoutModalProps) {
  const [deliveryNote, setDeliveryNote] = useState('');
  const [step, setStep] = useState<'review' | 'sent'>('review');
  const orderRef = React.useRef(generateOrderRef());

  const hasPriceless = items.some(i => i.price === null);

  const handleSend = () => {
    setStep('sent');
    onConfirm(deliveryNote, orderRef.current);
  };

  const handleClose = () => {
    // Reset for next time
    setTimeout(() => {
      setStep('review');
      setDeliveryNote('');
      orderRef.current = generateOrderRef();
    }, 300);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
            onClick={step === 'sent' ? handleClose : onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.28, ease: shopifyEase }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-[61] max-w-lg mx-auto bg-farm-surface-card border border-farm-border rounded-2xl shadow-2xl overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {step === 'review' ? (
                <motion.div
                  key="review"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between px-6 py-5 border-b border-farm-border">
                    <div>
                      <h2 className="type-title text-farm-text" style={{ fontSize: '20px' }}>Review Your Order</h2>
                      <p className="type-micro text-farm-text-muted mt-0.5">Ref: {orderRef.current}</p>
                    </div>
                    <button
                      onClick={onClose}
                      className="p-1.5 text-farm-text-muted hover:text-farm-text transition-colors rounded-full hover:bg-farm-surface active:scale-[0.97]"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  {/* Order items */}
                  <div className="px-6 py-4 max-h-[35vh] overflow-y-auto border-b border-farm-border space-y-3">
                    {items.map(item => (
                      <div key={item.id} className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="w-7 h-7 rounded-full bg-farm-gold/10 border border-farm-gold/20 flex items-center justify-center type-label text-farm-gold text-xs shrink-0">
                            {item.quantity}
                          </span>
                          <span className="type-body text-farm-text truncate" style={{ fontSize: '14px' }}>
                            {item.name}
                          </span>
                        </div>
                        <span className="type-body text-farm-text-muted shrink-0" style={{ fontSize: '14px' }}>
                          {item.price
                            ? `GHS ${(item.price * item.quantity).toLocaleString()}`
                            : <span className="text-farm-gold text-xs">On request</span>
                          }
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Total + delivery note */}
                  <div className="px-6 py-5 space-y-5">
                    {/* Total */}
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="type-label text-farm-text-muted">Order Total</span>
                        {hasPriceless && (
                          <p className="type-micro text-farm-text-muted mt-0.5">*Excludes items priced on request</p>
                        )}
                      </div>
                      <span className="font-display font-light text-3xl text-farm-gold">
                        GHS {totalPrice.toLocaleString()}
                      </span>
                    </div>

                    {/* Delivery note */}
                    <div className="flex flex-col gap-2">
                      <label className="type-label text-farm-text-muted flex items-center gap-1.5">
                        <MapPin size={12} className="text-farm-gold" />
                        Delivery address / note (optional)
                      </label>
                      <textarea
                        value={deliveryNote}
                        onChange={e => setDeliveryNote(e.target.value)}
                        placeholder="e.g. Deliver to Accra — call before arrival"
                        rows={2}
                        className="farm-input resize-none text-sm"
                      />
                    </div>

                    {/* CTA */}
                    <button
                      onClick={handleSend}
                      className="w-full btn-primary justify-center gap-2 py-4"
                      style={{ backgroundColor: '#25D366', color: '#fff' }}
                    >
                      <MessageCircle size={18} />
                      Send Order via WhatsApp
                      <ChevronRight size={16} className="opacity-70" />
                    </button>
                    <p className="type-micro text-center text-farm-text-muted">
                      You&apos;ll be taken to WhatsApp to send this order directly to our team.
                    </p>
                  </div>
                </motion.div>
              ) : (
                /* Sent confirmation */
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: shopifyEase }}
                  className="px-6 py-12 flex flex-col items-center text-center gap-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1], delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center mb-2"
                  >
                    <CheckCircle2 size={30} className="text-[#25D366]" />
                  </motion.div>
                  <h3 className="type-title text-farm-text">Order sent!</h3>
                  <p className="type-body text-farm-text-muted" style={{ fontSize: '14px' }}>
                    Your order <span className="text-farm-gold font-medium">{orderRef.current}</span> has been
                    sent to WhatsApp. Our team will confirm within one business day.
                  </p>
                  <button
                    onClick={handleClose}
                    className="btn-secondary mt-4 px-8"
                  >
                    Done
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
