import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-White-400 mb-4">LiveLunger</h3>
            <p className="text-gray-400 max-w-md">
              Breathe Free, Live Longer. Join our mission to create a smoke free world and help people live healthier, longer lives.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <a href="#home" className="text-gray-400 hover:text-green-400 transition-colors">Home</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <a href="#mission" className="text-gray-400 hover:text-green-400 transition-colors">Mission</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <a href="#vision" className="text-gray-400 hover:text-green-400 transition-colors">Vision</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <a href="#impact" className="text-gray-400 hover:text-green-400 transition-colors">Impact</a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSejTGBQDO04bBAmzwbmu3R8OwleYYgTEKqLE_tAs3rjeY5aRw/viewform?pli=1"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Volunteer
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Donate</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <a href="mailto:support@livelunger-lb.org" className="text-gray-400 hover:text-green-400 transition-colors">Contact Us</a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} LiveLunger. All rights reserved. Made by{' '}
            <a 
              href="https://noursaneh.com" 
              target="_blank" 
              rel="noreferrer noopener"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              Nour Saneh
            </a>
          </p>
          
          {/* Social Icons */}
          <motion.div 
            className="flex space-x-4 mt-4 sm:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a
              href="mailto:support@livelunger-lb.org"
              className="text-gray-400 hover:text-green-400 transition-colors"
              aria-label="Email"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zm0 0l8 5 8-5" />
              </svg>
            </motion.a>
            <motion.a
              href="https://chat.whatsapp.com/FNNRvrHqaf8HypbJh59hW1?mode=ems_copy_h_t"
              className="text-gray-400 hover:text-green-400 transition-colors"
              aria-label="WhatsApp"
              target="_blank"
              rel="noreferrer noopener"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.005 2.002c-5.522 0-10 4.477-10 10 0 1.762.468 3.469 1.358 4.968L2 22l5.13-1.348a9.964 9.964 0 0 0 4.873 1.27c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.138a8.11 8.11 0 0 1-4.134-1.137l-.296-.174-3.048.801.809-2.966-.192-.31a8.115 8.115 0 1 1 6.861 3.786zm4.595-6.297c-.255-.128-1.51-.75-1.744-.835s-.404-.128-.574.128-.658.835-.806 1.01-.298.192-.553.064-1.08-.398-2.06-1.27c-.76-.677-1.272-1.512-1.42-1.767s-.016-.394.112-.522c.115-.115.255-.298.383-.447.128-.149.17-.255.255-.426.085-.17.043-.319-.021-.447s-.574-1.383-.787-1.897c-.206-.494-.414-.426-.574-.434l-.489-.009c-.17 0-.447.064-.681.319s-.894.874-.894 2.13.915 2.47 1.043 2.639c.128.17 1.8 2.75 4.363 3.852.61.263 1.085.42 1.455.538.611.195 1.167.168 1.607.102.489-.073 1.51-.617 1.723-1.213.213-.596.213-1.106.149-1.213-.064-.106-.234-.17-.489-.298z"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/livelunger/"
              className="text-gray-400 hover:text-green-400 transition-colors"
              target="_blank"
              rel="noreferrer noopener"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://www.tiktok.com/@livelunger"
              className="text-gray-400 hover:text-green-400 transition-colors"
              aria-label="TikTok"
              target="_blank"
              rel="noreferrer noopener"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c.56 3.6 2.95 4.95 5.14 5.1v3.34a8.13 8.13 0 0 1-4.07-1.12v5.18a5.82 5.82 0 1 1-5.06-5.75v3.06a2.5 2.5 0 1 0 2.18 2.47V2.04H12Z"/>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
