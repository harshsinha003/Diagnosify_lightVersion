@echo off
echo ================================
echo  RESETTING GIT HISTORY
echo ================================
echo This will remove all previous git history and create a fresh repository
echo.
pause

REM Remove existing .git folder
if exist .git (
    echo Removing existing .git folder...
    rmdir /s /q .git
)

REM Initialize fresh git repository
echo Initializing fresh Git repository...
git init

REM Add all files
echo Adding files to staging...
git add .

REM Create initial commit with your name
echo Creating initial commit...
git commit -m "Initial commit: Disease Prediction App"

echo.
echo ================================
echo  GIT HISTORY RESET COMPLETE!
echo ================================
echo Now run these commands to push to your GitHub:
echo.
echo git branch -M main
echo git remote add origin YOUR_GITHUB_REPO_URL
echo git push -u origin main
echo.
pause