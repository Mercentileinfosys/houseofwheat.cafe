'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const InteractiveTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const timeline = [
    {
      year: '2014',
      title: 'The Beginning',
      desc: 'House of Wheat Café opened its doors in Cheras',
    },
    {
      year: '2016',
      title: 'Expansion',
      desc: 'Introduced artisan pastries and expanded menu',
    },
    {
      year: '2019',
      title: 'Recognition',
      desc: 'Awarded Best Café in Cheras',
    },
    {
      year: '2025',
      title: 'Innovation',
      desc: 'Launched online ordering and delivery service',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-coffee-brown via-coffee-dark to-coffee-brown relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-golden via-transparent to-transparent"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-golden text-sm tracking-widest uppercase mb-4">OUR JOURNEY</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">
            A Story of Passion
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-golden via-cream to-golden transform -translate-x-1/2 origin-top"
          />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className="inline-block bg-gradient-to-br from-coffee-brown/50 to-coffee-dark/50 backdrop-blur-xl rounded-2xl p-6 border border-golden/20 hover:border-golden/50 transition-all shadow-2xl"
                    style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                      className="text-5xl font-bold text-golden mb-2"
                    >
                      {item.year}
                    </motion.div>
                    <h3 className="text-2xl font-serif font-bold text-cream mb-2">
                      {item.title}
                    </h3>
                    <p className="text-cream/70">{item.desc}</p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: index * 0.2 + 0.2, type: "spring" }}
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-golden to-amber-600 border-4 border-coffee-dark shadow-2xl flex items-center justify-center"
                >
                  <div className="w-6 h-6 rounded-full bg-coffee-dark"></div>
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className="absolute inset-0 rounded-full bg-golden"
                  />
                </motion.div>

                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;
