'use client';

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

const shopifyEase = [0.2, 0, 0, 1] as const;

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('aai_announcement_dismissed');
    if (!dismissed) setIsVisible(true);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem('aai_announcement_dismissed', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.32, ease: shopifyEase }}
          className="overflow-hidden"
        >
          <div className="bg-farm-gold px-6 py-2.5 flex items-center justify-between border-b border-farm-gold/20">
            <div className="flex-1 text-center">
              <span className="type-label text-farm-surface/90 tracking-wide">
                <span className="hidden sm:inline">Now exporting premium Ghanaian yams and agricultural commodities to the UK and EU.{' '}</span>
                <span className="sm:hidden">UK/EU Export Programme now open.{' '}</span>
              </span>
              <Link
                href="/export"
                className="type-label text-farm-surface underline underline-offset-2 hover:text-farm-surface/70 transition-colors duration-200 ml-1"
              >
                Learn more
              </Link>
            </div>
            <button
              onClick={dismiss}
              className="p-1 ml-4 text-farm-surface/60 hover:text-farm-surface hover:bg-farm-surface/10 rounded-full transition-colors duration-200 shrink-0"
              aria-label="Dismiss announcement"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
