import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { blogPosts } from '../data';

export const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100 py-20 transition-colors duration-300">
      <ThemeToggle />
      
      <div className="container mx-auto px-4">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-4 gradient-text">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime} min read</span>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content.map((section, index) => (
              <div key={index} className="mb-8">
                {section.type === 'paragraph' && <p>{section.content}</p>}
                {section.type === 'heading' && <h2 className="text-2xl font-bold mb-4">{section.content}</h2>}
                {section.type === 'code' && (
                  <pre className="bg-gray-100 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto">
                    <code>{section.content}</code>
                  </pre>
                )}
              </div>
            ))}
          </div>
        </motion.article>
      </div>
    </div>
  );
};