import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './roomDetail.css';
import { Container, Row, Col, Nav } from 'react-bootstrap'
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

export default function RoomDetail() {
    useEffect(() => {
        AOS.init();
    }, []);

    const { id } = useParams();
    var id_room = "";
    if (id) {
        id_room = id;
    }

    const [document] = usePrismicDocumentByUID('hotelroom', id_room);
    console.log('hotelroom', document)
    const [room1] = usePrismicDocumentByUID('hotelroom', "1");
    const [room2] = usePrismicDocumentByUID('hotelroom', "2");
    const [room3] = usePrismicDocumentByUID('hotelroom', "3");

    // const [document] = usePrismicDocumentByUID('hotelroom', '1');
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [photoIndex, setPhotoIndex] = useState<number>(0);

    const openLightbox = (index: number): void => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    const images: string[] = (document as any)?.data?.body[0]?.items?.map(
        (items: { linkimg: { url: any } }) => items.linkimg?.url
    ) || [];

    // Function to handle opening the lightbox

    return (
        <>
            <Header />
            <Container className='container-fluid '>
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
                                <PrismicImage className='justify-content-end' field={document.data.link_img} width={'90%'} height={'90%'} />
                            </Col></>)}
                </Row>
                <Row>
                <Col xs={12} md={1} lg={1}></Col>
                    <Col xs={12} md={10} lg={10}>
                        <Nav
                            style={{
                                display: "flex",
                                marginTop: "3rem",
                                gap: "1rem",
                                paddingLeft: "2rem",
                                marginBottom: "50px"
                            }}
                            variant="tabs"
                            defaultActiveKey="/home"
                            activeKey="link-1"

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
                                            href={`/detailroom/${document.id}`}
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
                                        href={`/amenities/${document.id}`}
                                    >
                                        Amenities
                                    </Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Col>
                <Col xs={12} md={1} lg={1}></Col>
                </Row>
                <Row className="gallery justify-content-center">
                    <div className="row my-4">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div className="row ">
                                {images.map((image: string, index: number) => (
                                    <div data-aos="fade-up" data-aos-duration="500" className="col-lg-3 col-md-6 p-3 ">
                                        <div className="image-wrapper-roomdetail d-flex justify-content-center">
                                        <img
                                            src={image}
                                            onClick={() => openLightbox(index)}
                                            alt={`Image ${index}`}
                                            className="images-roomdetail"
                                        //   style={{ objectFit: "cover", height: "250px" }}
                                        />
                                        <div className="overlay-roomdetail" onClick={() => openLightbox(index)}></div>
                                    </div>
                                    </div>
                                ))}
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={images[photoIndex]}
                                        nextSrc={images[(photoIndex + 1) % images.length]}
                                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                        onCloseRequest={() => setIsOpen(false)}
                                        onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                                        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>

                    {/* {images.map((image: string, index: number) => (
                        <Col key={index} data-aos="fade-up" data-aos-duration="500" xs={12} sm={6} md={6} lg={4}>
                            <div className="image-wrapper-roomdetail d-flex justify-content-center">
                                <img
                                    src={image}
                                    onClick={() => openLightbox(index)}
                                    className="images-roomdetail"
                                    alt={`Image ${index}`}
                                />
                                <div className="overlay-roomdetail" onClick={() => openLightbox(index)}></div>
                            </div>
                        </Col>
                    ))} */}
                </Row>

                {/* Your existing code for Lightbox */}
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                    />
                )}
                <br /><br />
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

