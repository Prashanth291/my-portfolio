import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaEnvelope, FaMapMarkerAlt, FaCode } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/your-username', color: 'hover:text-gray-300' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com/in/your-profile', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com/your-handle', color: 'hover:text-sky-400' },
  ];

  const quickLinks = [
    { name: 'Home', url: '#home', icon: '🏠' },
    { name: 'About', url: '#about', icon: '👤' },
    { name: 'Skills', url: '#skills', icon: '⚡' },
    { name: 'Projects', url: '#projects', icon: '💼' },
    { name: 'Achievements', url: '#achievements', icon: '🏆' },
    { name: 'Contact', url: '#contact', icon: '📧' },
  ];

  const stats = [
    { number: '1500+', label: 'Problems Solved' },
    { number: '3+', label: 'Projects Completed' },
    { number: '10+', label: 'Technologies' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-black border-t border-slate-800/50 text-slate-400 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
      
      {/* Top Decorative Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 py-12 lg:py-16 relative z-10">
        
        

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <FaCode className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Prasanth Kumar
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-md">
              Aspiring Software Engineer passionate about solving complex problems through code. Specializing in full-stack development and competitive programming with a drive to create impactful solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative w-11 h-11 flex items-center justify-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-slate-400 ${link.color} hover:border-cyan-500/50 transition-all duration-300`}
                  aria-label={link.name}
                >
                  <span className="text-xl">{link.icon}</span>
                  
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-lg">
                    {link.name}
                  </span>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-xl bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors duration-300"></div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="group text-slate-400 hover:text-cyan-400 transition-colors duration-300 inline-flex items-center gap-3"
                  >
                    <span className="text-sm">{link.icon}</span>
                    <span className="text-sm">{link.name}</span>
                    <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-4 transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></span>
              Get In Touch
            </h4>
            <div className="space-y-4">
              <a 
                href="mailto:prashanthbollinedi2910@gmail.com"
                className="group flex items-start gap-3 text-sm hover:text-cyan-400 transition-colors duration-300"
              >
                <div className="p-2 bg-slate-800/50 rounded-lg group-hover:bg-cyan-500/10 transition-colors duration-300">
                  <FaEnvelope className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <p className="text-slate-500 text-xs mb-1">Email</p>
                  <p className="text-slate-400 group-hover:text-cyan-400 transition-colors break-all">
                    prashanthbollinedi2910@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3 text-sm">
                <div className="p-2 bg-slate-800/50 rounded-lg">
                  <FaMapMarkerAlt className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <p className="text-slate-500 text-xs mb-1">Location</p>
                  <p className="text-slate-400">Vijayawada, India</p>
                </div>
              </div>

              {/* Availability Badge */}
              <div className="mt-6 p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="relative">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                  </div>
                  <span className="text-green-400 font-semibold text-sm">Available for Work</span>
                </div>
                <p className="text-slate-400 text-xs">Open to new opportunities and collaborations</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Divider with gradient */}
          <div className="relative mb-8">
            <div className="border-t border-slate-800/50"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            {/* Copyright */}
            <div className="text-slate-500 text-center md:text-left">
              <p>© {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">Prasanth Kumar Bollinedi</span>. All Rights Reserved.</p>
            </div>

            {/* Crafted with */}
            <div className="flex items-center gap-2 text-slate-500">
              <span>Crafted with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>using</span>
              <span className="text-cyan-400 font-semibold">React</span>
              <span>&</span>
              <span className="text-cyan-400 font-semibold">Tailwind CSS</span>
            </div>

            {/* Back to Top Button */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm border border-slate-700/50 rounded-xl text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
            >
              <span className="text-sm font-medium">Back to Top</span>
              <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
    </footer>
  );
};

export default Footer;