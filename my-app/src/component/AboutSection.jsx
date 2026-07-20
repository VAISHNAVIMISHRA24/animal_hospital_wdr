import React from "react";
import "./AboutSection.css";
import vetWithDog from "../assets/vet-with-dog.jpg";

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__text">
          <h2>As a veterinarian and lover of animals</h2>
          <p>
            Lorem ipsum available but the majority have suffered alteration
            in some form, by humour randomised words.
          </p>
          <button className="btn btn--yellow">Our Service</button>
        </div>

        <div className="about__media">
          <img src={vetWithDog} alt="Veterinarian examining a dog" />
          <button className="about__play" aria-label="Play video">
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
