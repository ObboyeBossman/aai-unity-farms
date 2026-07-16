import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D3B17]/90 backdrop-blur-md text-white pt-16 pb-8 border-t-[8px] border-[#D4AF37] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative h-16 w-16">
                <Image
                  src="/logo.png"
                  alt="AAI Unity Farms Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold">
                  AAI <span className="text-[#D4AF37]">Unity</span> Farms
                </h2>
                <p className="text-[#C8E6C9] font-ui text-[10px] mt-1 uppercase tracking-widest">
                  Quality • Integrity • Sustainability
                </p>
              </div>
            </div>
            <p className="text-[#F1F8E9] text-sm leading-relaxed">
              Premium poultry and Ghanaian agricultural products for local supply and international export.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1B5E20] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0D3B17] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1B5E20] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0D3B17] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1B5E20] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0D3B17] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-ui font-bold text-lg mb-6 border-b border-[#1B5E20] pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-[#C8E6C9] hover:text-[#D4AF37] transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-[#C8E6C9] hover:text-[#D4AF37] transition-colors">Our Products</Link></li>
              <li><Link href="/shop" className="text-[#C8E6C9] hover:text-[#D4AF37] transition-colors">Shop Online</Link></li>
              <li><Link href="/export" className="text-[#C8E6C9] hover:text-[#D4AF37] transition-colors">Export Services</Link></li>
              <li><Link href="/quote" className="text-[#C8E6C9] hover:text-[#D4AF37] transition-colors">Request a Quote</Link></li>
              <li><Link href="/blog" className="text-[#C8E6C9] hover:text-[#D4AF37] transition-colors">Blog & News</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-ui font-bold text-lg mb-6 border-b border-[#1B5E20] pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-[#C8E6C9]">
                <MapPin className="text-[#D4AF37] shrink-0" size={20} />
                <span>P.O. Box 214,<br />Dormaa Ahenkro, Ghana</span>
              </li>
              <li className="flex gap-3 text-[#C8E6C9]">
                <Phone className="text-[#D4AF37] shrink-0" size={20} />
                <div className="flex flex-col">
                  <a href="tel:+233542644993" className="hover:text-white">+233 542 644 993</a>
                  <a href="tel:+233201275739" className="hover:text-white">+233 201 275 739</a>
                </div>
              </li>
              <li className="flex gap-3 text-[#C8E6C9]">
                <Mail className="text-[#D4AF37] shrink-0" size={20} />
                <a href="mailto:info@aaiunityfarm.net" className="hover:text-white">info@aaiunityfarm.net</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-ui font-bold text-lg mb-6 border-b border-[#1B5E20] pb-2 inline-block">Working Hours</h3>
            <ul className="space-y-3 text-[#C8E6C9]">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span className="text-white">7:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-white">7:00 AM - 3:00 PM</span>
              </li>
              <li className="flex justify-between text-white/50">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1B5E20] text-center text-sm text-[#C8E6C9] flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} AAI Unity Farms. All rights reserved.</p>
          <div className="flex gap-6 font-ui">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span> Quality
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span> Integrity
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span> Sustainability
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
