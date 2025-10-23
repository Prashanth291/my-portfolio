import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/your-username' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com/in/your-profile' },
    { name: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com/your-handle' },
  ];

  const quickLinks = [
    { name: 'About', url: '#about' },
    { name: 'Skills', url: '#skills' },
    { name: 'Projects', url: '#projects' },
    { name: 'Contact', url: '#contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/50 text-slate-400 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
              Prasanth Kumar
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Frontend Developer passionate about creating exceptional digital experiences.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 flex items-center justify-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110"
                  aria-label={link.name}
                >
                  <span className="text-xl">{link.icon}</span>
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 border border-slate-700 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm">
              <p className="flex items-center justify-center md:justify-end gap-2">
                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:your.email@example.com" className="hover:text-cyan-400 transition-colors duration-300">
                  your.email@example.com
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-end gap-2">
                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Vijayawada, India
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/50 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          {/* Copyright */}
          <div className="text-slate-500">
            <p>© {new Date().getFullYear()} Prasanth Kumar Bollinedi. All Rights Reserved.</p>
          </div>

          {/* Crafted with */}
          <div className="flex items-center gap-2 text-slate-500">
            <span>Crafted with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>

          {/* Back to Top Button */}
          <a
            href="#home"
            className="group flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            <span className="text-sm">Back to Top</span>
            <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;