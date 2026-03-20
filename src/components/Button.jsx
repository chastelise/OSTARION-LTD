import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseStyles = 'px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-block';
  
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50',
    ghost: 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
