import { useEffect, useRef } from 'react';

interface UseParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
  disabled?: boolean;
}

export const useParallax = (options: UseParallaxOptions = {}) => {
  const { speed = 0.5, direction = 'up', disabled = false } = options;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disabled) return;

    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Only apply parallax when element is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const offset = scrollProgress * 100 * speed;
        const translateY = direction === 'up' ? -offset : offset;
        element.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (element) {
        element.style.transform = '';
      }
    };
  }, [speed, direction, disabled]);

  return ref;
};
