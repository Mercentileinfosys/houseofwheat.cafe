'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiShoppingBag, HiTruck, HiSparkles } from 'react-icons/hi';
import { FaCoffee } from 'react-icons/fa';

const PremiumServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: FaCoffee,
      title: 'Artisan Coffee',
      desc: 'Handcrafted by expert baristas using premium beans',
      color: 'from-amber-500 to-orange-600',
      delay: 0,
    },
    {
      icon: HiShoppingBag,
      title: 'Fresh Pastries',
      desc: 'Baked daily with organic ingredients',
      color: 'from-yellow-500 to-amber-600',
      delay: 0.2,
    },
    {
      icon: HiTruck,
      title: 'Delivery Service',
      desc: 'Get your favorites delivered to your doorstep',
      color: 'from-golden to-amber-700',
      delay: 0.4,
    },
    {
      icon: HiSparkles,
      title: 'Event Catering',
      desc: 'Perfect coffee and treats for your special occasions',
      color: 'from-amber-600 to-orange-700',
      delay: 0.6,
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-coffee-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-golden via-cream to-golden rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-golden text-sm tracking-widest uppercase mb-4">WHAT WE OFFER</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">
            Premium Services
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            Experience excellence in every aspect of our service
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -90 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: service.delay,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                scale: 1.05,
              }}
              className="group relative"
              style={{ perspective: '1000px' }}
            >
              <div className="relative bg-gradient-to-br from-coffee-brown/50 to-coffee-dark/50 backdrop-blur-xl rounded-2xl p-8 border border-golden/20 hover:border-golden/50 transition-all duration-500 shadow-2xl overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 blur-xl`}></div>
                </motion.div>

                <motion.div
                  animate={{
                    rotateY: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg relative z-10 group-hover:shadow-2xl transition-all`}
                  style={{ transform: 'translateZ(30px)' }}
                >
                  <service.icon className="text-4xl text-coffee-dark" />
                </motion.div>

                <h3 className="text-2xl font-serif font-bold text-cream mb-3 relative z-10 group-hover:text-golden transition-colors">
                  {service.title}
                </h3>
                <p className="text-cream/70 leading-relaxed relative z-10">
                  {service.desc}
                </p>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-golden to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />

                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-golden/10 rounded-full blur-3xl group-hover:bg-golden/20 transition-all"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;
