import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import chasteLogo from '../images/chaste logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, cycleTheme } = useTheme();

  const getThemeIcon = () => {
    if (theme === 'light') return <Sun size={20} />;
    if (theme === 'dark') return <Moon size={20} />;
    return <Monitor size={20} />;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
              <img src={chasteLogo} alt="Ostarion" className="h-12 w-auto object-contain" />
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path}>
                <motion.div
                  className={`font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary-600'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.div>
              </Link>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={cycleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme (Light/Dark/System)"
              title={`Current: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`}
            >
              {getThemeIcon()}
            </motion.button>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={cycleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              aria-label="Toggle theme (Light/Dark/System)"
              title={`Current: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`}
            >
              {getThemeIcon()}
            </motion.button>
            <button
              className="text-gray-900 dark:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block font-medium py-2 ${
                  location.pathname === link.path
                    ? 'text-primary-600'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
