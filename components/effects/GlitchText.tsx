import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchClassName?: string;
  speed?: number;
  intensity?: number;
  trigger?: 'hover' | 'view' | 'immediate';
  duration?: number;
}

export default function GlitchText({
  text,
  className = '',
  glitchClassName = 'text-red-500',
  speed = 50,
  intensity = 3,
  trigger = 'view',
  duration = 2000
}: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
  
  const glitchText = () => {
    if (hasTriggered && trigger === 'view') return;
    
    setIsGlitching(true);
    if (trigger === 'view') setHasTriggered(true);
    
    let iterations = 0;
    const maxIterations = duration / speed;
    
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (Math.random() < 0.1 * intensity) {
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
            if (iterations > maxIterations * 0.7) {
              return text[index];
            }
            return Math.random() < 0.3 ? text[index] : glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join('')
      );
      
      iterations++;
      if (iterations >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsGlitching(false);
      }
    }, speed);
  };

  useEffect(() => {
    if (trigger === 'immediate') {
      glitchText();
    } else if (trigger === 'view') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasTriggered) {
            glitchText();
          }
        },
        { threshold: 0.1 }
      );

      const element = document.getElementById(`glitch-${text.replace(/\s+/g, '-')}`);
      if (element) observer.observe(element);

      return () => {
        if (element) observer.unobserve(element);
      };
    }
  }, [trigger, hasTriggered]);

  return (
    <motion.span
      id={`glitch-${text.replace(/\s+/g, '-')}`}
      className={`${className} ${isGlitching ? glitchClassName : ''} relative inline-block`}
      onMouseEnter={trigger === 'hover' ? glitchText : undefined}
      animate={{
        textShadow: isGlitching ? [
          '2px 0 #ff0000',
          '-2px 0 #00ff00',
          '2px 0 #0000ff',
          '-2px 0 #ff0000'
        ] : 'none'
      }}
      transition={{
        duration: 0.1,
        repeat: isGlitching ? Infinity : 0,
        repeatType: 'reverse'
      }}
    >
      {displayText}
      
      {/* Glitch overlay effects */}
      {isGlitching && (
        <>
          <motion.span
            className="absolute inset-0 opacity-70"
            style={{ color: '#ff0000' }}
            animate={{
              x: [0, 2, -2, 1, -1, 0],
              opacity: [0.7, 0.9, 0.5, 0.8, 0.6, 0.7]
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          >
            {displayText}
          </motion.span>
          <motion.span
            className="absolute inset-0 opacity-50"
            style={{ color: '#00ff00' }}
            animate={{
              x: [0, -2, 2, -1, 1, 0],
              opacity: [0.5, 0.8, 0.4, 0.7, 0.5, 0.6]
            }}
            transition={{
              duration: 0.15,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          >
            {displayText}
          </motion.span>
        </>
      )}
    </motion.span>
  );
}