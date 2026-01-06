import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when resizing to desktop to avoid stale open state
  useEffect(() => {
    const handleResize = () => setIsOpen(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#mission', label: 'Mission' },
    { href: '#vision', label: 'Vision' },
    { href: '#impact', label: 'Impact' },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <motion.a 
            href="#home" 
            className="flex items-center gap-2 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <motion.img 
              src={logo} 
              alt="LiveLunger Logo" 
              className="h-12 w-12 object-contain"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            />
            <span className="text-3xl font-bold text-red-600 font-heading">LiveLunger</span>
          </motion.a>
          
          {/* Nav Links - Centered */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSejTGBQDO04bBAmzwbmu3R8OwleYYgTEKqLE_tAs3rjeY5aRw/viewform?pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full font-semibold hover:bg-red-700 transition-colors shadow-md text-sm sm:text-base md:text-lg lg:text-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(220, 38, 38, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Join Us
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex-shrink-0">
            <button
              className="text-gray-700 hover:text-red-600 transition-colors p-2"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Clickable backdrop to close */}
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-[1px] md:hidden"
              style={{ zIndex: 40 }}
              onClick={closeMenu}
              aria-label="Close menu backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />

            <motion.div 
              className="fixed top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-100 md:hidden"
              style={{ zIndex: 50 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-3">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="block text-gray-800 hover:text-red-600 font-medium transition-colors py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.label}
                  </motion.a>
                ))}

                <motion.a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSejTGBQDO04bBAmzwbmu3R8OwleYYgTEKqLE_tAs3rjeY5aRw/viewform?pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-red-600 text-white w-full px-5 py-2.5 rounded-full font-semibold hover:bg-red-700 transition-colors shadow-md text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 mt-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Us
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
