@echo off
echo ========================================
echo    CREATE GITHUB REPOSITORY
echo ========================================
echo.

echo Opening GitHub repository creation page...
echo Repository name: web-onedeli
echo Description: One Deli Landing Page - Next.js TypeScript
echo Visibility: PUBLIC
echo.

echo Please follow these steps:
echo 1. Repository name: web-onedeli
echo 2. Description: One Deli Landing Page - Next.js TypeScript
echo 3. Visibility: Public
echo 4. DO NOT check "Add a README file"
echo 5. DO NOT check "Add .gitignore" 
echo 6. Click "Create repository"
echo.

echo After creating the repository, run: push-to-github.bat
echo.

start https://github.com/new
pause
