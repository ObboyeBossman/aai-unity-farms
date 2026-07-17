import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { products } from '@/lib/data';
import { MEDIA } from '@/lib/media';
import { ArrowRight } from 'lucide-react';
import { AnimatedGrid } from '@/components/AnimatedGrid';

export const metadata: Metadata = {
  title: 'Our Products | AAI Unity Farms',
  description: 'Browse our full range of farm products: fresh eggs, broiler chickens, layer chickens, day-old chicks, poultry feeds, Ghanaian yams, and more.',
};

export default function ProductsPage() {
  const localProducts = products.filter(p => p.category !== 'Ghanaian Foods');

  return (
    <div className="pt-24 relative">
      {/* Hero */}
      <section className="relative h-[360px] flex items-center justify-center border-b border-farm-border">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-farm-surface/45 z-10" />
          <Image
            src={MEDIA.heroProducts}
            alt="Our Products"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-20 text-center px-6 flex flex-col items-center">
          <span className="eyebrow">Local Supply Catalogue</span>
          {/* DISPLAY — one per screen */}
          <h1 className="type-display text-farm-text">Our Products</h1>
        </div>
      </section>

      {/* Products Grid
          SIGNATURE MOVE: Cards stagger in 40ms apart (Shopify stagger rule)
          Handled by AnimatedGrid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            {/* HEADLINE — section opener, 2-5 words */}
            <h2 className="type-headline text-farm-text mb-4">Fresh. Reliable. Local.</h2>
            {/* BODY — supporting text */}
            <p className="type-body text-farm-text-muted mx-auto">
              Prices subject to change. Contact us for bulk orders.
            </p>
          </div>

          <AnimatedGrid>
            {localProducts.map(product => (
              <div key={product.id} className="golden-hour-card h-full flex flex-col group">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    referrerPolicy="no-referrer"
                  />
                  {/* LABEL on image */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="type-label text-farm-text bg-farm-surface/80 backdrop-blur-sm px-3 py-1 rounded-full border border-farm-border">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* PAIRING RULE: Title + Micro — two sizes, no middle ground */}
                <div className="p-8 flex flex-col flex-grow z-10 relative">
                  {/* TITLE */}
                  <h3 className="type-title text-farm-text mb-2">{product.name}</h3>

                  {/* DISPLAY price (big + light) + MICRO unit (small + muted) */}
                  <div className="mt-auto flex items-baseline gap-2 pt-4 border-t border-farm-border">
                    <span className="font-display text-3xl font-light text-farm-gold">
                      {product.price ? `GHS ${product.price}` : 'On Request'}
                    </span>
                    {product.unit && (
                      <span className="type-micro">/ {product.unit}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </AnimatedGrid>

          <div className="mt-16 flex justify-center">
            <Link href="/shop" className="btn-primary">
              Add to Order <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Export Teaser */}
      <section className="py-20 bg-farm-surface-card border-t border-farm-border">
        <div className="max-w-2xl mx-auto px-6 text-center flex flex-col items-center">
          <span className="eyebrow">International Buyers</span>
          <h2 className="type-headline text-farm-text mb-4">Looking for export products?</h2>
          <p className="type-body text-farm-text-muted mx-auto mb-8">
            We export premium Ghanaian Yams, Sweet Corn, and Soybeans to the UK and European Union.
          </p>
          <Link href="/export" className="btn-secondary">
            View Export Services <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
