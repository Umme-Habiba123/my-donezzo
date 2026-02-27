const StatsCards = () => {
  const stats = [
    {
      title: 'Total Projects',
      value: '24',
      trend: 'Increased from last month',
      isPrimary: true,
    },
    {
      title: 'Ended Projects',
      value: '10',
      trend: 'Increased from last month',
    },
    {
      title: 'Running Projects',
      value: '12',
      trend: 'Increased from last month',
    },
    {
      title: 'Pending Project',
      value: '2',
      trend: 'On Discuss',
      noIcon: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${
            stat.isPrimary
              ? 'bg-primary text-white'
              : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800'
          } p-6 rounded-xl flex flex-col justify-between relative overflow-hidden h-40 group`}
        >
          {stat.isPrimary && (
            <div className="absolute -right-2 -top-2 w-20 h-20 bg-white/5 rounded-full transition-transform group-hover:scale-125"></div>
          )}
          <div className="flex justify-between items-start">
            <h3
              className={`text-sm font-medium uppercase tracking-wide ${
                stat.isPrimary ? 'opacity-80' : 'text-slate-500'
              }`}
            >
              {stat.title}
            </h3>
            <span
              className={`material-symbols-outlined text-xl ${
                stat.isPrimary
                  ? 'bg-white/20 p-1.5 rounded-full'
                  : 'text-slate-400 border border-slate-200 dark:border-slate-700 p-1.5 rounded-full'
              }`}
            >
              north_east
            </span>
          </div>
          <div>
            <p className={`text-4xl font-bold ${!stat.isPrimary && 'dark:text-white'}`}>{stat.value}</p>
            {!stat.noIcon ? (
              <div
                className={`flex items-center gap-1.5 mt-2 text-[10px] w-fit px-2 py-1 rounded-full ${
                  stat.isPrimary
                    ? 'bg-white/20'
                    : 'text-slate-400 border border-slate-200 dark:border-slate-700'
                }`}
              >
                <span className="material-symbols-outlined text-xs">trending_up</span>
                {stat.trend}
              </div>
            ) : (
              <p className="text-[10px] text-slate-400 mt-2">{stat.trend}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
