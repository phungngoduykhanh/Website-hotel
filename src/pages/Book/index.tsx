export { }
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-image-lightbox/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import Fillter from './Fillter';
import '../Book/Fillter.css';
import Fillter_radio from './Fillter_radio';
import SelectRoom from './SelectRoom';

export default function Booking() {
    return (
        <>
            <Header />
            <div className='container'><br /><br />
            
            <div className="row">
                <Fillter_radio/>
            </div>
                <div className="row">
                    <div className="col-lg-3">
                        <Fillter/>
                    </div>
                    <div className="col-lg-6">
                        <SelectRoom/>
                    </div>
                    <div className="col-lg-3">
                        <Fillter/>
                    </div>
                </div>
            </div><br /><br />
            <Footer />
        </>


    )
}
