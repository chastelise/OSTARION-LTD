import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Monitor, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import chasteLogo from '../images/chaste logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, cycleTheme } = useTheme();

  const getThemeIcon = () => {
    if (theme === 'light') return <Sun size={16} />;
    if (theme === 'dark') return <Moon size={16} />;
    return <Monitor size={16} />;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className="w-full max-w-5xl">
        <nav
          className={`nav-pill flex items-center justify-between gap-4 rounded-full px-3 py-2 md:px-4 ${
            isScrolled ? 'nav-pill-scrolled' : ''
          }`}
        >
          <Link to="/" className="flex items-center shrink-0 pl-2">
            <img src={chasteLogo} alt="Ostarion" className="h-9 w-auto object-contain md:h-10" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-600'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={cycleTheme}
              className="h-9 w-9 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme (Light/Dark/System)"
              title={`Current: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`}
            >
              {getThemeIcon()}
            </button>

            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 transition-colors"
            >
              Get in Touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <button
              className="md:hidden h-9 w-9 rounded-full flex items-center justify-center text-gray-900 dark:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="nav-pill mt-2 rounded-3xl px-5 py-5 md:hidden"
            >
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block rounded-xl px-3 py-2.5 text-sm font-medium ${
                      location.pathname === link.path
                        ? 'text-primary-600'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="mt-2 flex items-center justify-center gap-1.5 rounded-full bg-primary-600 px-4 py-2.5 text-sm font-medium text-white"
                >
                  Get in Touch
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
