import chasteLogo from '../images/chaste logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="mb-6">
            <img src={chasteLogo} alt="Ostarion" className="h-16 w-auto object-contain" />
          </div>
          <p className="text-gray-400 text-center max-w-2xl leading-relaxed">
            Empowering communities through transformative technology in education, healthcare, and hospitality.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © {currentYear} Ostarion. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-500 hover:text-primary-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary-500 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
