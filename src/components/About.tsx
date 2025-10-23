import { motion } from 'framer-motion';
// Make sure to place a professional-looking photo in your `src/assets` folder
import profilePic from '../assets/profile-picture.jpg'; 

const About = () => {
  // This array can be used later if you want to add more stats
  const highlights = [
    // { number: '10+', label: 'Technologies' }
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
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
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-4">
            Get To Know Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          
          {/* Image Column */}
          <motion.div 
            className="w-full lg:w-2/5 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Decorative Border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-20"></div>
              
              {/* Main Image Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl"></div>
                <img 
                  src={profilePic} 
                  alt="Prasanth Kumar Bollinedi" 
                  className="relative w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-slate-700/50"
                />
                
                {/* Floating Card - UPDATED WITH YOUR METRIC */}
                <motion.div
                  className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-slate-800/90 backdrop-blur-sm px-4 py-3 sm:px-6 sm:py-4 rounded-2xl border border-slate-700 shadow-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="text-cyan-400 font-bold text-xl sm:text-2xl">1500+</div>
                  <div className="text-slate-400 text-xs sm:text-sm">Problems Solved</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Text Content Column - UPDATED WITH YOUR TEXT */}
          <motion.div 
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
              <p>
                Hey there! My journey in tech started with <span className="text-cyan-400 font-semibold">competitive programming</span>, where I fell in love with solving complex problems and finding the most efficient solutions. Over time, I’ve tackled more than <span className="text-white font-bold">1500+ algorithmic challenges</span> across different platforms — an experience that’s shaped the way I think and approach every project I build.
              </p>
              
              <p>
                That curiosity soon grew into a passion for <span className="text-cyan-400 font-semibold">full-stack development</span>, where I bring ideas to life through clean, functional, and meaningful applications. My research internship at the prestigious <span className="text-white font-bold">Indian Institute of Science (IISc), Bangalore</span> helped me bridge the gap between theory and real-world problem-solving, solidifying my drive to create technology that makes a difference.
              </p>
              
              <p>
                These days, I work mainly with <span className="text-cyan-400 font-semibold">React, Node.js, and TypeScript</span>, constantly learning and exploring new tools to stay ahead. I love building applications that feel great to use — fast, reliable, and intuitive.
              </p>
              
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 mt-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  Beyond Coding
                </h3>
                <p className="text-slate-400">
                  When I’m not coding, I’m probably exploring new tech trends, experimenting with side projects, or diving into yet another algorithm just for fun.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 text-center hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {item.number}
                  </div>
                  <div className="text-slate-400 text-xs sm:text-sm mt-1">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;