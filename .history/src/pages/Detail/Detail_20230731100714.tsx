import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import img5 from "../../assets/images/phongnghi5.jpg";
import img1 from "../../assets/images/phongnghi1.jpeg";
import img2 from "../../assets/images/phongnghi2.jpg";
import img3 from "../../assets/images/phongnghi3.jpeg";
import img4 from "../../assets/images/phongnghi4.jpeg";
import img6 from "../../assets/images/phongnghi6.jpg";
import hinhanh1 from "../../assets/images/hinhanh1.jpg";
import hinhanh2 from "../../assets/images/hinhanh2.jpg";
import hinhanh3 from "../../assets/images/hinhanh3.jpg";
import hinhanh4 from "../../assets/images/hinhanh4.jpg";
import hinhanh5 from "../../assets/images/hinhanh5.jpg";
import { AiOutlineCheck } from "react-icons/ai";
import "../Detail/Detail.css";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import { useAllPrismicDocumentsByType, useSinglePrismicDocument } from "@prismicio/react";
const Detail: React.FC = () => {
  const [activeTab, setActiveTab] = useState("link-1");

  const handleTabchange = (eventKey: string | null) => {
    if (eventKey) {
      setActiveTab(eventKey);
    }
  };
  
  const [documents] = useAllPrismicDocumentsByType("hotelroom");
  const [hotelKTX] = useSinglePrismicDocument("hotel")
  const limitedRooms = hotelKTX && hotelKTX.slice(0, );

  if (!documents || documents.length === 0) {
    return null;
  }

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
          <div className="row">
            {documents.map((docs, index) => {
              const { data } = docs;
              return (
                <div key={index} className="col-md-4 mb-4 my-4">
                  <Link
                    to={`/detailroom/${docs.uid}`}
                    className="text-decoration-none text-dark"
                  >
                    <div className="bg-white cafita overflow-hidden p-3 shadow rounded">
                      <img
                        src={data.link_img.url}
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
                          textAlign: "center",
                          textShadow: "1px 0 1px #080808",
                          fontFamily: "Lora, serif",
                        }}
                      >
                        {data.name_room[0].text}
                      </h4>
                        <p
                          className=" mb-1 pt-2 "
                          style={{ letterSpacing: "3px", textAlign:"center" }}
                        >
                          {data.people[0].text}
                        </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else if (activeTab === "link-2") {
      return (
        <div className="container vh-100">
          <div className="row">
            <div className="row my-4">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <div className="row">
                  <div className="col-md-3">
                    <img
                      src={hinhanh1}
                      alt=""
                      className="w-100 img-fluid"
                      style={{ objectFit: "cover", height: "250px" }}
                    ></img>
                  </div>
                  <div className="col-md-3">
                    <img
                      src={hinhanh2}
                      alt=""
                      className="w-100 img-fluid"
                      style={{ objectFit: "cover", height: "250px" }}
                    ></img>
                  </div>
                  <div className="col-md-3">
                    <img
                      src={hinhanh3}
                      alt=""
                      className="w-100 img-fluid"
                      style={{ objectFit: "cover", height: "250px" }}
                    ></img>
                  </div>
                  <div className="col-md-3">
                    <img
                      src={hinhanh4}
                      alt=""
                      className="w-100 img-fluid"
                      style={{ objectFit: "cover", height: "250px" }}
                    ></img>
                  </div>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>

            <div className="row my-4">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <div className="row">
                  <div className="col-md-3">
                    <img
                      src={hinhanh5}
                      alt=""
                      className="w-100 img-fluid"
                      style={{ objectFit: "cover", height: "250px" }}
                    ></img>
                  </div>
                  <div className="col-md-3">
                    <img
                      src={img2}
                      alt=""
                      className="w-100 img-fluid"
                      style={{ objectFit: "cover", height: "250px" }}
                    ></img>
                  </div>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === "link-3") {
      return (
        <div className="container vh-100">
          <div className="row">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <h3 className="pt-3" style={{ fontFamily: "Lora, serif" }}>
                  Tiện Nghi
                </h3>
              </div>
              <div className="col-md-1"></div>
            </div>
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
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
      <div style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <h1 className=" pt-3 pb-3" style={{ fontFamily: "Lora, serif" }}>
                Dalat Feliz Homestay
              </h1>
              <p>
                Feliz Dalat Homestay nằm trên một con phố bích họa nổi tiếng
                giữa trung tâm Đà lạt, phía sau lưng của phố tây Trương Công
                Định, gần Quảng trường Lâm Viên, Hồ Xuân Hương và Biệt thự Hằng
                Nga (Crazy House).
              </p>
              <p>
                Chúng tôi có WiFi miễn phí và sảnh khách chung, mỗi phòng có
                Smart TV (Youtube, Netflix, Prime Video), tủ lạnh, minibar, ấm
                đun nước siêu tốc và phòng tắm riêng với dép đi trong phòng, máy
                sấy tóc cùng vòi xịt/chậu rửa vệ sinh.
              </p>
              <p>
                Về ẩm thực, chúng tôi hợp tác với các quán ăn đặc sản xung quanh
                dốc nhà làng cung cấp nhiều lựa chọn mỗi sáng: bún bò, mì quảng,
                bánh căn, hủ tiếu. Quý khách có thể ăn tại quán hoặc yêu cầu
                mang tới phòng khách chung của homestay.
              </p>
              <p>
                Quý khách có thể thuê xe máy, xe hơi tại đây. Sân bay gần nhất
                là sân bay Liên Khương, cách homestay 31 km. Chúng tôi cũng cung
                cấp dịch vụ đưa đón sân bay có tính phí nhưng chúng tôi khuyên
                quý khách nên sử dụng taxi tại sân bay vì có giá tốt nhất .
                Feliz Dalat Homestay được xây dựng trong thời gian 2 năm COVD và
                hoàn thiện đi vào hoạt động vào đầu tháng 10 năm 2022
              </p>
            </div>
            <div className="col-md-1"></div>
          </div>

          <div className="mobile-tab-container">
            <Nav
              className="mobile-tab"
              style={{
                display: "flex",
                marginTop: "3rem",
                gap: "1rem",
                paddingLeft: "5.8rem",
                color: "black",
              }}
              variant="tabs"
              defaultActiveKey="/home"
              activeKey={activeTab}
              onSelect={handleTabchange}
            >
              <Nav.Item>
                <Nav.Link className="navlink-detail" eventKey="link-1">
                  Rooms
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2" className="navlink-detail">
                  Photos
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navlink-detail" eventKey="link-3">
                  Amenities and Policies
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
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
