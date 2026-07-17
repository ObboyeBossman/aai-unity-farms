'use client';

import React from 'react';
import { motion } from 'motion/react';

export function AnimatedGrid({ children }: { children: React.ReactNode }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
    >
      {React.Children.map(children, (child) => (
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="h-full"
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
