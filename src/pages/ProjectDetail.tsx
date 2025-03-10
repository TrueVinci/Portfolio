import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { projectDetails } from '../data';

export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectDetails[id as keyof typeof projectDetails] : null;

  if (!project) {
    return <div>Project not found</div>;
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">{project.title}</h1>
          
          <div className="aspect-video rounded-xl overflow-hidden mb-8">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <section className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="text-gray-600 dark:text-gray-300">{project.overview}</p>
              </section>

              <section className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Methodology</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {project.methodology.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </section>

              <section className="bg-white dark:bg-slate-800 rounded-xl p-6">
                <h2 className="text-2xl font-semibold mb-4">Results</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {project.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </section>
            </div>

            <div>
              <section className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-slate-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section className="bg-white dark:bg-slate-800 rounded-xl p-6">
                <h2 className="text-2xl font-semibold mb-4">Dataset</h2>
                <a
                  href={project.datasetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <Download className="w-4 h-4" />
                  Download Dataset
                </a>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};