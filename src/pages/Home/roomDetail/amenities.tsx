import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/roomDetail.css';
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons'
import { auto } from '@popperjs/core';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RoomDetail: React.FC = () => {
    useEffect(() => {
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
    ];

    // Function to handle opening the lightbox
    const openLightbox = (index: number): void => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    
    return (
        <>
            <Container className='container'>
                <Row data-aos="fade-up" className='roomdetail'>
                    <Col xs={auto} md={10} lg={7}>
                        <h4>Double Room</h4><br />
                        <p ><FontAwesomeIcon icon={faBed} /><span>: 1 double bed 1m6</span>
                            <br />
                            <FontAwesomeIcon icon={faPerson} /> <span>: 2 people</span>
                        </p>
                        <p>
                            The rooms are airy and luxurious, designed in the French architectural style. The door opens to <br />
                            see the green sky of the trees, making your heart dreamy, dreamy, romantic because of the freshness<br />
                            and tranquility of the natural scenery. <br /><br />

                            Double room (abbreviated DBL) is a room type with 1 large bed, suitable for families including husband 
                            and wife, 1 small child or those traveling alone who want comfort and spaciousness. The carriage can be
                            queen size bed or a king size bed. Regular double rooms have minimum area of ​​11m2 with a width of 2.5m2. 
                            The room includes full amenities such as private bathroom, television, fan, air conditioner, .... 
                            Double Room can also be divided into Standard Double Room, Deluxe Double Room, etc.<br />
                        </p>
                    </Col>
                    <Col data-aos="zoom-in-down" data-aos-duration="1000" xs={auto} md={12} lg={5}>
                        <Image src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/403210771.jpg?k=ef1e5cbec80e7ee5c31a55b3ecad9252eef7d0001bd45c2b11b27fb0fa19c5b9&o=&hp=1" width={'80%'} height={'90%'} />
                    </Col>

                </Row>
                <ul>
                    <li className='hr'><a href="/detail">Gallery</a></li>
                    <li><a href="/amenities">Amenities</a></li>
                </ul><hr />
                <Row className='amenities'>
                    <Col xs={auto} md={1}></Col>
                    <Col xs={auto} md={5}>
                        <p className='text'>
                            - Private bathroom <br />
                            - Free Wi-Fi<br />
                            - Garden view<br />
                            - Hot/cold faucet<br />
                            - Freestanding bathtub<br />
                            - Desk<br />
                            - 02 sandals<br />
                            - 02 bottles of mineral water per day
                        </p>
                    </Col>
                    <Col xs={auto} md={5}>
                        <p className='text'>- Time-Service: 24/24 <br />
                            - Free 02 bottles of water and cold towels <br />
                            - Standard room with 1 double bed, price 400,000 VND/night <br />
                            - Standard room with 2 double beds, price 500,000 VND/night <br />
                            - Service: Professionalism, Enthusiasm, Sincerity so that each holiday <br />
                            not only saves beautiful memories in the hearts of visitors but also <br />
                            Sublimes Life, Keeps Yourself Forever Youthful.
                        </p>
                    </Col>
                    <Col xs={auto} md={1}></Col>
                </Row><br /><br />
                <Row className='suites'>
                    <h3 className='title'>Room & Suites</h3><hr />
                    <Col data-aos="fade-up" data-aos-duration="500" xs={auto} md={auto} lg={4}>
                        <div className='hovers'>
                            <figure><Image className='image' src="./image/image 9.png" /></figure>
                            <p className='content'>Comfort Triple Room - Basement</p>
                        </div>
                    </Col>
                    <Col data-aos="fade-up" data-aos-duration="500" xs={auto} md={auto} lg={4}>
                        <div className='hovers'>
                            <figure><Image className='image' src="./image/image 10.png" /></figure>
                            <p className='content'>Standard Studio</p>
                        </div>
                    </Col>
                    <Col data-aos="fade-up" data-aos-duration="500" xs={auto} md={auto} lg={4}>
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
