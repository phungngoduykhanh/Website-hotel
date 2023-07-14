import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../roomDetail/roomDetail.css';
import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
import { Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons'
const RoomDetail = () => {
    return (
        <>
            <Container className='container'><br /><br /><br />
                <Row>
                    <Col sm={8}>
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

                    <Col sm={4}>
                        <Image src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/403210771.jpg?k=ef1e5cbec80e7ee5c31a55b3ecad9252eef7d0001bd45c2b11b27fb0fa19c5b9&o=&hp=1" width={'80%'} height={'90%'} />
                    </Col>

                </Row>
                <Row>
                    <ul>
                        <li className='hr'><a href="/">Gallery</a></li>
                        <li><a href="/">Amenities</a></li>
                    </ul><hr />
                    <Col className='gallery' sm={4}>
                        <Image src="./image/image 1.png" />
                        <Image src="./image/image 2.png" />
                        <Image src="./image/image 3.png" />
                    </Col><br />
                    <Col className='gallery' sm={4}>
                        <Image src="./image/image 4.png" />
                        <Image src="./image/image 5.png" />
                        <Image src="./image/image 6.png" />
                    </Col><br />
                    <Col className='gallery' sm={4}>
                        <Image src="./image/image 7.png" />
                        <Image src="./image/image 8.png" />
                    </Col><br /><br /><br /><hr />
                </Row>
                <Row>
                    <h3 className='title'>Room & Suites</h3>
                    <Col sm={4}>
                    <Image src="./image/image 9.png" />
                    </Col>
                    <Col sm={4}>
                    <Image src="./image/image 10.png" />
                    </Col>
                    <Col sm={4}>
                    <Image src="./image/image 11.png" />
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default RoomDetail;
