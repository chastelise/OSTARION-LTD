import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';
import scholarmarkLogo from '../images/scholarmark-logo.svg';
import orderlyLogo from '../images/orderly-logo.png';
import hmsLogo from '../images/hms-logo.svg';
import hartonEpsLogo from '../images/harton-eps.svg';
import handshakeIcon from '../images/handshake.png';

const HandshakeMark = () => (
  <span
    className="mt-0.5 mr-3 h-5 w-5 shrink-0 bg-primary-600"
    style={{
      WebkitMaskImage: `url(${handshakeIcon})`,
      maskImage: `url(${handshakeIcon})`,
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
    }}
    aria-hidden="true"
  />
);

const ProductDetail = () => {
  const { productId } = useParams();

  const products = {
    scholarmark: {
      name: 'ScholarMark',
      tagline: 'Empowering Young Innovators',
      description: 'A digital platform for ambitious young innovators designed for talent development and career guidance to help them design and reshape their future.',
      longDescription: 'ScholarMark is more than just a platform - it\'s a comprehensive ecosystem that nurtures the next generation of African innovators. We provide the tools, connections, and opportunities that ambitious youth need to transform their ideas into reality.',
      logo: scholarmarkLogo,
      website: 'https://www.scholarmark.org',
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        'Organize and participate in innovation hackathons',
        'Support and funding for promising projects',
        'Direct connections with investors and venture capitalists',
        'Apprenticeship and internship opportunities with leading institutions',
        'Access to international scholarships and exchange programs',
        'Professional development and mentorship programs',
        'Networking with fellow innovators and industry leaders',
        'Career guidance and strategic planning support',
      ],
      benefits: [
        'Build a strong professional network',
        'Gain real-world experience',
        'Access funding for your projects',
        'Connect with global opportunities',
      ],
      businessBenefits: [
        'Platform to carry out competitions and hackathons',
        'Access to young talented students to help run your company or projects',
        'Opportunity to build together with innovative youth',
        'Investment opportunities in potential projects',
        'Direct connection to emerging talent pool',
        'Early access to innovative solutions and ideas',
      ],
    },
    orderly: {
      name: 'Orderly',
      tagline: 'Hospitality Made Simple',
      description: 'A system designed to make hospitality services simple, easy, and accessible to everyone through WhatsApp - a familiar and well-known platform.',
      longDescription: 'Orderly revolutionizes the hospitality industry by leveraging WhatsApp\'s familiar interface to create seamless connections between businesses and customers. No apps to download, no complicated systems - just simple, accessible service.',
      logo: orderlyLogo,
      website: '#',
      gradient: 'from-primary-500 to-orange-500',
      features: [
        'Order food from multiple restaurants via WhatsApp',
        'Browse digital menus from home or inside restaurants',
        'Discover promotions, events, and special offers',
        'Book hotel rooms with ease',
        'Reserve halls and gardens for events',
        'Real-time order tracking and updates',
        'Digital payment integration',
        'Customer reviews and ratings',
      ],
      businessFeatures: [
        'Increased visibility and customer reach',
        'Comprehensive digital dashboard',
        'Customer relationship management tools',
        'Easy digital menu management',
        'No need for expensive website development',
        'Built-in marketing and promotional tools',
        'Analytics and business insights',
        'Automated order management',
      ],
    },
    hms: {
      name: 'HMS - Harton Medical Simulation',
      tagline: 'Safe Medical Training',
      description: 'A highly sophisticated technology system that simulates clinical patient treatment in a virtual environment where errors do not cost lives.',
      longDescription: 'HMS transforms medical education by providing a safe, realistic environment for healthcare professionals to practice and perfect their skills. Our advanced simulation technology bridges the gap between theory and practice.',
      logo: hmsLogo,
      website: 'https://www.hartonmed.org',
      gradient: 'from-green-500 to-emerald-500',
      features: [
        'Realistic clinical patient treatment simulations',
        'Comprehensive disease diagnosis training',
        'Holistic approach to patient care scenarios',
        'Safe learning environment for medical students',
        'Advanced training for doctors and nurses',
        'Clinical reasoning development',
        'Emergency response simulations',
        'Confidence building for independent practice',
      ],
      benefits: [
        'Practice without risk to real patients',
        'Build confidence in clinical decision-making',
        'Learn from mistakes in a safe environment',
        'Prepare for real-world medical challenges',
      ],
      businessBenefits: [
        'Train your medical staff efficiently and safely',
        'Use your own institutional data for customized simulations',
        'Run comprehensive medical exams and assessments',
        'Conduct assignments and practical evaluations',
        'Organize OSCEs (Objective Structured Clinical Examinations)',
        'Foreign institutions can integrate their specific protocols',
        'Reduce training costs while improving outcomes',
        'Track and measure staff competency development',
      ],
    },
    'harton-eps': {
      name: 'Harton EPS',
      tagline: 'Harton Examination Platform',
      description: 'A secure digital examination system that enables institutions to conduct examinations on desktop, web, and mobile, with online and offline support.',
      longDescription: 'Harton EPS gives institutions a single place to run examinations — on campus machines, in the browser, or on a phone — whether the network holds or not. Each student receives a unique, randomized paper, with AI proctoring and analysis for remote and in-person sittings.',
      logo: hartonEpsLogo,
      website: '#',
      gradient: 'from-teal-500 to-cyan-500',
      features: [
        'Online and offline examinations',
        'Unique, randomized exam for each student',
        'AI proctoring and examination analysis',
        'Remote proctored examinations',
        'Support for multiple examination and question formats',
      ],
      benefits: [
        'Reduces printing and examination costs',
        'Eliminates unnecessary paperwork',
        'Reduces administrative workload and manual processes',
        'Speeds up marking and results processing',
        'Improves examination efficiency and scalability',
      ],
      businessBenefitsTitle: 'Benefits for Institutions',
      businessBenefits: [
        'Lower Costs',
        'Less Paperwork',
        'Greater Efficiency',
        'Improved Security',
        'Scalable Operations',
      ],
    },
  };

  const product = products[productId];

  if (!product) {
    return (
      <div className="pt-28 min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Product Not Found</h1>
          <Link to="/" className="text-primary-600 hover:text-primary-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 bg-white dark:bg-gray-900">
      <section className="py-16 bg-gradient-to-br from-orange-50 dark:from-gray-800 via-white dark:via-gray-900 to-orange-50 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full aspect-square max-w-md mx-auto bg-white rounded-3xl shadow-xl flex items-center justify-center p-10">
                <img 
                  src={product.logo} 
                  alt={`${product.name} logo`}
                  className="w-full h-full max-h-56 object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {product.name}
              </h1>
              <p className="text-2xl text-primary-600 font-semibold mb-6">
                {product.tagline}
              </p>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {product.description}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {product.longDescription}
              </p>

              {product.website !== '#' && (
                <a
                  href={product.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Visit Website
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {product.benefits && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Key Benefits
              </h2>
              <div className={`grid md:grid-cols-2 gap-6 ${
                product.benefits.length > 4 ? 'lg:grid-cols-3 xl:grid-cols-5' : 'lg:grid-cols-4'
              }`}>
                {product.benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                    <CheckCircle2 className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Features
              </h2>
              <div className="space-y-4">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary-600 mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {product.businessFeatures && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 dark:from-gray-800 to-orange-50 dark:to-gray-800 rounded-2xl p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  For Businesses
                </h2>
                <div className="space-y-4">
                  {product.businessFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <HandshakeMark />
                      <p className="text-gray-700 dark:text-gray-300">{feature}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {product.businessBenefits && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 dark:from-gray-800 to-orange-50 dark:to-gray-800 rounded-2xl p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {product.businessBenefitsTitle || 'For Businesses & Institutions'}
                </h2>
                <div className="space-y-4">
                  {product.businessBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start">
                      <HandshakeMark />
                      <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Interested in {product.name}?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get in touch with us to learn more about how {product.name} can help you achieve your goals.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
