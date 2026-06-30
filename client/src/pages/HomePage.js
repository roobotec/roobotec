import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import '../styles/HomePage.css';

// SEO: Home page meta + structured data
const homeMeta = {
  title: 'ROOBOTEC AI, Automation & Software Development',
  description:
    'ROOBOTEC delivers AI-powered solutions, automation, and custom software to help businesses scale and innovate.',
};

const HomePage = () => {
  useEffect(() => {
    document.title = homeMeta.title;
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement('meta');
      desc.setAttribute('name', 'description');
      document.head.appendChild(desc);
    }
    desc.setAttribute('content', homeMeta.description);

    const siteUrl = `${window.location.origin}/roobotec/`;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', siteUrl);
  }, []);

  const siteUrl = `${window.location.origin}/roobotec/`;
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ROOBOTEC',
    url: siteUrl,
    description: homeMeta.description,
  };

  return (
    <div className="home-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <HeroSection />
      <Services />
    </div>
  );
};

export default HomePage;
