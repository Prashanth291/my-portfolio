import { motion } from 'framer-motion';
// Import icons from react-icons
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiRedux, SiNextdotjs } from 'react-icons/si';

// All skills in a single array
const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="w-12 h-12" />, color: '#E34F26', proficiency: 95 },
  { name: 'CSS3', icon: <FaCss3Alt className="w-12 h-12" />, color: '#1572B6', proficiency: 90 },
  { name: 'JavaScript', icon: <SiJavascript className="w-12 h-12" />, color: '#F7DF1E', proficiency: 92 },
  { name: 'TypeScript', icon: <SiTypescript className="w-12 h-12" />, color: '#3178C6', proficiency: 88 },
  { name: 'React', icon: <FaReact className="w-12 h-12" />, color: '#61DAFB', proficiency: 93 },
  { name: 'Next.js', icon: <SiNextdotjs className="w-12 h-12" />, color: '#FFFFFF', proficiency: 85 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-12 h-12" />, color: '#06B6D4', proficiency: 90 },
  { name: 'Redux', icon: <SiRedux className="w-12 h-12" />, color: '#764ABC', proficiency: 87 },
  { name: 'Node.js', icon: <FaNodeJs className="w-12 h-12" />, color: '#339933', proficiency: 85 },
  { name: 'Express', icon: <SiExpress className="w-12 h-12" />, color: '#FFFFFF', proficiency: 82 },
  { name: 'MongoDB', icon: <SiMongodb className="w-12 h-12" />, color: '#47A248', proficiency: 80 },
  { name: 'Git', icon: <FaGitAlt className="w-12 h-12" />, color: '#F05032', proficiency: 88 },
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
      ease: "easeOut"
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
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional web applications
          </p>
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
          {skills.map((skill, index) => (
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

        {/* Optional: Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-3xl">
            <p className="text-slate-400 text-lg leading-relaxed">
              <span className="text-cyan-400 font-semibold">Always Learning:</span> I'm constantly expanding my skillset and staying up-to-date with the latest web technologies and best practices in software development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;