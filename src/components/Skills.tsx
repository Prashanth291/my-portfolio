import { motion } from 'framer-motion';
// Import icons from react-icons
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb } from 'react-icons/si';

// You can create a more structured data file for this
const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="w-12 h-12 text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="w-12 h-12 text-blue-500" /> },
  { name: 'JavaScript', icon: <SiJavascript className="w-12 h-12 text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="w-12 h-12 text-blue-400" /> },
  { name: 'React', icon: <FaReact className="w-12 h-12 text-cyan-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="w-12 h-12 text-green-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-12 h-12 text-teal-400" /> },
  { name: 'MongoDB', icon: <SiMongodb className="w-12 h-12 text-green-600" /> },
  { name: 'Git', icon: <FaGitAlt className="w-12 h-12 text-orange-600" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">My Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-slate-800 rounded-lg shadow-lg"
              whileHover={{ scale: 1.1, y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {skill.icon}
              <p className="mt-4 text-white text-lg">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;