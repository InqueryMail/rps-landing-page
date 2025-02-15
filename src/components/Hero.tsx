import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';

function CyberSphere() {
  return (
    <mesh>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#ff00ff"
        wireframe
        emissive="#ff00ff"
        emissiveIntensity={0.8}
      />
    </mesh>
  );
}

export function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Neon gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,_rgba(120,0,255,0.15)_0%,_rgba(0,0,0,0)_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_-20%,_rgba(0,255,255,0.15)_0%,_rgba(0,0,0,0)_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.8)_100%)]" />
      
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} color="#ff00ff" intensity={2} />
            <pointLight position={[-10, -10, -10]} color="#00ffff" intensity={2} />
            <CyberSphere />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="mb-8 inline-block rounded-full bg-black/50 px-6 py-2 backdrop-blur-sm"
          >
            <span className="bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#7800ff] bg-clip-text text-xl font-semibold text-transparent">
              Welcome to the Future
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-5xl font-bold text-white md:text-7xl [text-shadow:_0_0_20px_rgba(255,0,255,0.5)]"
          >
            Crypto<span className="text-[#ff00ff]">Quest</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-lg text-[#00ffff] md:text-xl [text-shadow:_0_0_10px_rgba(0,255,255,0.5)]"
          >
            The Next Generation of Blockchain Gaming
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-[#ff00ff] px-8 py-3 text-white transition-all hover:scale-105 hover:bg-[#ff00ff]/80">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.4)_0%,_rgba(255,255,255,0)_70%)] opacity-0 transition-opacity group-hover:opacity-100" />
              <Gamepad2 className="h-5 w-5" />
              <span className="font-semibold">Play Now</span>
            </button>
            
            <button className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg border-2 border-[#00ffff] bg-transparent px-8 py-3 text-[#00ffff] transition-all hover:scale-105 hover:bg-[#00ffff]/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.2)_0%,_rgba(0,255,255,0)_70%)] opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="font-semibold [text-shadow:_0_0_10px_rgba(0,255,255,0.5)]">Connect Wallet</span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}