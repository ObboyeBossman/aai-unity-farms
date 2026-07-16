'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { MEDIA } from '@/lib/media';

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
    <div className="bg-gradient-subtle pt-28 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#0D3B17]/10 text-[#0D3B17] font-ui text-sm font-bold tracking-wider mb-6">
              WHOLESALE & EXPORT
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-[#1C1A14] mb-6">
              Request a Custom Quote
            </h1>
            <p className="text-[#424242] font-sans text-lg mb-8 leading-relaxed">
              We supply both the local Ghanaian market and international export partners. Fill out the form below with your requirements, and our team will get back to you with pricing and logistics details.
            </p>
            
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-2xl hidden lg:block border border-white/40">
              <Image src={MEDIA.heroContact} alt="Contact Us" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6 font-ui">
              
              <div>
                <label className="block text-sm font-bold text-[#1C1A14] mb-2">Buyer Type</label>
                <select 
                  name="buyerType"
                  value={formData.buyerType}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D3B17] focus:border-[#0D3B17] outline-none bg-white/50 backdrop-blur-sm transition-all"
                  required
                >
                  <option value="Local Wholesale">Local Wholesale (Ghana)</option>
                  <option value="International Export (UK/EU)">International Export (UK/EU)</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#1C1A14] mb-2">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D3B17] outline-none bg-white/50 backdrop-blur-sm transition-all" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1C1A14] mb-2">Company (Optional)</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D3B17] outline-none bg-white/50 backdrop-blur-sm transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#1C1A14] mb-2">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D3B17] outline-none bg-white/50 backdrop-blur-sm transition-all" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1C1A14] mb-2">Phone / WhatsApp</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D3B17] outline-none bg-white/50 backdrop-blur-sm transition-all" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1C1A14] mb-2">Products of Interest</label>
                <input type="text" name="products" placeholder="e.g., Fresh Eggs, Yams, Soybeans" value={formData.products} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D3B17] outline-none bg-white/50 backdrop-blur-sm transition-all" required />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1C1A14] mb-2">Estimated Quantity</label>
                <input type="text" name="quantity" placeholder="e.g., 50 crates, 1 20ft container" value={formData.quantity} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D3B17] outline-none bg-white/50 backdrop-blur-sm transition-all" required />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1C1A14] mb-2">Additional Message</label>
                <textarea name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D3B17] outline-none bg-white/50 backdrop-blur-sm transition-all"></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full py-4 bg-gradient-farm text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Submit Request via WhatsApp
              </motion.button>
              <p className="text-center text-xs text-[#757575] mt-4 font-sans">
                By submitting this form, you will be redirected to WhatsApp to send your request directly to our team.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
