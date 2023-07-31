import { Link } from 'react-router-dom';
import img1 from "../../assets/images/phongnghi1.jpeg";
import img2 from "../../assets/images/phongnghi2.jpg";
import img3 from "../../assets/images/phongnghi3.jpeg";
import img4 from "../../assets/images/phongnghi4.jpeg";
import img5 from "../../assets/images/phongnghi5.jpg";

import { usePrismicDocumentByUID } from '@prismicio/react';

export default function () {

  const [room1] = usePrismicDocumentByUID('hotelroom',"1");
  console.log(room1);
  
  const [room2] = usePrismicDocumentByUID('hotelroom',"2");
  const [room3] = usePrismicDocumentByUID('hotelroom',"3");
  const [room4] = usePrismicDocumentByUID('hotelroom',"4");
  const [room5] = usePrismicDocumentByUID('hotelroom',"5");
  
  return (
<>
<div className='container' data-aos="fade-up" >
  <h1 style={{textAlign:"center",marginTop:"50px"}} >Room & Suites</h1>
  <p style={{textAlign:"center"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
       there live the blind texts. Separated they live in Bookmarksgrove right at the coast 
                                                of the Semantics, a large language ocean.</p>
<div className="row row-ss3">
    <div className="col-6 col-md-4 room-top-ss3 content-ss3">
      {
        room1 && (
          <Link
          to={`roomdetail/${room1.id}`}
          className="text-decoration-none text-dark"
        >
          <div className="bg-white cafita overflow-hidden p-3 shadow rounded top-ss3 ">
            <img
              src={room1.data.link_img.url}
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
              {room1.data.name_room[0].text}
            </h4>
            <div className="d-flex justify-content-between">
              <p
                className=" mb-1 pt-2 p-top-ss3"
                style={{ letterSpacing: "3px" }}
              >
                {room1.data.people[0].text}
              </p>
            </div>
          </div>
        </Link>
        )
      }
    </div>
    <div className="col-6 col-md-4 room-top-ss3 content-ss3">
    {
        room2 && (
    <Link
                      to={`roomdetail/${room2.id}`}
                      className="text-decoration-none text-dark"
                    >
                      <div className="bg-white cafita overflow-hidden p-3 shadow rounded top-ss3">
                        <img
                          src={room2.data.link_img.url}
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
                          {room2.data.name_room[0].text}
                        </h4>
                        <div className="d-flex justify-content-between">
                          <p
                            className=" mb-1 pt-2 p-top-ss3"
                            style={{ letterSpacing: "3px" }}
                          >
                            {room2.data.people[0].text}
                          </p>
                        </div>
                      </div>
                    </Link>
                       )
                      }
    </div>
    <div className="col-6 col-md-4 room-top-ss3 content-ss3">
    {
        room3 && (
    <Link
                      to={`roomdetail/${room3.id}`}
                      className="text-decoration-none text-dark"
                    >
                      <div className="bg-white cafita overflow-hidden p-3 shadow rounded top-ss3 ">
                        <img
                          src={room3.data.link_img.url}
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
                          {room3.data.name_room[0].text}
                        </h4>
                        <div className="d-flex justify-content-between">
                          <p
                            className=" mb-1 pt-2 p-top-ss3"
                            style={{ letterSpacing: "3px" }}
                          >
                            {room3.data.people[0].text}
                          </p>
                        </div>
                      </div>
                    </Link>
                     )
                    }
    </div>

  <div className="col-6 col-6-ss3 content-ss3 bottom-ss3-content-top">
  {
        room4 && (
  <Link
                      to={`roomdetail/${room4.id}`}
                      className="text-decoration-none text-dark"
                    >
                      <div className="bg-white cafita overflow-hidden p-3 shadow rounded bg-white-ss3 ">
                        <img
                          src={room4.data.link_img.url}
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
                          className="pt-3 mb-1 h4-ss3"
                          style={{
                            textShadow: "1px 0 1px #080808",
                            fontFamily: "Lora, serif",
                            
                          }}
                        >
                          {room4.data.name_room[0].text}
                        </h4>
                        <div className="d-flex justify-content-between">
                          <p
                            className=" mb-1 pt-2 p-ss3"
                            style={{ letterSpacing: "3px" }}
                          >
                            {room4.data.people[0].text}
                          </p>
                        </div>
                      </div>
                    </Link>
                     )
                    }
    </div>
    <div className="col-6 content-ss3 bottom-ss3-content-bottom">
    {
        room5 && (
    <Link
                      to={`roomdetail/${room5.id}`}
                      className="text-decoration-none text-dark"
                    >
                      <div className="bg-white cafita overflow-hidden p-3 shadow rounded bg-white-ss3 ">
                        <img
                          src={room5.data.link_img.url}
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
                          className="pt-3 mb-1 h4-ss3"
                          style={{
                            textShadow: "1px 0 1px #080808",
                            fontFamily: "Lora, serif",
                          }}
                        >
                          {room5.data.name_room[0].text}
                        </h4>
                        <div className="d-flex justify-content-between">
                          <p
                            className=" mb-1 pt-2 p-ss3"
                            style={{ letterSpacing: "3px" }}
                          >
                            {room5.data.people[0].text}
                          </p>
                        </div>
                      </div>
                    </Link>  
                     )
                    }
    </div>
  </div>
</div>
</>

  )
}
