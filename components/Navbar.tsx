'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Menu, X, ShoppingCart, Sun, Moon } from 'lucide-react';
import { useCart } from './CartProvider';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useCart();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
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

  const isSolid = isScrolled;

  return (
    <header className={`fixed w-full z-40 transition-all duration-[400ms] ease-[cubic-bezier(0.2,0,0,1)] ${isSolid ? 'glass-panel py-3 border-b border-farm-border shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className={`relative transition-all duration-300 ${isSolid ? 'h-8 w-8' : 'h-12 w-12'}`}>
              <Image
                src="/logo.png"
                alt="AAI Unity Farms Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-display font-bold leading-none text-farm-text transition-colors group-hover:text-farm-gold">
                AAI Unity Farms
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`type-label transition-colors duration-[200ms] ease-[cubic-bezier(0.2,0,0,1)] ${
                  pathname === link.href
                    ? 'text-farm-gold'
                    : 'text-farm-text-muted hover:text-farm-text'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-6 border-l border-farm-border pl-6">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 text-farm-text-muted hover:text-farm-text hover:bg-farm-surface-card rounded-full transition-all active:scale-[0.97]"
                  aria-label="Toggle Dark Mode"
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              )}
              <Link href="/shop" className="relative p-2 text-farm-text hover:text-farm-gold transition-colors">
                <ShoppingCart size={24} />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 bg-farm-gold text-farm-surface text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>
              <Link
                href="/quote"
                className="btn-primary py-2 px-6 rounded-full text-sm active:scale-[0.97]"
              >
                Request Quote
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 text-farm-text-muted hover:text-farm-text transition-colors"
              >
                {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            )}
            <Link href="/shop" className="relative p-2 text-farm-text">
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-farm-gold text-farm-surface text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-farm-text hover:text-farm-gold transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-panel border-b border-farm-border">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-8 py-4 type-label border-b border-farm-border transition-colors ${
                  pathname === link.href ? 'text-farm-gold' : 'text-farm-text-muted'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-8 py-6">
              <Link
                href="/quote"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full justify-center active:scale-[0.97]"
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
