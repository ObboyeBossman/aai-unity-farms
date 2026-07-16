'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { MEDIA } from '@/lib/media';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Contact Form Message*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n\n` +
      `*Message:*\n${formData.message}`;
    
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/233542644993?text=${encoded}`, '_blank');
  };

  return (
    <div className="bg-[#FAFAFA] pt-28 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-[#1C1A14] mb-4">Contact Us</h1>
          <p className="text-[#424242] font-sans text-lg max-w-2xl mx-auto">
            Get in touch with the AAI Unity Farms team. We are always ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-ui font-bold text-xl mb-6 text-[#1C1A14]">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-[#C8960C] shrink-0" />
                  <div>
                    <h4 className="font-ui font-bold text-[#1C1A14]">Location</h4>
                    <p className="text-[#424242] font-sans text-sm">P.O. Box 214,<br/>Dormaa Ahenkro, Ghana</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Phone className="text-[#C8960C] shrink-0" />
                  <div>
                    <h4 className="font-ui font-bold text-[#1C1A14]">Phone & WhatsApp</h4>
                    <p className="text-[#424242] font-sans text-sm">+233 542 644 993<br/>+233 201 275 739</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-[#C8960C] shrink-0" />
                  <div>
                    <h4 className="font-ui font-bold text-[#1C1A14]">Email</h4>
                    <p className="text-[#424242] font-sans text-sm">info@aaiunityfarm.net</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-[#C8960C] shrink-0" />
                  <div>
                    <h4 className="font-ui font-bold text-[#1C1A14]">Working Hours</h4>
                    <p className="text-[#424242] font-sans text-sm">Mon - Fri: 7:00 AM - 6:00 PM<br/>Sat: 7:00 AM - 3:00 PM<br/>Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-gray-200 h-64 rounded-2xl overflow-hidden relative">
              {/* In a real scenario, an iframe to Google Maps would be placed here */}
              <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-500 font-ui p-4 text-center border-2 border-dashed border-gray-400 rounded-2xl m-2">
                <MapPin size={32} className="mb-2" />
                <p>Google Maps Integration<br/>(Dormaa Ahenkro, Ghana)</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-ui font-bold text-2xl mb-8 text-[#1C1A14]">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 font-ui">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#1C1A14] mb-2">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D3B17] outline-none bg-[#FAFAFA]" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1C1A14] mb-2">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D3B17] outline-none bg-[#FAFAFA]" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1C1A14] mb-2">Phone / WhatsApp</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D3B17] outline-none bg-[#FAFAFA]" required />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1C1A14] mb-2">Message</label>
                <textarea name="message" rows={5} value={formData.message} onChange={handleChange} className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D3B17] outline-none bg-[#FAFAFA]" required></textarea>
              </div>

              <button type="submit" className="py-4 px-8 bg-[#0D3B17] text-white font-bold rounded-lg hover:bg-[#1B5E20] transition-colors">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
