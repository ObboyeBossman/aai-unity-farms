import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { MEDIA } from '@/lib/media';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | AAI Unity Farms',
  description: 'Learn about AAI Unity Farms — a trusted Ghanaian agribusiness with over 10 years supplying quality eggs, poultry, and farm products to Ghana and international markets.',
};

const shopifyEaseStyle = { transitionTimingFunction: 'cubic-bezier(0.2,0,0,1)' };

export default function AboutPage() {
  const values = [
    { name: 'Quality', description: 'Uncompromising standards in every product we deliver, from farm to table or export.' },
    { name: 'Integrity', description: 'Honest, transparent relationships with our local buyers, export partners, and community.' },
    { name: 'Excellence', description: 'Continuous improvement in our farming methods, packaging, and logistics operations.' },
    { name: 'Sustainability', description: 'Responsible agricultural practices that protect the environment for future generations.' },
    { name: 'Customer Satisfaction', description: 'A relentless focus on meeting and exceeding the expectations of every client we serve.' },
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center border-b border-farm-border overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-farm-surface/50 z-10" />
          <Image
            src={MEDIA.heroAbout}
            alt="About AAI Unity Farms"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-20 text-center px-6 flex flex-col items-center fade-up">
          <span className="eyebrow">Who We Are</span>
          {/* DISPLAY — one per screen, weight 300 */}
          <h1 className="type-display text-farm-text">About Us</h1>
        </div>
      </section>

      {/* Story — heading → body 80ms → CTA 160ms */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col">
              <span className="eyebrow">Our Heritage</span>
              {/* HEADLINE — 2-5 words */}
              <h2 className="type-headline text-farm-text mb-8">
                Rooted in Ghana,<br />Serving the World.
              </h2>
              {/* BODY — max 62ch, never wider */}
              <p className="type-body text-farm-text-muted mb-4">
                AAI Unity Farms is a trusted poultry and food production business specializing
                in quality poultry products, fresh eggs, and nutritious food solutions.
              </p>
              <p className="type-body text-farm-text-muted mb-10">
                We are committed to providing healthy, affordable, and reliable farm products
                while maintaining high standards in farming, quality, and customer satisfaction.
                Our goal is to support families, businesses, and communities through sustainable
                poultry farming, innovation, and dedication to excellence.
              </p>
              {/* Quote — TITLE weight as blockquote */}
              <blockquote className="border-l-2 border-farm-gold pl-6 py-2">
                <p className="type-title text-farm-text font-display font-light italic">
                  &ldquo;Supporting communities with fresh farm produce through sustainable
                  farming, innovation, and dedication to excellence.&rdquo;
                </p>
              </blockquote>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="relative h-72 rounded-xl overflow-hidden border border-farm-border mt-16">
                <Image src={MEDIA.gallery03} alt="Farm operations" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="relative h-72 rounded-xl overflow-hidden border border-farm-border">
                <Image src={MEDIA.gallery04} alt="Poultry" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision — stagger 40ms apart */}
      <section className="py-32 bg-farm-surface-card border-y border-farm-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="eyebrow">Purpose</span>
            <h2 className="type-headline text-farm-text">Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                letter: 'M',
                title: 'Our Mission',
                body: 'To produce and supply high-quality agricultural products while promoting sustainable farming and creating value for customers in Ghana and international markets.',
              },
              {
                letter: 'V',
                title: 'Our Vision',
                body: "To become one of Ghana's leading agribusiness companies, recognized across Africa and Europe for quality, innovation, and reliability.",
              },
            ].map(({ letter, title, body }) => (
              <div key={title} className="golden-hour-card p-10 flex flex-col">
                <div className="w-12 h-12 rounded-full border border-farm-gold/30 flex items-center justify-center mb-8">
                  <span className="type-label text-farm-gold">{letter}</span>
                </div>
                {/* TITLE */}
                <h3 className="type-title text-farm-text mb-4">{title}</h3>
                {/* BODY */}
                <p className="type-body text-farm-text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 flex flex-col items-center">
            <span className="eyebrow">Our Principles</span>
            <h2 className="type-headline text-farm-text">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ name, description }) => (
              <div
                key={name}
                className="flex gap-5 p-8 bg-farm-surface-card rounded-xl border border-farm-border"
              >
                <CheckCircle2 className="text-farm-gold shrink-0 mt-1" size={20} />
                <div>
                  {/* TITLE */}
                  <h4 className="type-title text-farm-text mb-3" style={{ fontSize: '18px' }}>{name}</h4>
                  {/* BODY — max 62ch */}
                  <p className="type-body text-farm-text-muted" style={{ fontSize: '15px' }}>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
