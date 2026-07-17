import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { products } from '@/lib/data';
import { MEDIA } from '@/lib/media';
import { ArrowRight } from 'lucide-react';
import { FlipCard } from '@/components/FlipCard';
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
          <h1 className="type-display text-farm-text">Our Products</h1>
        </div>
      </section>

      {/* Products Grid — flip cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="type-headline text-farm-text mb-4">Fresh. Reliable. Local.</h2>
            <p className="type-body text-farm-text-muted mx-auto">
              Hover any card to see details and pricing. Tap on mobile.
            </p>
          </div>

          <AnimatedGrid>
            {localProducts.map(product => (
              <FlipCard key={product.id} product={product} mode="products" />
            ))}
          </AnimatedGrid>

          <div className="mt-16 flex justify-center">
            <Link href="/shop" className="btn-primary">
              Open Shop <ArrowRight size={16} />
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
