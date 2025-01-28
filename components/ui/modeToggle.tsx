'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div>
      {theme === 'light' ? (
        <Button onClick={() => setTheme('dark')} className='bg-white text-black hover:bg-white border'>
          <Moon className='h-[1.2rem] w-[1.2rem]' />
        </Button>
      ) : (
        <Button
          onClick={() => setTheme('light')}
          className='bg-black text-white hover:bg-black border'
        >
          <Sun className='h-[1.2rem] w-[1.2rem]  ' />
        </Button>
      )}
    </div>
  );
}
