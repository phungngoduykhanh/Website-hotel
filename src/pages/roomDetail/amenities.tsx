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
    const [room1] = usePrismicDocumentByUID('hotelroom', "1");
    const [room2] = usePrismicDocumentByUID('hotelroom', "2");
    const [room3] = usePrismicDocumentByUID('hotelroom', "3");
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
                    {document && (
                        <>
                            <Col lg={1}></Col>
                            <Col xs={auto} md={12} lg={6}>
                                <h3 className='type-roomdetail'>
                                    <PrismicRichText field={document.data.name_room} />
                                </h3>
                                <br />
                                <p>
                                    <span className='icon'>
                                        <FontAwesomeIcon className='icons-roomdetail' icon={faBed} />:
                                        <PrismicRichText field={document.data.size} />
                                    </span>
                                    <span className='icon'>
                                        <FontAwesomeIcon className='icons-roomdetail' icon={faPerson} />:
                                        <PrismicRichText field={document.data.people} />
                                    </span>
                                </p>
                                <p>
                                    <PrismicRichText field={document.data.content} />
                                </p>
                            </Col>
                            <Col data-aos="zoom-in-down" data-aos-duration="1000" xs={auto} md={auto} lg={4} className='justify-content-end'>
                                <PrismicImage className='justify-content-end' field={document.data.link_img} width={'100%'} height={'100%'} />
                            </Col>
                        </>
                    )}
                    <Col lg={1}></Col>
                </Row>
                <Row>
                    <Col xs={12} md={1} lg={1}></Col>
                    <Col xs={12} md={10} lg={10}>
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
                            {document && (
                                <>
                                    <Nav.Item>
                                        <Nav.Link
                                            style={{
                                                textDecoration: "none",
                                                fontWeight: "bold",
                                                color: "black",
                                            }}
                                            eventKey="link-1"
                                            href={`/detailroom/${document.uid}`}
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
                                        href={`/amenities/${document.uid}`}
                                    >
                                        Amenities
                                    </Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Col>
                    <Col xs={12} md={1} lg={1}></Col>
                </Row>
                <Row className='amenities'>
                    <div className='xuan container row-test justify-content-center '>
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
                    <Col data-aos="fade-up" data-aos-duration="500" className='type-roomdetail1' xs={12} md={12} lg={3}>
                        {
                            room1 && (
                                <Link
                                    to={`detailroom/${room1.uid}`}
                                    className="text-decoration-none text-dark"
                                >
                                    <div className="bg-white cafita overflow-hidden p-3 shadow rounded">
                                        <img
                                            src={room1.data.link_img.url}
                                            alt=""
                                            className="w-100 img-fluid"
                                            style={{
                                                objectFit: "cover",
                                                height: "250px",
                                                maxHeight: "250px",
                                                maxWidth: "250px",
                                            }}
                                        />
                                        <h4
                                            className="pt-3 mb-1"
                                            style={{
                                                textShadow: "1px 0 1px #080808",
                                                fontFamily: "Lora, serif",
                                            }}
                                        >
                                            {room1.data.name_room[0].text}
                                        </h4>
                                        <div className="d-flex justify-content-between">
                                            <p
                                                className=" mb-1 pt-2 p-top-ss3"
                                                style={{ letterSpacing: "3px" }}
                                            >
                                                {room1.data.people[0].text}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    </Col>
                    <Col data-aos="fade-up" data-aos-duration="500" className='type-roomdetail1' xs={12} md={12} lg={3}>
                        {
                            room2 && (
                                <Link
                                    to={`detailroom/${room2.uid}`}
                                    className="text-decoration-none text-dark"
                                >
                                    <div className="bg-white cafita overflow-hidden p-3 shadow rounded">
                                        <img
                                            src={room2.data.link_img.url}
                                            alt=""
                                            className="w-100 img-fluid"
                                            style={{
                                                objectFit: "cover",
                                                height: "250px",
                                                maxHeight: "250px",
                                                maxWidth: "250px",
                                            }}
                                        />
                                        <h4
                                            className="pt-3 mb-1"
                                            style={{
                                                textShadow: "1px 0 1px #080808",
                                                fontFamily: "Lora, serif",
                                            }}
                                        >
                                            {room2.data.name_room[0].text}
                                        </h4>
                                        <div className="d-flex justify-content-between">
                                            <p
                                                className=" mb-1 pt-2 p-top-ss3"
                                                style={{ letterSpacing: "3px" }}
                                            >
                                                {room2.data.people[0].text}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    </Col>
                    <Col data-aos="fade-up" data-aos-duration="500" className='type-roomdetail1' xs={12} md={12} lg={3}>
                        {
                            room3 && (
                                <Link
                                    to={`detailroom/${room3.uid}`}
                                    className="text-decoration-none text-dark"
                                >
                                    <div className="bg-white cafita overflow-hidden p-3 shadow rounded">
                                        <img
                                            src={room3.data.link_img.url}
                                            alt=""
                                            className="w-100 img-fluid"
                                            style={{
                                                objectFit: "cover",
                                                height: "250px",
                                                maxHeight: "250px",
                                                maxWidth: "250px",
                                            }}
                                        />
                                        <h4
                                            className="pt-3 mb-1"
                                            style={{
                                                textShadow: "1px 0 1px #080808",
                                                fontFamily: "Lora, serif",
                                            }}
                                        >
                                            {room3.data.name_room[0].text}
                                        </h4>
                                        <div className="d-flex justify-content-between">
                                            <p
                                                className=" mb-1 pt-2 p-top-ss3"
                                                style={{ letterSpacing: "3px" }}
                                            >
                                                {room3.data.people[0].text}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
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
