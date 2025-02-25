import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

export const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-4 rounded-lg bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400 group-hover:scale-125 transition-transform duration-300" />
        <span className="text-base font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
};