import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="LiveLunger Logo" className="h-12 w-12 object-contain" />
            <span className="text-3xl font-bold text-red-600">LiveLunger</span>
          </div>
          
          {/* Nav Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Home
            </a>
            <a href="#mission" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Mission
            </a>
            <a href="#vision" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Vision
            </a>
            <a href="#impact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Impact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition-colors shadow-md">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
