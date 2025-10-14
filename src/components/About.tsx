import { motion } from 'framer-motion';
// Make sure to place a professional-looking photo in your `src/assets` folder
import profilePic from '../assets/profile-picture.jpg'; 

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          
          {/* Image Column */}
          <motion.div 
            className="w-full md:w-1/3 flex justify-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }} // Animates when it comes into view
            viewport={{ once: true }} // Ensures animation runs only once
            transition={{ duration: 0.8 }}
          >
            <img 
              src={profilePic} 
              alt="Your Name" 
              className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-cyan-400"
            />
          </motion.div>

          {/* Text Content Column */}
          <motion.div 
            className="w-full md:w-2/3 text-center md:text-left"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-slate-300 mb-4">
              Hello! I'm a passionate frontend developer with a love for creating clean, intuitive, and dynamic user experiences. My journey into web development started with a simple curiosity for how things work on the internet, and it has since grown into a full-fledged passion.
            </p>
            <p className="text-lg text-slate-300 mb-4">
              I specialize in the React ecosystem and enjoy turning complex problems into beautiful, interactive designs. I'm always eager to learn new technologies and methodologies to improve my craft.
            </p>
            <p className="text-lg text-slate-300">
              When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or enjoying a good cup of coffee.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;