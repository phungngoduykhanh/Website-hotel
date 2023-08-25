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
import Fillter from './Filter';
import '../Book/Filter.css';
import Fillter_radio from './Filter_radio';
import SelectRoom from './SelectRoom';
import Sum from './Sum';
import Session1 from '../Home/Session1';
import './index.css';
import SlRoom from './SlRoom';
import Sums from './Sums';


export default function Booking() {
    useEffect(() => {
        AOS.init();
    }, []);

    const handleSlRoomSelect = (roomInfo:string, price:string) => {
        const newSelectedRoom = {
            roomInfo: roomInfo,
            price: price
        };
    };
    return (
        <>
            <Header />
            <Session1/>
            <div className='container book' data-aos="fade-up">
            <div className="row ">
                <Fillter_radio/>
            </div>
                <div className="row book-room">
                    <div className="col-lg-10">
                        <Fillter />
                    </div>
                    {/* <div className="col-lg-6">
                        <SelectRoom />
                    </div> */}
                    <div className="col-lg-2">
                        {/* <Sums /> */}
                        <Sum/>
                    </div>
                </div>
            </div><br /><br />
            <Footer />
        </>
    )
}
