'use client';
import { profile } from '@/lib/data';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { FaGithub } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';
import { motion } from 'framer-motion';
// import Navbar  from '@/components/Navbar';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationComponent';

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// Import the animation data with ES modules
import animationData from '@/public/animation.json';

export default function Home() {
  return (
    <>
      {/* Navbar Section */}
      {/* <Navbar /> */}

      {/* Main Intro Section */}
      <div className='min-h-[80vh] flex items-center justify-center px-4 py-10'>
        <div className='max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16'>
          {/* Left content section */}
          <div className='flex-1 space-y-6 text-center lg:text-left'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='space-y-4'
            >
              <span className='inline-block px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full text-primary font-medium text-sm'>
                👋 Open to Work
              </span>

              <h1 className='text-2xl lg:text-5xl font-bold text-black dark:text-white'>
                Hi, I&apos;m {profile.name}
              </h1>

              <p className='text-sm lg:text-xl text-muted-foreground max-w-2xl text-left'>
                {profile.bio}
              </p>

              <div className='flex flex-wrap gap-3'>
                {profile.skills.slice(0, 6).map((skill, index) => (
                  <span
                    key={index}
                    className='px-3 py-1 text-sm bg-secondary/50 dark:bg-secondary/30 rounded-full text-secondary-foreground'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Contact & GitHub Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className='flex flex-wrap gap-4 justify-center lg:justify-start'
            >
              <Link href='/contact'>
                <Button size='lg' className='gap-2'>
                  <MdEmail className='text-lg' />
                  Get in Touch
                </Button>
              </Link>
              <Link href={profile.contact.github} target='_blank'>
                <Button size='lg' variant='outline' className='gap-2'>
                  <FaGithub className='text-lg' />
                  View Projects
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Animation Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='flex-1 hidden lg:block'
          >
            <Lottie
              animationData={animationData}
              className='w-full max-w-xl'
              loop={true}
            />
          </motion.div>
        </div>
      </div>

      {/* Projects Section */}
      <section className='py-10 bg-gray-50 dark:bg-gray-900'>
        <ProjectsSection />
      </section>

      {/* Education Section */}
      <section className='py-10 bg-white dark:bg-gray-800'>
        <EducationSection />
      </section>
    </>
  );
}
