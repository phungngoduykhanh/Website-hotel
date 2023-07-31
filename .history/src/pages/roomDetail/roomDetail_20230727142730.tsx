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
    const [document1] = usePrismicDocumentByUID('hotelroom', 'double-room');
    const [document2] = usePrismicDocumentByUID('hotelroom', 'comfort-room');
    // const [isOpen, setIsOpen] = useState<boolean>(false);
    // const [photoIndex, setPhotoIndex] = useState<number>(0);
    // const images: string[] = [
    //     'https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/339312970_167853539505248_3639495299482423105_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=1gOhCXCGxJwAX9rYTtU&_nc_ht=scontent.fdad1-1.fna&oh=00_AfBJeiH6pkksJcPFOSy2NMMIXyG-lgSxyiWEHyKrhBcmZQ&oe=64BAE52F',
    //     'https://noithatrakhoi.com/wp-content/uploads/2019/11/phong-tam-khach-san-phong-cach-tan-co-dien.jpg',
    //     'https://scontent.fhan5-1.fna.fbcdn.net/v/t39.30808-6/339302198_1239493000323597_4491468313206379257_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ANLYv1qYtWAAX8JDnTs&_nc_ht=scontent.fhan5-1.fna&oh=00_AfAnzOVu_AJGtZwQWwBvYzpU4snFB-SvJsqv4dhpQkJ97g&oe=64BC124F',
    //     'https://i.pinimg.com/564x/e7/27/9f/e7279fecb5fd093457b2a8a2ca175a5c.jpg',
    //     'https://id.bluejaypms.com/Uploads/5496/dfc893ab-f25b-4db3-8add-36b6849c751c.jpeg',
    //     'https://i.pinimg.com/736x/cd/c2/7a/cdc27a728076c2be3c67e01c5cecb15a.jpg',
    //     'https://id.bluejaypms.com/Uploads/7405/2d26b2d9-8f4d-49bd-88ec-d5a6f7a2316c.jpeg',
    //     'https://cf.bstatic.com/xdata/images/hotel/max1024x768/391093785.jpg?k=d85ef47d00cbd27095ad5c9a48e6fd6f6b27ce95af54caa1f49f19b344df783a&o=&hp=1',
    //     'https://i.pinimg.com/564x/3b/d5/0e/3bd50e1af874fbd3b0b6a43d3bfa94ed.jpg',
    //     'https://i.pinimg.com/564x/67/50/25/6750256927bc1ec86f32ca09af4c4e32.jpg',
    // ];
    type DocumentItem = {
        linkimg: string;
        // Các thuộc tính khác của đối tượng, nếu có.
      };
  const document3: DocumentItem[] = [
    // Thông tin về các đối tượng trong mảng 'document' của bạn.
  ];

  // Cài đặt trạng thái cho Lightbox
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Hàm mở Lightbox
  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };
    return (
        <>
            <Header />
            <Container className='container-fluid '>
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
                <Row>
                    <Col xs={12} md={12} lg={12}>
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
                    </Col>
                </Row>
                <Row className="gallery justify-content-start">
        {document3.map((item, index) => (
          <Col key={index} data-aos="fade-up" data-aos-duration="500" xs={12} sm={6} md={6} lg={4}>
            <div className="image-wrapper-roomdetail d-flex justify-content-center">
              <img
                src={item.linkimg} // Thay thế 'data.linkimg' bằng 'item.linkimg'
                onClick={() => openLightbox(index)}
                className="images-roomdetail"
              />
              <div className="overlay-roomdetail d-flex justify-content-center" onClick={() => openLightbox(index)}></div>
            </div>
          </Col>
        ))}
      </Row>

      {/* Mã hiện tại của bạn cho Lightbox */}
      {isOpen && (
        <Lightbox
          mainSrc={document3[photoIndex].linkimg} // Thay thế 'data.linkimg[photoIndex]' bằng 'document[photoIndex].linkimg'
          nextSrc={document3[(photoIndex + 1) % document.length].linkimg} // Thay thế 'data.linkimg[(photoIndex + 1) % images.length]' bằng 'document[(photoIndex + 1) % document.length].linkimg'
          prevSrc={document3[(photoIndex + document.length - 1) % document.length].linkimg} // Thay thế 'data.linkimg[(photoIndex + data.linkimg.length - 1) % data.linkimg.length]' bằng 'document[(photoIndex + document.length - 1) % document.length].linkimg'
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + document.length - 1) % document.length)} // Thay thế 'data.linkimg.length' bằng 'document.length'
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % document.length)} // Thay thế 'images.length' bằng 'document.length'
        />
      )}
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
                        <Link
                            to="/detailroom"
                            className="text-decoration-none text-dark"
                        >
                            <div className="bg-white cafita overflow-hidden p-3 shadow rounded">
                                {document1 && (<PrismicImage className="w-100 img-fluid" field={document1.data.link_img} style={{
                                    objectFit: "cover",
                                    height: "280px",
                                    maxHeight: "280px",
                                    maxWidth: "250px",
                                }}
                                />
                                )}
                                <h4
                                    className="pt-3 mb-1"
                                    style={{
                                        // textShadow: "1px 0 0px #080808",
                                        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                                        fontSize: "20px",
                                    }}
                                >
                                    {document1 && (<PrismicRichText field={document1.data.name_room} />
                                    )}
                                </h4>
                                <div className="d-flex justify-content-between">
                                    <p
                                        className=" mb-1 pt-2"
                                        style={{ letterSpacing: "3px" }}
                                    >
                                        {document1 && (<PrismicRichText field={document1.data.people} />
                                    )}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col data-aos="fade-up" data-aos-duration="500" className='type-roomdetail1' xs={12} md={12} lg={3}>
                        <div className="bg-white cafita overflow-hidden p-3 shadow rounded">
                            {document2 && (<PrismicImage className="w-100 img-fluid" field={document2.data.link_img} style={{
                                objectFit: "cover",
                                height: "280px",
                                maxHeight: "280px",
                                maxWidth: "250px",
                            }}
                            />
                            )}
                            <h4
                                className="pt-3 mb-1"
                                style={{
                                    // textShadow: "1px 0 0px #080808",
                                    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                                    fontSize: "20px",
                                }}
                            >
                                {document2 && (<PrismicRichText field={document2.data.name_room} />
                                )}
                            </h4>
                            <div className="d-flex justify-content-between">
                                <p
                                    className=" mb-1 pt-2"
                                    style={{ letterSpacing: "3px" }}
                                >
                                       {document2 && (<PrismicRichText field={document2.data.people} />
                                    )}
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col data-aos="fade-up" data-aos-duration="500" className='type-roomdetail1' xs={12} md={12} lg={3}>
                        <div className="bg-white cafita overflow-hidden p-3 shadow rounded">
                            {document && (<PrismicImage className="w-100 img-fluid" field={document.data.link_img} style={{
                                objectFit: "cover",
                                height: "280px",
                                maxHeight: "280px",
                                maxWidth: "250px",
                            }}
                            />
                            )}
                            <h4
                                className="pt-3 mb-1"
                                style={{
                                    // textShadow: "1px 0 0px #080808",
                                    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                                    fontSize: "20px",
                                }}
                            >
                                {document && (<PrismicRichText field={document.data.name_room} />
                                )}
                            </h4>
                            <div className="d-flex justify-content-between">
                                <p
                                    className=" mb-1 pt-2"
                                    style={{ letterSpacing: "3px" }}
                                >
                                       {document && (<PrismicRichText field={document.data.people} />
                                    )}
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
