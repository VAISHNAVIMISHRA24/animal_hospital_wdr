import React, { useState } from 'react';

const petPackages = [
  {
    id: 1,
    title: "Junior Pet Wellness Care",
    category: "Vaccines & Exams",
    rating: 5,
    reviews: 48,
    img: "/image/Screenshot 2026-06-13 141840.png",
    oldPrice: "$50",
    price: "$30",
    badge: "Save 40%",
    features: ["Core Vaccinations", "Full Physical Exam", "Deworming Treatment"]
  },
  {
    id: 2,
    title: "Puppy & Kitten Starter Kit",
    category: "Complete Starter",
    rating: 5,
    reviews: 62,
    img: "/image/Screenshot 2026-06-13 141852.png",
    oldPrice: "$40",
    price: "$25",
    badge: "Popular",
    features: ["Microchip Registration", "Initial Health Screen", "Nutrition Guide"]
  },
  {
    id: 3,
    title: "Senior Pet Health Screening",
    category: "Specialized Diagnostics",
    rating: 5,
    reviews: 35,
    img: "/image/Screenshot 2026-06-13 141915.png",
    oldPrice: "$45",
    price: "$20",
    badge: "Best Value",
    features: ["Blood & Urine Analysis", "Dental Exam", "Joint Mobility Screen"]
  }
];

function PetSection() {
  const [selectedPkg, setSelectedPkg] = useState(null);
  const [bookedSuccess, setBookedSuccess] = useState(false);

  const handleBook = (pkg) => {
    setSelectedPkg(pkg);
    setBookedSuccess(false);
  };

  return (
    <section className="pet-section" id="pets">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-badge section-badge--light">
            <i className="bi bi-heart-pulse-fill me-1"></i> CARE & PACKAGES
          </span>
          <h2 className="section-title text-dark fw-bold mt-2">
            Affordable Health & Care Bundles
          </h2>
          <p className="section-text text-dark opacity-75">
            Transparent pricing for comprehensive pet wellness packages, 
            preventive screenings, and adoption healthcare essentials.
          </p>
        </div>

        <div className="row g-4">
          {petPackages.map((pkg) => (
            <div className="col-lg-4 col-md-6" key={pkg.id}>
              <div className="pet-card">
                <div className="pet-card__img-wrapper">
                  <img src={pkg.img} className="img-fluid" alt={pkg.title} />
                  <span className="pet-card__badge">{pkg.badge}</span>
                  <span className="pet-card__category">{pkg.category}</span>
                </div>

                <div className="pet-card__body">
                  <div className="pet-card__rating">
                    <span className="stars">★★★★★</span>
                    <span className="reviews">({pkg.reviews} reviews)</span>
                  </div>

                  <h3 className="pet-card__title">{pkg.title}</h3>

                  <ul className="pet-card__features">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx}>
                        <i className="bi bi-check2-circle me-2 text-success"></i>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="pet-card__footer">
                    <div className="price">
                      <del>{pkg.oldPrice}</del>
                      <span className="current-price">{pkg.price}</span>
                    </div>

                    <button 
                      className="buy-btn"
                      onClick={() => handleBook(pkg)}
                    >
                      Book Care <i className="bi bi-cart-plus ms-1"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {selectedPkg && (
        <div className="pet-modal-backdrop" onClick={() => setSelectedPkg(null)}>
          <div className="pet-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="pet-modal-close" onClick={() => setSelectedPkg(null)}>×</button>
            {!bookedSuccess ? (
              <>
                <h4 className="fw-bold mb-2">Book Package: {selectedPkg.title}</h4>
                <p className="text-muted fs-6 mb-4">
                  Final Package Price: <strong className="text-teal fs-5">{selectedPkg.price}</strong> (Original: <del>{selectedPkg.oldPrice}</del>)
                </p>
                <form onSubmit={(e) => { e.preventDefault(); setBookedSuccess(true); }}>
                  <div className="mb-3">
                    <label className="form-label text-dark font-weight-bold">Owner Name</label>
                    <input type="text" className="form-control" placeholder="John Doe" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-dark font-weight-bold">Pet Name & Breed</label>
                    <input type="text" className="form-control" placeholder="Buddy (Golden Retriever)" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-dark font-weight-bold">Preferred Date</label>
                    <input type="date" className="form-control" required />
                  </div>
                  <button type="submit" className="btn btn-warning w-100 fw-bold py-2">
                    Confirm Appointment
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="fs-1 text-success mb-2">🎉</div>
                <h4 className="fw-bold text-dark mb-2">Appointment Scheduled!</h4>
                <p className="text-muted">
                  We have reserved your slot for <strong>{selectedPkg.title}</strong>. 
                  Our team will call you shortly to confirm.
                </p>
                <button className="btn btn-dark mt-3" onClick={() => setSelectedPkg(null)}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default PetSection;
