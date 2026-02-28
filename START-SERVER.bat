@echo off
cls
echo.
echo ========================================
echo    DONEZO DASHBOARD - DEV SERVER
echo ========================================
echo.
echo Starting development server...
echo.
echo After starting, open: http://localhost:5173
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

cd /d "%~dp0"
node node_modules\vite\bin\vite.js

if errorlevel 1 (
    echo.
    echo ERROR: Failed to start server!
    echo.
    echo Try running: npx vite
    echo.
    pause
)
