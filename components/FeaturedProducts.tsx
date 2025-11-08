'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { HiStar, HiHeart } from 'react-icons/hi';

const FeaturedProducts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const products = [
    {
      name: 'Signature Espresso',
      desc: 'Rich, bold, and perfectly balanced',
      price: 'RM 8.90',
      image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&q=80',
      rating: 4.9,
      reviews: 128,
      tag: 'Best Seller',
      color: 'from-amber-500/20 to-orange-600/20',
    },
    {
      name: 'Vanilla Latte',
      desc: 'Smooth vanilla meets premium coffee',
      price: 'RM 12.90',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80',
      rating: 4.8,
      reviews: 96,
      tag: 'Popular',
      color: 'from-yellow-500/20 to-amber-600/20',
    },
    {
      name: 'Mocha Delight',
      desc: 'Chocolate bliss in every sip',
      price: 'RM 13.90',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&q=80',
      rating: 4.9,
      reviews: 145,
      tag: 'New',
      color: 'from-brown-500/20 to-amber-700/20',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-coffee-dark via-coffee-brown to-coffee-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-golden via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-golden text-sm tracking-widest uppercase mb-4">HANDPICKED FOR YOU</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">
            Featured Beverages
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            Our most loved creations, crafted with passion and perfection
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                animate={{
                  rotateY: hoveredIndex === index ? 5 : 0,
                  z: hoveredIndex === index ? 50 : 0,
                }}
                transition={{ duration: 0.4 }}
                className="relative bg-gradient-to-br from-coffee-brown/40 to-coffee-dark/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-golden/20 hover:border-golden/50 shadow-2xl hover:shadow-golden/20 transition-all duration-500"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute top-4 right-4 z-20">
                  <motion.button
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-coffee-dark/80 backdrop-blur-sm rounded-full flex items-center justify-center text-cream hover:text-red-500 transition-colors"
                  >
                    <HiHeart size={20} />
                  </motion.button>
                </div>

                <div className="absolute top-4 left-4 z-20">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                    className="px-4 py-2 bg-gradient-to-r from-golden to-amber-600 rounded-full text-coffee-dark text-xs font-bold shadow-lg"
                  >
                    {product.tag}
                  </motion.div>
                </div>

                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      rotate: hoveredIndex === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className={`absolute inset-0 bg-gradient-to-t ${product.color} to-transparent opacity-60`}></div>
                </div>

                <div className="p-6 relative">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <HiStar
                          key={i}
                          className={`${
                            i < Math.floor(product.rating) ? 'text-golden' : 'text-cream/20'
                          } text-sm`}
                        />
                      ))}
                    </div>
                    <span className="text-cream/60 text-sm">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-cream mb-2 group-hover:text-golden transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-cream/70 text-sm mb-4 leading-relaxed">
                    {product.desc}
                  </p>

                  <div className="flex items-center justify-between">
                    <motion.div
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                      }}
                      className="text-3xl font-bold text-golden"
                    >
                      {product.price}
                    </motion.div>
                    <motion.button
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-6 py-3 bg-gradient-to-r from-golden to-amber-600 text-coffee-dark font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all"
                    >
                      Order Now
                    </motion.button>
                  </div>
                </div>

                <motion.div
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 0.8,
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-golden/10 via-transparent to-cream/10 pointer-events-none rounded-3xl"
                ></motion.div>
              </motion.div>

              <motion.div
                animate={{
                  opacity: hoveredIndex === index ? 0.3 : 0,
                  scale: hoveredIndex === index ? 1 : 0.8,
                }}
                className="absolute -inset-4 bg-gradient-to-r from-golden via-cream to-golden blur-2xl -z-10 rounded-3xl"
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
