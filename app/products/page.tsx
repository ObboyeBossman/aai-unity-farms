import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { products } from '@/lib/data';
import { MEDIA } from '@/lib/media';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Products | AAI Unity Farms',
  description: 'Browse our full range of farm products: fresh eggs, broiler chickens, layer chickens, day-old chicks, poultry feeds, Ghanaian yams, and more.',
};

export default function ProductsPage() {
  const localProducts = products.filter(p => p.category !== 'Ghanaian Foods');

  return (
    <div className="bg-[#FAFAFA] pt-20">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#1B5E20]/90 z-10" />
          <Image src={MEDIA.heroProducts} alt="Our Products" fill className="object-cover" priority referrerPolicy="no-referrer" />
        </div>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Products</h1>
          <p className="font-ui text-lg text-[#C8E6C9] max-w-2xl mx-auto">
            Fresh, high-quality poultry and farm products for the local market.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-[#1C1A14]">Local Supply Catalogue</h2>
            <p className="text-[#757575] mt-2 font-sans">Prices subject to change. Contact us for bulk orders.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
                <div className="relative h-56 overflow-hidden">
                  <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-3 left-3 bg-[#0D3B17] text-white px-2 py-1 rounded text-xs font-ui font-bold">
                    {product.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-ui font-bold text-lg text-[#1C1A14] mb-2">{product.name}</h3>
                  <div className="text-[#C8960C] font-display font-bold text-xl mb-4">
                    {product.price ? `GHS ${product.price}` : 'Contact for Price'}
                    <span className="text-[#757575] font-sans text-sm font-normal ml-1">/ {product.unit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/shop" className="inline-flex items-center gap-2 bg-[#0D3B17] text-white px-8 py-4 rounded-lg font-ui font-bold hover:bg-[#1B5E20] transition-colors">
              Order Online Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Export Teaser */}
      <section className="py-16 bg-[#FAFAF5] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-display font-bold text-[#1C1A14] mb-4">Looking for Export Products?</h2>
          <p className="text-[#424242] font-sans mb-6">We export premium Ghanaian Yams, Sweet Corn, and Soybeans to the UK and European Union.</p>
          <Link href="/export" className="text-[#0D3B17] font-ui font-bold border-b-2 border-[#C8960C] pb-1 hover:text-[#2E7D32]">
            View our Export Services
          </Link>
        </div>
      </section>
    </div>
  );
}
