import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "Essential Nutrition & Diet Tips for Growing Pets",
    category: "Pet Health Tips",
    date: "February 09, 2026",
    img: "/image/dr1.png",
    excerpt: "Learn how balanced proteins, essential vitamins, and proper portion control set the foundation for a long, healthy life."
  },
  {
    id: 2,
    title: "Recognizing Early Signs of Dental Disease in Dogs",
    category: "Dental Care",
    date: "February 10, 2026",
    img: "/image/Screenshot 2026-06-13 140622.png",
    excerpt: "Bad breath can be more than just unpleasant. Discover how routine dental cleanings protect your pet's heart & kidneys."
  },
  {
    id: 3,
    title: "Why Annual Vaccinations Protect Your Family",
    category: "Preventive Care",
    date: "February 11, 2026",
    img: "/image/Screenshot 2026-06-13 140626.png",
    excerpt: "Stay up-to-date with rabies, distemper, and Lyme disease protection designed specifically for active outdoor pets."
  }
];

function PostSection() {
  return (
    <section className="post-section" id="posts">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-badge">
            <i className="bi bi-newspaper me-1"></i> LATEST ARTICLES
          </span>
          <h2 className="post-title fw-bold mt-2">Pet Health & Care Insights</h2>
          <p className="post-desc">
            Stay informed with expert advice, wellness guides, and veterinary tips 
            curated by our clinical medical staff.
          </p>
        </div>

        <div className="row g-4">
          {blogPosts.map((post) => (
            <div className="col-lg-4 col-md-6" key={post.id}>
              <div className="card shadow-sm border-0 post-card h-100">
                <div className="post-card__img-container">
                  <img
                    src={post.img}
                    className="card-img-top"
                    alt={post.title}
                  />
                  <span className="post-card__category">{post.category}</span>
                </div>

                <div className="card-body d-flex flex-column">
                  <div className="post-date mb-2">
                    <i className="bi bi-calendar3 me-1"></i> {post.date}
                  </div>

                  <h3 className="fw-bold fs-5 post-card__heading mb-3">
                    {post.title}
                  </h3>

                  <p className="text-muted fs-6 mb-4 flex-grow-1">
                    {post.excerpt}
                  </p>

                  <a href="#posts" className="read-more">
                    Read Article <i className="bi bi-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PostSection;
