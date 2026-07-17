'use client';

import React, { useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, MessageCircle } from 'lucide-react';
import { Product } from '@/lib/data';
import { useCart } from '@/components/CartProvider';

/* ─── Feature text: static or scrolling marquee ─────────────── */
function FeatureText({ text }: { text: string }) {
  const [needs, setNeeds] = useState(false);
  const measured = useRef(false);

  // Callback ref — fires once when element mounts
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
  const { addItem } = useCart();
  const [flipped, setFlipped] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  };

  return (
    <div
      className="flip-card-scene"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(f => !f)}
    >
      <div className={`flip-card-inner${flipped ? ' is-flipped' : ''}`}>

        {/* ── FRONT: image only ─────────────────────────── */}
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
          {/* Hover hint */}
          <div className="flip-front-hint">
            <span className="type-micro text-white/70">Hover for details</span>
          </div>
        </div>

        {/* ── BACK: Shopify-dark details card ───────────── */}
        <div className="flip-card-face flip-card-back">
          <div className="flip-back-inner">

            {/* Header row */}
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

            {/* Feature list — Shopify-style dividers */}
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
                    className="btn-primary flex-1 py-3 text-sm"
                    aria-label={`Add ${product.name} to order`}
                  >
                    <ShoppingBag size={15} /> Add to Order
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
