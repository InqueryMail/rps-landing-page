import React from 'react';
import { motion } from 'framer-motion';
import { Marketplace } from '../components/Marketplace';

export function NFTMarketplace() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Marketplace />
    </motion.div>
  );
}