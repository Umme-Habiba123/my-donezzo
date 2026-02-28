# Setup Instructions

## The Problem
PowerShell execution policy is blocking npm commands.

## Solution Options

### Option 1: Run with batch file (EASIEST)
Double-click `run-dev.bat` file to start the development server.

### Option 2: Fix PowerShell Policy
1. Open PowerShell as Administrator
2. Run: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
3. Then run: `npm run dev`

### Option 3: Use CMD instead of PowerShell
1. Open Command Prompt (cmd.exe)
2. Navigate to project: `cd D:\Projects\donezzo`
3. Run: `npm run dev`

## After Starting the Server

1. The server will start at: http://localhost:5173
2. Open this URL in your browser
3. Login with demo credentials:
   - Email: demo@donezo.com
   - Password: demo123

## Features Added

✅ Login authentication system
✅ User session management (localStorage)
✅ Logout functionality
✅ Protected dashboard (requires login)
✅ User info displayed in header

## Making Changes

1. Edit files in `src/` folder
2. Changes will auto-reload in browser
3. All components are in `src/components/`
