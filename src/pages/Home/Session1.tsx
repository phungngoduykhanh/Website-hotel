import React from 'react'
import { useLocation } from 'react-router-dom';
import './home.css';
export default function Session1() {
  const location = useLocation();
  const session1ClassName = location.pathname === '/booking';
  return (
    <section className={`section pb-0 style-input-home ${session1ClassName ?"" :"bg-light"}`}>
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
                    <input type="date" id="checkin_date" className="form-control" />
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
                    <input
                      type="date"
                      id="checkout_date"
                      className="form-control"
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
                        <select name="" id="adults" className="form-control">
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4+</option>
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
                        <select name="" id="children" className="form-control">
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4+</option>
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
    </section>
  )
}
