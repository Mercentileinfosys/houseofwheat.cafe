'use client';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface StatItemProps {
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

const StatItem = ({ end, label, suffix = '', prefix = '' }: StatItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 50,
    damping: 30,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [isInView, end, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        (ref.current as HTMLElement).textContent = `${prefix}${Math.floor(latest)}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
      animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
      transition={{ duration: 0.8, type: "spring" }}
      className="relative group"
    >
      <div className="relative bg-gradient-to-br from-coffee-brown/50 to-coffee-dark/50 backdrop-blur-lg rounded-2xl p-8 border border-golden/20 hover:border-golden/50 transition-all duration-300 hover:shadow-2xl hover:shadow-golden/20 hover:-translate-y-2">
        <div className="absolute inset-0 bg-gradient-to-br from-golden/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <motion.div
          ref={ref}
          className="text-5xl md:text-6xl font-bold text-gradient mb-2 relative z-10"
        >
          0
        </motion.div>
        <div className="text-cream/70 text-sm md:text-base uppercase tracking-wider relative z-10">
          {label}
        </div>
        <div className="absolute -top-2 -right-2 w-20 h-20 bg-golden/10 rounded-full blur-2xl group-hover:bg-golden/20 transition-all"></div>
      </div>
    </motion.div>
  );
};

const StatsCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { end: 10, label: 'Years Experience', suffix: '+' },
    { end: 50, label: 'Menu Items', suffix: '+' },
    { end: 1000, label: 'Happy Customers', suffix: '+' },
    { end: 15, label: 'Expert Baristas' },
  ];

  return (
    <section ref={ref} className="py-20 bg-coffee-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-golden/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cream/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-golden text-sm tracking-widest uppercase mb-4">OUR ACHIEVEMENTS</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream">
            Numbers That Matter
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
