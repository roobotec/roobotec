const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Welcome to ROBOTEC API' });
});

// Services data
app.get('/api/services', (req, res) => {
  const services = [
    {
      id: 1,
      title: 'AI Automation',
      description: 'Increase Efficiency',
      icon: 'automation',
      percentage: '+78%',
      details: 'Streamline your business processes with intelligent automation'
    },
    {
      id: 2,
      title: 'Data Analysis',
      description: 'Better Decisions',
      icon: 'analysis',
      percentage: '+85%',
      details: 'Transform raw data into actionable insights'
    },
    {
      id: 3,
      title: 'AI Products',
      description: 'Smarter Solutions',
      icon: 'products',
      details: 'Custom AI-powered products for your business'
    },
    {
      id: 4,
      title: 'Custom Software',
      description: 'Built for You',
      icon: 'software',
      details: 'Tailored software solutions for your unique needs'
    },
    {
      id: 5,
      title: 'Management Systems',
      description: 'Streamline Operations',
      icon: 'management',
      details: 'Enterprise-grade management solutions'
    }
  ];
  res.json(services);
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // TODO: Save to MongoDB
  console.log('Contact form submitted:', { name, email, message });

  res.json({ message: 'Thank you for your message. We will contact you soon!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
