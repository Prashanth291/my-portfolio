interface Achievement {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  organization: string;
  link?: string; // Optional link to more details or certificate
  skills?: string[]; // Optional array of skills demonstrated
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Synapse\' 2k25  - National Hackathon',
    description: 'Runner-Up at a National Level Hackathon, where we collaboratively developed a comprehensive Learning Management System (LMS) featuring course management, assessments, and progress tracking, showcasing full-stack development skills and effective team collaboration.',
    image: '/achievements/mbu_runnerup.jpg',
    date: 'Oct 2025',
    organization: 'MohanBabu University',
    link: 'https://github.com/Nithish0204/lms_mbu',
  },
  {
  id: 4,
  title: '2nd Place - Algo Arena National-Level Coding Competition',
  description: 'Secured 2nd place among 500+ participants at Algo Arena, PVPSIT, by solving complex algorithmic problems under time constraints, demonstrating strong problem-solving skills and coding proficiency.',
  image: '/achievements/algoarena.png', // replace with your image path
  date: 'Feb 2025',
  organization: 'PVPSIT'
  },

  {
  id: 3,
  title: '7th Rank - TechXcelerate National Level Hackathon',
  description: 'Secured 7th place among 200+ teams at the TechXcelerate National Level Hackathon, BITS Pilani Goa, by designing and implementing an innovative solution demonstrating technical excellence and teamwork.',
  image: '/achievements/techxcelerate.png', 
  date: 'Feb 2025',
  organization: 'BITS Pilani Goa'
  },
  {
  id: 4,
  title: '2nd Place - DECODE Event, CYGNORA',
  description: 'Secured 2nd place in the DECODE coding event at CYGNORA, organized by the WiCyS Student Chapter, Department of IT, Siddhartha Academy of Higher Education, Kanuru.',
  image: '/achievements/cygnora.png', // replace with your uploaded image path
  date: 'Oct 2025',
  organization: 'Siddhartha Academy of Higher Education'
  },
  {
  id: 5,
  title: 'Elite Certification - The Joy of Computing Using Python',
  description: 'Earned an Elite NPTEL certification with a consolidated score of 90% for successfully completing the 12-week course "The Joy of Computing Using Python," offered by IIT Madras under the SWAYAM and Skill India initiatives.',
  image: '/achievements/nptel_gold.png', 
  date: 'Oct 2024',
  organization: 'NPTEL, IIT Madras'
  },
  {
  id: 6,
  title: 'Participation - BUGHUNT Coding Event',
  description: 'Participated in BUGHUNT, a coding and debugging event organized by the CSI Student Chapter, Department of Information Technology, at Velagapudi Ramakrishna Siddhartha Engineering College, Vijayawada, demonstrating analytical and debugging skills.',
  image: '/achievements/bughunt.png',
  date: 'Aug 2024',
  organization: 'CSI Student Chapter, VRSEC'
  },

  // Add more achievements as needed
];