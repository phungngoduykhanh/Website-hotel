import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './roomDetail.css';
import { Container, Row, Col, Nav } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons'
import { auto } from '@popperjs/core';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import { usePrismicDocumentByUID, PrismicRichText, PrismicImage } from '@prismicio/react'


const RoomDetail: React.FC = () => {
    const [document] = usePrismicDocumentByUID('hotelroom', 'standard-studio');
    console.log('hotelroom', document);
    const [document1] = usePrismicDocumentByUID('hotelroom', 'double-room');
    const [document2] = usePrismicDocumentByUID('hotelroom', 'comfort-room');
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Header />
            <Container className='container-roomdetail'>
                <Row data-aos="fade-up" className='roomdetail'>
                    <Col lg={1}></Col>
                    <Col xs={auto} md={12} lg={6}>
                        <h3 className='type-roomdetail'>
                            {document && (<PrismicRichText field={document.data.name_room} />
                            )}</h3><br />
                        <p ><FontAwesomeIcon className='icons-roomdetail' icon={faBed} /><span>:{document && (
                            <PrismicRichText field={document.data.size} />
                        )}</span>
                            <FontAwesomeIcon className='icons-roomdetail' icon={faPerson} /> <span>:{document && (
                                <PrismicRichText field={document.data.people} />
                            )}</span>
                        </p>
                        <p>
                            {document && (
                                <PrismicRichText field={document.data.content} />
                            )}
                        </p>
                    </Col>
                    <Col data-aos="zoom-in-down" data-aos-duration="1000" xs={auto} md={auto} lg={5} className='justify-content-center'>
                        {document && (<PrismicImage className='justify-content-center' field={document.data.link_img} width={'80%'} height={'90%'} />)}
                    </Col>
                </Row>
                <Nav
                    style={{
                        display: "flex",
                        marginTop: "3rem",
                        gap: "1rem",
                        paddingLeft: "6.8rem",
                        marginBottom: "50px"
                    }}
                    variant="tabs"
                    defaultActiveKey="/home"
                    activeKey="link-2"

                >
                    <Nav.Item>
                        <Nav.Link
                            style={{
                                textDecoration: "none",
                                fontWeight: "bold",
                                color: "black",
                            }}
                            eventKey="link-1"
                            href='/detailroom'
                        >
                            Gallery
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Link
                        style={{
                            textDecoration: "none",
                            fontWeight: "bold",
                            color: "black",
                        }}
                        eventKey="link-2"
                        href='/amenities'
                    >
                        Amenities
                    </Nav.Link>
                </Nav>
                <Row className='amenities'>
                    <Col lg={1}></Col>
                    <Col xs={12} md={12} lg={5}>
                        <ul>
                            <li>{document && (<PrismicRichText field={document.data.body[0].items[0].room_amenities} />)}</li>
                            <li>{document && (<PrismicRichText field={document.data.body[0].items[].room_amenities} />)}</li>
                            <li>{document && (<PrismicRichText field={document.data.body[0].items[0].room_amenities} />)}</li>
                            <li>{document && (<PrismicRichText field={document.data.body[0].items[0].room_amenities} />)}</li>
                            <li>{document && (<PrismicRichText field={document.data.body[0].items[0].room_amenities} />)}</li>
                            {/* <li>Free Wi-Fi</li>
                            <li>Garden view</li>
                            <li>Hot/cold faucet</li>
                            <li>Standard room with 1 double bed, price 400,000 VND/night</li>
                            <li>Standard room with 2 double beds, price 500,000 VND/night</li>
                            <li>Freestanding bathtub</li>
                            <li>02 bottles of mineral water per day</li> */}
                        </ul>

                    </Col>
                    <Col xs={12} md={12} lg={5}>
                        <ul>
                            <li>Time-Service: 24/24</li>
                            <li>Free 02 bottles of water and cold towels</li>
                            <li>Desk</li>
                            <li>02 sandals</li>
                            <li>
                                Service: Professionalism, Enthusiasm, Sincerity so that each holiday
                                not only saves beautiful memories in the hearts of visitors but also
                                Sublimes Life, Keeps Yourself Forever Youthful.
                            </li>
                        </ul>
                    </Col>
                    <Col lg={1}></Col>
                </Row><br /><br />
                <Row>
                    <Col xs={1} md={1} lg={1}></Col>
                    <Col xs={10} md={10} lg={10}>
                        <h3 className='title-roomdetail'>Room & Suites</h3><hr />
                    </Col>
                    <Col xs={1} md={1} lg={1}></Col>
                </Row><br /><br />
                <Row className='suites justify-content-center'>
                    <Link
                        to="/roomDetail"
                        className="text-decoration-none text-dark"></Link>
                    <Col xs={auto} lg={1.5}></Col>

                    <Col data-aos="fade-up" data-aos-duration="500" className='type-roomdetail1' xs={12} md={12} lg={3}>
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
                                    // textShadow: "1px 0 0px #080808",
                                    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                                    fontSize: "20px",
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
                    <Col data-aos="fade-up" data-aos-duration="500" className='type-roomdetail1' xs={12} md={12} lg={3}>
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
                                    // textShadow: "1px 0 0px #080808",
                                    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                                    fontSize: "20px",
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
                    <Col data-aos="fade-up" data-aos-duration="500" className='type-roomdetail1' xs={12} md={12} lg={3}>
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
                                    // textShadow: "1px 0 0px #080808",
                                    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                                    fontSize: "20px",
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
                    <Col xs={auto} lg={1.5}></Col>
                </Row><br />
                <br /><br />
            </Container>
            <Footer />
        </>
    )
}
export default RoomDetail;
