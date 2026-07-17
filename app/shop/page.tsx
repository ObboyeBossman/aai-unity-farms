'use client';

import React, { useState } from 'react';
import { ShoppingBag, Plus, Minus } from 'lucide-react';
import { products } from '@/lib/data';
import { useCart } from '@/components/CartProvider';
import { motion, AnimatePresence } from 'motion/react';
import { FlipCard } from '@/components/FlipCard';

const shopifyEase = [0.2, 0, 0, 1] as const;

export default function ShopPage() {
  const { items, updateQuantity, clearCart, totalPrice } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Eggs', 'Poultry', 'Feeds', 'Ghanaian Foods'];

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  const handleCheckout = () => {
    let message = `Hello AAI Unity Farms! I'd like to order:\n\n`;
    items.forEach(item => {
      const priceStr = item.price ? `(GHS ${item.price * item.quantity})` : `(Price TBA)`;
      message += `- ${item.quantity}x ${item.name} ${priceStr}\n`;
    });
    message += `\nTotal: GHS ${totalPrice}\n\nPlease confirm my order.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/233542644993?text=${encoded}`, '_blank');
    clearCart();
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
            Hover any card to see details, pricing, and add to your order.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Main Shop Area */}
          <div className="flex-1">
            {/* Category Filter */}
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
                  className={`type-label px-5 py-2.5 rounded-full transition-colors active:scale-[0.97] ${
                    activeCategory === cat
                      ? 'bg-farm-gold text-farm-surface'
                      : 'bg-transparent text-farm-text-muted border border-farm-border hover:text-farm-text hover:border-farm-gold/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>

            {/* Flip Card Grid */}
            <AnimatePresence mode="popLayout">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProducts.map((product, i) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.96, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3, delay: Math.min(i, 6) * 0.04, ease: shopifyEase }}
                  >
                    <FlipCard product={product} mode="shop" />
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          </div>

          {/* Cart Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.34, delay: 0.2, ease: shopifyEase }}
            className="w-full lg:w-[400px] shrink-0 sticky top-32"
          >
            <div className="glass-panel rounded-2xl p-8 flex flex-col h-full border border-farm-border">
              <h2 className="type-title text-farm-text mb-6 flex items-center gap-3 border-b border-farm-border pb-6">
                <ShoppingBag size={24} className="text-farm-gold" />
                Your Order
              </h2>

              {items.length === 0 ? (
                <div className="text-center py-12 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-farm-surface-card border border-farm-border flex items-center justify-center mb-4">
                    <ShoppingBag size={24} className="text-farm-text-muted opacity-50" />
                  </div>
                  <p className="type-body text-farm-text-muted">Your order is empty.</p>
                  <p className="type-micro mt-2">Hover a card and tap &ldquo;Add to Order&rdquo;</p>
                </div>
              ) : (
                <>
                  <div className="space-y-6 max-h-[50vh] overflow-y-auto mb-8 pr-2">
                    <AnimatePresence>
                      {items.map(item => (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          key={item.id}
                          className="flex justify-between items-center"
                        >
                          <div className="flex-1 pr-4">
                            <p className="type-body font-medium text-farm-text leading-tight mb-1">{item.name}</p>
                            <p className="type-micro text-farm-text-muted">
                              {item.price ? `GHS ${item.price}` : 'Price TBA'}
                            </p>
                          </div>
                          <div className="flex items-center gap-3 bg-farm-surface rounded-full px-2 py-1 border border-farm-border">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 flex items-center justify-center hover:text-farm-gold transition-colors text-farm-text-muted active:scale-[0.97]"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-4 text-center type-label text-farm-text">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 flex items-center justify-center hover:text-farm-gold transition-colors text-farm-text-muted active:scale-[0.97]"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  <div className="border-t border-farm-border pt-6 mb-8 mt-auto">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="type-body text-farm-text-muted">Total</span>
                      <span className="font-display font-light text-3xl text-farm-text">
                        GHS {totalPrice}
                      </span>
                    </div>
                    <p className="type-micro text-farm-text-muted">*Excludes items without fixed pricing</p>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="btn-primary w-full"
                    style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                  >
                    Checkout via WhatsApp
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full py-4 mt-2 type-label text-farm-text-muted hover:text-farm-text transition-colors active:scale-[0.97]"
                  >
                    Clear Cart
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
