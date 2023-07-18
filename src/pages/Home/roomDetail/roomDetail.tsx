import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../roomDetail/roomDetail.css';
// import Container from 'react-bootstrap/Container';
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons'
import { auto } from '@popperjs/core';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Stack from 'react-bootstrap/Stack';
// import PopupGallery from './popupGallery';
const RoomDetail: React.FC = () => {
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
    ];

    // Function to handle opening the lightbox
    const openLightbox = (index: number): void => {
        setPhotoIndex(index);
        setIsOpen(true);
    };
    return (
        <>
            <Container className='container'>
                <Row className='roomdetail'>
                    <Col xs={auto} md={8}>
                        <h4>Double Room</h4><br />
                        <p><FontAwesomeIcon icon={faBed} /><span>: 1 double bed 1m6</span>
                            <br />
                            <FontAwesomeIcon icon={faPerson} /> <span>: 2 people</span>
                        </p>
                        <p>
                            The rooms are airy and luxurious, designed in the French architectural style. The door opens to <br />
                            see the green sky of the trees, making your heart dreamy, dreamy, romantic because of the freshness<br />
                            and tranquility of the natural scenery. <br /><br />

                            Double room (abbreviated DBL) is a room type with 1 large bed, suitable for families including husband <br />
                            and wife, 1 small child or those traveling alone who want comfort and spaciousness. The carriage can be<br />
                            queen size bed or a king size bed. Regular double rooms have minimum area of ​​11m2 with a width of 2.5m2. <br />
                            The room includes full amenities such as private bathroom, television, fan, air conditioner, .... <br />
                            Double Room can also be divided into Standard Double Room, Deluxe Double Room, etc.<br />
                        </p>
                    </Col>
                    <Col xs={auto} md={4}>
                        <Image src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/403210771.jpg?k=ef1e5cbec80e7ee5c31a55b3ecad9252eef7d0001bd45c2b11b27fb0fa19c5b9&o=&hp=1" width={'80%'} height={'90%'} />
                    </Col>

                </Row>
                <Row className='gallery'>
                    <ul>
                        <li className='hr'><a href="/detail">Gallery</a></li>
                        <li><a href="/amenities">Amenities</a></li>
                    </ul><hr />
                    {/* Gallery */}
                    {images.map((image: string, index: number) => (
                        <Col xs={'auto'} md={3} key={index}>
                      
                                <div className="image-wrapper">
                                    <Image
                                        src={image}
                                        onClick={() => openLightbox(index)}
                                        className='images'
                                    />
                                    <div className="overlay" onClick={() => openLightbox(index)}></div>
                                </div>
                           
                        </Col>
                    ))}
                </Row><br /><br />
                {/* Your existing code */}
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + images.length - 1) % images.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)
                        }
                    />
                )}
                <Row>
                    <h3 className='title'>Room & Suites</h3><hr />
                    <Col xs={auto} md={4}>
                        <div className='hovers'>
                            <figure><Image className='image' src="./image/image 9.png" /></figure>
                            <p className='content'>Comfort Triple Room - Basement</p>
                        </div>
                    </Col>
                    <Col xs={auto} md={4}>
                        <div className='hovers'>
                            <figure><Image className='image' src="./image/image 10.png" /></figure>
                            <p className='content'>Standard Studio</p>
                        </div>
                    </Col>
                    <Col xs={auto} md={4}>
                        <div className='hovers'>
                            <figure><Image className='image' src="./image/image 11.png" /></figure>
                            <p className='content'>Double Room</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default RoomDetail;
