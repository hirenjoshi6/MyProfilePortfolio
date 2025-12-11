import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in' | 'slide-up';
  delay?: number;
  className?: string;
  threshold?: number;
}

export const AnimatedSection = ({ 
  children, 
  animation = 'fade-up',
  delay = 0,
  className = '',
  threshold = 0.1
}: AnimatedSectionProps) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold, freezeOnceVisible: true });

  const animationClasses = {
    'fade-up': 'animate-fade-in-up',
    'fade-in': 'animate-fade-in',
    'slide-left': 'animate-slide-in-left',
    'slide-right': 'animate-slide-in-right',
    'scale-in': 'animate-scale-in',
    'slide-up': 'animate-slide-up'
  };

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0 transition-opacity duration-700',
        isVisible && 'opacity-100',
        isVisible && animationClasses[animation],
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  );
};
