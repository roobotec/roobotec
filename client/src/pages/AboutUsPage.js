import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./AboutUsPage.css";

const aboutMeta = {
  title: 'About ROOBOTEC — AI & Software Company',
  description:
    'Learn about ROOBOTEC, our mission to build AI-driven software, and how we deliver automation and digital transformation for businesses.',
};

const values = [
  {
    title: "Innovation",
    desc: "We create modern AI powered solutions that help businesses grow faster and smarter.",
    icon: "🚀",
  },
  {
    title: "Customer Focus",
    desc: "Every solution is designed around real business challenges and customer success.",
    icon: "🤝",
  },
  {
    title: "Future Vision",
    desc: "We believe AI and technology will shape the future of every industry, especially healthcare.",
    icon: "🧠",
  },
];

const AboutUsPage = () => {
  useEffect(() => {
    document.title = aboutMeta.title;
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement('meta');
      desc.setAttribute('name', 'description');
      document.head.appendChild(desc);
    }
    desc.setAttribute('content', aboutMeta.description);
  }, []);

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: aboutMeta.title,
    description: aboutMeta.description,
    url: window.location.href,
  };
  return (
    <main className="about-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      {/* HERO */}
      <section className="about-hero">

        <div className="about-hero-copy">

          <span className="eyebrow">
            ABOUT ROOBOTEC
          </span>

          <h1>
            BUILDING SMART DIGITAL SOLUTIONS <br />
            <span className="blue-text">FOR THE FUTURE</span>
          </h1>

          <p>
            ROOBOTEC is a technology driven company focused on helping
            businesses grow through AI, software development, automation,
            digital products, and innovative solutions. We believe technology
            should simplify operations, improve efficiency, and create
            meaningful impact.
          </p>

        </div>

        <div className="about-hero-visual">

          <div className="hero-card">

            <h2>Our Mission</h2>

            <p>
              To empower businesses with intelligent technology solutions and
              build a future where AI improves industries, especially in the
              medical and healthcare field.
            </p>

          </div>

        </div>

      </section>

      {/* STORY SECTION */}
      <section className="about-story">

        <div className="story-content">

          <p className="section-label">
            OUR STORY
          </p>

          <h2>
            Turning Ideas Into Scalable Digital Innovation
          </h2>

          <p>
            ROOBOTEC started with a simple vision to create impactful
            technology solutions that solve real-world business challenges.
            From AI systems and automation to software and digital platforms,
            we focus on building scalable solutions that help companies stay
            ahead in a rapidly changing digital world.
          </p>

          <p>
            Our long term vision is to contribute to industries where
            technology can truly change lives, especially healthcare and
            medical innovation powered by artificial intelligence.
          </p>

        </div>

      </section>

      {/* VALUES */}
      <section className="about-values">

        <div className="values-header">

          <p className="section-label">
            OUR VALUES
          </p>

          <h2>
            What Drives Our Company
          </h2>

        </div>

        <div className="values-grid">

          {values.map((value, index) => (
            <div className="value-card" key={index}>

              <div className="value-icon">
                {value.icon}
              </div>

              <h3>{value.title}</h3>

              <p>{value.desc}</p>

            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="about-cta">

        <div className="cta-content">

          <h2>
            Ready To Build Something Amazing?
          </h2>

          <p>
            Let’s create innovative digital solutions that help your business
            grow and lead in the future.
          </p>

        </div>

        <Link to="/contact" className="cta-button">Contact Us</Link>

      </section>

    </main>
  );
};

export default AboutUsPage;