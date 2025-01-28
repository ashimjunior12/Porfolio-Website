'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building, BookOpen } from 'lucide-react';
import { profile } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function EducationSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className='py-16 px-4 bg-gray-50 dark:bg-gray-900'>
      <motion.div
        className='max-w-3xl mx-auto'
        initial='hidden'
        animate='visible'
        variants={containerVariants}
      >
        <h2 className='text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white'>
          Education
        </h2>
        <Card className='overflow-hidden'>
          <CardContent className='p-6'>
            <motion.div
              variants={itemVariants}
              className='flex items-center mb-4'
            >
              <GraduationCap className='w-6 h-6 mr-2 text-blue-500' />
              <h3 className='md:text-xl text-sm font-semibold'>
                {profile.education.degree}
              </h3>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className='flex items-center mb-2'
            >
              <Building className='w-5 h-5 mr-2 text-gray-500' />
              <p className='text-gray-700  dark:text-gray-300'>
                {profile.education.institution}
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className='flex items-center mb-4'
            >
              <BookOpen className='w-5 h-5 mr-2 text-gray-500' />
              <p className='text-gray-700 dark:text-gray-300'>
                {profile.education.university}
              </p>
            </motion.div>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className='text-gray-600 dark:text-gray-400 mb-4'>
                  During my time at {profile.education.institution}, I developed
                  a strong foundation in computer science. I participated in various projects which helped me apply theoretical knowledge to
                  practical scenarios.
                </p>
                
              </motion.div>
            )}
            <motion.div variants={itemVariants} className='mt-4'>
              <Button
                onClick={() => setIsExpanded(!isExpanded)}
                variant='outline'
                className='w-full'
              >
                {isExpanded ? 'Show Less' : 'Learn More'}
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
