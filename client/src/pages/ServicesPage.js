import React, { useEffect } from "react";
import "./ServicesPage.css";

const servicesMeta = {
  title: 'ROOBOTEC — Services: AI, Automation & Development',
  description:
    'ROOBOTEC provides AI solutions, automation, data science, and custom software development to accelerate business growth.',
};

const services = [
  {
    title: "AI Solutions",
    desc: "Custom AI solutions designed to automate operations and improve business efficiency.",
    icon: "🤖",
  },
  {
    title: "AI Automation",
    desc: "Automate repetitive workflows and save time with intelligent systems.",
    icon: "⚙️",
  },
  {
    title: "Data Science",
    desc: "Transform data into insights with analytics, dashboards, and reporting.",
    icon: "📊",
  },
  {
    title: "Web Development",
    desc: "Fast, scalable and responsive websites built for modern businesses.",
    icon: "🌐",
  },
  {
    title: "App Development",
    desc: "Mobile applications designed for performance and seamless user experience.",
    icon: "📱",
  },
  {
    title: "Custom Software",
    desc: "Tailored software solutions designed around your business workflow.",
    icon: "💻",
  },
  {
    title: "E-Commerce Solutions",
    desc: "Powerful online stores with secure payments and easy management.",
    icon: "🛒",
  },
  {
    title: "Marketing",
    desc: "Digital marketing strategies that help businesses reach the right audience.",
    icon: "📣",
  },
  {
    title: "Graphic Designing",
    desc: "Creative visual designs for branding, social media and business identity.",
    icon: "🎨",
  },
];

export default function ServicesPage() {
  useEffect(() => {
    document.title = servicesMeta.title;
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement('meta');
      desc.setAttribute('name', 'description');
      document.head.appendChild(desc);
    }
    desc.setAttribute('content', servicesMeta.description);
  }, []);

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: servicesMeta.title,
    description: servicesMeta.description,
    url: window.location.href,
  };

  return (
    <div className="services-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      {/* HERO */}
      <section className="services-hero">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-label">SERVICES DESIGNED FOR BUSINESS GROWTH</span>

            <h1>
              SCALABLE SERVICES <br />
              <span className="blue-text">FOR DIGITAL</span> GROWTH
            </h1>

            <p>
              We provide innovative technology services that help businesses grow,
              automate processes, and build scalable digital products with
              confidence.
            </p>
          </div>

          <div className="hero-image">
            <img src="/solution_img.png" alt="ROOBOTEC services overview illustration" loading="lazy" />
          </div>
        </div>
      </section>



      {/* INTRO */}
      <section className="services-intro">

        <p className="section-label">WHAT WE OFFER</p>

        <h2>
          SCALABLE SERVICES FOR DIGITAL GROWTH
        </h2>

        <p className="intro-text">
          Powerful, scalable and future-ready solutions tailored to your
          business needs — from AI systems and software to digital products,
          design and marketing.
        </p>

      </section>

      {/* GRID */}
      <section className="services-grid">

        {services.map((service, index) => (
          <div className="service-card" key={index}>

            <div className="icon-box">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

          </div>
        ))}

      </section>

    </div>
  );
}