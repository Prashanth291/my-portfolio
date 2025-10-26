interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  liveLink?: string; // Optional: only for deployed projects
  role?: string; // Optional: for team projects
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Study Buddy - AI Tutor App',
    description: 'An AI-powered personalized learning platform featuring real-time interactive 3D avatars, visual explanations, and adaptive learning paths. Includes virtual laboratories for hands-on experimentation, enabling students to explore science concepts safely without physical equipment.',
    image: '/study-buddy.png',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Three.js', 'WebSocket', 'RESTful APIs'],
    githubLink: 'https://github.com/prabhasg5/PREPfessor',
  },
  {
    id: 2,
    title: 'Proctor Book Digitalization',
    description: 'A secure, full-stack web platform that digitizes proctor records, streamlining student data management, attendance tracking, and academic performance monitoring with role-based access control. Enhanced data integrity and accessibility through scalable analytics features.',
    image: '/proctor-book.png',
    tags: ['Django', 'PostgreSQL', 'JavaScript', 'HTML5', 'CSS3', 'RESTful APIs'],
    githubLink: 'https://github.com/Prashanth291/proctorManagementSystem-django',
  },
 {
  id: 3,
  title: 'Learning Management System',
  description: 'A comprehensive full-stack LMS platform developed collaboratively to streamline online education. Features course management, student enrollment, assignment submission, progress tracking, and real-time notifications. Includes role-based dashboards for administrators, instructors, and students with secure authentication.',
  image: '/lms.png',
  tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'RESTful APIs'],
  liveLink: 'https://lms-mbu-aqux.vercel.app/',
  githubLink: 'https://github.com/Nithish0204/lms_mbu',
  role: 'Full-Stack Developer (Team Project)',
  }
];