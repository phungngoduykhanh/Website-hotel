export { }
import React from 'react';
import CusInfor1 from './CusInfor';
import '../CusInfor/CusInfor.css';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';

export default function CustInfor() {
    return (
        <>
            <Header />
            <div className="container-info">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            < CusInfor1 />
                        </div>
                        <div className="col-lg-3">
                            < CusInfor1 />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}