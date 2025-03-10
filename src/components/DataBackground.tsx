import React from 'react';
import { motion } from 'framer-motion';

export const DataBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Binary Code Animation */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -100 }}
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              y: [0, 1000],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute text-xs font-mono"
            style={{ left: `${i * 10}%` }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j} className="my-2">
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Neural Network Nodes */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.circle
            key={i}
            cx={Math.random() * 100 + '%'}
            cy={Math.random() * 100 + '%'}
            r="2"
            fill="currentColor"
            initial={{ opacity: 0.3 }}
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </svg>
    </div>
  );
};