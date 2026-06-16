import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: "IT OPERATION & MAINTENANCE",
    company: "PT PLN ICON PLUS",
    duration: "APR 2025 - PRESENT",
    desc: [
      "Conducted operational monitoring and reporting for Nari3000 HES within AMI SMOC.",
      "Executed Kafka pipeline monitoring ensuring real-time meter and DCU data ingestion.",
      "Managed HES UI-based inspections and Virtual Machine (VM) resource trends."
    ]
  },
  {
    role: "BACKEND ENGINEER",
    company: "DISKOMINFO KABUPATEN BOGOR",
    duration: "AUG 2023 - JUL 2024",
    desc: [
      "Developed the backend for the E-Office application using Golang and MySQL.",
      "Designed database architecture and optimized systems to handle high traffic.",
      "Managed Ubuntu servers and implemented cron jobs for database backups."
    ]
  },
  {
    role: "WEB DEVELOPER",
    company: "PT SUMMIT CITRA DIGITAL",
    duration: "JAN 2025 - FEB 2025",
    desc: [
      "Developed a Content Management System (CMS) using Laravel and MySQL for the Setwan District Council website in Bogor.",
      "Conducted UI slicing using HTML and Tailwind CSS."
    ]
  },
  {
    role: "BACKEND ENGINEER",
    company: "ISTANA THRIFT",
    duration: "MAR 2024 - APR 2024",
    desc: [
      "Developed the backend for a Point of Sales (POS) system using Laravel.",
      "Created business logic workflows for payment processing, discounts, and pricing."
    ]
  },
  {
    role: "FULLSTACK ENGINEER",
    company: "GOLONGAN KARYA (GOLKAR)",
    duration: "JAN 2024 - FEB 2024",
    desc: [
      "Developed the GARPPU application utilizing Laravel for internal election volunteer management.",
      "Created real-time election results dashboards and optimized database schemas for vote proofs."
    ]
  },
  {
    role: "BACKEND ENGINEER",
    company: "PT NUSA TEKNO GLOBAL",
    duration: "MAY 2023 - JUL 2023",
    desc: [
      "Developed the backend for the E-Event application using Golang and PostgreSQL.",
      "Created RESTful APIs to integrate data seamlessly with the frontend."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">

        <div className="animate-fade-in">
          <span className="mono-label experience-marker">DEVELOPMENT LOGS // 02</span>
          <h2 className="experience-title">WORK EXPERIENCE</h2>

          <div className="experience-grid">
            {experiences.map((exp, idx) => (
              <div key={idx} className="experience-card">
                <div className="experience-card-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <span className="exp-company">{exp.company}</span>
                  </div>
                  <span className="exp-duration">{exp.duration}</span>
                </div>

                <ul className="exp-details">
                  {exp.desc.map((point, i) => (
                    <li key={i} className="exp-detail-item">
                      <span className="exp-bullet">▪</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
