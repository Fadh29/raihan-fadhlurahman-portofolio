import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('rf-system-consent-accepted');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('rf-system-consent-accepted', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner-cohere animate-fade-in">
      <div className="cookie-banner-content">
        <div className="cookie-banner-text-area">
          <span className="cookie-banner-eyebrow">SYSTEM CALIBRATION NOTIFICATION</span>
          <p className="cookie-banner-text">
            We use cookies and system diagnostics to optimize your engine performance. By tuning in, you consent to our data calibrations.
          </p>
        </div>
        <div className="cookie-banner-actions">
          <button className="cookie-accept-btn" onClick={handleAccept}>
            ACCEPT SPEC
          </button>
          <button className="cookie-decline-btn" onClick={handleDecline}>
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
