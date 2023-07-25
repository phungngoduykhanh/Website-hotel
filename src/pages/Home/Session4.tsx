import React from 'react'
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap'

export default function Session4() {
  return (
    <Container className="content_people" data-aos="fade-up" >
                    <Row>
                        <h1 className="content_people-say">People Says</h1>
                    </Row><br /><br />
                    {/* <Row className="content_people-infor">                       */}
                    <Carousel >
                        <Carousel.Item>
                            <Row >
                                <Col md={4} className='d-flex justify-content-center  align-items-center flex-column'>
                                    <Image className="content_people-img" src="https://themewagon.github.io/sogo/images/person_1.jpg" roundedCircle /> <br />
                                    <p className="content_people-text">“A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”
                                    </p>
                                    <p className="content_people-text">
                                        -- Kieu
                                    </p>
                                </Col>
                                <Col md={4} className='d-flex justify-content-center  align-items-center flex-column'>
                                    <Image className="content_people-img" src="https://themewagon.github.io/sogo/images/person_2.jpg" roundedCircle /> <br />
                                    <p className="content_people-text">“A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”
                                    </p>
                                    <p className="content_people-text">
                                        -- Kieu
                                    </p>
                                </Col>
                                <Col md={4} className='d-flex justify-content-center  align-items-center flex-column'>
                                    <Image className="content_people-img" src="https://themewagon.github.io/sogo/images/person_3.jpg" roundedCircle /> <br />
                                    <p className="content_people-text">“A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”
                                    </p>
                                    <p className="content_people-text">
                                        -- Kieu
                                    </p>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item >
                            <Row >
                                <Col md={4} className='d-flex justify-content-center  align-items-center flex-column'>
                                    <Image className="content_people-img" src="https://themewagon.github.io/sogo/images/person_1.jpg" roundedCircle /> <br />
                                    <p className="content_people-text">“A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”
                                    </p>
                                    <p className="content_people-text">
                                        -- Kieu
                                    </p>
                                </Col>
                                <Col md={4} className='d-flex justify-content-center  align-items-center flex-column'>
                                    <Image className="content_people-img" src="https://themewagon.github.io/sogo/images/person_2.jpg" roundedCircle /> <br />
                                    <p className="content_people-text">“A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”
                                    </p>
                                    <p className="content_people-text">
                                        -- Kieu
                                    </p>
                                </Col>
                                <Col md={4} className='d-flex justify-content-center  align-items-center flex-column'>
                                    <Image className="content_people-img" src="https://themewagon.github.io/sogo/images/person_4.jpg" roundedCircle /> <br />
                                    <p className="content_people-text">“A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”
                                    </p>
                                    <p className="content_people-text">
                                        -- Kieu
                                    </p>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Container>
  )
}
