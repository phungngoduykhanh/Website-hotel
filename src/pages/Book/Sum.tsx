import React from "react";
import Form from "react-bootstrap/Form";

export default function Sum() {
  return (
    <div className="summary p-5">
      <div className="booking "
        style={{ border: "1px solid", width: "13rem", borderRadius: "10px" }}>

        <div className="s pt-2"
          style={{ fontWeight: "bold", textAlign: "center" }}>
          Your booking summary
        </div>
        <hr style={{ margin: "10px 10px" }} />
        <Form.Text id="text" muted>
          <div className="row d-column pl-3 pr-3">
            <div className="col-lg-12">
              <label className="pull-left" style={{fontWeight:"bold"}}>check in:</label>
              <label className="pull-right">
                <span className="text-form" style={{color:"orange"}}>08/09/2023</span>
              </label>
            </div>
            <div className="col-lg-12">
              <label className="pull-left" style={{fontWeight:"bold"}}>check out:</label>
              <label className="pull-right">
                <span className="text-form" style={{color:"orange"}}>10/09/2023</span>
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
          <div className="inf d-column">
            <div className="col-lg-12">
              <div className="" style={{fontWeight:"bold"}}>Double Room (x1)</div>
              <label className="">
                <span className="text-form" style={{color:"orange"}}></span>
              </label>
            </div>
          </div>
        </Form.Text>
      </div>
    </div>
  );
}
