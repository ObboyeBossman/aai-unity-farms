'use client';

import Link from 'next/link';
import { Globe, Plane, ShieldCheck, FileCheck } from 'lucide-react';
import { motion } from 'motion/react';

export function ExportWhyUs() {
  return (
    <section className="py-24 bg-[#0D3B17] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#C8960C] font-ui font-bold tracking-widest uppercase mb-2">Export Standards</h2>
            <h3 className="text-4xl font-display font-bold text-white mb-8">Why Partner With Us?</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#1B5E20] flex items-center justify-center shrink-0 group-hover:bg-[#C8960C] transition-colors">
                  <ShieldCheck className="text-[#C8960C] group-hover:text-[#0D3B17] transition-colors" />
                </div>
                <div>
                  <h4 className="font-ui font-bold text-xl mb-1">Quality Assurance</h4>
                  <p className="text-[#C8E6C9] font-sans">Every shipment undergoes rigorous quality control to ensure only premium grade produce leaves our facility.</p>
                </div>
              </div>
              
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#1B5E20] flex items-center justify-center shrink-0 group-hover:bg-[#C8960C] transition-colors">
                  <FileCheck className="text-[#C8960C] group-hover:text-[#0D3B17] transition-colors" />
                </div>
                <div>
                  <h4 className="font-ui font-bold text-xl mb-1">Compliance & Documentation</h4>
                  <p className="text-[#C8E6C9] font-sans">Full compliance with UK and EU phytosanitary regulations. We handle the necessary export documentation seamlessly.</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#1B5E20] flex items-center justify-center shrink-0 group-hover:bg-[#C8960C] transition-colors">
                  <Plane className="text-[#C8960C] group-hover:text-[#0D3B17] transition-colors" />
                </div>
                <div>
                  <h4 className="font-ui font-bold text-xl mb-1">Reliable Logistics</h4>
                  <p className="text-[#C8E6C9] font-sans">Strategic partnerships with freight forwarders ensure timely and temperature-controlled delivery to your port.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel-dark p-10 rounded-2xl text-center shadow-2xl"
          >
            <Globe className="mx-auto text-[#C8960C] mb-6 animate-pulse" size={64} />
            <h4 className="text-2xl font-display font-bold mb-4">Serving Europe</h4>
            <p className="text-[#C8E6C9] font-sans mb-8">We are actively expanding our export network across the United Kingdom and the European Union.</p>
            <Link href="/quote" className="inline-block w-full py-4 bg-gradient-farm text-white font-ui font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              Request Export Quote
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
