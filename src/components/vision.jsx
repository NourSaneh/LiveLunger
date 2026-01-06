const VisionSection = () => {
  return (
    <section id="vision" className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-5 font-heading">
            Our vision
          </h2>
          <div className="w-12 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Vision Content */}
        <div className="text-center">
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 leading-relaxed mb-10">
            We envision a world where every breath is clean and every person is free from the harmful effects of smoking.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-12">
            {/* Vision Point 1 */}
            <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">Community First</h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">Building supportive communities that encourage healthy choices.</p>
            </div>

            {/* Vision Point 2 */}
            <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">Education Driven</h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">Empowering through knowledge and awareness programs.</p>
            </div>

            {/* Vision Point 3 */}
            <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">Health Focused</h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">Prioritizing lung health and overall wellbeing for all.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
