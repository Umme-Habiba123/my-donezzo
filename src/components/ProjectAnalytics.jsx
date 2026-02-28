import { useEffect, useState } from "react";
import axios from "axios";

const ProjectAnalytics = () => {
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    axios
      .get("https://task-api-eight-flax.vercel.app/api/analytics")
      .then((res) => {
        setAnalytics(res.data);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  }, []);

  // Get max views for scaling
  const maxViews = Math.max(...analytics.map((item) => item.views), 1);

  return (
    <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-bold text-lg dark:text-white">Views Analytics</h3>
        {analytics.length > 0 && (
          <span className="text-sm text-slate-400">
            Latest: {analytics[analytics.length - 1].views}
          </span>
        )}
      </div>

      {/* Chart */}
      <div className="flex items-end justify-between h-52 gap-4">
        {analytics.map((item, index) => {
          const height = (item.views / maxViews) * 100;

          return (
            <div
              key={index}
              className="flex-1 bg-primary rounded-xl transition-all duration-700 ease-out"
              style={{ height: `${height}%` }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectAnalytics;