// File: data.tsx

import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// --- PROJECT DATABASE ---
// This array holds the detailed information for each project.
const PROJECT_CONTENT = [
  {
    title: 'Chatify',
    description:
      'Personal Chat Room or Workspace to share resources and hangout with friends built with React.js, Material-UI, and Firebase. Features realtime messaging, image sharing, and message reactions.',
    techStack: ['React', 'Material-UI', 'Firebase'],
    date: '2024',
    links: [
      { name: 'GitHub Repository', url: 'https://github.com/Kajal-Tiwari-22/Chat-application' },
      { name: 'Live Demo', url: 'https://chat-buddy23.vercel.app/' },
    ],
    images: [{ src: '/projects/chatify.png', alt: 'Chatify - Personal Chat Room' }],
  },
  {
    title: 'Book-Heaven',
    description:
      'A full-stack Book Application built with the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to browse, search, and manage books with user authentication and real-time CRUD functionality.',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    date: '2024',
    links: [
      { name: 'GitHub Repository', url: 'https://github.com/Kajal-Tiwari-22/Book-selling-app' },
      { name: 'Live Demo', url: 'https://bookheaven23.netlify.app/' },
    ],
    images: [{ src: '/projects/bookheaven.png', alt: 'Book-Heaven app screenshots' }],
  },
  {
    title: 'Job-Insider',
    description:
      'A full-stack Job Portal that enables users to search and apply for jobs, while employers can post job listings and manage applications with secure authentication and real-time updates.',
    techStack: ['React', 'Node.js', 'MongoDB'],
    date: '2024',
    links: [
      { name: 'GitHub Repository', url: 'https://github.com/Kajal-Tiwari-22/Job-insider' },
      { name: 'Live Demo', url: 'https://job-insider-eight.vercel.app/' },
    ],
    images: [{ src: '/projects/jobinsider.png', alt: 'Job-Insider - Job portal' }],
  },
  {
    title: 'AI Trip Planner',
    description:
      'An AI-powered Trip Planner that generates personalized itineraries based on user preferences, budget, and travel dates, offering tailored recommendations for destinations, accommodations, and activities.',
    techStack: ['React', 'AI', 'Firebase'],
    date: '2024',
    links: [
      { name: 'GitHub Repository', url: 'https://github.com/Kajal-Tiwari-22/Tour-travel' },
    ],
    images: [{ src: '/projects/ai-portfolio-preview.png', alt: 'AI Trip Planner preview' }],
  },
  {
    title: 'Covid-Management',
    description:
      'A COVID-19 Management System designed to streamline patient registration, test scheduling, and result tracking, providing real-time dashboards for administrators to monitor testing data and vaccination status.',
    techStack: ['PHP', 'MySQL', 'JavaScript'],
    date: '2023',
    links: [
      { name: 'GitHub Repository', url: 'https://github.com/Kajal-Tiwari-22/Covid-Management-' },
    ],
    images: [{ src: '/projects/covid.png', alt: 'COVID-19 Management System' }],
  },
];

// --- COMPONENT & INTERFACE DEFINITIONS ---
// Define interface for project prop
interface ProjectProps {
  title: string;
}

// This component dynamically renders the project details
const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data from the database
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- MAIN DATA EXPORT ---
// This is the data used by your main portfolio page.
export const data = [
  {
    category: 'Full-Stack & AI',
    title: 'Chatify',
    src: '/projects/chatify.png',
    content: (
      <ProjectContent project={{ title: 'Chatify' }} />
    ),
  },
  {
    category: 'Full-Stack',
    title: 'Book-Heaven',
    src: '/projects/bookheaven.png',
    content: (
      <ProjectContent project={{ title: 'Book-Heaven' }} />
    ),
  },
  {
    category: 'Full-Stack',
    title: 'Job-Insider',
    src: '/projects/jobinsider.png',
    content: (
      <ProjectContent project={{ title: 'Job-Insider' }} />
    ),
  },
  {
    category: 'AI & Tools',
    title: 'AI Trip Planner',
    src: '/projects/tripplanner.png',
    content: (
      <ProjectContent project={{ title: 'AI Trip Planner' }} />
    ),
  },
  {
    category: 'Healthcare',
    title: 'Covid-Management',
    src: '/projects/covid.png',
    content: (
      <ProjectContent project={{ title: 'Covid-Management' }} />
    ),
  },
];