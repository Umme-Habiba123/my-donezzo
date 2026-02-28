# 🚀 How to Run Donezo Dashboard

## The Problem
You're seeing PowerShell execution policy errors when trying to run `npm` commands.

## ✅ SOLUTION: Double-click `START-HERE.bat`

Just double-click the **START-HERE.bat** file in this folder. It will:
1. Start the Vite development server
2. Open at http://localhost:5173
3. Show you the login page

## 📱 Using the App

### Login
1. Open http://localhost:5173 in your browser
2. Enter your credentials from the API
3. Click "Sign In"

### Features Working Now
✅ Login authentication with API
✅ Protected dashboard route
✅ User session management
✅ Logout functionality
✅ Dark mode toggle
✅ Responsive design
✅ All dashboard components

## 🎨 Making Changes

### To modify components:
- Edit files in `src/components/`
- Changes auto-reload in browser

### To modify pages:
- Edit files in `src/pages/`
- Login page: `src/pages/Login.jsx`
- Dashboard: `src/pages/Dashboard.jsx`

### To add new features:
1. Create new component in `src/components/`
2. Import it in Dashboard or other pages
3. Save and see changes instantly

## 🛠️ Alternative Ways to Run

### Option 1: Use Command Prompt (not PowerShell)
```cmd
cd D:\Projects\donezzo
node node_modules/vite/bin/vite.js
```

### Option 2: Fix PowerShell (requires admin)
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
npm run dev
```

### Option 3: Use npx directly
```cmd
npx vite
```

## 📝 Project Structure

```
donezzo/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Login & Dashboard pages
│   ├── App.jsx         # Main app with routing
│   └── main.jsx        # Entry point
├── START-HERE.bat      # ⭐ CLICK THIS TO RUN
└── package.json        # Dependencies
```

## 🔧 Troubleshooting

### Server won't start?
- Make sure no other app is using port 5173
- Try closing and reopening the batch file

### Changes not showing?
- Hard refresh browser: Ctrl + Shift + R
- Check if server is still running

### Login not working?
- Check your internet connection
- Verify API is accessible: https://task-api-eight-flax.vercel.app/api/login
- Check browser console for errors (F12)

## 🎯 Next Steps

Now that it's running, you can:
1. Customize the dashboard components
2. Add new pages/routes
3. Modify the styling
4. Add more features

Everything updates live as you code!
