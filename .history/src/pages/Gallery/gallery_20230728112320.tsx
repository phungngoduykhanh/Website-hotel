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
import { usePrismicDocumentByUID, PrismicRichText, PrismicImage, useAllPrismicDocumentsByType } from '@prismicio/react'

export default function Gallery() {
    useEffect(() => {
        AOS.init();
    }, []);
    const [Image] = useAllPrismicDocumentsByType('gallery');

    // Check if the Image data is available and not empty
    if (Image && Image.data && Image.data.body && Image.data.body.items) {
      const prismicImages = Image.data.body.items;
  
      // Create a new array to hold the image URLs from Prismic
      const prismicImageUrls = [];
  
      // Iterate through the Prismic image data and extract the link_image property
      for (const item of prismicImages) {
        if (item.link_image && item.link_image.url) {
          prismicImageUrls.push(item.link_image.url);
        }
      }
  
      // Now, update the original images array with the Prismic image URLs
      const images = [...prismicImageUrls];
  
      // Lightbox state
      const [isOpen, setIsOpen] = React.useState(false);
      const [photoIndex, setPhotoIndex] = React.useState(0);
  
      // Function to open the Lightbox
      const openLightbox = (index) => {
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


