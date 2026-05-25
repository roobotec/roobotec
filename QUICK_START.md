# ROBOTEC Website - Quick Start Guide

## ⚡ Fast Setup (5 minutes)

### Step 1: Navigate to Project
```bash
cd robotec-website
```

### Step 2: Install All Dependencies
```bash
npm run install-all
```

### Step 3: Add Your Images
Copy your images to the public folder:
```bash
client/public/logo.png
client/public/home-page-img.png
```

### Step 4: Start Development Server
```bash
npm run dev
```

The website will open at: **http://localhost:3000**
The API server runs at: **http://localhost:5000**

---

## 📁 What Was Created

### Backend (Node.js + Express)
- RESTful API endpoints
- Contact form handling
- Services data management
- Ready for MongoDB integration

### Frontend (React)
- Responsive home page
- Navigation header
- Services showcase
- Footer with company info
- Beautiful gradient designs
- Mobile-friendly layout

### Key Files
- `robotec-website/server/index.js` - Main backend server
- `robotec-website/client/src/App.js` - Main React app
- `robotec-website/client/src/components/` - Reusable components
- `robotec-website/client/src/pages/HomePage.js` - Home page

---

## 🎨 How to Customize

### Change Logo/Images
1. Place your images in `client/public/`
2. Update references in components:
   ```javascript
   <img src="/logo.png" alt="Logo" />
   <img src="/home-page-img.png" alt="Hero" />
   ```

### Change Colors
Edit CSS in component files (example):
```css
Primary Blue: #0066ff → Change to your color
Dark Blue: #001a4d → Change to your color
Light Blue: #f5f7fa → Change to your color
```

### Add New Pages
1. Create component in `client/src/pages/`
2. Import and add route in `client/src/App.js`
3. Add link in `Header.js`

### Update Services
Edit `client/src/components/Services.js`:
```javascript
const defaultServices = [
  {
    id: 1,
    title: 'Your Service',
    description: 'Your Description',
    // ... more fields
  }
];
```

---

## 🚀 Deployment Options

### Deploy Frontend (Vercel - Recommended)
```bash
cd client
npm run build
vercel
```

### Deploy Backend (Heroku)
```bash
cd server
npm run build
heroku create
git push heroku main
```

---

## 🛠️ Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 3000 in use | Change in client: `npm start -- --port 3001` |
| Port 5000 in use | Update `server/.env`: `PORT=5001` |
| Images not showing | Check `client/public/` folder path |
| "Can't find module" | Run `npm install` in that directory |
| API not working | Ensure both servers are running |

---

## 📞 API Endpoints

```
GET  /api/hello              → Test endpoint
GET  /api/services           → Get all services
POST /api/contact            → Submit contact form
```

---

## 📱 Responsive Design
The website is fully responsive for:
- Desktop (1200px+)
- Tablet (768px - 1024px)
- Mobile (< 768px)

---

## ✨ Features Included

✅ Modern UI with gradients
✅ Responsive mobile design
✅ Smooth animations
✅ SEO optimized
✅ Contact form ready
✅ Services showcase
✅ Company info section
✅ Sticky header navigation
✅ Dark/Light sections
✅ Social links ready

---

## 🔧 Next Steps

1. ✅ Setup complete
2. 🎨 Customize colors and images
3. 📝 Update company info
4. 🔗 Add social media links
5. 💾 Setup MongoDB for contacts
6. 📧 Configure email notifications
7. 🚀 Deploy to production

---

**Need help? Check README.md for detailed documentation.**
