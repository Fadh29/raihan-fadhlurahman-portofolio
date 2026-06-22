import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import pptxgen from 'pptxgenjs';

/**
 * Exports the offscreen A4 template to a clean 2-page PDF document.
 */
export const exportToPDF = async () => {
  const page1 = document.getElementById('print-page-1');
  const page2 = document.getElementById('print-page-2');
  if (!page1 || !page2) return;

  const pdf = new jsPDF('p', 'mm', 'a4');
  const imgWidth = 210;
  const imgHeight = 297;

  // Render Page 1
  const canvas1 = await html2canvas(page1, {
    scale: 2,
    useCORS: true,
    backgroundColor: '#17171c',
    logging: false
  });
  const imgData1 = canvas1.toDataURL('image/png');
  pdf.addImage(imgData1, 'PNG', 0, 0, imgWidth, imgHeight);

  pdf.addPage();

  // Render Page 2
  const canvas2 = await html2canvas(page2, {
    scale: 2,
    useCORS: true,
    backgroundColor: '#17171c',
    logging: false
  });
  const imgData2 = canvas2.toDataURL('image/png');
  pdf.addImage(imgData2, 'PNG', 0, 0, imgWidth, imgHeight);

  pdf.save('CV_Raihan_Fadhlurahman.pdf');
};

/**
 * Exports the offscreen A4 template container as a single high-res PNG image.
 */
export const exportToImage = async () => {
  const container = document.getElementById('print-template-container');
  if (!container) return;

  const canvas = await html2canvas(container, {
    scale: 2,
    useCORS: true,
    backgroundColor: '#17171c',
    logging: false
  });
  
  const link = document.createElement('a');
  link.download = 'Portfolio_Raihan_Fadhlurahman.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
};

/**
 * Programmatically builds a gorgeous dark-themed PPTX presentation using pptxgenjs.
 */
export const exportToPPT = (experiences, projects, skills) => {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';

  const darkBg = { color: '17171C' };

  // --- SLIDE 1: Intro ---
  const slide1 = pptx.addSlide();
  slide1.background = darkBg;
  
  // Outer high-tech borders
  slide1.addShape(pptx.ShapeType.rect, {
    x: 0.5, y: 0.5, w: 12.3, h: 6.5,
    line: { color: 'FF7759', width: 2 }
  });

  slide1.addText('SYSTEM ARCHITECT // RF-2026', {
    x: 1.0, y: 1.5, w: 11.3, h: 0.5,
    fontFace: 'Courier New', fontSize: 12, color: '93939F', bold: true
  });

  slide1.addText('Raihan Fadhlurahman', {
    x: 1.0, y: 2.2, w: 11.3, h: 1.2,
    fontFace: 'Arial', fontSize: 54, color: 'FFFFFF', bold: true
  });

  slide1.addText('High-Performance System Architectures & Backend Engine', {
    x: 1.0, y: 3.5, w: 11.3, h: 0.5,
    fontFace: 'Arial', fontSize: 18, color: 'FF7759', italic: true
  });

  slide1.addText(
    'A results-driven Software Engineer with hands-on experience in backend development, system operations, and large-scale enterprise system environments.',
    {
      x: 1.0, y: 4.3, w: 11.3, h: 1.0,
      fontFace: 'Arial', fontSize: 14, color: 'EEECE7'
    }
  );

  slide1.addText('STATUS: ONLINE // fadhlurahmanraihan29@gmail.com', {
    x: 1.0, y: 5.8, w: 11.3, h: 0.4,
    fontFace: 'Courier New', fontSize: 11, color: '93939F'
  });

  // --- SLIDE 2: Who I Am & Education ---
  const slide2 = pptx.addSlide();
  slide2.background = darkBg;
  
  slide2.addText('// CALIBRATION INFO // 01', { x: 0.6, y: 0.4, w: 12.0, h: 0.3, fontFace: 'Courier New', fontSize: 11, color: '93939F' });
  slide2.addText('WHO I AM', { x: 0.6, y: 0.8, w: 12.0, h: 0.6, fontFace: 'Arial', fontSize: 28, color: 'FFFFFF', bold: true });
  
  slide2.addText(
    'I am a results-driven Software Engineer with hands-on experience in backend development, system operations, and large-scale enterprise system environments. I have a proven track record in supporting mission-critical infrastructure, designing scalable system architectures, and translating complex business requirements into robust technical solutions.\n\n' +
    'Experienced in working within cross-functional teams across engineering, operations, and business stakeholders. Strong exposure to real-time data systems, distributed architecture (Kafka), and database management.',
    { x: 0.6, y: 1.6, w: 5.8, h: 4.8, fontFace: 'Arial', fontSize: 12, color: 'EEECE7', lineSpacing: 20 }
  );

  slide2.addText('EDUCATION & CREDENTIALS', { x: 6.8, y: 1.6, w: 5.8, h: 0.4, fontFace: 'Arial', fontSize: 16, color: 'FF7759', bold: true });
  
  slide2.addText(
    'Politeknik Negeri Jakarta (Bachelor\'s Degree)\n' +
    'Aug 2020 - Aug 2024 | GPA: 3.57 / 4.00\n' +
    '• Created E-Ticketing application for Bogor Regency. Features include priority scaling and recursive forums.',
    { x: 6.8, y: 2.2, w: 5.8, h: 1.8, fontFace: 'Arial', fontSize: 11, color: 'EEECE7', lineSpacing: 16 }
  );

  slide2.addText(
    'Universitas Indonesia (CCIT) (Associate\'s Degree)\n' +
    'GPA: 3.56 / 4.00\n' +
    '• Certified in Software Engineering in Java Technologies and Professional IT fundamentals.',
    { x: 6.8, y: 4.2, w: 5.8, h: 1.8, fontFace: 'Arial', fontSize: 11, color: 'EEECE7', lineSpacing: 16 }
  );

  // --- SLIDE 3: Experience ---
  const slide3 = pptx.addSlide();
  slide3.background = darkBg;
  
  slide3.addText('// DEVELOPMENT LOGS // 02', { x: 0.6, y: 0.4, w: 12.0, h: 0.3, fontFace: 'Courier New', fontSize: 11, color: '93939F' });
  slide3.addText('WORK EXPERIENCE', { x: 0.6, y: 0.8, w: 12.0, h: 0.6, fontFace: 'Arial', fontSize: 28, color: 'FFFFFF', bold: true });

  const expsToShow = experiences.slice(0, 3);
  expsToShow.forEach((exp, idx) => {
    const xPos = 0.6 + idx * 4.0;
    
    slide3.addShape(pptx.ShapeType.rect, {
      x: xPos, y: 1.6, w: 3.8, h: 4.8,
      fill: { color: '212126' },
      line: { color: '3A3A42', width: 1 }
    });

    slide3.addText(exp.role, {
      x: xPos + 0.2, y: 1.8, w: 3.4, h: 0.5,
      fontFace: 'Arial', fontSize: 12, color: 'FF7759', bold: true
    });

    slide3.addText(exp.company, {
      x: xPos + 0.2, y: 2.3, w: 3.4, h: 0.3,
      fontFace: 'Courier New', fontSize: 11, color: 'FFFFFF', bold: true
    });

    slide3.addText(exp.duration, {
      x: xPos + 0.2, y: 2.6, w: 3.4, h: 0.3,
      fontFace: 'Courier New', fontSize: 9, color: '93939F'
    });

    const descText = exp.desc.map(d => `• ${d}`).join('\n');
    slide3.addText(descText, {
      x: xPos + 0.2, y: 3.0, w: 3.4, h: 3.2,
      fontFace: 'Arial', fontSize: 10, color: 'EEECE7', lineSpacing: 14
    });
  });

  // --- SLIDE 4: Projects ---
  const slide4 = pptx.addSlide();
  slide4.background = darkBg;
  
  slide4.addText('// ENGINEERING ARTIFACTS // 03', { x: 0.6, y: 0.4, w: 12.0, h: 0.3, fontFace: 'Courier New', fontSize: 11, color: '93939F' });
  slide4.addText('KEY WORK SYSTEMS', { x: 0.6, y: 0.8, w: 12.0, h: 0.6, fontFace: 'Arial', fontSize: 28, color: 'FFFFFF', bold: true });

  projects.forEach((proj, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const xPos = 0.6 + col * 6.0;
    const yPos = 1.6 + row * 2.5;

    slide4.addShape(pptx.ShapeType.rect, {
      x: xPos, y: yPos, w: 5.8, h: 2.3,
      fill: { color: '212126' },
      line: { color: '3A3A42', width: 1 }
    });

    slide4.addText(proj.title, {
      x: xPos + 0.2, y: yPos + 0.15, w: 5.4, h: 0.4,
      fontFace: 'Arial', fontSize: 12, color: 'FFFFFF', bold: true
    });

    slide4.addText(`ROLE: ${proj.role}`, {
      x: xPos + 0.2, y: yPos + 0.55, w: 5.4, h: 0.3,
      fontFace: 'Courier New', fontSize: 9, color: 'FF7759', bold: true
    });

    slide4.addText(proj.desc, {
      x: xPos + 0.2, y: yPos + 0.85, w: 5.4, h: 0.8,
      fontFace: 'Arial', fontSize: 10, color: 'EEECE7'
    });

    slide4.addText(proj.tags.join(' | '), {
      x: xPos + 0.2, y: yPos + 1.85, w: 5.4, h: 0.3,
      fontFace: 'Courier New', fontSize: 8, color: '93939F'
    });
  });

  // --- SLIDE 5: Skills ---
  const slide5 = pptx.addSlide();
  slide5.background = darkBg;
  
  slide5.addText('// ENGINE SPECS // 04', { x: 0.6, y: 0.4, w: 12.0, h: 0.3, fontFace: 'Courier New', fontSize: 11, color: '93939F' });
  slide5.addText('TECHNICAL SPECIFICATIONS', { x: 0.6, y: 0.8, w: 12.0, h: 0.6, fontFace: 'Arial', fontSize: 28, color: 'FFFFFF', bold: true });

  skills.forEach((cat, idx) => {
    const col = idx % 3;
    const row = Math.floor(idx / 3);
    const xPos = 0.6 + col * 4.0;
    const yPos = 1.6 + row * 2.4;

    slide5.addShape(pptx.ShapeType.rect, {
      x: xPos, y: yPos, w: 3.8, h: 2.2,
      fill: { color: '212126' },
      line: { color: '3A3A42', width: 1 }
    });

    slide5.addText(`// ${cat.code}`, {
      x: xPos + 0.2, y: yPos + 0.15, w: 3.4, h: 0.3,
      fontFace: 'Courier New', fontSize: 9, color: '93939F'
    });

    slide5.addText(cat.title, {
      x: xPos + 0.2, y: yPos + 0.45, w: 3.4, h: 0.5,
      fontFace: 'Arial', fontSize: 11, color: 'FF7759', bold: true
    });

    slide5.addText(cat.skills.join(', '), {
      x: xPos + 0.2, y: yPos + 0.95, w: 3.4, h: 1.1,
      fontFace: 'Arial', fontSize: 10, color: 'FFFFFF'
    });
  });

  pptx.writeFile({ fileName: 'Portfolio_Raihan_Fadhlurahman.pptx' });
};

/**
 * Builds a beautifully styled HTML structure that Word parses as a styled document layout.
 */
export const exportToWord = (experiences, projects, skills) => {
  const content = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' 
          xmlns:w='urn:schemas-microsoft-com:office:word' 
          xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <title>Portfolio - Raihan Fadhlurahman</title>
      <!--[if gte mso 9]>
      <xml>
        <w:WordDocument>
          <w:View>Print</w:View>
          <w:Zoom>100</w:Zoom>
          <w:DoNotOptimizeForBrowser/>
        </w:WordDocument>
      </xml>
      <![endif]-->
      <style>
        body {
          font-family: 'Arial', sans-serif;
          color: #17171c;
          line-height: 1.5;
          margin: 1in;
        }
        h1 {
          font-size: 26pt;
          margin-bottom: 2px;
          color: #17171c;
          font-weight: bold;
        }
        .eyebrow {
          font-family: 'Courier New', monospace;
          font-size: 10pt;
          color: #ff7759;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 15px;
          font-weight: bold;
        }
        .contact-info {
          font-size: 10pt;
          color: #616161;
          margin-bottom: 25px;
          border-bottom: 2px solid #eeece7;
          padding-bottom: 10px;
        }
        .section-title {
          font-size: 14pt;
          font-weight: bold;
          color: #17171c;
          border-bottom: 1px solid #17171c;
          padding-bottom: 3px;
          margin-top: 25px;
          margin-bottom: 12px;
          text-transform: uppercase;
          font-family: 'Courier New', monospace;
        }
        .about-text {
          font-size: 11pt;
          color: #333333;
          margin-bottom: 15px;
        }
        .card {
          margin-bottom: 15px;
        }
        .card-header {
          font-weight: bold;
          font-size: 11pt;
          color: #17171c;
        }
        .card-subheader {
          font-family: 'Courier New', monospace;
          font-size: 9.5pt;
          color: #ff7759;
          font-weight: bold;
        }
        .card-duration {
          font-size: 9.5pt;
          color: #75758a;
          margin-left: 10px;
        }
        .bullet-list {
          margin-top: 5px;
          margin-bottom: 10px;
          padding-left: 20px;
        }
        .bullet-item {
          font-size: 10.5pt;
          color: #444444;
          margin-bottom: 3px;
        }
        .skills-grid {
          margin-top: 10px;
        }
        .skill-cat {
          font-weight: bold;
          font-size: 10.5pt;
          color: #ff7759;
          font-family: 'Courier New', monospace;
        }
        .skill-items {
          font-size: 10pt;
          color: #333333;
          margin-bottom: 8px;
        }
      </style>
    </head>
    <body>
      <div>
        <span class="eyebrow">SYSTEM ARCHITECT // RF-2026</span>
        <h1>Raihan Fadhlurahman</h1>
        <div class="contact-info">
          fadhlurahmanraihan29@gmail.com | linkedin.com/in/raihanfadhlurahman | High-Performance Backend Architectures
        </div>

        <div class="section-title">// 01. CALIBRATION INFO (ABOUT)</div>
        <div class="about-text">
          I am a results-driven Software Engineer with hands-on experience in backend development, system operations, and large-scale enterprise system environments. I have a proven track record in supporting mission-critical infrastructure, designing scalable system architectures, and translating complex business requirements into robust technical solutions.
        </div>
        <div class="about-text">
          Experienced in working within cross-functional teams across engineering, operations, and business stakeholders. Strong exposure to real-time data systems, distributed architecture (Kafka), and database management.
        </div>

        <div class="section-title">// 02. EDUCATION</div>
        <div class="card">
          <div class="card-header">Politeknik Negeri Jakarta</div>
          <span class="card-subheader">Bachelor's Degree in Information Technology</span>
          <span class="card-duration">(Aug 2020 - Aug 2024) | GPA: 3.57 / 4.00</span>
          <div class="bullet-item" style="margin-top: 4px;">Created E-Ticketing application for the Communication and Informatics Agency of Bogor Regency. Features include priority scaling and recursive forums.</div>
        </div>
        <div class="card" style="margin-top: 10px;">
          <div class="card-header">Universitas Indonesia (CCIT)</div>
          <span class="card-subheader">Associate's Degree in Software Engineering</span>
          <span class="card-duration">GPA: 3.56 / 4.00</span>
          <div class="bullet-item" style="margin-top: 4px;">Certified in Software Engineering in Java Technologies and Professional Information Technology fundamentals.</div>
        </div>

        <div class="section-title">// 03. DEVELOPMENT LOGS (EXPERIENCE)</div>
        ${experiences.map(exp => `
          <div class="card">
            <div class="card-header">${exp.role} - <span style="font-weight: normal; color: #555;">${exp.company}</span></div>
            <div class="card-subheader">${exp.duration}</div>
            <ul class="bullet-list">
              ${exp.desc.map(d => `<li class="bullet-item">${d}</li>`).join('')}
            </ul>
          </div>
        `).join('')}

        <div class="section-title">// 04. KEY WORK SYSTEMS (PROJECTS)</div>
        ${projects.map(proj => `
          <div class="card">
            <div class="card-header">${proj.title}</div>
            <div class="card-subheader">ROLE: ${proj.role}</div>
            <div class="bullet-item" style="margin-top: 4px; color: #444;">${proj.desc}</div>
            <div class="bullet-item" style="font-size: 9pt; color: #75758a;">Tags: ${proj.tags.join(', ')}</div>
          </div>
        `).join('')}

        <div class="section-title">// 05. TECHNICAL SPECIFICATIONS (SKILLS)</div>
        <table class="skills-grid" width="100%" cellpadding="4" cellspacing="0">
          ${skills.map(cat => `
            <tr>
              <td width="30%" valign="top" class="skill-cat">// ${cat.code}: ${cat.title}</td>
              <td width="70%" valign="top" class="skill-items">${cat.skills.join(', ')}</td>
            </tr>
          `).join('')}
        </table>
      </div>
    </body>
    </html>
  `;

  const blob = new Blob(['\ufeff' + content], { type: 'application/msword' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Portfolio_Raihan_Fadhlurahman.doc';
  link.click();
  URL.revokeObjectURL(url);
};
