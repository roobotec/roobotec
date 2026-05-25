# ROBOTEC Website - MERN Stack

A modern, responsive company website built with MERN stack (MongoDB, Express, React, Node.js) featuring AI automation, data analysis, and custom software solutions.

## Project Structure

```
robotec-website/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── styles/        # Global styles
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server/                 # Node.js backend
│   ├── index.js           # Main server file
│   ├── .env               # Environment variables
│   └── package.json
└── package.json           # Root package.json
```

## Features

- **Responsive Design** - Mobile-friendly layout
- **Modern UI** - Beautiful gradient designs and smooth animations
- **Component-Based Architecture** - Reusable React components
- **RESTful API** - Express backend with API endpoints
- **Services Section** - Showcase AI automation, data analysis, and more
- **Contact Management** - Contact form backend integration
- **SEO Ready** - Optimized meta tags and structure

## Components

### Frontend Components
- **Header** - Navigation bar with logo and menu
- **HeroSection** - Eye-catching hero section with CTA button
- **Services** - Service cards grid showcasing offerings
- **Footer** - Company information and links
- **HomePage** - Main landing page

### Backend Endpoints
- `GET /api/hello` - Test endpoint
- `GET /api/services` - Retrieve all services
- `POST /api/contact` - Submit contact form

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (optional, for full database integration)

### Setup Instructions

1. **Clone or navigate to the project**
   ```bash
   cd robotec-website
   ```

2. **Install dependencies for all parts**
   ```bash
   npm run install-all
   ```

   Or manually:
   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   ```

3. **Setup Environment Variables**
   - Edit `server/.env`:
     ```
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/robotec
     NODE_ENV=development
     ```

4. **Start the application**

   **Option A: Run both client and server simultaneously**
   ```bash
   npm run dev
   ```

   **Option B: Run separately**
   - Terminal 1 (Backend):
     ```bash
     npm run server
     ```
   - Terminal 2 (Frontend):
     ```bash
     npm run client
     ```

5. **Access the website**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Development

### Available Scripts

**Root directory:**
- `npm run install-all` - Install all dependencies
- `npm run dev` - Run both client and server in development mode
- `npm run client` - Run React development server
- `npm run server` - Run Node.js server
- `npm run build` - Build the React app for production

**Client only:**
- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests

**Server only:**
- `npm start` - Start the server
- `npm run dev` - Start with nodemon (auto-reload)

## Customization

### Change Colors
Edit the CSS files in `client/src/components/` and `client/src/styles/`:
- Primary blue: `#0066ff`
- Dark background: `#001a4d`
- Light background: `#f5f7fa`

### Update Content
- **Services**: Edit `client/src/components/Services.js`
- **Header**: Edit `client/src/components/Header.js`
- **Hero Section**: Edit `client/src/components/HeroSection.js`

### Add More Pages
1. Create a new component in `client/src/pages/`
2. Add a route in `client/src/App.js`
3. Update navigation in `Header.js`

## Database Integration (MongoDB)

To integrate MongoDB:

1. **Install MongoDB locally or use MongoDB Atlas**

2. **Create Mongoose models** in `server/models/`:
   ```javascript
   // Example: Contact model
   const mongoose = require('mongoose');
   
   const contactSchema = new mongoose.Schema({
     name: String,
     email: String,
     message: String,
     createdAt: { type: Date, default: Date.now }
   });
   
   module.exports = mongoose.model('Contact', contactSchema);
   ```

3. **Update backend endpoints** to save to database

## Deployment

### Deploy to Vercel (Frontend)
```bash
cd client
vercel
```

### Deploy to Heroku (Backend)
1. Create a Heroku account
2. Install Heroku CLI
3. Configure `Procfile` in server directory:
   ```
   web: node index.js
   ```
4. Deploy:
   ```bash
   cd server
   heroku login
   heroku create
   git push heroku main
   ```

## Troubleshooting

### Port already in use
- Change port in `server/.env`: `PORT=5001`
- Update proxy in `client/package.json`: `"proxy": "http://localhost:5001"`

### MongoDB connection error
- Ensure MongoDB is running locally or connection string is correct
- Update `MONGODB_URI` in `server/.env`

### React build errors
- Delete `node_modules` and `.package-lock.json`
- Run `npm install` again

## Technologies Used

- **Frontend**: React 18, React Router DOM, CSS3, Axios
- **Backend**: Node.js, Express.js, CORS, Body Parser
- **Database**: MongoDB with Mongoose
- **Styling**: CSS3 with modern gradients and animations
- **Tools**: npm, nodemon, Git

## Future Enhancements

- [ ] Add portfolio/projects page
- [ ] Implement blog section
- [ ] Add team members showcase
- [ ] Integrate email notifications
- [ ] Add user authentication
- [ ] Implement payment processing
- [ ] Add admin dashboard
- [ ] Multi-language support

## License

MIT License - feel free to use this project for your needs.

## Support

For questions or issues, please contact: info@robotec.com

---

**Happy coding! 🚀**
