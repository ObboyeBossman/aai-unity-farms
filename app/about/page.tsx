import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { MEDIA } from '@/lib/media';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | AAI Unity Farms',
  description: 'Learn about AAI Unity Farms — a trusted Ghanaian agribusiness with over 10 years supplying quality eggs, poultry, and farm products to Ghana and international markets.',
};

export default function AboutPage() {
  const values = [
    { name: 'Quality', description: 'Uncompromising standards in every product we deliver, from farm to table or export.' },
    { name: 'Integrity', description: 'Honest, transparent relationships with our local buyers, export partners, and community.' },
    { name: 'Excellence', description: 'Continuous improvement in our farming methods, packaging, and logistics operations.' },
    { name: 'Sustainability', description: 'Responsible agricultural practices that protect the environment for future generations.' },
    { name: 'Customer Satisfaction', description: 'A relentless focus on meeting and exceeding the expectations of every client we serve.' },
  ];

  return (
    <div className="pt-20 relative">
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0D3B17]/80 z-10" />
          <Image
            src={MEDIA.heroAbout}
            alt="About AAI Unity Farms"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">About Us</h1>
          <p className="font-ui text-lg text-[#C8E6C9] max-w-2xl mx-auto">
            A trusted poultry and food production business specializing in quality farm products.
          </p>
        </div>
      </section>

      {/* Bio & Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[#D4AF37] font-ui font-bold tracking-widest uppercase mb-2">Who We Are</h2>
              <h3 className="text-3xl font-display font-bold text-[#1C1A14] mb-6">Rooted in Ghana, Serving the World</h3>
              <p className="text-[#424242] leading-relaxed mb-6 font-sans text-lg">
                AAI Unity Farms is a trusted poultry and food production business specializing in quality poultry products, fresh eggs, and nutritious food solutions.
              </p>
              <p className="text-[#424242] leading-relaxed mb-6 font-sans text-lg">
                We are committed to providing healthy, affordable, and reliable farm products while maintaining high standards in farming, quality, and customer satisfaction. Our goal is to support families, businesses, and communities with fresh farm produce through sustainable poultry farming, innovation, and dedication to excellence.
              </p>
              <div className="p-6 bg-[#F1F8E9] border-l-4 border-[#2E7D32] rounded-r-lg mt-8">
                <p className="text-[#0D3B17] font-display text-xl italic font-medium">
                  &quot;Our goal is to support families, businesses, and communities with fresh farm produce through sustainable poultry farming, innovation, and dedication to excellence.&quot;
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg mt-8">
                <Image src={MEDIA.gallery03} alt="Farming" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image src={MEDIA.gallery04} alt="Poultry" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#0D3B17] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[#1B5E20] p-10 rounded-2xl border border-[#2E7D32]">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mb-6">
                <span className="font-display font-bold text-2xl text-[#0D3B17]">M</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-[#FFF8E1]">Our Mission</h3>
              <p className="text-[#C8E6C9] font-sans text-lg leading-relaxed">
                To produce and supply high-quality agricultural products while promoting sustainable farming and creating value for customers in Ghana and international markets.
              </p>
            </div>
            <div className="bg-[#1B5E20] p-10 rounded-2xl border border-[#2E7D32]">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mb-6">
                <span className="font-display font-bold text-2xl text-[#0D3B17]">V</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-[#FFF8E1]">Our Vision</h3>
              <p className="text-[#C8E6C9] font-sans text-lg leading-relaxed">
                To become one of Ghana&apos;s leading agribusiness companies, recognized across Africa and Europe for quality, innovation, and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#D4AF37] font-ui font-bold tracking-widest uppercase mb-2">Our Principles</h2>
            <h3 className="text-3xl font-display font-bold text-[#1C1A14]">Core Values</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.name} className="flex gap-4 p-6 bg-[#FAFAF5] rounded-xl border border-gray-100">
                <CheckCircle2 className="text-[#2E7D32] shrink-0" size={24} />
                <div>
                  <h4 className="font-ui font-bold text-[#1C1A14] text-lg mb-2">{value.name}</h4>
                  <p className="text-[#424242] font-sans text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}
