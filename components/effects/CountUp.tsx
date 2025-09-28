import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  separator?: string;
  decimals?: number;
  className?: string;
  trigger?: 'view' | 'immediate';
  suffix?: string;
  prefix?: string;
}

export default function CountUp({
  from = 0,
  to,
  duration = 2000,
  separator = ',',
  decimals = 0,
  className = '',
  trigger = 'view',
  suffix = '',
  prefix = ''
}: CountUpProps) {
  const [count, setCount] = useState(from);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  const formatNumber = (num: number): string => {
    const fixed = num.toFixed(decimals);
    const parts = fixed.split('.');
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return decimals > 0 ? `${integerPart}.${parts[1]}` : integerPart;
  };

  const animateCount = () => {
    if (hasAnimated) return;
    
    setHasAnimated(true);
    const startTime = Date.now();
    const difference = to - from;

    const updateCount = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing function for smooth animation
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = from + (difference * easeOutExpo);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(to);
      }
    };

    requestAnimationFrame(updateCount);
  };

  useEffect(() => {
    if (trigger === 'immediate') {
      animateCount();
      return;
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCount();
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const currentRef = elementRef.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasAnimated, trigger]);

  return (
    <motion.span
      ref={elementRef}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {prefix}{formatNumber(count)}{suffix}
    </motion.span>
  );
}