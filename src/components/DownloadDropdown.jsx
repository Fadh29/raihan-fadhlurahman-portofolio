import React, { useState, useRef, useEffect } from 'react';
import { FaDownload, FaFilePdf, FaFilePowerpoint, FaFileImage, FaChevronDown } from 'react-icons/fa';
import { exportToPDF, exportToImage, exportToPPT } from '../utils/exportDocs';
import { experiences, projects, skillCategories } from './PrintTemplate';
import './DownloadDropdown.css';

const DownloadDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loadingText, setLoadingText] = useState('');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    if (loadingText) return;
    setIsOpen(!isOpen);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDownload = async (format) => {
    setIsOpen(false);
    
    try {
      if (format === 'pdf') {
        setLoadingText('Generating PDF...');
        exportToPDF(experiences, projects, skillCategories);
      } else if (format === 'image') {
        setLoadingText('Generating Image...');
        await exportToImage();
      } else if (format === 'ppt') {
        setLoadingText('Generating PPT...');
        exportToPPT(experiences, projects, skillCategories);
      }
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setLoadingText('');
    }
  };

  return (
    <div className="download-dropdown-container" ref={dropdownRef}>
      <button 
        className={`download-btn-main ${loadingText ? 'loading' : ''}`}
        onClick={toggleDropdown}
        disabled={!!loadingText}
      >
        <span className="btn-icon-container">
          <FaDownload className={`download-main-icon ${loadingText ? 'spin-icon' : ''}`} />
        </span>
        <span className="btn-text">
          {loadingText || 'DOWNLOAD PORTFOLIO'}
        </span>
        {!loadingText && <FaChevronDown className="chevron-icon" />}
      </button>

      {isOpen && (
        <ul className="download-menu-list animate-slide-up">
          <li className="download-menu-header">// SELECT FORMAT</li>
          
          <li onClick={() => handleDownload('pdf')} className="download-menu-item">
            <FaFilePdf className="format-icon pdf" />
            <div className="format-details">
              <span className="format-title">PDF Document</span>
              <span className="format-ext">.pdf</span>
            </div>
          </li>
          
          <li onClick={() => handleDownload('ppt')} className="download-menu-item">
            <FaFilePowerpoint className="format-icon ppt" />
            <div className="format-details">
              <span className="format-title">PPT Presentation</span>
              <span className="format-ext">.pptx</span>
            </div>
          </li>



          <li onClick={() => handleDownload('image')} className="download-menu-item">
            <FaFileImage className="format-icon image" />
            <div className="format-details">
              <span className="format-title">High-Res PNG</span>
              <span className="format-ext">.png</span>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DownloadDropdown;
