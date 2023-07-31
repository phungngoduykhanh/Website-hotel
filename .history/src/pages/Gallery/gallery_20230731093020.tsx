import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';
import '../roomDetail/roomDetail.css'
import { useAllPrismicDocumentsByType } from '@prismicio/react'


const Gallery: React.FC = () => {
  const [gallery] = useAllPrismicDocumentsByType('gallery');

  
    useEffect(() => {
        //init image data


        AOS.init();
    }, []);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [photoIndex, setPhotoIndex] = useState<number>(0);
    const images: string[] = [
        'https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/339312970_167853539505248_3639495299482423105_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=1gOhCXCGxJwAX9rYTtU&_nc_ht=scontent.fdad1-1.fna&oh=00_AfBJeiH6pkksJcPFOSy2NMMIXyG-lgSxyiWEHyKrhBcmZQ&oe=64BAE52F',
        'https://noithatrakhoi.com/wp-content/uploads/2019/11/phong-tam-khach-san-phong-cach-tan-co-dien.jpg',
        'https://scontent.fhan5-1.fna.fbcdn.net/v/t39.30808-6/339302198_1239493000323597_4491468313206379257_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ANLYv1qYtWAAX8JDnTs&_nc_ht=scontent.fhan5-1.fna&oh=00_AfAnzOVu_AJGtZwQWwBvYzpU4snFB-SvJsqv4dhpQkJ97g&oe=64BC124F',
        'https://i.pinimg.com/564x/e7/27/9f/e7279fecb5fd093457b2a8a2ca175a5c.jpg',
        'https://id.bluejaypms.com/Uploads/5496/dfc893ab-f25b-4db3-8add-36b6849c751c.jpeg',
        'https://i.pinimg.com/736x/cd/c2/7a/cdc27a728076c2be3c67e01c5cecb15a.jpg',
        'https://id.bluejaypms.com/Uploads/7405/2d26b2d9-8f4d-49bd-88ec-d5a6f7a2316c.jpeg',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/391093785.jpg?k=d85ef47d00cbd27095ad5c9a48e6fd6f6b27ce95af54caa1f49f19b344df783a&o=&hp=1',
        'https://i.pinimg.com/564x/3b/d5/0e/3bd50e1af874fbd3b0b6a43d3bfa94ed.jpg',
        'https://i.pinimg.com/564x/67/50/25/6750256927bc1ec86f32ca09af4c4e32.jpg',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/390794818.jpg?k=3cc7b71d4bfa5cd8d285d83f2f3880e961a1a94655210d1541ff4e9d747740d2&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/171606606.jpg?k=b69211bbd0d331439d5f79ccdee3f1989238a3a0646d19c5cb4453515409b79a&o=&hp=1'
    ];
    // Function to handle opening the lightbox
    const openLightbox = (index: number): void => {
        setPhotoIndex(index);
        setIsOpen(true);
    };
    return (
        <>
        <Header/>
            <Container className='container-fluid'><br /><br />
                <Row>
                <Col xs={1} ></Col>
                <Col xs={10} md={12} lg={12} >
                    <h3 className='justify-content-center text-gallery'>Gallery</h3><hr />
                </Col>
                <Col xs={1}></Col>
                </Row><br /><br />
                <Row className="gallery justify-content-start">
                    {images.map((image: string, index: number) => (
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
                    ))}
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
            </Container><br /><br />
            <Footer/>
        </>
    )
}
export default Gallery;

