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

export default function ExportPage() {
  return (
    <div className="bg-[#FAFAFA] pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D3B17]/90 to-[#1C1A14]/80 z-10" />
          <Image src={MEDIA.heroExport} alt="Agricultural Export" fill className="object-cover" priority referrerPolicy="no-referrer" />
        </div>
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full border border-white/30 text-white font-ui text-sm font-bold tracking-wider mb-6 backdrop-blur-sm shadow-sm">
            INTERNATIONAL B2B EXPORT
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Ghana&apos;s Finest, <br/><span className="text-[#C8960C]">Delivered to the World</span></h1>
          <p className="font-ui text-lg text-[#C8E6C9]">
            Reliable wholesale supply of premium Ghanaian agricultural commodities to importers in the UK and European Union.
          </p>
        </div>
      </section>

      {/* Export Products */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#2E7D32] font-ui font-bold tracking-widest uppercase mb-2">Our Commodities</h2>
            <h3 className="text-4xl font-display font-bold text-[#1C1A14]">Export-Ready Produce</h3>
          </div>

          <AnimatedGrid>
            <div className="glass-panel rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
              <div className="h-64 relative overflow-hidden">
                <Image src={MEDIA.ghanaianYam} alt="Ghanaian Yams" fill className="object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <h4 className="font-display font-bold text-2xl text-[#1C1A14] mb-3">Premium Ghanaian Yams</h4>
                <p className="text-[#424242] font-sans mb-6">Carefully selected, cleaned, and packed to meet strict EU/UK import standards. High starch content and long shelf life.</p>
              </div>
            </div>
            
            <div className="glass-panel rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
              <div className="h-64 relative overflow-hidden">
                <Image src={MEDIA.sweetCorn} alt="Sweet Corn" fill className="object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <h4 className="font-display font-bold text-2xl text-[#1C1A14] mb-3">Sweet Corn</h4>
                <p className="text-[#424242] font-sans mb-6">Farm-fresh sweet corn harvested at peak ripeness, processed and packaged for international freight.</p>
              </div>
            </div>

            <div className="glass-panel rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
              <div className="h-64 relative overflow-hidden">
                <Image src={MEDIA.soybeans} alt="Soybeans" fill className="object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <h4 className="font-display font-bold text-2xl text-[#1C1A14] mb-3">Soybeans</h4>
                <p className="text-[#424242] font-sans mb-6">High-protein soybeans cultivated using sustainable farming practices, available for bulk commodity export.</p>
              </div>
            </div>
          </AnimatedGrid>
        </div>
      </section>

      {/* Why Choose Us — Client Component (uses motion) */}
      <ExportWhyUs />
    </div>
  );
}

