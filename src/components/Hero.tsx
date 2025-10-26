import { motion } from 'framer-motion';
import profilePhoto from '/profile-picture.jpg';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-8 lg:px-16 pt-8 pb-16 min-h-[calc(100vh-5rem)] overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      
      {/* ## Left Column: Text Content ## */}
      <motion.div 
        className="lg:w-[45%] text-center lg:text-left z-10 ml-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
          I'm{' '}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Prasanth Kumar
          </span>
          <br />
          <span className="text-slate-300">Bollinedi</span>
        </h1>
        
        {/* Description / Tagline */}
        <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0">
          A <span className="text-cyan-400 font-semibold">Competitive Programmer</span> at heart, a <span className="text-cyan-400 font-semibold">Full-Stack Developer</span> by craft.
        </p>

        {/* CTA Buttons with clear hierarchy */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Primary Button */}
          <a 
            href="#projects" 
            className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg overflow-hidden shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center">
              View My Work
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </span>
          </a>
          
          {/* Secondary (Outline) Button */}
          <a 
            href="/PrasanthKumarBollinedi_Resume.pdf" // Ensure this is in your /public folder
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-semibold text-cyan-400 bg-transparent border-2 border-slate-700 rounded-lg hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Download Resume
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* ## Right Column: Image (Now cleaner without badges) ## */}
      <motion.div 
        className="lg:w-[45%] flex justify-center lg:10 mb-12 lg:mb-0 z-10 "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <div className="relative">
          {/* Animated Background Rings */}
          <motion.div className="absolute inset-0 -m-4" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
            <div className="w-full h-full border-2 border-cyan-500/20 rounded-full"></div>
          </motion.div>
          <motion.div className="absolute inset-0 -m-8" animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }}>
            <div className="w-full h-full border-2 border-blue-500/20 rounded-full border-dashed"></div>
          </motion.div>

          {/* Main Image Container */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl shadow-cyan-500/20">
              <img src={profilePhoto} alt="Prasanth Kumar Bollinedi" className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </motion.div>

   

    </section>
  );
};

export default Hero;