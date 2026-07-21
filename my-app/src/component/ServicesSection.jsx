import React from "react";
import "./ServicesSection.css";
import care1 from "../assets/service-1.jpg";
import care2 from "../assets/service-2.jpg";
import care3 from "../assets/service-3.jpg";

const services = [
  {
    id: 1,
    title: "General Veterinary Care",
    tag: "Essential",
    icon: "bi-prescription2",
    image: care1,
    description:
      "Comprehensive physical exams, internal medicine, nutritional counseling, and specialized surgical care for all small animals.",
  },
  {
    id: 2,
    title: "Vaccination & Immunity",
    tag: "Preventive",
    icon: "bi-shield-plus",
    image: care2,
    description:
      "Core & non-core vaccine immunization schedules, parasite protection, and digital health record tracking for puppies & kittens.",
  },
  {
    id: 3,
    title: "Pet Dental & Oral Health",
    tag: "Specialized",
    icon: "bi-heart-pulse-fill",
    image: care3,
    description:
      "Professional ultrasonic scaling, polishing, oral surgery, and dental X-rays to prevent periodontal diseases.",
  },
];

const ServicesSection = () => {
  return (
    <section className="services" id="service">
      <div className="services__container">
        <div className="services__header text-center">
          <span className="section-badge">
            <i className="bi bi-star-fill me-1"></i> WHAT WE OFFER
          </span>
          <h2>
            Specialized Care <span>For Every Need</span>
          </h2>
          <p>
            Our veterinary hospital delivers end-to-end clinical services, 
            combining warm personal attention with advanced modern medicine.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-card__image-container">
                <img src={service.image} alt={service.title} />
                <span className="service-card__tag">{service.tag}</span>
                <div className="service-card__icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>
              </div>
              <div className="service-card__body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="service-card__link">
                  Learn More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
