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
import '../Book/Fillter.css';

export default function Fillter() {
    return (
        <>
            <div className='container'>
                {/* <div className="row">
                    <div className="col-lg-12">
                            <iframe className="content_container-map map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.4493157559737!2d108.43190327497548!3d11.943362088285488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171132eb0f40bcb%3A0xb714851366617204!2zNTQgUGhhbiDEkMOsbmggUGjDuW5nLCBQaMaw4budbmcgMSwgVGjDoG5oIHBo4buRIMSQw6AgTOG6oXQsIEzDom0gxJDhu5NuZyA2NjEwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1689436440084!5m2!1svi!2s"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>      
                    </div>
                    <div className="col-lg-9 radio">
                        <h3 style={{fontFamily: 'Segoe UI', color: '#474141'}}>Dalat Feliz Hotel in Da Lat</h3><br /><br />
                        <div className='input-radio'>
                            <div>
                                <p className='number-room'>6 Room</p>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input check-input" type="radio" value="" id="flexCheckDefault" />
                            <label className="form-check-label text-input">
                                Suggested
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input check-input" type="radio" value="" id="flexCheckDefault" />
                            <label className="form-check-label text-input">
                                Lowest price
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input check-input" type="radio" value="" id="flexCheckDefault" />
                            <label className="form-check-label text-input">
                                Highest price
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input check-input" type="radio" value="" id="flexCheckDefault" />
                            <label className="form-check-label text-input">
                                Appreciate
                            </label>
                        </div>
                        </div>
                    </div>
                </div> */}
                <div className='row'>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <h5 className="card-title" style={{fontFamily: 'Segoe UI', fontSize:'both'}}>See price</h5>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <p className="card-title ml-5"><a href="#">Reset</a></p>
                                    </div>
                                </div>
                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label text-input">
                                            Nhỏ hơn 500.000 đ
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label className="form-check-label text-input">
                                            500.000 đ - 1.000.000 đ
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label text-input">
                                            1.000.000 đ - 2.000.000 đ
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label className="form-check-label text-input">
                                            2.000.000 đ - 5.000.000 đ
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label className="form-check-label text-input">
                                            Lớn hơn 5.000.000 đ
                                        </label>
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