import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const MouseFollower = () => {
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(0, { stiffness: 100, damping: 10 });
  const cursorY = useSpring(0, { stiffness: 100, damping: 10 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseleave', hideCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseleave', hideCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed w-6 h-6 rounded-full border-2 border-primary/50 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: cursorX,
          top: cursorY,
          x: -12,
          y: -12,
          opacity: isVisible ? 1 : 0,
        }}
      />
      <motion.div
        className="fixed w-2 h-2 rounded-full bg-primary pointer-events-none z-50 mix-blend-difference"
        style={{
          left: cursorX,
          top: cursorY,
          x: -4,
          y: -4,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
};
