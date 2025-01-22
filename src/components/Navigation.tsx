import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ShoppingBag } from 'lucide-react';

export function Navigation() {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home', icon: <Home className="h-5 w-5" /> },
    { path: '/marketplace', label: 'NFT Marketplace', icon: <ShoppingBag className="h-5 w-5" /> },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-2xl font-bold text-white">
          CYBER<span className="text-[#ff00ff]">VERSE</span>
        </Link>

        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`group relative flex items-center gap-2 text-sm transition-colors ${
                location.pathname === link.path
                  ? 'text-[#00ffff]'
                  : 'text-gray-400 hover:text-[#00ffff]'
              }`}
            >
              {link.icon}
              <span>{link.label}</span>
              {location.pathname === link.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-4 h-0.5 w-full bg-[#00ffff]"
                  initial={false}
                />
              )}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}