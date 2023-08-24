import React, { ChangeEvent, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './home.css';
export default function Session1() {
	const [checkIn, setCheckIn] = useState<string>("");
	const [checkOut, setCheckOut] = useState<string>("");
	const [adult, setAdult] = useState<number | null>(null);
	const [children, setChildren] = useState<number | null>(null);
	const location = useLocation();
	const session1ClassName = location.pathname === '/booking';

	const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = event.target;

		if (name === "checkIn") {
			setCheckIn(value);
		} else if (name === "checkOut") {
			setCheckOut(value);
		} else if (name === "adult") {
			setAdult(parseInt(value));
		} else if (name === "children") {
			setChildren(parseInt(value));
		}
	};

	const navigate = useNavigate();

	const Show = () => {
		const totalPeople = (adult: number | null, children: number | null): number => {
			const adultCount = adult || 0;
			const childrenCount = children || 0;
			return adultCount + childrenCount;
		};

		const peopleCount = totalPeople(adult, children);

		navigate('/booking', { state: { checkIn, checkOut, people: peopleCount } });
	}

	return (
		<section className={`section pb-0 style-input-home ${session1ClassName ? "" : "bg-light"}`}>
			<div className="container">
				<div className="row check-availabilty" id="next">
					<div className="block-32" data-aos="fade-up">
						<form action="#">
							<div className="row">
								<div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
									<label
										className="font-weight-bold text-black"
									>
										Check In
									</label>
									<div className="field-icon-wrap">
										<div className="icon">
											<span className="icon-calendar" />
										</div>
										<input type="date" id="checkin_date" className="form-control" name="checkIn" onChange={handleChange} value={checkIn} />
									</div>
								</div>
								<div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
									<label
										htmlFor="checkout_date"
										className="font-weight-bold text-black"
									>
										Check Out
									</label>
									<div className="field-icon-wrap">
										<div className="icon">
											<span className="icon-calendar" />
										</div>
										<input type="date" id="checkout_date" className="form-control" name="checkOut" onChange={handleChange} value={checkOut} />
									</div>
								</div>
								<div className="col-md-6 mb-3 mb-md-0 col-lg-3">
									<div className="row">
										<div className="col-md-6 mb-3 mb-md-0">
											<label
												htmlFor="adults"
												className="font-weight-bold text-black"
											>
												Adults
											</label>
											<div className="field-icon-wrap">
												<div className="icon">
													<span className="ion-ios-arrow-down" />
												</div>
												<select name="adult" id="adults" className="form-control" onChange={handleChange} value={adult || ''}>
													<option value="">adult</option>
													<option value="1">1</option>
													<option value="2">2</option>
													<option value="3">3</option>
													<option value="4">4+</option>
												</select>
											</div>
										</div>
										<div className="col-md-6 mb-3 mb-md-0">
											<label
												htmlFor="children"
												className="font-weight-bold text-black"
											>
												Children
											</label>
											<div className="field-icon-wrap">

												<div className="icon">
													<span className="ion-ios-arrow-down" />
												</div>
												<select name="children" id="children" className="form-control" onChange={handleChange} value={children || ''}>
													<option value="">children</option>
													<option value="1">1</option>
													<option value="2">2</option>
													<option value="3">3</option>
													<option value="4">4+</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-3 align-self-end" >
									<button className="btn btn-primary btn-block text-white style-button-home" onClick={Show}>
										Check Availabilty
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
