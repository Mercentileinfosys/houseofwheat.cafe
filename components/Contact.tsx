'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiLocationMarker, HiPhone, HiMail, HiClock } from 'react-icons/hi';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: HiLocationMarker,
      title: 'Address',
      content: '1-5, Menara Mutiara Central, No. 2 Jalan Desa Aman 1, Cheras Business Centre, Cheras, Kuala Lumpur, Malaysia',
    },
    {
      icon: HiPhone,
      title: 'Phone',
      content: '+60 3-9134 6668',
    },
    {
      icon: HiMail,
      title: 'Email',
      content: 'houseofwheatcafe@gmail.com',
    },
    {
      icon: HiClock,
      title: 'Opening Hours',
      content: 'Mon - Sun: 8:00 AM - 10:00 PM',
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-coffee-brown relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-golden rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-golden text-sm tracking-widest uppercase mb-4">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">
            Contact Us
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            Have questions or want to reserve a table? We&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 bg-coffee-dark/50 rounded-xl border border-golden/10 hover:border-golden/30 transition-all"
                >
                  <div className="p-3 bg-golden rounded-lg">
                    <info.icon className="text-2xl text-coffee-dark" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-cream mb-1">{info.title}</h4>
                    <p className="text-cream/70 text-sm">{info.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="w-full h-[300px] rounded-xl overflow-hidden border-4 border-golden/20"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0441266883614!2d101.72816!3d3.10319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4f1c7a1a1a1a%3A0x1a1a1a1a1a1a1a1a!2sCheras%2C%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-cream mb-2 font-medium">
                  Your Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 bg-coffee-dark border border-cream/20 rounded-xl text-cream focus:outline-none focus:border-golden transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-cream mb-2 font-medium">
                  Your Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 bg-coffee-dark border border-cream/20 rounded-xl text-cream focus:outline-none focus:border-golden transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-cream mb-2 font-medium">
                  Your Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-6 py-4 bg-coffee-dark border border-cream/20 rounded-xl text-cream focus:outline-none focus:border-golden transition-all resize-none"
                  placeholder="Tell us how we can help you..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(212, 175, 55, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-golden text-coffee-dark font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
