import React from 'react';
import { motion } from 'framer-motion';
import { Coins, Sword, ShoppingBag, Users } from 'lucide-react';

const features = [
  {
    icon: <Coins className="h-8 w-8" />,
    title: 'Play to Earn',
    description: 'Earn real crypto rewards through gameplay and trading.',
    color: '#ff00ff',
  },
  {
    icon: <Sword className="h-8 w-8" />,
    title: 'Epic Battles',
    description: 'Engage in intense PvP combat with unique abilities.',
    color: '#00ffff',
  },
  {
    icon: <ShoppingBag className="h-8 w-8" />,
    title: 'NFT Marketplace',
    description: 'Trade unique in-game items and characters.',
    color: '#7800ff',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Community Driven',
    description: 'Shape the future of the game through DAO governance.',
    color: '#ff00ff',
  },
];

export function Features() {
  return (
    <div className="relative overflow-hidden bg-black py-24">
      {/* Neon gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,_rgba(120,0,255,0.15)_0%,_rgba(0,0,0,0)_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_-20%,_rgba(0,255,255,0.15)_0%,_rgba(0,0,0,0)_60%)]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#7800ff] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl [text-shadow:_0_0_20px_rgba(255,0,255,0.3)]"
          >
            Game Features
          </motion.h2>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="group relative rounded-xl bg-black p-6 ring-1 ring-white/10"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/5 to-transparent" />
              <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_top,_var(--feature-color),_transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-20"
                style={{ '--feature-color': feature.color } as React.CSSProperties} />
              
              <div className="relative">
                <div
                  className="mb-4 inline-block rounded-lg p-3"
                  style={{
                    backgroundColor: `${feature.color}20`,
                    color: feature.color,
                    boxShadow: `0 0 20px ${feature.color}20`,
                  }}
                >
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white"
                    style={{ textShadow: `0 0 10px ${feature.color}50` }}>
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}