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
    <div className="bg-[#FAFAFA] pt-28 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-[#1C1A14] mb-4">Farm Gallery</h1>
          <p className="text-[#424242] font-sans text-lg max-w-2xl mx-auto">
            Take a look inside our operations, from poultry farming in Dormaa Ahenkro to our export packaging processes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((src, index) => (
            <div key={index} className="relative h-64 md:h-80 rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-shadow cursor-pointer">
              <Image 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
