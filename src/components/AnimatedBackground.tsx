"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  const numShapes = 20;

  const shapes = React.useMemo(() => {
    return Array.from({ length: numShapes }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 10 + Math.random() * 150,
      duration: 15 + Math.random() * 20, // Slower, more subtle animation
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full bg-teal-green/10 dark:bg-white/5"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            x: '-50%',
            y: '-50%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0, 0.4, 0],
            y: ['-50%', '-60%', '-50%'],
            x: ['-50%', '-45%', '-50%'],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
