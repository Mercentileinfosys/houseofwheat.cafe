'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const ParallaxSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-coffee-dark">
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-full max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div style={{ scale }} className="relative z-10">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-golden text-sm tracking-widest uppercase mb-4"
            >
              PREMIUM EXPERIENCE
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-serif font-bold text-cream mb-6 leading-tight"
            >
              Every Cup Tells a Story
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-cream/80 text-lg leading-relaxed mb-8"
            >
              From bean to cup, we ensure every step of the journey is crafted with precision and care. 
              Our expert baristas bring years of experience to create the perfect brew just for you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="flex-1 bg-gradient-to-br from-golden/20 to-transparent backdrop-blur-sm rounded-2xl p-6 border border-golden/20"
              >
                <div className="text-4xl font-bold text-golden mb-2">100%</div>
                <div className="text-cream/70">Organic Beans</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="flex-1 bg-gradient-to-br from-cream/20 to-transparent backdrop-blur-sm rounded-2xl p-6 border border-cream/20"
              >
                <div className="text-4xl font-bold text-cream mb-2">24/7</div>
                <div className="text-cream/70">Fresh Roasted</div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: y2 }} className="relative">
            <div className="relative w-full h-[600px]">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-r from-golden/20 via-cream/20 to-golden/20 rounded-full blur-3xl"
              ></motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 w-full h-full"
              >
                <Image
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80"
                  alt="Premium Coffee"
                  fill
                  className="object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-golden/10 via-transparent to-cream/10 rounded-3xl"></div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-golden/30 backdrop-blur-xl rounded-2xl border border-golden/40 p-6 shadow-2xl"
              >
                <div className="text-3xl font-bold text-cream mb-2">Fresh</div>
                <div className="text-cream/70 text-sm">Daily Roasted</div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-cream/30 backdrop-blur-xl rounded-2xl border border-cream/40 p-6 shadow-2xl"
              >
                <div className="text-3xl font-bold text-golden mb-2">Premium</div>
                <div className="text-cream/70 text-sm">Quality Assured</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ParallaxSection;
