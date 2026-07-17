'use client';

import Link from 'next/link';
import { Globe, Plane, ShieldCheck, FileCheck } from 'lucide-react';
import { motion } from 'motion/react';

const shopifyEase = [0.2, 0, 0, 1] as const;

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    body: 'Every shipment undergoes rigorous quality control to ensure only premium grade produce leaves our facility.',
  },
  {
    icon: FileCheck,
    title: 'Compliance & Documentation',
    body: 'Full compliance with UK and EU phytosanitary regulations. We handle all necessary export documentation seamlessly.',
  },
  {
    icon: Plane,
    title: 'Reliable Logistics',
    body: 'Strategic partnerships with freight forwarders ensure timely and temperature-controlled delivery to your port.',
  },
];

export function ExportWhyUs() {
  return (
    <section className="py-32 bg-farm-surface-card border-t border-farm-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left — Reasons */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.34, ease: shopifyEase }}
            className="flex flex-col"
          >
            <span className="eyebrow">Export Standards</span>
            <h2 className="type-headline text-farm-text mb-14">Why partner with us?</h2>

            <div className="flex flex-col gap-10">
              {reasons.map(({ icon: Icon, title, body }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.3, delay: i * 0.04, ease: shopifyEase }}
                  className="flex gap-5 group"
                >
                  <div className="w-10 h-10 rounded-full border border-farm-border flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:border-farm-gold">
                    <Icon className="text-farm-gold" size={18} />
                  </div>
                  <div>
                    {/* TITLE */}
                    <h3 className="type-title text-farm-text mb-2" style={{ fontSize: '18px' }}>{title}</h3>
                    {/* BODY */}
                    <p className="type-body text-farm-text-muted" style={{ fontSize: '15px' }}>{body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.34, delay: 0.08, ease: shopifyEase }}
            className="golden-hour-card p-12 flex flex-col items-center text-center lg:sticky lg:top-32"
          >
            <Globe className="text-farm-gold mb-8 relative z-10" size={56} />
            {/* TITLE */}
            <h3 className="type-title text-farm-text mb-4 relative z-10">Serving Europe</h3>
            {/* BODY */}
            <p className="type-body text-farm-text-muted mx-auto mb-10 relative z-10">
              We are actively expanding our export network across the United Kingdom and the European Union.
            </p>
            <Link href="/quote" className="btn-primary w-full justify-center relative z-10">
              Request Export Quote
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
