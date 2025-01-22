import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { ShoppingBag } from 'lucide-react';

export function Home() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Features />
      
      {/* NFT Marketplace Card */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,_rgba(120,0,255,0.15)_0%,_rgba(0,0,0,0)_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_-20%,_rgba(0,255,255,0.15)_0%,_rgba(0,0,0,0)_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg"
          >
            <button
              onClick={() => navigate('/marketplace')}
              className="group relative block w-full p-8 text-left transition-all hover:bg-white/10"
            >
              <div className="flex items-center gap-6">
                <div className="rounded-lg bg-[#ff00ff]/20 p-4">
                  <ShoppingBag className="h-8 w-8 text-[#ff00ff]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    NFT Marketplace
                  </h3>
                  <p className="mt-2 text-gray-400">
                    Discover and trade unique digital assets in our cyberpunk-themed NFT marketplace
                  </p>
                </div>
                <div className="ml-auto">
                  <span className="rounded-full bg-[#ff00ff]/20 px-4 py-2 text-sm font-medium text-[#ff00ff] transition-colors group-hover:bg-[#ff00ff] group-hover:text-white">
                    Explore Now →
                  </span>
                </div>
              </div>
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}