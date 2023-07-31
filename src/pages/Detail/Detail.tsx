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
import {
  useAllPrismicDocumentsByType,
  useSinglePrismicDocument,
} from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { RichTextField } from "@prismicio/client";

const Detail: React.FC = () => {
  const [activeTab, setActiveTab] = useState("link-1");

  const handleTabchange = (eventKey: string | null) => {
    if (eventKey) {
      setActiveTab(eventKey);
    }
  };

  const [hotelPLC] = useSinglePrismicDocument("hotel");
  const [documents] = useAllPrismicDocumentsByType("hotelroom");
  const [getIMG] = useAllPrismicDocumentsByType("gallery");

  if (!documents || documents.length === 0 || !getIMG || getIMG.length === 0) {
    return null; // Return early if any of the data is not available or loading
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
                          // fontFamily: "Lora, serif",
                        }}
                      >
                        {data.name_room[0].text}
                      </h4>
                      <p
                        className=" mb-1 pt-2 "
                        style={{ letterSpacing: "3px", textAlign: "center" }}
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
        <div className="container">
          <div className="row my-4">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="row">
                {getIMG.map((document, index) => {
                  const { data } = document;
                  const imageUrl = data?.body[0].items?.link_image?.url || "";
                  return (
                    <div key={index} className="col-md-3">
                      <img
                        src={imageUrl}
                        alt=""
                        className="w-100 img-fluid"
                        style={{ objectFit: "cover", height: "250px" }}
                      ></img>
                    </div>
                  );
                })}
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
              <div className="col-md-10">
                <h3 className="pt-3 my-3">Tiện Nghi</h3>
              </div>
              <div className="col-md-1"></div>
            </div>
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10 custom-margin mt-3 mb-3 ">
                <div className="row">
                  {hotelPLC &&
                    hotelPLC.data &&
                    hotelPLC.data.body &&
                    hotelPLC.data.body[0].items.map(
                      (
                        item: { amenityname: RichTextField | null | undefined },
                        index: React.Key | null | undefined
                      ) => (
                        <div className="col-md-3" key={index}>
                          <ul>
                            <li
                              style={{
                                paddingTop: "5px",
                              }}
                            >
                              <PrismicRichText field={item.amenityname} />
                            </li>
                          </ul>
                        </div>
                      )
                    )}
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <h3 className="pt-4">Chính Sách</h3> <br />
                <b>
                  Chính sách chung <hr />
                </b>
                <p>
                  {hotelPLC && (
                    <PrismicRichText field={hotelPLC.data.hotelpolicy} />
                  )}
                </p>
                <br />
                <b>
                  {/* style={{ fontFamily: "Lora, serif" }} */}
                  Chính sách thanh toán <hr />{" "}
                </b>
                <p>Vui lòng thanh toán tiền cọc tới tài khoản:</p>
                <p>
                  {hotelPLC && (
                    <PrismicRichText field={hotelPLC.data.hotelpayment} />
                  )}
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
              <h1 className=" pt-3 pb-3">
                {hotelPLC && (
                  <PrismicRichText field={hotelPLC.data.hotelname} />
                )}
              </h1>
              <p>
                {hotelPLC && (
                  <PrismicRichText field={hotelPLC.data.detaileddescription} />
                )}
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
