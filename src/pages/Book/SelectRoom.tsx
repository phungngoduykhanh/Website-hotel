import { link } from 'fs';
import React, { Component } from 'react';
import './SelectRoom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons'
export default class SelectRoom extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className='select-room p-2'>
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
                            <div className="col-lg-4 d-flex justify-content-start pt-2">
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
                            <div className="col-lg-4 d-flex justify-content-center line pt-2">
                                <div className="pice-room">
                                    <h2 className="pice ">1.300.000đ</h2>
                                    <button type="button" className="btn btn-primary">Select</button><br />
                                    <p className="inforoom d-flex justify-content-center ">Only 5 Rooms Left !</p>

                                </div>
                            </div>
                            {/* <div className="titel-detail-room">
                
              </div>

              <div className="pice-room">
                <div className="detail-pice-room">
                  <h2 className="pice">1.300.000đ</h2>
                  <button className="select">Select</button>
                  <p className="inforoom">Only 5 Rooms Left !</p>
                </div>
              </div>
            </div> */}
                            {/* <div className="detail-room">
              <div className="img-room">
                <img
                  className="imgroom"
                  src="https://images.prismic.io/website-hotell/274b6f0e-6c93-4693-8f3e-8d2f515ccc88_Comfort+Triple+Room+7.jpg?auto=compress,format"
                  alt=""
                />
              </div>
              <div className="titel-detail-room">
                <h1>Comfort Triple Room</h1>

                <p>
                  <i className="fa-solid fa-bed"></i> 1 Double Bed 1m6
                </p>
                <p>
                  <i className="fa-solid fa-person"></i> 2 Adults, 1 Child
                </p>
              </div>

              <div className="pice-room">
                <div className="detail-pice-room">
                  <h2 className="pice">1.560.000đ</h2>
                  <button className="select">Select</button>
                  <p className="inforoom">Only 7 Rooms Left !</p>
                </div>
              </div>
            </div> */}
                            {/* <div className="detail-room">
              <div className="img-room">
                <img
                  className="imgroom"
                  src="https://images.prismic.io/website-hotell/ddf2755e-4623-4800-96dd-0f16a2c04d6d_Standard+Triple+Room+1.jpg?auto=compress,format"
                  alt=""
                />
              </div>
              <div className="titel-detail-room">
                <h1>Standard Studio</h1>

                <p>
                  <i className="fa-solid fa-bed"></i> 1 Double Bed 1m6
                </p>
                <p>
                  <i className="fa-solid fa-person"></i> 2 Adults
                </p>
              </div>

              <div className="pice-room">
                <div className="detail-pice-room">
                  <h2 className="pice">1.456.000đ</h2>
                  <button className="select">Select</button>
                  <p className="inforoom">Only 2 Rooms Left !</p>
                </div>
              </div>
            </div> */}
                        </div>
                    </div><br />
                    <div className='select-room p-2'>
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
                            <div className="col-lg-4 d-flex justify-content-start pt-2">
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
                            <div className="col-lg-4 d-flex justify-content-center line pt-2">
                                <div className="pice-room">
                                    <h2 className="pice ">1.300.000đ</h2>
                                    <button type="button" className="btn btn-primary">Select</button><br />
                                    <p className="inforoom d-flex justify-content-center ">Only 5 Rooms Left !</p>

                                </div>
                            </div>
                        </div>
                    </div><br />
                    <div className='select-room p-2'>
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
                            <div className="col-lg-4 d-flex justify-content-start pt-2">
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
                            <div className="col-lg-4 d-flex justify-content-center line pt-2">
                                <div className="pice-room">
                                    <h2 className="pice ">1.300.000đ</h2>
                                    <button type="button" className="btn btn-primary">Select</button><br />
                                    <p className="inforoom d-flex justify-content-center ">Only 5 Rooms Left !</p>

                                </div>
                            </div>
                        </div>
                    </div><br />
                    <div className='select-room p-2'>
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
                            <div className="col-lg-4 d-flex justify-content-start pt-2">
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
                            <div className="col-lg-4 d-flex justify-content-center line pt-2">
                                <div className="pice-room">
                                    <h2 className="pice ">1.300.000đ</h2>
                                    <button type="button" className="btn btn-primary">Select</button><br />
                                    <p className="inforoom d-flex justify-content-center ">Only 5 Rooms Left !</p>

                                </div>
                            </div>
                        </div>
                    </div><br />
                    <div className='select-room p-2'>
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
                            <div className="col-lg-4 d-flex justify-content-start pt-2">
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
                            <div className="col-lg-4 d-flex justify-content-end line pt-2">
                                <div className="pice-room">
                                    <h2 className="pice ">1.300.000đ</h2>
                                    <button type="button" className="btn btn-primary">Select</button><br />
                                    <p className="inforoom d-flex justify-content-center ">Only 5 Rooms Left !</p>

                                </div>
                            </div>
                        </div>
                    </div><br />
                </div>
            </div>
        );
    }
}
