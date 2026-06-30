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
    desc: "We design and deliver AI solutions that automate workflows, enhance decision-making, and improve efficiency. From predictive analytics to custom AI applications, our services are tailored to your business needs, helping you innovate, reduce costs, and stay competitive using advanced technologies.",
    icon: "🤖",
  },
  {
    title: "AI Automation",
    desc: "We build AI automation systems that streamline workflows, reduce repetitive tasks, and improve productivity. Our solutions integrate with your processes to save time, reduce errors, and support efficient operations like support, data, and document handling.",
    icon: "⚙️",
  },
  {
    title: "Data Science",
    desc: "We turn data into actionable insights using data science, machine learning, and analytics. Our services help businesses uncover trends, predict outcomes, optimize operations, and make smarter data-driven decisions for sustainable growth",
    icon: "📊",
  },
  {
    title: "Web Development",
    desc: "We build modern, responsive, and high-performance websites that deliver great user experiences on all devices. From corporate sites to custom web apps, our solutions are secure, scalable, SEO-friendly, and optimized for speed and functionality to strengthen your online presence.",
    icon: "🌐",
  },
  {
    title: "App Development",
    desc: "We build powerful mobile apps for Android, iOS, and cross-platform use that engage users and support business growth. Our solutions focus on intuitive design, strong performance, security, and seamless functionality from concept to deployment.",
    icon: "📱",
  },
  {
    title: "Custom Software",
    desc: "We build custom software tailored to your business needs, workflows, and goals. Our scalable solutions improve efficiency, collaboration, and productivity, including CRM, ERP, and management systems that grow with your business.",
    icon: "💻",
  },
  {
    title: "E-Commerce Solutions",
    desc: "We build secure, scalable e-commerce stores with responsive design, payment integration, inventory, and order management. Our solutions improve user experience, boost conversions, and support long-term business growth.",
    icon: "🛒",
  },
  {
    title: "Marketing",
    desc: "We provide data driven digital marketing services including SEO, social media, PPC, content, email campaigns, and analytics. Our strategies increase visibility, attract quality leads, boost engagement, and maximize ROI.",
    icon: "📣",
  },
  {
    title: "Graphic Designing",
    desc: "We create impactful graphic design solutions that strengthen your brand identity. Our services include logos, marketing materials, social media posts, banners, brochures, presentations, and UI/UX designs that communicate your message clearly and leave a strong visual impression.",
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