import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          {/* About */}
          <div className="col-md-3 mb-4">
            <h2>About</h2>
            <ul className="list-unstyled">
              <li><Link to="/about">History</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/brand-guidelines">Brand Guidelines</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4">
            <h2>Services</h2>
            <ul className="list-unstyled">
              <li><Link to="/order">How to Order</Link></li>
              <li><Link to="/products">Our Product</Link></li>
              <li><Link to="/order-status">Order Status</Link></li>
              <li><Link to="/offers">Promo</Link></li>
              <li><Link to="/payment">Payment Method</Link></li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="col-md-6 text-md-end">
            <h1 className="text-white fw-bold">Title Here</h1>

            <p className="text-white fs-5">
              Lorem Ipsum available, but the majority.
            </p>

            <div className="newsletter d-flex justify-content-md-end">
              <input
                type="email"
                placeholder="Your Email"
                className="form-control w-50"
              />

              <button className="btn btn-warning ms-2">
                <i className="bi bi-send-fill"></i>
              </button>
            </div>

            <div className="social-icons mt-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <i className="bi bi-twitter"></i>
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;