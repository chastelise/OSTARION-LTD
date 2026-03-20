import { motion } from 'framer-motion';
import { Award, ShoppingBag, Stethoscope, ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const products = [
    {
      icon: Award,
      name: 'ScholarMark',
      tagline: 'Empowering Young Innovators',
      description: 'A digital platform for ambitious young innovators designed for talent development and career guidance to help them design and reshape their future.',
      longDescription: 'ScholarMark is more than just a platform - it\'s a comprehensive ecosystem that nurtures the next generation of African innovators. We provide the tools, connections, and opportunities that ambitious youth need to transform their ideas into reality.',
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
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: ShoppingBag,
      name: 'Orderly',
      tagline: 'Hospitality Made Simple',
      description: 'A system designed to make hospitality services simple, easy, and accessible to everyone through WhatsApp - a familiar and well-known platform.',
      longDescription: 'Orderly revolutionizes the hospitality industry by leveraging WhatsApp\'s familiar interface to create seamless connections between businesses and customers. No apps to download, no complicated systems - just simple, accessible service.',
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
      color: 'from-primary-500 to-orange-500',
    },
    {
      icon: Stethoscope,
      name: 'HMS - Harton Medical Simulation',
      tagline: 'Safe Medical Training',
      description: 'A highly sophisticated technology system that simulates clinical patient treatment in a virtual environment where errors do not cost lives.',
      longDescription: 'HMS transforms medical education by providing a safe, realistic environment for healthcare professionals to practice and perfect their skills. Our advanced simulation technology bridges the gap between theory and practice.',
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
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Products</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Innovative solutions transforming education, healthcare, and hospitality across Africa
            </p>
          </motion.div>

          <div className="space-y-24">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`${index % 2 === 1 ? 'bg-white' : 'bg-gray-50'} rounded-3xl p-8 md:p-12`}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6`}>
                      <product.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h2 className="text-4xl font-bold text-gray-900 mb-3">{product.name}</h2>
                    <p className="text-primary-600 font-semibold text-lg mb-4">{product.tagline}</p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">{product.description}</p>
                    <p className="text-gray-600 leading-relaxed mb-8">{product.longDescription}</p>

                    {product.benefits && (
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {product.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <Card className="p-8 bg-white">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                      <div className="space-y-4">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-primary-600 mt-2 mr-3 flex-shrink-0"></div>
                            <p className="text-gray-700">{feature}</p>
                          </div>
                        ))}
                      </div>

                      {product.businessFeatures && (
                        <>
                          <div className="my-8 border-t border-gray-200"></div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-6">For Businesses</h3>
                          <div className="space-y-4">
                            {product.businessFeatures.map((feature, idx) => (
                              <div key={idx} className="flex items-start">
                                <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                                <p className="text-gray-700">{feature}</p>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </Card>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 bg-gradient-to-r from-primary-600 to-orange-600 rounded-3xl p-12 md:p-16 text-center text-white"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in Our Solutions?
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our products can transform your organization or help you achieve your goals.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
