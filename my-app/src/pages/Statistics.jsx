import React from 'react'

function Statistics() {
  return (
    <div>
      <section class="stats-section">
    <div class="container">

        <div class="row text-center">

            <div class="col-md-4 mb-4">
                <div class="icon-box">
                    <i class="bi bi-heart-pulse"></i>
                </div>

                <div class="counter">+3479</div>
                <div class="counter-text">Happy Clients</div>
            </div>

            <div class="col-md-4 mb-4">
                <div class="icon-box">
                  <i class="fa-solid fa-stethoscope"></i>
                </div>

                <div class="counter">+45382</div>
                <div class="counter-text">Departments</div>
            </div>

            <div class="col-md-4 mb-4">
                <div class="icon-box">
                   <i class="fa-solid fa-syringe"></i>
                </div>

                <div class="counter">+54762</div>
                <div class="counter-text">Vaccinations</div>
            </div>

        </div>

    </div>
</section>
    </div>
  )
}

export default Statistics
