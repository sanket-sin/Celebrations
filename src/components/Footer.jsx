import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../App.css';

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>CELEBRATIONS</h3>
            <p>A Multi Brand Electronics Showroom</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>
                  Services
                </a>
              </li>
              <li>
                <a href="#brands" onClick={(e) => handleNavClick(e, 'brands')}>
                  Brands
                </a>
              </li>
              <li>
                <a href="#why-choose-us" onClick={(e) => handleNavClick(e, 'why-choose-us')}>
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
                  Contact
                </a>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img src="/images/telephone.png" alt="Phone" style={{ width: '20px', height: '20px' }} />
              <a href="tel:09988880595" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>099888 80595</a>
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img src="/images/gmail.png" alt="Email" style={{ width: '20px', height: '20px' }} />
              <a href="mailto:singhsonsretail@gmail.com" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>singhsonsretail@gmail.com</a>
            </p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="footer-social-links">
              <a href="https://instagram.com/celebrationsmohali" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <img src="/images/Instagram-Logo.wine 1.svg" alt="Instagram" style={{ width: '20px', height: '20px' }} />
                <span>Instagram</span>
              </a>
              <a href="https://www.facebook.com/celebrationssinghsonsretail" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <img src="/images/facebook-logo.svg" alt="Facebook" style={{ width: '20px', height: '20px' }} />
                <span>Facebook</span>
              </a>
              <a href="https://wa.me/919988880595" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <img src="/images/whatsapp.png" alt="WhatsApp" style={{ width: '20px', height: '20px' }} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Celebrations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
