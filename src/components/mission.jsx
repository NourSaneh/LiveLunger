import { useState } from 'react';
import { motion } from 'framer-motion';
import missionGreen from '../assets/missions/Mission Green.png';
import missionBrown from '../assets/missions/Mission Brown.png';
import missionRed from '../assets/missions/Mission-red.png';

const MissionSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const missions = [
    {
      image: missionGreen,
      title: 'Prevention',
      description: 'Educating youth about the dangers of smoking',
      textColor: 'text-green-600',
    },
    {
      image: missionBrown,
      title: 'Awareness',
      description: 'Spreading knowledge about tobacco effects',
      textColor: 'text-amber-900',
    },
    {
      image: missionRed,
      title: 'Recovery',
      description: 'Supporting your journey to quit',
      textColor: 'text-pink-600',
    },
  ];

  return (
    <section id="mission" className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div 
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-heading"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our mission
          </motion.h2>
        </motion.div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-8 lg:gap-12">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Icon Container with Text Inside */}
              <motion.div
                className={`
                  relative
                  w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96
                  transition-all duration-300 ease-out
                  ${hoveredIndex === index ? 'scale-110 -translate-y-2' : 'scale-100'}
                `}
                whileHover={{ scale: 1.15, y: -10, rotate: hoveredIndex === index ? 5 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Background Image */}
                <img
                  src={mission.image}
                  alt={mission.title}
                  className="w-full h-full object-contain"
                />
                
                {/* Text Overlay - Positioned in the bottom half of the circle */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 text-center">
                  <h3 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-heading ${mission.textColor} mb-2`}>
                    {mission.title}
                  </h3>
                  <p className={`text-sm sm:text-base md:text-lg lg:text-xl ${mission.textColor} opacity-80 max-w-[70%] leading-tight break-words`}>
                    {mission.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
