'use client';

import React from 'react';
import Image from 'next/image';
import { MEDIA } from '@/lib/media';
import { motion } from 'motion/react';

const shopifyEase = [0.2, 0, 0, 1] as const;

export default function GalleryPage() {
  const photos = [
    MEDIA.gallery01,
    MEDIA.gallery02,
    MEDIA.gallery03,
    MEDIA.gallery04,
    MEDIA.gallery05,
    MEDIA.gallery06,
    MEDIA.gallery07,
    MEDIA.gallery08,
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16 flex flex-col items-center">
          <span className="eyebrow">Behind The Farm</span>
          <h1 className="type-display text-farm-text mb-4">Farm Gallery</h1>
          <p className="type-body text-farm-text-muted mx-auto">
            Take a look inside our operations, from poultry farming in Dormaa Ahenkro to our export packaging processes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((src, index) => (
            <div
              key={index}
              className="relative h-64 md:h-80 rounded-xl overflow-hidden border border-farm-border group cursor-pointer"
            >
              {/* Photo — zooms on hover */}
              <Image
                src={src}
                alt={`Farm gallery photo ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                referrerPolicy="no-referrer"
              />

              {/* Glassmorphism overlay — fades in after zoom starts */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100
                              backdrop-blur-md
                              bg-farm-surface/30
                              flex flex-col items-center justify-center gap-4">

                {/* Logo */}
                <motion.div
                  className="relative w-16 h-16 drop-shadow-2xl"
                  style={{ filter: 'drop-shadow(0 4px 24px rgba(212,175,55,0.35))' }}
                >
                  <Image
                    src="/logo.png"
                    alt="AAI Unity Farms"
                    fill
                    className="object-contain"
                  />
                </motion.div>

                {/* Wordmark */}
                <p className="type-label text-white/90 tracking-widest drop-shadow-md">
                  AAI Unity Farms
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

