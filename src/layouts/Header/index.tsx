import logo from '../../assets/images/logo.svg';
import './Header.css';
import { useState } from 'react';
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = ()=>{
    setShowMenu(!showMenu);
  }
  return (
    <>
    <header className="site-header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-6 col-lg-4 site-logo" data-aos="fade">
            <a href="/"><img src={logo}/></a>
          </div>
          <div className="col-6 col-lg-8 three-dot">
          <div style={{color:"black"}} className="site-menu-toggle js-site-menu-toggle" data-aos="fade" onClick={handleClick}>
              <span />
              <span />
              <span />
            </div>
          </div>
            <div className="col-6 col-lg-8 menu-pc">
                        <ul className="menu-pc-ul">
                          <li >
                            <a className='menu-ss3'href="/">Home</a>
                          </li>
                          <li >
                            <a className= 'menu-ss3' href="detail">Overview</a>
                          </li>
                          <li  >
                            <a className='menu-ss3'  href="gallery">Gallery</a>
                          </li>
                          <li>
                            <a className='menu-ss3' href="/contact">Contact</a>
                          </li>
                        </ul>
              </div>
            {showMenu && (
              <div className="site-navbar js-site-navbar" onClick={handleClick} style={{display:"block"}}>
  <nav role="navigation">
    <div className="container">
      <div className="row full-height align-items-center">
        <div className="col-md-6 mx-auto">
          <ul className="list-unstyled menu">
            <li className="active">
              <a href="/">Home</a>
            </li>
            <li >
              <a href="/detail">Overview</a>
            </li>
            <li >
              <a href="gallery">Gallery</a>
            </li>
            <li >
              <a href="contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</div>
            )}
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
