'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 100,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-coffee-dark via-coffee-brown to-coffee-dark"></div>
      
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: [`${mousePosition.x / 50}px ${mousePosition.y / 50}px`],
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-golden rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cream rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </motion.div>

      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at center, transparent 0%, rgba(212, 175, 55, 0.1) 100%)',
          x: useTransform(mouseX, [-1, 1], [-50, 50]),
          y: useTransform(mouseY, [-1, 1], [-50, 50]),
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-golden/20 to-amber-600/20 backdrop-blur-sm rounded-full border border-golden/30"
          >
            <p className="text-golden text-sm md:text-base tracking-widest uppercase">
              Black Coffee is Awesome
            </p>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight"
          >
            <span className="inline-block bg-gradient-to-r from-cream via-golden to-cream bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Welcome to House of Wheat Café
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-cream/80 mb-8 leading-relaxed"
          >
            Cheras' favorite destination for fresh bakes, artisan coffee, and warm memories.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(212, 175, 55, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-golden to-amber-600 text-coffee-dark font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">View Menu</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-600 to-golden"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(245, 230, 211, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-transparent border-2 border-cream text-cream font-semibold rounded-full transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-coffee-dark transition-colors">Reserve a Table</span>
              <motion.div
                className="absolute inset-0 bg-cream"
                initial={{ y: '100%' }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex gap-6 mt-8"
          >
            {[1, 2, 3, 4].map((dot, index) => (
              <motion.div
                key={dot}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.5 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="w-3 h-3 rounded-full bg-golden/50 hover:bg-golden cursor-pointer transition-all duration-300 shadow-lg hover:shadow-golden/50"
              ></motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
          style={{ perspective: '1000px' }}
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            className="relative w-full h-[400px] md:h-[600px]"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-golden/30 to-cream/30 rounded-full filter blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              style={{
                rotateZ: useTransform(mouseX, [-1, 1], [-5, 5]),
              }}
              className="relative w-full h-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
                alt="Premium Coffee"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>

            <motion.div
              className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-golden/30 to-amber-600/30 backdrop-blur-xl rounded-2xl border border-golden/40 flex items-center justify-center shadow-2xl"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                transformStyle: 'preserve-3d',
                transform: 'translateZ(50px)',
              }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-cream">100%</div>
                <div className="text-golden text-xs">Organic</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-cream/30 to-golden/30 backdrop-blur-xl rounded-full border border-cream/40 flex items-center justify-center shadow-2xl"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              style={{
                transformStyle: 'preserve-3d',
                transform: 'translateZ(50px)',
              }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-golden">★</div>
                <div className="text-cream text-xs">Premium</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cream/50 rounded-full flex items-start justify-center p-2 cursor-pointer group hover:border-golden transition-colors"
        >
          <div className="w-1 h-2 bg-golden rounded-full group-hover:h-3 transition-all"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
