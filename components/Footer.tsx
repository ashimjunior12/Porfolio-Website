import { profile } from '@/lib/data';
import { Github, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className='py-8 mt-10'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0'>
            {profile.footer}
          </p>
          <div className='flex space-x-4'>
            <Link
              href={`mailto:${profile.contact.email}`}
              className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors'
              aria-label='Email'
            >
              <Mail size={20} />
            </Link>
            <Link
              href={profile.contact.github}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors'
              aria-label='GitHub'
            >
              <Github size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
