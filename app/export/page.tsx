import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { MEDIA } from '@/lib/media';
import { AnimatedGrid } from '@/components/AnimatedGrid';
import { ExportWhyUs } from '@/components/ExportWhyUs';

export const metadata: Metadata = {
  title: 'Agricultural Export Services | AAI Unity Farms',
  description: 'Exporting premium Ghanaian yams and agricultural commodities to the UK and EU. Quality certified, reliable supply, export-ready packaging.',
};

const exportProducts = [
  {
    image: MEDIA.ghanaianYam,
    name: 'Premium Ghanaian Yams',
    description: 'Carefully selected, cleaned, and packed to meet strict EU/UK import standards. High starch content and long shelf life.',
  },
  {
    image: MEDIA.sweetCorn,
    name: 'Sweet Corn',
    description: 'Farm-fresh sweet corn harvested at peak ripeness, processed and packaged for international freight.',
  },
  {
    image: MEDIA.soybeans,
    name: 'Soybeans',
    description: 'High-protein soybeans cultivated using sustainable farming practices, available for bulk commodity export.',
  },
];

export default function ExportPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[500px] flex items-center justify-center border-b border-farm-border overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-farm-surface/50 z-10" />
          <Image
            src={MEDIA.heroExport}
            alt="Agricultural Export"
            fill
            className="object-cover opacity-80"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-20 text-center px-6 flex flex-col items-center max-w-4xl mx-auto">
          <span className="eyebrow">International B2B Export</span>
          {/* DISPLAY — one per screen, weight 300 */}
          <h1 className="type-display text-farm-text mb-6">
            Ghana&apos;s Finest,{' '}
            <span className="text-farm-gold">Delivered to the World.</span>
          </h1>
          {/* BODY */}
          <p className="type-body text-farm-text-muted mx-auto">
            Reliable wholesale supply of premium Ghanaian agricultural commodities
            to importers in the UK and European Union.
          </p>
        </div>
      </section>

      {/* Export Products — stagger entrance */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 flex flex-col items-center">
            <span className="eyebrow">Our Commodities</span>
            <h2 className="type-headline text-farm-text">Export-Ready Produce</h2>
          </div>

          <AnimatedGrid>
            {exportProducts.map(({ image, name, description }) => (
              <div key={name} className="golden-hour-card flex flex-col group h-full">
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow z-10 relative">
                  {/* TITLE */}
                  <h3 className="type-title text-farm-text mb-3">{name}</h3>
                  {/* BODY — 62ch max */}
                  <p className="type-body text-farm-text-muted flex-grow">{description}</p>
                </div>
              </div>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* Why Choose Us */}
      <ExportWhyUs />
    </div>
  );
}
