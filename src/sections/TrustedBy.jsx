import { motion } from 'framer-motion';
import urLogo from '../images/ur-logo.png';
import unipodLogo from '../images/unipod-logo.svg';

const UR_BLUE = '#006699';

const partners = [
  {
    name: 'University of Rwanda',
    href: 'https://ur.ac.rw',
    render: () => (
      <span className="flex items-center gap-1.5 md:gap-2">
        <img
          src={urLogo}
          alt=""
          className="h-9 w-9 md:h-14 md:w-14 rounded-full object-cover shrink-0"
        />
        <span
          className="text-left leading-none italic whitespace-nowrap"
          style={{ color: UR_BLUE, fontFamily: 'Arial, Helvetica, sans-serif' }}
        >
          <span className="block text-[11px] md:text-[14px] font-bold tracking-wide">
            UNIVERSITY{' '}
            <span className="text-[8px] md:text-[11px] font-normal tracking-normal">
              of
            </span>
          </span>
          <span className="block text-[11px] md:text-[14px] font-bold tracking-wide mt-px">
            RWANDA
          </span>
        </span>
      </span>
    ),
  },
  {
    name: 'UniPod',
    href: 'https://unipod.ur.ac.rw',
    render: () => (
      <img
        src={unipodLogo}
        alt="UniPod"
        className="h-9 md:h-16 w-auto object-contain shrink-0"
      />
    ),
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

        <div className="flex flex-nowrap items-center justify-center gap-5 sm:gap-12 md:gap-20">
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
              className="shrink-0 opacity-80 hover:opacity-100 transition-opacity"
            >
              {partner.render()}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
