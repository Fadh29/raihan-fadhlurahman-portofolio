import React, { useState } from 'react';
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone, FaArrowRight } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="footer-section">
      <div className="container">

        <div className="footer-grid animate-fade-in">

          {/* Newsletter Subscribe block */}
          {/* <div className="footer-newsletter">
            <span className="mono-label newsletter-marker">AI & BACKEND ENGINEERING MOVE FAST</span>
            <h4 className="newsletter-title">Subscribe for system updates</h4>
            
            {subscribed ? (
              <p className="newsletter-legal" style={{ color: 'var(--color-coral)', marginBottom: 'var(--spacing-md)' }}>
                System Calibration Subscription Confirmed.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address" 
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-submit" aria-label="Subscribe">
                  <FaArrowRight />
                </button>
              </form>
            )}

            <p className="newsletter-legal">
              By subscribing, you agree to receive automated notifications regarding new project deployments, tech stack updates, and system architectural specifications.
            </p>
          </div> */}

          {/* Engines Column */}
          <div className="footer-col">
            <h5 className="footer-col-title">CORE ENGINES</h5>
            <ul className="footer-links">
              <li>GOLANG (MICROSERVICES)</li>
              <li>JAVA (SPRING BOOT)</li>
              <li>PHP (LARAVEL FRAMEWORK)</li>
              <li>APACHE KAFKA (PIPELINE)</li>
            </ul>
          </div>

          {/* Deployments Column */}
          <div className="footer-col">
            <h5 className="footer-col-title">DEPLOYMENTS</h5>
            <ul className="footer-links">
              <li>PT PLN ICON PLUS</li>
              <li>DISKOMINFO BOGOR</li>
              <li>PT SUMMIT CITRA DIGITAL</li>
              <li>ISTANA THRIFT</li>
            </ul>
          </div>

          {/* Diagnostics Column */}
          <div className="footer-col">
            <h5 className="footer-col-title">DIAGNOSTICS & TUNNEL</h5>
            <ul className="footer-links">
              <li>
                <a href="mailto:fadhlurahmanraihan29@gmail.com">
                  <FaEnvelope /> fadhlurahmanraihan29@gmail.com
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/raihanfadhlurahman/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin /> linkedin.com/in/raihanfadhlurahman/
                </a>
              </li>
              <li className="contact-phone-item">
                <FaPhone /> 082240463327
              </li>
              <li className="contact-phone-item">
                <FaMapMarkerAlt /> BOGOR, INDONESIA
              </li>
            </ul>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} RAIHAN FADHLURAHMAN. ALL PERFORMANCE DATA CALIBRATED FOR SYSTEM STABILITY. ENGINEERED IN BOGOR, INDONESIA.
          </p>
          <span className="footer-region-label">EN-US // INT // RF-2026</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
