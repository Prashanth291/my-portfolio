import { motion } from 'framer-motion';
// Import icons from react-icons
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaJava } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa6';
import { SiJavascript, SiMongodb, SiExpress, SiDjango, SiC, SiFlask, SiMysql } from 'react-icons/si';

// All skills in a single array
const skills = [
  // Core Programming Languages
  { name: 'JavaScript', icon: <SiJavascript className="w-12 h-12" />, color: '#F7DF1E' },
  { name: 'Python', icon: <FaPython className="w-12 h-12" />, color: '#3776AB' },
  { name: 'Java', icon: <FaJava className="w-12 h-12" />, color: '#007396' },
  { name: 'C', icon: <SiC className="w-12 h-12" />, color: '#A8B9CC' },
  
  // Frontend Technologies
  { name: 'React', icon: <FaReact className="w-12 h-12" />, color: '#61DAFB' },
  { name: 'HTML5', icon: <FaHtml5 className="w-12 h-12" />, color: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt className="w-12 h-12" />, color: '#1572B6' },
  
  // Backend Technologies
  { name: 'Node.js', icon: <FaNodeJs className="w-12 h-12" />, color: '#339933' },
  { name: 'Express', icon: <SiExpress className="w-12 h-12" />, color: '#FFFFFF' },
  { name: 'Django', icon: <SiDjango className="w-12 h-12" />, color: '#092E20' },
  { name: 'Flask', icon: <SiFlask className="w-12 h-12" />, color: '#FFFFFF' },
  
  // Databases
  { name: 'MongoDB', icon: <SiMongodb className="w-12 h-12" />, color: '#47A248' },
  { name: 'MySQL', icon: <SiMysql className="w-12 h-12" />, color: '#4479A1' },
  
  // Version Control
  { name: 'Git', icon: <FaGitAlt className="w-12 h-12" />, color: '#F05032' },
  { name: 'GitHub', icon: <FaGithub className="w-12 h-12" />, color: '#FFFFFF' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-4">
            Technologies I Work With
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            My Tech <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Stack</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Skills Grid - Equal Height & Width */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="group relative aspect-square flex flex-col items-center justify-center p-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Hover Gradient Background */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ background: `radial-gradient(circle at center, ${skill.color}, transparent)` }}
              ></div>

              {/* Glow Effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                style={{ backgroundColor: skill.color }}
              ></div>

              {/* Icon Container */}
              <div 
                className="relative z-10 mb-3 transition-all duration-300 group-hover:scale-110"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              {/* Skill Name */}
              <p className="relative z-10 text-sm md:text-base font-semibold text-slate-300 group-hover:text-white transition-colors duration-300 text-center">
                {skill.name}
              </p>

              {/* Bottom accent line */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ backgroundColor: skill.color }}
              ></div>
            </motion.div>
          ))}
        </motion.div>

       
      </div>
    </section>
  );
};

export default Skills;