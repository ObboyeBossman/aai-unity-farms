'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'motion/react';

// Shopify ease
const shopifyEase = [0.2, 0, 0, 1] as const;

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const text = `*Contact Form Message*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n\n` +
      `*Message:*\n${formData.message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/233542644993?text=${encoded}`, '_blank');
    setStatus('sent');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.34, ease: shopifyEase }}
          className="text-center mb-24 flex flex-col items-center"
        >
          <span className="eyebrow">Get In Touch</span>
          {/* DISPLAY — weight 300, commands presence */}
          <h1 className="type-display text-farm-text mb-6">Contact Us</h1>
          <p className="type-body text-farm-text-muted mx-auto">
            Reach out to us for local orders or international export inquiries. We respond within one business day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.34, delay: 0.08, ease: shopifyEase }}
            className="flex flex-col gap-6"
          >
            <div className="bg-farm-surface-card border border-farm-border rounded-xl p-8 flex flex-col gap-8">
              {/* TITLE */}
              <h3 className="type-title text-farm-text" style={{ fontSize: '20px' }}>Information</h3>
              <div className="flex flex-col gap-6">
                {[
                  { icon: MapPin, label: 'Location', value: 'P.O. Box 214,\nDormaa Ahenkro, Ghana' },
                  { icon: Phone, label: 'Phone & WhatsApp', value: '+233 542 644 993\n+233 201 275 739' },
                  { icon: Mail, label: 'Email', value: 'info@aaiunityfarm.net' },
                  { icon: Clock, label: 'Working Hours', value: 'Mon–Fri: 7:00 AM – 6:00 PM\nSat: 7:00 AM – 3:00 PM\nSun: Closed' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-4">
                    <Icon className="text-farm-gold shrink-0 mt-0.5" size={18} />
                    <div>
                      {/* LABEL */}
                      <p className="type-label text-farm-text-muted mb-1">{label}</p>
                      {/* BODY */}
                      <p className="type-body text-farm-text whitespace-pre-line" style={{ fontSize: '14px', maxWidth: 'none' }}>
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-farm-surface-card border border-farm-border rounded-xl h-48 flex flex-col items-center justify-center gap-2 border-dashed">
              <MapPin size={28} className="text-farm-text-muted" />
              <p className="type-micro">Google Maps · Dormaa Ahenkro</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.34, delay: 0.12, ease: shopifyEase }}
            className="lg:col-span-2 bg-farm-surface-card border border-farm-border rounded-xl p-8 md:p-12"
          >
            {/* TITLE */}
            <h2 className="type-headline text-farm-text mb-10" style={{ fontSize: '32px' }}>Send us a message</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  {/* LABEL */}
                  <label className="type-label text-farm-text-muted" htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    required
                    className="farm-input"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="type-label text-farm-text-muted" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    required
                    className="farm-input"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="type-label text-farm-text-muted" htmlFor="phone">Phone / WhatsApp</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+233 55 000 0000"
                  required
                  className="farm-input"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="type-label text-farm-text-muted" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className="farm-input resize-none"
                />
              </div>

              <div className="flex items-center gap-4 mt-2">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.08 }}
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Opening WhatsApp…' : status === 'sent' ? '✓ Sent via WhatsApp' : 'Send via WhatsApp'}
                </motion.button>
                {status === 'sent' && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="type-body text-farm-gold"
                    style={{ fontSize: '14px' }}
                  >
                    Message ready — check your WhatsApp.
                  </motion.span>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
