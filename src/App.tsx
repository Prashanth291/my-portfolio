import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  // theme: 'light' | 'dark'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <Navbar onToggleTheme={toggleTheme} theme={theme} />
      <main className="container mx-auto px-4 py-8">
        {/* The Outlet component renders the matched route's component */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;