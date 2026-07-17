'use client';

import React, { useState } from 'react';
import { ShoppingBag, Plus, Minus, X, ArrowRight, MessageCircle } from 'lucide-react';
import { products } from '@/lib/data';
import { useCart } from '@/components/CartProvider';
import { motion, AnimatePresence } from 'motion/react';
import { FlipCard } from '@/components/FlipCard';
import { CheckoutModal } from '@/components/CheckoutModal';

const shopifyEase = [0.2, 0, 0, 1] as const;

const categories = ['All', 'Eggs', 'Poultry', 'Feeds', 'Ghanaian Foods'] as const;

/* ─── Shared Cart Body ───────────────────────────────────────── */
function CartBody({
  items,
  updateQuantity,
  clearCart,
  totalPrice,
  onCheckout,
}: {
  items: ReturnType<typeof useCart>['items'];
  updateQuantity: (id: string, q: number) => void;
  clearCart: () => void;
  totalPrice: number;
  onCheckout: () => void;
}) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-6 flex-1">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, ease: shopifyEase }}
          className="w-20 h-20 rounded-full bg-farm-surface border border-farm-border flex items-center justify-center mb-6"
        >
          <ShoppingBag size={28} className="text-farm-text-muted opacity-40" />
        </motion.div>
        <p className="type-title text-farm-text mb-2 text-center">Your order is empty</p>
        <p className="type-micro text-center text-farm-text-muted max-w-[20ch]">
          Hover a product card and tap &ldquo;Add to Order&rdquo; to get started
        </p>
      </div>
    );
  }

  const hasPriceless = items.some(i => i.price === null);

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      {/* Items */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        <AnimatePresence initial={false}>
          {items.map(item => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: shopifyEase }}
              className="flex items-center gap-4"
            >
              <div className="flex-1 min-w-0">
                <p className="type-body font-medium text-farm-text leading-tight truncate">
                  {item.name}
                </p>
                <p className="type-micro text-farm-text-muted mt-0.5">
                  {item.price
                    ? `GHS ${item.price} ea · GHS ${(item.price * item.quantity).toLocaleString()} total`
                    : 'Price on request'}
                </p>
              </div>
              <div className="flex items-center gap-2 bg-farm-surface rounded-full px-2 py-1.5 border border-farm-border shrink-0">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-6 h-6 flex items-center justify-center text-farm-text-muted hover:text-farm-gold transition-colors active:scale-[0.97]"
                >
                  <Minus size={13} />
                </button>
                <span className="w-5 text-center type-label text-farm-text tabular-nums">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-6 h-6 flex items-center justify-center text-farm-text-muted hover:text-farm-gold transition-colors active:scale-[0.97]"
                >
                  <Plus size={13} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="border-t border-farm-border px-6 pt-5 pb-6 space-y-4 shrink-0">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="type-label text-farm-text-muted">Order Total</span>
            {hasPriceless && (
              <p className="type-micro text-farm-text-muted mt-0.5">*Some items priced on request</p>
            )}
          </div>
          <span className="font-display font-light text-3xl text-farm-text">
            GHS {totalPrice.toLocaleString()}
          </span>
        </div>

        <button
          onClick={onCheckout}
          className="w-full btn-primary justify-center gap-2"
          style={{ backgroundColor: '#25D366', color: '#fff' }}
        >
          <MessageCircle size={16} />
          Review & Checkout
        </button>

        <button
          onClick={clearCart}
          className="w-full py-2 type-label text-farm-text-muted hover:text-farm-text transition-colors active:scale-[0.97] text-center"
        >
          Clear Order
        </button>
      </div>
    </div>
  );
}

/* ─── Mobile Cart Drawer ─────────────────────────────────────── */
function MobileCartDrawer({
  open,
  onClose,
  onCheckout,
}: {
  open: boolean;
  onClose: () => void;
  onCheckout: () => void;
}) {
  const { items, updateQuantity, clearCart, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 z-50 lg:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.34, ease: shopifyEase }}
            className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-farm-surface-card border-t border-farm-border rounded-t-2xl max-h-[82vh] flex flex-col"
          >
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 rounded-full bg-farm-border" />
            </div>
            <div className="flex items-center justify-between px-6 py-4 border-b border-farm-border">
              <h2 className="type-title text-farm-text flex items-center gap-2">
                <ShoppingBag size={20} className="text-farm-gold" /> Your Order
              </h2>
              <button onClick={onClose} className="p-1 text-farm-text-muted hover:text-farm-text transition-colors">
                <X size={20} />
              </button>
            </div>
            <CartBody
              items={items}
              updateQuantity={updateQuantity}
              clearCart={clearCart}
              totalPrice={totalPrice}
              onCheckout={() => { onClose(); setTimeout(onCheckout, 200); }}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function ShopPage() {
  const { items, updateQuantity, clearCart, totalPrice, totalItems } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter(p => p.category === activeCategory);

  // Structured WhatsApp message with order ref
  const handleConfirmCheckout = (note: string, ref: string) => {
    const lines: string[] = [];
    lines.push(`*AAI Unity Farms — Order ${ref}*`);
    lines.push('');
    lines.push('*Items:*');
    items.forEach(item => {
      const price = item.price
        ? `GHS ${(item.price * item.quantity).toLocaleString()} (${item.quantity} × GHS ${item.price})`
        : 'Price on request';
      lines.push(`  • ${item.name} — ${price}`);
    });
    lines.push('');
    if (totalPrice > 0) {
      lines.push(`*Subtotal:* GHS ${totalPrice.toLocaleString()}`);
    }
    if (note.trim()) {
      lines.push('');
      lines.push(`*Delivery note:* ${note.trim()}`);
    }
    lines.push('');
    lines.push('Please confirm availability and delivery details. Thank you!');

    window.open(
      `https://wa.me/233542644993?text=${encodeURIComponent(lines.join('\n'))}`,
      '_blank'
    );

    // Clear cart after short delay so confirmation screen shows first
    setTimeout(() => clearCart(), 800);
  };

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.34, ease: shopifyEase }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <span className="eyebrow">Direct from Farm</span>
          <h1 className="type-display text-farm-text mb-4">Farm Shop</h1>
          <p className="type-body text-farm-text-muted mx-auto">
            Hover any card to see details and pricing, then add to your order.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Products column */}
          <div className="flex-1 min-w-0">
            {/* Category filter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1, ease: shopifyEase }}
              className="flex flex-wrap gap-3 mb-12"
            >
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`type-label px-5 py-2.5 rounded-full transition-all duration-200 active:scale-[0.97] ${
                    activeCategory === cat
                      ? 'bg-farm-gold text-farm-surface shadow-sm'
                      : 'bg-transparent text-farm-text-muted border border-farm-border hover:text-farm-text hover:border-farm-gold/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>

            {/* Product grid */}
            <AnimatePresence mode="popLayout">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProducts.map((product, i) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.96, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3, delay: Math.min(i, 5) * 0.04, ease: shopifyEase }}
                  >
                    <FlipCard product={product} mode="shop" />
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          </div>

          {/* Desktop Cart Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.34, delay: 0.2, ease: shopifyEase }}
            className="hidden lg:flex w-[380px] shrink-0 sticky top-32 flex-col"
          >
            <div className="glass-panel rounded-2xl border border-farm-border overflow-hidden flex flex-col">
              <h2 className="type-title text-farm-text flex items-center gap-3 px-8 py-6 border-b border-farm-border">
                <ShoppingBag size={22} className="text-farm-gold" />
                Your Order
                {totalItems > 0 && (
                  <span className="ml-auto bg-farm-gold text-farm-surface type-label px-2.5 py-0.5 rounded-full text-xs">
                    {totalItems}
                  </span>
                )}
              </h2>
              <CartBody
                items={items}
                updateQuantity={updateQuantity}
                clearCart={clearCart}
                totalPrice={totalPrice}
                onCheckout={() => setCheckoutOpen(true)}
              />
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Mobile sticky bar */}
      <AnimatePresence>
        {totalItems > 0 && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3, ease: shopifyEase }}
            className="fixed bottom-6 left-4 right-4 z-40 lg:hidden"
          >
            <button
              onClick={() => setDrawerOpen(true)}
              className="w-full btn-primary rounded-2xl py-4 justify-between shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <span className="bg-white/20 rounded-full w-7 h-7 flex items-center justify-center type-label text-sm">
                  {totalItems}
                </span>
                <span>View Order</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-display font-light text-xl">GHS {totalPrice.toLocaleString()}</span>
                <ArrowRight size={16} />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <MobileCartDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onCheckout={() => setCheckoutOpen(true)}
      />

      {/* Checkout review modal */}
      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        items={items}
        totalPrice={totalPrice}
        onConfirm={handleConfirmCheckout}
      />
    </div>
  );
}
