# Project Structure

## Directory Layout

```
robotec-website/
│
├── client/                          # React Frontend
│   ├── public/
│   │   ├── index.html              # Main HTML file
│   │   ├── logo.png                # Company logo (ADD YOUR LOGO HERE)
│   │   └── home-page-img.png       # Hero image (ADD YOUR IMAGE HERE)
│   │
│   ├── src/
│   │   ├── components/             # Reusable Components
│   │   │   ├── Header.js           # Navigation bar
│   │   │   ├── Header.css
│   │   │   ├── HeroSection.js      # Hero/Banner section
│   │   │   ├── HeroSection.css
│   │   │   ├── Services.js         # Services showcase
│   │   │   ├── Services.css
│   │   │   ├── Footer.js           # Footer
│   │   │   └── Footer.css
│   │   │
│   │   ├── pages/                  # Page Components
│   │   │   ├── HomePage.js         # Main landing page
│   │   │   ├── NotFound.js         # 404 page
│   │   │   └── NotFound.css
│   │   │
│   │   ├── styles/                 # Global Styles
│   │   │   └── HomePage.css
│   │   │
│   │   ├── App.js                  # Main App Component
│   │   ├── App.css
│   │   ├── index.js                # Entry point
│   │   └── index.css               # Global styles
│   │
│   └── package.json                # React dependencies
│
├── server/                          # Node.js + Express Backend
│   ├── index.js                    # Main server file
│   ├── .env                        # Environment variables
│   ├── .env.example                # Environment template
│   └── package.json                # Server dependencies
│
├── package.json                     # Root package (for running both)
├── README.md                        # Comprehensive documentation
├── QUICK_START.md                   # Quick setup guide
├── PROJECT_STRUCTURE.md             # This file
├── .gitignore                       # Git ignore rules
├── setup.sh                         # Linux/Mac setup script
└── setup.bat                        # Windows setup script
```

## Component Descriptions

### Frontend Components

#### Header Component
- **File**: `client/src/components/Header.js`
- **Purpose**: Navigation bar with logo, menu links, and contact button
- **Features**: Responsive mobile menu, sticky positioning
- **Props**: None (uses routing)

#### Hero Section Component
- **File**: `client/src/components/HeroSection.js`
- **Purpose**: Main banner with headline, description, and CTA button
- **Features**: Gradient background, statistics cards, responsive layout
- **Content**: 
  - Main headline: "Building Intelligent Solutions for Tomorrow"
  - Call-to-action button
  - 4 stat cards showing company metrics

#### Services Component
- **File**: `client/src/components/Services.js`
- **Purpose**: Showcase company services/offerings
- **Features**: Grid layout, hover effects, API integration ready
- **Services Included**:
  - AI Automation (+78% efficiency)
  - Data Analysis (+85% better decisions)
  - AI Products
  - Custom Software
  - Management Systems

#### Footer Component
- **File**: `client/src/components/Footer.js`
- **Purpose**: Footer with company info, links, contact details
- **Sections**:
  - Company info with logo
  - Services links
  - Solutions links
  - Company links
  - Contact information
  - Footer bottom with copyright

#### Home Page
- **File**: `client/src/pages/HomePage.js`
- **Purpose**: Main landing page combining all components
- **Structure**: Hero Section → Services → Footer

### Backend Files

#### Main Server File
- **File**: `server/index.js`
- **Purpose**: Express server setup and API endpoints
- **Endpoints**:
  - `GET /api/hello` - Test endpoint
  - `GET /api/services` - Return services data
  - `POST /api/contact` - Handle contact form submissions
- **Middleware**: CORS, Body Parser
- **Ready for**: MongoDB integration, authentication, email

## Styling Structure

### Color Scheme
- **Primary Blue**: `#0066ff`
- **Dark Navy**: `#001a4d`
- **Light Background**: `#f5f7fa`
- **Text Dark**: `#333`
- **Text Light**: `#666`

### Typography
- **Font Family**: System fonts (Segoe UI, Roboto, etc.)
- **Headings**: 600-700 weight
- **Body**: 400 weight

### Layout Breakpoints
- **Desktop**: 1024px+
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## Database Schema (When Integrated)

### Contact Model
```javascript
{
  name: String,
  email: String,
  message: String,
  createdAt: Date (default: now)
}
```

### Service Model (Optional)
```javascript
{
  title: String,
  description: String,
  percentage: String,
  details: String,
  icon: String
}
```

## How to Add New Features

### Add a New Page
1. Create file in `client/src/pages/NewPage.js`
2. Create corresponding CSS file
3. Import in `client/src/App.js`
4. Add route: `<Route path="/new" element={<NewPage />} />`
5. Add navigation link in Header.js

### Add a New API Endpoint
1. Open `server/index.js`
2. Add new route handler
3. Example:
   ```javascript
   app.get('/api/projects', (req, res) => {
     // Your logic here
     res.json({ data: [] });
   });
   ```

### Add Database Integration
1. Install Mongoose: `npm install mongoose`
2. Create models in `server/models/`
3. Connect MongoDB in `server/index.js`
4. Update endpoints to use models

### Add Authentication
1. Install JWT: `npm install jsonwebtoken bcryptjs`
2. Create auth routes
3. Add middleware for protected routes
4. Update frontend with login/register pages

## Environment Variables

### Server (.env)
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/robotec
CORS_ORIGIN=http://localhost:3000
```

### Client (package.json proxy)
```json
"proxy": "http://localhost:5000"
```

## Performance Optimization Tips

1. **Image Optimization**
   - Use compressed images
   - Use WebP format for better compression
   - Add responsive images with srcset

2. **Code Splitting**
   - Lazy load components
   - Route-based code splitting
   - Use React.lazy() for components

3. **Caching**
   - Enable HTTP caching
   - Use service workers
   - Cache API responses

4. **Build Optimization**
   - Minify CSS/JS
   - Remove unused dependencies
   - Optimize bundle size

## Security Considerations

1. **Backend**
   - Validate all inputs
   - Use CORS properly
   - Implement rate limiting
   - Use HTTPS in production

2. **Frontend**
   - Sanitize user inputs
   - Use Content Security Policy
   - Keep dependencies updated
   - Use environment variables for sensitive data

3. **Database**
   - Use parameterized queries
   - Implement proper authentication
   - Regular backups
   - Monitor access

## Deployment Checklist

- [ ] Update environment variables
- [ ] Set up SSL certificate
- [ ] Configure database
- [ ] Set up email service
- [ ] Test all API endpoints
- [ ] Optimize images
- [ ] Build React app
- [ ] Deploy backend to server
- [ ] Deploy frontend to CDN
- [ ] Set up monitoring
- [ ] Configure backups

---

**For more details, see README.md**
