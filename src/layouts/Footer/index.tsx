import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/images/logo.svg';

import './Footer.css';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
export default function Footer() {
  return (
    <footer className="section footer-section">
    <div className="row">
      <div className="col-md-6 logo-footer">
        <a href='http://localhost:3000/contact'>
          <img className="img-footer" src={logo}></img>
        </a>

      </div>
      <div className="col-md-6 info-footer">
        <div>
            <h1 className='header-footer'>Contact Information About Us
            </h1>
            <span className="line-footer">**********</span>
        </div>
        <span>Address : Lê Văn Thám, Tỉnh Lâm Đồng, TP Đà Lạt</span>
        <br/>
        <span>Phone : 0899688386</span>
        <br/>
        <span>Gmail : dalatktx@gmail.com</span>

        <div className='icon-info'>
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
