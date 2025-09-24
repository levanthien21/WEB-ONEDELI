import { useState, useEffect } from 'react';

interface UseScrollReturn {
  isScrolled: boolean;
  scrollY: number;
  scrollDirection: 'up' | 'down';
}

export const useScroll = (threshold: number = 50): UseScrollReturn => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > threshold);
      setScrollY(currentScrollY);
      
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return { isScrolled, scrollY, scrollDirection };
};
