export { }
import React from 'react';
import CusInfor1 from './CusInfor';
import '../CusInfor/CusInfor.css';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import Sum from '../Book/Sum';

export default function CustInfor() {
    return (
        <>
            <Header />
            <div className="container-info" data-aos="fade-up">
                <div className="container p-5">
                    <div className="row">
                        <div className="col-lg-9">
                            < CusInfor1 />
                        </div>
                        <div className="col-lg-3">
                            < Sum />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}