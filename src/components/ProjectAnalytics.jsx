const ProjectAnalytics = () => {
  const chartData = [
    { day: 'S', height: 'h-24', completed: false },
    { day: 'M', height: 'h-32', completed: true },
    { day: 'T', height: 'h-28', completed: false, progress: true, percentage: '74%' },
    { day: 'W', height: 'h-40', completed: true },
    { day: 'T', height: 'h-32', completed: false },
    { day: 'F', height: 'h-36', completed: false },
    { day: 'S', height: 'h-28', completed: false },
  ];

  return (
    <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-bold text-lg dark:text-white">Project Analytics</h3>
        <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary"></span>Done
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700"></span>In Progress
          </span>
        </div>
      </div>

      <div className="flex items-end justify-between h-48 gap-3">
        {chartData.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2 flex-1">
            <div className={`w-full rounded-full ${item.height} relative overflow-hidden ${
              item.completed
                ? 'bg-primary'
                : item.progress
                ? 'bg-primary/20'
                : 'bg-slate-100 dark:bg-slate-800'
            }`}>
              {item.progress && (
                <>
                  <div className="absolute bottom-0 w-full bg-secondary h-20 rounded-b-full"></div>
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 px-2 py-0.5 rounded text-[10px] shadow-sm border border-slate-100 dark:border-slate-700 font-bold text-primary dark:text-secondary">
                    {item.percentage}
                  </div>
                </>
              )}
              {!item.completed && !item.progress && (
                <div className={`absolute bottom-0 w-full chart-striped ${item.height} border-t-2 border-slate-300 dark:border-slate-600`}></div>
              )}
            </div>
            <span className="text-xs text-slate-400 font-medium">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectAnalytics;
