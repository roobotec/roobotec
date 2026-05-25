#!/bin/bash

# ROBOTEC Website Installation Script
echo "🚀 Starting ROBOTEC Website Setup..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"
echo ""

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install
echo "✅ Root dependencies installed"
echo ""

# Install server dependencies
echo "📦 Installing server dependencies..."
cd server
npm install
cd ..
echo "✅ Server dependencies installed"
echo ""

# Install client dependencies
echo "📦 Installing client dependencies..."
cd client
npm install
cd ..
echo "✅ Client dependencies installed"
echo ""

echo "✅ Setup Complete!"
echo ""
echo "🎯 Next steps:"
echo "1. Update your images in client/public/"
echo "2. Customize configuration in server/.env"
echo "3. Run: npm run dev"
echo ""
echo "Happy coding! 🎉"
