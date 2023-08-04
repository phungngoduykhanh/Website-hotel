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

  const [documents] = useAllPrismicDocumentsByType('gallery');
    useEffect(() => {
        if(documents && documents.length > 0){
            console.log('hello: ', documents)
          }
    },[documents])

    useEffect(() => {
        AOS.init();
    }, []);
    
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [photoIndex, setPhotoIndex] = useState<number>(0);

    const images: string[] = documents?.flatMap((document) => {
        return document.data.body[0].items.map((item: { link_image: { url: any; }; }) => {
          // Replace 'link_image' with the actual key that holds the image link in your Prismic document
          return item.link_image?.url;
        });
      }) || [];

    // Function to handle opening the lightbox
    function openLightbox(index: number): void {
        setPhotoIndex(index);
        setIsOpen(true);
    }
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

