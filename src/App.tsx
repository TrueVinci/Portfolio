import React from 'react';
import { motion } from 'framer-motion';
import { Github as GitHub, Linkedin, Mail, ChevronDown, FileDown } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { ExperienceCard } from './components/ExperienceCard';
import { SkillBar } from './components/SkillBar';
import { BlogSection } from './components/BlogSection';
import { Navigation } from './components/Navigation';
import { DataBackground } from './components/DataBackground';
import { projects, experiences, skills } from './data';

function App() {
  const nameAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100 theme-transition">
      <ThemeToggle />
      <Navigation />
      <DataBackground />
      
      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <Section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
          <div className="w-full max-w-4xl mx-auto">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 flex flex-wrap justify-center"
              variants={nameAnimation}
              initial="hidden"
              animate="visible"
            >
              {"Hemanth Kattamuri".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterAnimation}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Data Science Enthusiast & SAP PI/PO Expert
            </motion.p>
            <motion.blockquote
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg italic text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto px-4 sm:px-8 border-l-4 border-blue-500 dark:border-blue-400"
            >
              "From Middleware to Machine Learning, my journey has been an exciting gradient descent. With the right learning rate, I adapt quickly and converge efficiently. I believe I'll be a great model for your data."
            </motion.blockquote>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center gap-4 sm:gap-6 items-center flex-wrap"
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/TrueVinci"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-800"
                aria-label="GitHub Profile"
              >
                <GitHub className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/hemanthkattamuri"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-800"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:skttmuri@memphis.edu"
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-800"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Hemanth_Resume.pdf"
                download
                className="ml-0 sm:ml-4 mt-4 sm:mt-0 inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                <FileDown className="w-5 h-5" />
                Download Resume
              </motion.a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="w-8 h-8" />
              </motion.div>
            </motion.div>
          </div>
        </Section>

        {/* About Section */}
        <Section id="about" className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center gradient-text">About Me</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            <p className="mb-4">
              Currently pursuing a Master's in Management Information Systems at the University of Memphis, 
              with a focus on Data Analytics for Technology and Management. I bring extensive experience in 
              SAP PI/PO and a passion for data science.
            </p>
            <p>
              My technical expertise spans Python, R, SQL, and various data visualization tools, 
              complemented by hands-on experience in SAP middleware solutions and API testing.
            </p>
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Data Science & Analytics</h3>
              {skills.filter(skill => skill.category === 'frontend').map((skill, index) => (
                <SkillBar key={skill.id} skill={skill} index={index} />
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Backend & Integration</h3>
              {skills.filter(skill => skill.category === 'backend').map((skill, index) => (
                <SkillBar key={skill.id} skill={skill} index={index} />
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Tools & Platforms</h3>
              {skills.filter(skill => skill.category === 'tools').map((skill, index) => (
                <SkillBar key={skill.id} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Experience</h2>
          <div className="max-w-3xl mx-auto">
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </Section>

        {/* Blog Section */}
        <BlogSection />

        {/* Contact Section */}
        <Section id="contact" className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Get in Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            I'm always open to new opportunities and collaborations.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:skttmuri@memphis.edu"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Say Hello
          </motion.a>
        </Section>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Hemanth Kattamuri. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;