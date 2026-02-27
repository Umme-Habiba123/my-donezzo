import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import MobileNav from './components/MobileNav';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="flex h-screen overflow-hidden font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
        <Sidebar />
        <main className="flex-1 overflow-y-auto h-full scroll-smooth">
          <Header />
          <Dashboard />
        </main>
      </div>
      <MobileNav />
      <ThemeToggle toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;
