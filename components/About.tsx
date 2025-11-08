'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="py-20 bg-coffee-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cream rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 md:order-1"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-golden/30 to-transparent z-10 rounded-2xl"></div>
              <Image
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
                alt="Premium Coffee Cup"
                fill
                className="object-cover"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-golden rounded-full flex items-center justify-center z-20 shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-coffee-dark">10+</div>
                  <div className="text-xs text-coffee-dark">Years</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-golden text-sm tracking-widest uppercase mb-4"
            >
              ABOUT US
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-5xl font-serif font-bold text-cream mb-6 leading-tight"
            >
              Crafted with Love, Served with Passion
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="space-y-4 text-cream/80 leading-relaxed"
            >
              <p>
                At House of Wheat Café, we believe that every cup of coffee tells a story. Located in the heart of Cheras, we&apos;ve been serving the community with premium artisan coffee and freshly baked goods for over a decade.
              </p>
              <p>
                Our passion lies in sourcing the finest beans from around the world and roasting them to perfection. Each beverage is crafted by our skilled baristas who bring years of expertise and genuine care to every cup.
              </p>
              <p>
                From our signature espresso blends to our handcrafted pastries baked fresh daily, we&apos;re committed to delivering an exceptional experience that keeps our customers coming back for more. We&apos;re not just a café – we&apos;re a community hub where memories are made over great coffee.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-8 grid grid-cols-2 gap-6"
            >
              <div className="text-center p-6 bg-coffee-brown/50 rounded-xl border border-golden/20">
                <div className="text-4xl font-bold text-golden mb-2">50+</div>
                <div className="text-cream/70 text-sm">Menu Items</div>
              </div>
              <div className="text-center p-6 bg-coffee-brown/50 rounded-xl border border-golden/20">
                <div className="text-4xl font-bold text-golden mb-2">1000+</div>
                <div className="text-cream/70 text-sm">Happy Customers</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              className="mt-8"
            >
              <motion.a
                href="#menu"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(212, 175, 55, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-golden text-coffee-dark font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                Explore Our Story
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
