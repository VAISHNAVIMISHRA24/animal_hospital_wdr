import React from "react";
import "./Hero.css";
import dogHero from "../assets/dog-hero.jpg";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__container">
        <div className="hero__text">
          <h1>
            First I wanted to be a <span>veterinarian</span>
          </h1>
          <p>
            Lorem ipsum available but the majority have suffered alteration
            in some form, by injected humour randomised words.
          </p>
          <div className="hero__actions">
            <button className="btn btn--solid">Contact Us</button>
            <button className="btn btn--outline">Our Service</button>
          </div>
        </div>

        <div className="hero__image">
          <img src={dogHero} alt="French bulldog sitting" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
