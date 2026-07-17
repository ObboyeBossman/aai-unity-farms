'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { MEDIA } from '@/lib/media';

const shopifyEase = [0.2, 0, 0, 1] as const;

export default function QuotePage() {
  const [formData, setFormData] = useState({
    buyerType: 'Local Wholesale',
    products: '',
    quantity: '',
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Quote Request*\n\n` +
      `*Type:* ${formData.buyerType}\n` +
      `*Name:* ${formData.name}\n` +
      `*Company:* ${formData.company}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n\n` +
      `*Products of Interest:* ${formData.products}\n` +
      `*Estimated Quantity:* ${formData.quantity}\n\n` +
      `*Additional Message:*\n${formData.message}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/233542644993?text=${encoded}`, '_blank');
  };

  return (
    <div className="pt-28 pb-20 min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.34, ease: shopifyEase }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <span className="eyebrow">Wholesale & Export</span>
          <h1 className="type-display text-farm-text mb-4">Request a Custom Quote</h1>
          <p className="type-body text-farm-text-muted mx-auto">
            We supply both the local Ghanaian market and international export partners.
            Fill out the form and our team will respond with pricing and logistics details.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column — image */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.34, delay: 0.06, ease: shopifyEase }}
            className="flex flex-col gap-8"
          >
            <div className="relative h-[340px] rounded-2xl overflow-hidden border border-farm-border">
              <Image
                src={MEDIA.heroContact}
                alt="Contact Us"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-farm-surface/30" />
            </div>

            <div className="bg-farm-surface-card border border-farm-border rounded-xl p-8 flex flex-col gap-4">
              <p className="type-label text-farm-text-muted">What happens next</p>
              {[
                'Submit your requirements via this form',
                'Our team reviews within one business day',
                'We send you a detailed WhatsApp quote',
                'Confirm and arrange delivery or logistics',
              ].map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="w-6 h-6 rounded-full bg-farm-gold/10 border border-farm-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="type-label text-farm-gold" style={{ fontSize: '10px' }}>{i + 1}</span>
                  </span>
                  <p className="type-body text-farm-text-muted" style={{ fontSize: '14px' }}>{step}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column — form */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.34, delay: 0.12, ease: shopifyEase }}
            className="bg-farm-surface-card border border-farm-border rounded-2xl p-8 md:p-10"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

              <div className="flex flex-col gap-2">
                <label className="type-label text-farm-text-muted" htmlFor="buyerType">Buyer Type</label>
                <select
                  id="buyerType"
                  name="buyerType"
                  value={formData.buyerType}
                  onChange={handleChange}
                  className="farm-input"
                  required
                >
                  <option value="Local Wholesale">Local Wholesale (Ghana)</option>
                  <option value="International Export (UK/EU)">International Export (UK/EU)</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="type-label text-farm-text-muted" htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="farm-input"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="type-label text-farm-text-muted" htmlFor="company">Company (Optional)</label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="farm-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="type-label text-farm-text-muted" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="farm-input"
                  />
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
              </div>

              <div className="flex flex-col gap-2">
                <label className="type-label text-farm-text-muted" htmlFor="products">Products of Interest</label>
                <input
                  id="products"
                  type="text"
                  name="products"
                  placeholder="e.g., Fresh Eggs, Yams, Soybeans"
                  value={formData.products}
                  onChange={handleChange}
                  required
                  className="farm-input"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="type-label text-farm-text-muted" htmlFor="quantity">Estimated Quantity</label>
                <input
                  id="quantity"
                  type="text"
                  name="quantity"
                  placeholder="e.g., 50 crates, 1 x 20ft container"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  className="farm-input"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="type-label text-farm-text-muted" htmlFor="message">Additional Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any specific requirements, delivery timeline, or questions?"
                  className="farm-input resize-none"
                />
              </div>

              <motion.button
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.08 }}
                type="submit"
                className="btn-primary w-full mt-2"
              >
                Submit Request via WhatsApp
              </motion.button>
              <p className="type-micro text-center">
                You&apos;ll be redirected to WhatsApp to send your request directly to our team.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
