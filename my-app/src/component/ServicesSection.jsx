import React from "react";
import "./ServicesSection.css";
import care1 from "../assets/service-1.jpg";
import care2 from "../assets/service-2.jpg";
import care3 from "../assets/service-3.jpg";

const services = [
  {
    title: "Veterinaria",
    image: care1,
    description:
      "Lorem ipsum available but the majority have suffered alteration in some.",
  },
  {
    title: "Vaccination Care",
    image: care2,
    description:
      "Lorem ipsum available but the majority have suffered alteration in some.",
  },
  {
    title: "Dental Care",
    image: care3,
    description:
      "Lorem ipsum available but the majority have suffered alteration in some.",
  },
];

const ServicesSection = () => {
  return (
    <section className="services" id="service">
      <div className="services__header">
        <h2>
          Title <span>Here</span>
        </h2>
        <p>
          Lorem ipsum available but the majority have suffered alteration in
          some form.
        </p>
      </div>

      <div className="services__grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <div className="service-card__image">
              <img src={service.image} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
