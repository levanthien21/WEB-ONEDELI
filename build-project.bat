@echo off
echo ========================================
echo    ONE DELI LANDING PAGE - BUILD
echo ========================================
echo.

echo [1/2] Installing dependencies...
npm install
echo.

echo [2/2] Building for production...
npm run build
echo.

echo Build completed! Check .next folder for output.
echo.
pause
