import React from 'react'

function PetSection() {
  return (
    
       <section class="pet-section">
    <div class="container">
        <div class="text-center mb-5">
            <h1 class="section-title">Title Here</h1>
            <p class="section-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus lacinia odio vitae vestibulum vestibulum.
            </p>
        </div>

        <div class="row text-center">

            <div class="col-md-4 mb-4">
                <div class="pet-card">
                    <img src="/image/Screenshot 2026-06-13 141840.png"
                         class="img-fluid" alt="dog"/>

                    <h3 class="price mt-3">
                        <del>$50</del> $30
                    </h3>

                    <button class="buy-btn">
                        Buy Now
                    </button>
                </div>
            </div>

            <div class="col-md-4 mb-4">
                <div class="pet-card">
                    <img src="/image/Screenshot 2026-06-13 141852.png"
                         class="img-fluid" alt="dog"/>

                    <h3 class="price mt-3">
                        <del>$40</del> $25
                    </h3>

                    <button class="buy-btn">
                        Buy Now
                    </button>
                </div>
            </div>

            <div class="col-md-4 mb-4">
                <div class="pet-card">
                    <img src="/image/Screenshot 2026-06-13 141915.png"
                         class="img-fluid" alt="dog"/>

                    <h3 class="price mt-3">
                        <del>$45</del> $20
                    </h3>

                    <button class="buy-btn">
                        Buy Now
                    </button>
                </div>
            </div>

        </div>

    </div>
    </section>

  )
}

export default PetSection
