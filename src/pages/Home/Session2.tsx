import React from 'react'

export default function Session2() {
  return (
    <section className="py-5 bg-light">
  <div className="container">
    <div className="row align-items-center">
      <div
        className="col-md-12 col-lg-7 ml-auto order-lg-2 position-relative mb-5"
        data-aos="fade-up"
      >
        <figure className="img-absolute">
          <img src="images/food-1.jpg" alt="Image" className="img-fluid" />
        </figure>
        <img src="images/img_1.jpg" alt="Image" className="img-fluid rounded" />
      </div>
      <div className="col-md-12 col-lg-4 order-lg-1" data-aos="fade-up">
        <h2 className="heading">Welcome!</h2>
        <p className="mb-4">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <p>
          <a href="/detail" className="btn btn-primary text-white py-2 mr-3 button-ss2">
            Learn More
          </a>{" "}
          <span className="mr-3 font-family-serif">
            <em>or</em>
          </span>{" "}
          <a
            href="https://vimeo.com/channels/staffpicks/93951774"
            data-fancybox=""
            className="text-uppercase letter-spacing-1 a-ss2"
          >
            See video
          </a>
        </p>
      </div>
    </div>
  </div>
</section>
  )
}
