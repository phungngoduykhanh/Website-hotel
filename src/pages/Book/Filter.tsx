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
import '../Book/Filter.css';

export default function Fillter() {
    return (
        <>
            <div className='container'>
                <div className='row' >
                    <div className="col-lg-12 col-md-12 col-sm-12" >
                        <div className="card" data-aos="fade-up">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <h5 className="card-title" style={{ fontFamily: 'Segoe UI', fontSize: 'both' }}>See price</h5>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <p className="card-title ml-5"><a href="#">Reset</a></p>
                                    </div>
                                </div>
                                <div>
                                    <div className="row">
                                        <div className="col-md-6 col-lg-12">
                                            <div className="form-check">
                                                <input className="form-check-input radio-input" type="radio" name="priceRange" value="lessThan500k" id="radioLessThan500k" />
                                                <label className="form-check-label text-input" htmlFor="radioLessThan500k">
                                                    Nhỏ hơn 500.000 đ
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input radio-input" type="radio" name="priceRange" value="500kTo1m" id="radio500kTo1m" />
                                                <label className="form-check-label text-input" htmlFor="radio500kTo1m">
                                                    500.000 đ - 1.000.000 đ
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input radio-input" type="radio" name="priceRange" value="1mTo2m" id="radio1mTo2m" />
                                                <label className="form-check-label text-input" htmlFor="radio1mTo2m">
                                                    1.000.000 đ - 2.000.000 đ
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-12">
                                            <div className="form-check">
                                                <input className="form-check-input radio-input" type="radio" name="priceRange" value="2mTo5m" id="radio2mTo5m" />
                                                <label className="form-check-label text-input" htmlFor="radio2mTo5m">
                                                    2.000.000 đ - 5.000.000 đ
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input radio-input" type="radio" name="priceRange" value="greaterThan5m" id="radioGreaterThan5m" />
                                                <label className="form-check-label text-input" htmlFor="radioGreaterThan5m">
                                                    Lớn hơn 5.000.000 đ
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div><hr /><br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div><br /><br />
        </>


    )
}
