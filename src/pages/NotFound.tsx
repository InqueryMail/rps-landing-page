import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-[60vh] items-center justify-center"
    >
      <div className="text-center">
        <div className="mb-6 flex justify-center">
          <AlertTriangle className="h-16 w-16 text-[#ff00ff]" />
        </div>
        <h1 className="mb-4 text-4xl font-bold text-white">404 - Page Not Found</h1>
        <p className="mb-8 text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate('/')}
          className="rounded-lg bg-[#ff00ff] px-6 py-3 font-semibold text-white transition-all hover:bg-[#ff00ff]/80"
        >
          Return Home
        </button>
      </div>
    </motion.div>
  );
}