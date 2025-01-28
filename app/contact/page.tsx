import React from 'react';
import { profile } from '@/lib/data'; 
import { Button } from '@/components/ui/button'; 
import { Github, Mail } from 'lucide-react'; 
import Link from 'next/link'; 

const Contact: React.FC = () => {
  return (
    <section
      id='contact'
      className='py-16 px-5 bg-gray-100 dark:bg-gray-900 transition-all duration-500'
    >
      <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white'>
        Contact Me
      </h2>
      <div className='max-w-2xl mx-auto text-center text-gray-800 dark:text-white'>
        <p className='text-lg mb-6'>{profile.bio}</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6'>
          {/* GitHub Link */}
          <Link href={profile.contact.github} target='_blank'>
            <Button className='w-full bg-gray-800 hover:bg-gray-900 text-white flex items-center justify-center gap-2 py-3 rounded-lg transition-transform transform hover:scale-105'>
              <Github size={20} />
              GitHub
            </Button>
          </Link>

          {/* Email Link */}
          <Link href={`mailto:${profile.contact.email}`}>
            <Button className='w-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center gap-2 py-3 rounded-lg transition-transform transform hover:scale-105'>
              <Mail size={20} />
              Email Me
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
