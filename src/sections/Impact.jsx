import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Rocket, Users, Shield, Sparkles } from 'lucide-react';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';

const Impact = () => {
  const navigate = useNavigate();

  const impacts = [
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Pioneering cutting-edge solutions that push the boundaries of what technology can achieve for communities.',
    },
    {
      icon: Users,
      title: 'Community Empowerment',
      description: 'Building tools that give communities the power to solve their own challenges and create opportunities.',
    },
    {
      icon: Shield,
      title: 'Accessible Technology',
      description: 'Making advanced technology simple, affordable, and accessible to everyone, everywhere.',
    },
    {
      icon: Sparkles,
      title: 'Youth Development',
      description: 'Investing in the next generation of innovators, creators, and leaders who will shape the future.',
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What We Stand For
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our commitment to innovation, empowerment, and transformative technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <Card key={index} delay={index * 0.1} className="p-8 text-center group bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-orange-500 rounded-2xl flex items-center justify-center"
              >
                <impact.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">{impact.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{impact.description}</p>
            </Card>
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
            Ready to Transform the Future?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in our mission to empower communities and build technology that makes a real difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-white text-primary-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/products')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Explore Products
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;
