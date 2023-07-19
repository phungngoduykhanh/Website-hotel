import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/roomDetail.css';
import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
import { Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons'
import { auto } from '@popperjs/core';
import Stack from 'react-bootstrap/Stack';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Amenities = () => {
    useEffect(() => {
        AOS.init();
    }, []);
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
                        <p className='text'>
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
                <Row>
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

export default Amenities;

function useEffect(arg0: () => void, arg1: never[]) {
    throw new Error('Function not implemented.');
}
