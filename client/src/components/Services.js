import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const defaultServices = [
      {
        id: 1,
        title: 'AI Automation',
        description: 'Automate your repetitive business tasks using intelligent AI systems. Save time, reduce errors, and improve productivity with smart workflow automation designed for modern businesses.',

        details: 'Work smarter, not harder.'
      },
      {
        id: 2,
        title: 'Data Analysis',
        description: 'Better Decisions',

        details: 'Transform raw data into actionable insights'
      },
      {
        id: 3,
        title: 'AI Products',
        description: 'Develop intelligent AI-powered products tailored to your business needs, helping you innovate faster and deliver exceptional customer experiences.',
        details: 'Innovation powered by AI.'
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
        description: 'Simplify and centralize your operations with modern management systems that improve collaboration, efficiency, and overall productivity.',
        details: 'Enterprise grade management solutions'
      }
    ];

    setServices(defaultServices);
    setLoading(false);
  }, []);

  const [flipped, setFlipped] = useState({});
  const [isTouch, setIsTouch] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    const touch =
      window.matchMedia &&
      window.matchMedia('(hover: none), (pointer: coarse)').matches;

    setIsTouch(touch || ('ontouchstart' in window));
    return () => {
      mounted.current = false;
    };
  }, []);

  const toggleFlip = (idx) => {
    setFlipped((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const titleToFilename = (title) => {
    const base = title.replace(/\s+/g, '_');
    return `${process.env.PUBLIC_URL}/${base}.jpeg`;
  };

  const getFallbackImageSrc = (src) => {
    if (src.endsWith('.jpeg')) {
      return src.replace('.jpeg', '.jpg');
    }
    if (src.endsWith('.jpg')) {
      return src.replace('.jpg', '.png');
    }
    return `${process.env.PUBLIC_URL}/logo.png`;
  };

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
            <Link
              key={index}
              to="/services"
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={(e) => {
                if (isTouch && !flipped[index]) {
                  e.preventDefault();
                  toggleFlip(index);
                }
              }}
            >
              <div
                className={`service-card flip-card ${flipped[index] ? 'is-flipped' : ''
                  }`}
                onMouseLeave={() => {
                  if (!isTouch && flipped[index]) toggleFlip(index);
                }}
              >
                <div className="flip-inner">
                  {/* FRONT */}
                  <div className="flip-front">
                    <div className="front-title">
                      <h3>{service.title}</h3>
                    </div>

                    <img
                      src={titleToFilename(service.title)}
                      alt={service.title}
                      className="service-image"
                      onError={(e) => {
                        e.target.src = getFallbackImageSrc(e.target.src);
                      }}
                    />
                  </div>

                  {/* BACK */}
                  <div className="flip-back">
                    <h3>{service.title}</h3>

                    <p className="service-subtitle">
                      {service.description}
                    </p>

                    {service.percentage && (
                      <div className="service-percentage">
                        {service.percentage}
                      </div>
                    )}

                    <p className="service-details">
                      {service.details}
                    </p>
                  </div>
                </div>
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