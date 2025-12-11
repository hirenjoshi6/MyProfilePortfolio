import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

interface CounterAnimationProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export const CounterAnimation = ({ 
  end, 
  duration = 2, 
  suffix = '', 
  className = '' 
}: CounterAnimationProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  const motionValue = useSpring(0, { 
    duration: duration * 1000,
    bounce: 0 
  });
  
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView && !hasAnimated) {
      motionValue.set(end);
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, end, motionValue]);

  return (
    <motion.span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
};
