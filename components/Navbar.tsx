'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from './CartProvider';
import { AnnouncementBar } from './AnnouncementBar';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Export', href: '/export' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const isHomePage = pathname === '/';
  const isSolid = isScrolled || !isHomePage;

  return (
    <header className={`fixed w-full z-40 transition-all duration-500 ${isSolid ? 'glass-panel py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex flex-col">
              <span className={`text-2xl font-display font-bold leading-none ${isSolid ? 'text-[#0D3B17]' : 'text-white'}`}>
                AAI <span className="text-[#C8960C]">Unity</span> Farms
              </span>
              <span className={`text-[10px] uppercase tracking-widest font-ui mt-1 ${isSolid ? 'text-[#388E3C]' : 'text-white/80'}`}>
                Quality • Integrity • Sustainability
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-ui text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? (isSolid ? 'text-[#C8960C]' : 'text-[#F9A825]')
                    : (isSolid ? 'text-[#424242] hover:text-[#0D3B17]' : 'text-white/90 hover:text-white')
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className={`flex items-center gap-4 border-l pl-4 ${isSolid ? 'border-gray-200' : 'border-white/20'}`}>
              <Link
                href="/quote"
                className={`font-ui text-sm font-bold px-4 py-2 rounded transition-colors ${
                  isSolid
                    ? 'bg-[#0D3B17] text-white hover:bg-[#1B5E20]'
                    : 'bg-[#C8960C] text-[#0D3B17] hover:bg-[#F9A825]'
                }`}
              >
                Request Quote
              </Link>
              <Link href="/shop" className={`relative p-2 ${isSolid ? 'text-[#0D3B17]' : 'text-white'}`}>
                <ShoppingCart size={24} />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 bg-[#C8960C] text-[#0D3B17] text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <Link href="/shop" className={`relative p-2 ${isSolid ? 'text-[#0D3B17]' : 'text-white'}`}>
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-[#C8960C] text-[#0D3B17] text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={isSolid ? 'text-[#0D3B17]' : 'text-white'}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-6 py-3 font-ui text-lg border-b border-gray-50 ${
                  pathname === link.href ? 'text-[#0D3B17] font-bold bg-[#F1F8E9]' : 'text-[#424242]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-6 py-4">
              <Link
                href="/quote"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center font-ui font-bold bg-[#0D3B17] text-white py-3 rounded-lg hover:bg-[#1B5E20]"
              >
                Request Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
