export interface Education {
  institution: string;
  university: string;
  degree: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveDemo: string;
  thumbnail: string; 
}

export interface Contact {
  email: string;
  github: string;
}

export interface Profile {
  name: string;
  bio: string;
  education: Education;
  skills: string[];
  projects: Project[];
  contact: Contact;
  footer: string;
}

export const profile: Profile = {
  name: 'Aadarsha Bhattarai',
  bio: 'Frontend Developer from Nepal, with a passion for building user-friendly web experiences and constantly learning to grow as a fullstack developer.',

  education: {
    institution: 'Patan Multiple Campus',
    university: 'Tribhuvan University',
    degree: "Bachelor's Degree ",
  },
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React.js',
    'Next.js',
    'Tailwind CSS',
    'ShadCN',
    'GitHub',
  ],
  projects: [
    {
      title: 'Astroship',
      description:
        'Astroship is a responsive portfolio built with React.js, Next.js, TypeScript, Tailwind CSS. It features smooth animations, SEO optimization, and interactive navigation. Deployed on Vercel for seamless performance.',
      techStack: ['React', 'TypeScript', 'Next.Js'],
      githubLink: 'https://github.com/ashimjunior12/Astroship',
      liveDemo: 'https://astroship-tezz.vercel.app/',
      thumbnail: '/image.png', 
    },
    {
      title: 'To-Do Progress',
      description:
        'To-Do Progress is a task management app built with React.js, TypeScript, and Tailwind CSS. It includes features like task tracking, progress visualization, and a responsive design. Deployed on Vercel for efficient performance.',
      techStack: ['React', 'Tailwind CSS', 'TypeScript'],
      githubLink: 'https://github.com/ashimjunior12/to-do',
      liveDemo: 'https://to-do-progress.vercel.app/',
      thumbnail: '/image1.png', 
    },
    {
      title: 'Random Blog App',
      description:
        'Random Blog App is a blogging platform built with React.js and styled using Tailwind CSS. It allows users to write, edit, and store blog posts locally using localStorage, ensuring data persistence. The app features a clean, responsive design for an optimal user experience. Deployed on Netlify.',
      techStack: ['Shadcn', 'React', 'Tailwind CSS'],
      githubLink: 'https://github.com/ashimjunior12/blog-app',
      liveDemo: 'https://random-blog-app.netlify.app/',
      thumbnail: '/image 2.png', 
    },
  ],
  contact: {
    email: 'bhattaraiashim789@gmail.com',
    github: 'https://github.com/ashimjunior12',
    
  },
  footer: '© 2025 Aadarsha Bhattarai. All rights reserved.',
};
