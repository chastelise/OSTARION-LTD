import { motion } from 'framer-motion';
import DotsLinesBackground from '../components/DotsLinesBackground';
import ConnectingLines, { useConnectingLines } from '../components/ConnectingLines';

const visionPoints = [
  {
    title: "Africa's Potential",
    description: 'We see Africa as a future oasis of prosperity, health, wealth, freedom, and peace.',
  },
  {
    title: 'Technology as Empowerment',
    description: "Technology is the catalyst that will unlock Africa's limitless potential.",
  },
  {
    title: 'Youth Innovation',
    description: 'Empowering the next generation of African innovators to lead global change.',
  },
  {
    title: 'Global Impact',
    description: "Building solutions in Africa that contribute to the world's advancement.",
  },
];

const Vision = () => {
  const { wrapRef, cardRefs, lines, size } = useConnectingLines();

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

        <div ref={wrapRef} className="relative">
          <ConnectingLines lines={lines} size={size} theme="dark" />

          <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {visionPoints.map((point, index) => (
              <motion.article
                key={point.title}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="vision-card h-full rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-8 text-center"
              >
                <h4 className="text-xl font-bold mb-3">{point.title}</h4>
                <p className="text-gray-300 leading-relaxed">{point.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
