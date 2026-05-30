import { useEffect, useState } from 'react';
import { useScrollAnimation } from './useScrollAnimation';

interface UseStaggerProps {
  count: number;
  threshold?: number;
  staggerDelay?: number;
}

export const useStagger = ({ count, threshold = 0.1, staggerDelay = 0.1 }: UseStaggerProps) => {
  const [animatingIndices, setAnimatingIndices] = useState<Set<number>>(new Set());
  const { elementRef, isVisible } = useScrollAnimation({ threshold });

  useEffect(() => {
    if (!isVisible) {
      setAnimatingIndices(new Set());
      return;
    }

    let currentIndex = 0;
    const intervals: NodeJS.Timeout[] = [];

    const addIndex = () => {
      if (currentIndex < count) {
        setAnimatingIndices((prev) => new Set([...prev, currentIndex]));
        currentIndex++;
      }
    };

    // Start first animation immediately
    addIndex();

    // Add remaining animations with stagger
    while (currentIndex < count) {
      intervals.push(
        setTimeout(() => {
          addIndex();
        }, staggerDelay * 1000 * currentIndex)
      );
      currentIndex++;
    }

    return () => {
      intervals.forEach((interval) => clearTimeout(interval));
    };
  }, [isVisible, count, staggerDelay]);

  const getAnimationClass = (index: number) => {
    return animatingIndices.has(index) ? 'animate-fade-in-up' : 'opacity-0';
  };

  return { elementRef, getAnimationClass, isVisible };
};
