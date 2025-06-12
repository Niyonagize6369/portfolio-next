import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import footerData from "../data/footer.json";
import "../styles/Footer.css";

const Footer = () => {
  const { footer } = footerData;
  
  const getIconComponent = (iconName:any) => {
    switch (iconName) {
      case 'github':
        return <FaGithub />;
      case 'linkedin':
        return <FaLinkedin />;
      case 'twitter':
        return <FaTwitter />;
      default:
        return null;
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          {footer.socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              {getIconComponent(social.icon)}
            </a>
          ))}
        </div>
        
        <div className="footer-links">
          {footer.links.map((link, index) => (
            <a key={index} href={link.url}>{link.name}</a>
          ))}
        </div>
        
        <div className="footer-copyright">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;