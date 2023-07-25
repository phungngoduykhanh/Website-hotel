import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/images/logo.svg';
import './Header.css';
import { useEffect, useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { useAllPrismicDocumentsByType, PrismicRichText } from '@prismicio/react'

export default function Header() {
  const [documents] = useAllPrismicDocumentsByType('menu');
  console.log('meunu:', documents);

  const [showMenu, setShowMenu] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const location = useLocation();
  useEffect(() => {
    const currentPath = location.pathname;

    if (currentPath === '/') {
      setActiveItem('home');
    } else if (currentPath === '/detail') {
      setActiveItem('detail');
    } else if (currentPath === '/gallery') {
      setActiveItem('gallery');
    } else if (currentPath === '/contact') {
      setActiveItem('contact');
    }
  }, [location]);

  const handleClick = () => {
    setShowMenu(!showMenu);
  }
  console.log(activeItem);

  const renderMenu = () => {
    if (documents && documents.length > 0) {
      return documents.map(function (el) {
        console.log(el);
        const { id, data } = el;
        return (
          <li >
            <a className={'menu-ss3'} href={data.href[0].text} key={id}>{data.menuname[0].text}</a>
          </li>
        )
      });
    }
    else {
      return null;
    }
  }

  return (
    <>
      <header className="site-header js-site-header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-6 col-lg-4 site-logo" data-aos="fade">
              <a href="/"><img src={logo} /></a>
            </div>
            <div className="col-6 col-lg-8 three-dot">
              <div style={{ color: "black" }} className="site-menu-toggle js-site-menu-toggle" data-aos="fade" onClick={handleClick}>
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="col-6 col-lg-8 menu-pc">
              <ul className="menu-pc-ul">
                {renderMenu()}
                {/* <li >
                  <a className={activeItem === 'home' ? 'active menu-ss3' : 'menu-ss3'} href="/">Home</a>
                </li>
                <li >
                  <a className={activeItem === 'detail' ? 'active menu-ss3' : 'menu-ss3'} href="detail">Overview</a>
                </li>
                <li  >
                  <a className={activeItem === 'gallery' ? 'active menu-ss3' : 'menu-ss3'} href="gallery">Gallery</a>
                </li>
                <li>
                  <a className={activeItem === 'contact' ? 'active menu-ss3' : 'menu-ss3'} href="/contact">Contact</a>
                </li> */}
              </ul>
            </div>
            {showMenu && (
              <div className="site-navbar js-site-navbar" onClick={handleClick} style={{ display: "block" }}>
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
