import React, {useState, useEffect} from "react";
import Form from "react-bootstrap/Form";
import "./Sum.css";

export default function Sum() {
  const [selectRooms, setSelectRooms] = useState([]);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const checkoutDate = new Date (currentDate);
    checkoutDate.setDate (currentDate.getDate() + 1);

    const formattedCheckInDate = currentDate.toLocaleDateString("en-GB");
    const formattedCheckOutDate = checkoutDate.toLocaleDateString("en-GB");

    setCheckInDate (formattedCheckInDate);
    setCheckOutDate (formattedCheckOutDate);
  }, []);

  return (
    <div className="summary ">
      <div className="booking" style={{ border: "1px solid", width: "13rem", borderRadius: "10px", backgroundColor:"#f5f6fa", color:"black" }}>
        <div className="s pt-2" style={{ fontWeight: "bold", textAlign: "center" }}>
          Your booking summary
        </div>
        <hr style={{ margin: "10px 10px" }} />
        <Form.Text id="text" muted>
          <div className="row d-column pl-3 pr-3" style={{color:"black"}}>
            <div className="col-lg-12">
              <label className="pull-left" style={{fontWeight:"bold"}}>check in:</label>
              <label className="pull-right">
                <span className="text-form" style={{color:"orange"}}>{checkInDate}</span>
              </label>
            </div>
            <div className="col-lg-12">
              <label className="pull-left" style={{fontWeight:"bold"}}>check out:</label>
              <label className="pull-right">
                <span className="text-form" style={{color:"orange"}}>{checkOutDate}</span>
              </label>
            </div>
            <div className="col-lg-12">
              <label className="pull-left" style={{fontWeight:"bold"}}>Number of people:</label>
              <label className="pull-right">
                <span className="text-form" style={{color:"orange"}}>2</span>
              </label>
            </div>
            <div className="col-lg-12">
              <label className="pull-left" style={{fontWeight:"bold"}}>Number of Room (s):</label>
              <label className="pull-right">
                <span className="text-form" style={{color:"orange"}}>2</span>
              </label>
            </div>
          </div>
        </Form.Text>

        <hr style={{ margin: "14px 10px" }} />

        <Form.Text id="text" muted>
          <div className="row d-column" style={{color:"black"}}>
            <div className="col-lg-12">
              {/* <div className="" style={{fontWeight:"bold"}}>Double Room (x1)</div> */}
              <label className="">
                <span className="text-form" style={{color:"orange"}}></span>
              </label>
            </div>
          </div>
        </Form.Text>
        <a href="#" className="conti">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Continues
        </a>
      </div>
    </div>
  );
}
