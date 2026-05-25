import React, { useState, useEffect } from "react";
import "./ContactUsPage.css";

const contactMeta = {
  title: 'Contact ROOBOTEC — Get a Quote or Request Support',
  description:
    'Contact ROOBOTEC for AI solutions, software development, automation, and consultancy. Reach out to discuss your project and receive a quote.',
};

const ContactUsPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Contact from ${name || "Website Visitor"}`;

    const body = `
Name: ${name}
Email: ${email}

Message:
${message}
    `;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info.roobotec@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank", "noopener");
  };

  useEffect(() => {
    document.title = contactMeta.title;
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement('meta');
      desc.setAttribute('name', 'description');
      document.head.appendChild(desc);
    }
    desc.setAttribute('content', contactMeta.description);
  }, []);

  return (
    <main className="contact-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: contactMeta.title,
          description: contactMeta.description,
          url: window.location.href,
          contactPoint: {
            '@type': 'ContactPoint',
            email: 'info.roobotec@gmail.com',
            contactType: 'customer support'
          }
        })
      }} />

      {/* HERO */}
      <section className="contact-hero">

        <div className="contact-hero-copy">

          <span className="eyebrow">
            CONTACT ROOBOTEC
          </span>

          <h1>
            LET’S BUILD SOMETHING <br />
            <span className="blue-text">AMAZING TOGETHER</span>
          </h1>

          <p>
            Whether you need AI solutions, software development,
            automation, or digital products our team is ready
            to help bring your ideas to life.
          </p>

        </div>

        <div className="contact-hero-card">

          <div className="hero-card">

            <h2>Get In Touch</h2>

            <p>
              We’re always open to discussing new projects,
              creative ideas, and innovative business solutions.
            </p>

          </div>

        </div>

      </section>

      {/* FORM SECTION */}
      <section className="contact-form-section">

        <div className="form-container">

          <div className="form-header">

            <p className="section-label">
              SEND MESSAGE
            </p>

            <h2>
              Tell Us About Your Project
            </h2>

          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="input-grid">

              <label>
                Full Name

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

              </label>

              <label>
                Email Address

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

              </label>

            </div>

            <label>
              Message

              <textarea
                rows={7}
                placeholder="Write your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />

            </label>

            <div className="form-actions">

              <button type="submit" className="cta-button primary">
                Send Message
              </button>


            </div>

          </form>

        </div>

      </section>

    </main>
  );
};

export default ContactUsPage;