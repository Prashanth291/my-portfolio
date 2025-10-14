import { motion } from 'framer-motion';

// Make sure to place your professional photo in the `src/assets` folder
// and import it like this.
import profilePhoto from '../assets/profile-picture.jpg'; 

const Hero = () => {
  return (
    <section 
      id="home" 
      className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center px-4 py-20 min-h-[90vh]"
    >
      
      {/* ## Left Column: Text Content ## */}
      <motion.div 
        className="md:w-3/5 text-center md:text-left"
        // Animation properties for the text content
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Hi, I'm <span className="text-cyan-400">Prasanth Kumar Bollinedi</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
          I'm a Frontend Developer specializing in building exceptional digital experiences. I am passionate about creating clean, intuitive, and highly performant web applications.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a 
            href="#projects" 
            className="bg-cyan-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-cyan-600 transition-colors duration-300"
          >
            View My Work
          </a>
          <a 
            href="/your-resume.pdf" // Place your resume in the `public` folder
            target="_blank" 
            rel="noopener noreferrer" 
            className="border-2 border-cyan-500 text-cyan-400 font-semibold px-6 py-3 rounded-md hover:bg-cyan-500 hover:text-white transition-colors duration-300"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* ## Right Column: Image ## */}
      <motion.div 
        className="md:w-2/5 flex justify-center mb-10 md:mb-0"
        // Animation properties for the image
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <div className="w-64 h-64 md:w-80 md:h-80 relative">
          {/* Optional: Add a decorative background glow */}
          <div className="absolute inset-0 bg-cyan-500 rounded-full blur-2xl opacity-40"></div>
          <img 
            src={profilePhoto} 
            alt="A professional headshot of Your Name" 
            className="relative rounded-full w-full h-full object-cover border-4 border-slate-700"
          />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;