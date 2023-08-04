import './Header.css';
import { useEffect, useState } from 'react';
import { useSinglePrismicDocument,useAllPrismicDocumentsByType } from '@prismicio/react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faStar } from '@fortawesome/free-solid-svg-icons';
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const [hotelinfo] = useSinglePrismicDocument('hotel');

  const [menu] = useAllPrismicDocumentsByType('menu');
  // console.log("menu",menu);
  

  const handleClick = ()=>{
    setShowMenu(!showMenu);
  }

  const renderMenu = ()=>{
      if(menu && menu.length >0){    
        const sortedMenu = menu.sort((a, b) => a.data.shortorder - b.data.shortorder); 
        return  sortedMenu.map((res,index)=>(
              <li key={index}>
                <a className='menu-ss3'href={res.data.href[0].text}>{res.data.menuname[0].text}</a>
              </li>  
        ))      
      }
      else{
        return null
      }
  }

  useEffect(() => {
    const handleScroll = () => {
      const $win = $(window);
      if ($win && $win.scrollTop) {
        const scrollTop = $win.scrollTop();
        const $siteHeader = $('.site-header');
        
        if (scrollTop !== undefined && scrollTop > 200) {
          $siteHeader.addClass('scrolled');
        } else {
          $siteHeader.removeClass('scrolled');
        }
      }
    };

    $(window).on('scroll', handleScroll);

    return () => {
      $(window).off('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <header className="site-header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-6 col-lg-4 site-logo" data-aos="fade">
            <a href="/"><img src={hotelinfo?.data.img_hotel.url} className="logo-header"/></a>
          </div>
          <div className="col-6 col-lg-8 three-dot">
          <div style={{color:"black"}} className="site-menu-toggle" data-aos="fade" onClick={handleClick}>
                <FontAwesomeIcon icon={faBars} className='menu-icon-header'/>
            </div>
          </div>
            <div className="col-6 col-lg-8 menu-pc">
              <ul className="menu-pc-ul">
                  {renderMenu()}
              </ul>
            </div>
            {showMenu && (
              <div className="site-navbar js-site-navbar" onClick={handleClick} style={{display:"block"}}>
  <nav role="navigation">
    <div className="container">
      <div className="row full-height align-items-center">
        <div className="col-md-6 mx-auto">
          <ul className="list-unstyled menu">

              {menu && menu.length > 0 && (
                menu.map((res) => (
                  <li className='li-hide-menu-header'>
                    <a className="menu-hide-header" href={res.data.href[0].text}>{res.data.menuname[0].text}</a>
                  </li>
                ))
              )}

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
        style={{ backgroundImage: "url(http://localhost:3000/images/hero_4.jpg)" }}
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row site-hero-inner justify-content-center align-items-center">
            <div className="col-md-10 text-center span-text-header" data-aos="fade-up">
              <span className="custom-caption text-uppercase text-white d-block mb-3">
                Welcome To 5 <FontAwesomeIcon icon={faStar} style={{color:"yellow"}}/> Hotel
              </span>
              <h1 className="heading-header">A Best Place To Stay</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
