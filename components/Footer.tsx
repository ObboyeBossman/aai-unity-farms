import React from 'react';
import { NewsletterSignup } from './NewsletterSignup';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-farm-surface-card text-farm-text pt-16 pb-8 border-t border-farm-border relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
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
                  AAI <span className="text-farm-gold">Unity</span> Farms
                </h2>
                <p className="text-farm-text-muted font-body text-xs mt-2 uppercase tracking-widest">
                  Quality • Integrity • Sustainability
                </p>
              </div>
            </div>
            <p className="text-farm-text-muted text-sm leading-relaxed">
              Premium poultry and Ghanaian agricultural products for local supply and international export.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-farm-border flex items-center justify-center text-farm-text-muted hover:bg-farm-gold hover:text-farm-surface hover:border-farm-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-farm-border flex items-center justify-center text-farm-text-muted hover:bg-farm-gold hover:text-farm-surface hover:border-farm-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-farm-border flex items-center justify-center text-farm-text-muted hover:bg-farm-gold hover:text-farm-surface hover:border-farm-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-body font-bold text-base mb-6 text-farm-text">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/about" className="text-farm-text-muted hover:text-farm-gold text-sm transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-farm-text-muted hover:text-farm-gold text-sm transition-colors">Our Products</Link></li>
              <li><Link href="/shop" className="text-farm-text-muted hover:text-farm-gold text-sm transition-colors">Shop Online</Link></li>
              <li><Link href="/export" className="text-farm-text-muted hover:text-farm-gold text-sm transition-colors">Export Services</Link></li>
              <li><Link href="/quote" className="text-farm-text-muted hover:text-farm-gold text-sm transition-colors">Request a Quote</Link></li>
              <li><Link href="/blog" className="text-farm-text-muted hover:text-farm-gold text-sm transition-colors">Blog & News</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body font-bold text-base mb-6 text-farm-text">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-4 text-farm-text-muted text-sm">
                <MapPin className="text-farm-gold shrink-0" size={20} />
                <span>P.O. Box 214,<br />Dormaa Ahenkro, Ghana</span>
              </li>
              <li className="flex gap-4 text-farm-text-muted text-sm">
                <Phone className="text-farm-gold shrink-0" size={20} />
                <div className="flex flex-col gap-2">
                  <a href="tel:+233542644993" className="hover:text-farm-gold transition-colors">+233 542 644 993</a>
                  <a href="tel:+233201275739" className="hover:text-farm-gold transition-colors">+233 201 275 739</a>
                </div>
              </li>
              <li className="flex gap-4 text-farm-text-muted text-sm">
                <Mail className="text-farm-gold shrink-0" size={20} />
                <a href="mailto:info@aaiunityfarm.net" className="hover:text-farm-gold transition-colors">info@aaiunityfarm.net</a>
              </li>
            </ul>
          </div>

          {/* Hours + Newsletter */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-body font-bold text-base mb-6 text-farm-text">Working Hours</h3>
              <ul className="flex flex-col gap-4 text-sm text-farm-text-muted">
                <li className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span className="text-farm-text">7:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-farm-text">7:00 AM - 3:00 PM</span>
                </li>
                <li className="flex justify-between text-farm-text-muted/50">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
            <NewsletterSignup variant="footer" />
          </div>
        </div>

        <div className="pt-8 border-t border-farm-border text-center text-xs text-farm-text-muted flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} AAI Unity Farms. All rights reserved.</p>
          <div className="flex gap-6 font-body">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-farm-gold"></span> Quality
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-farm-gold"></span> Integrity
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-farm-gold"></span> Sustainability
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
