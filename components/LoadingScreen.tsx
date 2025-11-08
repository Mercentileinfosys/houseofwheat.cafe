'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-coffee-dark flex items-center justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 w-40 h-40 border-4 border-golden/20 border-t-golden rounded-full"
            ></motion.div>

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-2 w-36 h-36 border-4 border-cream/20 border-b-cream rounded-full"
            ></motion.div>

            <div className="relative z-10 flex flex-col items-center justify-center w-40 h-40">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="text-4xl font-serif font-bold text-gradient mb-4"
              >
                HoW
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-1 bg-gradient-to-r from-golden via-cream to-golden rounded-full"
              ></motion.div>
              <div className="text-cream/60 text-sm mt-2">{progress}%</div>
            </div>

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-10 bg-gradient-to-r from-golden/10 via-cream/10 to-golden/10 rounded-full blur-3xl"
            ></motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
