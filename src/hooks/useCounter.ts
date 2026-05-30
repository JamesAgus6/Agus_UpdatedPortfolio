import { useEffect, useState } from 'react';
import { useScrollAnimation } from './useScrollAnimation';

interface UseCounterProps {
  end: number;
  duration?: number;
  threshold?: number;
}

export const useCounter = ({ end, duration = 1000, threshold = 0.1 }: UseCounterProps) => {
  const [count, setCount] = useState(0);
  const { elementRef, isVisible } = useScrollAnimation({ threshold });

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(progress * end);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, end, duration]);

  return { count, elementRef, isVisible };
};
