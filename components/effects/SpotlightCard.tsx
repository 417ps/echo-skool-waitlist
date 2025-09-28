import { motion, useMotionValue, useMotionTemplate } from 'motion/react';
import { MouseEvent, ReactNode } from 'react';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightSize?: number;
  intensity?: number;
}

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(59, 130, 246, 0.15)',
  spotlightSize = 300,
  intensity = 0.8
}: SpotlightCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const background = useMotionTemplate`
    radial-gradient(
      ${spotlightSize}px circle at ${mouseX}px ${mouseY}px,
      ${spotlightColor},
      transparent 80%
    )
  `;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg ${className}`}
      onMouseMove={handleMouseMove}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Spotlight overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background,
          opacity: intensity
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: intensity }}
        transition={{ duration: 0.3 }}
      />

      {/* Card content */}
      <div className="relative h-full">
        {children}
      </div>

      {/* Border highlight on hover */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${spotlightColor}, transparent, ${spotlightColor})`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'xor',
          padding: '1px'
        }}
        whileHover={{ opacity: 0.6 }}
      />
    </motion.div>
  );
}