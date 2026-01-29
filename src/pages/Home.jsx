import React, { useState, useEffect } from 'react';
import '../App.css';

function Home() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    const cardWrappers = document.querySelectorAll('.feature-card-wrapper');
    cardWrappers.forEach((card, index) => {
      card.id = `feature-card-${index}`;
      card.style.setProperty('--delay', `${index * 0.2}s`);
      observer.observe(card);
    });

    const whyChooseCards = document.querySelectorAll('.why-choose-card');
    const whyChooseObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.2 }
    );
    
    whyChooseCards.forEach((card, index) => {
      card.style.setProperty('--delay', `${index * 0.15}s`);
      whyChooseObserver.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-background-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="floating-shape shape-4"></div>
        </div>
        <div className="hero-content">
          <div className={`hero-text ${isVisible['hero'] ? 'fade-in-up' : ''}`}>
            <h1 className="hero-title">
              <span className="title-main">CELEBRATIONS</span>
              <span className="title-sub">A MULTI BRAND ELECTRONICS SHOWROOM</span>
            </h1>
            <p className="hero-tagline">Best Deals 🔥 | EMI Options 😍 | Top Leading Brands ⬆️</p>
            
            <div className="hero-features">
              <div className="feature-badge">
                <span className="feature-icon">✓</span>
                <span>Authentic Products</span>
              </div>
              <div className="feature-badge">
                <span className="feature-icon">✓</span>
                <span>Best Prices</span>
              </div>
              <div className="feature-badge">
                <span className="feature-icon">✓</span>
                <span>Expert Service</span>
              </div>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">4.8</span>
                <span className="stat-label">Rating</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">279+</span>
                <span className="stat-label">Reviews</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Brands</span>
              </div>
            </div>

            <div className="hero-cta-group">
              <button className="cta-button primary" onClick={() => scrollToSection('contact')}>
                Visit Us Today
              </button>
              <button className="cta-button secondary" onClick={() => scrollToSection('brands')}>
                Explore Brands
              </button>
            </div>
          </div>
          <div className={`hero-visual ${isVisible['hero'] ? 'fade-in' : ''}`}>
            <div className="floating-card">
              <div className="card-icon icon-1">📱</div>
              <div className="card-icon icon-2">📺</div>
              <div className="card-icon icon-3">❄️</div>
              <div className="card-icon icon-4">🔊</div>
              <div className="card-icon icon-5">💻</div>
              <div className="card-icon icon-6">⌚</div>
            </div>
            <div className="hero-pattern"></div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2 className={`section-title ${isVisible['services'] ? 'fade-in-up' : ''}`}>
            Our Services
          </h2>
          <p className="section-subtitle">We provide comprehensive solutions for all your electronics needs</p>
          
          <div className={`services-grid ${isVisible['services'] ? 'fade-in-up' : ''}`}>
            <div className="service-card">
              <div className="service-sparkles">
                <span className="sparkle sparkle-1">✨</span>
                <span className="sparkle sparkle-2">✨</span>
                <span className="sparkle sparkle-3">✨</span>
                <span className="sparkle sparkle-4">✨</span>
              </div>
              <div className="service-icon-wrapper">
                <div className="service-icon">🛒</div>
              </div>
              <h3>In-Store Shopping</h3>
              <p>Visit our showroom and explore our wide range of electronics with expert guidance from our team.</p>
            </div>

            <div className="service-card">
              <div className="service-sparkles">
                <span className="sparkle sparkle-1">✨</span>
                <span className="sparkle sparkle-2">✨</span>
                <span className="sparkle sparkle-3">✨</span>
                <span className="sparkle sparkle-4">✨</span>
              </div>
              <div className="service-icon-wrapper">
                <div className="service-icon">📦</div>
              </div>
              <h3>In-Store Pick-Up</h3>
              <p>Order online or over the phone and pick up your products at your convenience from our store.</p>
            </div>

            <div className="service-card">
              <div className="service-sparkles">
                <span className="sparkle sparkle-1">✨</span>
                <span className="sparkle sparkle-2">✨</span>
                <span className="sparkle sparkle-3">✨</span>
                <span className="sparkle sparkle-4">✨</span>
              </div>
              <div className="service-icon-wrapper">
                <div className="service-icon">🚚</div>
              </div>
              <h3>Home Delivery</h3>
              <p>Get your purchases delivered right to your doorstep with our reliable delivery service.</p>
            </div>

            <div className="service-card">
              <div className="service-sparkles">
                <span className="sparkle sparkle-1">✨</span>
                <span className="sparkle sparkle-2">✨</span>
                <span className="sparkle sparkle-3">✨</span>
                <span className="sparkle sparkle-4">✨</span>
              </div>
              <div className="service-icon-wrapper">
                <div className="service-icon">💳</div>
              </div>
              <h3>EMI Options</h3>
              <p>Flexible EMI payment plans available on all major products. Make your dream purchases affordable.</p>
            </div>

            <div className="service-card">
              <div className="service-sparkles">
                <span className="sparkle sparkle-1">✨</span>
                <span className="sparkle sparkle-2">✨</span>
                <span className="sparkle sparkle-3">✨</span>
                <span className="sparkle sparkle-4">✨</span>
              </div>
              <div className="service-icon-wrapper">
                <div className="service-icon">👨‍💼</div>
              </div>
              <h3>Expert Consultation</h3>
              <p>Get professional advice from our experienced team to find the perfect product for your needs.</p>
            </div>

            <div className="service-card">
              <div className="service-sparkles">
                <span className="sparkle sparkle-1">✨</span>
                <span className="sparkle sparkle-2">✨</span>
                <span className="sparkle sparkle-3">✨</span>
                <span className="sparkle sparkle-4">✨</span>
              </div>
              <div className="service-icon-wrapper">
                <div className="service-icon">🔧</div>
              </div>
              <h3>After-Sales Support</h3>
              <p>Comprehensive warranty and after-sales service support for all your purchases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leading Brands Section */}
      <section id="brands" className="brands-section">
        <div className="container">
          <h2 className={`section-title ${isVisible['brands'] ? 'fade-in-up' : ''}`}>
            Leading Brands We Deal With
          </h2>
          <p className="section-subtitle">Trusted brands, trusted quality</p>
          
          <div className="brands-columns-container">
            {(() => {
              const brands = [
                'LG', 'SAMSUNG', 'SONY PS5', 'DAIKIN', 'HAIER',
                'LLOYD', 'WHIRLPOOL', 'BPL', 'KELVINATOR', 'HAVELLS',
                'VOLTAS', 'HITACHI', 'GODREJ', 'JBL/HARMAN KARDON', 'EUREKA FORBES'
              ];
              const columns = 4;
              const brandsPerColumn = Math.ceil(brands.length / columns);
              
              // Distribute brands across columns
              const columnData = [];
              for (let i = 0; i < columns; i++) {
                columnData.push(brands.slice(i * brandsPerColumn, (i + 1) * brandsPerColumn));
              }
              
              return columnData.map((columnBrands, colIndex) => (
                <div key={colIndex} className={`brands-column ${colIndex % 2 === 0 ? 'scroll-down' : 'scroll-up'}`}>
                  <div className="brands-column-track">
                    {/* Original set */}
                    {columnBrands.map((brand, index) => (
                      <div key={index} className="brand-logo-item">
                        <div className="brand-logo-text">{brand}</div>
                      </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {columnBrands.map((brand, index) => (
                      <div key={`dup-${index}`} className="brand-logo-item">
                        <div className="brand-logo-text">{brand}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section id="features" className="features-cards-section">
        <div className="container">
          <div className={`feature-card-wrapper ${isVisible['feature-card-0'] ? 'card-slide-in' : ''}`} id="feature-card-0">
            <div className="feature-card-large">
              <div className="feature-card-content">
                <h2 className="feature-card-title">Premium Electronics Experience</h2>
                <p className="feature-card-description">
                  Experience the best in electronics shopping with our comprehensive range of top brands, 
                  expert consultation, and exceptional customer service. Transform your home with cutting-edge 
                  technology and unbeatable deals.
                </p>
                <div className="feature-metrics">
                  <div className="metric-item">
                    <span className="metric-check">✓</span>
                    <span className="metric-text">98% Customer Satisfaction</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-check">✓</span>
                    <span className="metric-text">15+ Premium Brands</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-check">✓</span>
                    <span className="metric-text">10+ Years of Excellence</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-check">✓</span>
                    <span className="metric-text">279+ Happy Customers</span>
                  </div>
                </div>
                <button className="feature-cta-button" onClick={() => scrollToSection('contact')}>
                  Visit Our Showroom
                </button>
              </div>
              <div className="feature-card-visual">
                <div className="visual-grid">
                  <div className="visual-item item-1">📱</div>
                  <div className="visual-item item-2">📺</div>
                  <div className="visual-item item-3">❄️</div>
                  <div className="visual-item item-4">🔊</div>
                  <div className="visual-item item-5">💻</div>
                  <div className="visual-item item-6">⌚</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`feature-card-wrapper ${isVisible['feature-card-1'] ? 'card-slide-in' : ''}`} id="feature-card-1">
            <div className="feature-card-large card-reverse">
              <div className="feature-card-visual">
                <div className="visual-grid">
                  <div className="visual-item item-1">🏠</div>
                  <div className="visual-item item-2">🚚</div>
                  <div className="visual-item item-3">💳</div>
                  <div className="visual-item item-4">👨‍💼</div>
                  <div className="visual-item item-5">⭐</div>
                  <div className="visual-item item-6">🎁</div>
                </div>
              </div>
              <div className="feature-card-content">
                <h2 className="feature-card-title">Complete Shopping Solutions</h2>
                <p className="feature-card-description">
                  From in-store shopping to home delivery, we provide end-to-end solutions for all your 
                  electronics needs. Enjoy flexible EMI options, expert guidance, and comprehensive 
                  after-sales support.
                </p>
                <div className="feature-metrics">
                  <div className="metric-item">
                    <span className="metric-check">✓</span>
                    <span className="metric-text">Free Home Delivery</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-check">✓</span>
                    <span className="metric-text">Flexible EMI Options</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-check">✓</span>
                    <span className="metric-text">Expert Consultation</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-check">✓</span>
                    <span className="metric-text">Warranty Support</span>
                  </div>
                </div>
                <button className="feature-cta-button" onClick={() => scrollToSection('contact')}>
                  Explore Services
                </button>
              </div>
            </div>
          </div>

          <div className={`feature-card-wrapper ${isVisible['feature-card-2'] ? 'card-slide-in' : ''}`} id="feature-card-2">
            <div className="feature-card-large">
              <div className="feature-card-content">
                <h2 className="feature-card-title">Best Deals & Offers</h2>
                <p className="feature-card-description">
                  Get the best prices on all electronics with our exclusive deals and offers. 
                  We provide competitive pricing on all major brands with flexible payment options 
                  and special discounts for bulk purchases.
                </p>
                <div className="feature-metrics">
                  <div className="metric-item">
                    <span className="metric-check">✓</span>
                    <span className="metric-text">Best Price Guarantee</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-check">✓</span>
                    <span className="metric-text">Exclusive Deals</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-check">✓</span>
                    <span className="metric-text">Seasonal Discounts</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-check">✓</span>
                    <span className="metric-text">Bulk Purchase Benefits</span>
                  </div>
                </div>
                <button className="feature-cta-button" onClick={() => scrollToSection('contact')}>
                  Check Offers
                </button>
              </div>
              <div className="feature-card-visual">
                <div className="visual-grid">
                  <div className="visual-item item-1">💰</div>
                  <div className="visual-item item-2">🎯</div>
                  <div className="visual-item item-3">🏆</div>
                  <div className="visual-item item-4">🎉</div>
                  <div className="visual-item item-5">💎</div>
                  <div className="visual-item item-6">⭐</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="why-choose-section">
        <div className="container">
          <h2 className={`section-title ${isVisible['why-choose-us'] ? 'fade-in-up' : ''}`}>
            Why Choose Us
          </h2>
          <p className="section-subtitle">Your trusted partner for premium electronics</p>
          
          <div className={`why-choose-grid ${isVisible['why-choose-us'] ? 'fade-in-up' : ''}`}>
            <div className="why-choose-card">
              <div className="why-choose-icon">⭐</div>
              <h3>98% Customer Recommendation</h3>
              <p>Highly rated by our satisfied customers for exceptional service and quality products.</p>
            </div>
            <div className="why-choose-card">
              <div className="why-choose-icon">✅</div>
              <h3>Authentic Products</h3>
              <p>100% genuine products from authorized dealers with full warranty coverage.</p>
            </div>
            <div className="why-choose-card">
              <div className="why-choose-icon">💰</div>
              <h3>Best Prices</h3>
              <p>Competitive pricing with exclusive deals and flexible payment options.</p>
            </div>
            <div className="why-choose-card">
              <div className="why-choose-icon">🎯</div>
              <h3>Excellent Service</h3>
              <p>Expert consultation, quick delivery, and comprehensive after-sales support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className={`section-title ${isVisible['contact'] ? 'fade-in-up' : ''}`}>
            Get In Touch
          </h2>
          <div className="contact-content">
            <div className={`contact-card ${isVisible['contact'] ? 'slide-in-left' : ''}`}>
              <div className="contact-items-grid">
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-details">
                    <h4>Phone</h4>
                    <a href="tel:+919988880595">099888 80595</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <a href="mailto:singhsonsretail@gmail.com">singhsonsretail@gmail.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <h4>Address</h4>
                    <p>SCO-104, Phase 7, Sector 61<br />Sahibzada Ajit Singh Nagar, Punjab 160062<br />Near Axis Bank</p>
                    <a href="https://maps.google.com/?q=SCO-104+Phase+7+Mohali" target="_blank" rel="noopener noreferrer" className="maps-link">
                      <span>🗺️</span>
                      <span>Google Maps</span>
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">🕐</div>
                  <div className="contact-details">
                    <h4>Store Hours</h4>
                    <p>Monday - Saturday: 10:00 AM - 8:00 PM<br />Sunday: 11:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
