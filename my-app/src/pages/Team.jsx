import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: "Dr. Jennifer Mullen",
    role: "Chief Veterinary Surgeon",
    credentials: "DVM, DACVS (12+ Yrs Exp)",
    img: "/image/d.png",
    bio: "Specializing in soft tissue and orthopedic surgical care for dogs & cats."
  },
  {
    id: 2,
    name: "Sheeren Collins",
    role: "Hospital Administrator",
    credentials: "B.S. Healthcare Mgt",
    img: "/image/Screenshot 2026-06-13 140557.png",
    bio: "Ensuring flawless patient experience, scheduling, and compassionate service."
  },
  {
    id: 3,
    name: "Dr. Michael Carter",
    role: "Veterinary Cardiologist",
    credentials: "DVM, DACVIM (Cardiology)",
    img: "/image/Screenshot 2026-06-13 140553.png",
    bio: "Expert in ultrasound diagnostics, cardiac care, and preventive health screens."
  }
];

function Team() {
  return (
    <section className="dr-section py-5" id="team">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-badge">
            <i className="bi bi-person-heart me-1"></i> OUR EXPERTS
          </span>
          <h2 className="fw-bold mt-2">Meet Our Care Team</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Board-certified veterinarians and compassionate animal lovers dedicated 
            to providing top-tier medical care for your pets.
          </p>
        </div>

        <div className="row g-4">
          {teamMembers.map((member) => (
            <div className="col-lg-4 col-md-6" key={member.id}>
              <div className="team-card">
                <div className="team-card__img-container">
                  <img
                    src={member.img}
                    className="img-fluid team-img"
                    alt={member.name}
                  />
                  <div className="team-card__social-overlay">
                    <a href="#team" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                    <a href="#team" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                    <a href="#team" aria-label="Email"><i className="bi bi-envelope-fill"></i></a>
                  </div>
                </div>

                <div className="team-card__body">
                  <span className="team-card__role">{member.role}</span>
                  <h3 className="team-card__name">{member.name}</h3>
                  <small className="team-card__credentials">{member.credentials}</small>
                  <p className="team-card__bio">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
