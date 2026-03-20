import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import scholarmarkLogo from '../images/scholarmark-logo.png';
import orderlyLogo from '../images/orderly-logo.png';
import hmsLogo from '../images/hms-logo.svg';

const ProductCarousel = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 'scholarmark',
      name: 'ScholarMark',
      tagline: 'Empowering Young Innovators',
      description: 'Talent development and career guidance platform for ambitious youth.',
      logo: scholarmarkLogo,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'orderly',
      name: 'Orderly',
      tagline: 'Hospitality Made Simple',
      description: 'WhatsApp-based platform making hospitality services accessible.',
      logo: orderlyLogo,
      color: 'from-primary-500 to-orange-500',
    },
    {
      id: 'hms',
      name: 'HMS',
      tagline: 'Safe Medical Training',
      description: 'Medical simulation platform for healthcare professionals.',
      logo: hmsLogo,
      color: 'from-green-500 to-emerald-500',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [products.length]);

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % products.length);
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Three innovative solutions transforming key sectors
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Product Display */}
          <div className="relative min-h-[280px] md:h-[420px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                onClick={() => navigate(`/product/${products[currentIndex].id}`)}
                className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl cursor-pointer overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-3xl transition-shadow"
              >
                <div className="grid md:grid-cols-2 gap-4 md:gap-6 p-4 md:p-8">
                  {/* Logo Section */}
                  <div className="flex items-center justify-center bg-white rounded-xl p-4 md:p-8">
                    <img 
                      src={products[currentIndex].logo} 
                      alt={`${products[currentIndex].name} logo`}
                      className="max-w-full h-24 md:h-48 object-contain"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col justify-center">
                    <div className={`inline-block w-8 md:w-12 h-1 bg-gradient-to-r ${products[currentIndex].color} mb-2 md:mb-4 rounded-full`}></div>
                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1 md:mb-2">
                      {products[currentIndex].name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-500 font-semibold mb-2 md:mb-4 text-base md:text-lg">
                      {products[currentIndex].tagline}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-3 md:mb-6 leading-relaxed text-sm md:text-base">
                      {products[currentIndex].description}
                    </p>
                    <div className="flex items-center text-primary-600 dark:text-primary-500 font-medium hover:text-primary-700 dark:hover:text-primary-400 transition-colors text-sm md:text-base">
                      Learn More <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
              aria-label="Previous product"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
              aria-label="Next product"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? 'w-8 h-2 bg-primary-600' 
                    : 'w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to ${products[index].name}`}
              />
            ))}
          </div>

          {/* Product Counter */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {currentIndex + 1} of {products.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
