import React from "react";
import "./Hero.css";
import dogHero from "../assets/dog-hero.jpg";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__background-glow"></div>
      
      <div className="hero__container">
        <div className="hero__text">
          <div className="hero__badge">
            <span className="hero__badge-pulse"></span>
            <span>⭐ #1 Trusted Animal Hospital in Town</span>
          </div>

          <h1>
            First-Class Care For Your <span>Beloved Pets</span>
          </h1>

          <p>
            Dedicated veterinarians providing compassionate treatment, advanced diagnostics, 
            vaccinations, and 24/7 emergency care for your furry family members.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--solid">
              <i className="bi bi-calendar-check me-2"></i> Book Appointment
            </a>
            <a href="#service" className="btn btn--outline">
              <i className="bi bi-heart-pulse me-2"></i> Our Services
            </a>
          </div>

          <div className="hero__features">
            <div className="hero__feature-item">
              <i className="bi bi-shield-check"></i>
              <span>Certified Vets</span>
            </div>
            <div className="hero__feature-item">
              <i className="bi bi-clock-history"></i>
              <span>24/7 Emergency Care</span>
            </div>
            <div className="hero__feature-item">
              <i className="bi bi-award"></i>
              <span>15+ Yrs Experience</span>
            </div>
          </div>
        </div>

        <div className="hero__image-wrapper">
          <div className="hero__image-bg"></div>
          <div className="hero__image">
            <img src={dogHero} alt="French bulldog sitting happily" />
          </div>

          {/* Floating Info Badge */}
          <div className="hero__floating-card animate-float">
            <div className="hero__floating-icon">🏥</div>
            <div>
              <div className="hero__floating-title">100% Compassionate</div>
              <div className="hero__floating-subtitle">9,800+ Happy Patients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
