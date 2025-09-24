@echo off
echo ========================================
echo    WEB-ONEDELI - GIT PUSH
echo ========================================
echo.

echo [1/3] Checking Git status...
git status
echo.

echo [2/3] Pushing to GitHub...
echo Repository: https://github.com/levanthien21/web-onedeli.git
echo.
git push -u origin main

echo.
echo [3/3] Git push completed!
echo.
echo Repository URL: https://github.com/levanthien21/web-onedeli
echo.
echo Commands used:
echo - git remote add origin https://github.com/levanthien21/web-onedeli.git
echo - git push -u origin main
echo.
pause
