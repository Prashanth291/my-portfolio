import { motion } from 'framer-motion';
import { achievements } from '../achievementsData';
import type { Variants } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
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
          {/* <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-4">
            Milestones & Recognition
          </span> */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of my competitive programming accomplishments, hackathon victories, and professional recognitions
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Horizontal Scrollable Achievement Cards */}
        <motion.div 
          className="grid grid-cols-1 gap-6 pb-4 lg:flex lg:overflow-x-auto lg:snap-x lg:snap-mandatory lg:hide-scrollbar"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          // The inline 'style' prop for scrollbar hiding has been removed
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              // --- THIS IS THE RESPONSIVE FIX ---
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 shadow-lg hover:shadow-2xl hover:border-cyan-500/50 transition-all duration-300 flex-none w-11/12 sm:w-[380px] lg:w-[400px] snap-center"
            >
              {/* Image Container with Overlay */}
              <div className="relative overflow-hidden h-56 bg-slate-900">
                <img 
                  src={achievement.image} 
                  alt={achievement.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Trophy Badge (Commented out) */}
                
                {/* Date Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-full text-cyan-400 text-xs font-semibold">
                  {achievement.date}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Organization */}
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-sm text-slate-400 font-medium">{achievement.organization}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {achievement.title}
                </h3>
                
                {/* Description */}
                <div className="relative">
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Skills Tags */}
                {achievement.skills && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {achievement.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 text-xs font-medium text-cyan-300 bg-cyan-500/10 rounded-md border border-cyan-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  {achievement.link && (
                    <a 
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-lg border border-cyan-500/20 hover:bg-cyan-500/20 hover:scale-105 transform transition-all duration-200"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Project
                    </a>
                  )}
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;