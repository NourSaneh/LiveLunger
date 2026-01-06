import { useState } from 'react';
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
    <section id="mission" className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-heading">
            Our mission
          </h2>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-8 lg:gap-12">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Icon Container with Text Inside */}
              <div
                className={`
                  relative
                  w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96
                  transition-all duration-300 ease-out
                  ${hoveredIndex === index ? 'scale-110 -translate-y-2' : 'scale-100'}
                `}
              >
                {/* Background Image */}
                <img
                  src={mission.image}
                  alt={mission.title}
                  className="w-full h-full object-contain"
                />
                
                {/* Text Overlay - Positioned in the bottom half of the circle */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                  <h3 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-heading ${mission.textColor}`}>
                    {mission.title}
                  </h3>
                  <p className={`text-sm sm:text-base md:text-lg lg:text-xl ${mission.textColor} opacity-80 max-w-[70%] leading-tight mt-2 break-words`}>
                    {mission.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
