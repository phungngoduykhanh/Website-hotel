import logo from '../../assets/images/logo.svg';

import './Footer.css';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import { useSinglePrismicDocument } from '@prismicio/react';

export default function Footer() {

  const [hotelinfo] = useSinglePrismicDocument('hotel');
  console.log(hotelinfo);
  
  return (
    <footer className="section footer-section">
    <div className="row row-footer">
      <div className="col-md-6 logo-footer">
        <a href='/contact'>
          <img className="img-footer" src={logo}></img>
        </a>

      </div>
      <div className="col-md-6 info-footer">
        <div className='info-footer-header'>
            <h1 className='header-footer'>Contact Information About Us
            </h1>
            <span className="line-footer">**********</span>
        </div>
        <span>Address : {hotelinfo && (
            hotelinfo.data.hoteladdress[0].text
        )}</span>
        <br/>
        <span>Phone : {hotelinfo && (
            hotelinfo.data.hotelphone[0].text
        )}</span>
        <br/>
        <span>Email : {hotelinfo && (
            hotelinfo.data.hotelemail[0].text
        )}</span>

        <div className='icon-info-footer'>
            <AiFillFacebook className='icon-footer'/>
            <AiFillTwitterCircle className='icon-footer'/>
            <AiFillInstagram className='icon-footer'/>
            <AiFillYoutube className='icon-footer'/>
        </div>
      </div>
    </div>
</footer>
  )
}
