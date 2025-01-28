'use client';

import { profile } from '@/lib/data';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveDemo: string;
  githubLink: string;
  thumbnail?: string;
}

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleProjects, setVisibleProjects] = useState<number>(3);

  const projects = profile.projects || []; // Fallback to an empty array

  return (
    <section
      id='projects'
      className='py-16 px-5 bg-gray-100 dark:bg-gray-900 mb-4'
    >
      <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white'>
        My Projects
      </h2>
      <motion.div
        className='grid gap-8 grid-cols-1 lg:grid-cols-2'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {projects.slice(0, visibleProjects).map((project, index) => (
          <motion.div
            key={index}
            className='bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden flex flex-col hover:scale-105 transition-transform duration-200'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className='relative h-56 w-full'>
              <Image
                src={project.thumbnail || '/placeholder.svg'}
                alt={`${project.title} thumbnail`}
                fill
                style={{ objectFit: 'cover' }}
                className='transition-opacity duration-300 hover:opacity-80'
              />
            </div>
            <div className='p-6 flex flex-col flex-grow'>
              <h3 className='text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 text-gray-800 dark:text-white'>
                {project.title}
              </h3>
              <p className='text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-4 flex-grow'>
                {project.description.slice(0, 100)}...
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.techStack.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className='bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300'>
                    +{project.techStack.length - 3} more
                  </span>
                )}
              </div>
              <div className='flex items-center gap-3'>
                <Button
                  onClick={() => setSelectedProject(project)}
                  className='bg-blue-500 hover:bg-blue-600 text-white flex-grow'
                >
                  Learn More
                </Button>
                <Link href={project.liveDemo} target='_blank'>
                  <Button className='bg-green-500 hover:bg-green-600 text-white'>
                    <ExternalLink size={18} />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {visibleProjects < projects.length && (
        <div className='text-center mt-8'>
          <Button
            onClick={() =>
              setVisibleProjects((prev) => Math.min(prev + 3, projects.length))
            }
            className='bg-blue-500 hover:bg-blue-600 text-white'
          >
            Load More Projects
          </Button>
        </div>
      )}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className='bg-white dark:bg-gray-900 p-6 rounded-xl shadow-2xl max-w-2xl w-full mx-4 relative'
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 15 }}
            >
              <div className='relative h-56 w-full mb-6 rounded-lg overflow-hidden'>
                <Image
                  src={selectedProject.thumbnail || '/placeholder.svg'}
                  alt={`${selectedProject.title} thumbnail`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-800 dark:text-white'>
                {selectedProject.title}
              </h3>
              <p className='text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-6'>
                {selectedProject.description}
              </p>
              <h4 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-2 text-gray-800 dark:text-white'>
                Tech Stack:
              </h4>
              <div className='flex flex-wrap gap-2 mb-6'>
                {selectedProject.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className='bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded dark:bg-blue-900 dark:text-blue-300'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className='flex gap-4 mb-6'>
                <Link href={selectedProject.githubLink} target='_blank'>
                  <Button
                    rel='noopener noreferrer'
                    className='bg-gray-800 hover:bg-gray-900 text-white flex items-center gap-2'
                  >
                    <Github size={18} />
                    GitHub
                  </Button>
                </Link>
                <Link href={selectedProject.liveDemo} target='_blank'>
                  <Button
                    rel='noopener noreferrer'
                    className='bg-green-500 hover:bg-green-600 text-white flex items-center gap-2'
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </Button>
                </Link>
              </div>
              <Button
                onClick={() => setSelectedProject(null)}
                className='absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full'
              >
                <X size={24} />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
