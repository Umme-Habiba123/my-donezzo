const TimeTracker = () => {
  return (
    <div className="lg:col-span-1 bg-primary p-6 rounded-2xl text-white relative overflow-hidden flex flex-col justify-between">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.5" />
          <path d="M0,60 Q25,10 50,60 T100,60" fill="none" stroke="white" strokeWidth="0.5" />
          <path d="M0,70 Q25,20 50,70 T100,70" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>
      <h3 className="font-bold text-lg relative z-10">Time Tracker</h3>
      <div className="relative z-10 text-center py-4">
        <p className="text-5xl font-bold tabular-nums tracking-wider">01:24:08</p>
      </div>
      <div className="flex items-center justify-center gap-4 relative z-10">
        <button className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center hover:bg-opacity-90 transition-all">
          <span className="material-symbols-outlined text-2xl filled-icon">pause</span>
        </button>
        <button className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-opacity-90 transition-all">
          <span className="material-symbols-outlined text-2xl filled-icon">stop</span>
        </button>
      </div>
    </div>
  );
};

export default TimeTracker;
