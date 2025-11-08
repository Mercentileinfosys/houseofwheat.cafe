'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const FloatingElements = () => {
  const beans = Array.from({ length: 15 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {beans.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-golden/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -20,
          }}
          animate={{
            y: window.innerHeight + 20,
            x: Math.random() * window.innerWidth,
            rotate: 360,
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          style={{
            filter: 'blur(1px)',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
