export { }
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-image-lightbox/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Book/Filter.css';

export default function Filter_radio() {
    return (
        <>
            <div className='container'><br />
                <div className='radio-fillter'>
                    <div className="row">
                        <div className="col-lg-3 col-md-12 col-sm-12" data-aos="fade-up">
                            <iframe className="content_container-map map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.4493157559737!2d108.43190327497548!3d11.943362088285488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171132eb0f40bcb%3A0xb714851366617204!2zNTQgUGhhbiDEkMOsbmggUGjDuW5nLCBQaMaw4budbmcgMSwgVGjDoG5oIHBo4buRIMSQw6AgTOG6oXQsIEzDom0gxJDhu5NuZyA2NjEwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1689436440084!5m2!1svi!2s"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                        <div className="col-lg-9 col-md-12 col-md-12 radio" data-aos="fade-up">
                            <h3 style={{ fontFamily: 'Segoe UI', color: '#474141' }}>Dalat Feliz Hotel in Da Lat</h3>
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
                    </div>
                </div>
            </div>
        </>
    )
}