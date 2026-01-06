import { useEffect, useState } from 'react';
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
    <nav className="fixed top-0 w-screen overflow-x-hidden z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <img src={logo} alt="LiveLunger Logo" className="h-12 w-12 object-contain" />
            <span className="text-3xl font-bold text-red-600 font-heading">LiveLunger</span>
          </div>
          
          {/* Nav Links - Centered */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSejTGBQDO04bBAmzwbmu3R8OwleYYgTEKqLE_tAs3rjeY5aRw/viewform?pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full font-semibold hover:bg-red-700 transition-colors shadow-md text-sm sm:text-base md:text-lg lg:text-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              Join Us
            </a>
          </div>

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
      {isOpen && (
        <div className="md:hidden">
          {/* Clickable backdrop to close */}
          <button
            className="fixed inset-0 bg-black/20 backdrop-blur-[1px] z-40"
            onClick={closeMenu}
            aria-label="Close menu backdrop"
          />

          <div className="absolute top-16 inset-x-0 z-50 bg-white shadow-lg border-t border-gray-100">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="block text-gray-800 hover:text-red-600 font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSejTGBQDO04bBAmzwbmu3R8OwleYYgTEKqLE_tAs3rjeY5aRw/viewform?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-red-600 text-white w-full px-5 py-2.5 rounded-full font-semibold hover:bg-red-700 transition-colors shadow-md text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
              >
                Join Us
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
