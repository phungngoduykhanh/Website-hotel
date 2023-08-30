import React from "react";
import Form from "react-bootstrap/Form";
import "./Sum.css";
import { useLocation } from "react-router-dom";
import { Room as SelectedRoom } from "./SelectRoom";

type LocationState = {
	checkin_date: string;
	checkout_date: string;
	people: number;
};

type SumProps = {
	selectedRooms: SelectedRoom[];
};

type Room = {
	roomname: string;
	price: number;
	room_id: string;
	size: string;
	people: number;
	quantity: number;
};

export default function Sum({ selectedRooms }: SumProps) {
	const location = useLocation();
	const checkin_date_from_storage = localStorage.getItem("checkin_date");
	const checkout_date_from_storage = localStorage.getItem("checkout_date");
	const adults_from_storage = localStorage.getItem("adults");
	const children_from_storage = localStorage.getItem("children");

	const {
		checkin_date = checkin_date_from_storage || "",
		checkout_date = checkout_date_from_storage || "",
		people: peopleCount = (adults_from_storage && children_from_storage) ? parseInt(adults_from_storage) + parseInt(children_from_storage) : 0,
	} = (location.state as LocationState) || {};

	const total = selectedRooms.reduce((acc, room) => acc + Number(room.price), 0);

	return (
		<div className="summary ">
			<div
				className="booking"
				style={{
					border: "1px solid",
					width: "13rem",
					borderRadius: "10px",
					backgroundColor: "#f5f6fa",
					color: "black",
				}}
			>
				<div
					className="s pt-2"
					style={{ fontWeight: "bold", textAlign: "center" }}
				>
					Your booking summary
				</div>
				<hr style={{ margin: "10px 10px" }} />
				<Form.Text id="text" muted>
					<div className="row d-column pl-3 pr-3" style={{ color: "black" }}>
						<div className="col-lg-12">
							<label className="pull-left" style={{ fontWeight: "bold" }}>
								Check in:
							</label>
							<label className="pull-right">
								<span className="text-form" style={{ color: "orange" }}>
									{new Date(checkin_date).toLocaleDateString()}
								</span>
							</label>
						</div>
						<div className="col-lg-12">
							<label className="pull-left" style={{ fontWeight: "bold" }}>
								Check out:
							</label>
							<label className="pull-right">
								<span className="text-form" style={{ color: "orange" }}>
									{new Date(checkout_date).toLocaleDateString()}
								</span>
							</label>
						</div>
						<div className="col-lg-12">
							<label className="pull-left" style={{ fontWeight: "bold" }}>
								Number of people:
							</label>
							<label className="pull-right">
								<span className="text-form" style={{ color: "orange" }}>
									{peopleCount}
								</span>
							</label>
						</div>
						<div className="col-lg-12">
							<label className="pull-left" style={{ fontWeight: "bold" }}>
								Number of Room (s):
							</label>
							<label className="pull-right">
								<span className="text-form" style={{ color: "orange" }}>
									{selectedRooms.length}
								</span>
							</label>
						</div>
					</div>
				</Form.Text>

				<hr style={{ margin: "14px 10px" }} />

				<Form.Text id="text" muted>
					<div className="row d-column" style={{ color: "black" }}>
						{Object.values(selectedRooms.reduce((roomMap: Record<string, Room>, room) => {
							if (roomMap[room.room_id]) {
								roomMap[room.room_id].quantity++;
							} else {
								roomMap[room.room_id] = { ...room, quantity: 1 };
							}
							return roomMap;
						}, {} as Record<string, Room>)).map((room: Room) => (
							<div className="col-lg-12" key={room.room_id}>
								<div className="col-lg-12">
									<label className="text-form" style={{ fontWeight: "bold" }}>
										{room.roomname}
									</label>&emsp;
									<span >(x{room.quantity})</span>
									<div className="text-form">
										{room.size}
									</div>
									<div className="text-form">
										{room.people} Adults
									</div>
									<label className="text-form">
										Price
									</label>
									<label className="pull-right">
										<span className="text-form" style={{ color: "orange" }}>
											{room.price * room.quantity}
										</span>
									</label>
								</div>
								<hr style={{ margin: "14px 10px" }} />
							</div>
						))}
					</div>
				</Form.Text>


				<div className="col-lg-12">
					<div>
						Grand Total: {total}
					</div>
					<a href="/cusinfor" className="conti">
						Continues
					</a>
				</div>
			</div>
		</div>
	);
}
