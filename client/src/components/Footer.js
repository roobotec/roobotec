import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={`${process.env.PUBLIC_URL}/ShortLogo.png?v=20260630`} alt="ROBOTEC" />
            </div>
            <p>Building innovative AI and technology solutions for the future.</p>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">AI Products</Link></li>
              <li><Link to="/services">AI Automation</Link></li>
              <li><Link to="/services">Data Analysis</Link></li>
              <li><Link to="/services">Custom Software</Link></li>
            </ul>
          </div>

          {/* <div className="footer-section">
            <h4>Solutions</h4>
            <ul>
              <li><Link to="/solutions">Data Analysis</Link></li>
              <li><Link to="/solutions">AI Automation</Link></li>
              <li><Link to="/solutions">Management Systems</Link></li>
              <li><Link to="/solutions">Web Development</Link></li>
            </ul>
          </div> */}

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section footer-contact-section">
            <h4>Contact</h4>
            {/* <p>+92 (333) 778-8410</p> */}
            <p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=info.roobotec@gmail.com" target="_blank" rel="noopener noreferrer">info.roobotec@gmail.com</a></p>
            <p>Thoker naiz baig Lahore, Pakistan</p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/roobotec.ltd/" target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/instagram.png?v=20260630`} alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61589565616732" target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/facebook.png?v=20260630`} alt="Facebook" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/linkedin.png?v=20260630`} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 ROOBOTEC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
