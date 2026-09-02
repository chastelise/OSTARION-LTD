import { motion } from 'framer-motion';
import { Globe, Zap, Users, TrendingUp } from 'lucide-react';
import DotsLinesBackground from '../components/DotsLinesBackground';

const Vision = () => {
  const visionPoints = [
    {
      icon: Globe,
      title: "Africa's Potential",
      description: "We see Africa as a future oasis of prosperity, health, wealth, freedom, and peace.",
    },
    {
      icon: Zap,
      title: "Technology as Empowerment",
      description: "Technology is the catalyst that will unlock Africa's limitless potential.",
    },
    {
      icon: Users,
      title: "Youth Innovation",
      description: "Empowering the next generation of African innovators to lead global change.",
    },
    {
      icon: TrendingUp,
      title: "Global Impact",
      description: "Building solutions in Africa that contribute to the world's advancement.",
    },
  ];

  return (
    <section id="vision" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <DotsLinesBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Vision
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            To become the leading technology company in Africa that empowers Africans and contributes to the world
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-primary-500 to-orange-500 rounded-2xl p-12 md:p-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">We Believe Africa Must Shine Again</h3>
            <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
              Ostarion aims to be the <span className="font-bold text-yellow-300">star</span> that guides Africa toward its destined <span className="font-bold text-yellow-300">oasis</span> of innovation, prosperity, and global leadership.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="liquid-glass w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center"
              >
                <point.icon className="w-10 h-10 text-white" />
              </motion.div>
              <h4 className="text-xl font-bold mb-3">{point.title}</h4>
              <p className="text-gray-300 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
