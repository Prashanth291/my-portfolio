import { useState } from 'react';

type NavbarProps = {
  onToggleTheme: () => void;
  theme: string;
};

// Sample Logo component - replace with your actual Logo
type LogoProps = { className?: string };
const Logo = ({ className }: LogoProps) => (
  <div className={className} style={{ width: 40, height: 40 }}>
    <img
      src="/logo.png"
      alt="Logo"
      className="w-full h-full object-contain rounded-md"
      style={{ maxWidth: 40, maxHeight: 40 }}
    />
  </div>
);

const Navbar = ({ onToggleTheme, theme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  
  const navLinks = [
    { title: 'About', path: '#about' },
    { title: 'Skills', path: '#skills' },  
    { title: 'Experience', path: '#experience' },
    { title: 'Profiles', path: '#profiles' }, 
    { title: 'Projects', path: '#projects' },
    { title: 'Contact', path: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md shadow-lg border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Name */}
          <div className="flex-shrink-0 group">
            <a href="/" className="relative flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
              <Logo className="w-10 h-10 rounded-md" />
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent hover:from-cyan-500 hover:to-blue-600 transition-all duration-300">
                Prasanth Kumar
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => (
              <a 
                key={link.title} 
                href={link.path} 
                className="relative px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300 group"
              >
                <span className="relative z-10">{link.title}</span>
                <span className="absolute inset-0 bg-blue-50 dark:bg-background-dark rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-3/4 transition-all duration-300"></span>
              </a>
            ))}
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="ml-4 p-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button with Themed Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 w-11 h-11 group"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transform transition-all duration-300 ease-in-out ${
                    isOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-300 ease-in-out ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transform transition-all duration-300 ease-in-out ${
                    isOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-gradient-to-b from-white dark:from-background-dark to-gray-50 dark:to-background-dark border-t border-gray-100 dark:border-gray-800">
          {navLinks.map((link, index) => (
            <a
              key={link.title}
              href={link.path}
              className="block px-4 py-3 rounded-lg text-base font-semibold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-gray-800 dark:hover:to-background-dark transition-all duration-200 transform hover:translate-x-1"
              onClick={closeMenu}
              style={{
                animation: isOpen ? `slideIn 0.3s ease-out ${index * 0.1}s both` : 'none'
              }}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;