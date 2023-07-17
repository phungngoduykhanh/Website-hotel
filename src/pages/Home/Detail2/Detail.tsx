import React from "react";
import './Detail.css'
export default function Detail() {
    return (
        <>
            <div className="container">
                <div className="row">

                    <div className="information-room">
                        <div className="double-room">
                            <h2>Double Room</h2>
                            <br />
                            <p>1 Double Beb 1m6</p>
                            <br />
                            <p>2 People</p>
                            <br />
                            <p>
                                The rooms are airy and luxurious, designed  <br />
                                the French architectural style. The door opens <br />
                                to see the green sky of the trees, making your <br />
                                heart dreamy, dreamy, romantic because of the <br />
                                freshness and tranquility of the natural scenery.
                            </p>

                        </div>
                        <div className="information-room-img">
                            <img className="information-room-photo" src="https://id.bluejaypms.com/Uploads/7408/0b37426b-6d13-4388-ac37-7ccbf1e8d63d.jpeg" />
                        </div>

                    </div>
                    <div className="taitel">
                        <div>
                            <h2>Gallery</h2>
                        </div>
                        <div>
                            <h2>Amenities</h2>
                        </div>
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div className="delail-room">
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
                    </div>
                    <hr />
                    <div>
                        <h1 className="taitel-room-suites">Room & Suites</h1>
                    </div>
                    <div className="photo-room">
                        <div className="room-one">
                            <img className="photo-room-one" src="https://id.bluejaypms.com/Uploads/7405/2d26b2d9-8f4d-49bd-88ec-d5a6f7a2316c.jpeg" alt="" />
                        </div>
                        <div className="room-tow">
                            <img className="photo-room-one" src="https://id.bluejaypms.com/Uploads/7406/55b2653e-3777-4639-acde-4719db145c73.jpg" alt="" />
                        </div>
                        <div className="room-three">
                            <img className="photo-room-one" src="https://id.bluejaypms.com/Uploads/7407/0c94522c-6604-4aac-8754-856f1cbcd333.jpeg" alt="" />
                        </div>
                    </div>



                </div>
            </div>

        </>
    )
}