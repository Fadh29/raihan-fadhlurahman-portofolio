import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: "PLN EDU+ LMS PLATFORM",
    role: "BUSINESS SYSTEM ANALYST",
    desc: "Drove end-to-end system analysis for an enterprise-level LMS, designing critical ecosystems including Course Management, Advanced Quiz Engine, and automated ticketing.",
    categories: ["SYSTEM ANALYSIS", "BACKEND & DATA"],
    tags: ["System Architecture", "Business Logic", "Figma", "Jira", "Postman"],
    image: "/lms_project.png"
  },
  {
    title: "SYNERGCG (PLN EPI) PORTAL",
    role: "BA & TECHNICAL ENGINEER",
    desc: "Analyzed existing operations and ensured alignment with BRD as part of a large-scale system reengineering initiative. Designed UI/UX prototypes and performed API validation.",
    categories: ["SYSTEM ANALYSIS"],
    tags: ["SDLC", "Figma", "Postman", "Katalon Studio"],
    image: "/synergcg_network.png"
  },
  {
    title: "GOTIG (PLN EPI) ATTENDANCE",
    role: "HYBRID SYSTEM ANALYST",
    desc: "Led the overall direction of a new reengineered internal application for meeting attendance and daily activity reporting. Acted as the main communicator between stakeholders and developers.",
    categories: ["SYSTEM ANALYSIS"],
    tags: ["System Design", "QA Testing", "Figma"],
    image: "/gotig_ui.png"
  },
  {
    title: "SCADA AUTOMATION MONITORING",
    role: "INITIATOR & LEAD ENGINEER",
    desc: "Developed an automation-based alerting workflow integrating SCADA event data via Kafka with a WhatsApp blasting notification system to proactively inform stakeholders of outages.",
    categories: ["AUTOMATION", "BACKEND & DATA"],
    tags: ["n8n", "Kafka", "Automation", "Real-Time Systems"],
    image: "/scada_system.png"
  }
];

const tabs = ["ALL", "SYSTEM ANALYSIS", "BACKEND & DATA", "AUTOMATION"];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const filteredProjects = activeTab === "ALL"
    ? projects
    : projects.filter(project => project.categories.includes(activeTab));

  return (
    <section id="projects" className="projects-section">
      <div className="container">

        <div className="animate-fade-in">
          <span className="mono-label projects-marker">ENGINEERING ARTIFACTS // 03</span>
          <h2 className="projects-title">KEY WORK SYSTEMS</h2>
        </div>

        {/* Blog Filter Chip (Taxonomy control) */}
        <div className="filter-chips-container">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              className={`filter-chip ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="project-product-card animate-fade-in">
              {/* <div className="project-img-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(project.title) + "&size=512&background=eeece7&color=17171c"; }}
                />
              </div> */}
              <span className="project-role">{project.role}</span>
              <h3 className="project-card-title">{project.title}</h3>
              <hr className="project-divider" />
              <p className="project-desc">{project.desc}</p>

              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>

              {/* <div className="project-link-container">
                <span className="project-link">
                  EXPLORE SYSTEM SPEC <FaArrowRight className="project-arrow" />
                </span>
              </div> */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
