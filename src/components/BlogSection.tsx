import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Section } from './Section';
import { blogPosts } from '../data';

export const BlogSection: React.FC = () => {
  return (
    <Section id="blog" className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {Object.entries(blogPosts).map(([slug, post], index) => (
          <motion.article
            key={slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link to={`/blog/${slug}`}>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 gradient-text">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {post.date} · {post.readTime} min read
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="text-blue-600 dark:text-blue-400"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </Section>
  );
};