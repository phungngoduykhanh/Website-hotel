import { Container, Row, Col, Image, Button, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';
import Header from '../../layouts/Header';
import CarouselSlide from './Slide';
import Footer from '../../layouts/Footer';

export default function Contact() {
    return (
        <>
            <Header/>
            <div className="content" data-aos="fade-up">
                <Container fluid className="content_container">
                    <Container>
                        <Row>&nbsp;
                            <h3>Contact Information</h3>
                            <Col xs={12} md={4} className='custom-margin mt-3 mb-3'>
                                <Button className="content_container-button" variant="">
                                    <FontAwesomeIcon className="content_container-button-icon" icon={faLocationDot} />&nbsp;&nbsp;
                                    <span className="content_container-title">Address</span>&nbsp;
                                    <p>Lê Văn Thám, Tỉnh Lâm Đồng, TP Đà Lạt</p>
                                </Button>
                            </Col>
                            <Col xs={12} md={4} className='custom-margin mt-3 mb-3'>
                                <Button className="content_container-button" variant="">
                                    <FontAwesomeIcon className="content_container-button-icon" icon={faPhone} />&nbsp;&nbsp;
                                    <span className="content_container-title">Phone</span>&nbsp;
                                    <p>0768547186</p>
                                </Button>
                            </Col>
                            <Col xs={12} md={4} className='custom-margin mt-3 mb-3'>
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
                    <CarouselSlide />
                </Container>
            </div>
            <Footer/>
        </>
    )
}