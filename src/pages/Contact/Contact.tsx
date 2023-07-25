import { Container, Row, Col, Image, Button, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import './Contact.css';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';

export default function Contact() {
    return (
        <>
            <Header/>
            <div className="content">
                <Container fluid className="content_container">
                    <Container>
                        <Row>&nbsp;
                            <h3>Contact Information</h3>
                            <Col xs={12} md={4}>
                                <Button className="content_container-button" variant="">
                                    <FontAwesomeIcon className="content_container-button-icon" icon={faLocationDot} />&nbsp;&nbsp;
                                    <span className="content_container-title">Address</span>&nbsp;
                                    <p>Lê Văn Thám, Tỉnh Lâm Đồng, TP Đà Lạt</p>
                                </Button>
                            </Col>
                            <Col xs={12} md={4}>
                                <Button className="content_container-button" variant="">
                                    <FontAwesomeIcon className="content_container-button-icon" icon={faPhone} />&nbsp;&nbsp;
                                    <span className="content_container-title">Phone</span>&nbsp;
                                    <p>0768547186</p>
                                </Button>
                            </Col>
                            <Col xs={12} md={4}>
                                <Button className="content_container-button" variant="">
                                    <FontAwesomeIcon className="content_container-button-icon" icon={faEnvelope} />&nbsp;&nbsp;
                                    <span className="content_container-title">Email</span>&nbsp;
                                    <p>dalatfeliz@gmail.com</p>
                                </Button>
                            </Col>
                        </Row> &nbsp;
                        <Row>
                            <Col xs={12} md={12} >
                                <iframe className="content_container-map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.4493157559737!2d108.43190327497548!3d11.943362088285488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171132eb0f40bcb%3A0xb714851366617204!2zNTQgUGhhbiDEkMOsbmggUGjDuW5nLCBQaMaw4budbmcgMSwgVGjDoG5oIHBo4buRIMSQw6AgTOG6oXQsIEzDom0gxJDhu5NuZyA2NjEwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1689436440084!5m2!1svi!2s"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                <Container className="content_people">
                    <Row>
                        <h1 className="content_people-say">People Says</h1>
                    </Row><br /><br />
                    {/* <Row className="content_people-infor">                       */}
                    <Carousel >
                        <Carousel.Item>
                            <Row >
                                <Col md={4} className='d-flex justify-content-center  align-items-center flex-column'>
                                    <Image className="content_people-img" src="https://themewagon.github.io/sogo/images/person_1.jpg" roundedCircle /> <br />
                                    <p className="content_people-text">“A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”
                                    </p>
                                    <p className="content_people-text">
                                        -- Kieu
                                    </p>
                                </Col>
                                <Col md={4} className='d-flex justify-content-center  align-items-center flex-column'>
                                    <Image className="content_people-img" src="https://themewagon.github.io/sogo/images/person_2.jpg" roundedCircle /> <br />
                                    <p className="content_people-text">“A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”
                                    </p>
                                    <p className="content_people-text">
                                        -- Kieu
                                    </p>
                                </Col>
                                <Col md={4} className='d-flex justify-content-center  align-items-center flex-column'>
                                    <Image className="content_people-img" src="https://themewagon.github.io/sogo/images/person_3.jpg" roundedCircle /> <br />
                                    <p className="content_people-text">“A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”
                                    </p>
                                    <p className="content_people-text">
                                        -- Kieu
                                    </p>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item >
                            <Row >
                                <Col md={4} className='d-flex justify-content-center  align-items-center flex-column'>
                                    <Image className="content_people-img" src="https://themewagon.github.io/sogo/images/person_1.jpg" roundedCircle /> <br />
                                    <p className="content_people-text">“A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”
                                    </p>
                                    <p className="content_people-text">
                                        -- Kieu
                                    </p>
                                </Col>
                                <Col md={4} className='d-flex justify-content-center  align-items-center flex-column'>
                                    <Image className="content_people-img" src="https://themewagon.github.io/sogo/images/person_2.jpg" roundedCircle /> <br />
                                    <p className="content_people-text">“A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”
                                    </p>
                                    <p className="content_people-text">
                                        -- Kieu
                                    </p>
                                </Col>
                                <Col md={4} className='d-flex justify-content-center  align-items-center flex-column'>
                                    <Image className="content_people-img" src="https://themewagon.github.io/sogo/images/person_4.jpg" roundedCircle /> <br />
                                    <p className="content_people-text">“A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”
                                    </p>
                                    <p className="content_people-text">
                                        -- Kieu
                                    </p>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </div>
            <Footer/>
        </>
    )
}