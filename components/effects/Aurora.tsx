import { motion } from 'motion/react';

interface AuroraProps {
  className?: string;
  colors?: string[];
  size?: 'sm' | 'md' | 'lg' | 'xl';
  speed?: 'slow' | 'normal' | 'fast';
  opacity?: number;
}

export default function Aurora({
  className = '',
  colors = ['rgba(59, 130, 246, 0.1)', 'rgba(168, 85, 247, 0.1)', 'rgba(236, 72, 153, 0.1)'],
  size = 'lg',
  speed = 'normal',
  opacity = 0.6
}: AuroraProps) {
  const sizeClasses = {
    sm: 'w-[150%] h-[150%] -top-[25%] -left-[25%]',
    md: 'w-[200%] h-[200%] -top-[50%] -left-[50%]',
    lg: 'w-[300%] h-[300%] -top-[100%] -left-[100%]',
    xl: 'w-[400%] h-[400%] -top-[150%] -left-[150%]'
  };

  const speedSettings = {
    slow: { duration: 30, blur: 120 },
    normal: { duration: 20, blur: 100 },
    fast: { duration: 15, blur: 80 }
  };

  const config = speedSettings[speed];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        className={`absolute ${sizeClasses[size]}`}
        style={{
          background: `linear-gradient(45deg, transparent, ${colors[0]}, transparent, ${colors[1]}, transparent, ${colors[2] || colors[0]})`,
          filter: `blur(${config.blur}px)`,
          opacity: opacity
        }}
        animate={{
          rotate: 360,
          y: [0, -50, 0]
        }}
        transition={{
          rotate: {
            duration: config.duration,
            repeat: Infinity,
            ease: "linear"
          },
          y: {
            duration: config.duration * 0.7,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />
      
      {/* Secondary aurora layer for more depth */}
      <motion.div
        className={`absolute ${sizeClasses[size]}`}
        style={{
          background: `linear-gradient(135deg, ${colors[1] || colors[0]}, transparent, ${colors[2] || colors[1]}, transparent, ${colors[0]})`,
          filter: `blur(${config.blur * 0.8}px)`,
          opacity: opacity * 0.7
        }}
        animate={{
          rotate: -360,
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{
          rotate: {
            duration: config.duration * 1.3,
            repeat: Infinity,
            ease: "linear"
          },
          x: {
            duration: config.duration * 0.9,
            repeat: Infinity,
            ease: "easeInOut"
          },
          y: {
            duration: config.duration * 1.1,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />
    </div>
  );
}