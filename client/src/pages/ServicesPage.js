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
    desc: "We design and implement intelligent AI solutions that help businesses automate workflows, improve decision-making, and increase operational efficiency. From predictive analytics and recommendation systems to custom AI-powered applications, our solutions are tailored to meet your unique business requirements. We leverage cutting-edge technologies to help organizations innovate, reduce costs, and stay competitive in an ever-evolving digital landscape.",
    icon: "🤖",
  },
  {
    title: "AI Automation",
    desc: "Transform your business with intelligent automation that eliminates repetitive tasks and optimizes workflows. We develop AI-powered automation systems that integrate seamlessly with your existing processes, improving productivity, reducing human error, and saving valuable time. Whether it's document processing, customer support, workflow automation, or data management, our solutions enable your team to focus on strategic and high-value activities.",
    icon: "⚙️",
  },
  {
    title: "Data Science",
    desc: "Turn your data into a strategic asset with our comprehensive data science services. We collect, analyze, and visualize data to uncover actionable insights that support smarter business decisions. Using advanced machine learning algorithms, predictive analytics, and statistical modeling, we help businesses identify trends, forecast outcomes, optimize operations, and create data-driven strategies that fuel sustainable growth.",
    icon: "📊",
  },
  {
    title: "Web Development",
    desc: "We create modern, responsive, and high-performance websites that deliver exceptional user experiences across all devices. From corporate websites and custom web applications to enterprise portals, our solutions combine attractive design with secure, scalable architecture. Our development approach focuses on speed, accessibility, SEO optimization, and seamless functionality to help your business establish a strong online presence.",
    icon: "🌐",
  },
  {
    title: "App Development",
    desc: "Build powerful mobile applications that engage users and drive business growth. Our app development services cover Android, iOS, and cross-platform solutions designed with intuitive interfaces and robust performance. Whether you need a customer-facing application or an enterprise mobile solution, we ensure seamless functionality, secure architecture, and an outstanding user experience from concept to deployment.",
    icon: "📱",
  },
  {
    title: "Custom Software",
    desc: "Every business is unique, and your software should be too. We develop fully customized software solutions tailored to your workflows, goals, and operational needs. Our scalable applications streamline business processes, improve collaboration, and enhance productivity. From CRM systems and ERP platforms to internal management tools, we deliver reliable software that grows alongside your business.",
    icon: "💻",
  },
  {
    title: "E-Commerce Solutions",
    desc: "Launch and grow your online business with secure, scalable, and feature-rich e-commerce solutions. We build customized online stores with responsive designs, secure payment gateways, inventory management, order tracking, and customer-friendly shopping experiences. Whether you're starting a new online business or upgrading an existing platform, we help maximize conversions and drive long-term revenue growth.",
    icon: "🛒",
  },
  {
    title: "Marketing",
    desc: "Expand your brand's reach with data-driven digital marketing strategies tailored to your business goals. Our services include SEO, social media marketing, PPC advertising, content marketing, email campaigns, and analytics. By combining creativity with performance tracking, we help attract qualified leads, improve customer engagement, increase website traffic, and maximize your return on investment.",
    icon: "📣",
  },
  {
    title: "Graphic Designing",
    desc: "Create a lasting impression with visually compelling graphic design solutions that strengthen your brand identity. We design logos, marketing materials, social media creatives, brochures, banners, presentations, UI/UX elements, and more. Our creative team combines aesthetics with strategic thinking to produce designs that communicate your message effectively and leave a memorable impact on your audience.",
    icon: "🎨",
  },
];

const serviceIconFiles = {
  "AI Solutions": "AI_Solutions.png",
  "AI Automation": "AI_Automation.png",
  "Data Science": "Data_Science.png",
  "Web Development": "Web_Development.png",
  "App Development": "app_development.png",
  "Custom Software": "Custom_Software.png",
  "E-Commerce Solutions": "E-Commerce_Solutions.png",
  "Marketing": "Marketing.png",
  "Graphic Designing": "Graphic_Designing.png",
};

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
          Technology That Powers Businesses
        </h2>

        <p className="intro-text">
          We provide end to end technology services, including AI solutions, custom software development, data analytics, and digital transformation strategies, helping businesses innovate, scale, and stay ahead in a competitive market.
        </p>

      </section>

      {/* GRID */}
      <section className="services-grid">

        {services.map((service, index) => (
          <div className={`service-card service-card-${index + 1}`} key={index}>
            <div className="flip-card">
              <div className="flip-card-inner">

                <div className="service-card-face service-card-front">
                  <div className="service-image-container">
                    <img
                      src={`/servises/${serviceIconFiles[service.title] ?? `${service.title.replace(/\s+/g, '_')}.png`}`}
                      alt={service.title}
                      className="service-image"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        const basePath = `/servises/${serviceIconFiles[service.title] ?? `${service.title.replace(/\s+/g, '_')}`}`;
                        const src = e.target.src;

                        if (src.endsWith('.png')) {
                          e.target.src = `${basePath}.jpg`;
                        } else if (src.endsWith('.jpg')) {
                          e.target.src = `${basePath}.jpeg`;
                        } else {
                          e.target.style.display = 'none';
                          e.target.parentElement.classList.add('no-image');
                        }
                      }}
                    />
                  </div>

                  <div className="service-info">
                    <h3 className="service-title">{service.title}</h3>
                  </div>
                </div>

                <div className="service-card-face service-card-back">
                  <div className="service-back-content">
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}

      </section>

    </div>
  );
}