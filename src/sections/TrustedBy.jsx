import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import urLogo from '../images/ur-logo.png';
import unipodLogo from '../images/unipod-logo.svg';

const UR_BLUE = '#006699';

const partners = [
  {
    name: 'University of Rwanda',
    href: 'https://ur.ac.rw',
    render: () => (
      <span className="flex items-center gap-2 md:gap-3">
        <img
          src={urLogo}
          alt=""
          className="h-14 w-14 md:h-[4.5rem] md:w-[4.5rem] rounded-full object-cover shrink-0"
        />
        <span
          className="text-left leading-none italic whitespace-nowrap"
          style={{ color: UR_BLUE, fontFamily: 'Arial, Helvetica, sans-serif' }}
        >
          <span className="block text-[15px] md:text-[18px] font-bold tracking-wide">
            UNIVERSITY{' '}
            <span className="text-[11px] md:text-[13px] font-normal tracking-normal">
              of
            </span>
          </span>
          <span className="block text-[15px] md:text-[18px] font-bold tracking-wide mt-0.5">
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
        className="h-14 md:h-[4.5rem] w-auto object-contain shrink-0"
      />
    ),
  },
];

const PartnerCard = ({ partner, className = '', delay = 0 }) => (
  <Card className={className} delay={delay}>
    <a
      href={partner.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center px-6 py-7 md:px-10 md:py-8 min-h-[7.5rem] md:min-h-[8rem]"
    >
      {partner.render()}
    </a>
  </Card>
);

const TrustedBy = () => {
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);
  const touchStartX = useRef(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (pausedRef.current) return;
      setActive((index) => (index + 1) % partners.length);
    }, 3500);

    return () => clearInterval(id);
  }, []);

  const goTo = (index) => {
    const count = partners.length;
    setActive(((index % count) + count) % count);
  };

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

        <div
          className="md:hidden overflow-hidden"
          onTouchStart={(event) => {
            pausedRef.current = true;
            touchStartX.current = event.touches[0].clientX;
          }}
          onTouchEnd={(event) => {
            const delta = event.changedTouches[0].clientX - touchStartX.current;
            if (delta < -40) goTo(active + 1);
            if (delta > 40) goTo(active - 1);
            pausedRef.current = false;
          }}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {partners.map((partner) => (
              <div key={partner.name} className="w-full shrink-0 px-1">
                <PartnerCard partner={partner} />
              </div>
            ))}
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {partners.map((partner, index) => (
              <button
                key={partner.name}
                type="button"
                aria-label={`Show ${partner.name}`}
                onClick={() => goTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === active ? 'w-6 bg-primary-600' : 'w-2 bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:flex flex-nowrap items-stretch justify-center gap-8">
          {partners.map((partner, index) => (
            <PartnerCard
              key={partner.name}
              partner={partner}
              className="shrink-0"
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
