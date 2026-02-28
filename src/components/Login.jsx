import { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simple validation
    if (!email || !password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    // Demo authentication (replace with real API call)
    setTimeout(() => {
      if (email === 'demo@donezo.com' && password === 'demo123') {
        onLogin({ email, name: 'Totok Michael' });
      } else {
        setError('Invalid email or password');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark p-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-8">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-2xl">dataset</span>
            </div>
            <h1 className="text-3xl font-bold text-primary dark:text-white">Donezo</h1>
          </div>

          <h2 className="text-2xl font-bold dark:text-white mb-2">Welcome Back</h2>
          <p className="text-slate-500 text-sm mb-6">Sign in to continue to your dashboard</p>

          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 px-4 py-3 rounded-xl mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="demo@donezo.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-white py-3 rounded-xl font-medium hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <span className="material-symbols-outlined animate-spin">progress_activity</span>
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-500">
              Demo credentials: <span className="font-medium text-primary">demo@donezo.com</span> / <span className="font-medium text-primary">demo123</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
