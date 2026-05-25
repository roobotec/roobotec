@echo off
REM ROBOTEC Website Installation Script for Windows

echo 🚀 Starting ROBOTEC Website Setup...
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    exit /b 1
)

echo ✅ Node.js version:
node -v
echo ✅ npm version:
npm -v
echo.

REM Install root dependencies
echo 📦 Installing root dependencies...
call npm install
echo ✅ Root dependencies installed
echo.

REM Install server dependencies
echo 📦 Installing server dependencies...
cd server
call npm install
cd ..
echo ✅ Server dependencies installed
echo.

REM Install client dependencies
echo 📦 Installing client dependencies...
cd client
call npm install
cd ..
echo ✅ Client dependencies installed
echo.

echo ✅ Setup Complete!
echo.
echo 🎯 Next steps:
echo 1. Update your images in client/public/
echo 2. Customize configuration in server/.env
echo 3. Run: npm run dev
echo.
echo Happy coding! 🎉
pause
