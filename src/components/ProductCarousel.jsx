import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import scholarmarkLogo from '../images/scholarmark-logo.svg';
import orderlyLogo from '../images/orderly-logo.png';
import hmsLogo from '../images/hms-logo.svg';
import hartonEpsLogo from '../images/harton-eps.svg';

const ProductCarousel = () => {
  const navigate = useNavigate();
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
  const didDragRef = useRef(false);

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

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    let frame;
    const step = () => {
      if (!pausedRef.current) {
        track.scrollLeft += 0.6;
        const loopPoint = track.scrollWidth / 2;
        if (track.scrollLeft >= loopPoint) {
          track.scrollLeft -= loopPoint;
        }
      }
      frame = requestAnimationFrame(step);
    };

    const onWheel = (event) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      event.preventDefault();
      track.scrollLeft += event.deltaY;
    };

    track.addEventListener('wheel', onWheel, { passive: false });
    frame = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener('wheel', onWheel);
    };
  }, []);

  const pause = () => {
    pausedRef.current = true;
  };

  const resume = () => {
    pausedRef.current = false;
  };

  const onPointerDown = (event) => {
    pause();
    draggingRef.current = true;
    didDragRef.current = false;
    dragStartX.current = event.clientX;
    dragStartScroll.current = trackRef.current?.scrollLeft ?? 0;
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const onPointerMove = (event) => {
    if (!draggingRef.current || !trackRef.current) return;
    const delta = event.clientX - dragStartX.current;
    if (Math.abs(delta) > 6) {
      didDragRef.current = true;
    }
    trackRef.current.scrollLeft = dragStartScroll.current - delta;
  };

  const onPointerUp = () => {
    draggingRef.current = false;
    resume();
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
        className="product-scroll-track flex w-full cursor-grab active:cursor-grabbing"
        onMouseEnter={pause}
        onMouseLeave={() => {
          draggingRef.current = false;
          resume();
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {loopedProducts.map((product, index) => (
          <button
            key={`${product.id}-${index}`}
            type="button"
            onClick={() => {
              if (didDragRef.current) return;
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
    </section>
  );
};

export default ProductCarousel;
