import React, { useState, useEffect } from 'react';

const statsData = [
  {
    id: 1,
    icon: "bi-heart-pulse-fill",
    target: 3479,
    suffix: "+",
    label: "Happy Pet Clients",
    desc: "Dogs, cats & exotic animals served"
  },
  {
    id: 2,
    icon: "fa-solid fa-stethoscope",
    target: 45382,
    suffix: "+",
    label: "Care & Surgical Hours",
    desc: "Dedicated clinical excellence"
  },
  {
    id: 3,
    icon: "fa-solid fa-syringe",
    target: 54762,
    suffix: "+",
    label: "Vaccinations Delivered",
    desc: "Complete preventive protection"
  }
];

function Statistics() {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounts(
        statsData.map((item) =>
          Math.min(Math.floor((item.target / steps) * currentStep), item.target)
        )
      );

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="stats-section">
      <div className="stats-overlay"></div>
      <div className="container position-relative z-1">
        <div className="row g-4 text-center">
          {statsData.map((stat, index) => (
            <div className="col-lg-4 col-md-6" key={stat.id}>
              <div className="stat-card">
                <div className="icon-box">
                  <i className={stat.icon}></i>
                </div>
                <div className="counter">
                  +{counts[index].toLocaleString()}
                </div>
                <div className="counter-text">{stat.label}</div>
                <p className="stat-desc">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics;
