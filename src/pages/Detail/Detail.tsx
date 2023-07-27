import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import img5 from "../../assets/images/phongnghi5.jpg";
import img1 from "../../assets/images/phongnghi1.jpeg";
import img2 from "../../assets/images/phongnghi2.jpg";
import img3 from "../../assets/images/phongnghi3.jpeg";
import img4 from "../../assets/images/phongnghi4.jpeg";
import img6 from "../../assets/images/phongnghi6.jpg";
import img9 from "../../assets/images/phongnghi9.jpeg";
import hinhanh1 from "../../assets/images/hinhanh1.jpg";
import hinhanh2 from "../../assets/images/hinhanh2.jpg";
import hinhanh3 from "../../assets/images/hinhanh3.jpg";
import hinhanh4 from "../../assets/images/hinhanh4.jpg";
import hinhanh5 from "../../assets/images/hinhanh5.jpg";
import { AiOutlineCheck } from "react-icons/ai";
import "../Detail/Detail.css";
import "../Detail/dispaly";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import {
  useSinglePrismicDocument,
  PrismicRichText,
  PrismicImage,
  usePrismicDocumentByUID,
} from "@prismicio/react";
import { BiX } from "react-icons/bi";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const Detail: React.FC = () => {
  const [activeTab, setActiveTab] = useState("link-1");

  const handleTabchange = (eventKey: string | null) => {
    if (eventKey) {
      setActiveTab(eventKey);
    }
  };

  const [documents] = useSinglePrismicDocument("hotel");

  const [docs] = usePrismicDocumentByUID("hotelroom", "double-room");

//   if (!documents || documents.length === 0) {
//     return null;
//   }
  const renderContent = () => {
    if (activeTab === "home") {
      return (
        <div>
          <Link to="/"></Link>
        </div>
      );
    } else if (activeTab === "link-1") {
      return (
        <div className="container">
			
          <div className="row row-ss3">
            <div className="col-6 col-md-4 room-top-ss3 content-ss3">
              <Link to="/detailroom" className="text-decoration-none text-dark">
                <div className="bg-white cafita overflow-hidden p-3 shadow rounded top-ss3 ">
				{docs && (<PrismicImage className="w-100 img-fluid" field={docs.data.link_img}
                    style={{
                      objectFit: "cover",
                      height: "250px",
                      maxHeight: "250px",
                      maxWidth: "250px",
                    }}
                  />
				)}
                  <h4
                    className="pt-3 mb-1"
                    style={{
                      textShadow: "1px 0 1px #080808",
                      fontFamily: "Lora, serif",
                    }}
                  > 
				<p>
					{docs && (<PrismicRichText field={docs.data.name_room} />)}
				</p>
                    
                  </h4>
                  <div className="d-flex justify-content-between">
                    <p
                      className=" mb-1 pt-2 p-top-ss3"
                      style={{ letterSpacing: "3px" }}
                    >
                      {docs && (<PrismicRichText field ={docs.data.people} />)}
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-6 col-md-4 room-top-ss3 content-ss3">
              <Link to="/detailroom" className="text-decoration-none text-dark">
                <div className="bg-white cafita overflow-hidden p-3 shadow rounded top-ss3">
                  <img
                    src={img2}
                    alt=""
                    className="w-100 img-fluid"
                    style={{
                      objectFit: "cover",
                      height: "250px",
                      maxHeight: "250px",
                      maxWidth: "250px",
                    }}
                  />
                  <h4
                    className="pt-3 mb-1"
                    style={{
                      textShadow: "1px 0 1px #080808",
                      fontFamily: "Lora, serif",
                    }}
                  >
                    Comfort Triple Room - Basement
                  </h4>
                  <div className="d-flex justify-content-between">
                    <p
                      className=" mb-1 pt-2 p-top-ss3"
                      style={{ letterSpacing: "3px" }}
                    >
                      4 Adult
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-4 room-top-ss3 content-ss3">
              <Link to="/detailroom" className="text-decoration-none text-dark">
                <div className="bg-white cafita overflow-hidden p-3 shadow rounded top-ss3 ">
                  <img
                    src={img3}
                    alt=""
                    className="w-100 img-fluid"
                    style={{
                      objectFit: "cover",
                      height: "250px",
                      maxHeight: "250px",
                      maxWidth: "250px",
                    }}
                  />
                  <h4
                    className="pt-3 mb-1"
                    style={{
                      textShadow: "1px 0 1px #080808",
                      fontFamily: "Lora, serif",
                    }}
                  >
                    Standard Studio
                  </h4>
                  <div className="d-flex justify-content-between">
                    <p
                      className=" mb-1 pt-2 p-top-ss3"
                      style={{ letterSpacing: "3px" }}
                    >
                      2 Adult 1 Child
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="row row-ss3">
            <div className="col-6 col-md-4 room-top-ss3 content-ss3">
              <Link to="/detailroom" className="text-decoration-none text-dark">
                <div className="bg-white cafita overflow-hidden p-3 shadow rounded top-ss3 ">
                  <img
                    src={img4}
                    alt=""
                    className="w-100 img-fluid"
                    style={{
                      objectFit: "cover",
                      height: "250px",
                      maxHeight: "250px",
                      maxWidth: "250px",
                    }}
                  />
                  <h4
                    className="pt-3 mb-1"
                    style={{
                      textShadow: "1px 0 1px #080808",
                      fontFamily: "Lora, serif",
                    }}
                  >
                    Double room
                  </h4>
                  <div className="d-flex justify-content-between">
                    <p
                      className=" mb-1 pt-2 p-top-ss3"
                      style={{ letterSpacing: "3px" }}
                    >
                      2 Adult
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-4 room-top-ss3 content-ss3">
              <Link to="/detailroom" className="text-decoration-none text-dark">
                <div className="bg-white cafita overflow-hidden p-3 shadow rounded top-ss3">
                  <img
                    src={img5}
                    alt=""
                    className="w-100 img-fluid"
                    style={{
                      objectFit: "cover",
                      height: "250px",
                      maxHeight: "250px",
                      maxWidth: "250px",
                    }}
                  />
                  <h4
                    className="pt-3 mb-1"
                    style={{
                      textShadow: "1px 0 1px #080808",
                      fontFamily: "Lora, serif",
                    }}
                  >
                    Comfort Triple Room - Basement
                  </h4>
                  <div className="d-flex justify-content-between">
                    <p
                      className=" mb-1 pt-2 p-top-ss3"
                      style={{ letterSpacing: "3px" }}
                    >
                      4 Adult
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-4 room-top-ss3 content-ss3">
              <Link to="/detailroom" className="text-decoration-none text-dark">
                <div className="bg-white cafita overflow-hidden p-3 shadow rounded top-ss3 ">
                  <img
                    src={img6}
                    alt=""
                    className="w-100 img-fluid"
                    style={{
                      objectFit: "cover",
                      height: "250px",
                      maxHeight: "250px",
                      maxWidth: "250px",
                    }}
                  />
                  <h4
                    className="pt-3 mb-1"
                    style={{
                      textShadow: "1px 0 1px #080808",
                      fontFamily: "Lora, serif",
                    }}
                  >
                    Standard Studio
                  </h4>
                  <div className="d-flex justify-content-between">
                    <p
                      className=" mb-1 pt-2 p-top-ss3"
                      style={{ letterSpacing: "3px" }}
                    >
                      2 Adult 1 Child
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === "link-2") {
      return (
        <div className="container ">
          <div className="row my-4 custom-margin mt-3 mb-3">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3 image">
                  <img
                    src={hinhanh1}
                    alt=""
                    className="w-100"
                    style={{ objectFit: "cover", height: "250px" }}
                  />
                </div>
                <div className="col-md-3 image">
                  <img
                    src={hinhanh2}
                    alt=""
                    className="w-100"
                    style={{ objectFit: "cover", height: "250px" }}
                  />
                </div>
                <div className="col-md-3 image">
                  <img
                    src={hinhanh3}
                    alt=""
                    className="w-100"
                    style={{ objectFit: "cover", height: "250px" }}
                  />
                </div>
                <div className="col-md-3 image">
                  <img
                    src={hinhanh4}
                    alt=""
                    className="w-100"
                    style={{ objectFit: "cover", height: "250px" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>

          <div className="row my-4 custom-margin mt-3 mb-3 ">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3 image">
                  <img
                    src={hinhanh5}
                    alt=""
                    className="w-100"
                    style={{ objectFit: "cover", height: "250px" }}
                  />
                </div>
                <div className="col-md-3 image">
                  <img
                    src={img9}
                    alt=""
                    className="w-100"
                    style={{ objectFit: "cover", height: "250px" }}
                  />
                </div>
              </div>

              <div className="gallery1">
                <div className="close">
                  <BiX />
                </div>
                <div className="gallery__inner">
                  <img src={hinhanh1} alt="" />
                </div>
                <div className="control prev">
                  <div>
                    <FiChevronLeft />
                  </div>
                </div>
                <div className="control next">
                  <div>
                    <FiChevronRight />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      );
    } else if (activeTab === "link-3") {
      return (
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10 custom-margin mt-3 mb-3 ">
                <h3 className="pt-3" style={{ fontFamily: "Lora, serif" }}>
                  Tiện Nghi
                </h3>
              </div>
              <div className="col-md-1"></div>
            </div>
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10 custom-margin mt-3 mb-3 ">
                <div className="row">
                  <div className="col-md-3">
                    <div
                      style={{
                        fontSize: "12px",
                        paddingTop: "5px",
                        fontFamily: "Cabin, sans-serif",
                      }}
                    >
                      <AiOutlineCheck /> Chỗ để xe miễn phí <br />
                      <AiOutlineCheck /> Cửa sổ <br />
                      <AiOutlineCheck /> Ấm đun nước <br />
                      <AiOutlineCheck /> Máy sấy tóc <br />
                      <AiOutlineCheck /> Dép lê <br />
                      <AiOutlineCheck /> Phụ phí đưa đón sân bay <br />
                      <AiOutlineCheck /> Ga trải giường <br />
                      <AiOutlineCheck /> Khăn mặt <br />
                      <AiOutlineCheck /> Truyền thông & Công nghệ
                      <br />
                      <AiOutlineCheck /> Phòng ngủ <br />
                      <AiOutlineCheck /> Chỗ đỗ xe <br />
                      <AiOutlineCheck /> Phòng khách
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div
                      style={{
                        fontSize: "12px",
                        paddingTop: "5px",
                        fontFamily: "Cabin, sans-serif",
                      }}
                    >
                      <AiOutlineCheck /> Wifi miễn phí <br />
                      <AiOutlineCheck /> Hướng thành phố <br />
                      <AiOutlineCheck /> Miễn phí trà, cà phê <br />
                      <AiOutlineCheck /> Đồ dùng nhà tắm miễn phí <br />
                      <AiOutlineCheck /> Thang máy <br />
                      <AiOutlineCheck /> Giường siêu lớn <br />
                      <AiOutlineCheck /> Kệ hành lý <br />
                      <AiOutlineCheck /> Dịch vụ dọn phòng <br />
                      <AiOutlineCheck /> Vật nuôi <br />
                      <AiOutlineCheck /> Phòng tắm <br />
                      <AiOutlineCheck /> Đồ uống và thức ăn <br />
                      <AiOutlineCheck /> Dịch vụ khác <br />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div
                      style={{
                        fontSize: "12px",
                        paddingTop: "5px",
                        fontFamily: "Cabin, sans-serif",
                      }}
                    >
                      <AiOutlineCheck /> Không vật nuôi <br />
                      <AiOutlineCheck /> Bàn làm việc <br />
                      <AiOutlineCheck /> Khăn tắm <br />
                      <AiOutlineCheck /> Toilet <br />
                      <AiOutlineCheck /> Dịch vụ thuê ô tô <br />
                      <AiOutlineCheck /> Nước uống đóng chai <br />
                      <AiOutlineCheck /> Phòng tắm đứng <br />
                      <AiOutlineCheck /> Dịch vụ kinh doanh <br />
                      <AiOutlineCheck /> Dịch vụ ngoài trời <br />
                      <AiOutlineCheck /> Tivi màn hình phẳng <br />
                      <AiOutlineCheck /> Các hoạt động <br />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div
                      style={{
                        fontSize: "12px",
                        paddingTop: "5px",
                        fontFamily: "Cabin, sans-serif",
                      }}
                    >
                      <AiOutlineCheck /> Ban công <br />
                      <AiOutlineCheck /> Sàn gỗ <br />
                      <AiOutlineCheck /> Vòi hoa sen <br />
                      <AiOutlineCheck /> Buồng tắm riêng <br />
                      <AiOutlineCheck /> Dịch vụ thuê xe máy <br />
                      <AiOutlineCheck /> Móc treo quần áo <br />
                      <AiOutlineCheck /> Thảm chân <br />
                      <AiOutlineCheck /> Dịch vụ giải trí và gia đình <br />
                      <AiOutlineCheck /> Hướng nhìn <br />
                      <AiOutlineCheck /> Wifi miễn phí <br />
                      <AiOutlineCheck /> Phương tiện đi lại <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <h3 className="pt-4" style={{ fontFamily: "Lora, serif" }}>
                  Chính Sách
                </h3>{" "}
                <br />
                <b style={{ fontFamily: "Lora, serif" }}>
                  Chính sách chung <hr />
                </b>
                <p>
                  1. Không hút thuốc trong phạm vi toà nhà và trong phòng. Nếu
                  vi phạm quý khách sẽ phải trả phí vệ sinh, khử mùi cũng như
                  tổn thất ảnh hưởng gián đoạn việc kinh doanh của chúng tôi.
                  Phí vi phạm có thể lên đến 500$.
                </p>
                <p>2. Thời gian cần giữ yên tĩnh: 22:00-06:00</p>
                <p>
                  3. Không được phép tiệc tùng, gây ồn ào trong phòng, toà nhà.
                </p>
                <p>
                  4. Thời gian nhân viên lễ tân hỗ trợ: 8:00 - 16:00. Chủ nhà:
                  7:00-800; 16:00-20:00
                </p>
                <p>
                  5. Cửa nhà mở từ 7:00 - 20:00, ngoài thời gian này khách tự
                  đóng mở cửa bằng thẻ phòng.
                </p>{" "}
                <br />
                <b style={{ fontFamily: "Lora, serif" }}>
                  Chính sách thanh toán <hr />{" "}
                </b>
                <p>Vui lòng thanh toán tiền cọc tới tài khoản:</p>
                <p>
                  TPBANK <br /> 00002530789 <br /> HOANG MANH HUNG
                </p>{" "}
                <br />
                <b style={{ fontFamily: "Lora, serif" }}>
                  Chính sách hủy <hr />{" "}
                </b>
                <p>
                  Hủy trước 7 ngày miễn phí, hủy trước 3 ngày mất 30% phí đặt
                  cọc, không tới hoặc mất 100% phí đặt cọc.{" "}
                </p>
                <p>
                  Tiền hoàn cọc cho khách sẽ được chuyển lại sau 1-3 ngày làm
                  việc.
                </p>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <Header />
      <div style={{ backgroundColor: "#f8f9fa", paddingBottom: "5%" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <h1 className=" pt-3 pb-3" style={{ fontFamily: "Lora, serif" }}>
                {documents && (
                  <PrismicRichText field={documents.data.hotelname} />
                )}
              </h1>
              <p>
                {documents && (
                  <PrismicRichText field={documents.data.detaileddescription} />
                )}
              </p>
            </div>
            <div className="col-md-1"></div>
          </div>

          <Nav
            style={{
              display: "flex",
              marginTop: "3rem",
              gap: "1rem",
              paddingLeft: "6.8rem",
              color: "black",
            }}
            variant="tabs"
            defaultActiveKey="/home"
            activeKey={activeTab}
            onSelect={handleTabchange}
          >
            <div className="row snake">
              <div className="col-md-3">
                <Nav.Item>
                  <Nav.Link className="navlink-detail" eventKey="link-1">
                    Rooms
                  </Nav.Link>
                </Nav.Item>
              </div>
              <div className="col-md-3">
                <Nav.Item>
                  <Nav.Link eventKey="link-2" className="navlink-detail">
                    Photos
                  </Nav.Link>
                </Nav.Item>
              </div>
              <div className="col-md-6">
                <Nav.Item>
                  <Nav.Link className="navlink-detail " eventKey="link-3">
                    Amenities & Policies
                  </Nav.Link>
                </Nav.Item>
              </div>
            </div>
          </Nav>
        </div>

        <div
          className="tab-content"
          style={{
            backgroundColor: "#fff",
            marginBottom: "80px",
          }}
        >
          {renderContent()}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
