import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Skill } from '../types';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

export const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
            delay: index * 0.1,
          },
        },
      }}
      className="group relative p-4 mb-4 rounded-lg bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
          />
          <span className="text-base font-medium group-hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 transition-colors duration-300">
            {skill.name}
          </span>
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        />
      </div>
    </motion.div>
  );
};