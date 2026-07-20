import React from "react";
import "./CTASection.css";
import babyWithDog from "../assets/baby-with-dog.jpg";

const CTASection = () => {
  return (
    <section className="cta" id="contact">
      <div className="cta__container">
        <div className="cta__media">
          <img src={babyWithDog} alt="Child with a dog" />
          <button className="cta__play" aria-label="Play video">
            ▶
          </button>
        </div>

        <div className="cta__text">
          <h2>As a veterinarian and lover of animals</h2>
          <p>
            Lorem ipsum available but the majoty suffered alteration in some
            form, by humour randomised words.
          </p>
          <button className="btn btn--yellow">Our Service</button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
