'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiMail, HiCheckCircle } from 'react-icons/hi';

const NewsletterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section ref={ref} className="py-20 bg-coffee-dark relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-golden via-cream to-golden rounded-full blur-3xl"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-coffee-brown/50 to-coffee-dark/50 backdrop-blur-2xl rounded-3xl p-12 md:p-16 border border-golden/30 shadow-2xl overflow-hidden"
        >
          <motion.div
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 bg-gradient-to-r from-golden/5 via-cream/5 to-golden/5 bg-[length:200%_100%]"
          />

          <div className="relative z-10">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-golden to-amber-600 flex items-center justify-center shadow-2xl"
              >
                <HiMail className="text-4xl text-coffee-dark" />
              </motion.div>
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-serif font-bold text-cream text-center mb-4"
            >
              Stay in the Loop
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-cream/70 text-center mb-8 max-w-md mx-auto"
            >
              Subscribe to our newsletter for exclusive offers, new menu items, and coffee brewing tips
            </motion.p>

            {!submitted ? (
              <motion.form
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              >
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 bg-coffee-dark/50 border-2 border-golden/30 rounded-full text-cream placeholder-cream/50 focus:outline-none focus:border-golden transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(212, 175, 55, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-golden to-amber-600 text-coffee-dark font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all whitespace-nowrap"
                >
                  Subscribe Now
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center justify-center gap-3 text-golden"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <HiCheckCircle className="text-5xl" />
                </motion.div>
                <span className="text-xl font-semibold">Thank you for subscribing!</span>
              </motion.div>
            )}

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="text-cream/50 text-xs text-center mt-4"
            >
              We respect your privacy. Unsubscribe at any time.
            </motion.p>
          </div>

          <div className="absolute -top-20 -right-20 w-40 h-40 bg-golden/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cream/20 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
