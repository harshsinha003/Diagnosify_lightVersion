@echo off
echo ======================================
echo    Git History Reset Script
echo ======================================
echo.
echo This will remove the existing git history and create a fresh repository
echo with only your commits. This action cannot be undone!
echo.
set /p confirm="Are you sure you want to continue? (Y/N): "
if /i "%confirm%" NEQ "Y" (
    echo Operation cancelled.
    pause
    exit /b
)

echo.
echo [1/5] Removing existing git history...
if exist .git (
    rmdir /s /q .git
    echo Git history removed successfully.
) else (
    echo No existing git history found.
)

echo.
echo [2/5] Initializing new git repository...
git init

echo.
echo [3/5] Adding all files to staging area...
git add .

echo.
echo [4/5] Creating initial commit...
git commit -m "Initial commit: Simple Disease Prediction System"

echo.
echo [5/5] Setting up remote and pushing to GitHub...
echo Please make sure your GitHub repository is empty or you want to overwrite it.
set /p github_url="Enter your GitHub repository URL: "

git remote add origin %github_url%
git branch -M main

echo.
echo Pushing to GitHub (this will overwrite existing content)...
git push -u origin main --force

echo.
echo ======================================
echo    Git History Reset Complete!
echo ======================================
echo.
echo You now have a fresh git history with only your commit.
echo Repository URL: %github_url%
echo.
pause