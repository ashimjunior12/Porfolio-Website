'use client';

import { usePathname } from 'next/navigation';
import { ModeToggle } from './ui/modeToggle';
import Link from 'next/link';
import avatar from '@/public/ashim.jpg';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof document === 'undefined') return; // Prevent SSR issues

    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('mobile-menu');
      const target = event.target as HTMLElement;
      if (isOpen && nav && !nav.contains(target) && !target.closest('button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const scrollToProjects = () => {
    if (typeof document === 'undefined') return; // Ensure this only runs in the browser

    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='sticky top-0 z-50 bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo and Badge */}
          <div className='flex items-center gap-4'>
            <Link href='/' className='flex-shrink-0'>
              <Avatar>
                <AvatarImage src={avatar.src} alt='Profile' />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
            </Link>
            <Badge
              variant='outline'
              className='hidden md:flex items-center gap-2'
            >
              <span className='h-2 w-2 bg-green-400 rounded-full animate-pulse' />
              <span className='text-xs'>Available For Work</span>
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center gap-6'>
            <Link
              href='/'
              className={`px-4 py-2 text-base transition-colors duration-200 ${
                pathname === '/'
                  ? 'text-black dark:text-white font-semibold'
                  : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
              }`}
            >
              Home
            </Link>
            <button
              onClick={scrollToProjects}
              className={`px-4 py-2 text-base transition-colors duration-200 ${
                pathname === '/projects'
                  ? 'text-black dark:text-white font-semibold'
                  : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
              }`}
            >
              Projects
            </button>
            <Link
              href='/contact'
              className={`px-4 py-2 text-base transition-colors duration-200 ${
                pathname === '/contact'
                  ? 'text-black dark:text-white font-semibold'
                  : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
              }`}
            >
              Contact
            </Link>
            <Link
              href='/resume.pdf'
              download='aadarsha_resume.pdf'
              target='_blank'
              className='px-4 py-2 text-base transition-colors duration-200 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
            >
              Resume
            </Link>
            <ModeToggle />
          </div>

          {/* Menu Button */}
          <div className='flex items-center gap-4 lg:hidden'>
            <ModeToggle />
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setIsOpen(!isOpen)}
              aria-label='Toggle menu'
            >
              {isOpen ? (
                <X className='h-5 w-5' />
              ) : (
                <Menu className='h-5 w-5' />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Navigation Menu */}
      <div
        id='mobile-menu'
        className={`lg:hidden absolute w-full bg-background border-t dark:border-gray-800 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className='py-1 space-y-1'>
          <Link
            href='/'
            className={`block px-4 py-2 text-base transition-colors duration-200 ${
              pathname === '/'
                ? 'text-black dark:text-white font-semibold'
                : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
            }`}
          >
            Home
          </Link>
          <button
            onClick={scrollToProjects}
            className={`block px-4 py-2 text-base transition-colors duration-200 ${
              pathname === '/projects'
                ? 'text-black dark:text-white font-semibold'
                : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
            }`}
          >
            Projects
          </button>
          <Link
            href='/contact'
            className={`block px-4 py-2 text-base transition-colors duration-200 ${
              pathname === '/contact'
                ? 'text-black dark:text-white font-semibold'
                : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
            }`}
          >
            Contact
          </Link>
          <Link
            href='/resume.pdf'
            download='aadarsha_resume.pdf'
            target='_blank'
            className='block px-4 py-2 text-base transition-colors duration-200 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
