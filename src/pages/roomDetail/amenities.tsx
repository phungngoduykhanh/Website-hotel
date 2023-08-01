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
import { Link, useParams } from 'react-router-dom';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import { useAllPrismicDocumentsByType, usePrismicDocumentByUID, PrismicRichText, PrismicImage } from '@prismicio/react';


const RoomDetail: React.FC = () => {
    const [document3] = useAllPrismicDocumentsByType('hotelroom');
    console.log('hotelroom', document3);
    const limitedRooms = document3 && document3.slice(0, 3);
    const { id } = useParams();
    var id_room = "";
    var an = undefined;
    if (id) {
        id_room = id;
    }

    const [document] = usePrismicDocumentByUID('hotelroom', id_room);

    if (document) {
        an = document?.data.body[1].items
    }
    console.log("room", an);
    useEffect(() => {
        AOS.init();
    }, []);

    const [amenity] = useAllPrismicDocumentsByType('hotelroom');
    if (!amenity || amenity.length === 0) {
        return null;
    }
    return (
        <>
            <Header />
            <Container className='container-roomdetail '>
                <Row data-aos="fade-up" className='roomdetail'>
                   
                    <Col xs={auto} md={12} lg={6}>
                        <h3 className='type-roomdetail'>
                            {document && (<PrismicRichText field={document.data.name_room} />
                            )}</h3><br />
                        <p className='testbed'><FontAwesomeIcon className='icons-roomdetail' icon={faBed}  />:<span>{document && (
                            <PrismicRichText field={document.data.size} />
                        )}</span>
                        </p>
                        <p className='testpeople'> <FontAwesomeIcon className='icons-roomdetail' icon={faPerson} />:<span className=''>{document && (
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
                        {document && (<PrismicImage className='justify-content-center' field={document.data.link_img} width={'100%'} height={'90%'} />)}
                    </Col>
                </Row>
                <Row>
                    
                    <div className='xxxx'>
                        <Nav className='titelroom'
                            style={{
                                display: "flex",
                                marginTop: "3rem",
                                gap: "1rem",
                                paddingLeft: "1rem",
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
                    </div>
                </Row>
                
                <Row className='amenities'>
                
                    <div className='xuan container row-test'>
                        {Array.isArray(an) && an.map((res, index) => (
                            <ul>
                                <li key={index}>
                                    {res.room_amenities[0].text}
                                </li>
                            </ul>
                        ))}
                    </div>

                </Row><br /><br />
                <Row>
                    <Col xs={1} md={1} lg={1}></Col>
                    <Col xs={10} md={10} lg={10}>
                        <h3 className='title-roomdetail'>Room & Suites</h3><hr />
                    </Col>
                    <Col xs={1} md={1} lg={1}></Col>
                </Row><br /><br />
                <Row className='suites justify-content-center'>
                    <Col xs={auto} lg={1.5}></Col>
                    {limitedRooms && limitedRooms.map((room, index) => (
                        <Col key={index} data-aos="fade-up" data-aos-duration="500" className='type-roomdetail1' xs={12} md={12} lg={3}>
                            <Link
                                to={`/detailroom/${room.id}`} className="text-decoration-none text-dark">
                                <div className="bg-white cafita overflow-hidden p-3 shadow rounded">
                                    <img
                                        className="w-100 img-fluid"
                                        src={room.data.link_img.url}
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
                                            fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                                            fontSize: "20px",
                                        }}
                                    >
                                        {room.data.name_room[0].text}
                                    </h4>
                                    <div className="d-flex justify-content-between">
                                        <p
                                            className=" mb-1 pt-2"
                                            style={{ letterSpacing: "3px" }}
                                        >
                                            {room.data.people[0].text}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    ))}
                    <Col xs={auto} lg={1.5}></Col>
                </Row><br />
                <br /><br />
            </Container>
            <Footer />
        </>
    )
}
export default RoomDetail;
