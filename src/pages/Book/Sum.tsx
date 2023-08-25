import React from "react";
import Form from "react-bootstrap/Form";
import "./Sum.css";
import { useLocation } from "react-router-dom";

type LocationState = {
    checkIn: string;
    checkOut: string;
    people: number;
};

export default function Sum() {
	const location = useLocation();
	const { checkIn, checkOut, people: peopleCount } = (location.state as LocationState) || {};

	return (
		<div className="summary ">
			<div className="booking" 
				style={{ border: "1px solid", width: "13rem", borderRadius: "10px", backgroundColor: "#f5f6fa", color: "black" }}>

				<div className="s pt-2"
					style={{ fontWeight: "bold", textAlign: "center" }}>
					Your booking summary
				</div>
				<hr style={{ margin: "10px 10px" }} />
				<Form.Text id="text" muted>
					<div className="row d-column pl-3 pr-3" style={{ color: "black" }}>
						<div className="col-lg-12">
							<label className="pull-left" style={{ fontWeight: "bold" }}>check in:</label>
							<label className="pull-right">
								<span className="text-form" style={{ color: "orange" }}>{checkIn}</span>
							</label>
						</div>
						<div className="col-lg-12">
							<label className="pull-left" style={{ fontWeight: "bold" }}>check out:</label>
							<label className="pull-right">
								<span className="text-form" style={{ color: "orange" }}>{checkOut}</span>
							</label>
						</div>
						<div className="col-lg-12">
							<label className="pull-left" style={{ fontWeight: "bold" }}>Number of people:</label>
							<label className="pull-right">
								<span className="text-form" style={{ color: "orange" }}>{peopleCount}</span>
							</label>
						</div>
						<div className="col-lg-12">
							<label className="pull-left" style={{ fontWeight: "bold" }}>Number of Room (s):</label>
							<label className="pull-right">
								<span className="text-form" style={{ color: "orange" }}>2</span>
							</label>
						</div>
					</div>
				</Form.Text>

				<hr style={{ margin: "14px 10px" }} />

				<Form.Text id="text" muted>
					<div className="row d-column" style={{ color: "black" }}>
						<div className="col-lg-12">
							{/* <div className="" style={{fontWeight:"bold"}}>Double Room (x1)</div> */}
							<label className="">
								<span className="text-form" style={{ color: "orange" }}></span>
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
