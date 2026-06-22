import React from 'react';
import './PrintTemplate.css';

export const experiences = [
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
      "Developed a Content Management System (CMS) using Laravel and MySQL for the Setwan District Council website.",
      "Conducted UI slicing using HTML and Tailwind CSS."
    ]
  },
  {
    role: "BACKEND ENGINEER",
    company: "ISTANA THRIFT",
    duration: "MAR 2024 - APR 2024",
    desc: [
      "Developed the backend for a Point of Sales (POS) system using Laravel.",
      "Created business logic workflows for payment processing and pricing."
    ]
  },
  {
    role: "FULLSTACK ENGINEER",
    company: "GOLONGAN KARYA (GOLKAR)",
    duration: "JAN 2024 - FEB 2024",
    desc: [
      "Developed the GARPPU application utilizing Laravel for volunteer management.",
      "Created real-time election results dashboards and optimized database schemas."
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

export const projects = [
  {
    title: "PLN EDU+ LMS PLATFORM",
    role: "BUSINESS SYSTEM ANALYST",
    desc: "Drove end-to-end system analysis for an enterprise-level LMS, designing Course Management, Advanced Quiz Engine, and automated ticketing.",
    tags: ["System Architecture", "Business Logic", "Figma", "Jira", "Postman"]
  },
  {
    title: "SYNERGCG (PLN EPI) PORTAL",
    role: "BA & TECHNICAL ENGINEER",
    desc: "Analyzed existing operations and ensured alignment with BRD as part of a large-scale system reengineering initiative. Designed UI/UX prototypes.",
    tags: ["SDLC", "Figma", "Postman", "Katalon Studio"]
  },
  {
    title: "GOTIG (PLN EPI) ATTENDANCE",
    role: "HYBRID SYSTEM ANALYST",
    desc: "Led the overall direction of a new reengineered internal application for meeting attendance and daily activity reporting.",
    tags: ["System Design", "QA Testing", "Figma"]
  },
  {
    title: "SCADA AUTOMATION MONITORING",
    role: "INITIATOR & LEAD ENGINEER",
    desc: "Developed an automation-based alerting workflow integrating SCADA event data via Kafka with a WhatsApp blasting notification system.",
    tags: ["n8n", "Kafka", "Automation", "Real-Time Systems"]
  }
];

export const skillCategories = [
  {
    code: "BACKEND",
    title: "BACKEND & API DEVELOPMENT",
    skills: ["Golang", "Java", "PHP (Laravel)", "RESTful API", "Microservices"]
  },
  {
    code: "DATABASE",
    title: "DATABASE & DATA MANAGEMENT",
    skills: ["MySQL", "PostgreSQL", "Query Optimization", "ERD", "Transactions"]
  },
  {
    code: "SYS_OPS",
    title: "SYSTEM & INFRASTRUCTURE",
    skills: ["Linux (Ubuntu)", "VM Monitoring", "Performance Analysis", "Server Mgmt"]
  },
  {
    code: "STREAMS",
    title: "DISTRIBUTED SYSTEMS",
    skills: ["Apache Kafka", "Real-time Data Processing"]
  },
  {
    code: "AUTOMATE",
    title: "AUTOMATION & TOOLS",
    skills: ["n8n", "Cron Jobs", "Postman", "Katalon"]
  },
  {
    code: "PRACTICE",
    title: "ENGINEERING PRACTICES",
    skills: ["OOP", "Clean Code", "SDLC", "Agile/Scrum"]
  }
];

const PrintTemplate = () => {
  return (
    <div className="print-template-offscreen">
      <div id="print-template-container" className="print-container">
        
        {/* ================= PAGE 1 ================= */}
        <div id="print-page-1" className="print-page">
          {/* Header */}
          <div className="print-header">
            <div className="print-header-left">
              <span className="print-mono-label">// SYSTEM ARCHITECT // RF-2026</span>
              <h1 className="print-name">Raihan Fadhlurahman</h1>
              <p className="print-title-sub">High-Performance System Architectures & Backend Engine</p>
            </div>
            <div className="print-header-right">
              <div className="print-contact-item">fadhlurahmanraihan29@gmail.com</div>
              <div className="print-contact-item">linkedin.com/in/raihanfadhlurahman</div>
              <div className="print-contact-item">github.com/Fadh29</div>
              <div className="print-contact-item" style={{ color: '#ff7759', fontWeight: '500', marginTop: '4px' }}>https://fadh29.github.io/raihan-fadhlurahman-portofolio/</div>
            </div>
          </div>

          <hr className="print-divider" />

          {/* About & Education Grid */}
          <div className="print-grid-two">
            {/* About Me */}
            <div className="print-col">
              <span className="print-mono-label">// CALIBRATION INFO // 01</span>
              <h2 className="print-section-title">WHO I AM</h2>
              <p className="print-body">
                I am a results-driven Software Engineer with hands-on experience in backend development, system operations, and large-scale enterprise system environments. I have a proven track record in supporting mission-critical infrastructure, designing scalable system architectures, and translating complex business requirements into robust technical solutions.
              </p>
              <p className="print-body">
                Experienced in working within cross-functional teams across engineering, operations, and business stakeholders. Strong exposure to real-time data systems, distributed architecture (Kafka), and database management.
              </p>
            </div>

            {/* Education */}
            <div className="print-col">
              <span className="print-mono-label">// ACADEMIC SPECIFICATIONS</span>
              <h2 className="print-section-title">EDUCATION</h2>
              
              <div className="print-edu-item">
                <span className="print-edu-eyebrow">PNJ-01</span>
                <h3 className="print-edu-name">Politeknik Negeri Jakarta</h3>
                <p className="print-edu-meta">Bachelor's Degree in IT // GPA: 3.57</p>
                <p className="print-edu-desc">Created E-Ticketing application for Bogor Regency with priority scaling & recursive forums (2020 - 2024).</p>
              </div>

              <div className="print-edu-item" style={{ marginTop: '15px' }}>
                <span className="print-edu-eyebrow">UI-02</span>
                <h3 className="print-edu-name">Universitas Indonesia (CCIT)</h3>
                <p className="print-edu-meta">Associate's Degree in Software Engineering // GPA: 3.56</p>
                <p className="print-edu-desc">Certified in Software Engineering in Java Technologies & Professional IT fundamentals.</p>
              </div>
            </div>
          </div>

          <hr className="print-divider" />

          {/* Technical Skills */}
          <div>
            <span className="print-mono-label">// ENGINE SPECS // 04</span>
            <h2 className="print-section-title">TECHNICAL SPECIFICATIONS</h2>
            <div className="print-skills-grid">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="print-skill-card">
                  <span className="print-skill-code">// {cat.code}</span>
                  <h4 className="print-skill-cat-title">{cat.title}</h4>
                  <div className="print-skill-pills">
                    {cat.skills.map((s, i) => (
                      <span key={i} className="print-skill-pill">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= PAGE 2 ================= */}
        <div id="print-page-2" className="print-page">
          {/* Work Experience */}
          <div>
            <span className="print-mono-label">// DEVELOPMENT LOGS // 02</span>
            <h2 className="print-section-title">WORK EXPERIENCE</h2>
            <div className="print-experience-grid">
              {experiences.map((exp, idx) => (
                <div key={idx} className="print-exp-card">
                  <div className="print-exp-card-header">
                    <div>
                      <h3 className="print-exp-role">{exp.role}</h3>
                      <span className="print-exp-company">{exp.company}</span>
                    </div>
                    <span className="print-exp-duration">{exp.duration}</span>
                  </div>
                  <ul className="print-exp-list">
                    {exp.desc.map((d, i) => (
                      <li key={i} className="print-exp-item">
                        <span className="print-bullet">▪</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <hr className="print-divider" style={{ margin: '20px 0' }} />

          {/* Projects */}
          <div>
            <span className="print-mono-label">// ENGINEERING ARTIFACTS // 03</span>
            <h2 className="print-section-title">KEY WORK SYSTEMS</h2>
            <div className="print-projects-grid">
              {projects.map((proj, idx) => (
                <div key={idx} className="print-proj-card">
                  <span className="print-proj-role">{proj.role}</span>
                  <h3 className="print-proj-title">{proj.title}</h3>
                  <p className="print-proj-desc">{proj.desc}</p>
                  <div className="print-proj-tags">
                    {proj.tags.map((t, i) => (
                      <span key={i} className="print-proj-tag">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PrintTemplate;
