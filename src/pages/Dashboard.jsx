import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatsCards from "../components/StatsCards";
import ProjectAnalytics from "../components/ProjectAnalytics";
import Reminders from "../components/Reminders";
import ProjectList from "../components/ProjectList";
import TeamCollaboration from "../components/TeamCollaboration";
import ProjectProgress from "../components/ProjectProgress";
import TimeTracker from "../components/TimeTracker";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark",
  );
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("📊 Dashboard mounted");
    
    // Load user data from localStorage
    const savedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    
    console.log("💾 Loading from localStorage:", {
      hasUser: !!savedUser,
      hasToken: !!token,
      user: savedUser ? JSON.parse(savedUser) : null
    });
    
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogout = () => {
    console.log("🚪 Logging out...");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/", { replace: true });
  };

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="flex h-screen overflow-hidden">
        <Sidebar />

        <main className="flex-1 overflow-y-auto h-full">
          <Header user={user} />

          <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 md:space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold dark:text-white">Dashboard</h2>
                <p className="text-sm text-slate-500 mt-1">Plan, prioritize, and accomplish your tasks with ease.</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-medium hover:bg-opacity-90 transition-all">
                  <span className="material-symbols-outlined text-xl">add</span>
                  Add Project
                </button>
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 px-5 py-2.5 rounded-full font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                  Import Data
                </button>
              </div>
            </div>

            <StatsCards />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <ProjectAnalytics />
              <div className="space-y-6">
                <Reminders />
                <ProjectList />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <TeamCollaboration />
              <ProjectProgress />
              <TimeTracker />
            </div>
          </div>
        </main>
      </div>

      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-6 right-6 w-12 h-12 bg-white dark:bg-slate-800 shadow-lg rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 z-50 transition-all hover:scale-110 active:scale-95"
      >
        <span className="material-symbols-outlined dark:hidden">dark_mode</span>
        <span className="material-symbols-outlined hidden dark:block text-yellow-400">
          light_mode
        </span>
      </button>
    </div>
  );
};

export default Dashboard;