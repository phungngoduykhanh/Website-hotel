import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/roomDetail.css';
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons'
import { auto } from '@popperjs/core';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
// import Image1 from "../../../../public/image/image 9.png";
// import Image2 from "../../../../public/image/image 10.png";
// import Image3 from "../../../../public/image/image 11.png";

const RoomDetail: React.FC = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Container className='container'>
            <Row data-aos="fade-up" className='roomdetail'>
                    <Col xs={auto} md={1} lg={1}></Col>
                    <Col xs={auto} md={10} lg={6}>
                        <h4 className='type-room'>Double Room</h4><br />
                        <p ><FontAwesomeIcon className='icons' icon={faBed} /><span>: 1 double bed 1m6</span>
                            <br />
                            <FontAwesomeIcon className='icons' icon={faPerson} /> <span>: 2 people</span>
                        </p>
                        <p>
                            The rooms are airy and luxurious, designed in the French architectural style. The door opens to <br />
                            see the green sky of the trees, making your heart dreamy, dreamy, romantic because of the freshness<br />
                            and tranquility of the natural scenery. <br /><br />

                            Double room (abbreviated DBL) is a room type with 1 large bed, suitable for families including husband
                            and wife, 1 small child or those traveling alone who want comfort and spaciousness. The carriage can be
                            queen size bed or a king size bed. Regular double rooms have minimum area of ​​11m2 with a width of 2.5m2.
                            The room includes full amenities such as private bathroom, television, fan, air conditioner, ....
                            Double Room can also be divided into Standard Double Room, Deluxe Double Room, etc.<br />
                        </p>
                    </Col>
                    <Col data-aos="zoom-in-down" data-aos-duration="1000" xs={auto} md={11} lg={5} className='justify-content-center'>
                        <Image src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/403210771.jpg?k=ef1e5cbec80e7ee5c31a55b3ecad9252eef7d0001bd45c2b11b27fb0fa19c5b9&o=&hp=1" width={'80%'} height={'90%'} />
                    </Col>
                </Row>
                <Row>
                <Col xs={auto} md={1} lg={1}></Col>
                <Col xs={auto} md={1} lg={10}>
                <ul className='swich'>
                        <li className='swich-link'><a  href="/detail">Gallery</a></li>
                        <li className='swich-link'><a className='swich-text' href="/amenities">Amenities</a></li>
                    </ul><hr />
                </Col>
                <Col xs={auto} md={1} lg={1}></Col>    
                </Row>
                <Row className='amenities'>
                    <Col xs={auto} md={1}></Col>
                    <Col xs={auto} md={5}>
                            <ul>
                                <li>Private bathroom</li>
                                <li>Free Wi-Fi</li>
                                <li>Garden view</li>
                                <li>Hot/cold faucet</li>
                                <li>Freestanding bathtub</li>
                                <li>Desk</li>
                                <li>02 sandals</li>
                                <li>02 bottles of mineral water per day</li>
                            </ul>
                          
                    </Col>
                    <Col xs={auto} md={5}>
                            <ul>
                                <li>Time-Service: 24/24</li>
                                <li>Free 02 bottles of water and cold towels</li>
                                <li>Standard room with 1 double bed, price 400,000 VND/night</li>
                                <li>Standard room with 2 double beds, price 500,000 VND/night</li>
                                <li>
                                    Service: Professionalism, Enthusiasm, Sincerity so that each holiday 
                                    not only saves beautiful memories in the hearts of visitors but also
                                    Sublimes Life, Keeps Yourself Forever Youthful.
                                </li>
                            </ul>
                    </Col>
                    <Col xs={auto} md={1}></Col>
                </Row><br /><br />
                <Row>
                <Col xs={auto} md={1} lg={1}></Col>
                <Col xs={auto} md={10} lg={10}>
                <h3 className='title'>Room & Suites</h3><hr />
                </Col>
                <Col xs={auto} md={1} lg={1}></Col>
                </Row><br /><br />
                <Row className='suites justify-content-center'>
                    <Link
                      to="/roomDetail"
                      className="text-decoration-none text-dark"></Link>
                    <Col xs={auto} md={1} lg={1}></Col>
                    
                    <Col data-aos="fade-up" data-aos-duration="500" xs={auto} md={auto} lg={3}>
                        <div className="bg-white cafita overflow-hidden p-3 shadow rounded">
                            <Image src="https://id.bluejaypms.com/Uploads/7405/2d26b2d9-8f4d-49bd-88ec-d5a6f7a2316c.jpeg" style={{
                                objectFit: "cover",
                                height: "280px",
                                maxHeight: "280px",
                                maxWidth: "250px",
                            }}
                            />
                            <h4
                                className="pt-3 mb-1"
                                style={{
                                    textShadow: "1px 0 1px #080808",
                                    fontFamily: "Lora, serif",
                                    fontSize:"20px",
                                }}
                            >
                                Double room
                            </h4>
                            <div className="d-flex justify-content-between">
                          <p
                            className=" mb-1 pt-2"
                            style={{ letterSpacing: "3px" }}
                          >
                            2 người lớn
                          </p>
                        </div>
                        </div>
                    </Col>
                    <Col data-aos="fade-up" data-aos-duration="500" xs={auto} md={auto} lg={3}>
                        <div className="bg-white cafita overflow-hidden p-3 shadow rounded">
                            <Image src="https://id.bluejaypms.com/Uploads/7405/2d26b2d9-8f4d-49bd-88ec-d5a6f7a2316c.jpeg" style={{
                                objectFit: "cover",
                                height: "280px",
                                maxHeight: "280px",
                                maxWidth: "250px",
                            }}
                            />
                            <h4
                                className="pt-3 mb-1"
                                style={{
                                    textShadow: "1px 0 1px #080808",
                                    fontFamily: "Lora, serif",
                                    fontSize:"20px",
                                }}
                            >
                                Comfort Triple Room-Basement
                            </h4>
                            <div className="d-flex justify-content-between">
                                <p
                                    className=" mb-1 pt-2"
                                    style={{ letterSpacing: "3px" }}
                                >
                                    3 người lớn
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col data-aos="fade-up" data-aos-duration="500" xs={auto} md={auto} lg={3}>
                        <div className="bg-white cafita overflow-hidden p-3 shadow rounded">
                            <Image src="https://id.bluejaypms.com/Uploads/7405/2d26b2d9-8f4d-49bd-88ec-d5a6f7a2316c.jpeg" className="w-100 img-fluid"
                                style={{
                                    objectFit: "cover",
                                    height: "280px",
                                    maxHeight: "280px",
                                    maxWidth: "250px",
                                }}
                            />
                            <h4
                                className="pt-3 mb-1"
                                style={{
                                    textShadow: "1px 0 1px #080808",
                                    fontFamily: "Lora, serif",
                                    fontSize:"20px",
                                }}
                            >
                                Standard Studio
                            </h4>
                            <div className="d-flex justify-content-between">
                                <p
                                    className=" mb-1 pt-2"
                                    style={{ letterSpacing: "3px" }}
                                >
                                    2 người lớn, 1 trẻ em
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={auto} md={1} lg={1.5}></Col>
                </Row><br />
                <br /><br />
            </Container>
        </>
    )
}
export default RoomDetail;
