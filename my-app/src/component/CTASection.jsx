import React, { useState } from "react";
import "./CTASection.css";
import babyWithDog from "../assets/baby-with-dog.jpg";

const CTASection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="cta" id="contact">
      <div className="cta__container">
        <div className="cta__card">
          <div className="cta__media">
            <img src={babyWithDog} alt="Child playing with healthy dog" />
            <button 
              className="cta__play" 
              onClick={() => setShowVideo(true)}
              aria-label="Watch care video"
            >
              <i className="bi bi-play-fill"></i>
            </button>
          </div>

          <div className="cta__text">
            <span className="cta__badge">
              <i className="bi bi-telephone-inbound-fill me-1"></i> 24/7 EMERGENCY HOTLINE
            </span>

            <h2>Ready To Give Your Pet The Best Health & Care?</h2>
            
            <p>
              Whether it’s a routine wellness checkup, dental cleaning, or urgent emergency care, 
              our expert medical team is here to support you and your furry friend every step of the way.
            </p>

            <div className="cta__hotline">
              <div className="cta__hotline-icon">
                <i className="bi bi-headset"></i>
              </div>
              <div>
                <span className="cta__hotline-label">Direct Appointment Line</span>
                <a href="tel:+15552345678" className="cta__hotline-number">+1 (555) 234-5678</a>
              </div>
            </div>

            <div className="cta__actions">
              <a href="tel:+15552345678" className="btn btn--solid-yellow">
                <i className="bi bi-telephone-fill me-2"></i> Call Us Now
              </a>
              <a href="#home" className="btn btn--outline-white">
                Book Online <i className="bi bi-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Overlay */}
      {showVideo && (
        <div className="cta__video-modal" onClick={() => setShowVideo(false)}>
          <div className="cta__video-content" onClick={(e) => e.stopPropagation()}>
            <button className="cta__video-close" onClick={() => setShowVideo(false)}>×</button>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="VetCare Emergency Care Video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CTASection;
