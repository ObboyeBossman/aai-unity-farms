'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Leaf, Globe, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { MEDIA } from '@/lib/media';
import { StatCounter } from '@/components/StatCounter';

// Shopify ease: fast out, gentle settle
const shopifyEase = [0.2, 0, 0, 1] as const;

export default function Home() {
  return (
    <div className="relative">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO — Signature Move: Word-by-word
          title fade in at stagger 60ms each
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-farm-surface/50 z-10" />
          <motion.div
            initial={{ scale: 1.04 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: shopifyEase }}
            className="absolute inset-0"
          >
            <Image
              src={MEDIA.heroHome}
              alt="AAI Unity Farms landscape"
              fill
              className="object-cover opacity-70"
              priority
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          {/* LABEL */}
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, ease: shopifyEase }}
            className="eyebrow"
          >
            AAI Unity Farms · Dormaa Ahenkro, Ghana
          </motion.span>

          {/* DISPLAY — weight 300, the Shopify Contrast Rule */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.34, delay: 0.08, ease: shopifyEase }}
            className="type-display text-farm-text mb-6"
          >
            Farming Today,{' '}
            <span className="text-farm-gold">Feeding Tomorrow.</span>
          </motion.h1>

          {/* BODY — max 62ch */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, delay: 0.16, ease: shopifyEase }}
            className="type-body text-farm-text-muted mx-auto mb-12"
          >
            Premium poultry and fresh Ghanaian agricultural exports delivered
            with a decade-long commitment to quality, integrity, and sustainability.
          </motion.p>

          {/* CTAs — visible on first load, never below fold */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, delay: 0.24, ease: shopifyEase }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link href="/shop" className="btn-primary">
              Order Fresh Produce <ArrowRight size={16} />
            </Link>
            <Link href="/export" className="btn-secondary">
              Export Services <Globe size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TRUST BAR
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="bg-farm-surface-card border-y border-farm-border py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-farm-border">
            {[
              { icon: ShieldCheck, text: '10+ Years of Excellence' },
              { icon: CheckCircle2, text: 'Premium Quality Assured' },
              { icon: Leaf, text: 'Sustainable Practices' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center justify-center gap-3 py-4 md:py-0">
                <Icon className="text-farm-gold shrink-0" size={20} />
                <span className="type-label text-farm-text">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          ABOUT OVERVIEW
          Choreography: heading → body 80ms → CTA 160ms
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.34, ease: shopifyEase }}
              className="relative h-[540px] rounded-2xl overflow-hidden border border-farm-border"
            >
              <Image
                src={MEDIA.gallery01}
                alt="Farm operations"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <div className="flex flex-col">
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.32, ease: shopifyEase }}
                className="eyebrow"
              >
                Our Story
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.34, ease: shopifyEase }}
                className="type-headline text-farm-text mb-8"
              >
                A decade of agricultural excellence.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.32, delay: 0.08, ease: shopifyEase }}
                className="type-body text-farm-text-muted mb-4"
              >
                AAI Unity Farms specializes in quality poultry products, fresh eggs,
                and nutritious food solutions. Located in Dormaa Ahenkro, we bridge
                local farming excellence with international export standards.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.32, delay: 0.08, ease: shopifyEase }}
                className="type-body text-farm-text-muted mb-10"
              >
                We are committed to healthy, affordable, and reliable farm products
                while maintaining high standards in farming, quality, and customer satisfaction.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.32, delay: 0.16, ease: shopifyEase }}
              >
                <Link href="/about" className="btn-secondary self-start">
                  Read our full story <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TWO AUDIENCES — STAGGER ENTRANCE
          Cards stagger in 40ms apart (Shopify rule)
          This is the section's choreographed moment.
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-32 bg-farm-surface-card border-y border-farm-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.32, ease: shopifyEase }}
              className="eyebrow"
            >
              How We Serve
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.34, ease: shopifyEase }}
              className="type-headline text-farm-text"
            >
              Two markets. One standard.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                image: MEDIA.freshEggs,
                alt: 'Local Poultry',
                title: 'Local Market',
                body: 'Farm-fresh eggs, live and dressed broiler chickens, day-old chicks, and premium poultry feed for the Ghanaian market.',
                cta: 'View Local Catalogue',
                href: '/products',
                variant: 'secondary',
                delay: 0,
              },
              {
                image: MEDIA.ghanaianYam,
                alt: 'Export Commodities',
                title: 'Global Export',
                body: 'Premium Ghanaian yams, sweet corn, and soybeans exported to wholesale buyers and importers in the UK and European Union.',
                cta: 'View Export Services',
                href: '/export',
                variant: 'primary',
                delay: 0.04,
              },
            ].map(({ image, alt, title, body, cta, href, variant, delay }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay, ease: shopifyEase }}
                className="golden-hour-card flex flex-col group"
              >
                <div className="h-72 relative overflow-hidden">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-farm-surface/80 via-farm-surface/20 to-transparent" />
                  <h3 className="type-title absolute bottom-6 left-6 text-farm-text">{title}</h3>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <p className="type-body text-farm-text-muted mb-8 flex-grow">{body}</p>
                  <Link
                    href={href}
                    className={variant === 'primary' ? 'btn-primary justify-center' : 'btn-secondary justify-center'}
                  >
                    {cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          STATS — Data has personality.
          Numbers count up (600-800ms, Shopify rule).
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-32 border-b border-farm-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { end: 50, suffix: ',000+', label: 'Eggs Per Week', duration: 800 },
              { end: 10, suffix: '+', label: 'Years Active', duration: 700 },
              { end: 500, suffix: '+', label: 'Clients Served', duration: 800 },
              { end: 5, suffix: '', label: 'Export Nations', duration: 600 },
            ].map(({ end, suffix, label, duration }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.32, ease: shopifyEase }}
                className="flex flex-col items-center gap-3"
              >
                <StatCounter
                  end={end}
                  suffix={suffix}
                  duration={duration}
                  className="type-display text-farm-gold"
                />
                <span className="type-label text-farm-text-muted">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CTA — One primary action. Never buried.
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-32 bg-farm-surface-card">
        <div className="max-w-2xl mx-auto px-6 text-center flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.32, ease: shopifyEase }}
            className="eyebrow"
          >
            Get Started
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.34, ease: shopifyEase }}
            className="type-headline text-farm-text mb-6"
          >
            Ready to work with us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.32, delay: 0.08, ease: shopifyEase }}
            className="type-body text-farm-text-muted mx-auto mb-10"
          >
            Whether you need a tray of eggs or a container of yams, our team is ready to supply you
            with the finest agricultural products from Ghana.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.32, delay: 0.16, ease: shopifyEase }}
          >
            <Link href="/contact" className="btn-primary">
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
