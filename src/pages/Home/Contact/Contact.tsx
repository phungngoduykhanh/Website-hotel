import React from "react";
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';
export default function Contact() {
    return (
        <>
            <Container fluid className="container-fluid">
                <Container>
                    <Row>&nbsp;
                        <h3>Contact Information</h3>
                        <Col xs={6} md={4}>
                            <Button className="button-button" variant="">
                                <FontAwesomeIcon className="icon-icon" icon={faLocationDot} />&nbsp;&nbsp;
                                <span>Address</span>&nbsp;
                                <p>Lê Văn Thám, Tỉnh Lâm Đồng, TP Đà Lạt</p>
                            </Button>
                        </Col>
                        <Col xs={6} md={4}>
                            <Button className="button-button" variant="">
                                <FontAwesomeIcon className="icon-icon" icon={faPhone} />&nbsp;&nbsp;
                                <span>Phone</span>&nbsp;
                                <p>0768547186</p>
                            </Button>
                        </Col>
                        <Col xs={6} md={4}>
                            <Button className="button-button" variant="">
                                <FontAwesomeIcon className="icon-icon" icon={faEnvelope} />&nbsp;&nbsp;
                                <span>Email</span>&nbsp;
                                <p>dalatfeliz@gmail.com</p>
                            </Button>
                        </Col>
                    </Row> &nbsp;
                    <Row>
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.4493157559737!2d108.43190327497548!3d11.943362088285488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171132eb0f40bcb%3A0xb714851366617204!2zNTQgUGhhbiDEkMOsbmggUGjDuW5nLCBQaMaw4budbmcgMSwgVGjDoG5oIHBo4buRIMSQw6AgTOG6oXQsIEzDom0gxJDhu5NuZyA2NjEwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1689436440084!5m2!1svi!2s"
                                width="1300"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </Row>
                </Container>
            </Container>&nbsp;
            <Container>
                <Row>
                    <h1 className="text-content">People Says</h1>
                </Row><br/><br/>
                <Row>
                    <Col xs={6} md={2}></Col>
                    <Col xs={6} md={3}>
                        <Image className="img-circle" src="https://themewagon.github.io/sogo/images/person_1.jpg" roundedCircle />
                    </Col>
                    <Col xs={6} md={3}>
                        <Image className="img-circle" src="https://themewagon.github.io/sogo/images/person_2.jpg" roundedCircle />
                    </Col>
                    <Col xs={6} md={3}>
                        <Image className="img-circle" src="https://themewagon.github.io/sogo/images/person_3.jpg" roundedCircle />
                    </Col>
                    <Col xs={6} md={1}></Col>
                </Row>&nbsp;
                <Row>
                    <Col xs={6} md={1}></Col>
                    <Col xs={6} md={3}>
                        <p className="text-content">“A small river named Duden flows by their place and supplies it with the necessary regelialia.
                            It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”
                        </p>
                        <p className="text-content">
                            -- Kieu
                        </p>
                    </Col>
                    <Col xs={6} md={3}>
                        <p className="text-content">“A small river named Duden flows by their place and supplies it with the necessary regelialia.
                            It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”
                        </p>
                        <p className="text-content">
                            -- Kieu
                        </p>
                    </Col>
                    <Col xs={6} md={3}>
                        <p className="text-content">“A small river named Duden flows by their place and supplies it with the necessary regelialia.
                            It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”
                        </p>
                        <p className="text-content">
                            -- Kieu
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}