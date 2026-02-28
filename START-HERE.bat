@echo off
title Donezo Dashboard Server
color 0A
echo ========================================
echo    DONEZO DASHBOARD - DEV SERVER
echo ========================================
echo.
echo Starting development server...
echo.
echo Server will open at: http://localhost:5173
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

node node_modules/vite/bin/vite.js

pause
