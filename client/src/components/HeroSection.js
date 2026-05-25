import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">AI POWERED. FUTURE READY.</div>
          <h1 className="hero-title">
            Building Intelligent
            <span className="hero-highlight"> Solutions</span> for Tomorrow
          </h1>
          <p className="hero-description">
            We build AI products, automate processes, and deliver custom digital solutions that drive growth, efficiency and innovation.
          </p>
          <Link to="/contact" className="hero-btn">Start Your Project →</Link>
        </div>

        <div className="hero-image">
          <img src="/home-page-img.png" alt="ROOBOTEC illustrative AI robot" className="robot-img" loading="lazy" />
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat-item">
          <div className="stat-icon">50+</div>
          <p className="stat-label">Projects Delivered</p>
        </div>
        <div className="stat-item">
          <div className="stat-icon">100%</div>
          <p className="stat-label">Client Satisfaction</p>
        </div>
        <div className="stat-item">
          <div className="stat-icon">10+</div>
          <p className="stat-label">Industries Served</p>
        </div>
        <div className="stat-item">
          <div className="stat-icon">24/7</div>
          <p className="stat-label">Support Available</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
