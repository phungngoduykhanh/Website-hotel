import React from "react";
import '../CusInfor/CusInfor.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
export default function CusInfor1() {
    const validationSchema = Yup.object().shape({
        firstname: Yup.string().required('Firstname is required'),
        lastname: Yup.string().required('Lastname is required'),
        email: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
        phone: Yup.number().required('Phone is required')
      });
      const {
        handleSubmit,
        formState: { errors }
      } = useForm<UserSubmitForm>({
        resolver: yupResolver(validationSchema)
      });
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <form className="rounded border p-5" style={{background:'#FFFF'}}>
                            <div className="form-group row">
                                <div className="col-sm-12">
                                    <h3 style={{ fontFamily: 'Segoe UI' }}>Customer Information</h3>
                                    <p>Complete the reservation with your personal information. Book directly with us for your stay at the best price</p>
                                    <hr />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-6">
                                    <label >First name</label>
                                    <span className="text-danger">*</span>
                                    <input type="text" className="form-control" id="inputFirstname" placeholder="First name" />
                                </div>
                                <div className="col-sm-6">
                                    <label >Last name</label>
                                    <span className="text-danger">*</span>
                                    <input type="text" className="form-control" id="inputLastname" placeholder="Last name" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-6">
                                    <label >Email</label>
                                    <span className="text-danger">*</span>
                                    <input type="text" className="form-control" id="inputEmail" placeholder="Your email" />
                                </div>
                                <div className="col-sm-6">
                                    <label >Phone</label>
                                    <span className="text-danger">*</span>
                                    <input type="number" className="form-control" id="inputPhone" placeholder="Your phone" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-6">
                                    <label >City</label><br />
                                    <select className="form-select">
                                        <option selected>Your City </option>
                                        <option>Da Lat</option>
                                        <option>Da Nang</option>
                                        <option>Ho Chi Minh </option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <label>Check in (Reference time)</label><br />
                                    <select className="form-select">
                                        <option selected>Option</option>
                                        <option>15:00</option>
                                        <option>13:30</option>
                                        <option>11:00</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-12">
                                    <label >Any personal request ? (Optional)</label>
                                    <textarea className="form-control" id="inputRequest" placeholder="Any personal request ?" />
                                </div>
                            </div>
                            <div className="form-group row text-center">
                                <div className="col-sm-12">
                                    <button type="submit" className="btn-book text-white p-2 px-4">Book now</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}