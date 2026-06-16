import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        
        <div className="about-grid animate-fade-in">
          
          <div className="about-left">
            <span className="mono-label about-marker">CALIBRATION INFO // 01</span>
            <h2 className="about-headline">WHO I AM</h2>
            <p className="about-body-text">
              I am a results-driven Software Engineer with hands-on experience in backend development, system operations, and large-scale enterprise system environments. I have a proven track record in supporting mission-critical infrastructure, designing scalable system architectures, and translating complex business requirements into robust technical solutions.
            </p>
            <p className="about-body-text">
              Experienced in working within cross-functional teams across engineering, operations, and business stakeholders. I have strong exposure to real-time data systems, distributed architecture (Kafka), and database management. I demonstrate strong analytical thinking, ownership, and adaptability in high-demand environments.
            </p>
          </div>

          <div className="about-right">
            <span className="mono-label about-marker">ENGINEERING CREDENTIALS</span>
            <h3 className="about-subhead">EDUCATION & CREDENTIALS</h3>
            
            <div className="education-cards">
              
              {/* Politeknik Negeri Jakarta Card */}
              <div className="education-card">
                <span className="edu-eyebrow">DEGREE SPEC // PNJ-01</span>
                <h4 className="edu-title">Politeknik Negeri Jakarta</h4>
                <span className="edu-degree">Bachelor's Degree in Information Technology</span>
                <span className="edu-gpa">GPA: 3.57 / 4.00</span>
                <p className="edu-details">
                  Aug 2020 - Aug 2024. Created E-Ticketing application for the Communication and Informatics Agency of Bogor Regency. Features include priority scaling and recursive forums.
                </p>
              </div>

              {/* Universitas Indonesia (CCIT) Card */}
              <div className="education-card">
                <span className="edu-eyebrow">DEGREE SPEC // UI-02</span>
                <h4 className="edu-title">Universitas Indonesia (CCIT)</h4>
                <span className="edu-degree">Associate's Degree in Software Engineering</span>
                <span className="edu-gpa">GPA: 3.56 / 4.00</span>
                <p className="edu-details">
                  Certified in Software Engineering in Java Technologies and Professional Information Technology fundamentals.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
