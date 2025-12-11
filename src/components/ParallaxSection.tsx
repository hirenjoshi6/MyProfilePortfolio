import { ReactNode } from 'react';
import { useParallax } from '@/hooks/useParallax';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down';
  className?: string;
}

export const ParallaxSection = ({ 
  children, 
  speed = 0.3, 
  direction = 'up',
  className = '' 
}: ParallaxSectionProps) => {
  const ref = useParallax({ speed, direction });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
