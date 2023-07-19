import React from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Detail.scss';
import { Container, Col, Row } from "react-bootstrap";
export default function Detail() {
    return (
        <>
            <Container>
                <Row >
                    <Col xs={12} md={6}>
                        <div className="double-room">
                            <h2 className="name-double-room">Double Room</h2>
                            <br />
                            <p className="delailss"><i className="fa-solid fa-bed"></i> 1 Double Beb 1m6</p>
                            <br />
                            <p className="information-people"><i className="fa-solid fa-person"></i> 2 People</p>
                            <br />
                            <p className="information-detail-room">
                                The rooms are airy and luxurious, designed  <br />
                                the French architectural style. The door opens <br />
                                to see the green sky of the trees, making your <br />
                                heart dreamy, dreamy, romantic because of the <br />
                                freshness and tranquility of the natural scenery.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="">
                            <img className="img-fluid" src="https://id.bluejaypms.com/Uploads/7408/0b37426b-6d13-4388-ac37-7ccbf1e8d63d.jpeg" />
                        </div>
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col xs={6} md={4} className="taitel">
                        <div>
                            <h2 className="gallery">Gallery</h2>
                        </div>
                        <div>
                            <h2 className="amenities">Amenities</h2>
                        </div>
                        <br />
                        <br />
                    </Col>
                </Row>
                <hr />
                <Row className="delail-allroom">
                    <Col xs={12} md={9} className="delail-room-right">
                        <div className="delail-room-right">
                            <ul>
                                <li>
                                    Thời gian- Phục Vụ: 24/24.
                                </li>
                                <li>Tặng 02 chai nước và khăn lạnh</li>
                                <li>Phòng tiêu chuẩn 1 giường đôi, giá 400.000 đ/đêm</li>
                                <li>Phòng tiêu chuẩn 2 giường đôi, giá 500.000 đ/đêm</li>
                                <li>Phục Vụ: Chuyên Nghiệp, Niềm Nở,Chân Tình để mỗi kỳ<br />
                                    nghỉ không chỉ lưu lại kỷ niệm đẹp trong lòng du khách <br />
                                    mà còn Thăng Hoa Cuộc Sống,Giữ Mãi Cho Mình Nét Thanh Xuân.</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="delail-room">
                        <div className="delail-room-left">
                            <ul>
                                <li>Phòng tắm riêng</li>
                                <li>Wifi miễn phí</li>
                                <li>Hướng vườn</li>
                                <li>Vòi nước nóng / lạnh</li>
                                <li>Bồn tắm đứng</li>
                                <li>Bàn làm việc</li>
                                <li>02 dép</li>
                                <li>02 chai nước suối mỗi ngày</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <br />
                <br />
                <hr />
                <Row>
                    <div>
                        <h1 className="taitel-room-suites">Room & Suites</h1>
                    </div>
                </Row>
                <br />
                <br />
                <Row>
                    <Col xs={12} md={4}>

                        <div className="room-one">
                            <img className="img-fluid" src="https://id.bluejaypms.com/Uploads/7405/2d26b2d9-8f4d-49bd-88ec-d5a6f7a2316c.jpeg" alt="" />
                        </div>

                    </Col>
                    <Col xs={12} md={4}>
                        <div className="room-tow">
                            <img className="img-fluid" src="https://id.bluejaypms.com/Uploads/7406/55b2653e-3777-4639-acde-4719db145c73.jpg" alt="" />
                        </div>

                    </Col>
                    <Col xs={12} md={4}>
                        <div className="room-three">
                            <img className="img-fluid" src="https://id.bluejaypms.com/Uploads/7407/0c94522c-6604-4aac-8754-856f1cbcd333.jpeg" alt="" />
                        </div>

                    </Col>


                </Row>
            </Container>

        </>

    )
}