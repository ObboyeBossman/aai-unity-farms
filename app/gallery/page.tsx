import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { MEDIA } from '@/lib/media';

export const metadata: Metadata = {
  title: 'Farm Gallery | AAI Unity Farms',
  description: 'Photos of AAI Unity Farms — our poultry operations, fresh products, packaging, and export processes in Dormaa Ahenkro, Ghana.',
};

export default function GalleryPage() {
  const photos = [
    MEDIA.gallery01,
    MEDIA.gallery02,
    MEDIA.gallery03,
    MEDIA.gallery04,
    MEDIA.gallery05,
    MEDIA.gallery06,
    MEDIA.heroHome,
    MEDIA.heroAbout,
    MEDIA.heroProducts,
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
              <Image
                src={src}
                alt={`Farm gallery photo ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-farm-surface/0 group-hover:bg-farm-surface/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
