// src/components/Footer.jsx

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/your-username' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com/in/your-profile' },
    { name: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com/your-handle' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center">
          
          {/* Social Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-cyan-400 transition-colors duration-300"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright Notice */}
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Prasanth Kumar Bollinedi. All Rights Reserved.</p>
          </div>

          {/* Crafted with line */}
          <div>
            <p>Crafted with ❤️ using React & Tailwind CSS</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;