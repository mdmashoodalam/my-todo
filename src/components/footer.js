import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa'; // Import icons
import './Footer.css'; // Import the CSS file for styles

const Footer = () => {
  return (
    <footer style={{
      position: 'absolute',
      bottom: '0',
      width: '100%',
      textAlign: 'center',
      backgroundColor: '#5a646e',
      backdropFilter: 'blur(2px)',
      border: '2px solid #ddd',
      borderRadius: '0.5rem',
      cursor: 'pointer', // Change cursor to pointer on hover
      color: 'white',
      padding: '10px 0',
      zIndex: 5, // Ensures it's above the particles background
    }}>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/md-mashood-alam-b23914280" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        {/* Twitter */}
        <a href="https://x.com/MDMASHOODALAM" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        {/* GitHub */}
        <a href="https://github.com/mdmashoodalam" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        {/* Instagram */}
        <a href="https://www.instagram.com/mashood_ibn_masroor/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <div className="company-name">
        <h2>© 2024 md mashood alam</h2>
      </div>
    </footer>
  );
};

export default Footer;
