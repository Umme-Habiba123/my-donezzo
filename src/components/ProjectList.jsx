const ProjectList = () => {
  const projects = [
    {
      title: 'Develop API Endpoints',
      dueDate: 'Nov 26, 2024',
      icon: 'code',
      color: 'blue',
    },
    {
      title: 'Onboarding Flow',
      dueDate: 'Nov 28, 2024',
      icon: 'hub',
      color: 'teal',
    },
    {
      title: 'Optimize Page Load',
      dueDate: 'Dec 5, 2024',
      icon: 'bolt',
      color: 'orange',
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg dark:text-white">Project</h3>
        <button className="flex items-center gap-1 text-xs font-bold border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-full text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800">
          <span className="material-symbols-outlined text-sm">add</span> New
        </button>
      </div>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className={`p-2 bg-${project.color}-50 dark:bg-${project.color}-900/20 rounded-lg text-${project.color}-500`}>
              <span className="material-symbols-outlined text-lg">{project.icon}</span>
            </div>
            <div>
              <p className="text-sm font-bold dark:text-white">{project.title}</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Due date: {project.dueDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
