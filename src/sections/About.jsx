import { motion } from 'framer-motion';
import { Star, Target, Heart, Lightbulb } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';

const About = () => {
  const values = [
    {
      icon: Star,
      title: 'Our Name',
      description: 'Ostarion means "A star to the oasis" - guiding Africa toward prosperity, health, and freedom.',
    },
    {
      icon: Target,
      title: 'Our Mission',
      description: 'Develop software systems that serve communities and empower people through accessible technology.',
    },
    {
      icon: Heart,
      title: 'Our Focus',
      description: 'We concentrate on three vital sectors: Education, Healthcare, and Hospitality.',
    },
    {
      icon: Lightbulb,
      title: 'Our Philosophy',
      description: 'We believe Africa must shine again. Technology is the lever that will move the continent forward.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Ostarion"
          subtitle="A star guiding Africa to its destined oasis of innovation and prosperity"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} delay={index * 0.1} className="p-8">
              <value.icon className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-primary-50 to-orange-50 rounded-3xl p-12 md:p-16 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl mb-6">💡</div>
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-6 italic">
              "Give me a lever long enough and a fulcrum strong enough, and I will move the earth."
            </blockquote>
            <p className="text-lg text-gray-700 mb-4">— Archimedes</p>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our mission is to give ambitious youth the <span className="font-bold text-primary-600">tools (the lever)</span> and the <span className="font-bold text-primary-600">support (the fulcrum)</span> they need to move the world.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
