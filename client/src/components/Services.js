import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch services from backend or use default data
    const defaultServices = [
      {
        id: 1,
        title: 'AI Automation',
        description: 'Increase Efficiency',
        percentage: '+78%',
        details: 'Streamline your business processes with intelligent automation'
      },
      {
        id: 2,
        title: 'Data Analysis',
        description: 'Better Decisions',
        percentage: '+85%',
        details: 'Transform raw data into actionable insights'
      },
      {
        id: 3,
        title: 'AI Products',
        description: 'Smarter Solutions',
        details: 'Custom AI-powered products for your business'
      },
      {
        id: 4,
        title: 'Custom Software',
        description: 'Built for You',
        details: 'Tailored software solutions for your unique needs'
      },
      {
        id: 5,
        title: 'Management Systems',
        description: 'Streamline Operations',
        details: 'Enterprise-grade management solutions'
      }
    ];

    setServices(defaultServices);
    setLoading(false);
  }, []);

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Smart Tech Solutions</h2>
          <h3>To Scale Your Business</h3>
          <p>Comprehensive suite of AI and technology services</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <Link key={index} to="/services" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className={`service-card card-${index + 1}`}>
                <div className="service-header">
                  <h3>{service.title}</h3>
                </div>
                <p className="service-subtitle">{service.description}</p>
                {service.percentage && (
                  <div className="service-percentage">{service.percentage}</div>
                )}
                <p className="service-details">{service.details}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="services-bottom">
          <h2>Smart Tech Solutions</h2>
          <p>To Scale Your Business</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
