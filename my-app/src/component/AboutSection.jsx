import React, { useState } from "react";
import "./AboutSection.css";
import vetWithDog from "../assets/vet-with-dog.jpg";

const AboutSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__text">
          <span className="section-badge">
            <i className="bi bi-patch-check-fill me-1"></i> ABOUT VETCARE HOSPITAL
          </span>
          
          <h2>Dedicated Veterinarians Loving & Caring For Every Pet</h2>
          
          <p className="about__desc">
            We combine state-of-the-art veterinary medicine with true compassion. 
            Our modern facility is equipped with full surgical suites, digital diagnostic imaging, 
            and a team that treats your pets like family.
          </p>

          <div className="about__highlights">
            <div className="about__highlight-item">
              <div className="about__highlight-icon"><i className="bi bi-check-circle-fill"></i></div>
              <div>
                <h4>Advanced Diagnostic Lab</h4>
                <p>Fast in-house bloodwork and digital radiograph results.</p>
              </div>
            </div>

            <div className="about__highlight-item">
              <div className="about__highlight-icon"><i className="bi bi-check-circle-fill"></i></div>
              <div>
                <h4>Comprehensive Wellness Plans</h4>
                <p>Preventive care custom-tailored for puppies, adults, and seniors.</p>
              </div>
            </div>
          </div>

          <div className="about__actions">
            <a href="#service" className="btn btn--yellow">
              Discover Our Services <i className="bi bi-arrow-right ms-2"></i>
            </a>
          </div>
        </div>

        <div className="about__media">
          <div className="about__media-frame">
            <img src={vetWithDog} alt="Veterinarian examining a healthy dog" />
            <button 
              className="about__play" 
              onClick={() => setShowVideo(true)}
              aria-label="Play video introduction"
            >
              <i className="bi bi-play-fill"></i>
            </button>
          </div>

          <div className="about__experience-badge">
            <span className="about__experience-num">15+</span>
            <span className="about__experience-text">Years of Trusted Care</span>
          </div>
        </div>
      </div>

      {/* Video Modal Overlay */}
      {showVideo && (
        <div className="about__video-modal" onClick={() => setShowVideo(false)}>
          <div className="about__video-content" onClick={(e) => e.stopPropagation()}>
            <button className="about__video-close" onClick={() => setShowVideo(false)}>×</button>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="VetCare Intro Video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
