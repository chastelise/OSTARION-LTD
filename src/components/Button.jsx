import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const Button = ({ children, onClick, className = '' }) => {
  const reduceMotion = useReducedMotion();
  const [hot, setHot] = useState(false);
  const releaseTimer = useRef(null);

  const clearRelease = () => {
    if (releaseTimer.current) {
      window.clearTimeout(releaseTimer.current);
      releaseTimer.current = null;
    }
  };

  const turnOn = () => {
    clearRelease();
    setHot(true);
  };

  const turnOff = (delay = 0) => {
    clearRelease();
    if (delay) {
      releaseTimer.current = window.setTimeout(() => setHot(false), delay);
      return;
    }
    setHot(false);
  };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      onPointerEnter={turnOn}
      onPointerLeave={() => turnOff(0)}
      onPointerDown={turnOn}
      onPointerUp={() => turnOff(window.matchMedia('(hover: none)').matches ? 450 : 0)}
      onPointerCancel={() => turnOff(0)}
      initial="rest"
      animate={hot ? 'hover' : 'rest'}
      whileTap="tap"
      variants={{
        rest: { y: 0, scale: 1 },
        hover: { y: reduceMotion ? 0 : -2, scale: 1 },
        tap: { y: 0, scale: reduceMotion ? 1 : 0.98 },
      }}
      transition={{ duration: 0.28, ease }}
      className={`hero-cta ${hot ? 'is-hot' : ''} ${className}`}
    >
      <span className="hero-cta-fill" aria-hidden="true" />
      <span className="hero-cta-label">{children}</span>
    </motion.button>
  );
};

export default Button;
