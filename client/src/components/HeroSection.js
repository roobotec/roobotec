import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
  { value: 10, suffix: '+', label: 'Industries Served' },
  { value: 24, suffix: '/7', label: 'Support Available' },
];

const HeroSection = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const statsRef = useRef(null);
  const animationStarted = useRef(false);

  useEffect(() => {
    const animateCounts = () => {
      const duration = 1200;
      const startTime = performance.now();

      const step = (timestamp) => {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCounts(stats.map((stat) => Math.ceil(stat.value * progress)));

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationStarted.current) {
            animationStarted.current = true;
            animateCounts();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

      <div className="hero-stats" ref={statsRef}>
        {stats.map((stat, index) => (
          <div className="stat-item" key={stat.label}>
            <div className="stat-icon">{counts[index]}{stat.suffix}</div>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
