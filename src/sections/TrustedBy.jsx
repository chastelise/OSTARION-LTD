import { motion } from 'framer-motion';
import urLogo from '../images/ur-logo.png';
import unipodLogo from '../images/unipod-logo.svg';

const partners = [
  {
    name: 'University of Rwanda',
    logo: urLogo,
    href: 'https://ur.ac.rw',
    invert: true,
  },
  {
    name: 'UniPod',
    logo: unipodLogo,
    href: 'https://unipod.ur.ac.rw',
  },
];

const TrustedBy = () => {
  return (
    <section id="trusted-by" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm tracking-[0.25em] uppercase text-gray-500 dark:text-gray-400 mb-10 text-center"
        >
          Trusted by
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className={`h-14 md:h-16 w-auto object-contain ${
                  partner.invert ? 'invert dark:invert-0' : ''
                }`}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
