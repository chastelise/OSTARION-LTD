import { motion } from 'framer-motion';
import { Heart, Users, Globe } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import ConnectingLines, { useConnectingLines } from '../components/ConnectingLines';
import ceoPhoto from '../images/founder & ceo.png';
import cooPhoto from '../images/founder-coo.jpeg';

const values = [
  {
    title: 'Our Mission',
    description: 'Develop software systems that serve communities and empower people through accessible technology.',
  },
  {
    title: 'Our Focus',
    description: 'We concentrate on three vital sectors: Education, Healthcare, and Hospitality.',
  },
  {
    title: 'Our Philosophy',
    description: 'We believe Africa must shine again. Technology is the lever that will move the continent forward.',
  },
];

const sectors = [
  {
    icon: Users,
    title: 'Education',
    description: 'Empowering young innovators with platforms for talent development, career guidance, and professional growth through hackathons, mentorship, and global opportunities.',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Revolutionizing medical training with sophisticated simulation technology that creates safe learning environments for healthcare professionals.',
  },
  {
    icon: Globe,
    title: 'Hospitality',
    description: 'Transforming hospitality services through accessible digital platforms that connect businesses with customers seamlessly.',
  },
];

const founders = [
  {
    name: 'Twese Hozana Chaste',
    photo: ceoPhoto,
    imagePosition: 'center 8%',
  },
  {
    name: 'Berwa Derrick',
    photo: cooPhoto,
    imagePosition: 'center 8%',
  },
];

const AboutPage = () => {
  const { wrapRef, cardRefs, lines, size } = useConnectingLines();

  return (
    <div className="pt-28 bg-white dark:bg-gray-900">
      <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-primary-600">Ostarion</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A star guiding Africa to its destined oasis of innovation and prosperity
            </p>
          </motion.div>

          <div ref={wrapRef} className="relative mb-16">
            <ConnectingLines lines={lines} size={size} theme="light" />
            <div className="relative z-10 grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              {values.map((value, index) => (
                <motion.article
                  key={value.title}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full rounded-2xl bg-white dark:bg-gray-800 shadow-lg p-8 text-center"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm tracking-[0.2em] uppercase text-primary-600 mb-12 text-center">
            Founders
          </p>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((person, index) => (
              <Card key={person.name} delay={index * 0.08} className="overflow-hidden">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-full aspect-[4/5] object-cover"
                  style={{ objectPosition: person.imagePosition }}
                />
                <h3 className="px-6 py-5 text-center text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {person.name}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Focus Sectors"
            subtitle="Transforming three critical industries with innovative technology solutions"
          />

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {sectors.map((sector, index) => (
              <Card key={index} delay={index * 0.2} className="p-10 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-orange-500 rounded-2xl flex items-center justify-center">
                  <sector.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">{sector.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{sector.description}</p>
              </Card>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-12 md:p-16 text-center border border-transparent dark:border-gray-700"
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-6xl mb-6">💡</div>
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100 mb-6 italic">
                "Give me a lever long enough and a fulcrum strong enough, and I will move the earth."
              </blockquote>
              <p className="text-lg text-gray-700 dark:text-gray-400 mb-4">— Archimedes</p>
              <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Our mission is to give ambitious youth the <span className="font-bold text-primary-600">tools (the lever)</span> and the <span className="font-bold text-primary-600">support (the fulcrum)</span> they need to move the world.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Vision for Africa</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              To become the leading technology company in Africa that empowers Africans and contributes to the world through transformative technology.
            </p>

            <div className="inline-block bg-gradient-to-r from-primary-500 to-orange-500 rounded-2xl p-12 md:p-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">We Believe Africa Must Shine Again</h3>
              <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                Ostarion aims to be the <span className="font-bold text-yellow-300">star</span> that guides Africa toward its destined <span className="font-bold text-yellow-300">oasis</span> of innovation, prosperity, and global leadership.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
