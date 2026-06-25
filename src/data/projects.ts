export interface Project {
  id: string;
  name: string;
  problem: string;
  solution: string;
  outcome: string;
  github: string;
  live: string | null;
  language: string;
  tags: string[];
  category: 'fullstack' | 'ai' | 'systems';
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'school-mgmt',
    name: 'School Management System',
    problem: 'Schools managing student data, attendance, and role-based dashboards across multiple stakeholders needed a unified digital platform.',
    solution: 'Built a production-grade LMS with multi-role auth (admin, teacher, student, parent), grade management, attendance tracking, and data visualisation.',
    outcome: 'Live on Vercel. Demonstrates full-stack engineering across auth, CRUD, data modelling, and UI with Docker deployment.',
    github: 'https://github.com/Alishaa-987/School_Managment_System',
    live: 'https://learning-managment-system-sigma.vercel.app/',
    language: 'TypeScript',
    tags: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Prisma', 'Clerk', 'Tailwind CSS', 'Docker', 'Recharts'],
    category: 'fullstack',
    featured: true,
  },
  {
    id: 'real-estate',
    name: 'Real Estate Platform',
    problem: 'Property buyers and sellers lacked a single platform for browsing listings, managing properties, and communicating securely.',
    solution: 'Developed a full-stack MERN application with property search, advanced filters, JWT-secured auth, listing CRUD, and Redux state management.',
    outcome: 'Deployed on Vercel. Shows mastery of the complete MERN stack, REST API design, and stateful frontend architecture.',
    github: 'https://github.com/Alishaa-987/Real_State_project',
    live: 'https://real-state-project-sand.vercel.app',
    language: 'JavaScript',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'JWT', 'Tailwind CSS'],
    category: 'fullstack',
    featured: true,
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Store',
    problem: 'Small retailers needed a performant storefront with product management, cart logic, and user accounts without vendor lock-in.',
    solution: 'Engineered a full-featured Next.js e-commerce platform covering product listings, shopping cart, checkout flow, and a PostgreSQL backend with Prisma ORM.',
    outcome: 'Live on Vercel. Demonstrates SSR/SSG strategies, data modelling for e-commerce, and Clerk auth integration.',
    github: 'https://github.com/Alishaa-987/E_Commerce_Project',
    live: 'https://e-commerce-project-one-rho.vercel.app',
    language: 'JavaScript',
    tags: ['Next.js', 'Clerk', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'JavaScript'],
    category: 'fullstack',
    featured: true,
  },
  {
    id: 'artistic-image-studio',
    name: 'Artistic Image Studio',
    problem: 'Applying artistic filters to photographs requires specialist software and technical knowledge inaccessible to most users.',
    solution: 'Built a MATLAB App Designer application with 5 NPR filters — Pencil Sketch, Ink Outline, Oil Painting, Charcoal Sketch, and Pop Art — using core DIP algorithms.',
    outcome: 'Functional interactive GUI for real-time artistic transformation using Canny edge detection, bilateral filtering, and colour quantisation implemented from scratch.',
    github: 'https://github.com/Alishaa-987/Artistic_Image_Studio',
    live: null,
    language: 'MATLAB',
    tags: ['MATLAB', 'App Designer', 'Image Processing', 'Edge Detection', 'Bilateral Filtering'],
    category: 'systems',
    featured: true,
  },
  {
    id: 'hospital-mgmt',
    name: 'Hospital Management System',
    problem: 'Healthcare facilities need a centralised system for patient records and appointment scheduling across multiple user roles.',
    solution: 'Built a hospital management website covering patient records, appointment scheduling, and an admin dashboard using Next.js and TypeScript.',
    outcome: 'Functional multi-role management system demonstrating healthcare domain modelling and TypeScript-first development.',
    github: 'https://github.com/Alishaa-987/Hospital_Managment_System_Webiste',
    live: null,
    language: 'TypeScript',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    category: 'fullstack',
    featured: false,
  },
  {
    id: 'webmind-hackathon',
    name: 'IntelliSense AI — Hackathon',
    problem: 'Brands lack visibility into how generative AI models represent them — a critical blind spot as AI replaces traditional search.',
    solution: 'Built an AI analytics dashboard measuring brand visibility across generative AI models in 48 hours at the WebMind Innovation Hackathon.',
    outcome: 'Functional prototype delivered under competition conditions. Demonstrates rapid full-stack development and AI product thinking.',
    github: 'https://github.com/Alishaa-987/WebMind-Innovation-Hackathon-Track-1',
    live: null,
    language: 'JavaScript',
    tags: ['Next.js', 'FastAPI', 'Python', 'OpenAI', 'JavaScript'],
    category: 'ai',
    featured: false,
  },
];
