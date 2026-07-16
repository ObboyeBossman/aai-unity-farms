'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ShieldCheck, Leaf, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { MEDIA } from '@/lib/media';
import { StatCounter } from '@/components/StatCounter';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D3B17]/80 via-[#0D3B17]/60 to-[#1C1A14]/90 z-10" />
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={MEDIA.heroHome}
              alt="AAI Unity Farms Landscape"
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
        
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-16"
          >
            <motion.span
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block py-1 px-3 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#FFD700] font-ui text-sm font-bold tracking-wider mb-6 backdrop-blur-sm"
            >
              WELCOME TO AAI UNITY FARMS
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Farming Today <br/> <motion.span animate={{ color: ['#D4AF37', '#FFD700', '#D4AF37'] }} transition={{ duration: 5, repeat: Infinity }} className="text-[#D4AF37]">Feeding Tomorrow</motion.span>
            </h1>
          <p className="text-lg md:text-xl text-[#F1F8E9] max-w-2xl mx-auto mb-10 font-ui">
            Premium poultry products and fresh Ghanaian agricultural exports, delivered with a commitment to quality, integrity, and sustainability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link href="/shop" className="w-full px-8 py-4 bg-[#D4AF37] text-[#0D3B17] font-ui font-bold rounded-lg hover:bg-[#FFD700] transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                Shop Farm Fresh <ArrowRight size={20} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link href="/export" className="w-full px-8 py-4 bg-transparent border-2 border-white text-white font-ui font-bold rounded-lg hover:bg-white hover:text-[#0D3B17] transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
                Export Services <Globe size={20} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Feature / Trust Bar */}
      <div className="bg-gradient-farm text-white py-6 shadow-md relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/20"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex items-center justify-center gap-3 py-2 md:py-0">
              <ShieldCheck className="text-[#FFD700]" size={28} />
              <span className="font-ui font-bold text-lg text-shadow-sm">10+ Years of Excellence</span>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex items-center justify-center gap-3 py-2 md:py-0">
              <CheckCircle2 className="text-[#FFD700]" size={28} />
              <span className="font-ui font-bold text-lg text-shadow-sm">Premium Quality Assured</span>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex items-center justify-center gap-3 py-2 md:py-0">
              <Leaf className="text-[#FFD700]" size={28} />
              <span className="font-ui font-bold text-lg text-shadow-sm">Sustainable Practices</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* About Overview */}
      <section className="py-24 bg-white/40 backdrop-blur-[2px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={MEDIA.gallery01}
                alt="Farm Operations"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-4 border-white/20 rounded-2xl m-4 pointer-events-none"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-[#2E7D32] font-ui font-bold tracking-widest uppercase mb-2">Our Story</h2>
              <h3 className="text-4xl font-display font-bold text-[#1C1A14] mb-6">A decade of agricultural excellence in Ghana</h3>
              <p className="text-[#424242] leading-relaxed mb-6 font-sans">
                AAI Unity Farms is a trusted poultry and food production business specializing in quality poultry products, fresh eggs, and nutritious food solutions. Located in Dormaa Ahenkro, Ghana, we bridge the gap between local farming excellence and international export standards.
              </p>
              <p className="text-[#424242] leading-relaxed mb-8 font-sans">
                We are committed to providing healthy, affordable, and reliable farm products while maintaining high standards in farming, quality, and customer satisfaction.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-[#0D3B17] font-ui font-bold hover:text-[#2E7D32] transition-colors border-b-2 border-[#D4AF37] pb-1">
                Read our full story <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Two Audiences Split */}
      <section className="py-24 bg-[#FAFAF5]/50 backdrop-blur-[2px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-[#1C1A14] mb-4">How Can We Serve You?</h2>
            <p className="text-[#424242] max-w-2xl mx-auto font-sans text-lg">
              Whether you are feeding a family in Ghana or importing agricultural commodities to Europe, we have a dedicated solution for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Local Market */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-64 relative overflow-hidden">
                <Image src={MEDIA.freshEggs} alt="Local Poultry" fill className="object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B17]/90 via-[#0D3B17]/40 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 text-3xl font-display font-bold text-white">Local Poultry & Eggs</h3>
              </div>
              <div className="p-8">
                <p className="text-[#424242] mb-6 font-sans">Farm-fresh eggs, live and dressed broiler chickens, day-old chicks, and premium poultry feed for the Ghanaian market.</p>
                <Link href="/products" className="inline-flex items-center justify-center w-full py-3 bg-[#F1F8E9] text-[#0D3B17] font-ui font-bold rounded-lg hover:bg-[#C8E6C9] transition-colors">
                  View Local Catalogue
                </Link>
              </div>
            </motion.div>

            {/* Export Market */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-64 relative overflow-hidden">
                <Image src={MEDIA.ghanaianYam} alt="Export Commodities" fill className="object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/90 via-[#D4AF37]/40 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 text-3xl font-display font-bold text-white">International Export</h3>
              </div>
              <div className="p-8">
                <p className="text-[#424242] mb-6 font-sans">Exporting premium Ghanaian yams, sweet corn, and soybeans to wholesale buyers and importers in the UK and European Union.</p>
                <Link href="/export" className="inline-flex items-center justify-center w-full py-3 bg-gradient-farm text-white font-ui font-bold rounded-lg hover:opacity-90 transition-opacity">
                  View Export Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-farm animate-gradient-xy text-white text-center relative overflow-hidden shadow-inner">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${MEDIA.gallery02})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20 glass-panel-dark rounded-2xl p-8"
          >
            <div className="flex flex-col py-4 md:py-0">
              <StatCounter end={50} suffix=",000+" duration={2500} />
              <span className="font-ui text-[#C8E6C9] mt-2 font-medium">Eggs Per Week</span>
            </div>
            <div className="flex flex-col py-4 md:py-0">
              <StatCounter end={10} suffix="+" duration={1500} />
              <span className="font-ui text-[#C8E6C9] mt-2 font-medium">Years in Business</span>
            </div>
            <div className="flex flex-col py-4 md:py-0">
              <StatCounter end={500} suffix="+" duration={2000} />
              <span className="font-ui text-[#C8E6C9] mt-2 font-medium">Clients Served</span>
            </div>
            <div className="flex flex-col py-4 md:py-0">
              <StatCounter end={5} suffix="" duration={1500} />
              <span className="font-ui text-[#C8E6C9] mt-2 font-medium">Export Countries</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#D4AF37]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-[#0D3B17] mb-6">Ready to work with us?</h2>
          <p className="text-[#1C1A14] text-lg font-sans mb-10">
            Whether you need a tray of eggs or a container of yams, our team is ready to supply you with the finest agricultural products from Ghana.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-[#0D3B17] text-white font-ui font-bold rounded-lg hover:bg-[#1B5E20] transition-colors">
              Contact Us
            </Link>
            <Link href="/quote" className="w-full sm:w-auto px-8 py-4 bg-white text-[#0D3B17] font-ui font-bold rounded-lg hover:bg-[#F5F5F5] transition-colors shadow-sm">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
