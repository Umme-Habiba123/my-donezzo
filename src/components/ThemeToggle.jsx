const ThemeToggle = ({ toggleDarkMode }) => {
  return (
    <button
      className="fixed bottom-6 right-6 w-12 h-12 bg-white dark:bg-slate-800 shadow-lg rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 z-50 transition-all hover:scale-110 active:scale-95"
      onClick={toggleDarkMode}
    >
      <span className="material-symbols-outlined dark:hidden">dark_mode</span>
      <span className="material-symbols-outlined hidden dark:block text-yellow-400">light_mode</span>
    </button>
  );
};

export default ThemeToggle;
