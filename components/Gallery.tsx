'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
      alt: 'Coffee Cup',
      span: 'row-span-2',
    },
    {
      src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80',
      alt: 'Espresso',
      span: '',
    },
    {
      src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
      alt: 'Café Interior',
      span: '',
    },
    {
      src: 'https://images.unsplash.com/photo-1542181961-9590d0c79dab?w=800&q=80',
      alt: 'Pastries',
      span: 'col-span-2',
    },
    {
      src: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
      alt: 'Latte Art',
      span: '',
    },
    {
      src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
      alt: 'Brewing',
      span: 'row-span-2',
    },
  ];

  return (
    <section id="gallery" ref={ref} className="py-20 bg-coffee-brown relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-golden rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-golden text-sm tracking-widest uppercase mb-4">OUR GALLERY</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">
            Visual Journey
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            Experience the ambiance and artistry of House of Wheat Café through our lens
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className={`relative ${image.span} rounded-xl overflow-hidden cursor-pointer group`}
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-cream font-semibold">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            className="relative max-w-4xl w-full h-[80vh]"
          >
            <Image
              src={selectedImage}
              alt="Gallery Image"
              fill
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
