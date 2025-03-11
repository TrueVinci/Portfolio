import React from 'react';
import { motion } from 'framer-motion';

export const DataBackground: React.FC = () => {
  // Generate random data points for scatter plot
  const generateScatterData = (count: number) => {
    return Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2
    }));
  };

  // Generate sine wave points
  const generateSineWave = () => {
    return Array.from({ length: 50 }, (_, i) => ({
      x: (i / 50) * 100,
      y: 50 + Math.sin((i / 50) * Math.PI * 4) * 20
    }));
  };

  const scatterData = generateScatterData(30);
  const sineWavePoints = generateSineWave();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Scatter Plot */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-40">
          <defs>
            <radialGradient id="pointGradient">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
          </defs>
          {scatterData.map((point, i) => (
            <motion.g key={`scatter-${i}`}>
              <motion.circle
                cx={`${point.x}%`}
                cy={`${point.y}%`}
                r={point.size}
                fill="url(#pointGradient)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
              {/* Connecting lines */}
              {i < scatterData.length - 1 && (
                <motion.line
                  x1={`${point.x}%`}
                  y1={`${point.y}%`}
                  x2={`${scatterData[i + 1].x}%`}
                  y2={`${scatterData[i + 1].y}%`}
                  stroke="#3B82F6"
                  strokeWidth="0.5"
                  strokeOpacity="0.2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              )}
            </motion.g>
          ))}
        </svg>
      </div>

      {/* Sine Wave */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-30">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <motion.path
            d={`M ${sineWavePoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')}`}
            stroke="url(#waveGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: [0, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>
      </div>

      {/* Data Flow Lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`flow-${i}`}
            className="absolute h-px bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30"
            style={{
              width: `${Math.random() * 20 + 10}%`,
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Neural Network Nodes */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-50">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {Array.from({ length: 20 }).map((_, i) => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            return (
              <g key={`node-${i}`} filter="url(#glow)">
                <motion.circle
                  cx={`${x}%`}
                  cy={`${y}%`}
                  r="3"
                  fill="#60A5FA"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                    r: [3, 4, 3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
                {Array.from({ length: 2 }).map((_, j) => {
                  const targetNode = Math.floor(Math.random() * 20);
                  const targetX = Math.random() * 100;
                  const targetY = Math.random() * 100;
                  return (
                    <motion.path
                      key={`connection-${i}-${j}`}
                      d={`M ${x} ${y} Q ${(x + targetX) / 2 + (Math.random() * 20 - 10)} ${
                        (y + targetY) / 2 + (Math.random() * 20 - 10)
                      } ${targetX} ${targetY}`}
                      stroke="#60A5FA"
                      strokeWidth="0.5"
                      strokeOpacity="0.2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{
                        pathLength: [0, 1],
                        opacity: [0.1, 0.3, 0.1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.1 + j * 0.2,
                      }}
                    />
                  );
                })}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Binary Code Rain */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`binary-${i}`}
            className="absolute font-mono text-xs whitespace-nowrap"
            style={{
              left: `${i * 7}%`,
              top: "-20px",
            }}
            initial={{ y: -20 }}
            animate={{
              y: ["0vh", "100vh"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <motion.div
                key={`digit-${j}`}
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  color: ["#60A5FA", "#818CF8", "#60A5FA"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                className="my-1"
              >
                {Math.random() > 0.5 ? "1" : "0"}
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};