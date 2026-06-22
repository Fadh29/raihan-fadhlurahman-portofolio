import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import pptxgen from 'pptxgenjs';

/**
 * Programmatically builds a beautiful, crisp vector PDF of the resume.
 * This saves the PDF directly to the user's computer with copyable/selectable text.
 */
export const exportToPDF = (experiences, projects, skills) => {
  const doc = new jsPDF('p', 'mm', 'a4');
  
  doc.setProperties({
    title: 'Resume - Raihan Fadhlurahman',
    author: 'Raihan Fadhlurahman'
  });

  const primaryColor = [23, 23, 28];    // #17171c
  const accentColor = [255, 119, 89];   // #ff7759
  const mutedColor = [117, 117, 138];   // #75758a
  const softBgColor = [245, 245, 247];  // #f5f5f7
  const footerLink = 'https://fadh29.github.io/raihan-fadhlurahman-portofolio/';

  const drawHeader = () => {
    // Top border accent line
    doc.setDrawColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.setLineWidth(1.5);
    doc.line(15, 12, 195, 12);

    // Mono Label
    doc.setFont('courier', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(mutedColor[0], mutedColor[1], mutedColor[2]);
    doc.text('SYSTEM ARCHITECT // RF-2026', 15, 19);

    // Name
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text('Raihan Fadhlurahman', 15, 28);

    // Subtitle
    doc.setFont('helvetica', 'oblique');
    doc.setFontSize(11);
    doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.text('High-Performance System Architectures & Backend Engine', 15, 33);

    // Contact Information (Right Align)
    doc.setFont('courier', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text('fadhlurahmanraihan29@gmail.com', 195, 19, { align: 'right' });
    doc.text('linkedin.com/in/raihanfadhlurahman', 195, 23.5, { align: 'right' });
    doc.text('github.com/Fadh29', 195, 28, { align: 'right' });

    // Header divider line
    doc.setDrawColor(220, 220, 225);
    doc.setLineWidth(0.3);
    doc.line(15, 37, 195, 37);
  };

  const drawFooter = (pageNum) => {
    // Footer line
    doc.setDrawColor(220, 220, 225);
    doc.setLineWidth(0.3);
    doc.line(15, 282, 195, 282);

    doc.setFont('courier', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(mutedColor[0], mutedColor[1], mutedColor[2]);
    doc.text(`PORTFOLIO: ${footerLink}`, 15, 287);
    doc.text(`Page ${pageNum} / 2`, 195, 287, { align: 'right' });
  };

  // ==================== PAGE 1 ====================
  drawHeader();

  // About Section (Left Column)
  doc.setFont('courier', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(mutedColor[0], mutedColor[1], mutedColor[2]);
  doc.text('// CALIBRATION INFO // 01', 15, 46);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('WHO I AM', 15, 51);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(60, 60, 60);
  
  const aboutText1 = "I am a results-driven Software Engineer with hands-on experience in backend development, system operations, and large-scale enterprise system environments. I have a proven track record in supporting mission-critical infrastructure, designing scalable system architectures, and translating complex business requirements into robust technical solutions.";
  const aboutText2 = "Experienced in working within cross-functional teams across engineering, operations, and business stakeholders. Strong exposure to real-time data systems, distributed architecture (Kafka), and database management.";
  
  const splitText1 = doc.splitTextToSize(aboutText1, 85);
  const splitText2 = doc.splitTextToSize(aboutText2, 85);
  
  let currentAboutY = 57;
  doc.text(splitText1, 15, currentAboutY);
  currentAboutY += (splitText1.length * 4.5) + 4;
  doc.text(splitText2, 15, currentAboutY);

  // Education Section (Right Column)
  doc.setFont('courier', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(mutedColor[0], mutedColor[1], mutedColor[2]);
  doc.text('// ACADEMIC SPECIFICATIONS', 110, 46);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('EDUCATION', 110, 51);

  // PNJ Card
  doc.setFillColor(softBgColor[0], softBgColor[1], softBgColor[2]);
  doc.roundedRect(110, 56, 85, 28, 1, 1, 'F');
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('Politeknik Negeri Jakarta', 113, 61);
  
  doc.setFont('courier', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
  doc.text('PNJ-01', 190, 61, { align: 'right' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(mutedColor[0], mutedColor[1], mutedColor[2]);
  doc.text("Bachelor's Degree in IT // GPA: 3.57", 113, 65);
  
  doc.setTextColor(60, 60, 60);
  const eduDesc1 = "Created E-Ticketing application for Bogor Regency with priority scaling & recursive forums (2020 - 2024).";
  doc.text(doc.splitTextToSize(eduDesc1, 79), 113, 70);

  // UI CCIT Card
  doc.setFillColor(softBgColor[0], softBgColor[1], softBgColor[2]);
  doc.roundedRect(110, 88, 85, 24, 1, 1, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('Universitas Indonesia (CCIT)', 113, 93);
  
  doc.setFont('courier', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
  doc.text('UI-02', 190, 93, { align: 'right' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(mutedColor[0], mutedColor[1], mutedColor[2]);
  doc.text("Associate's Degree in Software Eng // GPA: 3.56", 113, 97);
  
  doc.setTextColor(60, 60, 60);
  const eduDesc2 = "Certified in Java Technologies & Professional IT fundamentals.";
  doc.text(doc.splitTextToSize(eduDesc2, 79), 113, 102);

  // Mid Section Divider
  doc.setDrawColor(220, 220, 225);
  doc.setLineWidth(0.3);
  doc.line(15, 120, 195, 120);

  // Skills Section (Bottom)
  doc.setFont('courier', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(mutedColor[0], mutedColor[1], mutedColor[2]);
  doc.text('// ENGINE SPECS // 04', 15, 128);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('TECHNICAL SPECIFICATIONS', 15, 133);

  // Skill Grid (3 columns, 2 rows)
  skills.forEach((cat, idx) => {
    const col = idx % 3;
    const row = Math.floor(idx / 3);
    const xPos = 15 + col * 62;
    const yPos = 138 + row * 45;

    doc.setFillColor(softBgColor[0], softBgColor[1], softBgColor[2]);
    doc.roundedRect(xPos, yPos, 56, 38, 1, 1, 'F');

    doc.setFont('courier', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(mutedColor[0], mutedColor[1], mutedColor[2]);
    doc.text(`// ${cat.code}`, xPos + 4, yPos + 6);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.text(doc.splitTextToSize(cat.title, 48), xPos + 4, yPos + 12);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    let skillListText = cat.skills.join(', ');
    doc.text(doc.splitTextToSize(skillListText, 48), xPos + 4, yPos + 22);
  });

  drawFooter(1);

  // ==================== PAGE 2 ====================
  doc.addPage();
  
  // Page 2 header line
  doc.setDrawColor(accentColor[0], accentColor[1], accentColor[2]);
  doc.setLineWidth(1.0);
  doc.line(15, 12, 195, 12);
  
  doc.setFont('courier', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(mutedColor[0], mutedColor[1], mutedColor[2]);
  doc.text('Raihan Fadhlurahman // RESUME EXPORT', 15, 17);

  // Work Experience
  doc.setFont('courier', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(mutedColor[0], mutedColor[1], mutedColor[2]);
  doc.text('// DEVELOPMENT LOGS // 02', 15, 26);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('WORK EXPERIENCE', 15, 31);

  // 2-column grid of experience (height 42mm, grid layout)
  experiences.forEach((exp, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const xPos = 15 + col * 92;
    const yPos = 36 + row * 46;

    doc.setFillColor(softBgColor[0], softBgColor[1], softBgColor[2]);
    doc.roundedRect(xPos, yPos, 88, 42, 1, 1, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.text(doc.splitTextToSize(exp.role, 80), xPos + 4, yPos + 6);

    doc.setFont('courier', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(exp.company, xPos + 4, yPos + 12);
    
    doc.setFont('courier', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(mutedColor[0], mutedColor[1], mutedColor[2]);
    doc.text(exp.duration, xPos + 84, yPos + 12, { align: 'right' });

    // Bullets list
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(60, 60, 60);
    
    let bulletY = yPos + 17;
    exp.desc.forEach(bullet => {
      doc.text('▪', xPos + 4, bulletY);
      const splitBullet = doc.splitTextToSize(bullet, 76);
      doc.text(splitBullet, xPos + 8, bulletY);
      bulletY += (splitBullet.length * 3.5) + 0.5;
    });
  });

  // Projects Section
  doc.setFont('courier', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(mutedColor[0], mutedColor[1], mutedColor[2]);
  doc.text('// ENGINEERING ARTIFACTS // 03', 15, 182);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('KEY WORK SYSTEMS', 15, 187);

  // 2-column grid of projects (height 37mm)
  projects.forEach((proj, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const xPos = 15 + col * 92;
    const yPos = 192 + row * 41;

    doc.setFillColor(softBgColor[0], softBgColor[1], softBgColor[2]);
    doc.roundedRect(xPos, yPos, 88, 37, 1, 1, 'F');

    doc.setFont('courier', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.text(proj.role, xPos + 4, yPos + 6);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(proj.title, xPos + 4, yPos + 11);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(60, 60, 60);
    const splitDesc = doc.splitTextToSize(proj.desc, 80);
    doc.text(splitDesc, xPos + 4, yPos + 16);

    doc.setFont('courier', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(mutedColor[0], mutedColor[1], mutedColor[2]);
    doc.text(proj.tags.join(' | '), xPos + 4, yPos + 32);
  });

  drawFooter(2);

  doc.save('CV_Raihan_Fadhlurahman.pdf');
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
 * Includes the live portfolio link in every slide.
 */
export const exportToPPT = (experiences, projects, skills) => {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';

  const darkBg = { color: '17171C' };
  const footerLink = 'https://fadh29.github.io/raihan-fadhlurahman-portofolio/';

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

  slide1.addText(`STATUS: ONLINE // fadhlurahmanraihan29@gmail.com // ${footerLink}`, {
    x: 1.0, y: 5.8, w: 11.3, h: 0.4,
    fontFace: 'Courier New', fontSize: 10, color: '93939F'
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

  slide2.addText(footerLink, { x: 0.6, y: 7.0, w: 12.0, h: 0.3, fontFace: 'Courier New', fontSize: 9, color: '93939F' });

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

  slide3.addText(footerLink, { x: 0.6, y: 7.0, w: 12.0, h: 0.3, fontFace: 'Courier New', fontSize: 9, color: '93939F' });

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

  slide4.addText(footerLink, { x: 0.6, y: 7.0, w: 12.0, h: 0.3, fontFace: 'Courier New', fontSize: 9, color: '93939F' });

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

  slide5.addText(footerLink, { x: 0.6, y: 7.0, w: 12.0, h: 0.3, fontFace: 'Courier New', fontSize: 9, color: '93939F' });

  pptx.writeFile({ fileName: 'Portfolio_Raihan_Fadhlurahman.pptx' });
};
