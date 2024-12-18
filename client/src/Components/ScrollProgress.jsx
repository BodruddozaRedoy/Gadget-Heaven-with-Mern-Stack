import React from 'react';
import { motion, useScroll } from 'framer-motion';

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-3 bg-purple-400 origin-left z-50"
    />
  );
}

export default ScrollProgressBar;
