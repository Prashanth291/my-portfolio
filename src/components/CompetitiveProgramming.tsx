import { motion } from 'framer-motion';
import { profiles, type CodingProfile } from '../codingProfilesData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
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

const CompetitiveProgramming = () => {
  return (
  <section id="profiles" className="relative py-20 lg:py-28 bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden transition-colors duration-300"> 
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

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
            Coding Platforms
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Competitive <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent dark:text-transparent text-slate-900">Programming</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Sharpening problem-solving skills across multiple competitive programming platforms
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4"></div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {profiles.map((profile: CodingProfile) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-center p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                borderColor: profile.color,
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Hover Gradient Background */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ background: `radial-gradient(circle at center, ${profile.color}, transparent)` }}
              ></div>

              {/* Glow Effect on Hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                style={{ backgroundColor: profile.color }}
              ></div>
              
              {/* Icon Container */}
              <div className="relative z-10 mb-4 p-4 bg-slate-900/80 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={profile.image} 
                  alt={`${profile.name} Logo`} 
                  className="w-16 h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" 
                />
              </div>
              
              {/* Platform Name */}
              <p 
                className="relative z-10 text-lg font-bold text-slate-300 group-hover:text-white transition-colors duration-300"
              >
                {profile.name}
              </p>

              {/* External Link Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg 
                  className="w-5 h-5 text-slate-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ color: profile.color }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>

              {/* Bottom Accent Line */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ backgroundColor: profile.color }}
              ></div>
            </motion.a>
          ))}
        </motion.div>

        {/* Optional: Add a Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
  
          
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;