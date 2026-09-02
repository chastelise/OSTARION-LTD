import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import scholarmarkLogo from '../images/scholarmark-logo.svg';
import orderlyLogo from '../images/orderly-logo.png';
import hmsLogo from '../images/hms-logo.svg';
import hartonEpsLogo from '../images/harton-eps.svg';

const ProductCarousel = () => {
  const navigate = useNavigate();
  const trackRef = useRef(null);
  const touchStartX = useRef(0);
  const didSwipeRef = useRef(false);

  const products = [
    {
      id: 'scholarmark',
      name: 'ScholarMark',
      sector: 'Education',
      line: 'A path for young talent to find work, mentors, and funding.',
      logo: scholarmarkLogo,
    },
    {
      id: 'orderly',
      name: 'Orderly',
      sector: 'Hospitality',
      line: 'Food, rooms, and events — ordered on WhatsApp, not another app.',
      logo: orderlyLogo,
    },
    {
      id: 'hms',
      name: 'Harton',
      sector: 'Healthcare',
      line: 'Clinical practice where a mistake costs nothing but a lesson.',
      logo: hmsLogo,
    },
    {
      id: 'harton-eps',
      name: 'Harton EPS',
      sector: 'Examinations',
      line: 'Secure exams on desktop, web, and mobile — online or offline.',
      logo: hartonEpsLogo,
    },
  ];

  const loopedProducts = [...products, ...products];

  const pauseMotion = () => {
    trackRef.current?.classList.add('is-paused');
  };

  const resumeMotion = () => {
    trackRef.current?.classList.remove('is-paused');
  };

  return (
    <section id="products" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-primary-600">
            Explore Our products
          </h2>
        </motion.div>
      </div>

      <div
        ref={trackRef}
        className="product-scroll-track"
        onTouchStart={(event) => {
          didSwipeRef.current = false;
          touchStartX.current = event.touches[0].clientX;
          pauseMotion();
        }}
        onTouchMove={(event) => {
          if (Math.abs(event.touches[0].clientX - touchStartX.current) > 8) {
            didSwipeRef.current = true;
          }
        }}
        onTouchEnd={resumeMotion}
        onTouchCancel={resumeMotion}
      >
        <div className="animate-product-marquee flex w-max">
          {loopedProducts.map((product, index) => (
            <button
              key={`${product.id}-${index}`}
              type="button"
              onClick={() => {
                if (didSwipeRef.current) return;
                navigate(`/product/${product.id}`);
              }}
              className="w-[min(85vw,380px)] shrink-0 mx-2.5 rounded-2xl bg-[#f6f4f0] dark:bg-gray-800 p-6 text-left transition-colors hover:bg-[#efebe4] dark:hover:bg-gray-700"
            >
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-gray-900 flex items-center justify-center mb-5 overflow-hidden">
                <img
                  src={product.logo}
                  alt=""
                  className="max-h-11 max-w-11 object-contain pointer-events-none"
                />
              </div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 mb-2">
                {product.sector}
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {product.line}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
