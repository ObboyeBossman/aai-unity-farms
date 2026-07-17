'use client';

import React, { useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, MessageCircle, Info } from 'lucide-react';
import { Product } from '@/lib/data';
import { useCart } from '@/components/CartProvider';

/* ─── Feature text: static or scrolling marquee ─────────────── */
function FeatureText({ text }: { text: string }) {
  const [needs, setNeeds] = useState(false);
  const measured = useRef(false);

  const textRef = useCallback((el: HTMLSpanElement | null) => {
    if (!el || measured.current) return;
    measured.current = true;
    requestAnimationFrame(() => {
      if (el.scrollWidth > el.parentElement!.clientWidth + 2) {
        setNeeds(true);
      }
    });
  }, []);

  return (
    <div className="relative overflow-hidden w-full">
      {needs ? (
        <div className="flip-marquee-wrap">
          <span className="flip-marquee-inner">
            {text}&ensp;·&ensp;{text}&ensp;·&ensp;
          </span>
        </div>
      ) : (
        <span ref={textRef} className="flip-feature-static">
          {text}
        </span>
      )}
    </div>
  );
}

/* ─── Main FlipCard ──────────────────────────────────────────── */
interface FlipCardProps {
  product: Product;
  /** 'shop' shows Add to Cart; 'products' shows Order Now */
  mode?: 'shop' | 'products';
}

export function FlipCard({ product, mode = 'shop' }: FlipCardProps) {
  const { addItem, items } = useCart();
  const [flipped, setFlipped] = useState(false);
  const [added, setAdded] = useState(false);

  // How many of this product are already in the cart
  const cartQty = items.find(i => i.id === product.id)?.quantity ?? 0;

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
    // Brief pulse feedback
    setAdded(true);
    setTimeout(() => setAdded(false), 900);
  };

  // Touch: tap to flip, second tap on CTA acts normally
  const handleClick = () => {
    if (!flipped) {
      setFlipped(true);
    }
  };

  return (
    <div
      className="flip-card-scene"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={handleClick}
    >
      <div className={`flip-card-inner${flipped ? ' is-flipped' : ''}`}>

        {/* ── FRONT: image ──────────────────────────────── */}
        <div className="flip-card-face flip-card-front">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />

          {/* Category pill */}
          <div className="flip-front-pill">
            <span className="type-label text-farm-gold">{product.category}</span>
          </div>

          {/* Cart badge — shows if item already in cart */}
          {cartQty > 0 && (
            <div className="absolute top-4 right-4 z-10 bg-farm-gold text-farm-surface type-label text-xs w-7 h-7 rounded-full flex items-center justify-center font-bold shadow-md">
              {cartQty}
            </div>
          )}

          {/* Tap/hover hint */}
          <div className="flip-front-hint flex items-center gap-1.5">
            <Info size={12} className="text-white/60" />
            <span className="type-micro text-white/70">Tap for details</span>
          </div>

          {/* Product name overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 pointer-events-none">
            <h3 className="type-body font-medium text-white leading-tight">{product.name}</h3>
            {product.price ? (
              <p className="type-micro text-white/70 mt-1">GHS {product.price} / {product.unit}</p>
            ) : (
              <p className="type-micro text-farm-gold mt-1">Price on request</p>
            )}
          </div>
        </div>

        {/* ── BACK: details ─────────────────────────────── */}
        <div className="flip-card-face flip-card-back">
          <div className="flip-back-inner">

            {/* Header */}
            <div className="flip-back-header">
              <div>
                <p className="eyebrow !mb-1">{product.category}</p>
                <h3 className="flip-back-title">{product.name}</h3>
              </div>
              {product.price ? (
                <div className="flip-price-block">
                  <span className="flip-price-num">GHS {product.price}</span>
                  <span className="type-micro text-farm-text-muted">/{product.unit}</span>
                </div>
              ) : (
                <div className="flip-price-block">
                  <span className="flip-price-contact">On Request</span>
                </div>
              )}
            </div>

            {/* Tagline */}
            <p className="flip-tagline">{product.tagline}</p>

            {/* Features */}
            <ul className="flip-features">
              {product.features.map((feat, i) => (
                <li key={i} className="flip-feature-row">
                  <span className="flip-feature-dot" />
                  <FeatureText text={feat} />
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flip-ctas">
              {mode === 'shop' ? (
                <>
                  <button
                    onClick={handleAdd}
                    className="btn-primary flex-1 py-3 text-sm relative overflow-hidden"
                    aria-label={`Add ${product.name} to order`}
                    style={added ? { backgroundColor: '#22c55e' } : undefined}
                  >
                    {added ? (
                      <span className="flex items-center gap-1.5">✓ Added</span>
                    ) : (
                      <>
                        <ShoppingBag size={15} />
                        {cartQty > 0 ? `Add Again (${cartQty})` : 'Add to Order'}
                      </>
                    )}
                  </button>
                  {product.price === null && (
                    <a
                      href={`https://wa.me/233542644993?text=${encodeURIComponent(`Hi, I'd like a quote for ${product.name}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex-1 py-3 text-sm"
                      onClick={e => e.stopPropagation()}
                    >
                      <MessageCircle size={15} /> Get Quote
                    </a>
                  )}
                </>
              ) : (
                <>
                  <Link
                    href="/shop"
                    className="btn-primary flex-1 py-3 text-sm justify-center"
                    onClick={e => e.stopPropagation()}
                  >
                    <ShoppingBag size={15} /> Order Now
                  </Link>
                  {product.price === null && (
                    <a
                      href={`https://wa.me/233542644993?text=${encodeURIComponent(`Hi, I'd like a quote for ${product.name}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex-1 py-3 text-sm"
                      onClick={e => e.stopPropagation()}
                    >
                      <MessageCircle size={15} /> Get Quote
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
