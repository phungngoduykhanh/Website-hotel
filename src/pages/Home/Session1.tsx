import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './home.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface BookingFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  checkin_date: string;
  checkout_date: string;
  adults: string;
  children: string;
}

const Session1: React.FC = () => {
  const location = useLocation();

  const session1ClassName = location.pathname === '/booking';

  const checkin_date = localStorage.getItem("checkin_date");
  const checkout_date = localStorage.getItem("checkout_date");
  const adults = localStorage.getItem("adults");
  const children = localStorage.getItem("children");

  const BookingForm: React.FC<BookingFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<FormData>({
      checkin_date: checkin_date ?? "",
      checkout_date: checkout_date ?? "",
      adults: adults ?? "",
      children: children ?? "",
    });

    const handleFormSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      onSubmit(formData);
      if (formData.checkin_date === "") {
        toast.warn("Please select Check In Date !");
      }
      else if (formData.checkout_date === "") {
        toast.warn("Please select Check Out Date !");
      }
      else {
        localStorage.setItem("checkout_date", formData.checkout_date);
        localStorage.setItem("checkin_date", formData.checkin_date);
        localStorage.setItem("adults", formData.adults);
        localStorage.setItem("children", formData.children);
        setTimeout(() => {
          window.location.href = '/booking';
        }, 1000);
      }
    };

    const handleInputChange = (id: keyof FormData, value: string | Date) => {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value instanceof Date ? value.toISOString() : value,
      }));
    };

    const handleInputChangeValue = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { id, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    };

    return (
      <section className={`section pb-0 style-input-home ${session1ClassName ? "" : "bg-light"}`}>
        <div className="container">
          <div className="row check-availabilty" id="next">
            <div className="block-32" data-aos="fade-up">
              <form action="#" onSubmit={handleFormSubmit}>
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
                      <DatePicker
                        id="checkin_date"
                        className="form-control"
                        selected={formData.checkin_date !== "" ? new Date(formData.checkin_date) : null}
                        onChange={(date: Date | null) => handleInputChange("checkin_date", date?.toISOString() ?? "")}
                        minDate={new Date()}
                      />
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
                      <DatePicker
                        id="checkout_date"
                        className="form-control"
                        selected={formData.checkout_date !== "" ? new Date(formData.checkout_date) : null}
                        minDate={new Date(formData.checkin_date)}
                        onChange={(date: Date | null) => handleInputChange("checkout_date", date?.toISOString() ?? "")}
                      />
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
                          <select name="" id="adults" className="form-control" 
                            value={formData.adults}
                            onChange={handleInputChangeValue}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="+4">4+</option>
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
                          <select name="" id="children" className="form-control" onChange={handleInputChangeValue} value={formData.children}
                            >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="+4">4+</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 align-self-end" >
                    <button className="btn btn-primary btn-block text-white style-button-home">
                      Check Availabilty
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    )
  }

  return (
    <>
      <BookingForm onSubmit={(formData) => console.log(formData)} />

    </>
  );
};
export default Session1;