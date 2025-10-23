import { motion } from 'framer-motion';
import { FaUniversity, FaBriefcase } from 'react-icons/fa';
import iiscLogo from '../assets/IISC_Master_Seal_Black.jpg';
import pandusir from '../assets/PandurangaSir.png';
const experiences = [
  {
    logo: iiscLogo, // Add your logo path here
    title: "Research Intern",
    company: "Indian Institute of Science (IISc), Bangalore",
    period: "May 2025 – June 2025",
    description: [
      "Contributed to research in Machine Learning and Computational Biology",
      "Developed and implemented algorithms using Python and MATLAB to analyze experimental data",
      "Collaborated with professors and PhD students to publish findings in research paper",
      "Optimized data processing pipelines, improving efficiency by 40%"
    ]
  },
  // Add more experiences here
  // {
  //   logo: "/path/to/company-logo.png",
  //   title: "Frontend Developer",
  //   company: "Tech Company",
  //   period: "Jan 2024 – Present",
  //   description: [
  //     "Built responsive web applications using React and TypeScript",
  //     "Collaborated with design team to implement pixel-perfect UIs",
  //   ]
  // }
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

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
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Professional <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Content Layout - Similar to About Me */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          
          {/* Experience Cards - Left Column */}
          <motion.div 
            className="w-full lg:w-3/5 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden">
                  {/* Hover Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                      <div className="flex items-start gap-4 flex-1">
                        {/* Icon */}
                        <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-contain drop-shadow-[0_0_6px_rgba(0,255,255,0.3)]"
                        />
                        </div>



                        {/* Title & Company */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <p className="text-base sm:text-lg text-cyan-400 font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Period Badge */}
                      <div className="inline-flex items-center px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold whitespace-nowrap">
                        {exp.period}
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            ))}
          </motion.div>

          {/* Image Column - Right Side */}
          <motion.div 
            className="w-full lg:w-2/5 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-20"></div>
              
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl"></div>
                <img 
                  src={pandusir}
                  alt="Experience Visual" 
                  className="relative w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-slate-700/50"
                />
                
                <motion.div
                  className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-slate-800/90 backdrop-blur-sm px-4 py-3 sm:px-6 sm:py-4 rounded-2xl border border-slate-700 shadow-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="text-cyan-400 font-bold text-xl sm:text-2xl">IISc</div>
                  <div className="text-slate-400 text-xs sm:text-sm">Research Hub</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;