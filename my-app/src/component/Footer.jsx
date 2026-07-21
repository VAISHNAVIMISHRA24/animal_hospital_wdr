import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="footer pt-5 pb-4">
      <div className="container">
        <div className="row g-4 mb-5">
          {/* Brand Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="footer__logo-icon">🐾</span>
              <h3 className="text-white fw-bold m-0 font-heading fs-4">
                VETCARE <small className="fs-6 text-warning d-block font-sans fw-semibold">Animal Hospital</small>
              </h3>
            </div>
            <p className="text-light-muted pe-lg-4">
              Providing compassionate, high-quality veterinary medicine, surgery, 
              and wellness care for your beloved family pets.
            </p>
            <div className="footer__contact-info">
              <div className="d-flex align-items-center gap-2 mb-2 text-light-muted">
                <i className="bi bi-geo-alt-fill text-warning"></i> 124 Pet Care Way, Suite 100
              </div>
              <div className="d-flex align-items-center gap-2 mb-2 text-light-muted">
                <i className="bi bi-telephone-fill text-warning"></i> +1 (555) 234-5678
              </div>
              <div className="d-flex align-items-center gap-2 text-light-muted">
                <i className="bi bi-envelope-fill text-warning"></i> info@vetcarehospital.com
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-6 mb-4">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#service">Services</a></li>
              <li><a href="#pets">Adoption & Care</a></li>
              <li><a href="#team">Our Team</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-2 col-md-6 col-6 mb-4">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#service">Veterinary Surgery</a></li>
              <li><a href="#service">Vaccination Care</a></li>
              <li><a href="#service">Dental Hygiene</a></li>
              <li><a href="#service">Emergency Care</a></li>
              <li><a href="#service">Pet Wellness Plans</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h4 className="footer-title">Subscribe To Newsletter</h4>
            <p className="text-light-muted fs-6">
              Get seasonal pet care tips, vaccine reminders, and special package discounts.
            </p>

            {!subscribed ? (
              <form className="newsletter" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-warning">
                  <i className="bi bi-send-fill"></i>
                </button>
              </form>
            ) : (
              <div className="alert alert-success mt-3 py-2 px-3 fs-6 rounded-3">
                <i className="bi bi-check-circle-fill me-1"></i> Thank you for subscribing!
              </div>
            )}

            <div className="social-icons mt-4">
              <span className="text-white me-3 fs-6 font-weight-bold">Follow Us:</span>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="footer-bottom pt-4 border-top border-secondary border-opacity-25 text-center text-md-between d-md-flex justify-content-between align-items-center">
          <p className="m-0 text-light-muted fs-6">
            © {new Date().getFullYear()} VetCare Animal Hospital. All rights reserved.
          </p>
          <div className="footer-bottom-links mt-2 mt-md-0">
            <a href="#home" className="text-light-muted me-3 fs-6">Privacy Policy</a>
            <a href="#home" className="text-light-muted me-3 fs-6">Terms of Service</a>
            <a href="#home" className="text-light-muted fs-6">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;