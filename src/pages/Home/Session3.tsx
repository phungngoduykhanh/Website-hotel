import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../../assets/images/phongnghi1.jpeg";
import img2 from "../../assets/images/phongnghi2.jpg";
import img3 from "../../assets/images/phongnghi3.jpeg";
import img4 from "../../assets/images/phongnghi4.jpeg";
import img5 from "../../assets/images/phongnghi5.jpg";

export default function 
() {
  return (
<>
<div className='container' data-aos="fade-up" >
  <h1 style={{textAlign:"center",marginTop:"50px"}} >Room & Suites</h1>
  <p style={{textAlign:"center"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
       there live the blind texts. Separated they live in Bookmarksgrove right at the coast 
                                                of the Semantics, a large language ocean.</p>
<div className="row row-ss3">
    <div className="col-6 col-md-4 room-top-ss3 content-ss3">
                    <Link
                      to="/detailroom"
                      className="text-decoration-none text-dark"
                    >
                      <div className="bg-white cafita overflow-hidden p-3 shadow rounded top-ss3 ">
                        <img
                          src={img1}
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
    <Link
                      to="/detailroom"
                      className="text-decoration-none text-dark"
                    >
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
    <Link
                      to="/detailroom"
                      className="text-decoration-none text-dark"
                    >
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
                            2 Adult   1 Child
                          </p>
                        </div>
                      </div>
                    </Link>
    </div>

  <div className="col-6 col-6-ss3 content-ss3 bottom-ss3-content-top">
  <Link
                      to="/detailroom"
                      className="text-decoration-none text-dark"
                    >
                      <div className="bg-white cafita overflow-hidden p-3 shadow rounded bg-white-ss3 ">
                        <img
                          src={img4}
                          alt=""
                          className="w-100 img-fluid img-fluid-ss3"
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
                          Standard Triple Room - Basement
                        </h4>
                        <div className="d-flex justify-content-between">
                          <p
                            className=" mb-1 pt-2"
                            style={{ letterSpacing: "3px" }}
                          >
                            3 Adult
                          </p>
                        </div>
                      </div>
                    </Link>
    </div>
    <div className="col-6 content-ss3 bottom-ss3-content-bottom">
    <Link
                      to="/detailroom"
                      className="text-decoration-none text-dark"
                    >
                      <div className="bg-white cafita overflow-hidden p-3 shadow rounded bg-white-ss3 ">
                        <img
                          src={img5}
                          alt=""
                          className="w-100 img-fluid img-fluid-ss3"
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
                          Quadruple Room
                        </h4>
                        <div className="d-flex justify-content-between">
                          <p
                            className=" mb-1 pt-2"
                            style={{ letterSpacing: "3px" }}
                          >
                            2 Adult
                          </p>
                        </div>
                      </div>
                    </Link>  
    </div>
  </div>
</div>
</>

  )
}
