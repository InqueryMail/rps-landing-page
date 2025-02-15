import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Filter,
  Star,
  StarHalf,
  Shield,
  CreditCard,
  ChevronDown,
} from 'lucide-react';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Cyber Katana',
    price: 299.99,
    description: 'Enhanced digital blade with neural interface',
    image: 'https://images.unsplash.com/photo-1589187832032-3e560ed4e6b9?auto=format&fit=crop&q=80&w=800',
    category: 'Weapons',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Neural Implant',
    price: 599.99,
    description: 'Military-grade cognitive enhancement module',
    image: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&q=80&w=800',
    category: 'Augments',
    rating: 5.0,
  },
  {
    id: 3,
    name: 'Holo Visor',
    price: 199.99,
    description: 'Advanced AR display with threat detection',
    image: 'https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?auto=format&fit=crop&q=80&w=800',
    category: 'Gear',
    rating: 4.0,
  },
  {
    id: 4,
    name: 'Quantum Shield',
    price: 449.99,
    description: 'Personal defense system with phase technology',
    image: 'https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?auto=format&fit=crop&q=80&w=800',
    category: 'Defense',
    rating: 4.8,
  },
];

const categories = ['All', 'Weapons', 'Augments', 'Gear', 'Defense'];

export function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [cartCount] = useState(0);
  const [wishlistCount] = useState(0);

  const filteredProducts = products.filter(
    product => selectedCategory === 'All' || product.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-12">
            <h1 className="text-2xl font-bold text-white">
              CRYPTO<span className="text-[#ff00ff]">MARKET</span>
            </h1>
            <nav className="hidden space-x-8 md:block">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-sm transition-colors ${
                    selectedCategory === category
                      ? 'text-[#00ffff] [text-shadow:_0_0_10px_rgba(0,255,255,0.5)]'
                      : 'text-gray-400 hover:text-[#00ffff]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search products..."
                className="w-64 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-gray-500 backdrop-blur-lg transition-colors focus:border-[#ff00ff] focus:outline-none focus:ring-2 focus:ring-[#ff00ff]/20"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
            </div>

            <div className="flex items-center gap-4">
              <button className="relative text-gray-400 hover:text-[#ff00ff]">
                <Heart className="h-6 w-6" />
                {wishlistCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff00ff] text-xs text-white">
                    {wishlistCount}
                  </span>
                )}
              </button>
              <button className="relative text-gray-400 hover:text-[#ff00ff]">
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff00ff] text-xs text-white">
                    {cartCount}
                  </span>
                )}
              </button>
              <button className="text-gray-400 hover:text-[#ff00ff]">
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,_rgba(120,0,255,0.15)_0%,_rgba(0,0,0,0)_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_-20%,_rgba(0,255,255,0.15)_0%,_rgba(0,0,0,0)_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Upgrade Your{' '}
              <span className="bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#7800ff] bg-clip-text text-transparent">
                Arsenal
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              Discover cutting-edge cybernetic enhancements and digital weaponry
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-4">
          {/* Filters and Sorting */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-[#ff00ff]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white backdrop-blur-lg focus:border-[#ff00ff] focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#00ffff]" />
                <span className="text-sm text-gray-400">Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-[#00ffff]" />
                <span className="text-sm text-gray-400">Crypto Accepted</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-xl bg-white/5 p-4 backdrop-blur-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
                <div className="relative">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">
                        {product.name}
                      </h3>
                      <button className="text-gray-400 hover:text-[#ff00ff]">
                        <Heart className="h-5 w-5" />
                      </button>
                    </div>
                    <p className="mt-1 text-sm text-gray-400">
                      {product.description}
                    </p>
                    <div className="mt-2 flex items-center gap-1">
                      {Array.from({ length: Math.floor(product.rating) }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-current text-[#00ffff]"
                        />
                      ))}
                      {product.rating % 1 !== 0 && (
                        <StarHalf className="h-4 w-4 fill-current text-[#00ffff]" />
                      )}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xl font-bold text-white">
                        ${product.price}
                      </span>
                      <button className="rounded-lg bg-[#ff00ff] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#ff00ff]/80">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(120,0,255,0.15)_0%,_rgba(0,0,0,0)_70%)]" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="mb-4 text-2xl font-bold text-white">
                Stay Updated with Latest Tech
              </h3>
              <p className="mb-6 text-gray-400">
                Subscribe to our newsletter for exclusive deals and cyber news
              </p>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-gray-500 backdrop-blur-lg transition-colors focus:border-[#ff00ff] focus:outline-none focus:ring-2 focus:ring-[#ff00ff]/20"
                />
                <button className="rounded-lg bg-[#00ffff] px-6 py-2 font-semibold text-black transition-all hover:bg-[#00ffff]/80">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}