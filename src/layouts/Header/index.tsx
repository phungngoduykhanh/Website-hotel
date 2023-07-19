import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <>
    <header className="site-header js-site-header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-6 col-lg-4 site-logo" data-aos="fade">
            <a href="/"><img src={logo}/></a>
          </div>
          <div className="col-6 col-lg-8">
            <div className="site-menu-toggle js-site-menu-toggle" data-aos="fade">
              <span />
              <span />
              <span />
            </div>
            {/* END menu-toggle */}
            <div className="site-navbar">
              <nav role="navigation">
                <div className="container">
                  <div className="row full-height align-items-center">
                    <div className="col-md-6 mx-auto">
                      <ul className="list-unstyled menu">
                        <li className="active">
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="rooms.html">Rooms</a>
                        </li>
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="events.html">Events</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                        <li>
                          <a href="reservation.html">Reservation</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
        <section
        className="site-hero overlay"
        style={{ backgroundImage: "url(images/hero_4.jpg)" }}
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row site-hero-inner justify-content-center align-items-center">
            <div className="col-md-10 text-center" data-aos="fade-up">
              <span className="custom-caption text-uppercase text-white d-block mb-3">
                Welcome To 5 <span className="fa fa-star color-start" /> Hotel
              </span>
              <h1 className="heading">A Best Place To Stay</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
