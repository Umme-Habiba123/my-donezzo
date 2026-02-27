const MobileNav = () => {
  return (
    <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl px-6 py-3 rounded-full z-50 flex items-center gap-8 backdrop-blur-md">
      <a className="text-primary dark:text-secondary" href="#">
        <span className="material-symbols-outlined text-2xl filled-icon">grid_view</span>
      </a>
      <a className="text-slate-400 hover:text-primary transition-all" href="#">
        <span className="material-symbols-outlined text-2xl">assignment</span>
      </a>
      <a className="text-slate-400 hover:text-primary transition-all" href="#">
        <span className="material-symbols-outlined text-2xl">calendar_today</span>
      </a>
      <a className="text-slate-400 hover:text-primary transition-all" href="#">
        <span className="material-symbols-outlined text-2xl">group</span>
      </a>
      <a className="text-slate-400 hover:text-primary transition-all" href="#">
        <span className="material-symbols-outlined text-2xl">settings</span>
      </a>
    </div>
  );
};

export default MobileNav;
