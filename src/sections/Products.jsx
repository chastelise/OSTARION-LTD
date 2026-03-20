import { motion } from 'framer-motion';
import { Award, ShoppingBag, Stethoscope, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';

const Products = () => {
  const products = [
    {
      icon: Award,
      name: 'ScholarMark',
      tagline: 'Empowering Young Innovators',
      description: 'A digital platform for ambitious young innovators to design and reshape their future.',
      features: [
        'Innovation challenges and hackathons',
        'Project development support',
        'Connect with investors and mentors',
        'Access to scholarships and exchange programs',
        'Apprenticeship and internship opportunities',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: ShoppingBag,
      name: 'Orderly',
      tagline: 'Hospitality Made Simple',
      description: 'A WhatsApp-based hospitality platform making services accessible and digital.',
      features: [
        'Order food from restaurants via WhatsApp',
        'Browse digital menus and promotions',
        'Book rooms, halls, and gardens',
        'Business dashboard for management',
        'Increased visibility for hospitality businesses',
      ],
      color: 'from-primary-500 to-orange-500',
    },
    {
      icon: Stethoscope,
      name: 'HMS - Harton Medical Simulation',
      tagline: 'Safe Medical Training',
      description: 'Sophisticated medical simulation platform for training healthcare professionals.',
      features: [
        'Realistic clinical simulations',
        'Disease diagnosis training',
        'Holistic patient care scenarios',
        'Safe learning environment',
        'Build confidence for independent practice',
      ],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Products"
          subtitle="Innovative solutions transforming education, healthcare, and hospitality"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} delay={index * 0.2} className="p-8 group">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <product.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-primary-600 font-medium mb-4">{product.tagline}</p>
              <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
              
              <div className="space-y-3 mb-6">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">{feature}</p>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ x: 5 }}
                className="text-primary-600 font-medium flex items-center group-hover:text-primary-700"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
