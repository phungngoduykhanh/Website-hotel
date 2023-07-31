import logo from '../../assets/images/logo.svg';
import './Header.css';
import { useState } from 'react';
import { useSinglePrismicDocument,useAllPrismicDocumentsByType } from '@prismicio/react';

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

  return (
    <>
    <header className="site-header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-6 col-lg-4 site-logo" data-aos="fade">
            <a href="/"><img src={hotelinfo?.data.img_hotel.url} className="logo-header"/></a>
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
                  <li>
                    <a href={res.data.href[0].text}>{res.data.menuname[0].text}</a>
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
