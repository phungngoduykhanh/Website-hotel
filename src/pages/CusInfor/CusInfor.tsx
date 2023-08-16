import React from "react";
import '../CusInfor/CusInfor.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
type UserSubmitForm = {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
};
export default function CusInfor1() {
    const validationSchema = Yup.object().shape({
        firstname: Yup.string().required('Firstname is required'),
        lastname: Yup.string().required('Lastname is required'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        phone: Yup.string().required('Phone is invalid')
           
    });
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = (data: UserSubmitForm) => {
        console.log(JSON.stringify(data, null, 2));
        alert('You have successfully book room, please check your email!');
    };
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <form onSubmit={handleSubmit(onSubmit)} className="rounded border p-5" style={{ background: '#FFFF' }}>
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
                                    <input {...register('firstname')} type="text" className={`form-control ${errors.firstname ? 'is-invalid' : ''}`} id="inputFirstname" placeholder="First name" />
                                    <div className="invalid-feedback">{errors.firstname?.message}</div>
                                </div>
                                <div className="col-sm-6">
                                    <label >Last name</label>
                                    <span className="text-danger">*</span>
                                    <input {...register('lastname')} type="text" className={`form-control ${errors.lastname ? 'is-invalid' : ''}`} id="inputLastname" placeholder="Last name" />
                                    <div className="invalid-feedback">{errors.lastname?.message}</div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-6">
                                    <label >Email</label>
                                    <span className="text-danger">*</span>
                                    <input {...register('email')} type="text" className={`form-control ${errors.email ? 'is-invalid' : ''}`} id="inputEmail" placeholder="Your email" />
                                    <div className="invalid-feedback">{errors.email?.message}</div>
                                </div>
                                <div className="col-sm-6">
                                    <label >Phone</label>
                                    <span className="text-danger">*</span>
                                    <input {...register('phone')} type="string" className={`form-control ${errors.phone ? 'is-invalid' : ''}`} id="inputPhone" placeholder="Your phone" />
                                    <div className="invalid-feedback">{errors.phone?.message}</div>
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
                                    <button type="submit" className="btn-book text-white p-2 px-4" >Book now</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}