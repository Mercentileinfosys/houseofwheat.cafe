'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import Image from 'next/image';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Regular Customer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      rating: 5,
      text: 'House of Wheat Café has become my second home! The coffee is exceptional, and the atmosphere is perfect for both work and relaxation. The staff knows my order by heart, and I love the personal touch.',
    },
    {
      name: 'Michael Chen',
      role: 'Coffee Enthusiast',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      rating: 5,
      text: 'As a coffee connoisseur, I can confidently say this is the best café in Cheras. The quality of their beans and the skill of their baristas is unmatched. Every visit is a delightful experience.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Food Blogger',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      rating: 5,
      text: 'The pastries here are to die for! Everything is freshly baked, and you can taste the quality in every bite. The ambiance is warm and inviting, making it perfect for meetings or catching up with friends.',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-coffee-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cream rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-golden text-sm tracking-widest uppercase mb-4">OUR CUSTOMER REVIEW</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">
            What Our Customers Say
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-coffee-brown/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-golden/20 shadow-2xl"
          >
            <div className="flex justify-center mb-8">
              <FaQuoteLeft className="text-6xl text-golden/30" />
            </div>

            <p className="text-cream/90 text-lg md:text-xl leading-relaxed text-center mb-8 italic">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FaStar key={i} className="text-golden text-xl mx-1" />
              ))}
            </div>

            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-golden/30">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-xl font-serif font-bold text-cream">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-golden text-sm">{testimonials[currentIndex].role}</p>
            </div>
          </motion.div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-3 bg-golden text-coffee-dark rounded-full hover:shadow-lg transition-all"
            >
              <HiChevronLeft size={24} />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-golden w-8' : 'bg-cream/30'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-3 bg-golden text-coffee-dark rounded-full hover:shadow-lg transition-all"
            >
              <HiChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
