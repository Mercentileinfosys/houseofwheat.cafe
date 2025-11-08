'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const popularMenu = [
    {
      name: 'Artisan Espresso',
      desc: 'Rich and bold espresso shot crafted from premium beans',
      price: 'RM 8.90',
      image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=80',
    },
    {
      name: 'Cappuccino Supreme',
      desc: 'Perfectly balanced espresso with velvety microfoam',
      price: 'RM 12.90',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80',
    },
    {
      name: 'Latte Art Special',
      desc: 'Smooth latte with beautiful hand-crafted design',
      price: 'RM 11.90',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80',
    },
  ];

  const menuItems = [
    {
      name: 'Americano Roast Coffee',
      desc: 'Bold Americano with smooth finish',
      price: 'RM 9.50',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=80&q=80',
    },
    {
      name: 'Hazelnut Coffee Blend',
      desc: 'Aromatic hazelnut infused coffee',
      price: 'RM 10.80',
      image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=80&q=80',
    },
    {
      name: 'Brazilian Iced Coffee',
      desc: 'Refreshing cold brew from Brazil',
      price: 'RM 11.90',
      image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=80&q=80',
    },
    {
      name: 'Americano Roast Coffee',
      desc: 'Classic Americano with rich flavor',
      price: 'RM 9.50',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=80&q=80',
    },
    {
      name: 'Hazelnut Coffee Blend',
      desc: 'Nutty and aromatic blend',
      price: 'RM 10.80',
      image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=80&q=80',
    },
    {
      name: 'Malaysian Coffee Brew',
      desc: 'Traditional local coffee blend',
      price: 'RM 8.90',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=80&q=80',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="menu" ref={ref} className="py-20 bg-coffee-brown relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-golden rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-golden text-sm tracking-widest uppercase mb-4">SPECIAL OFFER</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">
            Coffee Popular Menu
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {popularMenu.map((menu, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative bg-coffee-dark rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={menu.image}
                  alt={menu.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark via-coffee-dark/50 to-transparent opacity-80"></div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-golden/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <span className="text-cream text-lg font-semibold">View Details</span>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-cream mb-2">{menu.name}</h3>
                <p className="text-cream/70 text-sm mb-4">{menu.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-golden">{menu.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-4 py-2 bg-golden text-coffee-dark rounded-full text-sm font-semibold hover:shadow-lg transition-all"
                  >
                    Order Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-golden text-sm tracking-widest uppercase mb-4">CHOOSE YOUR FAVORITE</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream">
            Coffee Popular Menu
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {menuItems.map((menu, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ x: 10, backgroundColor: 'rgba(93, 64, 55, 0.5)' }}
              className="flex items-center gap-6 p-6 rounded-xl border border-cream/10 backdrop-blur-sm transition-all duration-300 cursor-pointer group"
            >
              <div className="relative w-20 h-20 flex-shrink-0 rounded-full overflow-hidden ring-2 ring-golden/30 group-hover:ring-golden transition-all">
                <Image
                  src={menu.image}
                  alt={menu.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-serif font-semibold text-cream mb-1">{menu.name}</h4>
                <p className="text-cream/60 text-sm">{menu.desc}</p>
              </div>
              <div className="text-2xl font-bold text-golden">{menu.price}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
