# 🚀 ROBOTEC Website - Complete Setup & Usage Guide

## Project Overview

You now have a **complete MERN stack company website** built professionally and ready to use. The website matches your provided design with the ROBOTEC branding.

### ✨ What's Included

✅ **Frontend** (React)
- Modern, responsive UI matching your design reference
- Header with navigation
- Hero section with call-to-action
- Services showcase (5 service cards)
- Footer with company info
- Mobile-optimized
- Smooth animations and gradients

✅ **Backend** (Node.js + Express)
- RESTful API
- CORS enabled
- Ready for MongoDB integration
- Contact form handling
- Services data management

✅ **Documentation**
- Comprehensive README.md
- Quick Start Guide
- Project Structure Guide
- Image Setup Instructions
- This guide

---

## 📋 Initial Setup (One-time)

### 1. Navigate to Project Folder
```bash
cd "c:\Users\dell\Downloads\Company Website\robotec-website"
```

### 2. Install Dependencies
```bash
npm run install-all
```

This will install packages for:
- Root directory
- Server (backend)
- Client (frontend)

### 3. Setup Images
Copy your images to the public folder:
```
From: c:\Users\dell\Downloads\Company Website\
To:   robotec-website\client\public\

- logo.png
- Home_page-_IMG.png → rename to home-page-img.png
```

Or copy with command:
```bash
cd robotec-website
copy ..\logo.png client\public\
copy ..\Home_page-_IMG.png client\public\home-page-img.png
```

### 4. Verify Installation
```bash
cd robotec-website
npm run dev
```

Open your browser to: http://localhost:3000

✅ You should see the website with your logo and hero image!

---

## 🎯 Running the Website

### Development Mode (Recommended)
```bash
npm run dev
```
This starts both frontend and backend simultaneously.

### Manual Start (If needed)
**Terminal 1 - Backend:**
```bash
npm run server
```

**Terminal 2 - Frontend:**
```bash
npm run client
```

### URLs
- **Website**: http://localhost:3000
- **API Server**: http://localhost:5000
- **API Test**: http://localhost:5000/api/services

---

## 🎨 Customization Guide

### Change Website Title & Meta
Edit: `client/public/index.html`
```html
<title>ROBOTEC - AI Solutions & Automation</title>
<meta name="description" content="Your description here">
```

### Change Colors
Edit any component's CSS file. Example: `client/src/components/Header.css`

Current color scheme:
- Primary Blue: `#0066ff` → Change to your color
- Dark Navy: `#001a4d` → Change to your color
- Light Background: `#f5f7fa` → Change to your color

### Update Company Info
Edit: `client/src/components/Footer.js`
```javascript
<p>+1(234) 567-8910</p>          // Change phone
<p>info@robotec.com</p>          // Change email
<p>123 Innovation Drive...</p>   // Change address
```

### Change Hero Section Text
Edit: `client/src/components/HeroSection.js`
```javascript
<div className="hero-badge">AI POWERED. FUTURE READY.</div>
<h1 className="hero-title">
  Building Intelligent
  <span className="hero-highlight"> Solutions</span> for Tomorrow
</h1>
```

### Update Services
Edit: `client/src/components/Services.js`

Modify the defaultServices array:
```javascript
const defaultServices = [
  {
    id: 1,
    title: 'Your Service Name',
    description: 'Your Description',
    percentage: '+70%',  // Optional
    details: 'Your details here'
  },
  // Add more services...
];
```

### Change Navigation Links
Edit: `client/src/components/Header.js`
```javascript
<Link to="/" className="nav-link">Home</Link>
<a href="#services" className="nav-link">Services</a>
<a href="#portfolio" className="nav-link">Portfolio</a>
```

---

## 🔌 API Endpoints

### Test Endpoint
```
GET http://localhost:5000/api/hello
Response: { message: 'Welcome to ROBOTEC API' }
```

### Get Services
```
GET http://localhost:5000/api/services
Response: Array of service objects
```

### Contact Form
```
POST http://localhost:5000/api/contact
Body: { name: "John", email: "john@example.com", message: "Hello" }
Response: { message: "Thank you for your message..." }
```

---

## 📁 Project Structure

```
robotec-website/
├── client/                    # React Frontend
│   ├── public/
│   │   ├── logo.png          # Your logo
│   │   └── home-page-img.png # Your hero image
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   ├── pages/             # Page components
│   │   └── styles/            # CSS styles
│   └── package.json
├── server/                    # Node.js Backend
│   ├── index.js              # Main server file
│   ├── .env                  # Configuration
│   └── package.json
├── README.md                 # Full documentation
├── QUICK_START.md           # Quick setup
├── PROJECT_STRUCTURE.md     # Detailed structure
└── IMAGE_SETUP.md           # Image instructions
```

---

## 🌐 Deployment

### Deploy Frontend (Vercel - Free & Easy)
```bash
cd client
npm run build
npx vercel
```

### Deploy Backend (Heroku)
```bash
cd server
# Create Procfile with: web: node index.js
npx heroku login
npx heroku create
git push heroku main
```

---

## 🛠️ Common Tasks

### Add a New Page
1. Create `client/src/pages/NewPage.js`
2. Add to `client/src/App.js`:
```javascript
import NewPage from './pages/NewPage';

<Route path="/new" element={<NewPage />} />
```
3. Add link in Header.js

### Connect to MongoDB
1. Create MongoDB account (MongoDB Atlas)
2. Update `server/.env`:
```
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/robotec
```
3. Create models in `server/models/`
4. Update API endpoints

### Add Email Notifications
1. Install: `npm install nodemailer`
2. Setup SMTP credentials in `.env`
3. Update contact endpoint to send emails

### Add User Authentication
1. Install: `npm install jsonwebtoken bcryptjs`
2. Create auth routes
3. Add middleware for protected routes

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Port 3000 in use | Kill process: `npx kill-port 3000` |
| Port 5000 in use | Change port in `server/.env` |
| Images not showing | Check file names and location |
| API not responding | Verify both servers are running |
| Build errors | Delete `node_modules`, run `npm install` |
| CORS errors | Check CORS origin in server/.env |

---

## 📚 File Guide

| File | Purpose |
|------|---------|
| `README.md` | Complete documentation |
| `QUICK_START.md` | 5-minute setup guide |
| `PROJECT_STRUCTURE.md` | Detailed file structure |
| `IMAGE_SETUP.md` | Image instructions |
| `server/index.js` | Backend server |
| `client/src/App.js` | Main React app |
| `client/package.json` | React dependencies |
| `server/package.json` | Node dependencies |

---

## ✅ Next Steps

After initial setup:

1. ✅ Copy images to public folder
2. ✅ Customize colors and company info
3. ✅ Test the website locally
4. ✅ Add more services/pages as needed
5. ✅ Setup MongoDB (optional)
6. ✅ Add email notifications
7. ✅ Deploy to production

---

## 💬 Support

For issues, check:
1. Browser console for errors (F12)
2. Terminal output for server errors
3. FILE guides in the project
4. README.md for detailed info

---

## 📞 Quick Reference Commands

```bash
# Setup
npm run install-all

# Development
npm run dev

# Build for production
npm run build

# Run only backend
npm run server

# Run only frontend
npm run client

# Stop servers
Ctrl + C

# Clear cache
npm cache clean --force
```

---

## 🎉 You're All Set!

Your professional ROBOTEC website is ready to use. Customize it, test it, and deploy it when ready!

**Happy coding!** 🚀

---

### Questions? Check the documentation files in the project root.
