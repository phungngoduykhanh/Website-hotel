import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auto } from '@popperjs/core';
import { Container, Row, Col, Image, Button, Alert } from 'react-bootstrap';
import './SelectRoom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons'
export default class SelectRoom extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className='select-room p-2' data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
                                <img
                                    className="imgroom"
                                    src="https://images.prismic.io/website-hotell/38783ef3-89fb-40eb-b6b6-7848a12e4bd0_double+room+1.jpg?auto=compress,format"
                                    alt=""
                                    height={'100%'}
                                    width={'100%'}
                                />
                            </div>
                            <div className="col-lg-4 col-sm-6 d-flex justify-content-center pt-2">
                                <div>
                                    <h4 style={{ fontFamily: 'Segoe UI' }}>Double Room</h4>
                                    <div className='pt-3 icons'>
                                        <p>
                                            <FontAwesomeIcon icon={faBed} /> 1 Double Bed 1m6
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faPerson} /> 3 Adults
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 d-flex justify-content-center line pt-2">
                                <div className="pice-room">
                                    <h2 className="pice ">1.300.000đ</h2>
                                    <button type="button" className="btn btn-primary text-btn">Select</button><br />
                                    <p className="inforoom">Only 5 Rooms Left !</p>

                                </div>
                            </div>
                        </div>
                    </div><br />
                    <div className='select-room p-2' data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
                                <img
                                    className="imgroom"
                                    src="https://images.prismic.io/website-hotell/38783ef3-89fb-40eb-b6b6-7848a12e4bd0_double+room+1.jpg?auto=compress,format"
                                    alt=""
                                    height={'100%'}
                                    width={'100%'}
                                />
                            </div>
                            <div className="col-lg-4 col-sm-6 d-flex justify-content-center pt-2">
                                <div>
                                    <h4 style={{ fontFamily: 'Segoe UI' }}>Double Room</h4>
                                    <div className='pt-3 icons'>
                                        <p>
                                            <FontAwesomeIcon icon={faBed} /> 1 Double Bed 1m6
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faPerson} /> 3 Adults
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 d-flex justify-content-center line pt-2">
                                <div className="pice-room">
                                    <h2 className="pice ">1.300.000đ</h2>
                                    <button type="button" className="btn btn-primary text-btn">Select</button><br />
                                    <p className="inforoom">Only 5 Rooms Left !</p>

                                </div>
                            </div>
                        </div>
                    </div><br />
                    <div className='select-room p-2' data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
                                <img
                                    className="imgroom"
                                    src="https://images.prismic.io/website-hotell/ddf2755e-4623-4800-96dd-0f16a2c04d6d_Standard+Triple+Room+1.jpg?auto=compress,format"
                                    alt=""
                                    height={'100%'}
                                    width={'100%'}
                                />
                            </div>
                            <div className="col-lg-4 col-sm-6 d-flex justify-content-center pt-2">
                                <div>
                                    <h4 style={{ fontFamily: 'Segoe UI' }}>Double Room</h4>
                                    <div className='pt-3 icons'>
                                        <p>
                                            <FontAwesomeIcon icon={faBed} /> 1 Double Bed 1m6
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faPerson} /> 3 Adults
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 d-flex justify-content-center line pt-2">
                                <div className="pice-room">
                                    <h2 className="pice ">1.300.000đ</h2>
                                    <button type="button" className="btn btn-primary text-btn">Select</button><br />
                                    <p className="inforoom">Only 5 Rooms Left !</p>

                                </div>
                            </div>
                        </div>
                    </div><br />
                    <div className='select-room p-2' data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
                                <img
                                    className="imgroom"
                                    src="https://images.prismic.io/website-hotell/274b6f0e-6c93-4693-8f3e-8d2f515ccc88_Comfort+Triple+Room+7.jpg?auto=compress,format"
                                    alt=""
                                    height={'100%'}
                                    width={'100%'}
                                />
                            </div>
                            <div className="col-lg-4 col-sm-6 d-flex justify-content-center pt-2">
                                <div>
                                    <h4 style={{ fontFamily: 'Segoe UI' }}>Double Room</h4>
                                    <div className='pt-3 icons'>
                                        <p>
                                            <FontAwesomeIcon icon={faBed} /> 1 Double Bed 1m6
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faPerson} /> 3 Adults
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 d-flex justify-content-center line pt-2">
                                <div className="pice-room">
                                    <h2 className="pice ">1.300.000đ</h2>
                                    <button type="button" className="btn btn-primary text-btn "><p>Select</p></button><br />
                                    <p className="inforoom">Only 5 Rooms Left !</p>

                                </div>
                            </div>
                        </div>
                    </div><br />

                </div>
            </div>

    //       </div>
    //     </Col>
    //     <Col >
    //       {/* Right sidebar content */}
    //       <div className="information-hotel-right">
    //         {/* ... */}
    //       </div>
    //     </Col>
    //   </Row>
    // </Container>
  );
}
}
// export default SelectRoom;
