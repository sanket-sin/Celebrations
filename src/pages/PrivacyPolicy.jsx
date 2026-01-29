import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <div className="privacy-header">
        <div className="container">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
          <h1>Privacy Policy</h1>
          <p className="privacy-intro">
            At Celebrations, we are committed to protecting your privacy and ensuring the security of your personal information.
          </p>
        </div>
      </div>

      <section className="privacy-section">
        <div className="container">
          <div className="privacy-content-simple">
            <h2>Information We Collect</h2>
            <p>
              At Celebrations, we respect your privacy. We may collect information that you provide directly to us when you:
            </p>
            <ul>
              <li>Contact us via phone, email, or social media</li>
              <li>Visit our store or website</li>
              <li>Subscribe to our newsletter or promotional communications</li>
              <li>Make a purchase or inquiry</li>
              <li>Participate in surveys or promotional activities</li>
              <li>Create an account or profile on our website</li>
            </ul>
            <p>
              The types of information we may collect include your name, email address, phone number, postal address, payment information, and any other information you choose to provide.
            </p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Communicate with you about products, services, and promotional offers</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Personalize and improve your experience</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information only:
            </p>
            <ul>
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With service providers who assist us in operating our business (such as payment processors, shipping companies, and marketing platforms)</li>
              <li>In connection with a business transfer or merger</li>
              <li>To prevent fraud or abuse</li>
            </ul>
            <p>
              All third-party service providers are required to maintain the confidentiality of your information and are prohibited from using it for any purpose other than providing services to us.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul>
              <li>Encryption of sensitive data</li>
              <li>Secure servers and databases</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
              <li>Employee training on data protection</li>
            </ul>
            <p>
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
            </p>
            <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.</p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify inaccurate or incomplete data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>

            <h2>Data Retention</h2>
            <p>
              We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
            <p>
              When we no longer need your personal information, we will securely delete or anonymize it in accordance with our data retention policies.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="contact-info-box">
              <p>
                <strong>Email:</strong> <a href="mailto:singhsonsretail@gmail.com">singhsonsretail@gmail.com</a>
              </p>
              <p>
                <strong>Phone:</strong> <a href="tel:+919988880595">099888 80595</a>
              </p>
              <p>
                <strong>Address:</strong> SCO-104, Phase 7, Sector 61, Sahibzada Ajit Singh Nagar, Punjab 160062
              </p>
            </div>
            <p className="privacy-update">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
