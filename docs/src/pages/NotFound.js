import React, { useEffect } from 'react';
import './NotFound.css';

const notFoundMeta = {
  title: '404 — Page Not Found | ROOBOTEC',
  description: "The page you are looking for doesn't exist on ROOBOTEC.",
};

const NotFound = () => {
  useEffect(() => {
    document.title = notFoundMeta.title;
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement('meta');
      desc.setAttribute('name', 'description');
      document.head.appendChild(desc);
    }
    desc.setAttribute('content', notFoundMeta.description);
  }, []);
  return (
    <div className="not-found">
      <div className="not-found-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: notFoundMeta.title,
            description: notFoundMeta.description,
            url: window.location.href
          })
        }} />
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist.</p>
        <a href="/" className="back-btn">Go Back Home</a>
      </div>
    </div>
  );
};

export default NotFound;
