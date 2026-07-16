import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { MEDIA } from '@/lib/media';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog & News | AAI Unity Farms',
  description: 'Farming tips, company news, export updates, and agricultural insights from the team at AAI Unity Farms.',
};

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'Best Practices for Rearing Layer Chickens in Ghana',
      excerpt: 'Discover the essential tips and daily routines needed to maintain healthy layer chickens and maximize egg production on your farm.',
      date: 'Oct 12, 2023',
      category: 'Farming Tips',
      image: MEDIA.blogPost1
    },
    {
      id: 2,
      title: 'AAI Unity Farms Expands Yam Export Operations to the UK',
      excerpt: 'We are thrilled to announce our new dedicated processing facility designed specifically to meet the growing demand for premium Ghanaian yams in the UK.',
      date: 'Nov 05, 2023',
      category: 'Company News',
      image: MEDIA.blogPost2
    },
    {
      id: 3,
      title: 'Understanding Poultry Feed: Starter vs. Grower Mash',
      excerpt: 'Not all feed is created equal. Learn how to choose the right nutritional mix for your birds at every stage of their development.',
      date: 'Jan 18, 2024',
      category: 'Nutrition',
      image: MEDIA.blogPost3
    }
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-[#1C1A14] mb-4">Blog & News</h1>
          <p className="text-[#424242] font-sans text-lg max-w-2xl mx-auto">
            Insights, farming tips, and the latest updates from AAI Unity Farms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-[#D4AF37] text-[#0D3B17] px-3 py-1 rounded-full text-xs font-ui font-bold">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[#757575] font-ui text-sm mb-3 block">{post.date}</span>
                <h3 className="font-display font-bold text-xl text-[#1C1A14] mb-3 group-hover:text-[#2E7D32] transition-colors">{post.title}</h3>
                <p className="text-[#424242] font-sans text-sm leading-relaxed mb-6 flex-grow">{post.excerpt}</p>
                
                <Link href="#" className="inline-flex items-center gap-2 text-[#0D3B17] font-ui font-bold hover:text-[#D4AF37] transition-colors mt-auto">
                  Read Article <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
