import React from 'react';
import './Skills.css';

const skillCategories = [
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
    skills: ["Linux (Ubuntu)", "VM Monitoring", "Performance Analysis", "Server Management"]
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

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        
        <div className="animate-fade-in">
          <span className="mono-label skills-marker">ENGINE SPECS // 04</span>
          <h2 className="skills-title">TECHNICAL SPECIFICATIONS</h2>

          <div className="skills-grid">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="skill-capability-card">
                <span className="mono-label skill-code-label">// {cat.code}</span>
                <h4 className="skill-category-title">{cat.title}</h4>
                <div className="skill-pills-list">
                  {cat.skills.map((skill, i) => (
                    <span key={i} className="skill-pill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
