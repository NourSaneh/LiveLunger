import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { slides, lungSlides } from '.';

// Lung Comparison Slider Component
const LungComparisonSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const healthyLung = lungSlides.find(l => l.id === 'healthy');
  const unhealthyLung = lungSlides.find(l => l.id === 'unhealthy');

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const isUnhealthyDominant = sliderPosition < 50;
  const isHealthyDominant = !isUnhealthyDominant;

  return (
    <motion.div 
      className="flex flex-col items-center relative w-full px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      
      <motion.div 
        className="grid grid-cols-2 bg-gray-200 rounded-full p-2 mb-6 w-full max-w-md sm:max-w-lg"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span
          className={`flex items-center justify-center py-2 text-base rounded-full transition-all duration-200
            ${isHealthyDominant
              ? "bg-white text-gray-800 font-semibold shadow-sm"
              : "bg-transparent text-gray-500 font-medium"
            }`}
          aria-selected={isHealthyDominant}
        >
          {healthyLung?.label || "HEALTHY"}
        </span>

        <span
          className={`flex items-center justify-center py-2 text-base rounded-full transition-all duration-200
            ${isUnhealthyDominant
              ? "bg-white text-gray-800 font-semibold shadow-sm"
              : "bg-transparent text-gray-500 font-medium"
            }`}
          aria-selected={isUnhealthyDominant}
        >
          {unhealthyLung?.label || "UNHEALTHY"}
        </span>
      </motion.div>

      {/* Slider Container */}
      <motion.div
        ref={containerRef}
        className="relative aspect-[3/4] sm:aspect-[4/5] w-[clamp(12rem,60vw,30rem)] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ scale: 1.02 }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {/* Unhealthy Lung (Background) */}
        <div className="absolute inset-0">
          <img 
            src={unhealthyLung?.image} 
            alt={unhealthyLung?.label}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Healthy Lung (Foreground) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img 
            src={healthyLung?.image} 
            alt={healthyLung?.label}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Instruction */}
      <motion.p 
        className="mt-4 text-base text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Drag to compare
      </motion.p>
    </motion.div>
  );
};

// Stacked Gallery Component
const StackedGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Use first 3 slides from your imported data
  const images = slides.slice(0, 3).map(slide => slide.image);

  const positions = [
    { rotate: -5, translateX: -60, translateY: 10, zIndex: 1 },
    { rotate: 0, translateX: 0, translateY: 0, zIndex: 3 },
    { rotate: 5, translateX: 60, translateY: 10, zIndex: 2 },
  ];

  return (
    <div className="relative w-full max-w-[14rem] sm:max-w-sm md:max-w-md h-[14rem] sm:h-80 md:h-96 flex justify-center">
      {images.map((image, index) => {
        const pos = positions[index];
        const isHovered = hoveredIndex === index;
        
        return (
          <motion.div
            key={index}
            className="absolute inset-0 rounded-xl shadow-xl cursor-pointer overflow-hidden border-4 border-white bg-gray-200"
            initial={{ 
              opacity: 0, 
              scale: 0.5, 
              rotate: pos.rotate + 15,
              x: pos.translateX,
              y: pos.translateY 
            }}
            animate={{ 
              opacity: 1, 
              scale: isHovered ? 1.1 : 1,
              rotate: pos.rotate,
              x: pos.translateX,
              y: isHovered ? -30 : pos.translateY,
              zIndex: isHovered ? 10 : pos.zIndex,
            }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.15, 
              ease: "easeOut",
              scale: { duration: 0.3 },
              y: { duration: 0.3 }
            }}
            style={{
              zIndex: isHovered ? 10 : pos.zIndex,
            }}
            whileHover={{
              scale: 1.1,
              y: -30,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
              transition: { duration: 0.3 }
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img 
              src={image} 
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        );
      })}
    </div>
  );
};

// Main Home Component
const Home = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <main  id="home"
      className="relative min-h-screen w-screen overflow-x-hidden scroll-mt-16"
      style={{ 
        background: 'linear-gradient(to bottom, #F1F5F9 0%, #FFFFFF 60%)',
      }}
    >
      {/* SVG Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full z-0"
        viewBox="0 0 1440 1000"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="airGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.14" />
          </linearGradient>
          <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Big airy blobs */}
        <g filter="url(#softBlur)" opacity="0.55">
          <path
            d="M-40 170 C 220 60, 460 90, 690 170 C 920 250, 1090 260, 1490 120 L 1490 -20 L -40 -20 Z"
            fill="#E6F2FF"
            opacity="0.7"
          />
          <path
            d="M-60 900 C 260 770, 500 810, 760 860 C 1020 910, 1220 860, 1500 770 L 1500 1050 L -60 1050 Z"
            fill="#DBEAFE"
            opacity="0.55"
          />
        </g>
        {/* Airflow lines */}
        <g fill="none" stroke="url(#airGrad)" strokeWidth="3" strokeLinecap="round" filter="url(#glow)">
          <path d="M-40 350 C 180 290, 320 390, 540 340 C 760 290, 980 250, 1220 330 C 1320 365, 1400 360, 1480 320" opacity="0.55" />
          <path d="M-40 450 C 190 390, 340 500, 560 450 C 780 400, 980 360, 1200 440 C 1320 490, 1410 470, 1480 430" opacity="0.40" />
          <path d="M-40 550 C 210 490, 360 610, 600 560 C 840 510, 1020 490, 1220 550 C 1340 590, 1410 580, 1480 540" opacity="0.30" />
        </g>
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-16 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-12 lg:gap-16 items-center w-full">
          
          {/* Left Side - Text + Stacked Gallery */}
          <div className="flex flex-col items-center lg:items-start gap-10 w-full">
            <div className="text-center lg:text-left w-full px-4 lg:px-0">
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 mb-6"
                initial={isLargeScreen ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                whileInView={isLargeScreen ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={isLargeScreen ? { duration: 0.8, ease: "easeOut" } : { duration: 0 }}
              >
                Breathe Free, Live Longer
              </motion.h1>
              <motion.p 
                className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed"
                initial={isLargeScreen ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                whileInView={isLargeScreen ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={isLargeScreen ? { duration: 0.8, delay: 0.2, ease: "easeOut" } : { duration: 0 }}
              >
                Join our mission to create a smoke free world and help people live healthier, longer lives.
              </motion.p>
            </div>
            
            {/* Stacked Gallery */}
            <motion.div 
              className="mt-6 w-full flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <StackedGallery />
            </motion.div>
            
            <motion.div 
              className="flex flex-col gap-0 items-center lg:items-start mt-32 w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <p className="text-black-600 font-black text-2xl text-center lg:text-left px-4 lg:px-0 lg:pl-14 mb-[-60px] z-10 relative" style={{ fontFamily: 'Poppins, sans-serif' }}>
                YOU CAN MAKE A HUGE DIFFERENCE
              </p>

              <div className="w-full max-w-md px-4 lg:px-0 lg:pl-14 mx-auto lg:mx-0" style={{ filter: 'brightness(0)' }}>
                <DotLottieReact
                  src="https://lottie.host/005dd310-dc0d-40c2-b9a4-47c28d1b2aa5/ONFncIFBnn.lottie"
                  loop
                  autoplay
                />
              </div>
            </motion.div>
          </div>

          {/* Right Side - Lung Comparison Slider */}
          <div className="flex justify-center lg:justify-end lg:pr-8 xl:pr-12 mt-6 lg:-mt-20 w-full">
            <LungComparisonSlider />
          </div>

        </div>
      </div>
    </main>
  );
};

export default Home;
