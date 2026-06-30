import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./SolutionsPage.css";

const solutionsMeta = {
  title: 'ROOBOTEC — Solutions: Industry-ready AI & Software',
  description:
    'ROOBOTEC builds industry solutions including e-commerce, healthcare and logistics using AI-driven architecture and scalable platforms.',
};

const solutions = [
  {
    icon: "🛒",
    title: "E-Commerce Solutions",
    desc: "Smart e-commerce platforms with inventory, payments and customer management.",
  },
  {
    icon: "🏥",
    title: "Healthcare Solutions",
    desc: "Digital healthcare systems for patient management, analytics and smart workflows.",
  },
  {
    icon: "📊",
    title: "Marketing Solutions",
    desc: "AI-powered dashboards for campaign tracking and customer intelligence.",
  },
  {
    icon: "🏬",
    title: "Supermarket Solutions",
    desc: "Inventory management, POS integrations and billing systems.",
  },
  {
    icon: "🚚",
    title: "Transportation Solutions",
    desc: "Fleet tracking, route optimization and logistics management.",
  },
  {
    icon: "💻",
    title: "Custom Enterprise Solutions",
    desc: "Tailored software platforms built around your business workflow.",
  },
];

const features = [
  {
    icon: "🧠",
    title: "AI-Driven Thinking",
    desc: "Smart systems built using AI and automation.",
  },
  {
    icon: "⚙️",
    title: "Custom Built",
    desc: "Tailored specifically for your business goals.",
  },
  {
    icon: "📈",
    title: "Scalable Architecture",
    desc: "Built to scale with your growth.",
  },
  {
    icon: "🎧",
    title: "Reliable Support",
    desc: "Continuous support and improvements.",
  },
];

function SolutionsPage() {
  useEffect(() => {
    document.title = solutionsMeta.title;
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement('meta');
      desc.setAttribute('name', 'description');
      document.head.appendChild(desc);
    }
    desc.setAttribute('content', solutionsMeta.description);
  }, []);

  return (
    <main className="solutions-page">

      <section className="solutions-hero">
        <div className="hero-container">
          <div className="hero-left">
            <span className="hero-badge">SMART SOLUTIONS FOR A SMARTER FUTURE</span>

            <h1>
              Intelligent Solutions
              <br />
              Built for <span>Real Impact</span>
            </h1>

            <p>
              We design and develop AI-powered and scalable digital solutions
              that solve real business challenges and drive measurable results.
            </p>

            <Link to="/contact" className="hero-btn">Explore Solutions →</Link>
          </div>

          <div className="hero-right">
            <img src={`${process.env.PUBLIC_URL}/Solution_img.png`} alt="ROOBOTEC solutions example illustration" loading="lazy" />
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: solutionsMeta.title,
          description: solutionsMeta.description,
          url: window.location.href,
        })
      }} />

      <section className="solutions-section">
        <span className="section-label">WHAT WE OFFER</span>

        <h2>
          Solutions We Build
          <br />
          For <span>Modern Businesses</span>
        </h2>

        <p>
          Powerful, scalable and future-ready solutions tailored to your industry.
        </p>

        <div className="solutions-grid">
          {solutions.map((item, i) => (
            <div className="solution-card" key={i}>
              <div className="solution-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="arrow-btn">→</div>
            </div>
          ))}
        </div>
      </section>

      <section className="why-section">
        <span className="section-label">WHY CHOOSE ROOBOTEC</span>

        <h2>
          Technology That <span>Drives Your Business Forward</span>
        </h2>

        <div className="why-grid">
          {features.map((item, i) => (
            <div className="why-card" key={i}>
              <div className="why-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div>
          <span>LET’S BUILD SOMETHING GREAT TOGETHER</span>
          <h2>Ready to Build Your Solution?</h2>
          <p>
            Let’s discuss how we can turn your ideas into powerful digital solutions.
          </p>
        </div>

        <Link to="/contact" className="cta-btn">
          Contact Us →
        </Link>
      </section>

    </main>
  );
}

export default SolutionsPage;