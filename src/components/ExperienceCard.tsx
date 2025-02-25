import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={variants}
      className="mb-8 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-blue-500 dark:before:bg-blue-400 hover:before:bg-blue-600 dark:hover:before:bg-blue-500 transition-colors duration-300"
    >
      <motion.div
        whileHover={{ x: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3 className="text-xl font-semibold">{experience.position}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-2">{experience.company}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{experience.duration}</p>
        <ul className="list-disc list-inside space-y-2">
          {experience.description.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.3 + i * 0.1 }}
              className="text-gray-600 dark:text-gray-300"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};