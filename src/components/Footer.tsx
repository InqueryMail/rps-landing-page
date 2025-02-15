import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Disc as Discord, Github, Mail, Globe } from 'lucide-react';

const socialLinks = [
  { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
  { icon: <Discord className="h-5 w-5" />, href: '#', label: 'Discord' },
  { icon: <Github className="h-5 w-5" />, href: '#', label: 'Github' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black py-12">
      {/* Neon glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,_rgba(120,0,255,0.15)_0%,_rgba(0,0,0,0)_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_-20%,_rgba(0,255,255,0.15)_0%,_rgba(0,0,0,0)_60%)]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white">
              CRYPTO<span className="text-[#00ff88]">QUEST</span>
            </h3>
            <p className="text-gray-400">
              The next generation of blockchain gaming, where cyberpunk meets the metaverse.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-[#ff00ff] [text-shadow:_0_0_10px_rgba(255,0,255,0.5)]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-[#ff00ff]">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-[#ff00ff]">
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-[#ff00ff]">
                  Documentation
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-[#00ffff] [text-shadow:_0_0_10px_rgba(0,255,255,0.5)]">
              Contact Us
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="h-4 w-4 text-[#00ffff]" />
                <a href="mailto:developers.cryptoquest.studio" className="hover:text-[#00ffff]">
                developers.cryptoquest.studio
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Globe className="h-4 w-4 text-[#00ffff]" />
                <a href="https://cryptoquest.stuido" className="hover:text-[#00ffff]">
                  cryptoquest.studio
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-[#7800ff] [text-shadow:_0_0_10px_rgba(120,0,255,0.5)]">
              Join Community
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 transition-transform hover:scale-110"
                >
                  <div className="absolute inset-0 rounded-full bg-[#7800ff] opacity-0 blur transition-opacity group-hover:opacity-30" />
                  <span className="relative text-gray-400 transition-colors group-hover:text-[#7800ff]">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} CYBERVERSE. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}