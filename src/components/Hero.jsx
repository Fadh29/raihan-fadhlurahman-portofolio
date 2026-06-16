import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaEnvelope, FaDownload, FaArrowRight } from 'react-icons/fa';
import './Hero.css';

const logsData = {
  DB_CONNECTOR: [
    { type: 'info', text: 'Connecting to postgres://raihan@db-instance:5432/core' },
    { type: 'success', text: 'Connection established successfully (4.2ms)' },
    { type: 'query', text: 'SELECT * FROM users WHERE status = \'active\' LIMIT 10;' },
    { type: 'info', text: 'Cached 10 rows in Redis cluster (0.32ms)' },
    { type: 'query', text: 'INSERT INTO system_logs (event, ts) VALUES (\'calibrate\', NOW());' },
    { type: 'success', text: 'Transaction committed (1.15ms)' },
    { type: 'query', text: 'UPDATE users SET last_login = NOW() WHERE id = 1024;' },
    { type: 'success', text: '1 row affected (0.76ms)' },
    { type: 'query', text: 'VACUUM ANALYZE users;' },
    { type: 'info', text: 'Index optimization started...' },
    { type: 'success', text: 'Optimization completed (28ms)' },
    { type: 'query', text: 'DELETE FROM sessions WHERE expired = true;' },
    { type: 'success', text: '42 stale sessions removed.' },
    { type: 'info', text: 'Replication lag: 12ms' },
    { type: 'success', text: 'Replica synchronization completed.' },
  ],

  KAFKA_STREAM: [
    { type: 'info', text: 'Subscribing to topic \'meter-ingestion-v1\'...' },
    { type: 'success', text: 'Partition assignment: [0, 1, 2] active.' },
    { type: 'stream', text: 'INCOMING [Offset 412592] DCU_ID=00412 payload_size=1.2KB' },
    { type: 'info', text: 'Running validation pipeline...' },
    { type: 'success', text: 'Payload processed & verified. 0 anomalies detected.' },
    { type: 'stream', text: 'INCOMING [Offset 412593] DCU_ID=00413 payload_size=0.8KB' },
    { type: 'stream', text: 'INCOMING [Offset 412594] DCU_ID=00414 payload_size=1.1KB' },
    { type: 'stream', text: 'INCOMING [Offset 412595] DCU_ID=00415 payload_size=2.4KB' },
    { type: 'success', text: 'Batch committed to storage layer.' },
    { type: 'info', text: 'Consumer lag: 0 messages' },
    { type: 'stream', text: 'OUTGOING [Offset 412596] Publishing to analytics-engine' },
    { type: 'success', text: 'Message acknowledged by all replicas.' },
    { type: 'info', text: 'Compression ratio: 64%' },
    { type: 'stream', text: 'INCOMING [Offset 412597] DCU_ID=00416 payload_size=1.7KB' },
    { type: 'success', text: 'Checkpoint written successfully.' },
  ],

  SERVICE_LOGS: [
    { type: 'info', text: 'Starting engine v3.4 calibration processes...' },
    { type: 'success', text: 'Golang server running on localhost:8080' },
    { type: 'info', text: 'API documentation mounted at /api/v1/swagger' },
    { type: 'info', text: 'GET /api/v1/health - 200 OK (0.12ms)' },
    { type: 'info', text: 'Cron task [DB_BACKUP] launched...' },
    { type: 'success', text: 'Database dump saved to S3 bucket (Status: 200 OK)' },
    { type: 'info', text: 'POST /api/v1/login - 200 OK (2.1ms)' },
    { type: 'info', text: 'GET /api/v1/users?page=1 - 200 OK (1.3ms)' },
    { type: 'success', text: 'JWT token issued successfully.' },
    { type: 'info', text: 'Background worker [NOTIFICATION_ENGINE] started.' },
    { type: 'success', text: '12 WhatsApp messages dispatched.' },
    { type: 'info', text: 'Memory usage: 312MB / 1024MB' },
    { type: 'info', text: 'CPU utilization: 14%' },
    { type: 'success', text: 'Health check passed for all services.' },
    { type: 'info', text: 'Scheduler executed task [MONTHLY_BILLING]' },
    { type: 'success', text: '4,582 customer bills generated.' },
  ],

  SYSTEM_MONITOR: [
    { type: 'info', text: 'Monitoring agent initialized...' },
    { type: 'success', text: 'Node Exporter connected.' },
    { type: 'info', text: 'CPU Usage: 18%' },
    { type: 'info', text: 'Memory Usage: 46%' },
    { type: 'info', text: 'Disk Usage: 61%' },
    { type: 'success', text: 'All thresholds within safe range.' },
    { type: 'info', text: 'Network RX: 12.4MB/s' },
    { type: 'info', text: 'Network TX: 8.1MB/s' },
    { type: 'success', text: 'Prometheus scrape completed.' },
    { type: 'info', text: 'Grafana dashboard refreshed.' },
  ],

  WHATSAPP_BLAST: [
    { type: 'info', text: 'Loading customer recipient list...' },
    { type: 'success', text: '4,582 recipients loaded.' },
    { type: 'info', text: 'Preparing monthly billing template...' },
    { type: 'success', text: 'Template validated successfully.' },
    { type: 'stream', text: 'SENDING -> 6281234567890' },
    { type: 'success', text: 'DELIVERED -> 6281234567890' },
    { type: 'stream', text: 'SENDING -> 6281234567891' },
    { type: 'success', text: 'READ -> 6281234567891' },
    { type: 'stream', text: 'SENDING -> 6281234567892' },
    { type: 'success', text: 'DELIVERED -> 6281234567892' },
    { type: 'info', text: 'Current throughput: 75 msg/sec' },
    { type: 'success', text: 'Blast progress: 84% completed.' },
    { type: 'success', text: 'Total success: 4,551 | Failed: 31' },
  ]
};


const Hero = () => {
  const [activeTab, setActiveTab] = useState('DB_CONNECTOR');
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    setLogs([]);
    const data = logsData[activeTab];
    let i = 0;
    const interval = setInterval(() => {
      if (i < data.length) {
        const logItem = data[i];
        setLogs(prev => [...prev, logItem]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <>
      <section id="hero" className="hero-section">
        <div className="container animate-fade-in">

          <div className="hero-text-container">
            <span className="mono-label hero-mono-label">SYSTEM ARCHITECT // RF-2026</span>
            <h1 className="hero-title">Raihan Fadhlurahman</h1>
            <p className="hero-lead">High-Performance System Architectures & Backend Engine</p>

            <p className="hero-description">
              A results-driven Software Engineer with hands-on experience in backend development, system operations, and large-scale enterprise system environments. Passionate about building reliable, scalable, and efficient systems while continuously driving operational excellence.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                EXPLORE WORK SYSTEMS <FaArrowRight className="hero-icon-arrow" />
              </a>
              {/* <a href={`${import.meta.env.BASE_URL}CV_ATS_Raihan_Fadhlurahman.pdf`} download="CV_ATS_Raihan_Fadhlurahman.pdf" className="btn-secondary">
                DOWNLOAD ATS CV
              </a> */}
            </div>

            <div className="hero-socials">
              <a
                href="https://linkedin.com/in/raihanfadhlurahman/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:fadhlurahmanraihan29@gmail.com"
                className="hero-social-link"
                title="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="hero-media-composition">
            {/* Agent Console Mockup */}
            <div className="agent-console-card">
              <div className="console-header">
                <div className="console-dots">
                  <span className="console-dot red"></span>
                  <span className="console-dot yellow"></span>
                  <span className="console-dot green"></span>
                </div>
                <div className="console-tabs">
                  <button
                    className={`console-tab ${activeTab === 'DB_CONNECTOR' ? 'active' : ''}`}
                    onClick={() => setActiveTab('DB_CONNECTOR')}
                  >
                    DB_CONN
                  </button>
                  <button
                    className={`console-tab ${activeTab === 'KAFKA_STREAM' ? 'active' : ''}`}
                    onClick={() => setActiveTab('KAFKA_STREAM')}
                  >
                    KAFKA_STREAM
                  </button>
                  <button
                    className={`console-tab ${activeTab === 'SERVICE_LOGS' ? 'active' : ''}`}
                    onClick={() => setActiveTab('SERVICE_LOGS')}
                  >
                    SYS_LOGS
                  </button>
                </div>
              </div>

              <div className="console-body">
                {logs.map((log, idx) => (
                  <div key={idx} className="console-log-row">
                    <span className="log-info">[rf-system] </span>
                    <span className={`log-${log.type}`}>
                      {log.type === 'query' ? '=> ' : log.type === 'success' ? '✔ ' : 'i '}
                    </span>
                    <span className="log-text">{log.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Card */}
            <div className="hero-photo-card">
              <div className="photo-card-img-container">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Raihan Fadhlurahman"
                  className="photo-card-img"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://ui-avatars.com/api/?name=Raihan+Fadhlurahman&size=512&background=eeece7&color=17171c"; }}
                />
              </div>
              <div className="photo-card-footer">
                <span className="photo-card-label">SYS_OPS // BGR_ID</span>
                <div className="photo-status">
                  <span className="status-indicator"></span>
                  <span>ONLINE</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Trust Logo Strip */}
      <div className="trust-logo-strip">
        <div className="container">
          <span className="mono-label trust-title">ENGAGED WITH ENTERPRISE NETWORKS & AGENCIES</span>
          <div className="trust-logos-row">
            <span>PT PLN ICON PLUS</span>
            <span>DISKOMINFO KAB BOGOR</span>
            <span>PT SUMMIT CITRA DIGITAL</span>
            <span>GOLONGAN KARYA</span>
            <span>PT NUSA TEKNO GLOBAL</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
