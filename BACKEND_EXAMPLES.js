// ROBOTEC Backend - MongoDB Integration Examples

// ============================================
// 1. MONGODB SETUP
// ============================================

// Install: npm install mongoose
// Update server/.env with MongoDB connection string:
// MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/robotec

// In server/index.js, add:
/*
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
*/

// ============================================
// 2. CONTACT MODEL
// ============================================

// File: server/models/Contact.js
/*
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    default: ''
  },
  subject: {
    type: String,
    default: 'General Inquiry'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Contact', contactSchema);
*/

// ============================================
// 3. SERVICE MODEL
// ============================================

// File: server/models/Service.js
/*
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  percentage: String,
  icon: String,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Service', serviceSchema);
*/

// ============================================
// 4. PROJECT MODEL
// ============================================

// File: server/models/Project.js
/*
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  category: String,
  image: String,
  link: String,
  technologies: [String],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Project', projectSchema);
*/

// ============================================
// 5. UPDATED API ENDPOINTS
// ============================================

/*
// In server/index.js

const Contact = require('./models/Contact');
const Service = require('./models/Service');

// GET all contacts
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST new contact
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message, phone, subject } = req.body;
    
    const contact = new Contact({
      name,
      email,
      message,
      phone,
      subject
    });
    
    await contact.save();
    res.json({ message: 'Thank you! We will contact you soon.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET services from database
app.get('/api/services', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST new service (admin only)
app.post('/api/services', async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
*/

// ============================================
// 6. EMAIL INTEGRATION
// ============================================

/*
// Install: npm install nodemailer

// In server/index.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Send email on contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Save to database
    const contact = new Contact({ name, email, message });
    await contact.save();
    
    // Send confirmation email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We received your message',
      html: `
        <h2>Thank you for contacting ROBOTEC!</h2>
        <p>We have received your message and will respond shortly.</p>
        <p>Best regards,<br>ROBOTEC Team</p>
      `
    });
    
    res.json({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
*/

// ============================================
// 7. AUTHENTICATION SETUP
// ============================================

/*
// Install: npm install jsonwebtoken bcryptjs

// File: server/models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' },
  createdAt: { type: Date, default: Date.now }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('User', userSchema);

// In server/index.js
const jwt = require('jsonwebtoken');
const User = require('./models/User');

// Login endpoint
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
*/

// ============================================
// 8. FRONTEND API INTEGRATION
// ============================================

/*
// File: client/src/services/api.js
import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

export const api = {
  // Services
  getServices: () => axios.get(`${API_BASE}/services`),
  addService: (data) => axios.post(`${API_BASE}/services`, data),
  
  // Contacts
  submitContact: (data) => axios.post(`${API_BASE}/contact`, data),
  getContacts: () => axios.get(`${API_BASE}/contacts`),
  
  // Auth
  login: (credentials) => axios.post(`${API_BASE}/login`, credentials),
  register: (data) => axios.post(`${API_BASE}/register`, data)
};

// Usage in components:
// import { api } from '../services/api';
// const response = await api.getServices();
// const data = response.data;
*/

// ============================================
// 9. VALIDATION MIDDLEWARE
// ============================================

/*
// File: server/middleware/validate.js
const validateContact = (req, res, next) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }
  
  next();
};

module.exports = { validateContact };

// In server/index.js
// const { validateContact } = require('./middleware/validate');
// app.post('/api/contact', validateContact, contactHandler);
*/

// ============================================
// 10. ERROR HANDLING
// ============================================

/*
// File: server/middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  res.status(500).json({
    error: process.env.NODE_ENV === 'production' 
      ? 'Internal Server Error' 
      : err.message
  });
};

module.exports = errorHandler;

// In server/index.js - add at the end
// app.use(errorHandler);
*/

// ============================================
// .ENV FILE ADDITIONS
// ============================================

/*
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/robotec

# Email
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# JWT
JWT_SECRET=your-secret-key-here

# Environment
NODE_ENV=development
*/

// ============================================
// EXAMPLE API RESPONSES
// ============================================

/*
// GET /api/services
[
  {
    _id: "123",
    title: "AI Automation",
    description: "Increase Efficiency",
    percentage: "+78%",
    details: "Streamline your business..."
  },
  // ... more services
]

// POST /api/contact
{
  message: "Thank you for your message. We will contact you soon!"
}

// GET /api/hello
{
  message: "Welcome to ROBOTEC API"
}
*/

console.log('=== Backend Integration Examples ===');
console.log('See comments in this file for implementation details');
