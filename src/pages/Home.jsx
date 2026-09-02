import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero';
import ProductCarousel from '../components/ProductCarousel';
import Vision from '../sections/Vision';
import Impact from '../sections/Impact';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#products') {
      requestAnimationFrame(() => {
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, [location]);

  return (
    <>
      <Hero />
      <ProductCarousel />
      <Vision />
      <Impact />
    </>
  );
};

export default Home;
