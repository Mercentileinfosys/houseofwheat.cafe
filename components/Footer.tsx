'use client';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const footerLinks = {
    Company: ['About Us', 'Our Team', 'Careers', 'Press'],
    Product: ['Menu', 'Catering', 'Gift Cards', 'Merchandise'],
    Download: ['iOS App', 'Android App'],
    Support: ['FAQs', 'Privacy Policy', 'Terms of Service', 'Contact'],
  };

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaYoutube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-coffee-dark border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-serif font-bold text-gradient mb-4"
            >
              House of Wheat
            </motion.div>
            <p className="text-cream/70 mb-6 leading-relaxed">
              Crafting exceptional coffee experiences in the heart of Cheras since 2014.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-coffee-brown hover:bg-golden rounded-full flex items-center justify-center text-cream hover:text-coffee-dark transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-golden font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5, color: '#D4AF37' }}
                      className="text-cream/70 hover:text-golden text-sm transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-cream/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/60 text-sm text-center md:text-left">
              © 2025 House of Wheat Café. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-cream/60 hover:text-golden text-sm transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-cream/60 hover:text-golden text-sm transition-colors"
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-cream/60 hover:text-golden text-sm transition-colors"
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
