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
    // useEffect(() => {
    //     if(documents && documents.length > 0){
    //         console.log('hello: ', documents)
    //       }
    // },[documents])

    useEffect(() => {
        AOS.init();
    }, []);
    
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [photoIndex, setPhotoIndex] = useState<number>(0);

    const images: string[] = documents?.flatMap((documents) => {
        return documents.data.body[0].items.map((item: { link_image: { url: any; }; }) => {
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
                <Col xs={1} md={1} lg={1}></Col>
                <Col xs={10} md={10} lg={10} >
                    <h3 className='justify-content-center text-gallery'>Gallery</h3><hr />
                </Col>
                <Col xs={1} md={1} lg={1}></Col>
                </Row><br /><br />
                <Row className="gallery justify-content-center">
                    <div className="row my-4">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div className="row ">
                                {images.map((image: string, index: number) => (
                                    <div data-aos="fade-up" data-aos-duration="500" className="col-lg-3 col-md-6 p-3">
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

