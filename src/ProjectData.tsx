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
    title: 'Blood Report Analysis with Explainable AI',
    description: 'An AI-powered healthcare platform that analyzes blood test reports with 99.91% accuracy using 12 XGBoost models and SHAP explainability. Features intelligent report extraction via Google Gemini, real-time medical chatbot with Groq AI, and comprehensive health dashboards with transparent AI-driven insights',
    image: '/blood-report-xai.png',
    tags: ['React', 'Node.js', 'Flask', 'MongoDB', 'XGBoost', 'SHAP', 'Python', 'Google Gemini AI', 'TailwindCSS'],
    githubLink: 'https://github.com/Prashanth291/BloodReportAnalysisXAI',
  },
  {
    id: 2,
    title: 'Study Buddy - AI Tutor App',
    description: 'An AI-powered personalized learning platform featuring real-time interactive 3D avatars, visual explanations, and adaptive learning paths. Includes virtual laboratories for hands-on experimentation, enabling students to explore science concepts safely without physical equipment.',
    image: '/study-buddy.png',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Three.js', 'WebSocket', 'RESTful APIs'],
    githubLink: 'https://github.com/prabhasg5/PREPfessor',
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
  },

];